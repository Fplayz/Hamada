const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  let days = Math.floor(client.uptime / 86400000);
 let hours = Math.floor(client.uptime / 3600000) % 24;
 let minutes = Math.floor(client.uptime / 60000) % 60;
 let seconds = Math.floor(client.uptime / 1000) % 60;
     let embed = new Discord.MessageEmbed()
  .setTitle("Hamada's info!")
 .setColor("ff0000")
 .setDescription("Info:")
 .addField(`Latency is:`, `\`\`\`yaml\n${Date.now() - message.createdTimestamp} ms \`\`\``)
 .addField(`API Latency is:`, `\`\`\`yaml\n${client.ws.ping} ms\`\`\``)
 .addField("Servers:", `\`\`\`yaml\n${client.guilds.cache.size} servers\`\`\``)
 .addField("Uptime:", `\`\`\`yaml\n${days}d ${hours}h ${minutes}m ${seconds}s\`\`\``)
 .addField(`Bot owner id:`, `\`\`\`yaml\n728335750004998249\`\`\``)
 .addField("Invite me:", "[Click here](https://discord.com/api/oauth2/authorize?client_id=827058809847545905&permissions=8&scope=bot)")
 .setFooter(`Requested by: ${message.author.username}`)
 .setTimestamp()
 .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true, size: 2048})}`)
 message.channel.send(embed)
}