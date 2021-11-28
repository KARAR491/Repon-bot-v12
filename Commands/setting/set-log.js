const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-log',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, prefix, client) => {
      if(!message.member.hasPermission("MANAGE_CHANNELS")) {

    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**ليس لديك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission **") 
    return 
      }
      let cmd = message.content.split(" ")


      const arg = message.content.split(" ")
        const chn = message.mentions.channels.first() || cmd(1)
    if(!chn) {
      
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**منشن الشات او اكتب اسمة**")
  }else if(lang === "en")
  message.channel.send("**mention the chat **")
      return 
    }
let embed = new Discord.MessageEmbed() .setTitle('**تم تحديد شات اللوق**') .addField('الشات:', `${chn}`) .addField('بواسطة:', `${message.author}`) .setThumbnail(message.author.avatarURL())
      let embeden = new Discord.MessageEmbed() .setTitle('**Done The Log Code Has Been Setup**') .addField('Channel:', `${chn}`) .addField('Requested By:', `${message.author}`) .setThumbnail(message.author.avatarURL())    
      db.set(`LOG_${message.guild.id}`, chn.id)
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(embed)
  }else if(lang === "en")
  message.channel.send(embeden)
console.log(arg)
console.log(message.guild.id, arg[1])
  
    }
}