const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  {
 let embed = new Discord.MessageEmbed()
 .setTitle("🏓 Pong!")
 .addField(`Latency is:`, `\`\`\`yaml\n${Date.now() - message.createdTimestamp} ms \`\`\``)
 .addField(`API Latency is:`, `\`\`\`yaml\n${client.ws.ping} ms\`\`\``)
 .setColor("BLUE")
 .setFooter(
 `Requested by ${message.author.username}`,
 message.author.displayAvatarURL()
 );
 message.channel.send(embed);
 }
}