const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'clear',
        cat : ["Clear", "CLEAR"],
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
   const cmd = message.content.split(" ")     
      if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don'thave permission**")
      return
    }
		const amount = cmd[1] || 100

        if(!amount) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب عدد الرسائل**")
  }else if(lang === "en")
  message.channel.send("**Type Number**")
        }

        if(amount > 150) {
          const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**عدد كثير جدا**")
  }else if(lang === "en")
  message.channel.send("**Very Many **")
          return
        }

        if(amount < 1) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**قصير جدا**")
  }else if(lang === "en")
  message.channel.send("**Very Short**")
          return
        }

        await message.channel.messages.fetch({limit: amount }).then(messages => {
            message.channel.bulkDelete(messages)});
          
    
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**
تم مسح الرسائل
العدد : ${amount}**`).then(msg => {
    
setTimeout(function(){
  msg.delete()
},5000)
})  
}else if(lang === "en")
  message.channel.send(`Done Cleared The Message**__\`${amount}\`__**`).then(msg => {
    
setTimeout(function(){
  msg.delete()
},5000)
})
  
    }
}