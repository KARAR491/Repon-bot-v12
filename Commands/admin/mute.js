const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const ms = require("ms");
module.exports = {
    info: {
        name: 'mute',
        cat : ["MUTE", "Mute"],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const cmd = message.content.split(" ").slice(3).join(" ") 
      if(!message.member.hasPermission("MUTE_MEMBERS")) {
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
    const e = "99y"
   var time = args[1]
    const ti = time || "Never Ending Time ⏲"
const tia = time || "وقت لا ينتهي ⏰"
const rea = cmd || "لا يوجد سبب"
const ree = cmd || "No Reason"
      tag.roles.add(role).then((m) => {
        
const lang = db.fetch(message.guild.id) 
  if(lang === "ar") {    
 message.channel.send(`**تم إعطاء العضو ميوت
العضو : ${tag}
الوقت : ${tia}
السبب : ${rea}
بواسطة : ${message.author}
**`)
   }else if(lang === "en")
 message.channel.send(`**Done muted the member
Use : ${tag}
Time : ${ti}
Reason : ${ree}
By : ${message.author}
**`);     

        setTimeout(() => {
            tag.roles.remove(role);
        }, ms(time))
})
    }
}