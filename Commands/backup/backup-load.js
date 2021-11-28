 const { MessageEmbed } = require("discord.js");
const backup = require('discord-backup-modified');
const db = require("quick.db")
module.exports = {
    info: {
        name: 'load-backup',
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
  
          message.channel.send(":x: | You must be an administrator of this server to load a backup!"); 
return
} 
      let backupID = args[0]; 
      if(!backupID){  
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**يجب عليك ادخال ايدي صالح**")
  }else if(lang === "en")
  
message.channel.send(":x: | You must specify a valid backup ID!");
return
 } // Fetching the backup to know if it exists 
      backup.fetch(backupID).then(async () => { // If the backup exists, request for confirmation 
 const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**⚠️ يجب عليك التاكيد لتحميل النسخة بالكامل \nللتاكيد اكتب \`-confirm\`**")
  }else if(lang === "en")   
     message.channel.send(":warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type `-confirm` to confirm!"); 
        await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "-confirm"), { 
          max: 1, 
          time: 30000, 
          errors: ["time"] }).catch((err) => { // if the author of the commands does not confirm the backup loading return 
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم انتهاء الوقت تم الغاء تحميل النسخة**")
  }else if(lang === "en")
       message.channel.send(":x: | Time's up! Cancelled backup loading!"); 
        }); // When the author of the command has confirmed that he wants to load the backup on his server 
  // Load the backup 
        backup.load(backupID, message.guild).then(() => { // When the backup is loaded, delete them from the server 
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.author.send("**تم بدء تحميل النسخة**")
  }else if(lang === "en")
        message.author.send(":white_check_mark: | Start loading the backup!");        
          backup.remove(backupID); }).catch((err) => { // If an error occurred return 
   const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**البوت لا يمتلك صلاحيات كافية يجب اعطاء البوت صلاحية\`ADMINISTRATOR\`**")
  }else if(lang === "en")
   message.author.send(":x: | Sorry, an error occurred... Please check that I have administrator permissions!"); }); }).catch((err) => { console.log(err); // if the backup wasn't found return 
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لم يتم العثور على هذه النسخة الاحتياطية**")
  }else if(lang === "en")
                                                                                                                                            message.channel.send(":x: | No backup found for `"+backupID+"`!"); 
                                                                                                                                              });
    }
}