function m(message, Discord, prefix, client) {
  const moment = require("moment");
  moment.locale("en");
  var channel;
  var type;
  var parent;
  var parentId;
  var channel = message.channel;
  if(channel.type === "dm"){
    var type = "Private Message";
  } else if(channel.type === "group"){
    var type = "Group";
  } else if(channel.type === "text"){
    var type = "Text Channel";
  } else if(channel.type === "voice"){
    var type = "Voice Channel";
  }
  const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTitle("Channels Infos")
    .addField("Name:", client.user.username, true)
    .addField("ID:", channel.id, true)
    .addField("Create the:", moment(channel.createdAt).format("LLLL"), true)
    .addField("Channel Type:", type, true)
  message.channel.send({embed});
}
module.exports = m
