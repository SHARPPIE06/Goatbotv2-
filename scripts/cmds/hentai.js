const axios = require('axios');
const fs = require("fs-extra");

module.exports = {
	config: {
		name: "hentai",
		aliases: ["nemo4"],
		version: "1.0",
		author: "MILAN gay",
		countDown: 5,
		role: 2,
		shortDescription: "get nsfw images",
		longDescription: "",
		category: "18+",
		guide: {
			vi: "{p} hentai",
			en: "{p} hentai"
		}
	},

	onStart: async function ({ message, args, event, api }) {
	try {
 const { data } = await axios.get("https://milanbhandari.imageapi.repl.co/nsfw?apikey=xyzmilan");
 const url = await axios.get(data.url, { responseType: "arraybuffer" });
 fs.writeFileSync(__dirname + "/tmp/nsfw.png", Buffer.from(url.data, "utf-8"));
 const msg = "";
 const Img = [
 fs.createReadStream(__dirname + "/tmp/nsfw.png")
 ];
 return api.sendMessage({
 body: msg,
 attachment: Img
 }, event.threadID, event.messageID);
 } catch (error) {
 console.error(error);
 }
 }
};