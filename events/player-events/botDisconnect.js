module.exports = (client, message, queue) => {
const db = require("quick.db")
    
  console.log("Repon Bot")
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم توقف الموسيقى بسبب انقطاعي عن الروم**")
  }else if(lang === "en")
  message.channel.send("**The music has stopped because I'm out of the room **")
}