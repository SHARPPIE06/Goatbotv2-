const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const formData = new FormData();
formData.append('size', 'auto');
module.exports = {
	config: {
		name: "rbg",
		version: "1.0",
		author: "Sarkar",
		countDown: 5,
		role: 1,
		shortDescription: {
			en: "Unsend bot's message"
		},
		longDescription: {
			en: "Unsend bot's message"
		},
		category: "box chat",
		},
	onStart: async function ({ message, event, api, getLang }) {
		//message.send (event.messageReply.attachments[0].url)
			formData.append('image_url', `${event.messageReply.attachments[0].url}`);
    try{
			let res = await axios.post("https://api.remove.bg/v1.0/removebg", formData,{
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'qLyCFZRphBY1qyBi1QcwsxDS',
  },
  encoding: null
})
      await fs.writeFileSync(__dirname+"/tmp/rmv.png", res.data)
message.send({body:"here is your bg removed img",attachment:fs.createReadStream(__dirname+"/tmp/rmv.png", res.data)}, () => {fs.unlinkSync(__dirname+"/tmp/rmv.png")})
  }catch(e){
  message.send("lado...a,lado\nhaha sorry this error is from rng command")
  console.log(e)
  }
  }
  }