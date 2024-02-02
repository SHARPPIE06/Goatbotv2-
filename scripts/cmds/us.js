 const axios = require('axios');

module.exports = {
  config: {
    name: "us",
    version: "1.0",
    author: "OtinXSandip",
    countDown: 10,
    role: 0,
    shortDescription: "get couple vids",
    longDescription: "get couple videos",
    category: "love",
    guide: "{pn}"
  },

  onStart: async function ({ message, args }) {
    const BASE_URL = "https://sandip.otinx.repl.co/us/apikey=Sandy";
    message.reply("✅ Please wait for the video:) "); 

    try {
      let res = await axios.get(BASE_URL);
      let us = res.data.url;
      
      const form = {
        body: ""
      };

      if (us) {
        form.attachment = await global.utils.getStreamFromURL(us);
      }
      
      message.reply(form); 
    } catch (e) {
      message.reply("An error occurred while sending the video..");
      console.error(e);
    }
  }
};