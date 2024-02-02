const axios = require("axios");

module.exports = {
  config: {
    name: "audio",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "audio to text"
    },
    category: "image",
    guide: {
      en: "{pn} reply to audio."
    },
    envConfig: {}
  },


  onStart: async function ({ api, event }) {
    if (event.type === "message_reply") {
      if (event.messageReply.attachments[0] && event.messageReply.attachments[0].type === "audio") {
        const audioUrl = event.messageReply.attachments[0].url;

        try {
          api.sendMessage("🔄 | Converting audio to text, please wait...", event.threadID);

          const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/voice2text?url=${encodeURIComponent(audioUrl)}`);
          const text = response.data.transcription;

          if (text) {
            api.sendMessage(`Transcribe: ${text}`, event.threadID, event.messageID);
          } else {
            api.sendMessage("❌ | Unable to convert audio to text.", event.threadID, event.messageID);
          }
        } catch (error) {
          console.error("❌ | Error in Audio-to-Text conversion:", error);
          api.sendMessage("❌ | An error occurred while converting audio to text.", event.threadID, event.messageID);
        }
      } else {
        api.sendMessage("❌ | Please reply to an audio message for conversion.", event.threadID, event.messageID);
      }
    }
  },
};
