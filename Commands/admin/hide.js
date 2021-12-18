const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'hide',
        cat : ["Hide", "HIDE"],
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

if(!message.member.hasPermission('MANAGE_CHANNELS')) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission**")
            return;
        }
let everyone = message.guild.roles.cache.find(ro => ro==='everyone');
message.channel.createOverwrite(message.guild.id, {

        VIEW_MESSAGES: false,
        VIEW_CHANNEL: false
      }).then(msg => {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**تم اخفاء الشات**`)

  }else if(lang === "en")
message.channel.send(`**Done Hided Channel**`)

	})  
      
    }
}