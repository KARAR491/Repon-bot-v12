module.exports = (client, message, queue, track) => {
const db = require("quick.db")
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(` ${track.title} تم بنجاح الاضافة الى قائمه الانتظار  !`);
  }else if(lang === "en")
  message.channel.send(`**${track.title} Successfully added to the waiting list **`)
};