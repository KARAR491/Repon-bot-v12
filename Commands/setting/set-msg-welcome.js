const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-msg-welcome',
        cat : [""],
        description: 'set msg welcome channel',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {

      if(!message.member.hasPermission("MANAGE_CHANNELS")) {

    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**ليس لديك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission **") 
    return 
      }
      const cmd = message.content.split(" ").slice(1).join(" ")
      const cmd1 = message.content.split(" ") 
        
    if(!cmd[2]) {
      
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`****
[server] - اسم السيرفر
[user] - العضو الجديد
[userName] - اسم العضو بدون منشن
[memberCount] - رقم العضو
[inviter] - منشن الشخص الداعي
[inviterName] - اسم الشخص الداعي بدون منشن****`)
  }else if(lang === "en")
  message.channel.send(`****
[server] -  Name Server
[user] - The New The Member 
[userName] - Name The New The Member 
[memberCount] - Number The Member 
[inviter] - Mention The Inviter
[inviterName] - Name The Inviter Without  Mention 
****`)
      return 
    }
db.set(`msgWel_${message.guild.id}`, cmd)
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`تم حفظ الرسالة بنجاح 
**${cmd}**`)
    }else if(lang === "en")
    message.channel.send(`Done Save The 
Message Successfully
**${cmd}**`)
      return     
        console.log(cmd)
console.log(message.guild.id, cmd[1])
  
      
    }
}