const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
const Reply = require('discord-reply');
const fs = require('fs');
const child = require('child_process');
const { Util, MessageEmbed } = require('discord.js');
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const chalk = require('chalk');
const chake = require('is-url');
const langs = require('./lang.json');
const inspect = require('util');
const client = new Discord.Client({
	disableMentions: 'everyone',
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
	fetchAllMember: true
});
client.login(process.env.token).catch(err => {
	console.log("Don't have  Token");
});
const { Collection } = require('discord.js');
const devs = './config/bot.json';
const PREFIX = require('./config/bot.json').prefix;
const owner = require('./config/bot.json').devs;
const prefix = PREFIX;
const ms = require('ms');
const { readdirSync } = require('fs');

const config = require('./config/bot.json');
const DisTube = require('distube');
const disbut = require('discord-buttons');
const { Player } = require('discord-player');
const oups = require("@discordjs/opus")
require("@discordjs/opus")
const player = new Player(client);
client.player = player;
client.filters = require('./config/filters.json')
//line of ready is #200
//line of source is #60
//line of cmds is #280







//Source 
client.commands = new Discord.Collection();
client.cat = new Discord.Collection();
const filesName = [
	'admin',
	'backup',
'economy',
	'fun',
	'games',
	'music',
	'owner',
	'protection',
	'public',
	'setting',
	'setup',
	'share'
].forEach(x => {
	const commandFiles = fs
		.readdirSync(`./Commands/${x}`)

		.filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./Commands/${x}/${file}`);

		if (command.info) {
			console.log(`${file} is ready`);

			client.commands.set(command.info.name, command);
			if (command.cat) {
				command.info.cat.forEach(alias => {
					client.cat.set(alias, command);
				});
			}
		}
	}
});


const filesPrime = [
	
	'public',
].forEach(x => {
	const commandFiles = fs
		.readdirSync(`./Commands-Pri/${x}`)

		.filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./Commands-Pri/${x}/${file}`);

		if (command.info) {
			console.log(chalk.blue(`${file} is ready`));

			client.commands.set(command.info.name, command);
			if (command) {
				command.info.cat.forEach(alias => {
					client.cat.set(alias, command);
				});
      }
		}
	}
});

const events = [
  "player-events"
].forEach(x => {
	const commandFiles = fs
		.readdirSync(`./events/${x}`)

		.filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./events/${x}/${file}`);

		if (x) {
			console.log(chalk.redBright(`the event ${x} is ready`));
    }
	}
});

fs.readdir('./events/player-events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/player-events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`Loading player event ${eventName} `);
        client.player.on(eventName, event.bind(null, client));
    });
});

client.on('message', async message => {
	if (message.author.bot || message.channel.type == 'dm') return;

	let prefix = await db.get(`prefix_${message.guild.id}`);
	if (!prefix) prefix = PREFIX;
	if (!message.content.startsWith(prefix)) return;
	let BLACKLIST = db.fetch(`blacklist_${message.guild.id}`);
	if (BLACKLIST === null) {
		await db.set(`blacklist_${message.guild.id}`, 'off');
	}
	if (BLACKLIST === 'on') {
		const lang = db.fetch(message.guild.id);
		if (lang === 'ar') {
			message.channel.send('**السيرفر في القائمة السوادء**');
		} else if (lang === 'en')
			message.channel.send(
				new Discord.MessageEmbed()
					.setColor('RED')
					.setTitle(`**You Can't Use Me In This Server ❌**`)
			);
		return;
  }
	let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
	if (Blacklist === 'on') {
		const lang = db.fetch(message.guild.id);
		if (lang === 'ar') {
			message.channel.send('**انت  في القائمة السوداء **');
		} else if (lang === 'en')
			message.channel.send(
				new Discord.MessageEmbed()
					.setColor('RED')
					.setTitle(`**You Can't Use Me ❌**`));
		return;
	}
  const lang = db.fetch(message.guild.id)
	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/);
	const command = args.shift().toLowerCase();
	if (!command) return;
	try {
		const data = {};
		let commands = client.commands.get(command) || client.cat.get(command);
		if (commands) commands.run(message, lang, db,  args, prefix, client);
	} catch (error) {
		console.error(error);
	}
});

