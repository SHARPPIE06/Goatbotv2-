const axios = require("axios");

module.exports = {
  config: {
    name: "lyrics",
    version: "1.3",
    author: "Otin",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: "lyrics",
    },
    category: "media",
    guide: {
      en: "{pn} <title>",
    },
  },

  onChat: async function ({ api, event }) {
    const words = event.body.toLowerCase().split(" ");
    if (words[0] === "lyrics") {
      const args = words.slice(1);
      this.onStart({ api, event, args });
    }
  },

  onStart: async function ({ api, event, args }) {
    try {
 
      const lyrics = args.join(' ');
      if (!lyrics) {
        return api.sendMessage("Please provide a song title.", event.threadID, event.messageID);
      }

   api.setMessageReaction("⌛️", event.messageID, () => { }, true);

      const { data } = await axios.get(`https://nemobot.otinxshiva10.repl.co/lyrics`, {
        params: {
          query: lyrics 
        }
      });

      api.setMessageReaction("🩶", event.messageID, () => { }, true);

      if (data.lyrics) {
        const messageData = {
          body: data.lyrics,
          attachment: await global.utils.getStreamFromURL(data.image)
        };
        return api.sendMessage(messageData, event.threadID, event.messageID);
      } else {
        return api.sendMessage("Lyrics not found for this song.", event.threadID, event.messageID);
      }
    } catch (error) {
      console.error(error);
      return api.sendMessage("An error occurred while fetching lyrics!", event.threadID, event.messageID);
    }
  }
};