const axios = require('axios');

module.exports = {
  config: {
    name: "hotie",
    version: "1.0",
    author: "OtinXSandip",
    countDown: 5,
    role: 0,
    shortDescription: "get hot videos",
    longDescription: "get hot videos",
    category: "Image",
    guide: "{pn}"
  },

  onStart: async function ({ message, args }) {
    const BASE_URL = `https://milanbhandari.imageapi.repl.co/shoti`;
    await message.reply("🔍lemme show you my admin's chicks😍"); 
    try {
      let res = await axios.get(BASE_URL);
      let shoti = res.data.videoUrl;
      const form = {
        body: ``
      };
      if (shoti) {
        form.attachment = await global.utils.getStreamFromURL(shoti);
      }
      message.reply(form); 
    } catch (e) {
      message.reply(`something went wrong`);
      console.log(e);
    }
  }
};