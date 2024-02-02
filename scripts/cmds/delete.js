const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "delete",
    version: "2.0",
    author: "Subash",
    countDown: 3,
    role: 2,
    category: "owner",
    shortDescription: "Delete files and commands.",
    longDescription: "Clean cache & delete specific commands.",
    guide: {
      en: "{pn} (Clean cache and temp files)\n{pn} <cmd.js> (Deletes a specific command)"
    },
  },

  onStart: async function ({ args, api, event }) {

    const directoriesToDelete = ['cache', 'tmp'];
    const fileName = args[0];

    try {
      if (fileName) {
        const filePath = path.join(__dirname, '..', 'cmds', fileName);

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);


          api.sendMessage(`Successfully deleted ${fileName}`, event.threadID, event.messageID);
        } else {
          
          api.sendMessage(`File ${fileName} doesn't exist.`, event.threadID, event.messageID);
        }
      } else {
        console.log("Starting cleanup process...");
        for (const directory of directoriesToDelete) {
          const directoryPath = path.join(__dirname, directory);
          const files = fs.readdirSync(directoryPath);

          for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const fileStat = fs.statSync(filePath);

            if (fileStat.isFile()) {
              fs.unlinkSync(filePath);
              console.log(`Deleted file: ${filePath}`);
            }
          }
        }
        console.log("Cleanup process completed successfully!");

        const deletedFilesCount = directoriesToDelete.reduce((total, dir) => {
          const directoryPath = path.join(__dirname, dir);
          const files = fs.readdirSync(directoryPath);
          return total + files.length;
        }, 0);

        api.sendMessage(`Successfully deleted all unwanted caches and temp files from the project.`, event.threadID, event.messageID);
      }
    } catch (err) {
      console.error(err);
      api.sendMessage(`An error occurred: ${err.message}`, event.threadID, event.messageID);
    }
  }
};