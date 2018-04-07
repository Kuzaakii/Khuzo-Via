function m(message, Discord, prefix, client) {
  const { translate, detectLanguage, wordAlternatives, translateWithAlternatives } = require('deepl-translator');
  translate(message.content.substring(prefix.length + 12), message.content.substring(prefix.length + 10, prefix.length + 12))
    .then(res => {
      var embed = new Discord.RichEmbed()
          .setTitle("Translation: ")
          .setDescription(res.translation)
          .setColor(0xFFFFFF);
      message.channel.send({embed});
    });
}
module.exports = m
