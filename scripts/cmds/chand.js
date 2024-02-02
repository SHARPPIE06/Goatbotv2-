const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")

module.exports = {
	config: {
		name: "chad",
		aliases: ["chad"],
		version: "1.0",
		author: "AceGun",
		countDown: 5,
		role: 0,
		shortDescription: "Make anyone chad guy",
		longDescription: "",
		category: "fun",
		guide:  {
			vi: "{pn} [@tag someone]",
			en: "{pn} [@tag someone]"
		}
	},

	onStart: async function ({ message, args,api , event, user }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("please mention someone");
        else if (mention.length == 1) {
            const one = mention[1], two = mention[0];
            bal(two).then(ptth => { message.reply({ body: "「 This guy is Chad 」", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(two) {

  
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "chad.png"
    let img = await jimp.read("https://i.imgur.com/wNRsTMi.jpg")
    img.resize(500, 500).composite(avtwo.resize(120, 120), 210, 50);

    await img.writeAsync(pth)
    return pth
    }