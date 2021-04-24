exports.run = async(client, message) => {
  message.delete()
  client.emit('guildMemberAdd', message.member);
}