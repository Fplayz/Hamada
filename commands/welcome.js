let Canvas = require('canvas');

exports.run = async(client, message, args) => {
      const channel = member.guild.channels.cache.find(ch => ch.name === 'in-out');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `AYYY.... Welcome to our server, ${member.user.username}!`,
      attachment
    );
}