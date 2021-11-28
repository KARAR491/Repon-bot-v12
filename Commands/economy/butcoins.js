const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'coins',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      
    let user = message.mentions.users.first() || message.author; 
      let credit = await db.fetch(`credit_${user.id}`) 
        if(credit === null) {
        credit = 0 
           return
        }
      
message.channel.send(`${user.username}, have a \`${credit}\`💸 conis`) 
    }
}