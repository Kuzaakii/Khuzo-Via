function m(message, Discord, prefix, client) {
  message.delete(message.author);
  var write = require('write-file');
  var del = require('delete');
  var read = require('read-file');
  var exist = require('file-exists');
  if(message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
  var pref;
  if(message.content.substr(0).indexOf("/delete") !== -1){
    write(`guild/${message.guild.id}/prefix.txt`, "k!");
    message.channel.send("" ,{embed: {
      color: 0xFFFFFF,
      title: "Prefix delete:",
      description: "New prefix: **k!**",
    }})
    return;
  } else if(message.content.substr(0).indexOf(" ") !== -1){
    var n1 = read.sync(`guild/${message.guild.id}/prefix.txt`, 'utf8').length;
    var n2 = "7";
    var nf = parseInt(n1) + parseInt(n2)
    var pref = message.content.substr(nf);
  } else {
    var n1 = read.sync(`guild/${message.guild.id}/prefix.txt`, 'utf8').length;
    var n2 = "6";
    var nf = parseInt(n1) + parseInt(n2)
    var pref = message.content.substr(nf);
  } if (pref === "") {
    message.channel.send("" ,{embed: {
      color: 0xFFFFFF,
      title: "No prefix:",
      description: "Please put a prefix after the command !",
  }})} else {
    write(`guild/${message.guild.id}/prefix.txt`, pref);
    message.channel.send("" ,{embed: {
      color: 0xFFFFFF,
      title: "Prefix:",
      description: "Prefix change to : "+pref,
  }})}} else {
  message.channel.send("" ,{embed: {
    color: 0xFFFFFF,
    title: "Permission not valid:",
    description: "You must have **Administrator** permission to change the prefix!",
  }})}
}
module.exports = m
