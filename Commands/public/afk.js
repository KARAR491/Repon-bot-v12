const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
    info: {
        name: 'afk',
        cat : [""],
        description: '',
        coolDown: 1
    },
    run: async (message, args, prefix, client) => {	
   let afk = db.fetch(`afk_${message.guild.id}_${message.author.id}`); 		
      if (afk) { 			db.set(`afk_${message.author.id}`, false); 
            
           message.reply(`YOUR AFK HAS BEEN REMOVED`); 		
               } else { 			
        let reason = args.join(''); 			
                       if (!reason) reason = 'Not Provided'; 			
                             db.set(`op_${message.guild.id}_${message.author.id}`, reason); 			
        db.set(`afk_${message.guild.id}_${message.author.id}`, true); 			
  db.set( 				`date_${message.guild.id}_${message.author.id}`, 				Date.now() 			
        ); 			message.member.setNickname(`▪AFK▪︎ ${message.member.username}`); 			message.reply(`YOU ARE NOW AFK - ${reason}`); 		
      } 
    }
}