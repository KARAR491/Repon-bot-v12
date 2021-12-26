const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'afk',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {	
   const user = message.author
           const no1 = new Discord.MessageEmbed()
           .setDescription("You can't put links KID**")
           .setColor("RED")
          let text = args.join(" ")
       if(text.includes("www") || text.includes("discord.gg") || text.includes("discordapp") || text.startsWith("https://")) return message.channel.send(no1)

      
        
    const status = new db.table("AFKs");
    let afk = await status.fetch(message.author.id);
    const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    
        if(!text) { 
         text = "AFK"
            
        } else { 
          text = text
        }

    
    if (!afk) {
      embed.setDescription(`**__${message.author.tag}__ you are now AFK\nReason: ${text}**`)
      status.set(`${message.author.id}_${message.guild.id}`, text)

    message.channel.send(embed)  
    message.guild.member(user).setNickname(`[AFK] | ${message.author.username}`).catch((m) => {
      message.channel.send(`If I am unable to change the name, please review my permissions `)
           })
    }
    }
}