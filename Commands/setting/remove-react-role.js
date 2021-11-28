const Discord = require("discord.js");
const client = new Discord.Client()
const db = require("quick.db")
module.exports = {
  info:{
    name:"rr-delete",
    cat:[""],
    description:"delete reaction role",
    coolDown:"3",
   category:"setting",
    usags:"[prefix] + rr-delete",
    per:"MANAGE_ROLES"
  },
    
    run: async (message, args, prefix, client) => {
    const cmd = message.content.split(" ")
      const channe = message.mentions.channels.first() || message.channels || cmd[1]

let msgID = await cmd[2]

let emoji = cmd[3]
      const role = message.mentions.roles.first() || message.roles || cmd[4];
      
 let messageID = msgID //message.guild.roles.cache.get(cmd[4])
console.log(cmd)
    if(!channe) {
      const lang =db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب ايدي الشات او منشن الشات**")
  }else if(lang === "en")
  message.channel.send("**write id the chat of mentioned the chat**")
      return 
    }
      if(!messageID) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب ايدي الرسالة**")
  }else if(lang === "en")
  message.channel.send("**Write message Id **")
        return 
      }
      if(!emoji) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب الايموجي**")
  }else if(lang === "en")
  message.channel.send("**Write emoji**")
        return 
      }
      if(!role) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**منشن الرول او اكتب  الاي**")
                  
  }else if(lang === "en")
  message.channel.send("**Write Role or mentioned or id of the role **")

return 
};
      
      try{
      const msg = await channe.messages.fetch(cmd[2])
      msg.reactions.cache.get(emoji).remove();
// or
//msg.reactions.cache.get(✅).remove(); 


      await db.delete(`${message.guild.id}_reactionroles`, 
        {
          message: msg.id,
          emoji: emoji.id || emoji,
          role: role.id 
        }
      );

    console.log(cmd)
    
      }catch(e){
      message.channel.send("Error\n" + e);
      }
      const em = new Discord.MessageEmbed()
  .setTitle("Delete Reactions role")
      .setColor("RANDOM")
      
      .setDescription(`**
Channel : 
${channe}

Message Id :
\`${messageID}\`

Emoji : 
${emoji}

Role : 
${role}
**`)
message.channel.send(em).catch(e => {
      message.channel.send("Error\n" + e);
})
    }
};