//ready
client.on('ready', async () => {
	console.log('Iam Ready');

	console.log(`
Bot Name : ${client.user.tag}
Bot id : ${client.user.id}
Bot Prefix : ${prefix}
_________________________
Bot Users : ${client.users.cache.size}
Bot Servers : ${client.guilds.cache.size}
Bot Channels : ${client.channels.cache.size}
`);

	client.user.setActivity(
		`${prefix}help  
    Servers : ${client.guilds.cache.size}, User's : ${
			client.users.cache.size
		}, Channel's : ${client.channels.cache.size}`,
		{
			type: 'COMPETING',
			url: 'https://twitch.tv/NCR'
		}
	);
});
client.on('ready', () => {
	var arrayOfStatus = [
		`${client.users.cache.size} users`, //change this with your status
		`${prefix}help`, //change this with your status
		`${client.guilds.cache.size} Servers!!`,
		`${client.channels.cache.size} Channels!`,
		`Repon Bot | ريبون بوت`,
		`صيانة | Maintenance `,
		`بوت امن وسريع  جدا | Very safe and fast bot`
	];
	setInterval(() => {
		var arrayOfStatus = [
			`${client.users.cache.size} users`, //change this with your status
			`${prefix}help`, //change this with your status
			`${client.guilds.cache.size} Servers!!`,
			`${client.channels.cache.size} Channels!`,
			`Repon Bot | ريبون بوت`,
			`صيانة | Maintenance`,
			`بوت امن وسريع جدا | Very safa and fast bot`
		];
	}, 60000);

	let index = 0;
	setInterval(() => {
		if (index === arrayOfStatus.length) index = 0;
		const status = arrayOfStatus[index];
		client.user.setActivity(status, { type: 'COMPETING' });
		index++;
	}, 10000);

	console.log(`logged in as ${client.user.username} BOT ✅`);
	const clientDetail = {
		guilds: client.guilds.cache.size,
		users: client.users.cache.size,
		channels: client.channels.cache.size
	};

	//express
});















//cmds
client.on('message', async message => {
	if (
		message.content.startsWith(`<@${client.user.id}>`) ||
		message.content.startsWith(`<!@${client.user.id}>`)
	) {
		const pre = db.fetch(`prefix_${message.guild.id}`);
		const lan = db.fetch(message.guild.id);
		if (!lan) {
			db.set(message.guild.id, 'en');

			message.channel.send(
				'>>> **ENGLISH 🇬🇧 Language is selected automatically \n عربي 🇮🇶 تم تحديد اللغة تلقائيا**'
			);
			return;
		}

		const embeden = new Discord.MessageEmbed()
			.setTitle('info bot')
			.setColor('RANDOM')
			.setThumbnail(client.user.avatarURL).setDescription(`****
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
[support bot](https://discord.gg/NcepTekmqQ)****`);

		const ar = new Discord.MessageEmbed()
			.setTitle('معلومات البوت')
			.setColor('RANDOM')
			.setThumbnail(client.user.avatarURL).setDescription(`****
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
[الدعم الفني للبوت](https://discord.gg/NcepTekmqQ)****`);

		const lang = db.fetch(message.guild.id);
		if (lang === 'ar') {
			message.channel.send(ar);
		} else if (lang === 'en') message.channel.send(embeden);
	}
});

client.on('guildCreate', async guild => {
	guild.owner
		.send(`>>>**** شكرا لأضافتكم البوت الى سيرفركم\nرابط سيرفر السبورت****
https://discord.gg/NcepTekmqQ

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
`);
});

