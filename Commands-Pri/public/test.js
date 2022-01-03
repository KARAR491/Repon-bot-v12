const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'test',
        cat : ["t"],
        description: '',
        coolDown: 1,
        usags: "",
        per:"",
        category:""
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
****`)
      const prime = db.fetch(`prime_bot_${message.guild.id}`)
if(!prime) {
  
  const lang = db.fetch(message.guild.id) 
  if(lang === "ar") {    
message.channel.send(`**هذا السيرفر ليس برايم**`)
  }else if(lang === "en")
message.channel.send(`**This Server Don't Have Prime**`)
  return 
}
message.channel.send("this server prime | هذا السيرفر برايم")
    }
}