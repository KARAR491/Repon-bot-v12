const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'eval',
        cat : [""],
        description: 'eval command of the owner',
        coolDown: 1
    },
    run: async (message, prefix, client) => {
      

    if (message.author.id != "778370948650106892") {
        //Only allow bot developer(s) to use the eval command, not all users

        const noToken = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('OI WHO GAVE YOU PERMISSION TO USE EVAL!!!nn*back off...*')
       return message.channel.send(noToken)
    }

    var result = message.content.split(" ").slice(1).join(" ")
  const args = message.content.split(" ").slice(1).join(" ")
    let evaled = await eval(result);
      if(!evaled) return message.channel.send("Type code")

    //Convert evaled into a JSON String if it is an Object
    if (typeof evaled === "object") evaled = JSON.stringify(evaled);

    //Do this if evaled is anything else other than a number, text, or true/false
    if (typeof evaled !== "number" && typeof evaled !== "string" && typeof evaled !== "boolean") evaled = `Output could not be converted to text (output was of type: ${typeof evaled}).`;

    const evalEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .addFields(
        {
            name: '**Input:**',
            value: `\`${args}\``,
            inline: false
        },
        {
            name: '**Output:**',
            value: `\`${evaled}\``,
            inline: false
        }
     );
     message.channel.send(evalEmbed).catch(err => {
       const Em = new Discord.MessageEmbed()
       .setTitle("defiend")
       .setColor("RANDOM")
       .setDescription(`
****${args}
${evaled}not Defined****`)
       message.channel.send(Em)
     })
     
    } 
}