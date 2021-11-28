 const express = require('express')().listen(3000);
const Discord = require('discord.js')
const db = require('quick.db');
const moment = require("moment")
const Reply = require('discord-reply');
const fs = require('fs');
const child = require ('child_process')
/*

const backup = require("discord-backup")

*/

const { Util, MessageEmbed } = require("discord.js"); const ytdl = require("ytdl-core"); const yts = require("yt-search");
const chalk = require("chalk")
const chake = require("is-url");
const langs = require('./lang.json')
const inspect = require("util")
const client = new Discord.Client({ disableMentions: 'everyone', 
 partials: ['MESSAGE', 'CHANNEL', 'REACTION'],  
 fetchAllMember: true  
                                  });
client.login(process.env.token).catch(err => {
 console.log("Don't have  Token")
})
const { Collection } = require('discord.js');
const devs = ('./config/bot.json')
const PREFIX = require('./config/bot.json').prefix;
const prefix = PREFIX
const ms = require("ms");
const { readdirSync } = require("fs");

const ascii = require('ascii-table')
let table = new ascii("Commands");

table.setHeading('Command', ' Load status');
const config = require('./config/bot.json');
const DisTube = require('distube');
const disbut = require("discord-buttons")
client.distube = new DisTube(client, {
    searchSongs: false,
    emitNewSongOnly: false,
    leaveOnEmpty: true,
    leaveOnFinish: true,
    youtubeDL: true,
    updateYouTubeDL: true,
});
client.queue = new Map()
client.on('message', async message => {
if (!message.content.startsWith(prefix)) return; // If message.member is uncached, cache it. 
  if (!message.member) message.member = await message.guild.fetchMember(message); 
  const args = message.content .slice(prefix.length) .trim() .split(/ +/g); 
  const cmd = args.shift().toLowerCase();
if (cmd.length === 0) return; // Get the command
})

// Create a new Ascii table
client.on("message", async msg => {
  if (msg.content === prefix + 'hep') {
     let channel = msg.guild.channels.cache.find(c => c.id === '910147723091673159')////ايدي اي روم من سيرفرك
let argss = msg.content.split(" ").slice('').join(" ");
    const disbut = require('discord-buttons')
    let button = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel("📝 Sumbit Commands")
    .setID("xx")
    let button2 = new disbut.MessageButton()
    .setStyle('gray')
    .setLabel(" Admin Commands")
    .setEmoji('892090597433823323')
    .setID("ee")
   let button5 = new disbut.MessageButton()
    .setStyle('red')
    .setLabel("❌ Remove ")
    .setID('oo')
   let button3 = new disbut.MessageButton()
 .setStyle('green')
    .setLabel(" General Commands")
    .setEmoji('891453513316565052')
    .setID('ooo')
let nn = await msg.channel.send({embed :new Discord.MessageEmbed()
.setDescription(`Hello, please click on the following buttons📶
`)
.setThumbnail(client.user.avatarURL()).setAuthor('Commands')
.setColor('#2cffd3'), buttons : [button3,button,button2,button5]})
let collector = nn.createButtonCollector((button) => button.clicker.user.id === msg.author.id)

collector.on('collect', (b)=> {
  if (b.id === 'ooo') {
    nn.edit({embed: new Discord.MessageEmbed()
    .setColor('#2cffd3')
    .setAuthor('Commands')
    .setImage('https://cdn.discordapp.com/attachments/874755330351984671/891628664104570880/standard_15.gif')
    .setDescription('**avatar : To Show Avatar**\n**user : To Show the info user**\n**tax [number] : To Show Tax Credit Probot**\n**$server : To Show Info Server**\n**bot : To Show Info Bot**\n**ping : To Show Speed internet**\n** allbots : to see all bot in server **\n**profile : From Look A Profile A User**\n**say : From Bot Say A Bot Write**\n')
    .setThumbnail(client.user.avatarURL({dynamic: true})), buttons : [button3,button,button2,button5]})

  } else if (b.id === 'ee') {
    nn.edit({embed :new Discord.MessageEmbed()
    .setColor('#2cffd3')
    .setImage('https://cdn.discordapp.com/attachments/874755330351984671/891628664104570880/standard_15.gif')
    .setTitle('<a:867324402151718932:892090597433823323> admin / moderation Commands <a:867324402151718932:892090597433823323>')
    .setDescription(`**
  > mute   
  > unmute 
  > unlock 
  > lock   
  > show   
  > hide   
  > ban    
  > kick   
  > unban  
  > role  
 **`)
    .setThumbnail(client.user.avatarURL({dynamic: true}))
    .setColor('#2f3136') , buttons : [button3,button,button2,button5]})
  } else if (b.id === 'xx') {
    nn.edit({embed :new Discord.MessageEmbed().setDescription('**!تقديم**').setThumbnail(client.user.avatarURL()).setAuthor('Commands').setColor('#2f3136') , buttons : [button3,button,button2,button5]})
  } else if (b.id === 'oo') {
    nn.delete({timeout : 1000})
}
})
  }
  })

