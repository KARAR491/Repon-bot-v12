const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const moment = require("moment")
module.exports = {
    info: {
        name: 'bot',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      const d = moment.duration(message.client.uptime); 
      const weeks = (d.weeks() == 1) ? `${d.weeks()} week` : `${d.weeks()} weeks`; 
      const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`; 
      const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
      const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;   
      const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`; 
      
      const { totalMemMb, usedMemMb } = await mem.info(); 
      const serverStats = stripIndent`
CPU :: ${cpu.model()} 
CPU Usage :: ${await cpu.usage()} % 
RAM :: ${totalMemMb} MB 
RAM Usage :: ${usedMemMb} MB `;
      let embed = new MessageEmbed()
.setTitle(`**${client.user.tag}**`)
.setColor("RANDOM")
.setDescription(`>>> **** __BOT NAME__ : <a:emoji_1:910564380888956938> 
${client.user.username}
__PING__ : <a:emoji_1:910564380888956938>
${client.ws.ping}
__RUNTIME__ : <a:emoji_1:910564380888956938>
${weeks}, ${days}, ${hours}, ${minutes}, ${seconds}
__BOT ID__ : <a:emoji_1:910564380888956938>
${client.user.id}
__BOT PREFIX__ : <a:emoji_1:910564380888956938>
${prefix}
__SERVERS__ : <a:emoji_1:910564380888956938>
${client.guilds.cache.size}
__USERS__ : <a:emoji_1:910564380888956938>
${client.users.cache.size}
__CHANNLES__ : <a:emoji_1:910564380888956938>
${client.channels.cache.size}
----------------
__BOT STATUS__ : <a:emoji_1:910564380888956938>
${serverStats}
****`)
      message.channel.send(embed)
    }
}