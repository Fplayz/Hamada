const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args, Discord) => {
  		if (!args[0])
			return message.channel.send('Please enter a minecraft server IP');
		if (!args[1])
			return message.channel.send('Please enter a minecraft server port');

		util
			.status(args[0], { port: parseInt(args[1]) })
			.then(response => {
				const user = message.mentions.users.first() || message.author;
				const Discord = require('discord.js');
				const embed = new MessageEmbed()
					.setColor('#560099')
					.setTitle('Server status')
					.addFields(
						{ name: 'Server IP', value: response.host },
						{ name: 'Online Players', value: response.onlinePlayers },
						{ name: 'Max Players', value: response.maxPlayers },
						{ name: 'Version', value: response.version }
					)
					.setTimestamp()
					.setFooter(`${user.tag} command successfully executed `);

				message.channel.send(embed).then(msg => {
					msg.react('👆');
					message.delete();
				});
			})
			.catch(error => {
				const Discord = require('discord.js');
				const e = new Discord.MessageEmbed()
					.setColor('560099')
					.setTitle('Invalid minecraft IP')
					.setDescription('Error to find this minecraft server');
				message.channel.send(e);
				throw error;
			});
}