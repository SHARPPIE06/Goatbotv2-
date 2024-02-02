
module.exports = {
  config: {
    name: "respect", 
    version: "1.0",
    author: "ZenAgatsuma",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: {
          en: "{pn}"
      }
  },
 
  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);
 
      const permission = ["100049442797056"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "Only my admin Asmit Adhikari can do this💗😗",
          event.threadID,
          event.messageID
        );
      }
 
      const threadID = event.threadID;
      const adminID = event.senderID;
 
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);
 
      api.sendMessage(
        `🫡 I respect you my boss!\here you go as admin in this GroupChat.`,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("❗An error occurred while promoting to admin.", event.threadID);
    }
  },
};