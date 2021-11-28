const { Discord } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'test',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      let yus = db.get(`role_${message.guild.id}`) 
        if (yus === null) 
 return  message.channel.send(":x: | **There are no backups created by you.**") 
   if (!yus.toString()) return message.channel.send(":x: | **There are no backups created by you.**") 
     let arr = new Array() 
       yus.forEach(x => { arr.push(`${x.role}`) 
                        })
         let embed = new Discord.MessageEmbed() .setTitle("Backup list") .setDescription(`Server name - Backup ID - emojiCount\n${arr.join("\n")}`) 
           embed.setAuthor(message.author.tag, message.author.displayAvatarURL()) 
             embed.setFooter(message.guild.name + " | made by legendjs#0001 & ant#0768", message.guild.iconURL());
      embed.setColor("GREEN")
               embed.setTimestamp() 
                 return message.channel.send({ embed: embed
                                             }); 
      message.channel.send({ embed: embed }) 
    
    }
}