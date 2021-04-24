const Discord = require("discord.js");
const client = new Discord.Client();
const canvacord = require("canvacord");

exports.run = async(client, message) => {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    let image = await canvacord.Canvas.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    return message.channel.send(attachment);
}