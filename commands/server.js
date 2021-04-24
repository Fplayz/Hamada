const Discord = require('discord.js');

exports.run = (client, message, args) => {
  {
 let embed = new Discord.MessageEmbed()
 .setColor('#0099ff')
 .setTitle(
 `${message.guild.name}`
 )
 .setThumbnail(message.guild.iconURL())
 .addFields(
 { name: 'Region:', value: `${message.guild.region}` },
 
 )
 .addFields(
 { name: 'Total Members:', value: `${message.guild.memberCount}` },
 
 )

 .addField("Total Emojis", `${message.guild.emojis.cache.size}.`)
 .addField("Total Roles", `${message.guild.roles.cache.size}.`)


 .addFields(
 { name: 'Owner:', value: `${message.guild.owner}`},
 
 )
 
 .setFooter(`GUILD ID: ${message.guild.id}`, `${message.guild.iconURL()}`);

 message.channel.send(embed);
 }
}