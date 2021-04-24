const Discord = require('discord.js');
const moment = require('moment');

exports.run = async(client, message, args) => {
 let user = message.mentions.users.first() || message.author;
 let member = message.mentions.members.first() || message.member;
 let e = new Discord.MessageEmbed()
    .setColor("#03ffeb")
    .setThumbnail(message.author.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined Server at:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account created on:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Roles", member.roles.cache.map(r => '<@&'+r.id+'>').join(' | '), true)
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
message.channel.send(e);
}