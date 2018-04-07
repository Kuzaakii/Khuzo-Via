function m(message, Discord, prefix, client) {
	message.channel.send("",{embed: {
		color: 0xFFFFFF,
		title: "Help:",
		description: "Send `fun` to see the fun commands.\n\nSend `info` to view info commands\n\nSend `other` to see other commands.\n\n"+prefix+"lang : pour changer la langue du bot en français\n\nHelp will leave in 30 seconds.",
	}});
	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
	collector.on('collect', message => {
		if(message.content == "other" || message.content == "Other"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Other Help:",
				description: prefix+"translate `language` `text` : Translate a text into a language (proposed language: `FR`, `EN`, `DE`, `ES`, `IT`, `NL`, `PL`)\n\n"+prefix+"invite : Invite the bot to your server\n\n"+prefix+"server : the bot server\n\n"+prefix+"help : Show Help",
}})} else if(message.content == "fun" || message.content == "Fun"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Fun Help:",
				description: prefix+"say : send a message\n\n"+prefix+"kvt : talk between servers from a channel",
}})} else if(message.content == "info" || message.content == "Info"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Infos Help:",
				description: prefix+"channel : get information on a channel\n\n"+prefix+"user : To have information on a user",
}})}})
}
module.exports = m
