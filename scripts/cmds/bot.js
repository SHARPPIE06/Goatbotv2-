const fs = require('fs');

module.exports = {
  config: {
    name: "bot",
    version: "1.0",
    author: "Sandip",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "auto bot reply to your message",
    category: "no prefix",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "bot":
          const replies = [
            "कति बोलाउँ छेउ मलाई ",
            "van Kinw bolako kam napako manxey ?",
            "Hjr babe 💋😘",
            "Mero maya lagxa ho jati bela ni bolako bolai gareko maya 🙈",
            "गुला खा ",
            "बोल्दिन पैला nude पठा अनि मात्र बोल्छु",
            "तैंले न्यू खोजेको हो क्या ?😒",
            "लाडो खा मुजि कति Bot-Bot गरेको छक्का",
            "उ मेरो डार्लिङ ले बोलायो मलाई, भन डार्लिङ 😝😀",
            "😑",
            "यो मान्छे कति सेक्सी छ यार🤤",
            "vana ex jathi",
            " हुम्म,hum!",
            "के भो",
            "yes how can i help you sir,Mam😀",
          ];
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
          });
          break;
        default:
          return; 
      }
    }
  },
};