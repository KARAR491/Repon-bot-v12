module.exports = (client, message, track) => {
  const db = require("quick.db")
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(` تم تشغيل ${track.title} الروم <#${message.member.voice.channel.id}> ...`);
  }else if(lang === "en")
  message.channel.send(`**turned on ${track.title} the room <#${message.member.voice.channel.id}>**`)
};