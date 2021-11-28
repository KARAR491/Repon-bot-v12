const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-nick',
        cat : [""],
        description: 'nick name',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
     const uss = message.mentions.users.first() || message.author;
      const cmd = message.content.split(" ")
      const cmd2 = message.content.split(" ");
     
      
      if(!uss) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**منشن العضو**")
  }else if(lang === "en")
  message.channel.send("**mention the user**")
return
      };
      
      if(!cmd) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب النك نيم الجديد**")
  }else if(lang === "en")
  message.channel.send("**write new nick name**")
        return 
      };

  if(!cmd[1]) {
                
    
    
    
    
client.users.cache.get(uss).setNickname(uss.username)  
            return message.channel.send(' ' + uss.username + ' has been reseted nickname ')
        }else if(cmd[1]) {
            client.users.cache.get(uss).setNickname(cmd)  
            return message.channel.send(`> Has been changed nick **${uss.username}** to **${cmd}**`)
  } 
         
     /*
  if(lang === "ar") {
    message.channel.send(`**تم تغير اسم العضو
العضو : ${user.tag}
الاسم الجديد : ${cmd}**`)
  }else if(lang === "en")
  message.channel.send(`**Done Username changed
User : ${user}
New nickname : ${cmd}**`)
  
  */
      console.log(cmd2) 
    }
    }