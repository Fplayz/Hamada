exports.run = async(client, message, args) => {
  {
 if(message.member.nickname) {
 if(message.member.displayName.startsWith("[AFK]")) {
 message.reply(`Welcome back ${message.author.username}!`);
 return message.member.setNickname(message.member.displayName.slice(5));
 }
 
 }
}
}