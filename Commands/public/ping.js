const Discord = require("discord.js");
const client = new Discord.Client()
const db = require("quick.db")
module.exports = {
  info:{
    name:"ping",
    cat:[""],
    description:"ping the bot",
    coolDown:"3",
   category:"public",
    usags:"[prefix] + ping",
    per:"No Permission"
  },
    
    run: async (message, args, prefix, client) => {
      message.channel
			.send('pong!')
			.then(m => m.edit(`\`\`\`Ping: ${client.ws.ping}\`\`\``));
    }
};
