const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'ban',
        cat : ["Ban", "BAN"],
        description: 'ban members',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {

if(message.content.startsWith()) return
if(!message.member.hasPermission('BAN_MEMBERS')) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
message.channel.send('You Dont Have `BAN_MEMBERS` Permission ');
            return;
        };
if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا يمتلك البوت صلاحيات كافية**")
  }else if(lang === "en")
message.channel.send('You Dont bot `BAN_MEMBERS` Permission ');
            return;
        };
    


        
let uss = message.mentions.members.first();
        if(!uss) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
  message.channel.send("**رجاء منشن العضو**")
  }else if(lang === "en")          message.channel.send('Please Mention User To Banned');
            return;
        }
let ress = args.join(" ");
    if(!ress) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {   message.channel.send("**رجاء اكتب سبب الحظر **")
  }else if(lang === "en")
message.channel.send('Please write reason of the banned')
}

uss.ban()
            .then(() => {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**
تم تبنيد ${uss.name}
السبب ${ress[2.3] || "لا يوجد سبب"}**`)
  }else if(lang === "en")              message.channel.send(`
Banned : <@!${uss.id}>
Reason : ${ress[2.3] || "no Reason"}`)
            })          


 


      
    }
}