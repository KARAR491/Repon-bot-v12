const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'addemoji',
        cat: ["Addemoji", "ADDEMOJI"],
        description: 'add emoji to server',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(message.content.startsWith()) return

const Discord = require("discord.js")
    if(!message.member.hasPermission('MANAGE_EMOJIS')) return
    
    const emojis = args
    if(!emojis.length){
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(" :x: | **من فضلك اختر الايموجي**")
  }else if(lang === "en")
  message.channel.send(" :x: |**Please write the emoji**")     
      return;
    }
    let names = []
    for (const emoji of emojis) {
      let info = Discord.Util.parseEmoji(emoji)
      if (!info.id) {
        continue;
      }
      let type = info.animated ? ".gif" : ".png"
      let url = `https://cdn.discordapp.com/emojis/${info.id + type}`
      var emj=await message.guild.emojis.create(url, info.name, {
        reason: `emoji created by ${client.user.tag}`
      })
      names.push(emj)
    }
    if(!names.length){
       const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(":x: | **لم يتم ايجاد ايموجي صالح لاضافته**")
  }else if(lang === "en")
  message.channel.send(":x: | **No valid emoji found**")
       return;
    } else {
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`✅ |  **تم اضافة ${names.join("/")} **`)
  }else if(lang === "en")
  message.channel.send(`✅ | **has been added ${names.join("/")}**`)
    }




    }
}