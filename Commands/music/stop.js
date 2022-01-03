const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
    info: {
        name: 'stop',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
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
        if(lang === "en") {
    message.channel.send(`**You are not in an audio room  **`)
  }else if(lang === "ar")
        message.channel.send(`انت لست موجود غي روم صوتي !`);
      return


      }
    if (!client.player.getQueue(message)) {
      if(lang === "en") {
    message.channel.send(`**No songs played **`)
  }else if(lang === "ar")
      message.channel.send(`لم يتم تشغيل اي اغنيه !`);
         return
    }
    client.player.setRepeatMode(message, false);
    client.player.stop(message);
if(lang === "en") {
    message.channel.send(`**The songs have been paused and the waiting list has been cleared **`)
  }else if(lang === "ar")
    message.channel.send(` تم ايقاف الاغاني و مسح قائمه الانتظار !`);


    }
}