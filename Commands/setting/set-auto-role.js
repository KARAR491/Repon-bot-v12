const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-auto-role',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(message.content.startsWith()) return;
if(!message.member.hasPermission("ADMINISTRATOR")) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission \`ADMINISTRATOR\`**")
        return
}
const role = message.mentions.roles.first() || message.roles
        if (!role)
{
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**⛔ | رجاء منشن الرول اولا**")
  }else if(lang === "en")
  message.channel.send("**⛔ | Please Mention A Role First**'")
}     
        db.set(`role_${message.guild.id}`, role.id)
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**✅ | تم تحديد الرتبه التلقائيه ${role}**`)
  }else if(lang === "en")
message.channel.send(`**✅ | Set ${role} As Auto Role**`)
    
    }
}