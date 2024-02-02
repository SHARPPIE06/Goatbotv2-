module.exports = {
  config: {

    name: "rps",
    version: "1.3",
    author: "AceGun",
    role: 0,
    shortDescription: "Play rock-paper-scissors game with the bot.",
    LongDescription: "",
    cooldown: "5",
    category: "game",
    guide: "{pn} <✊|✋|✌️>"
  },
  onStart: async function ({ message, args }) {
    const choices = {
      "✊": "rock",
      "✋": "paper",
      "✌️": "scissors"
    };
    

    const userChoiceEmoji = args[0];
    const userChoice = choices[userChoiceEmoji];

    if (!userChoice || !Object.values(choices).includes(userChoice.toLowerCase())) {
      return message.reply("Please choose either ✊, ✋, or ✌️!");
    }

    const botChoice = choices[Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)]];

    let botChoiceImg = "";
    if (botChoice === "rock") {
      botChoiceImg = "https://i.imgur.com/uAEjEMr.gif";
    } else if (botChoice === "paper") {
      botChoiceImg = "https://i.imgur.com/0YEYqXC.gif";
    } else if (botChoice === "scissors") {
      botChoiceImg = "https://i.imgur.com/y1t798S.gif";
    }

    const attachment = await global.utils.getStreamFromURL(botChoiceImg);
    message.reply({ attachment });

    setTimeout(() => {
      if (userChoice.toLowerCase() === botChoice) {
        message.reply("No one won 😞, It's a tie!");
      } else if (
        (userChoice.toLowerCase() === "rock" && botChoice === "scissors") ||
        (userChoice.toLowerCase() === "paper" && botChoice === "rock") ||
        (userChoice.toLowerCase() === "scissors" && botChoice === "paper")
      ) {
        message.reply("🎉 congratulations! You won!");
      } else {
        message.reply("😏I win! Better luck next time!");
      }
    }, 3800);
  },
};