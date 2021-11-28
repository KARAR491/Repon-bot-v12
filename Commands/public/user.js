const Discord = require("discord.js");
const db = require("quick.db")
let moment = require('moment')
//moment.locale('en')
moment.locale('ar')
module.exports = {
    info: {
        name: 'user',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const uss = message.mentions.users.first() ||message.guild.members.cache.get(args[1]) || message.author;
const mome = require("moment")  
//ar
      
const arem = new Discord.MessageEmbed()
  /*
  .setTitle(`${uss} معلومات`)
.setThumbnail(uss.user.displayAvatarURL({dynamic: true,size:1024}))
.setColor(uss.user.displayHexColor)

.addField("ايدي", uss.user.id, true)
  .addField("الرتب الخاصة بي", `${uss.roles.cache.map(roles => `${roles}`)}`, true)
.addField("بوت", uss.user.bot,true) 
.addField("دخولك للسيرفر", uss.joinedAt)
.addField("دخولك الى الديسكورد", `\`${moment(uss.user.createdAt).format('M/D/YYYY')}\` [ ${moment(uss.user.createdAt).fromNow()} ]` , true)
*/
//en
let enem = new Discord.MessageEmbed()
.setTitle(`${uss} Info`)
.setThumbnail(uss.displayAvatarURL({dynamic: true}))
.setColor("BLACK")

.addField("ID", uss.id, true)
  


    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(arem)
  }else if(lang === "en")
  message.channel.send(enem)
    }
}