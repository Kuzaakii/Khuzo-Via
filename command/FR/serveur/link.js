function m(message, Discord, prefix, client) {
  var write = require('write-file');
  var del = require('delete');
  var read = require('read-file');
  var exist = require('file-exists');
  message.delete(message.author)
	if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
		if(message.content.substr(0).indexOf(" ") !== -1){
			var n1 = read.sync(`guild/${message.guild.id}/prefix.txt`, 'utf8').length;
			var n2 = "5";
			var nf = parseInt(n1) + parseInt(n2);
			var link = message.content.substr(nf);
			if(link == " "){
				message.channel.send("",{embed: {
					color: 0xFFFFFF,
					title: "Lien:",
					description: "Veuillez Activer ou Desactiver les lien avec on ou off après la commande !",
			}})} else if(link == "on"){
				write(`guild/${message.guild.id}/link.txt`, link);
				message.channel.send("" ,{embed: {
					color: 0xFFFFFF,
					title: "Lien:",
					description: "Supression de lien activer.",
			}})} else {
				exist(`guild/${message.guild.id}/link.txt`).then(exists => {
					if(exists === true) {
						del.sync(`guild/${message.guild.id}/link.txt`);
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Lien:",
							description: "Supression de lien desactiver.",
				}})} else {
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Lien:",
							description: "Vous devez activer la supression de lien avant de la desactiver.",
		}})}})}} else {
			var n1 = read.sync(`guild/${message.guild.id}/prefix.txt`, 'utf8').length;
			var n2 = "4";
			var nf = parseInt(n1) + parseInt(n2);
			var link = message.content.substr(nf);
			if(link == ""){
				message.channel.send("",{embed: {
					color: 0xFFFFFF,
					title: "Lien:",
					description: "Veuillez Activer ou Desactiver les lien avec on ou off après la commande !",
			}})} else if(link == "on"){
				write(`guild/${message.guild.id}/link.txt`, link);
				message.channel.send("" ,{embed: {
					color: 0xFFFFFF,
					title: "Lien:",
					description: "Supression de lien activer.",
			}})} else {
				exist(`guild/${message.guild.id}/link.txt`).then(exists => {
					if(exists === true) {
						del.sync(`guild/${message.guild.id}/link.txt`);
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Lien:",
							description: "Supression de lien desactiver.",
				}})} else {
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Lien:",
							description: "Vous devez activer la supression de lien avant de la desactiver.",
	}})}})}}} else {
		message.channel.send("" ,{embed: {
			color: 0xFFFFFF,
			title: "Permission non valide:",
			description: "Vous devez avoir la permission **Administrateur** pour pouvoir changer le prefix !",
}})}
}
module.exports = m