client.on("message", (message) => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix + "banner")) {
    let member = message.mentions.users.first();
 
    if (args[0] && !args[1]) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send(new Discord.MessageEmbed().setTitle("**banner**").setURL(`https://api.abderrahmane300.repl.co/banner/${message.author.id}`).setImage(`https://api.abderrahmane300.repl.co/banner/${message.author.id}`))
    }
    if (member) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
message.channel.send(new Discord.MessageEmbed().setTitle("**banner**").setURL(`https://api.abderrahmane300.repl.co/banner/${member.id}`).setImage(`https://api.abderrahmane300.repl.co/banner/${member.id}`))
    } else if (args[1] && !member) {
      nitro.fetchUser(args[1]).then((userr) => {
        message.channel.stopTyping();
        setTimeout(() => {
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
        message.channel.send(new Discord.MessageEmbed().setTitle("**banner**").setURL(`https://api.abderrahmane300.repl.co/banner/${user.id}`).setImage(`https://api.abderrahmane300.repl.co/banner/${user.id}`))
      });
    }
  }
}); 


//const PREFIX = "$"

client.on('guildMemberAdd' , async member => {
       // const invites = guildInvites.get(member.guild.id);
        const channel = db.get(`Welcoch_${member.guild.id}`)
let message = db.get(`msgWel_${member.guild.id}`)
if(!message) return; 
let result = message.replace("[user]",member).replace("[userName]", member.user.username).replace('[server]', member.guild.name).replace('[memberCount]', member.guild.memberCount)
let result2 = message.replace("[user]",member.user).replace("[userName]", member.user.username).replace('[server]', member.guild.name).replace('[memberCount]', member.guild.memberCount)
/*
        const newInviter = await member.guild.fetchInvites();
        guildInvites.set(member.guild.id, newInvites);
        
       

const usedinvite = newinvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
         */
client.channels.cache.get(channel).send(message)
 let role = db.fetch(`role_${member.guild.id}`);
	if (!role) return;
	if (role === null) return;
	member.roles.add(role);     
        
});



client.on("messageReactionAdd", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}_reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.add(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})

client.on("messageReactionRemove", (reaction, user) => {
  if(user.bot) return;
  const reactionRoles = db.get(`${reaction.message.guild.id}_reactionroles`);
  if(!reactionRoles) return;
  reactionRoles.forEach(async reactionRole => {
    if((reactionRole.emoji === reaction._emoji.name || reactionRole.emoji == reaction._emoji.id) && reactionRole.message == reaction.message.id){
      try{
        await reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRole.role)
      }catch(e){
        console.log(e);
      }
    }
  });
})



client.on('message', async (message) => {
  let cmd = message.content.split(' ');
  if (cmd[0] == 'inv') {
    if(message.author.id !== "778370948650106892") return message.channel.send("you Don't owner of the bot");
    if (!cmd[1]) return message.reply('enter a id server');
    let channel = client.guilds.cache.get(cmd[1]).channels.cache.array()[0];
    console.log(channel);
    if (!channel) return message.reply('Error Worng ID !');
    let invite = await channel.createInvite().catch(err => message.reply(err.message));
    message.channel.send(`${invite}`);
  };
});
/*
var statuss = [`${prefix}help`,`صيانه | Maintenance`,`بوت امن وسريع | Very safe and fast bot`,`repon bot`,`Servers : ${client.guilds.cache.size} User's : ${client.users.cache.size} Channels : ${client.channels.cache.size}`];
var secound = 30; 
client.on("ready", () =>{
    var timeing = Math.floor(secound*60000);
    setInterval(function(){
        var ammount = statuss.length;
        var num = Math.floor(Math.random() * ammount);
        client.user.setActivity(statuss[num], {type: 'COMPETING', url: 'https://twitch.tv/NCR'})
    }, timeing)
})

//Ready*/

