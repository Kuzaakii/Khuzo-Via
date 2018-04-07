function m(message, Discord, prefix, client) {
	message.channel.send("",{embed: {
		color: 0xFFFFFF,
		title: "Aide:",
		description: "Envoyer `fun` pour voir les commande fun.\n\nEnvoyer `info` pour voir les commande d'info\n\nEnvoyer `autre` pour voir les autre commande.\n\n"+prefix+"lang : to change the bot language to English\n\nL'aide quittera dans 30 seconde.",
	}});
	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
	collector.on('collect', message => {
		if(message.content == "autre" || message.content == "Autre"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Autre aide:",
				description: prefix+"translate `langue` `texte` : Traduire un texte dans une langue (langue proposé : `FR`, `EN`, `DE`, `ES`, `IT`, `NL`, `PL`)\n\n"+prefix+"invite : Inviter le bot sur son serveur\n\n"+prefix+"serveur : le serveur du bot\n\n"+prefix+"help : Afficher l'aide",
}})} else if(message.content == "fun" || message.content == "Fun"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Aide Fun:",
				description: prefix+"say : envoyer un message\n\n"+prefix+"kvt : parler entre serveur depuis un channel",
}})} else if(message.content == "info" || message.content == "Info"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Aide d'Info:",
				description: prefix+"channel : Avoir des info sur un channel\n\n"+prefix+"user : Avoir des info sur un utilisateur",
}})}})
}
module.exports = m
