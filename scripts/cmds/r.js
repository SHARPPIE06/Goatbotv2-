const fetch = require('node-fetch');

module.exports = {
 config: {
 name: "r",
 aliases: ["meme"],
 version: "1.0",
 author: "Jun‎ 😈",
 countDown: 5,
 role: 0,
 shortDescription: "random memes from subreddit",
 longDescription: "",
 category: "image",
 guide: "{pn}"
 },

 onStart: async function ({ message, usersData, args, event, api }) {
 if (!args || args.length === 0) {
 const categories = ["historymemes", "adultmeme", "memes", "dankmemes", "pornomemes", "wholesomememes", "relationshipmemes", "animemes"];
 api.sendMessage(`Please provide a category.\nHere's the list of available memes categories:\n\n${categories.join("\n")}`, event.threadID, event.messageID);
 return;
 }

 const category = args[0].toLowerCase();
 const categories = ["historymemes", "adultmeme", "memes", "dankmemes", "pornomemes", "wholesomememes", "relationshipmemes", "animemes"];

 if (!categories.includes(category)) {
 api.sendMessage(`Invalid category.\nHere's the list of available memes categories:\n\n${categories.join("\n")}`, event.threadID, event.messageID);
 return;
 }

 const response = await fetch(`https://api-test.yourboss12.repl.co/api/image?memes=${category}&crеdit=${this.config.author}hаhа`);
 const data = await response.json();
 const img = data.url;

 api.sendMessage({
 body: `Here's random Reddit memes from r/${category}`,
 attachment: await global.utils.getStreamFromURL(img)
 }, event.threadID, event.messageID);
 },

 onChat: async function ({ event, message, getLang }) {
 const category = event.body.toLowerCase();
 const categories = ["historymemes", "adultmeme", "memes", "dankmemes", "pornomemes", "wholesomememes", "relationshipmemes", "animemes"];
 if (categories.includes(category)) {
 const response = await fetch(`https://api-test.yourboss12.repl.co/api/image?memes=${category}&crеdit=${this.config.author}hаhа`);
 const data = await response.json();
 const img = data.url;
 return message.reply({
 body: `Here's random Reddit memes from r/${category}`,
 attachment: await global.utils.getStreamFromURL(img)
 });
 } 
}
};