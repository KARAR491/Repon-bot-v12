module.exports = (client, message, playlist) => {
const db = require("quick.db")
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`${playlist.title} has been added to the queue (**${playlist.items.length}** songs) !`);
    
  }else if(lang === "en")
  message.channel.send(`تمت إضافة ${playlist.title} إلى قائمة الانتظار (** ${playlist.items.length} ** )! `);
    
  console.log("Repon Bot")
};