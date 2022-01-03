const Discord = require('discord.js');
const db = require('quick.db');
let moment = require('moment');
const ms = require("ms");
//moment.locale('en')
moment.locale('ar');
module.exports = {
	info: {
		name: 'user',
		cat: [''],
		description: '',
		coolDown: 1
	},
	run: async (message, args, prefix, client) => {
    const { fetchFlags } = require("discord.js")
		const cmd = message.content.split(' ');
		        let use = message.mentions.members.first() || message.author
    const user = use
		const member = message.guild.member(user);
    const play = member.presence.activities[0] ? member.presence.activities[0].state : `User isn't have a custom status!` 
		const title = db.fetch(`title-user_${user.id}`);
  const banner = `https://api.abderrahmane300.repl.co/banner/${user.id}.gif`
let inviteCount = 0;

const bot = user.bot;
		const flags = user.flags || user.fetchFlags();
    let cache = [];
		if (flags.toArray().includes('DISCORD_PARTNER'))
			cache.push('<:emoji_1:919301931908870144>');

		if (flags.toArray().includes('HYPESQUAD_EVENTS'))
			cache.push('<:hypeevnets:919613488312238111>');

		if (flags.toArray().includes('HOUSE_BRILLIANCE'))
			cache.push('<:emoji_3:919301994777280602>');

		if (flags.toArray().includes('HOUSE_BRAVERY'))
			cache.push('<:emoji_4:919302019125243904>');

		if (flags.toArray().includes('HOUSE_BALANCE'))
			cache.push('<:emoji_2:919301956852404256>');
		if (flags.toArray().includes('BUGHUNTER_LEVEL_3'))
			cache.push('<:bughunter:919613495895539712>');
		if (flags.toArray().includes('BUGHUNTER_LEVEL_2'))
			cache.push('<:emoji_9:919302170568970280>');

		if (flags.toArray().includes('BUGHUNTER_LEVEL_1'))
			cache.push('<:emoji_8-1:919302155456872488>');

		if (flags.toArray().includes('EARLY_SUPPORTER'))
			cache.push('<:emoji_8:919302135114530827>');
		if (flags.toArray().includes('VERIFIED_DEVELOPER'))
			cache.push('<:emoji_6-1:919302117905285160>');

		if (flags.toArray().includes('EARLY_VERIFIED_DEVELOPER'))
			cache.push('<:emoji_6-1:919302117905285160>');
    if(!flags.toArray())
      cache.push('<:NoBadgs:921844428669337620>')
		let nitro = user.avatarURL({ dynamic: true });

		if (nitro.includes('gif'))
			cache.push('<:emoji_6:919302097453842473>');

		var emojis = cache;
    if(emojis.length < 1) {
      cache.push("<:NoBadgs:921844428669337620>")
    }
  		var statusFull;
		var status = user.presence.status;

		if (status.includes('dnd')) statusFull = '<:dn:919613494628872243> | Dnd';

		if (status.includes('offline'))
			statusFull = '<:offline:919613491248267315> | Offline';

		if (status.includes('online'))
			statusFull = '<:online:919613490304516096> | Online';

		if (status.includes('idle'))
			statusFull = '<:idle:919613493060202546>  | Idle';
		if (status.includes('streaming')) statusFull = '🟣 | Streaming';
		const roles = member.roles.cache
			.map(role => role)
			.join(` | `)
			.replace('| @everyone', '');
		const arem = new Discord.MessageEmbed();
		
		//en

		let enem = new Discord.MessageEmbed()
			.setTitle(`${user.username} Info`)
			.setThumbnail(user.displayAvatarURL({ dynamic: true }))
			.setFooter(message.author.username)
			.setTimestamp()
			.setColor('BLACK')
			.addField('Name', user.username, true)
			.addField('Nickname', member.displayName, true)
			.addField('Id', user.id, true)
			.addField('Tag', '#' + user.discriminator, true)
			.addField('Bot', `${bot}`)
      .addField("Mutuel Servers", `\`${client.guilds.cache.filter(g => g.members.cache.get(user.id)).size}\``, true)
			.addField('Title', title || 'No Title')
			.addField('Presence', statusFull, true)
      .addField("Playing", play, true)
			.addField('Badges', emojis || 'No Badges')
      .addField("Highest Role", member.roles.highest, true)
			.addField('roles', roles)
			.addField(
				'joinedAt',
				`****${moment(user.joinedAt).toString().split(' ').slice(0, 4).join(' ')} | <t:${Math.floor(member.joinedAt/1000.0)}:R> ****`
			)
			.addField(
				'CreateAt',
				`****${moment(user.createdAt).toString().split(' ').slice(0, 4).join(' ')} | <t:${Math.floor(user.createdAt/1000.0)}:R> ****`
			)
			.setImage(`${banner}`);

		const lang = db.fetch(message.guild.id);
		if (lang === 'ar') {
			message.channel.send(enem).then(t => cache = []);
		} else if (lang === 'en') 
      message.channel.send(enem).then(t => cache = []);
	}
};
