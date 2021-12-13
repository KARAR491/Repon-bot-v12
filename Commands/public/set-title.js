const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-title',
        cat : [""],
        description: 'set Title For Cmd User',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const cmd = message.content.split(" ")
      const cmd2 = message.content.split(" ").slice(1).join(" ")
      const user = message.mentions.users.first() || message.author || message.guild.members.cache.get(cmd)
        if(!cmd2) {
const lang = db.fetch(message.guild.id)   
if(lang === "ar") {     
message.channel.send("**رجاء اكتب الوصف الخاص بك**")  
 }else if(lang === "en") 
message.channel.send(`**play writer Description For You**`); 
     return
      }
    console.log("user",message.author.username, "Title", cmd2, "Guild", message.guild.id)
db.set(`title-user_${message.author.id}`, cmd2)
      const lang = db.fetch(message.guild.id)  
        if(lang === "ar") { 
          message.channel.send(`**${message.author.username} تم تحديد الوصف الخاص بك
الوصف : ${cmd2}**`)  
    }else if(lang === "en") 
          message.channel.send(`**Done Define your description 
Description : ${cmd2}**`);  
      return
    }
}