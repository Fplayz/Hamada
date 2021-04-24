const weather = require('weather-js');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

exports.run = async(client, message, args) => {
          weather.find({ search: args.join(" "), degreeType: 'C' }, function(error, result) {
         
            if (!args[0]) return message.reply(
                new MessageEmbed()
                    .setTitle('There was an error')
                    .setDescription(`Usage: +weather <place>`)
                    .setColor("RED")
            );

            if (result === undefined || result.length === 0) return message.reply(
                new MessageEmbed()
                    .setTitle('Error 404')
                    .setDescription(`Couldn't Find This Location`)
                    .setColor("BLUE")
            );

            var current = result[0].current;
            var location = result[0].location;

            const weatherinfo = new Discord.MessageEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather forecast for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor("GREEN")
                .addField('Timezone', `UTC${location.timezone}`, true)
                .addField('Degree Type', 'Celsius', true)
                .addField('Temperature', `${current.temperature}°`, true)
                .addField('Wind', current.winddisplay, true)
                .addField('Feels like', `${current.feelslike}°`, true)
                .addField('Humidity', `${current.humidity}%`, true)


            message.channel.send(weatherinfo)
        })
}