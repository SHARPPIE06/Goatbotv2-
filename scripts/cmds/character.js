const axios = require('axios');

module.exports = {
  config: {
    name: "character",
    version: "1.1",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Get anime character information."
    },
    longDescription: {
      en: "Get anime character information."
    },
    category: "utility",
    guide: {
      en: "{pn} <character name>"
    },
    envConfig: {}
  },

  onStart: async function ({ message, args, api }) {
    try {
      const characterName = args.join(' ');

      if (!characterName) {
        throw new Error("Please provide a valid anime character name. Usage: /character <character name>");
      }

      const searchingMessage = await message.reply('🔎 | Searching for anime character, please wait');

      const apiUrl = `https://api.safone.dev/anime/character?query=${encodeURIComponent(characterName)}`;
      const response = await axios.get(apiUrl);
      console.log("API Response:", response.data);

      if (searchingMessage.messageID) {
        api.unsendMessage(searchingMessage.messageID);
      }

      const characterData = response.data;

      if (!characterData || !characterData.name || !characterData.age || !characterData.gender || !characterData.height || !characterData.description || !characterData.image || !characterData.image.large || !characterData.media) {
        throw new Error("Invalid data received from the anime character API");
      }

      const englishTitle = characterData.media.edges[0].node.title.english;
      const nativeName = characterData.name.native;
      const characterMessage = `==「 Anime Character Info 」==\n\n╭「 Name 」: ${characterData.name.full}\n│❏JP Name: ${nativeName}\n│❏Age: ${characterData.age}\n│❏ID: ${characterData.media.edges[0].node.id}\n│❏Gender: ${characterData.gender}\n│❏Height: ${characterData.height}\n│❏Anime: ${englishTitle}\n╰———————————\n\n❏Description: ${characterData.description}`;

      message.reply({
        body: characterMessage,
        attachment: await global.utils.getStreamFromURL(characterData.image.large)
      });
    } catch (error) {
      console.error("Error fetching anime character data:", error.message);
      message.reply(`An error occurred: ${error.message}`);
    }
  }
};