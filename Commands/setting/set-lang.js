const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-lang',
        cat : ["Set-lang", "SET-LANG"],
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
if(args == "ar"){
db.set(`${message.guild.id}`,"ar")
const embed = new MessageEmbed()
.setTitle("Language Change")
.setColor("BLUE")
.setDescription(`تم تغيير اللغة الى \`العربيه\``)
.setFooter(`Changed By ${message.author.tag}`)
message.channel.send(embed) 
}else {
if (args == "en"){
 db.set(`${message.guild.id}`,"en") 
const embed = new MessageEmbed()
.setTitle("Language Change")
.setColor("BLUE")
.setDescription(`Language Changed To \`EN\``)
.setFooter(`Changed By ${message.author.tag}`)
message.channel.send(embed)

}else {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("الرجاء كتابة رمز اللغه (ar,en)")
  }else if(lang === "en")
  message.channel.send("Please Type Language (en, ar)")
}
  
        }
    }
}