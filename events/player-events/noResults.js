module.exports = (client, message, query) => {
const db = require("quick.db")
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(` لم يتم العثور على نتائج في يوتيوب ل ${query} !`);
  }else if(lang === "en")
message.channel.send(`No YouTube results found for ${query} !`); 
            console.log("Repon Bot")
};