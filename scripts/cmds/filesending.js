const fs = require('fs');
const path = require('path');

module. exports = {
  config: {
    name: "f",
    author: "sachii ",
    version: "1.7",
    countDown: 5,
    category: "Developer",
    roles: 1,
    description: "Open a file from chat",
    usage: "Open <name> <text> or send file <name> or all file",
    example: "Open hi.js file hhhhhhhhhhhh or send hi.js file or file all"
  },

  onStart: async function ({ args, message }) {
    const command = args[0]. toLowerCase();
    const fileName = args[1];
    const text = args. slice(2). join(" ");

    if (command === "send") {
      if (!fileName) {
        return message.reply("Enter the file name you want to send.");
      }

      const filePath = path. join(__dirname, '..', 'cmds', fileName);

      if (!fs. existsSync(filePath)) {
        return message. reply(`The ${fileName} file does not exist.`);
      }

      fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        message. reply(`${data}`);
      });

    } else if (command === "open") {
      if (!fileName || !text) {
        return message. reply("Enter the file name and what you want in it");
      }

      const filePath = path. join(__dirname, '..', 'cmds', fileName);

      fs.writeFile(filePath, text, (err) => {
        if (err) throw err;
        message.reply(`The file ${fileName} has been opened.`);
      });

    } else if (command === "all") {
      const cmdFolderPath = path. join(__dirname, '..', 'cmds');
      fs.readdir(cmdFolderPath, (err, files) => {
        if (err) throw err;
        message.reply(`command files: ${files.join('\ ')}`);
      });
    } else if (command === "Services") {
      message.reply("File Services:\Create\Send\All");
    }
  }
};