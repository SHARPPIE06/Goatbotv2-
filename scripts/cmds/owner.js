
module.exports = {
    config: {
        name: "owner",
        version: "1.0",
        author: "Asmit",
        countDown: 5,
        role: 0,
        shortDescription: "ask ai who is the bot owner",
        longDescription: "ask ai who is the bot owner",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "!owner") return message.reply("Hello! My owner/developer is Elixz this is my owner fb if you want to contact him.      https://www.facebook.com/ElixzZeno");
}
};