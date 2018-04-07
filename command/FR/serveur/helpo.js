function m(message, Discord, prefix, client) {
	if(message.author.id === '254326758864715777'){
		message.delete(message.author);
message.channel.send("",{embed: {
  color: 0xFFFFFF,
  title: "Commande d'administration du bot:",
  description: "Ces commandes ne peuvent être faite qu'avec des autorisation spécial !\n\n\nEnvoyer `game`**`game`** : pour changer de jeux\n\nEnvoyer `status`**`status`** : pour changer de status:\n**`online`** = en ligne\n**`idle`** = Inactif\n**`dnd`** = Ne pas déranger\n**`invisible`** = Hors ligne\n\nEnvoyer `restart` : pour redemarrer le bot",
}});
const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
collector.on('collect', message => {
  if(message.content.startsWith("game") || message.content.startsWith("Game")){
    message.delete(message.author);
    if(message.content.substr(0).indexOf(" ") !== -1){
      var jeux = message.content.substr(5);
    } else {
      var jeux = message.content.substr(4);
    } if (jeux === "") {
      message.channel.send("" ,{embed: {
        color: 0xFFFFFF,
        title: "Aucun jeux:",
        description: "Veuillez mettre un jeux après la commande !",
    }})} else {
			client.user.setPresence({ game: { name: jeux + ' | k!help' }})
      message.channel.send("" ,{embed: {
        color: 0xFFFFFF,
        title: "Jeux:",
        description: "Jeux changer en : "+jeux,
}})}} else if(message.content.startsWith("status") || message.content.startsWith("Status")){
    message.delete(message.author);
    if(message.content.substr(0).indexOf(" ") !== -1){
      var statu = message.content.substr(7);
    } else {
      var statu = message.content.substr(6);
    } if (statu === "") {
      message.channel.send("" ,{embed: {
        color: 0xFFFFFF,
        title: "Aucun status:",
        description: "Veuillez mettre un status après la commande !",
    }})} else {
      client.user.setPresence({ status: statu })
      message.channel.send("" ,{embed: {
        color: 0xFFFFFF,
        title: "Status:",
        description: "Status : "+status,
}})}} else if(message.content === "restart" || message.content === "Restart"){
  const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTitle("Restart")
    .setDescription("Bot redémarrer");
  message.channel.send({embed})
  setTimeout(function(){process.exit(0);}, 1000);
}})} else {
	message.delete(message.author);
		message.channel.send("",{embed: {
		color: 0xFFFFFF,
		title: "Permission non valide:",
		description: "Vous devez avoir une autorisation spécial pour pouvoir acceder au commande d'administration du bot !",
	}})}
}
module.exports = m
