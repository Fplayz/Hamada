const Discord = require('discord.js');

exports.run = async(client, message) => {
   let args = message.content
 .split(" ")
 .slice(1)
 if(!args[0]) return message.channel.send("Hey! To suggest something you need to send something!")
 const reportlog = new Discord.MessageEmbed()
 .setTitle("A new suggestion!") 
 .setColor('RANDOM')
.setDescription(args.join(" "))
.setFooter(`Suggestion by ${message.author.tag}`)
.setTimestamp()
client.channels.cache.get('830734800918806610').send(reportlog).then (sentMessage => {
 sentMessage.react(":arrow_up:")
 sentMessage.react(":arrow_down:")
 })
 message.channel.send("Your Suggestion has been succesfully been sent.")
}