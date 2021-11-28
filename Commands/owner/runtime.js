const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

const db = require("quick.db")
module.exports = {
    info: {
        name: 'runtime',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
if (message.author.id != "778370948650106892") return 
      const duration = moment.duration(client.uptime).format("M [month], W [week], D [days], H [hrs], m [mins], s [secs]");
      
let embed = new Discord.MessageEmbed()
.setTitle("Uptime")
.setDescription(`${duration}`)
.setColor('RANDOM')

message.channel.send(embed);
    }
}