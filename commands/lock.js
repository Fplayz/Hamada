exports.run = async(client, message, args) => {
  {
if(message.member.hasPermission("MANAGE_CHANNELS")) {
message.guild.channels.cache.filter(ch => ch.type === "text").forEach(c => {
c.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: false
});
});
message.channel.send("All channels have been locked.")
.catch(err => {
message.channels.send(" :x: Uh oh! Something bad happened!")
console.error(err);
});
} else {
message.channel.send("I don't have the required permissions to do this.")
};
};
}