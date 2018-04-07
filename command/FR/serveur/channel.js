function m(message, Discord, prefix, client) {
  const moment = require("moment");
  moment.locale("fr");
  message.delete(message.author);
	var chan = message.mentions.channels.first();
	var channel;
	var type;
	var parent;
	var parentId;
	if(!chan){
		var channel = message.channel;
	} else {
		var channel = message.mentions.channels.first();
	}
	if(channel.type === "dm"){
		var type = "Message Priver";
	} else if(channel.type === "group"){
		var type = "Groupe";
	} else if(channel.type === "text"){
		var type = "Channel Textuel";
	} else if(channel.type === "voice"){
		var type = "Channel Vocal";
	} else if(channel.type === "category") {
    var type = "Catégorie"
  }
	if(channel.parent === null){
		var parent = "Aucun nom";
	} else {
		var parent = channel.parent;
	}
	if(channel.parentID === null){
		var pid = "Aucune ID";
	} else {
		var pid = channel.parentID;
	}
	const embed = new Discord.RichEmbed()
		.setColor(0xFFFFFF)
		.setTitle("Channels Infos")
		.addField("Name:", channel.name, true)
		.addField("ID:", channel.id, true)
		.addField("Position:", channel.calculatedPosition, true)
		.addField("Créer le", moment(channel.createdAt).format("LLLL"), true)
		.addField("Category:", `Nom: ${parent}\nID: ${pid}`, true)
		.addField("Type de channel:", type, true)
	message.channel.send({embed});
}
module.exports = m
