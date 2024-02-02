const axios = require('axios');

module.exports = {
	config: {
		name: "pron",
		aliases: ["pronvid"],
		version: "1.0",
		author: "milan-says",
		countDown: 5,
		role: 2,
		shortDescription: "get nepali kanda",
		longDescription: "get nepali porn videos",
		category: "18+",
		guide: "{pn}"
	},

	onStart: async function ({ message, args }) {
			const BASE_URL = `https://milanbhandari.imageapi.repl.co/kanda?apikey=xyzmilan`;
 message.reply("✅ | Command Received\n⌛ | Loading The Video Please Wait UpTo 1 Minutes,\n\n❌ Don't Spam The Command.."); 
			try {
				let res = await axios.get(BASE_URL)
				let kanda = res.data.link;
				const form = {
					body: ``
				};
		 if (kanda)
					form.attachment = await global.utils.getStreamFromURL(kanda);
				message.reply(form); 
			} catch (e) { message.reply(`An error occurred while sending the video..`)
 console.log(e);
 }

		}
	};