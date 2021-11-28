const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'add-server',
        cat : [""],
        description: 'add balcklist of the servers',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const owner = "778370948650106892"
      const log = "910560890779217950"
      const cmd = message.content.split(" ").join(" ")
        if (message.channel.type === "dm") return; 
      if (!owner.includes(message.author.id)) return;  
      if (!cmd) message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setTitle(`**Please Type Server ID**`)); 
      let reason = message.content.split(' ').slice(3).join(' '); 
      if (!reason) reason = "No Reason Provided"; 
      let Guild = client.guilds.cache.get(cmd);
      
      if (!Guild) return message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setTitle(`**Invalid Guild ID**`)); 
      let ownername = client.users.cache.get(Guild.owner.id); 
      let blacklist = await db.fetch(`blacklist_${message.guild.id}`) 
        await db.set(`blacklist_${cmd}`, "on") 
          message.channel.send(new Discord.MessageEmbed() .setColor("#FFC900") .setTitle(`**NEW GUILD BLACKLIST**`) .setThumbnail(Guild.iconURL()) .setDescription(`**❯ Guild Name: \`${Guild.name}\` ❯ Guild ID: \`${Guild.id}\` ❯ Guild Owner: \`${ownername.tag}\` ${ownername} ❯ Owner ID: \`${ownername.id}\` ❯ Reason: \`${reason}\` ❯ Time & Date: \`${message.createdAt.toLocaleString()}\`**`) .setFooter(client.user.username) .setTimestamp()); 
      const webhook = await client.channels.cache.get(log).createWebhook("BLACKLIST GUILDS", { avatar: client.user.displayAvatarURL(), channel: client.channels.cache.get(log) }); 
      await webhook.send(new Discord.MessageEmbed() .setThumbnail(Guild.iconURL()) .setAuthor(Guild.name, Guild.iconURL()) .setColor("#FFC900") .setTitle(`**New Blacklist Guild**`) .addField(`**❯ Guild Name:**`, `\`${Guild.name}\``) .addField(`**❯ Guild ID:**`, `\`${Guild.id}\``) .addField(`**❯ Guild Owner:**`, `\`${ownername.tag}\``) .addField(`**❯ Moderator:**`, `\`${message.author.username}\``) .addField(`**❯ Reason:**`, `\`${reason}\``) .addField(`**❯ Time & Date:**`, `\`${message.createdAt.toLocaleString()}\``) .setFooter(client.user.username) .setTimestamp()); Guild.owner.send(`**${ownername}**`, new Discord.MessageEmbed() .setDescription(`**Your Server \`${Guild.name}\` Blacklisted\nReason: \`${reason}\`**`) .setFooter(client.user.username) .setTimestamp().setColor("#FFC900"));
    }
}