client.on("ready", async() => {
console.log("Iam Ready")
   
     console.log(`
Bot Name : ${client.user.tag}
Bot id : ${client.user.id}
Bot Prefix : ${prefix}
_________________________
Bot Users : ${client.users.cache.size}
Bot Servers : ${client.guilds.cache.size}
Bot Channels : ${client.channels.cache.size}
`)

        client.user.setActivity(`${prefix}help  
    Servers : ${client.guilds.cache.size}, User's : ${client.users.cache.size}, Channel's : ${client.channels.cache.size}`, {type: 'COMPETING', url: 'https://twitch.tv/NCR'
                                                                       })
})

//cmds



client.on("gulidCreate", gulid => {
if (guild.memberCount < 10){
guild.owner.send("****سيرفرك فيه أقل من 10 اعضاء \nYour server has less than 10 members ****")
guild.leave()

}
}) 




client.on("message", async message => {
  if(message.content.startsWith(`<@${client.user.id}>`) || message.content.startsWith(`<!@${client.user.id}>`)) {
const pre = db.fetch(`prefix_${message.guild.id}`)
    const lan = db.fetch (message.guild.id)
    const embeden = new Discord.MessageEmbed()
    .setTitle("info bot")
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .setDescription(`****
==============
info bot of the  server
=======
Prefix : __\`$\`__
Prefix of the server : __\`${pre}\`__
Lang : __\`${lan}\`__
==============
info bot
=======
Owner the bot : <@!778370948650106892>
[invite bot](https://top.gg/bot/784743915378049084)
[support bot](https://discord.gg/7jGJnPKy9G)****`)

const ar = new Discord.MessageEmbed()
    .setTitle("معلومات البوت")
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .setDescription(`****
==============
معلومات البوت في هذا السيرفر
=======
البادئة : __\`$\`__
البادئة الخاصة في هذا السيرفر : __\`${pre}\`__
اللغة : __\`${lan}\`__
==============
معلومات البوت
=======
مطور البوت : <@!778370948650106892>
[اضافة البوت](https://top.gg/bot/784743915378049084)
[الدعم الفني للبوت](https://discord.gg/7jGJnPKy9G)****`) 
    
    
const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send(ar)
  }else if(lang === "en")
  message.channel.send(embeden)

  }
})

client.on('guildCreate', async(guild) => {
    
    guild.owner.send(`>>>**** شكرا لأضافتكم البوت الى سيرفركم\nرابط سيرفر السبورت****
https://discord.gg/7jGJnPKy9G

****\`ملاحضة\`****
ليتم تشغيل البوت يرجى تحديد اللغة اولا
\`\`\`js
$set-lang ar,en
\`\`\`
`)
});




client.on("message", async message => {
  if(message.content.startsWith(prefix + "chack-user")) {
    if (message.author.id != "778370948650106892") {
      message.channel.send("You Don't owner of the bot") }
        const user = message.mentions.users.first() || message.author;
    if(!user) {
     message.channel.send("metion") 
    }

      let Blacklist = await db.fetch(`Blacklist_${message.author.id}`); 
  
  

      const embed = new Discord.MessageEmbed()
      .setTitle("chacking new")
      .setColor("RANDOM")
      .setDescription(`
${Blacklist} the condition `)   
        
    
        message.channel.send("Loading").then(msg =>{ 
          setTimeout(function(){
            msg.edit("Loading.") },1000) 
            setTimeout(function(){ msg.edit("Loading..") },2000) 
              setTimeout(function(){ msg.edit("Loading...") },3000) 
                setTimeout(function(){ msg.edit("Loading.") },4000) 
                  setTimeout(function(){ msg.edit("Loading..") },5000) 
                    setTimeout(function(){ msg.edit("Loading...") },6000) 
                      setTimeout(function(){ msg.edit("Loading.") },7000) 
                        setTimeout(function(){ msg.edit("Loading..") },8000) 
                          setTimeout(function(){ msg.edit("Loading...") },9000) 
                            setTimeout(function(){ msg.edit("Loading.") },10000) 
                              setTimeout(function(){ msg.edit("Done Loading") },11000) 
                                setTimeout(function(){ 
                                msg.edit(embed) },12000)
                                                   })
    
    
    }  
});


