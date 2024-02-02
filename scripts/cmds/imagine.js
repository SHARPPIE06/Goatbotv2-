const axios = require("axios");
const fs = require("fs");

module.exports = {
  config: {
    name: "imagine",
    aliases: ["ttoi"],
    version: "1.1",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "create your imagination"
    },
    category: "image",
    guide: {
      en: "{pn} promot - model number."
    },
    envConfig: {}
  },

  onStart: async function ({ api, event }) {
    const args = event.body.split(/\s+/);
    args.shift();
    const tzt = args.join(' ').split('-').map(item => item.trim());
    const txt = tzt[0];
    const txt2 = tzt.slice(1).join(' ');

    if (!txt || !txt2) {
      return api.sendMessage("/imagine <prompt> | <model number> 1 to 20.", event.threadID, event.messageID);
    }

    api.sendMessage("✅ | Generating your imagination.....", event.threadID, event.messageID);

    try {
      const enctxt = encodeURI(txt);
      const url = `https://hazeyy-api-img-prompt.kyrinwu.repl.co/api/img/prompt?prompt=${enctxt}&model=${txt2}`;
      const responses = await Promise.all(
        Array.from({ length: 4 }, async (_, index) => {
          const response = await axios.get(url, { responseType: "arraybuffer" });
          return response.data;
        })
      );

      const paths = [];

      responses.forEach((data, index) => {
        const path = __dirname + `/cache/image${index + 1}.png`;
        fs.writeFileSync(path, Buffer.from(data, "binary"));
        paths.push(path);
      });

      const message = `🖼️ | Here is your imagination.`;

      const combinedMessage = {
        body: message,
        attachment: paths.map((path) => fs.createReadStream(path)),
      };

      api.sendMessage(combinedMessage, event.threadID, () => paths.forEach(fs.unlinkSync));
    } catch (error) {
      console.error("Error in Image Generation:", error);
      api.sendMessage("🚫 | Error while generating imagination ", event.threadID, event.messageID);
    }
  },
};

