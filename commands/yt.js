exports.run = async(client, message, args) => {
     let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("Please specify a search query.")
 let embed = new Discord.MessageEmbed()
 .setTitle("YouTube search")
 .setDescription(`**Your Searched:** ${sentence}\n\n **Search Result** - [Click Here](https://www.youtube.com/results?search_query=${sentence})\n If search fails, make sure to replace the spaces in the search query, if you have them, to the + sign\nExample: +yt pog+champ+video`)
 .setColor("ff0000")
 .setFooter(`Requested by: ${message.author.username}`)
 .setTimestamp()
 .setThumbnail('https://imgur.com/gallery/5iZo1')
 message.channel.send(embed)
}