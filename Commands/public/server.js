const Discord = require("discord.js");
const moment = require("moment")
const db = require("quick.db")
module.exports = {
    info: {
        name: 'server',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const members = message.guild.members.cache;
      const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
      const emoji = message.guild.emojis.cache;
      const embed = new Discord.MessageEmbed()
		.setThumbnail(message.guild.iconURL({dynamic: true, size: 1024}))
		.setColor("BLUE")
		.setAuthor(message.guild.name, message.guild.iconURL())
.addField("Name", message.guild.name, true)
.addField("ID", message.guild.id, true)
		.addField("Owner", message.guild.owner, true)
.addField("Boosts", message.guild.premiumSubscriptionCount || '0', true)
		.addField("Region", message.guild.region, true)
	.addField("Verification Level", message.guild.verificationLevel, true)
			.addField("Created At ", `\`${moment(message.guild.createdTimestamp).format('M/D/YYYY')}\` [ ${moment(message.guild.createdTimestamp).fromNow()} ]`, true)
.addField(`Members [${message.guild.members.cache.size}]`,`Humans [${members.filter(member => !member.user.bot).size}]
Bots [${members.filter(member => member.user.bot).size}]
Online [ ${message.guild.members.cache.filter(m => m.presence.status === "online").size} ] \n Offline [${message.guild.members.cache.filter(m => m.presence.status === "offline").size}] \n dnd [${message.guild.members.cache.filter(m => m.presence.status === "dnd").size}] \n idle [${message.guild.members.cache.filter(m => m.presence.status === "idle").size}] `, true)
.addField("Emojis", emoji.size, true)
.addField("Roles", roles.length, true)
      .addField(`Channels [${message.guild.channels.cache.size}]`, `Categorys [${message.guild.channels.cache.filter(c => c.type === "category").size}] \nText Channels [${message.guild.channels.cache.filter(c => c.type === "text").size}] \n Voice Channels [${message.guild.channels.cache.filter(c => c.type === "voice").size}] `)
		message.channel.send(embed)
    }
      }