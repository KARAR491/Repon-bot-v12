module.exports = (client, message, query, tracks, content, collector) => {
  const db = require("quick.db")
  const lang = db.fetch(message.guild.id)
  if (lang === "en") {
    message.channel.send(`** Please choose a valid number from **1** to **${tracks.length}**!`)
  } else if (lang === "ar")
    message.channel.send(`يرجى اختيار رقم صحيح من **1** الى **${tracks.length}** !`);
  console.log("Repon Bot")
};