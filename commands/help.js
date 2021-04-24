const { MessageEmbed } = require('discord.js');

exports.run = async(client, message, args) => {

  const help = new MessageEmbed()
      .setTitle('Hamada\'s Bot Help')
      .setDescription(
        "Commands list for the Hamada bot. Use the prefix **+** before each command's!"
      )
      .addField(
        'Server Count',
        `\`\`\`${client.guilds.cache.size}\`\`\``,
        true
      )
      .addField('Command Count', `\`\`\`30\`\`\``, true)
      .addField(
        ':smirk: | Fun',
        '`avatar`, `gayrate`, `roast`, `kill`, `translate || translate-id`, `timer`, `triggered`, `reverse`, `joke`'
      )
      .addField(
        ':mag: | Searching',
        '`yt`, `google`'
      )
      
      .addField(
        ':file_folder: | Utility',
        '`server`, `afk || back`, `info`, `weather`, `worldclock`, `playstore`, `ping`, `user`'
      )
      .addField(
        ':gear:  | Moderation',
        '`purge`, `ban`,`unban`, `slowmode`, `reactionroles`, `lock`, `unlock`, `warn`'
      )
      .addField(
        ':musical_note: | Music',
        '`play`, `stop`, `shuffle`, `queue`, `resume`, `pause`, `lyrics`, `np`, `skip`, `volume`'
      )
      .addField(
        ':link: | Links',
        '[Invite](https://discord.com/oauth2/authorize?client_id=827058809847545905&permissions=8&scope=bot)'
      )
      .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
    .setFooter('Created and Developed  by: ! FplayzBob#8873')
      .setColor('ff0000')
      .setTimestamp()
      message.channel.send(help)

}