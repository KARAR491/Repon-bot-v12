const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const owner = "778370948650106892"
module.exports = {
    info: {
        name: 'add-prime',
        cat : [""],
        description: 'add server In the prime version ',
        coolDown: 1,
        usags: "[prefix] + add-prime",
        per:"Owner Bot",
        category:"owner"
    },
    run: async (message, prefix, client) => {
    
let getLang = db.fetch(message.guild.id);
	if (!getLang)
		return message.channel.send(`>>> **** __ ENGLISH 🇬🇧 __
In order for the bot to work, the owner of this server must write this command 
\`\`\`js
${prefix}set-lang en
\`\`\`
Owner Server : ${message.guild.owner}
Or Mentioned The bot To select the language automatically 
-------------------
__ عربي 🇮🇶 __
لكي يعمل البوت يجب على اونر هذا السيرفر كتابة الامر التالي
\`\`\`js
${prefix}set-lang ar
\`\`\`
صاحب السيرفر : ${message.guild.owner}
او منشن البوت لكي يتم تحديد اللغة تلقائيا
****`);
      if(!owner.includes(message.author.id)) {
        const lang = db.fetch(message.guild.id) 
  if(lang === "en") {    
message.channel.send(`**You Don't Owner Of Bot**`)
  }else if(lang === "ar")
message.channel.send(`**انت لست اونر للبوت**`);     
        return
      }
const server = message.guild.id
const prime = db.fetch(`prime_bot_${message.guild.id}`)
const check = db.fetch(`prime_bot_${message.guild.id}`)

      if(server === prime) {
const lang = db.fetch(message.guild.id) 
  if(lang === "ar") {    
message.channel.send(`**السيرفر موجود من الاساس**`)
  }else if(lang === "en")
message.channel.send(`**This server already exists **`);    
  return
 
}
db.set(`prime_bot_${message.guild.id}`, server)
const lang = db.fetch(message.guild.id) 
  if(lang === "ar") {    
message.channel.send(`**تم اضافة السيرفر**`)
  }else if(lang === "en")
message.channel.send(`**Done Add This Server**`);      
      
    }
}