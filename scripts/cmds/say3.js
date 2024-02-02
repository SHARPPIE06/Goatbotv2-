
const axios = require("axios");

module.exports = {
  config: {
    name: "say3",
    version: "1.1",
    author: "Otinxsandip",
    countDown: 5,
    role: 0,
    longDescription: "voice",
    category: "ai"
  },

  onStart: async function ({ api, event, args, getLang, message, usersData }) {
    try {
      const text = event.type === 'message_reply' ? event.messageReply.body : args.join(' ');

      const link = `https://sandyapi.otinxsandeep.repl.co/say?text=${encodeURIComponent(text)}`;
   
  message.reply({
        body: 'here is ur tts',
        attachment: await global.utils.getStreamFromURL(link)
      });
    } catch (error) {
      console.error(error);
    }
  }
};