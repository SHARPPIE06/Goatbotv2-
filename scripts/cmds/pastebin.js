const PastebinAPI = require('pastebin-js');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "pastebin",
    aliases: ['bin', 'paste'],
    version: "2.0",
    author: "X",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Upload files to pastebin and send link"
    },
    longDescription: {
      en: "This command allows you to upload files and text to pastebin and send the link to the file."
    },
    category: "Utility",
    guide: {
      en: "{pn} file / text <file>||<custom_text>"
    }
  },

  onStart: async function ({ api, event, args, content, usersData }) {

    const asmit = ['100049442797056'];

    if (!asmit.includes(event.senderID)) {
      return api.sendMessage("❌ | You don't have the access!", event.threadID, event.messageID);
    }

    const pastebin = new PastebinAPI({
      api_dev_key: 'LFhKGk5aRuRBII5zKZbbEpQjZzboWDp9',
      api_user_key: 'LFhKGk5aRuRBII5zKZbbEpQjZzboWDp9'
    });

    if (!args[0]) {
      return api.sendMessage('Please learn how to use: /paste text (words) or paste file (filename)', event.threadID, event.messageID);
    }

    if (args[0] === "text") {
      const text = args.slice(1).join(" ");
      const paste = await pastebin
        .createPaste({
          text: text,
          title: "Text Paste",
          format: null,
          privacy: 1,
        })
        .catch((error) => {
          console.error(error);
        });

      const rawPaste = paste.replace("pastebin.com", "pastebin.com/raw");

      api.sendMessage(`Text has been created.\n🔗 Link: ${rawPaste}`, event.threadID, event.messageID);
    } else if (args[0] === "file") {
      const fileName = args[1];
      const filePathWithoutExtension = path.join(__dirname, '..', 'cmds', fileName);
      const filePathWithExtension = path.join(__dirname, '..', 'cmds', fileName + '.js');

      if (!fs.existsSync(filePathWithoutExtension) && !fs.existsSync(filePathWithExtension)) {
        return api.sendMessage('File not found!', event.threadID, event.messageID);
      }

      const filePath = fs.existsSync(filePathWithoutExtension) ? filePathWithoutExtension : filePathWithExtension;

      fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) throw err;

        const paste = await pastebin
          .createPaste({
            text: data,
            title: fileName,
            format: null,
            privacy: 1
          })
          .catch((error) => {
            console.error(error);
          });

        const rawPaste = paste.replace("pastebin.com", "pastebin.com/raw");

        api.sendMessage(`Cmd install ${fileName}.js ${rawPaste}`, event.threadID, event.messageID);
      });
    } else {
      api.sendMessage('Please learn how to use: /paste text (words) or paste file (filename)', event.threadID, event.messageID);
    }
  },
};