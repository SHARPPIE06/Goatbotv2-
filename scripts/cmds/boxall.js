module.exports = {
  config: {
    name: "boxall",
    version: "1.0",
    author: "Subash",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "Gọi tất cả thành viên trong nhóm",
      en: "Mention all members in the group",
    },
    longDescription: {
      vi: "Gọi tất cả thành viên trong nhóm để nhắc nhở hoặc thông báo.",
      en: "Mention all members in the group for reminders or announcements.",
    },
    category: "info",
    guide: {
      en: "{pn}",
    },
  },

  onStart: async function ({ event, api }) {
    const threadID = event.threadID;
    const messageID = event.messageID;

    api.getThreadInfo(threadID, (err, gc) => {
      if (err) {
        console.error(err);
        return;
      }

      if (gc) {
        const arr = [];
        for (let i = 0; i < gc.userInfo.length && i < gc.participantIDs.length; i++) {
          const _all2 = gc.userInfo[i].name;
          const _all = gc.participantIDs[i];
          arr.push({
            id: _all,
            tag: _all2,
          });
        }

        const mentions = arr.map((member) => ({
          id: member.id,
          tag: member.tag,
        }));

        let body = "";
        mentions.forEach((r) => {
          body += r.tag + " ";
        });

        api.sendMessage(
          {
            body: body,
            mentions: mentions,
          },
          threadID,
          messageID
        );
      }
    });
  },
};