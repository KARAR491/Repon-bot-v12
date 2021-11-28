const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'hide',
        cat : ["Hide", "HIDE"],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {


if(!message.member.hasPermission('MANAGE_CHANNELS')) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have permission**")
            return;
        }
let everyone = message.guild.roles.cache.find(ro => ro==='everyone');
message.channel.createOverwrite(message.guild.id, {

        VIEW_MESSAGES: false,
        VIEW_CHANNEL: false
      }).then(msg => {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**تم اخفاء الشات**`)

  }else if(lang === "en")
message.channel.send(`**Done Hided Channel**`)

	})  
      
    }
}