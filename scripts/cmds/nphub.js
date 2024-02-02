const axios = require('axios');
const request = require('request');
const fs = require('fs');

module.exports = {
  config: {
    name: 'nphub',
    version: '1.0',
    author: 'AsMiT',
    countDown: 20,
    role: 2,
    longDescription: 'redroom',
    category: '18+',
    guide: '{pn} redroom',
  },
  onStart: async function ({ api, event }) {
    const permission = ["100049442797056"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("- Bitch, Only my Boss Mr AsMiT Sir can use this👿", event.threadID, event.messageID);
    }
    try {
      api.setMessageReaction('💨', event.messageID, (err) => {}, true);
      const response = await axios.get('https://ali.kashifff.repl.co/video/apikey=Asmit');
      const ext = response.data.url.substring(response.data.url.lastIndexOf('.') + 1);
     
      const callback = () => {
       api.setMessageReaction('🐸', event.messageID, (err) => {}, true);
 api.sendMessage(
          {
            body: 'Here is your request',
            attachment: fs.createReadStream(__dirname + `/cache/Video.${ext}`),
          },
          event.threadID,
          () => fs.unlinkSync(__dirname + `/cache/Video.${ext}`),
          event.messageID
        );
      };

      request(response.data.url).pipe(fs.createWriteStream(__dirname + `/cache/Video.${ext}`)).on('close', callback);
    } catch (err) {
      api.sendMessage('error', event.threadID, event.messageID);
    }
  },
};