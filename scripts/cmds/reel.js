const axios = require('axios');
const fs = require('fs');

module.exports = {
  config: {
    name: "insta",
    version: "1.0",
    author: "Rishad | rehat--",
    countDown: 15,
    role: 0,
    longDescription: "Download instagram video.",
    category: "media",
    guide: {
      en: "{pn} link"
    }
  },

  onStart: async function ({ message, args }) {
    const link = args.join(" ");
    if (!link) {
      return message.reply("Please provide the link to the instagram video.");
    }

    const API_URL = `https://for-devs.rishadapis.repl.co/api/instadl?url=${encodeURIComponent(link)}&apikey=fuck`;
    message.reply("⬇ | NeMo downloading the video for you");

    try {
      const response = await axios.get(API_URL);
      const videoUrl = response.data.video;

      if (videoUrl) {
        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(__dirname + '/cache/video.mp4', Buffer.from(videoResponse.data));
        message.reply({ body: "", attachment: fs.createReadStream(__dirname + '/cache/video.mp4') });
      } else {
        message.reply("Sorry, the Facebook video could not be downloaded.");
      }
    } catch (error) {
      message.reply("An error occured.");
    }
  }
};