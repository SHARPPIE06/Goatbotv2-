module.exports = {
  config: {
    name: "users",
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "Displays the total number of users of the bot."
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
     const allThreads = await threadsData.getAll();
      api.sendMessage(`Hello Boss, the bot currently has\n~ ${allUsers.length} users  \n~ ${allThreads.length} groups`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};