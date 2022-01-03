const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
    info: {
        name: 'skip',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, lang,  prefix, client) => {
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

      if (!message.member.voice.channel) {
        if(lang === "ar") {
    message.channel.send(`**انت لست موجود في روم صوتي**`)
  }else if(lang === "en")
  message.channel.send(`**You are not in the audio room **`)
        return
      }
    if (!client.player.getQueue(message)) {
      if(lang === "ar") {
    message.channel.send(`** لم يتم تشغيل اي اغنيه**`)
  }else if(lang === "en")
  message.channel.send(`**The song has not been played **`)
      return
    }
    client.player.skip(message);

    if(lang === "ar") {
    message.channel.send(`**تم التخطي **`)
  }else if(lang === "en")
  message.channel.send(`**Done Skiped **`)


    }
}