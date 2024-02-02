module.exports = {
	config: {
		name: "doremon",
		aliases: ["cartoon"],
		version: "1.0",
		author: "Doru",
		countDown: 5,
		role: 1,
		shortDescription: "send you pic of dora",
		longDescription: "sends u pic of doremon",
		category: "image",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.imgur.com/uvmKyxi.png",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 Doremon 🐼 」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }