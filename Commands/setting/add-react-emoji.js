const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'rr-add',
        cat : [""],
        description: 'reaction role add',
        coolDown: 1
    },
    run: async (message, prefix, client) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission \`ADMINISTRATOR\`**")
        return
      }
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
      const msg = await channe.messages.fetch(cmd[2]);
      await msg.react(emoji);
      
      await db.push(`${message.guild.id}_reactionroles`, 
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
  
 const em = new MessageEmbed()
  .setTitle("Add Reactions role")
      .setColor("RANDOM")
      
      .setDescription(`**
Channel :
${channe}

Message Id :
\`${messageID}\`

Emoji : ${emoji}

Role : ${role}
**`)
message.channel.send(em).catch(e => {
      message.channel.send("Error\n" + e);
})
      
    }
}  
