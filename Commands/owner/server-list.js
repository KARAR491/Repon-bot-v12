const Discord = require("discord.js");
const db = require("quick.db")



module.exports = {
    info: {
        name: 'all-servers',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(message.author.id !== "778370948650106892") return message.channel.send("you Don't owner of the bot");
      
      const ser = ` ${client.guilds.cache.map(g => g.name).join(", \n ")} |  ${client.guilds.cache.map(g => g.id).join(", \n ")} | `
   console.log(ser)
    }
}