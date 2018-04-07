function m(message, Discord, prefix, client) {
  const moment = require("moment");
  moment.locale("fr");
  var channel;
  var type;
  var parent;
  var parentId;
  var channel = message.channel;
  if(channel.type === "dm"){
    var type = "Message Priver";
  } else if(channel.type === "group"){
    var type = "Groupe";
  } else if(channel.type === "text"){
    var type = "Channel Textuel";
  } else if(channel.type === "voice"){
    var type = "Channel Vocal";
  }
  const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTitle("Channels Infos")
    .addField("Name:", client.user.username, true)
    .addField("ID:", channel.id, true)
    .addField("Créer le", moment(channel.createdAt).format("LLLL"), true)
    .addField("Type de channel:", type, true)
  message.channel.send({embed});
}
module.exports = m
