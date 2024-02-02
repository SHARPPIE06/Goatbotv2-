const axios = require("axios");

module.exports = {
  config: {
    name: "music",
    version: "1.0",
    author: "MILAN",
    countDown: 10,
    role: 0,
    shortDescription: {
      vi: "Tìm kiếm nhạc và nghe.",
      en: "Search for music and listen."
    },
    longDescription: {
      vi: "Lệnh `music` cho phép bạn tìm kiếm bản nhạc và nghe trực tiếp mà không cần trả lời bằng số.",
      en: "The `music` command allows you search the music and listen directly without replying with numbers."
    },
    category: "media",
    guide: {
      en: "{pn} <song name>"
    }
  },

  onStart: async function ({ event, api, args, message }) {
    try {
      const song = args.join(' ');
      if (!song) {
        return api.sendMessage("Search a name baka!", event.threadID, event.messageID);
      }
      api.sendMessage("✅| Searching for " + song + "...", event.threadID, async (err, info) => {
        const response = await axios.get(`https://milanbhandari.imageapi.repl.co/music`, {
          params: {
            query: song
          }
        });
        const title = response.data.musicTitle;
        api.unsendMessage(info.messageID);
        api.sendMessage({
          body: `╭── 🎶 Title ────⊰\n╰${response.data.musicTitle}`,
          attachment: await global.utils.getStreamFromURL(response.data.musicUrl)
        }, event.threadID);
      });
    } catch (error) {
      console.error(error);
      api.sendMessage(`Error: ${error}`, event.threadID);
    }
  }
}