client.on("message", async message => {
  let afk = new db.table("AFKs")
  const authorStatus = await afk.get(`${message.author.id}_${message.guild.id}`)
   const mentioned = message.mentions.members.first()
  if (mentioned) {
    const status = await afk.fetch(`${mentioned.id}_${message.guild.id}`);
   if (status) {
      const embed1 = new Discord.MessageEmbed()
      .setColor("GREEN")
     .setDescription(`**${mentioned.user.tag} is AFK: ${status}**`)
      message.channel.send(embed1).then(i => i.delete({timeout: 10000}));
    }
  }
   if (authorStatus) {
   afk.delete(`${message.author.id}_${message.guild.id}`)
    message.guild.member(message.author).setNickname(message.author.username)
    const embed2 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`**Welcome Back __${message.author.tag}__, you are no longer AFK**`)

    message.channel.send(embed2).then(i => i.delete({timeout: 10000}));
 }
}) 

client.on('guildMemberAdd', async member => {
	const channel = db.get(`Welco_${member.guild.id}`);
	let message = db.get(`MsgWel_${member.guild.id}`);
	if (!message) return;
	if (!channel) return;
	let r = message
		.replace('[user]', member)
		.replace('[userName]', member.username)
		.replace('[userTag]', member.tag)
		.replace('[guildName]', member)
		.replace('[guildID]', member.guild.id)
		.replace('[memberCount]', member.guild.memberCount);
	client.channels.cache.get(channel).send(r);
	let role = db.fetch(`role_${member.guild.id}`);
	if (!role) return;
	if (role === null) return;
	member.roles.add(role);
});

client.on('messageReactionAdd', (reaction, user) => {
	if (user.bot) return;
	const reactionRoles = db.get(`${reaction.message.guild.id}_reactionroles`);
	if (!reactionRoles) return;
	reactionRoles.forEach(async reactionRole => {
		if (
			(reactionRole.emoji === reaction._emoji.name ||
				reactionRole.emoji == reaction._emoji.id) &&
			reactionRole.message == reaction.message.id
		) {
			try {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.add(reactionRole.role);
			} catch (e) {
				console.log(e);
			}
		}
	});
});

client.on('messageReactionRemove', (reaction, user) => {
	if (user.bot) return;
	const reactionRoles = db.get(`${reaction.message.guild.id}_reactionroles`);
	if (!reactionRoles) return;
	reactionRoles.forEach(async reactionRole => {
		if (
			(reactionRole.emoji === reaction._emoji.name ||
				reactionRole.emoji == reaction._emoji.id) &&
			reactionRole.message == reaction.message.id
		) {
			try {
				await reaction.message.guild.members.cache
					.get(user.id)
					.roles.remove(reactionRole.role);
			} catch (e) {
				console.log(e);
			}
		}
	});
});

client.on('messageDelete', async message => {  
  let channel = await db.get(`LOG_${message.guild.id}`)
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;  
  if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;  
  if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;  

  var logChannel = message.guild.channels.cache.find(c => c.id === channel);  
  if(!logChannel) return;  

  let messageDelete = new Discord.MessageEmbed()  
  .setColor(`#2f3136`)
  .setAuthor(`MessageDelete`, message.author.avatarURL({dynamic: true}))
  .setDescription(`Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
  .setTimestamp()
  .setThumbnail(`https://cdn.discordapp.com/emojis/863383452791734272.gif?size=80`)
  .setFooter(message.guild.name, message.guild.iconURL({dynamic: true})) 

  logChannel.send(messageDelete);
});
client.on('messageUpdate', async (oldMessage, newMessage) => {  
let channel = await db.get(`LOG_${oldMessage.guild.id}`)
  if(oldMessage.author.bot) return;
  if(!oldMessage.channel.type === 'dm') return;
  if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
  if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

  var logChannel = oldMessage.guild.channels.cache.find(c => c.id === channel);
  if(!logChannel) return;

  if(oldMessage.content.startsWith('https://')) return;  

  let messageUpdate = new Discord.MessageEmbed()
  .setAuthor(`MessageEdit`, oldMessage.author.avatarURL({dynamic: true}))
  .setThumbnail(`https://cdn.discordapp.com/emojis/854132515979919380.png?size=80`)
  .setColor(`#2f3136`)
  .setDescription(`\nSuccessfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
  .setTimestamp()
  .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL({dynamic: true})) 

  logChannel.send(messageUpdate);
});
