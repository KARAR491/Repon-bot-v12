const { MessageEmbed } = require("discord.js");
const backup = require('discord-backup-modified');
const db = require("quick.db")
module.exports = {
    info: {
        name: 'delete-backup',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {
      let backupID = args[0];
      if(!message.member.hasPermission("ADMINISTRATOR")) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
  message.channel.send("**Don't have Permission**")
      }
      if(!backupID) {
        const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**هذه النسخة غير موجوة**")
  }else if(lang === "en")
  message.channel.send("**This version does not exist **")
      }
      backup.remove(backupID);
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**تم حذف النسخة**")
  }else if(lang === "en")
  message.channel.send("**Version deleted **")
    }
}