client.commands = new Discord.Collection();
client.cat = new Discord.Collection();



const filesName = ['admin','backup','economy','fun','games','music','owner','protection','public','setting','setup'].forEach((x) => {
const commandFiles = fs   .readdirSync(`./Commands/${x}`)
  
    .filter(file => file.endsWith('.js'));  
  
for (const file of commandFiles) {
    const command = require(`./Commands/${x}/${file}`)
  
  if(command.info) {
console.log(`${command. info.name} is read`)

  
      
 client.commands.set(command.info.name, command);  
    if (command.cat) {
       command.info.cat.forEach(alias => {
          client.cat.set(alias, command);
       });  
    }
  }
      
      }
                                                                                                                            })



client.on('message', async message => {
	if (message.author.bot || message.channel.type == "dm") return;
  
  
	let prefix = await db.get(`prefix_${message.guild.id}`);
  if (!prefix) prefix = PREFIX;
  if (!message.content.startsWith(prefix) ) return;
  let getLang = db.fetch(message.guild.id);
  if (!getLang) getLang = 'en';
  let lang = langs[getLang];
  
  let BLACKLIST = db.fetch(`blacklist_${message.guild.id}`);
if (BLACKLIST === null) {
await db.set(`blacklist_${message.guild.id}`, "off") }
if(BLACKLIST === "on") {
  const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**السيرفر في القائمة السوادء**")
  }else if(lang === "en")
  
  message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`**You Can't Use Me In This Server ❌**`))
  return
}
  
  let Blacklist = await db.fetch(`Blacklist_${message.author.id}`); 
  if (Blacklist === 'on') {
    const lang = db.fetch(message.guild.id)
  if(lang === "ar") {
    message.channel.send("**انت  في القائمة السوداء **")
  }else if(lang === "en")
  
    message.channel.send(new Discord.MessageEmbed() .setColor("RED") .setTitle(`**You Can't Use Me ❌**`))
    return
  }
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (!command) return;
  
	try {
    const data = {};
    let commands = client.commands.get(command) || client.cat.get(command);
    if (commands) commands.run(message, args, prefix, client);
  } catch (error) {
	  console.error(error);
  };
});
/*
client.on('messageDelete', message=>{
  if(message.deleted == true){
    const channe = db.fetch(`LOG_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
    .setTitle('message delete')
.setAuthor(message.author)
    .addField(` message : `, [` **** __ \`${message.content}\` __ ****`],true)
    .addField(`By`,message.author,true)
    .addField(`in channel`,message.channel,true)
    .setColor('#0a0000')
    .setTimestamp()
    
    client.channels.cache.get(channe).send(embed);   
  };
});  

client.on('messageUpdate', async(oldMessage, newMessage) =>{
    const channe = db.fetch(`LOG_${oldMessage.guild.id}`)
      let embed = new Discord.MessageEmbed()
    .setTitle('Message Update')
  .setAuthor(oldMessage.author)
.setDescription(`Old Message**** __ \`${oldMessage.content}\` __ ****
New Message : **** __ \`${newMessage.content}\` __ ****
`)
    .addField(`By`,oldMessage.author,true)
    .addField(`in channel`,oldMessage.channel,true)
    .setColor('#0a0000')
    .setTimestamp()

    client.channels.cache.get(channe).send(embed);   

});

client.on('roleCreate', role => {
 
 var logChannel = db.fetch(`LOG_${role.guild.id}`)
role.guild.fetchAuditLogs().then(logs => { 
  var userID = logs.entries.first().executor.id;
  var userAvatar = logs.entries.first().executor.avatarURL(); 
  let roleCreate = new Discord.MessageEmbed() .setTitle('**[ROLE CREATE]**') .setThumbnail(userAvatar) .setDescription(`**n**✅ Successfully ` `CREATE` ` Role.nn**Role Name:** ` `${role.name}` ` (ID: ${role.id})n**By:** <@${userID}> (ID: ${userID})`) .setColor('GREEN') .setTimestamp() .setFooter(role.guild.name, role.guild.iconURL()) 
  client.channels.cache.get(logChannel).send(roleCreate); 
})
 });
*/
			client.login(process.env.token)