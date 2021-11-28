const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
const backup = require('discord-backup-modified');

module.exports = {
    info: {
        name: 'create-backup',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      if(!message.member.hasPermission("ADMINISTRATOR")){ 
   const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافية**")
  }else if(lang === "en")
    message.channel.send(":x: | You must be an administrator of this server to request a backup!"); 
       return                                                  } // Create the backup 
      backup.create(message.guild, { jsonBeautify: true }).then((backupData) => { // And send informations to the backup owner 
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.author.send("**تم صناعة نسخة للسيرفر لتحميل النسخة يجب كتابة الامر في السيرفر المطلوب \n الامر**").then(msg => {
          message.author.send(`
\`\`\`js
${prefix}load-backup ${backupData.id}
\`\`\``)
       })
  }else if(lang === "en")
          message.author.send("The backup has been created! To load it, type this command on the server of your choice: load\nWrite the command").then(msg => {
          message.author.send(`
\`\`\`js
${prefix}load-backup ${backupData.id}
\`\`\``)
       })
      });  
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم صناعة النسخة تم  ارسال ايدي النسخة في الخاص**")
  }else if(lang === "en")
    message.channel.send(":white_check_mark: Backup successfully created. The backup ID was sent in dm!"); 
    
    }
}