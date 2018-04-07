const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const moment = require("moment");
const config = require("./config.json")
moment.locale("fr");
function sleep(ms) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > ms){
      break;
    }
  }
}

client.on('message', message => {
if (message.author.bot == true) return;
var prefix;
var write = require('write-file');
var del = require('delete');
var read = require('read-file');
var exist = require('file-exists');
if(message.channel.type === 'dm'){
//message priver
	var prefix = "k!";
  const id = message.author.id;
  exist(`user/${message.author.id}/lang.txt`).then(exists => {
    if(exists === true) {
      var read = require('read-file');
      var lang = read.sync(`user/${message.author.id}/lang.txt`, 'utf8');
      if(message.content.startsWith(prefix + "prefix")){
      	message.channel.send("You cannot change the prefix in private messages");
      } else if(message.content.startsWith(prefix + "link")){
      	message.channel.send("You cannot enable link removal in private messages");
      }
    } else {
      var write = require('write-file');
      write(`user/${message.author.id}/lang.txt`, "FR");
      var lang = "FR";
      if(message.content.startsWith(prefix + "prefix")){
        message.channel.send("Vous ne pouvez pas modifier le prefix dans les messages priver");
      } else if(message.content.startsWith(prefix + "link")){
      	message.channel.send("Vous ne pouvez pas activer la supression de lien dans les messages priver");
      }
    }
    function command(file) {
      require(`./command/${lang}/mp/${file}`)(message, Discord, prefix, client);
    }
    if(message.content.startsWith(prefix + "help")){
    	if(message.content.substr(0).indexOf("owner") !== -1){
        command("helpo.js");
      } else {
        command("help.js");
    }} else if(message.content === (prefix + "invite")){
    	command("invite.js");
    } else if (message.content.startsWith(prefix +"say")){
      command("say.js");
    } else if(message.content.startsWith(prefix + "channel")){
      command("channel.js");
    } else if(message.content.startsWith(prefix +"user")) {
      command("user.js");
    } else if(message.content.startsWith(prefix +"kvt")){
      command("kvt.js");
    } else if(message.content.startsWith(prefix +"translate")){
      command("translate.js")
    } else if(message.content.startsWith(prefix +"server")){
      message.channel.send("Mon serveur : https://discord.gg/7dbbtEp")
    } else if(message.content.startsWith(prefix +"lang")){
      if(lang === "FR"){
        var write = require('write-file');
        write(`user/${message.author.id}/lang.txt`, "EN");
        message.channel.send("language change to English");
      } else {
        var write = require('write-file');
        write(`user/${message.author.id}/lang.txt`, "FR");
        message.channel.send("langage changer en Français");
      }
    }
  });

} else {
//message server
  exist(`guild/${message.guild.id}/lang.txt`).then(exists => {
    if(exists === true){
      var lang = read.sync(`guild/${message.guild.id}/lang.txt`, 'utf8');
    } else {
      var write = require('write-file');
      write(`guild/${message.guild.id}/lang.txt`, "FR");
      var lang = "FR";
    }
  exist(`guild/${message.guild.id}/link.txt`).then(exists => {
  	if(exists === true) {
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
        require(`./command/${lang}/serveur/linko.js`)(message, Discord, prefix, client);
      }
    }});
exist(`guild/${message.guild.id}/prefix.txt`).then(exists => {
	if(exists === true) {
		var prefix = read.sync(`guild/${message.guild.id}/prefix.txt`, 'utf8');
    function command(file) {
      require(`./command/${lang}/serveur/${file}`)(message, Discord, prefix, client);
    }
		if(message.content.startsWith("k!")){
      command("k!.js");
} if(message.content.startsWith(prefix + "help")){
	if(message.content.substr(0).indexOf("owner") !== -1){
    command("helpo.js");
  } else {
    command("help.js");
  }}else if(message.content.startsWith(prefix + "prefix")){
    command("prefix.js");
} else if(message.content === (prefix + "invite")){
    command("invite.js");
}else if(message.content.startsWith(prefix + "link")){
    command("link.js");
} else if (message.content.startsWith(prefix +"say")){
    command("say.js");
} else if(message.content.startsWith(prefix + "channel")){
    command("channel.js");
} else if(message.content.startsWith(prefix +"user")) {
    command("user.js");
} else if(message.content.startsWith(prefix +"kvt")){
    command("kvt.js");
} else if(message.content.startsWith(prefix +"translate")){
  command("translate.js");
} else if(message.content.startsWith(prefix +"serveur")){
  message.channel.send("Mon serveur : https://discord.gg/7dbbtEp")
} else if(message.content.startsWith(prefix +"lang")){
  message.delete(message.author);
  var write = require('write-file');
  if(lang === "FR"){
    if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
      var write = require('write-file');
      write(`guild/${message.guild.id}/lang.txt`, "EN");
      message.channel.send("language change to English");
    } else {
      message.channel.send("" ,{embed: {
        color: 0xFFFFFF,
        title: "Permission non valide:",
        description: "Vous devez avoir la permission **Administrateur** pour changer la langue !",
    }})}
  } else {
    if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
      var write = require('write-file');
        write(`guild/${message.guild.id}/lang.txt`, "FR");
        message.channel.send("langue changer en Français");
      } else {
        message.channel.send("" ,{embed: {
          color: 0xFFFFFF,
          title: "Permission not valid:",
          description: "You must have **Administrator** permission to change the language !",
      }})}
    }
  }

} else {
	var write = require('write-file');
	write(`guild/${message.guild.id}/prefix.txt`, "k!");
  message.delete(message.author);
}})})}});

client.on("guildCreate", guild => {
	var write = require('write-file');
	write(`guild/${guild.id}/prefix.txt`, "k!");
  write(`guild/${guild.id}/lang.txt`, "FR");
});

client.on("guildDelete", guild => {
	var del = require('delete');
	del.sync(`guild/${guild.id}`);
});

client.on("ready", () => {
	console.log("ok " + client.guilds.size);
  client.user.setPresence({ game: { name: 'Aide | k!help' }, status: 'dnd'})
});


client.login(config.token);
