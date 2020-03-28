const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("693192574189699093")
setInterval(function() {
channel.send(`#credit @GodDamnIt ᶻ³ᴹ| 𝕯𝕽 99999999`);
}, 30)
})

client.login(process.env.BOT_TOKEN);