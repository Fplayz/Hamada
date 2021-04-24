const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("mention someone to warn.")
 else {
 let embed = new Discord.MessageEmbed()
 .setTitle("Warnings")
 .setDescription(`${victim} got warned by ${message.author}!`)
 .setColor("RED")
 .setFooter(`Moderator : ${message.author.username}`)
 .setTimestamp()
 
 message.channel.send(embed)
 }
}
}