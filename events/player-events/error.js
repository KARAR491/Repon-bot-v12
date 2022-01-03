module.exports = (client, error, message) => {
const db = require("quick.db")
  const lang = db.fetch(message.guild.id)
    switch (error) {
        case 'NotPlaying':
            if(lang === "ar") {
    message.channel.send("**لا توجد موسيقى يتم تشيغلها في هذا الخادم**")
  }else if(lang === "en")
  message.channel.send("**There is no music playing on this server **")
            break;
        case 'NotConnected':
            if(lang === "ar") {
    message.channel.send("**انت  لست موجود في اي روم صوتي !**")
  }else if(lang === "en")
              message.channel.send("**You are not present in any audio ROOM! **")
            break;
        case 'UnableToJoin':
          if(lang === "ar") {
    message.channel.send("** لا يممكني الدخول معك في الروم الصوتي رجاء قم ب التحقق من أذوناتي او الرتب **")
  }else if(lang === "en")
  message.channel.send("**I can't access the audio ROM with you, please check my permissions or ranks **")
            break;
        default:
            if(lang === "ar") {
    message.channel.send(`** حدث خطأ: ${error}**`)
  }else if(lang === "en")
  message.channel.send(`**An error occurred: ${error} **`)
            console.log("Repon Bot")
    };

};
