const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'add-coins',
        cat : ["coins"],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
  const owner = "778370948650106892"   
      if (!owner.includes(message.author.id)) return;  
      let user = message.mentions.users.first() 
        if( !args[0] || !user) {
          return message.channel.send(`The first argument must be an user mention!`)
        } 
      let amount = args.slice(1).join(" "); if(!amount) { 
        return message.channel.send(`Please provide a number!`)
      } 
      if(isNaN(amount)) { return message.channel.send(`That's not a number!`) 
                        } 
      if(amount === "0") { return message.channel.send(`Why'd you give someone \`0\` credit??? 😂😂`)
                         } 
      db.add(`credit_${user.id}`, parseInt(amount)) 
      message.channel.send(`Succesfully added \`${parseInt(amount)}\` coins to **${user.tag}**'s !`)

    }
}