exports.run = async(client, message, args) => {
  if(message.member.hasPermission("BAN_MEMBERS")) {
 const user = message.mentions.users.first();
 
 if (user) {
 
 const member = message.guild.member(user);

 if (member) {

 member
 .ban({
 reason: 'They were bad!',
 })
 .then(() => {

 message.reply("Successfully banned ${user.tag}");
 })
 .catch(err => {

 message.reply("I was unable to ban the member");
 
 console.error(err);
 });
 } else {
 
 message.reply("That user isn't in this guild!");
 }
 } else {
 
 message.reply("You didn't mention the user to ban!");
  }
  }
}