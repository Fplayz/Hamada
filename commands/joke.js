const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {
  {
    const body = await fetch("https://sv443.net/jokeapi/v2/joke/Any")
      .then((r) => r.json());

    if(body.error) return message.channel.send("Something went wrong with the API. Try again later.");
    const flags = Object.entries(body.flags).filter((x) => x[1]).map((x) => x[0]).join(", ");
    
    const embed = new MessageEmbed()
      .setTitle(`${body.category}${flags ? ` (${flags})` : ""}`)
      .setColor('ff0000')
      .setDescription(body.type === "single" ? `${body.joke}` : `**${body.setup}**\n*${body.delivery}*`)
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 64 }));

    return message.channel.send({ embed });
  }
}