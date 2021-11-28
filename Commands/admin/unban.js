const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'unban',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {

if(message.content.startsWith()) return
      const uss = message.mentions.members.first() || message.author 
    }
}