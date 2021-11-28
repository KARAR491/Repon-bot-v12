const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'add-user',
        cat : [""],
        description: 'blacklist add of the user',
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
let Blacklist = await db.fetch(`Blacklist_${args[2]}`);
if (Blacklist === null) Blacklist = 'off';
let embed = new Discord.MessageEmbed()
.setColor("#FFC900")
.setThumbnail(user.avatarURL())
.setTitle(`**NEW BLACKLIST**`)
.setDescription(`**❯ User Name: \`${user.tag}\` ${user}**
**❯ User ID: \`${user.id}\`**
**❯ Moderator: \`${message.author.username}\`**
**❯ Reason: \`${reason}\`**
**❯Time & Date: \`${message.createdAt.toLocaleString()}\`**`)
.setFooter(client.user.username)
.setTimestamp();
message.channel.send(embed);
const webhook = await client.channels.cache.get(log).createWebhook("BLACKLIST USERS", {
avatar: client.user.displayAvatarURL(),
channel: client.channels.cache.get(log)
});
await webhook.send(new Discord.MessageEmbed()
.setThumbnail(user.avatarURL())
.setColor("BLUE")
.setTitle(`**New Blacklist**`)
.addField(`**❯ User Name:**`, `\`${user.tag}\` ${user}`)
.addField(`**❯ ID:**`, `\`${user.id}\``)
.addField(`**❯ Moderator:**`, `\`${message.author.username}\``)
.addField(`**❯ Reason:**`, `\`${reason}\``)
.addField(`**❯ Time & Date:**`, `\`${message.createdAt.toLocaleString()}\``)
.setThumbnail(user.displayAvatarURL())
.setFooter(client.user.username)
.setTimestamp());
webhook.delete();
db.set(`Blacklist_${user.id}`, "on");
user.send(`**${user}**`, new Discord.MessageEmbed()
.setDescription(`**You Are Blacklist From \`${client.user.username}\`\nReason: \`${reason}\`**`)
.setFooter(client.user.username)
.setTimestamp().setColor("#FFC900"));

    }
}