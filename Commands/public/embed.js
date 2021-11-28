const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'embed',
        cat : ["EMBED", "Embed"],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const arg = args[0]
  if(!arg) {
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**اكتب الكلام ليتم اعادة ارساله**").then(msg => {
    
setTimeout(function(){
  msg.delete()
},5000)
})
  }else if(lang === "en")
  message.channel.send("**Type the message to be sent back **").then(msg => {
    
setTimeout(function(){
  msg.delete()
},5000)
})  
  return 
  }

const embed = new MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${message.guild.name}`, message.guild.iconURL())

.setThumbnail(message.author.displayAvatarURL({
  dynamic: true, size: 1024
}))
.setDescription(`**${args.join(" ")}**
By: ${message.author.tag}`)

message.channel.send(embed)
message.delete()
 
      
    }
}