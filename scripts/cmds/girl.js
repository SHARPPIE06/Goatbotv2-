module.exports = {
	config: {
		name: "girl",
		aliases: ["Gi"],
		version: "1.0",
		author: "DoRu",
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of girl ",
		longDescription: "sends u pic girl",
		category: "image",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/2chBkB3/image.jpg",
"https://i.ibb.co/W0X1nqV/image.jpg",
"https://i.ibb.co/W0X1nqV/image.jpg",
"https://i.ibb.co/xSZJPF0/image.jpg",
"https://i.ibb.co/xhTHcjH/image.jpg",
"https://i.ibb.co/kmdWWYN/image.jpg",
"https://i.ibb.co/PgCCz1y/image.jpg",
"https://i.ibb.co/gSc5FFy/image.jpg",
"https://i.ibb.co/KVL32Ts/image.jpg",
"https://i.ibb.co/bL6q067/image.jpg",
"https://i.ibb.co/brsR0kB/image.jpg",
"https://i.ibb.co/0GXKbfd/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「 Take it 😜 」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }