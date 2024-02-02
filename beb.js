const axios = require('axios');

module.exports = {
	config: {
		name: 'beb',
		aliases: ['neo/leo'],
		version: '1.1',
		author: 'xerom',
		countDown: 5,
		role: 0,
		shortDescription: 'beb',
		longDescription: 'Chat with beb',
		category: 'fun',
		guide: {
			body: '{pn} {{[on | off]}}: enable/disable beb'
				+ '\n'
				+ '\n   {pn} {{<word>}}: quick chat with beb'
				+ '\n   Example: {pn} {{hi}}'
		}
	},

	onStart: async function ({ args, threadsData, message, event }) {
		if (args[0] == 'on' || args[0] == 'off') {
			await threadsData.set(event.threadID, args[0] == "on", "settings.Simsimi");
			return message.reply(`Already ${args[0] == "on" ? "on" : "off"} beb in your group`);
		}
		else if (args[0]) {
			const yourMessage = args.join(" ");
			try {
				const responseMessage = await getMessage(yourMessage);
				return message.reply(`${responseMessage}`);
			}
			catch (err) {
				return message.reply("beb is busy, please try again later");
			}
		}
	},

	onChat: async ({ args, message, threadsData, event, isUserCallCommand }) => {
		if (args.length > 1 && !isUserCallCommand && await threadsData.get(event.threadID, "settings.Simsimi")) {
			try {
				const responseMessage = await getMessage(args.join(" "));
				return message.reply(`${responseMessage}\n🐣 Neko answers you!`);
			}
			catch (err) {
				return message.reply("beb is busy, please try again later");
			}
		}
	}
};

async function getMessage(yourMessage) {
	const res = await axios.get(`https://api.simsimi.net/v2`, {
		params: {
			text: yourMessage,
			lc: global.GoatBot.config.language == 'vi' ? 'vn' : 'en',
			cf: false
		}
	});

	if (res.status > 200)
		throw new Error(res.data.success);

	return res.data.success;
}