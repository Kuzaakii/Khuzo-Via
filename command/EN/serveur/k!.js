function m(message, Discord, prefix, client) {
if(prefix === "k!"){

} else {
  message.delete(message.author);
message.channel.send("" ,{embed: {
    color: 0xFFFFFF,
    title: "Wrong prefix:",
    description: `Please use the correct prefix **${prefix}** !`,
}})}
}
module.exports = m
