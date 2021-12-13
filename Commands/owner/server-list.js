const Discord = require("discord.js");
const db = require("quick.db")



module.exports = {
    info: {
        name: 'all-servers',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(message.author.id !== "778370948650106892") return message.channel.send("you Don't owner of the bot");
      const servers = message.client.guilds.cache.array().map(guild => {/*
      const channel =   client.guilds.cache.get(guild.id ).channels.cache.array()[0];
    
    let invite =  channel.createInvite()
    */
        const em = new Discord.MessageEmbed()
        .setTitle("**Info Servers bot**")
        .setColor("BLUE")
        .setDescription(`
Name Server : ${guild.name} 
Id Server : ${guild.id} 
Membres : ${guild.memberCount} 
Owner : ${guild.owner.user.tag}`)

        var msg = (`${guild.name} ${guild.id} ${guild.memberCount} Users ${guild.owner.user.tag}`);
        message.channel.send(em)
      }); 
    }
}