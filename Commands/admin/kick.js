const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'kick',
        cat : ["Kick", "KICK"],
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
if(message.content.startsWith()) return
if(!message.member.hasPermission('KICK_MEMBERS')) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
message.channel.send('You Dont Have `KICK_MEMBERS` Permission ');
            return;
        };
        
let uss = message.mentions.members.first();
        if(!uss) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**رجاء منشن العضو حتى يتم طرده**")
  }else if(lang === "en")
message.channel.send('Please Mention User To kicked');
            return;
        }

uss.kick()
            .then(() =>  {
       const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم الطرد**")
  }else if(lang === "en")
        message.channel.send(`Kicked ${uss}`)
                         })
            .catch(console.error);
    

      
    }
}