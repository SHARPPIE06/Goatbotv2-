const axios = require("axios");

module.exports = {
  config: {
    name: "asmit3",
    version: "1.0",
    author: "asmit",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Simple Response AI"
    },
    longDescription: {
      en: "A simple AI that responds to user prompts."
    },
    category: "ai",
    guide: {
      en: "{pn} ask."
    },
    envConfig: {}
  },

  onStart: async function ({ api, event }) {
    // Check if the message is from the bot itself to avoid infinite loops
    if (event.senderID === api.getCurrentUserID()) {
      return;
    }

    const userMessage = event.body;

    api.sendMessage("🗨️ | asmit AI is thinking...", event.threadID, event.messageID);

    try {
      // Replace the API URL with the correct endpoint
      const { data } = await axios.post("https://hazeyy-apis-combine.kyrinwu.repl.co/api/girlfriend", {
        messages: [{ role: "user", content: userMessage }]
      });

      if (data && data.content) {
        const formattedResponse = `🤖 Simple Response AI\n\n❓ Asked: '${userMessage}'\n\n💬 Response: ${data.content}`;
        api.sendMessage(formattedResponse, event.threadID, event.messageID);
      } else {
        api.sendMessage("🚫 API response is empty or undefined.", event.threadID);
      }
    } catch (error) {
      console.error("🚫 Error in Simple Response AI:", error);
      api.sendMessage("🚫 An error occurred while processing the Simple Response AI.", event.threadID, event.messageID);
    }
  },
};