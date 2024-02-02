module.exports = {
 config: {
  name: "join",
  version: "1.0.0",
  author: "Remade code by Jaei don't cry",
  countDown: 0,
    role: 0,
  shortDescription: "Add User To The Group",
  usages: "Join <threadID>",
  category: "chat box",
},
langs: {
		en: {
			hello: "Hi this join command is still in development",
			helloWithName: ""
		},// English language
	},
  onStart: async function ({ api, event, args }) {
    const threadID = args.join("");
    const senderID = event.senderID;

    // Check if the user did not type the threadID
    if (!threadID) {
      api.sendMessage(`Please provide the thread ID`, event.threadID);
      return;
    }


    // Check if the threadID is a letter and not a number
    if (/^[a-zA-Z]+$/.test(threadID)) {
      api.sendMessage("The thread ID you provided must be a number.", event.threadID);
      return;
    }


if(threadID.length < 16 || threadID.length > 16) {
  api.sendMessage("Thread ID Must Be Exactly 16 Digit Number.", event.threadID);
  return;
}




if (threadID.toString().length === 16) {
  api.sendMessage(`Please wait while adding you to the Thread ID: “${threadID}”.`, event.threadID);
  }

 

    try {
      await api.addUserToGroup(senderID, threadID);
      api.sendMessage(`${senderID} You have been added to the “${threadID}” Group — If You don't see the group chat message try find It in message requests`, event.threadID);
    } catch (e) {
      // Check if the error is caused by the user not being friends with the bot
      if (e.message === "User is not friends with bot") {
        api.sendMessage(`Please make sure that you are friends with this bot in Facebook.`, event.threadID);
      } else {
        // Otherwise, send a generic error message
        api.sendMessage(`An error occurred Wlwhile adding you to the “${threadID}” group — Maybe your already in the group^^`, event.threadID);
      }
    }
  }
};