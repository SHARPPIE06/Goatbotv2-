const fs = require('fs-extra');
const request = require('request');

module.exports = {
  config: {
    name: `horny`,
    aliases: ['hn'],
    version: '1.0',
    author: 'Shinpei',
    countDown: 5,
    role: 0,
    shortDescription: {
      en: ''
    },
    longDescription: {
      en: ''
    },
    category: 'image',
    guide: {
      en: '{pn} empty/uid/reply/mention'
    }
  },
  onStart: async function({ api, event, args }) {
    const { threadID, messageID, senderID, body } = event;

    let id;
    if (args.join().includes('@')) {
      id = Object.keys(event.mentions)[0];
    } else {
      id = args[0] || senderID;
    }
    if (event.type === 'message_reply') {
      id = event.messageReply.senderID;
    }

    const callback = () => {
      api.sendMessage(
        {
          body: '「 your horny license🥵 」',
          attachment: fs.createReadStream(__dirname + '/tmp/horny.png')
        },
        threadID,
        () => fs.unlinkSync(__dirname + '/tmp/horny.png')
      );
    };

    request(encodeURI(`https://api.reikomods.repl.co/canvas/horny?uid=${id}`))
      .pipe(fs.createWriteStream(__dirname + '/tmp/horny.png'))
      .on('close', callback);
  }
};