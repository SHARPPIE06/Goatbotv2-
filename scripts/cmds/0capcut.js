
const axios = require('axios');

module.exports = {
  config: {
    name: "capcut",
    aliases: ["pornedit"],
    version: "1.0.3",
    author: "Kushal-Don",
    countDown: 5,
    role: 0,
    shortDescription: "Random edited po*n",
    longDescription: "get a ramdom edited po*n from api",
    category: "Video",
    guide: {
      en: "{pn} "
    }
  },

  onStart: async function ({ event, message, getLang, threadsData, api, args }) {
    const BASE_URL = "https://api.kushal-projects.repl.co/sexy/capcut-edit";
    await message.reply("🌟| please wait processing your video.. and dont forget to rate this edit after watched...");
    try {
      let res = await axios.get(BASE_URL);
      let vid = res.data.link;
      const form = {
        body: ""
      };
      if (vid) {
        form.attachment = await global.utils.getStreamFromURL(vid);
      }
      message.reply(form);
    } catch (e) {
      message.reply("❌| api is updated or changed please contact kushal don for new one.");
      console.log(e);
    }
  }
};