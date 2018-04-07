function m(message, Discord, prefix, client) {
  message.delete(message.author);
  message.channel.send("",{embed: {
		color: 0xFFFFFF,
		title: "Invite:",
		description: "[invite](https://discordapp.com/api/oauth2/authorize?client_id=373922074269581312&permissions=8&scope=bot)",
	}});
}
module.exports = m
