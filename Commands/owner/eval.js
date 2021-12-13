const Discord = require("discord.js");
const db = require("quick.db")
const check = require("is-url");
module.exports = {
    info: {
        name: 'eval',
        cat : [""],
        description: 'eval command of the owner',
        coolDown: 1
    },
    run: async (message, prefix, client) => {
      

    if (message.author.id != "778370948650106892") {
        //Only allow bot developer(s) to use the eval command, not all users

        const noToken = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('OI WHO GAVE YOU PERMISSION TO USE EVAL!!!nn*back off...*')
       return message.channel.send(noToken)
    }

    }
}