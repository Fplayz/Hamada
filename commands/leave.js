exports.run = async(client, message) => {
  message.delete()
  client.emit('guildMemberRemove', message.member);
}