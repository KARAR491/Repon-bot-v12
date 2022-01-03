module.exports = (client, message, queue) => {
const db = require("quick.db")
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**توقفت الموسيقى بسبب لم يتبقى احد في الروم الصوتي**")
  }else if(lang === "en")
  message.channel.send("**The music stopped because there was no one left in the audio ROOM **")
  console.log("Repon Bot")
};