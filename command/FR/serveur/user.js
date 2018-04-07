function m(message, Discord, prefix, client) {
  console.log("ok");
const moment = require("moment");
moment.locale("fr");
message.delete(message.author);
var mentionned = message.mentions.users.first();
var member;
if(mentionned){
  var member = mentionned;
} else {
  var member = message.author;
}
if(member.bot == true){
  var bot = " `BOT`";
  var BUID = "Bot "
} else {
  var bot = "​";
  var BUID = "User "
}
if(member.presence.status == 'online'){
  var status = "En ligne";
} else if(member.presence.status == 'dnd'){
  var status = "Ne pas déranger";
} else if(member.presence.status == 'idle'){
  var status = "Inactif";
} else if(member.presence.status == 'offline'){
  var status = "Hors ligne";
}
var temps = moment(member.createdTimestamp).format("LLLL");
const embed = new Discord.RichEmbed()
  .setColor(0xFFFFFF)
  .setTitle("Users Infos")
  .addField("Pseudo:", member.tag + bot, true)
  .addField(`${BUID}ID:`, member.id, true)
  .addField("Status:", status, true)
  .addField("Créer le:", temps, true)
  .setThumbnail(member.avatarURL)
message.channel.send({embed})
}
module.exports = m
