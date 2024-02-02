const axios = require("axios");

module.exports = {
  config: {
    name: "chat",
    version: "1.1",
    author: "JARiF",
    category: "simSimi-bn",
    cooldown: 0,
    role: 0,
    guide: {
      en: "{p}chat hi\nfor deleting: {p}chat delete hi\nfor teaching: {p}chat teach hi | hello"
    },
  },
  onStart: async function ({ args, message }) {
    try {
      const subCommand = args[0];

      if (subCommand === 'teach') {
        const content = args.slice(1).join(" ").split("|").map((item) => item.trim());
        const question = content[0];
        const answer = content[1];
        
        if (!question || !answer) {
          return message.reply("Please provide both the question and the answer separated by '|'.");
        }
        
        try {
          const teachUrl = `https://simsimi.vyturex.com/teach?ques=${encodeURIComponent(question)}&ans=${encodeURIComponent(answer)}`;
          const teachResponse = await axios.get(teachUrl);
          message.reply(teachResponse.data);
        } catch (error) {
          console.error(error);
          message.reply("Try again later dear.");
        }
      } else if (subCommand === 'delete') {
        try {
          const questionToDelete = args.slice(1).join(' ');
          if (!questionToDelete) {
            message.reply('Please provide the question you want to delete.');
            return;
          }
  
          const deleteUrl = `https://simsimi.vyturex.com/delete?ques=${encodeURIComponent(questionToDelete)}`;
          const deleteResponse = await axios.get(deleteUrl);
  
          message.reply(deleteResponse.data);
          
        } catch (error) {
          console.error(error);
          message.reply(error.message);
        }
      } else {
        const name = args[0];

        try {
          const response = await axios.get(`https://simsimi.vyturex.com/chat?ques=${name}`);
          const r = response.data;
          message.reply(r);
        } catch (error) {
          console.error(error);
          message.reply('Oops! An error occurred.');
        }
      }
    } catch (error) {
      message.reply('Oops! An error occurred: ' + error.message);
    }
  },
};
