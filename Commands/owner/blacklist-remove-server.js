const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'rem-server',
        cat : [""],
        description: 'remove blacklist of the servers',
        coolDown: 1
    },
    run: async (message, prefix, client) => {
      const owner = "778370948650106892"
      const log = "910560890779217950"

if (message.channel.type === "dm") return; 
if (!owner.includes(message.author.id)) return; 
      let args = message.content.split(" ")[1]; 
      if (!args) message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setTitle(`**Please Type Server ID**`));
      let reason = message.content.split(' ').slice(2).join(' '); 
      if (!reason) reason = "No Reason Provided"; 
      let Guild = client.guilds.cache.get(args); 
      if (!Guild) return message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setTitle(`**Invalid Guild ID**`)); 
      let ownername = client.users.cache.get(Guild.owner.id); 
      let blacklist = await db.fetch(`blacklist_${message.guild.id}`) 
        await db.set(`blacklist_${args}`, "off") 
          message.channel.send(new Discord.MessageEmbed() .setColor("#FFC900") .setTitle(`**NEW GUILD UNBLACKLIST**`) .setThumbnail(Guild.iconURL()) .setDescription(`**❯ Guild Name: \`${Guild.name}\` ❯ Guild ID: \`${Guild.id}\` ❯ Guild Owner: \`${ownername.tag}\` ${ownername} ❯ Owner ID: \`${ownername.id}\` ❯ Reason: \`${reason}\` ❯ Time & Date: \`${message.createdAt.toLocaleString()}\`**`) .setFooter(client.user.username) .setTimestamp()); Guild.owner.send(`**${ownername}**`, new Discord.MessageEmbed() .setDescription(`**Your Server \`${Guild.name}\` Un-Blacklisted\nReason: \`${reason}\`**`) .setFooter(client.user.username) .setTimestamp().setColor("#FFC900"));
    }
  }