const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'show',
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
let everyone = message.guild.roles.cache.find(ro => ro==='everyone');
message.channel.createOverwrite(message.guild.id, {

        VIEW_MESSAGES: true,
        VIEW_CHANNEL: true

      }).then(msg => {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم  أضهار الشات**")
  }else if(lang === "en")
message.channel.send(`**Done Showed Channel**`)

	})
    }
}