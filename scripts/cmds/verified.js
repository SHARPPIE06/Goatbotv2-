const axios = require('axios');
const fs = require('fs');

module.exports = {
    config: {
        name: "verified",
aliases: ["tick"],
        version: "1.0",
        author: "OtinXSandip",
        countDown: 10,
        role: 0,
        shortDescription: {
            vi: "Làm thú cưng cho ai đó.",
            en: "verified."
        },
        longDescription: {
            vi: "Làm thú cưng cho ai đó.",
            en: "verified."
        },
        category: "fun",
        guide: {
            vi: "{pn} [ chỗ trống | trả lời | đề cập | uid ]",
            en: "{pn} [ blank | reply | mention | uid ]"
        }
    },

    onStart: async function({ event, api, args, message }) {
        const { threadID, messageID, senderID, body } = event;
        let id;
        if (args.join().indexOf('@') !== -1) {
            id = Object.keys(event.mentions)[0]; // Get the first mentioned user's ID
        } else {
            id = args[0] || senderID;
        }
        if (event.type == "message_reply") {
            id = event.messageReply.senderID;
        }

        const response = await axios.get(`https://milanbhandari.imageapi.repl.co/verified?uid=${id}`, { responseType: 'stream' });
        const tempFilePath = './temp.png';
        const writer = fs.createWriteStream(tempFilePath);
        response.data.pipe(writer);

        writer.on('finish', async () => {
            const attachment = fs.createReadStream(tempFilePath);
            await api.sendMessage({ body: "i am verified gays😈", attachment: attachment }, threadID, messageID);

            fs.unlinkSync(tempFilePath);
        });
    }
};