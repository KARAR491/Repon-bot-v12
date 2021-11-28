const Discord = require("discord.js");
const db = require("quick.db")
const backup = require('discord-backup-modified');
module.exports = {
    info: {
        name: 'info-backup',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, prefix, client) => {
      const cmd = message.content.split(" ")
      const args = cmd
let backupID = cmd[1]; if(!backupID){ 
return message.channel.send(":x: | You must specify a valid backup ID!"); 
} // Fetch the backup 
backup.fetch(backupID).then((backupInfos) => { 
const date = new Date(backupInfos.data.createdTimestamp); 
const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString(); 
const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`; 
  console.log(cmd)
let embed = new Discord.MessageEmbed() .setAuthor("Backup Informations") // Display the backup ID 
.addField("Backup ID", backupInfos.id, false) // Displays the server from which this backup comes 
.addField("Server ID", backupInfos.data.guildID, false) // Display the size (in mb) of the backup 
.addField("Size", `${backupInfos.size} kb`, false) // Display when the backup was created 
.addField("Created at", formatedDate, false) 
  .setColor("#FF0000"); 
  let em = new Discord.MessageEmbed() .setAuthor("معلومات نسخه") // Display the backup ID 
.addField("ايدي النسخة", backupInfos.id, false) // Displays the server from which this backup comes 
.addField("ايدي السيرفر", backupInfos.data.guildID, false) // Display the size (in mb) of the backup 
.addField("الحجم", `${backupInfos.size} kb`, false) // Display when the backup was created 
.addField("وقت الانشاء", formatedDate, false) 
  .setColor("#FF0000"); 
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(em)
  }else if(lang === "en")
  message.channel.send(embed)
  return 
}).catch((err) => { console.log(err); // if the backup wasn't found return 
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لم يتم العثور على هذه النسخة الاحتياطية**")
  }else if(lang === "en")
                                                                                                                                            message.channel.send(":x: | No backup found for `"+backupID+"`!"); 
                                                                                                                                              });
    }
}