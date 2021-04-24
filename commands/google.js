const Discord = require('discord.js');

exports.run = async(client, message, args) => {
   let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("Please specify a search query.")
 let embed = new Discord.MessageEmbed()
 .setTitle("Google searcg")
 .setDescription(`**Your Search :** ${sentence}\n\n **Search Result** - [Click Here](https://www.google.com/search?q=${sentence}&oq=${sentence}&aqs=chrome.0.69i59l2j0l2j69i60j69i61l2j69i65.1147j0j7&sourceid=chrome&ie=UTF-8)\n If search fails, make sure to replace the spaces in the search query, if you have them, to the + sign\nExample: +google is+am+i+handsome?`)
 .setColor("WHITE")
 .setFooter(`Requested by: ${message.author.username}`)
 .setTimestamp()
 .setThumbnail('https://imgur.com/gallery/uUwHV')
 message.channel.send(embed)
}