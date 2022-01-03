module.exports = (client, message, queue) => {
const db = require("quick.db")
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`تم ايقاف الموسيقى ولم تتبقى موسيقى في قائمه الانتظار !`);
  }else if(lang === "en")
  message.channel.send(`The music has stopped and there is no music left in the queue `)
            console.log("Repon Bot")
};