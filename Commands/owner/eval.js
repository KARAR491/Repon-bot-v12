const Discord = require("discord.js");
const db = require("quick.db")
const check = require("is-url");
module.exports = {
    info: {
        name: 'eval',
        cat : [""],
        description: 'eval command of the owner',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      try {
        if(message.author.id == "778370948650106892") {
           
            
        

        if(!args[0]) {
		    return message.channel.send({embed: {
                color: 16734039,
                description: "Please put the code to evaluate!"
            }});
        }

            if (args.join(" ").toLowerCase().includes("token")) {
            return message.channel.send({embed: {
                color: 16734039,
                description: "You can't use this (This for safetly resons)!"
            }});
            }
			
			if (args.join(" ").toLowerCase().includes("process.env")) {
            return message.channel.send({embed: {
                color: 16734039,
                description: "You can't use this (This for safetly resons)!"
            }});
            }

            const toEval = args.join(" ")
            const evaluated = eval(toEval)

            let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTimestamp()
                .setTitle("Eval")
                .addField("To evaluate:", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
                .addField("Evaluated:", evaluated)
                .addField("Type of:", typeof(evaluated));

            message.channel.send(embed);
        }
} catch (err) {
let embed = new Discord.MessageEmbed()
.setColor("#FF0000")
.setTitle("Error!")
.setDescription("**Error Code:** *" + err + "*")

.setFooter("Bot created by " , `<@!778370948650106892>`, true)
 .setTimestamp()
 return message.channel.send(embed);
      }
    }
}