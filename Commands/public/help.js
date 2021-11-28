const Discord = require("discord.js");
const { DiscordAPIError, MessageEmbed } = require("discord.js")
const db = require("quick.db")
const fs = require("fs")
const { readdirSync } = require("fs");

module.exports = {
    info: {
        name: 'help',
        cat : ["command", "commands"],
        description: 'list commands or help command',
   category:"public",
    usags:"[prefix] + help",
    per:"No Permission",
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
  const cmd = message.content.split(" ");
    if (cmd[1]) {
      let xh = client.commands.find((f) => f.info.name == cmd[1]);
      if (!xh) return;
      var oHelp = `${xh.info.name}\n${xh.info.description}\n${xh.info.category}\n${xh.info.usags}\n${xh.info.per}`;
    }
      const orHelpen =  new MessageEmbed()
.setTitle(`info commannd `)
  .setColor("RANDO")
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setDescription(`>>> **${oHelp}**`)
      
     let helps = client.commands.map((m) => `${m.info.name}`).join(" , ")
      const embeden = new MessageEmbed()
        .setTitle("List Commands")
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setColor("RANDOM")
      .setDescription(`**** \`\`\`
${helps}
\`\`\` ****
"**"** ** Commands__ ${client.commands.size} __ ** **"**"
You can explain something by 
Ex ** __${prefix}help ping __ **`)
      if(cmd[1]) { return message.channel.send(orHelpen)
                 }
if(!cmd[1]) return message.channel.send(embeden)
                                     
    }
};

     