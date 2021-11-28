const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'unmute',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(!message.member.hasPermission('MUTE_MEMBERS')) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
message.channel.send('You Dont Have `MUTE_MEMBERS` Permission ');
            return;
        };
if(!message.guild.member(client. user).hasPermission('MUTE_MEMBERS')) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا يمتلك البوت صلاحيات كافية**")
  }else if(lang === "en")
message.channel.send('You Dont bot `MUTE_MEMBERS` Permission ');
            return;
        };
    if(message.content.startsWith ()) return;
  const role = message.guild.roles.cache.find(role => role.name === 'Repon Muted');
    if(!role)  {
message.guild.roles.create({ data: { 
  name: 'Repon Muted', 
permissions: [], 
  color: 'blue' 
                                                    } 
})
  }
  const tag = message.mentions.members.first() 
if(!tag) { 
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**رجاء منشن العضو**")
  }else if(lang === "en")
  message.channel.send(">>> :x: **Please mention the user**")
          return;
         }

tag.roles.remove(role)
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**تم إزالة الميوت
الشخص : ${tag}**`)
  }else if(lang === "en")
  message.channel.send(`>>> **Done Unmuted of the user\n User : ${tag}**`)
    }
}