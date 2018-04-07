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
					title: "Link:",
					description: "Please enable or disable links with on or off after the command !",
			}})} else if(link == "on"){
				write(`guild/${message.guild.id}/link.txt`, link);
				message.channel.send("" ,{embed: {
					color: 0xFFFFFF,
					title: "Link:",
					description: "Remove link enable.",
			}})} else {
				exist(`guild/${message.guild.id}/link.txt`).then(exists => {
					if(exists === true) {
						del.sync(`guild/${message.guild.id}/link.txt`);
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Link:",
							description: "Remove link disable",
				}})} else {
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Link:",
							description: "You must enable link removal before you disable it.",
		}})}})}} else {
			var n1 = read.sync(`guild/${message.guild.id}/prefix.txt`, 'utf8').length;
			var n2 = "4";
			var nf = parseInt(n1) + parseInt(n2);
			var link = message.content.substr(nf);
			if(link == ""){
				message.channel.send("",{embed: {
					color: 0xFFFFFF,
					title: "Link:",
					description: "Please enable or disable links with on or off after the command !",
			}})} else if(link == "on"){
				write(`guild/${message.guild.id}/link.txt`, link);
				message.channel.send("" ,{embed: {
					color: 0xFFFFFF,
					title: "Link:",
					description: "Remove link enable.",
			}})} else {
				exist(`guild/${message.guild.id}/link.txt`).then(exists => {
					if(exists === true) {
						del.sync(`guild/${message.guild.id}/link.txt`);
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Link:",
							description: "Remove link disable",
				}})} else {
						message.channel.send("" ,{embed: {
							color: 0xFFFFFF,
							title: "Link:",
							description: "You must enable link removal before you disable it.",
	}})}})}}} else {
		message.channel.send("" ,{embed: {
			color: 0xFFFFFF,
			title: "Permission not valid:",
			description: "You must have **Administrator** permission to change the removal link!",
}})}
}
module.exports = m
