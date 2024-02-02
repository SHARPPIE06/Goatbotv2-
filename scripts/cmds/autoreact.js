module.exports = {
  config: {
    name: "autoreact",
    author: "OtinXSandip",
    version: "1.0",
    countDown: 5,
    role: 0,
    shortDescription: "Auto React",
    longDescription: " ",
    category: "System",
  },
  onStart: async function () {},
  onChat: async function ({ event, api }) {
    const message = event.body.toLowerCase();
    const reactions = ["💀", "🙄", "🤭","🥺","😶","😝","👿","🤓","🥶","🗿","😾","🤪","🤬","🤫","😼","😶‍🌫️","😎","🤦","💅","👀","☠️","🧠","👺","🤡","🤒","🤧","😫","😇","🥳","😭","💗",]; 

    if (["what", "hello", "ai", "who", "tep", "bot", "lol", "hi", "morning", "sup", "okay", "geh", "fuck", "you", "idiot", "lmao", "gpt", "help", "potangina", "he","sandip", "fuck","ah","ok","asmit",].some((word) => message.includes(word))) {
      const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
      api.setMessageReaction(randomReaction, event.messageID, event.threadID,api);
    }
  },
};