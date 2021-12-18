const Discord = require("discord.js");
const { setNickname } = require("discord.js")
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-nick',
        cat : [""],
        description: 'nick name',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
     const user = message.mentions.users.first()
      const cmd = message.content.split(" ").slice(2).join(" ")
      const cmd2 = message.content.split(" ");
     
      
      if(!user) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**منشن العضو**")
  }else if(lang === "en")
  message.channel.send("**mention the user**")
return
      };
      /*
      if(!cmd) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب النك نيم الجديد**")
  }else if(lang === "en")
  message.channel.send("**write new nick name**")
        return 
      };
*/
  if(!cmd) {
                
    
    
   const setNickname = require("discord.js")
    
message.guild.member(user).setNickname(user.username)  
    const lang = db.fetch(message.guild.id)  
      if(lang === "en") {     
    message.channel.send(`**The username has been changed to its original name 
The use : <@!${user.id}>
original name : ${user.username}**`)   
      }else if(lang === "ar") 
        message.channel.send(`**تم تغير اسم العضو الى اسمه الاصلي
العضو : <@!${user.id}>
اسمه : ${user.username}**`);   
            return 
        }else if(cmd) {
     message.guild.member(user).setNickname(cmd) 
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**تم تغير اسم العضو
العضو : <@!${user.id}>
الاسم الجديد : ${cmd}**`)
  }else if(lang === "en")
  message.channel.send(`**Done Username changed
User : <@!${user.id}>
New nickname : ${cmd}**`)
    return 
  }
    }
    }