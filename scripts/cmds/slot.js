module.exports = {
  config: {
    name: "slot",
    description: "Play a slot machine game",
    guid: "!slot <bet>",
    category: "games",
//This code moded by al-rulex (loufi) do not change my credit 
  
  },
  onStart: async function ({ args, message, usersData, event }) {
    const bet = parseInt(args[0]);
    const user = event.senderID
    const userData = await usersData.get(event.senderID)
    
    if (isNaN(bet) || bet <= 0) {
      return message.reply("Invalid bet amount. Please enter a positive number.");
    }
    
    if (bet > userData.money) {
      return message.reply("You don't have enough money to make that bet.");
    }
    
    const slots = ["🍒", "🍊", "🍋", "🍉", "🍇", "🍎", "🍓", "🍍"];
    const results = [];
    
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * slots.length);
      results.push(slots[randomIndex]);
    }
    
    const winAmounts = {
      "🍒🍒🍒": 10 * bet,
      "🍊🍊🍊": 20 * bet,
      "🍋🍋🍋": 30 * bet,
      "🍉🍉🍉": 50 * bet,
      "🍇🍇🍇": 100 * bet,
      "🍎🍎🍎": 200 * bet,
      "🍓🍓🍓": 500 * bet,
      "🍍🍍🍍": 1000 * bet
    };
    
    const resultString = results.join(" ");
    
    if (winAmounts[resultString]) {
      const winAmount = winAmounts[resultString];
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`You won ${winAmount}! ${resultString}`);
    } else {
      userData.money -= bet;
      await usersData.set(event.senderID, userData);
      return message.reply(`You lost ${bet}. ${resultString}`);
    }
  }
};