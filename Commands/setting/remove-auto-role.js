const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'remove-auto-role',
        cat : ["Remove-auto-role", "REMOVE-AUTO-ROLE"],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission \`ADMINISTRATOR\`**")
        return
      }
      let autorole = db.fetch(`role_${message.guild.id}`)
      if (autorole === null) { 
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لم يتم تحديد رتبه تلقائية مسبقا**")
  }else if(lang === "en")  message.channel.send('**⛔ | You Dont Have An Autorole Set**')
    return                         }    
db.delete(`role_${message.guild.id}`)
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم ازالة الرتبة التلقائية**")
  }else if(lang === "en")
message.channel.send(`**✅ | Removed Autorole**`)
    }
}