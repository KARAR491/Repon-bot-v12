const { MessageEmbed } = require("discord.js");
const child = require ('child_process')

const db = require("quick.db")
module.exports = {
    info: {
        name: 'shell',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const owner = "778370948650106892"
      if (!owner.includes(message.author.id)) return;  
      const command = args.join(" ");
      if(!command) return message.reply('pls specific a module to install');
      
      child.exec(command, (err, res) => {
        if(err) return console.log(err);
        message.channel.send(res.slice(0, 2000), { code: 'js'});
      })
                             }
    }
