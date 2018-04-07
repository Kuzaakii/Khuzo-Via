function m(message, Discord, prefix, client) {
      var embed = new Discord.RichEmbed()
          .setTitle("Khuzo Via Tchat")
          .addField(`${message.author.tag} ${message.author.id}`, message.content.substr(prefix.length + 4))
          .setThumbnail(message.author.avatarURL)
          .setColor(0xFFFFFF)
      client.channels.findAll('name', 'kvt').map(a=>a.send(embed))
}
module.exports = m
