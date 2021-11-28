const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'avatar',
        cat : [""],
        description: 'show your avatar',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      let uss = message.mentions.users.first() ||message.guild.members.cache.get(args[1]) || message.author
let embed = new MessageEmbed()
.setDescription(`**[png](${uss.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [jpg](${uss.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [webp](${uss.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})**`)
.setImage(`${uss.displayAvatarURL({dynamic: true,size:1024})}`)
message.channel.send(embed)
    }
}