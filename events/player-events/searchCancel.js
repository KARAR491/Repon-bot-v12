module.exports = (client, message, query, tracks) => {
const db = require("quick.db")
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(`**لم تقدم إجابة صحيحة ... الرجاء إرسال الأمر مرة أخرى!؛  **`)
  }else if(lang === "en")
    message.channel.send(`You did not provide a valid response ... Please send the command again !`);
            console.log("Repon Bot")
};