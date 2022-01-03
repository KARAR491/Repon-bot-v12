module.exports = (client, message, query, tracks) => {
const db = require("quick.db")
const lang = db.fetch(message.guild.id)
  if(lang === "en") {
    message.channel.send({
      embed: {
        color: "BLUE",
        author: {name: `These are the search results ${query}`},
        footer: { text: "Reponbot" },
        timestamp: new Date(),
        description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`
},
    })
  }else if(lang === "ar")
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `هذه نتائج البحث ${query}` },
            footer: { text: 'Repon Bot' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
            console.log("search Ready")
};