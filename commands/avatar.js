const { MessageEmbed } = require('discord.js');

exports.help = {
  name: "avatar",
  description: "avatar",
  usage: "avatar <user>"
}
exports.run = async(client, message, args) => {
  const user = message.mentions.users.first() || message.author;
       const avatar = user.avatarURL({ size: 2048, dynamic: true });
    const avatarEmbed = new MessageEmbed()
      .setColor("#0000ff")
      .setAuthor(`${user.username} Profile picture`)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp()
      .setImage(avatar)
    message.channel.send(avatarEmbed);
}
exports.conf = {
    aliases:["av", "pfp", "pp"]
}