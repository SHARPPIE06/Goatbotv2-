const axios = require("axios");

module.exports = {
  config: {
    name: "neko2",
    aliases: ["neko2"],
    version: "1.0",
    author: "",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "ask neko",
    },
    longDescription: {
      en: "ask neko",
    },
    category: "box chat",
    guide: {
      en: "{pn}ask neko",
    },
  },
  onStart: async function ({ api, event, args }) {
    const ask = args.join(" ");
    try {
      const response = await axios.get(`https://sim.ainz-project.repl.co/sim?ask=${ask}`);
      const ans = response.data.respond;
      api.sendMessage(ans, event.threadID, event.messageID);
    } catch (error) {
      console.log(error);
      api.sendMessage("Sorry, something went wrong. Please try again later.", event.threadID);
    }
  },
};