function m(message, Discord, prefix, client) {
message.delete(message.author);
var text = message.content.substr(0);
var textS = text.indexOf("/");
if(textS !== -1){
  message.delete(message.author);
  var newText = message.content.substr(0);
  var TextEmbed = newText.indexOf("/embed");
  var TextMsg = newText.indexOf("/msg");
  var TextMp = newText.indexOf("/mp");
  var TextReverse = newText.indexOf("/reverse");
  if(message.content.substr(prefix.length + 7) == "?"){
    return message.channel.send("", {embed: {
      color: 0xFFFFFF,
      title: "Say Help",
      description: '​   ∙' + prefix + 'say /embed : Send a message as embed.\n   ∙' + prefix + 'say /msg : Send a message.\n   ∙' + prefix + 'say /mp `@mention` : Send a private message.\n   ∙' + prefix + 'say /reverse : Sending a message backwards (also works for the reverse)',
    }})} else if(TextEmbed !== -1){
      message.channel.send("", {embed: {
        color: 0xFFFFFF,
        description: message.content.substr(prefix.length + 11),
      }});
      console.log("SayEmbed: " + message.content.substr(prefix.length + 11) + " | " + message.author.username + "#" + message.author.discriminator + "\n");
  } else if(TextMsg !== -1){
      message.channel.send(message.content.substr(prefix.length + 9));
      console.log("SayMsg: " + message.content.substr(prefix.length + 9) + " | " + message.author.username + "#" + message.author.discriminator + "\n");
  } else if(TextMp !== -1){
      var msgPrivate;
      var mentionned = message.mentions.users.first();
      if(mentionned){
        var msgPrivate = message.mentions.users.first();
      } else {
        var msgPrivate = message.author;
      }
      if(msgPrivate.id == "254326758864715777"){
        return console.log("SayMPB: " + message.content.substr(prefix.length + 30) + " | " + message.author.username + "#" + message.author.discriminator + " à moi\n");
      } else if(msgPrivate.id == message.author.id){
        return message.channel.send(`${message.author} You can't send a message to yourself, please try again with the command **${prefix}say /mp @mention**`);
      }
      msgPrivate.send(message.content.substr(prefix.length + 30));
      console.log("SayMP: " + message.content.substr(prefix.length + 30) + " | " + message.author.username + "#" + message.author.discriminator + " à " + msgPrivate.username + "#" + msgPrivate.discriminator);
  } else if(TextReverse !== -1){
    var reverse = require('reverse-string');
    var text = reverse(message.content.substr(prefix.length + 13));
    message.channel.send(text);
    console.log("SayReverse: " + message.content.substr(prefix.length + 13) + " | " + message.author.username + "#" + message.author.discriminator + "\n");
    }
} else {
    message.author.send("", {embed: {
      color: 0xFFFFFF,
      title: "Say Help",
      description: '​   ∙' + prefix + 'say /embed : Send a message as embed.\n   ∙' + prefix + 'say /msg : Send a message.\n   ∙' + prefix + 'say /mp `@mention` : Send a private message.\n   ∙' + prefix + 'say /reverse : Sending a message backwards (also works for the reverse)',
}})}
}
module.exports = m
