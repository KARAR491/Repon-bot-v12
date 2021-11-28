const Discord = require("discord.js");

const ms = require("ms");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'daily',
        cat : [""],
        description: 'daily conis',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
     
      let timeout = 86400000; 
      let amount = Math.floor(Math.random() * 200) + 10; 
      const author = await 
        db.fetch(`daily_${message.author.id}`); 
      if (author !== null && timeout - (Date.now() - author) > 0) { 
        let time = ms(timeout - (Date.now() - author,{ long: true })); 
        return message.channel.send(`❌You already claimed your daily reward today!  ${time} `) 
      } else { 
         message.channel.send(new Discord.MessageEmbed() .setDescription(`Your daily reward was \`${amount}\`$!`) .setColor("RED") .setTimestamp()) 
          db.add(`credit_${message.author.id}`, amount) 
            db.set(`daily_${message.author.id}`, Date.now())
      }
    }
}