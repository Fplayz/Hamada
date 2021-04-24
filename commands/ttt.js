const { tictactoe } = require('reconlx')

exports.run = async(client, message, args) => {
   const member = message.mentions.members.first() 
 if(!member) return message.channel.send('Mention a user to play with')

 new tictactoe({
 player_two: member, 
 message: message
})
}