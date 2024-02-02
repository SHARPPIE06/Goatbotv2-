const axios = require("axios");

module.exports = {
  config: {
    name: "prompt",
    aliases: ["pt"],
    version: "1.0",
    role: 0,
    author: "NTKhang",
    countDown: 5,
    category: "ai",
    shortDescription: "Provides Prompt",
    longDescription: "Converts an image to a prompt.",
    guide: {
      en: "<reply to an image>",
    },
  },

  onStart: async function ({ event, message, api }) {
    try {
      const imageUrl = event.messageReply?.attachments[0]?.url;

      if (imageUrl) {
        const waitMessage = await message.reply("Please wait...");

        try {
          const response = await axios.get(
            `https://api.tantrik-apis.repl.co/imagetoprompt?imageUrl=${encodeURIComponent(
              imageUrl
            )}&apikey=8kkmMgb5knwHjALe`
          );

          const description = response.data.description;
          if (description) {
            message.reply(`${description}`);
          } else {
            message.reply("Failed to get a prompt from the image.");
          }
        } catch (error) {
          console.error(error);
          message.reply("An error occurred while processing the image.");
        }

        api.unsendMessage(waitMessage.messageID);
      } else {
        return message.reply("⚠️ Please reply to an image to generate a prompt.");
      }
    } catch (error) {
      console.error(error);
      message.reply("An error occurred.");
    }
  },
};