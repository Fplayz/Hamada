exports.run = async(client, message) => {
 const args = message.content.split(' ').splice(1);
  if(!args[0]) return message.channel.send('Please include a valid time');
  if(isNaN(args[0])) return message.channel.send('Please include a valid number');
  if(!args[1]) return message.channel.send('You have to include something for me to remind you with')
  setTimeout(() => {
    const msg = args.splice(1).join(' ');
    message.channel.send(`${message.author}, ${msg}`)
  }, parseInt(args[0], 10) * 1000)
}