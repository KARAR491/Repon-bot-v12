const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'set-prefix',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, client, prefix) => {
      
 
   if(message.content.startsWith()) return 
let cmd = message.content.split(' ');
if (!message.member.hasPermission("ADMINISTRATOR")) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send(">>> **Don't have permission \`ADMINISTRATOR\`**")
return
}  
const arm = new MessageEmbed()
  .setTitle("**تغير البادئة**") 
    .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({
    dynamic: true
  }))
  .setDescription(`**تم تحديد البادئة الجديدة 

البادئه الجديده : __${cmd[1]}__ **`)
  

const enm = new MessageEmbed()
  .setTitle("**change the prefix**") 
    .setColor("RANDOM")
  .setThumbnail(message.author.displayAvatarURL({
    dynamic: true
  }))
  .setDescription(`**Done Upload new prefix

__${cmd[1]}__ **`)


 
    
    
    if(!args) {
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب البادئة الجديده**")
  }else if(lang === "en")
  message.channel.send("**write new prefix**") 
      return
    }


if (!cmd[1]) return message.reply('يجب وضع برفكس');
console.log(cmd)
console.log(message.guild.id, cmd[1])
await db.set(`prefix_${message.guild.id}`, cmd[1])
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(arm)
  }else if(lang === "en")
  message.channel.send(enm)
    }
}