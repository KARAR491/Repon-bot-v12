const Discord = require("discord.js")
const db = require("quick.db")
const ms = require("ms")
module.exports = {
    info: {
        name: 'role',
        cat : ["Role", "ROLE"],
        description: '',
        coolDown: 1
    },
    run: async (message, prefix, client) => {
      

	if (!message.member.hasPermission('MANAGE_ROLES')) {
      const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**لا تمتلك صلاحيات كافيه**")
  }else if(lang === "en")
			 message.channel.send(`**You Don't have permission \`MANAGE_ROLES\`**`);
     return 
    }

        var args = message.content.split(' ');
        var mention = message.mentions.members.first();
        var user = message.guild.member(mention);
        var role = message.guild.roles.cache.filter(r => r.name === args[3 ]).first() || message.mentions.roles.first() || message.guild.roles.cache.filter(r => r.id === args[3]).first()
        if (message.author.bot) return;
      if(!args[1]) {
        const emfin = new Discord.MessageEmbed()
          .setColor("BLUE")
.setAuthor(message.author.username)
.setDescription(`>>> ****__${prefix}role add __
\`Ex\` ${prefix}role add ${message.author} @role/name/id
And
\`Ex\` ${prefix}role add ${message.author} @role/name/id 10m(time/وقت)

__${prefix}role remove __
\`Ex\` ${prefix}role remove ${message.author} @role/name/id

__${prefix}role all-add__
\`Ex\` ${prefix} @role/name/id

__${prefix}role all-remove __
\`Ex\` ${prefix}role all-remove @role/name/id
****`)
  message.channel.send(emfin)  
      }
 
        if (args[1] === "add") {
            
            if (!user) { 
              const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`**رجاء منشن الشخص اولا**`))
  }else if(lang === "en")
  message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Username Same One!**"));
return
                       }
            if (!role) {
              const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("**رجاء منشن او اكتب ايدي الرتبة بعد الشخص**"))
  }else if(lang === "en")
  message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
              return 
            }
          user.roles.add(role).then((m) => {
                const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(new Discord.MessageEmbed().setTitle("اضافة رتبة").setColor("BLUE").setDescription(` >>> ** تم أضافة رتبة للعضو
العضو : ${user}
بواسطة : ${message.author}
الرتبة : ${role}**`))
  }else if(lang === "en")
message.channel.send(new Discord.MessageEmbed().setTitle("**Add role**").setColor("BLUE").setDescription(`>>> **
Done add role to member 
The Member : ${user}
By : ${message.author}
The Role : ${role}
**`));
            var time = args[4]
        setTimeout(() => {
            user.roles.remove(role);
        }, ms(time))
        
        return;
            })
        } else if (args[1] === "remove") {
            
           if(!user) {
   const lang = db.fetch(message.guild.id)  
     if(lang === "ar") {     message.channel.send(new Discord.MessageEmbed().setTitle("Error ❌").setColor("RED").setDescription(`>>> **
رجاء منشن العضو اولا
**`))   
       }else if(lang === "en")
message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Username Same One!**"));
return 
           }
            if (!role) {
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(new Discord.MessageEmbed().setTitle("Error ❌").setColor("RED").setDescription(`>>> **
رجاء منشن الرتبة او ايدي الرتبة بعد العضو
**`)
)
  }else if(lang === "en")
message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID/Name The Role!**"));
return 
        }
user.roles.remove(role).then((m) => {
const lang = db.fetch(message.guild.id)  
  if(lang === "ar") {     message.channel.send(new Discord.MessageEmbed().setTitle("حذف رول").setColor("BLUE").setDescription(` >>> **
تم حذف الرتبة بنجاح
العضو : ${user}
بواسطة : ${message.author}
الرتبة : ${role}
** `))   
                                    }else if(lang === "en") message.channel.send(new Discord.MessageEmbed().setTitle("Remove Role").setColor("BLUE").setDescription(` >>> **
Done Remove Role
The Member : ${user}
By : ${message.author}
The Role : ${role}
** `));      return
            })
        } else if (args[1] === "all-add") {
    if(!role) {
      const lang = db.fetch(message.guild.id)
  if(lang === "en") {
    message.channel.send("**Please Mention The Role**")
  }else if(lang === "ar")
message.channel.send(`**رجاء منشن الرتبة اولا**`);
     return
    }        message.guild.members.cache.forEach(m => {
                const user = message.guild.member(m)
                user.roles.add(role)
    })
            const lang = db.fetch(message.guild.id)
  if(lang === "en") {
    message.channel.send(new Discord.MessageEmbed().setTitle("Add Role").setColor("BLUE").setDescription(` >>> **
Add role to all members of the server
By : ${message.author}
The Role : ${role}
** `))
  }else if(lang === "ar")
message.channel.send(new Discord.MessageEmbed().setTitle("اضافة رتبة").setColor("BLUE").setDescription(` >>> **
تم اضافة رتبة الى جميع اعضاء السيرفر 
بواسطة : ${message.author}
الرتبة : ${role}
** `));
     return
                  
        }else if(args[1] === "all-remove") {
if(!role) {
      const lang = db.fetch(message.guild.id)
  if(lang === "en") {
    message.channel.send("**Please Mention The Role**")
  }else if(lang === "ar")
message.channel.send(`**رجاء منشن الرتبة اولا**`);
     return
    }        message.guild.members.cache.forEach(m => {
                const user = message.guild.member(m)
                user.roles.remove(role)
    })
            const lang = db.fetch(message.guild.id)
  if(lang === "en") {
    message.channel.send(new Discord.MessageEmbed().setTitle("remove Role").setColor("BLUE").setDescription(` >>> **
Remove role to all members of the server
By : ${message.author}
The Role : ${role}
** `))
  }else if(lang === "ar")
message.channel.send(new Discord.MessageEmbed().setTitle("حذف رتبة").setColor("BLUE").setDescription(` >>> **
تم حذف رتبة الى جميع اعضاء السيرفر 
بواسطة : ${message.author}
الرتبة : ${role}
** `));
     return
}
      
    }
}
