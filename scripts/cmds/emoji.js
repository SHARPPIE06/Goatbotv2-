const a = require('axios');

module.exports = {
 config: {
 name: "emoji",
 version: "1.0",
 author: "Samir Œ",
 countDown: 5,
 role: 0,
 shortDescription: "sarcasm",
 longDescription: "general",
 category: "general",
 },
 onStart: async function({ api, event, message, getLang, args }) {
 try {
 const emoji = args.join(' ');

 const response = await a.get(`https://bnw.samirzyx.repl.co/emoji?s=${emoji}`);

 const emojiname = response.data.emoji;
 const img = response.data.url;
 const gif = await global.utils.getStreamFromURL(img);

 message.reply({ body: `${emojiname}`, attachment: gif });
 } catch (error) {
 console.error(error);
 message.reply("no gif available ");
 }
 }
};