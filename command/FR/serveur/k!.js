function m(message, Discord, prefix, client) {
if(prefix === "k!"){

} else {
  message.delete(message.author);
message.channel.send("" ,{embed: {
    color: 0xFFFFFF,
    title: "Mauvais prefix:",
    description: `Veuillez utilisez le bon prefix **${prefix}** !`,
}})}
}
module.exports = m
