function m(message, Discord, prefix, client) {
  const moment = require("moment");
  moment.locale("en");
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
    var type = "Private Message";
  } else if(channel.type === "group"){
    var type = "Group";
  } else if(channel.type === "text"){
    var type = "Text Channel";
  } else if(channel.type === "voice"){
    var type = "Voice Channel";
  } else if(channel.type === "category") {
    var type = "Category"
  }
	if(channel.parent === null){
		var parent = "No name";
	} else {
		var parent = channel.parent;
	}
	if(channel.parentID === null){
		var pid = "No ID";
	} else {
		var pid = channel.parentID;
	}
	const embed = new Discord.RichEmbed()
		.setColor(0xFFFFFF)
		.setTitle("Channels Infos")
		.addField("Name:", channel.name, true)
		.addField("ID:", channel.id, true)
		.addField("Position:", channel.calculatedPosition, true)
		.addField("Create the", moment(channel.createdAt).format("LLLL"), true)
		.addField("Category:", `Nom: ${parent}\nID: ${pid}`, true)
		.addField("Channel Type:", type, true)
	message.channel.send({embed});
}
module.exports = m
