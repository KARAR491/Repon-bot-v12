const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'avatar-server',
        cat : [""],
        description: 'show avatar server',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const embed = new MessageEmbed()
.setImage(message.guild.iconURL({dynamic: true, size:1024}))
message.channel.send(embed)  
    }
}