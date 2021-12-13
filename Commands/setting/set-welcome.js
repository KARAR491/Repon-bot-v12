const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-welcome',
        cat : [""],
        description: 'set welcome channel',
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
      const arg = message.content.split(" ")
        const chanwel = message.mentions.channels.first();
    if(!chanwel) {
      
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**منشن الشات او اكتب اسمة**")
  }else if(lang === "en")
  message.channel.send("**mention the chat **")
      return 
    }
db.set(`Welco_${message.guild.id}`, chanwel.id)
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم تحديد الشات**")
    }else if(lang === "en")
    message.channel.send("**done Specify channel**")
      return      console.log(arg)
console.log(message.guild.id, arg[1])
  
      
    }
      }