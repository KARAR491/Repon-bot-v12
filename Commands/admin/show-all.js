const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'show-all',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      
    if(message.author.bot || !message.guild) return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission**")
      return 
    }
      
      
      let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.createOverwrite(everyone, {VIEW_CHANNEL: true}).then(() => {
      });
    })
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم اضهار جميع الشاتات**")
  }else if(lang === "en")
  message.channel.send("**All chats have been shown **")
    }
};