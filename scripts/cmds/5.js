 const axios = require("axios");

 module.exports = {
  config: {
    name: "5",
    version: "1.1",
    author: "OtinXSandip",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: 'Text to Image'
    },
    longDescription: {
      en: "Text to image"
    },
    category: "image",
    guide: {
      en: '{pn} your prompt | Type models 1 - 56'
    }
  },
  onStart: async function ({ message, api, args, event }) {
    const text = args.join(' ');
    
    if (!text) {
      return message.reply("😡Please provide a prompt with models");
    }
    
    const [prompt, model] = text.split('|').map((text) => text.trim());
    const puti = model || "5";
    const baseURL = `https://sandyapi.otinxsandeep.repl.co/jeevan?prompt=${prompt}&model=${puti}`;

    api.setMessageReaction("⏳", event.messageID, () => {}, true);
    
    message.reply("✅| Generating please wait.", async (err, info) => {
      message.reply({
        attachment: await global.utils.getStreamFromURL(baseURL)
      });
      let ui = info.messageID;
      message.unsend(ui);
      api.setMessageReaction("✅", event.messageID, () => {}, true);
    });
  }
};