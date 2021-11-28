const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'roles',
        cat : [""],
        description: 'show roles of the servers',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const Roles = message.guild.roles.cache.map(t => t.toString()).join(`
-`);
  const Ro = new MessageEmbed()
.setColor("RANDOM")
.setTitle("ROLES SERVER")
.setDescription(`
----------------
${Roles}`)
message.channel.send(Ro)
    }
  }