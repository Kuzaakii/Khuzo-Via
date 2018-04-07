function m(message, Discord, prefix, client) {
var text = message.content.substr(0);
var textS = text.indexOf("/");
if(textS !== -1){
  message.delete(message.author);
  var newText = message.content.substr(0);
  var TextEmbed = newText.indexOf("/embed");
  var TextMsg = newText.indexOf("/msg");
  var TextReverse = newText.indexOf("/reverse");
  if(message.content.substr(prefix.length + 7) == "?"){
    return message.author.send("", {embed: {
      color: 0xFFFFFF,
      title: "Say Help",
      description: '​   ∙' + prefix + 'say /embed : Envoyer un message en embed.\n   ∙' + prefix + 'say /msg : Envoyer un message.\n   ∙' + prefix + 'say /mp `@mention` : Envoyer un message privé.\n   ∙' + prefix + 'say /reverse : Envoyer un message à l\'envers (marche aussi pour l\'inverse)',
    }})} else if(TextEmbed !== -1){
      message.channel.send("", {embed: {
        color: 0xFFFFFF,
        description: message.content.substr(prefix.length + 11),
      }});
      console.log("SayEmbed: " + message.content.substr(prefix.length + 11) + " | " + message.author.username + "#" + message.author.discriminator + "\n");
  } else if(TextMsg !== -1){
      message.channel.send(message.content.substr(prefix.length + 9));
      console.log("SayMsg: " + message.content.substr(prefix.length + 9) + " | " + message.author.username + "#" + message.author.discriminator + "\n");
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
      description: '​   ∙' + prefix + 'say /embed : Envoyer un message en embed.\n   ∙' + prefix + 'say /msg | ' + prefix + 'say : Envoyer un message.\n   ∙' + prefix + 'say /reverse : Envoyer un message à l\'envers (marche aussi pour l\'inverse)',
}})}
}
module.exports = m
