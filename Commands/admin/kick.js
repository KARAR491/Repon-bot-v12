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