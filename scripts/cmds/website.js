const axios = require("axios");
const fs = require("fs");

module.exports = {
  config: {
    name: "screenshot",
    aliases: ['ss'],
    version: "1.0",
    author: "AceGun×Rishad",
    shortDescription: {
      en: "Take a screenshot of a website"
    },
    longDescription: {
      en: "This command takes a screenshot of a website and sends it."
    },
    category: "utility",
    guide: {
      en: "{pn} <website-url>"
    }
  },

  onStart: async function({ api, event, message, args }) {
    const websiteUrl = args[0];

    if (!websiteUrl) {
      return message.reply("please provide a website URL!");
    }

    try {
      const apiUrl = `https://api.popcat.xyz/screenshot?url=${encodeURIComponent(websiteUrl)}`;
      const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

      fs.writeFileSync("screenshot.png", response.data);

      api.sendMessage({
        attachment: fs.createReadStream("screenshot.png")
      }, event.threadID, (err, messageInfo) => {
        if (err) {
          console.error("Error occurred while sending the screenshot:", err);
        }
        fs.unlinkSync("screenshot.png");
      });
    } catch (error) {
      console.error("Error occurred while taking a screenshot:", error);
      message.reply("an error occurred while taking the screenshot. Please try again.");
    }
  }
};