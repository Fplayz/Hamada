const Discord = require('discord.js');

exports.run = async(client, message, args) => {
let victim = message.mentions.users.first() || message.author();
 let rand = Math.round(Math.random() * 110 + 1);
 if (!victim) console.log("")

 else {
 let embed = new Discord.MessageEmbed()
 .setTitle(`Howgay system`)
 .setDescription(`${victim} is ${rand}% GAY! :rainbow_flag:`)
 .setColor("#BFFF00")
 .setFooter("100% accurate h3h3:flushed:")
 message.channel.send(embed)
}
}