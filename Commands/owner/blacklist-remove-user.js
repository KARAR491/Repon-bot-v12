const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'rem-user',
        cat : [""],
        description: 'remove black list of the user',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const owner = "778370948650106892"
      const log = "910560890779217950"
      if (!owner.includes(message.author.id)) return;
let user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
if (!user) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`**Please Type Mention / ID User**`));
let reason = message.content.split(' ').slice(2).join(' ');
if (!reason) reason = "No Reason Provided";
let Blacklist = await db.fetch(`Blacklist_${user.id}`);
if (Blacklist === null) Blacklist = 'off';
let embed = new Discord.MessageEmbed()
.setColor("#FFC900")
.setThumbnail(user.avatarURL())
.setTitle("**NEW UN_BLACKLIST**")
.setDescription(`**❯ User Name: \`${user.tag}\` ${user}**
**❯ User ID: \`${user.id}\`**
**❯ Moderator: \`${message.author.username}\`**
**❯ Reason: \`${reason}\`**
**❯ Time & Date: \`${message.createdAt.toLocaleString()}\`**`)
.setFooter(client.user.username)
.setTimestamp();
message.channel.send(embed);
db.set(`Blacklist_${user.id}`, "off");
user.send(`**${user}**`, new Discord.MessageEmbed()
.setDescription(`**You Are Un_Blacklist From \`${client.user.username}\`\nReason: \`${reason}\`**`)
.setFooter(client.user.username)
.setTimestamp().setColor("#FFC900"));
    }
}