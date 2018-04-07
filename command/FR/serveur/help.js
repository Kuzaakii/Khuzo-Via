function m(message, Discord, prefix, client) {
  message.delete(message.author);
	message.channel.send("",{embed: {
		color: 0xFFFFFF,
		title: "Aide:",
		description: "Envoyer `administration` pour voir les commande d'administration.\n\nEnvoyer `fun` pour voir les commande fun.\n\nEnvoyer `info` pour voir les commande d'info\n\nEnvoyer `autre` pour voir les autre commande.\n\n"+prefix+"lang : to change the bot language to English\n\nL'aide quittera dans 30 seconde.",
	}});
	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
	collector.on('collect', message => {
		if(message.content == "administration" || message.content == "Administration"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Aide d'administration:",
				description: "Ces commandes ne peuvent être faite qu'avec la permission `Administrateur`\n\n\n"+prefix+"prefix **`prefix`** : changer le prefix ("+prefix+"prefix /delete : remettre le prefix en **k!**)\n\n"+prefix+"link **`on/off`** : pour activer la suppression de lien ou la desactiver.",
			}});
		} else if(message.content == "autre" || message.content == "Autre"){
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
				description: prefix+"say : envoyer un message\n\n"+prefix+"kvt : parler entre serveur depuis un channel (channel #kvt requi)",
}})} else if(message.content == "info" || message.content == "Info"){
			message.delete(message.author);
			message.channel.send("",{embed: {
				color: 0xFFFFFF,
				title: "Aide d'Info:",
				description: prefix+"channel : Avoir des info sur un channel\n\n"+prefix+"user : Avoir des info sur un utilisateur",
}})}})
}
module.exports = m
