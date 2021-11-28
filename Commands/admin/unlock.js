const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'unlock',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(!message.member.hasPermission('MANAGE_CHANNELS')) {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
message.channel.send('You Dont Have `MANAGE_CHANNELS` Permission ');
            return;
        }
    const ar = new MessageEmbed().setColor("RANDOM").setTitle("فتح الشات").setDescription(`**تم فتح الشات 🔓**

بواسطة ${message.author.tag}`)
.setThumbnail(message.author.displayAvatarURL(
  {dynamic: true, size: 1024}))
    const en = new MessageEmbed().setColor("RANDOM").setTitle("Unlocked Channel").setDescription(`**Done Unocked The Channel 🔓**


By ${message.author.tag}`)
.setThumbnail(message.author.displayAvatarURL(
  {dynamic: true, size: 1024}))

    
      let everyone = message.guild.roles.cache.find(ro => ro==='everyone');
message.channel.createOverwrite(message.guild.id, {

        SEND_MESSAGES: true

      }).then(msg => {

const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(ar)
  }else if(lang === "en")
  message.channel.send(en)
	
})
    }
}