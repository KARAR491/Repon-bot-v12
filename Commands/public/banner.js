const Discord = require("discord.js");
const client = new Discord.Client()
const db = require("quick.db")
module.exports = {
  info:{
    name:"banner",
    cat:[""],
    description:"banner cmd",
    coolDown:"3",
   category:"public",
    usags:"[prefix] + banner",
    per:"No Permission"
  },
    
    run: async (message, prefix, client) => {
      let args = message.content.split(" ");
    let member = message.mentions.users.first();
 
    if (args[0] && !args[1]) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send(new Discord.MessageEmbed().setTitle("**banner**").setURL(`https://api.abderrahmane300.repl.co/banner/${message.author.id}`).setImage(`https://api.abderrahmane300.repl.co/banner/${message.author.id}`))
    }
    if (member) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
message.channel.send(new Discord.MessageEmbed().setTitle("**banner**").setURL(`https://api.abderrahmane300.repl.co/banner/${member.id}`).setImage(`https://api.abderrahmane300.repl.co/banner/${member.id}`))
    } else if (args[1] && !member) {
      nitro.fetchUser(args[1]).then((userr) => {
        message.channel.stopTyping();
        setTimeout(() => {
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
        message.channel.send(new Discord.MessageEmbed().setTitle("**banner**").setURL(`https://api.abderrahmane300.repl.co/banner/${user.id}`).setImage(`https://api.abderrahmane300.repl.co/banner/${user.id}`))
        });
      }
    }
};
