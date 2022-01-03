const Discord = require("discord.js");
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
      const end = Date.now()
        const enb = Date.now()
      const e = end - enb


      const embed = new Discord.MessageEmbed()
          .setTitle("Ping Bot")
          .setColor("BLUE")
          .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
          .setFooter(`By ${message.author.tag}`)
          .setTimestamp()
          .setDescription(`>>> ****__Ping__\n\`${Date.now() - end}\`
__API__\n${Date.now() - enb + "50"}
****`)
        message.channel.send('pong!').then(m => m.edit(embed));
    }
};