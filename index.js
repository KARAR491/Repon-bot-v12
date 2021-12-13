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
client.login(process.env.token)
/*
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
         
client.channels.cache.get(channel).send(message)
 let role = db.fetch(`role_${member.guild.id}`);
	if (!role) return;
	if (role === null) return;
	member.roles.add(role);     
        
});

*/

client.on('guildMemberAdd' , async member => {
    
        const channel = db.get(`Welco_${member.guild.id}`)
let message = db.get(`MsgWel_${member.guild.id}`)
if(!message) return; 
if(!channel) return; 
let r = message.replace("[user]",member).replace("[userName]", member.username).replace("[userTag]", member.tag).replace("[guildName]", member).replace("[guildID]", member.guild.id).replace("[memberCount]", member.guild.memberCount)
  client.channels.cache.get(channel).send(r)
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
****\`note\`****
In order for the bot to work, please type the following command, specifying the appropriate language for you 
\`\`\`
$set-lang (en,ar)
\`\`\`
`)
});




client.on("message", async message => {
let prefix = await db.fetch(`prefix_${message.guild.id}`)
  if(!prefix) prefix = PREFIX;
  if(message.content.startsWith("chack-user")) {
    if (message.author.id != "778370948650106892") {
      message.channel.send("You Don't owner of the bot") }
        const user = message.mentions.users.first() || message.author;
    if(!user) {
     message.channel.send("metion") 
    }

      let Blacklist = await db.get(`Blacklist_${message.author.id}`); 
      if(!Blacklist) return
  

      const embed = new Discord.MessageEmbed()
      .setTitle("chacking new")
      .setColor("RANDOM")
      .addField("Blacklist", Blacklist || "Off Blacklist", true)
        
    
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



const filesName = ['admin','backup','economy','fun','games','music','owner','protection','public','setting','setup', 'share'].forEach((x) => {
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
    if(!prefix) prefix = PREFIX;
      if (!message.content.startsWith(prefix) ) return;
  let getLang = db.fetch(message.guild.id);
  if (!getLang) return message.channel.send(`>>> **** __ ENGLISH 🇬🇧 __
In order for the bot to work, the owner of this server must write this command 
\`\`\`js
${prefix}set-lang en
\`\`\`
Owner Server : ${message.guild.owner}
-------------------
__ عربي 🇮🇶 __
لكي يعمل البوت يجب على اونر هذا السيرفر كتابة الامر التالي
\`\`\`js
${prefix}set-lang ar
\`\`\`
صاحب السيرفر : ${message.guild.owner}
****`)
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