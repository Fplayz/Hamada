const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  let victim = message.mentions.users.first()
 if(!victim) message.reply("Suicide? Mention to kill. Or u will get ||RICKROLLED||")
 else {
let replies = [ (`${victim} was shot by ${message.author}`), (`${victim} has been stabbed`), (`${victim} was drowned by ${message.author}`),  (`${victim} has been electrified`), (`A goose honked at ${victim} to death`),  (`Some psychopath zapped ${victim} with his laser eyes`),  (`${victim} ate a poisonous potato`), (`${victim} died from slowmode being to long`),  (`${victim} was run over by car`), (`${victim} was pushed in lava`), (`${victim} was banned by the server owner`),  (`${victim} was found dead in a dumpster`),  (`Someone named ${message.author} was found chewing on ${victim}'s leg`), (`${victim} got drunk by ${message.author} forcing them to and fell in the water`), 
 (`${victim} made a deal with the devil`), (`${victim} was hacked by an 
Oreo`), (`An alien named MEE6 abducted ${victim} in their sleep`), (`${victim} was brutally murdered by a table`), (`${victim} saw Dream in person and died`), (`${message.author} dared ${victim} to swallow rocks`), (`${victim} failed skydiving lessons\nbut skydived anyway`), (`${victim} a dog bit them to death`), (`A dragon lit ${victim} on fire and turned to ashes`), (`${victim} tried to code (i code ok not u)`), (`${victim} did not mention to kill`), (`${victim} was killed by ${message.author}'s poisonous farts`), (`${victim} time traveled to the year 3000 and died\ninstantly due to no oxygen being there`), (`${victim} was the imposter and died`)]

 let embed = new Discord.MessageEmbed() 
 .setTitle(`YOU'RE DEAD BABY...............`)
 .setDescription(`${replies[Math.floor(Math.random() * replies.length)]}`)
 .setColor("RED")
 .setFooter("Death time :")
 .setThumbnail(`${victim.displayAvatarURL()}`)
 .setTimestamp()
 message.channel.send(embed)
}
}