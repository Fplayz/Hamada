const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

exports.run = async(client, message) => {
      const args = message.content.split(" ");
    if(!args[1]) return message.channel.send("Please include an emoji");
    if(!args[2]) return message.channel.send("There must be an id for the message");
    if(isNaN(args[2])) return message.channel.send("Please include a valid message id");
    if(!args[3]) return message.channel.send("Please include the id of the role ID");
    if(isNaN(args[3])) return message.channel.send("Please include a valid ID for the role that should be given upon reaction.");
    let emoji = ReactionEmojiGrab(args[1]);
    if(!isNaN(emoji)) emoji = client.emojis.cache.get(emoji);
    try{
      const msg = await message.channel.messages.fetch(args[2]);
      await msg.react(emoji);
      
      db.push(`${message.guild.id}.reactionroles`, 
        {
          message: msg.id,
          emoji: emoji.id || emoji,
          role: args[3]
        }
      );
    }catch(e){
      message.channel.send("Error\n" + e);
    }
}