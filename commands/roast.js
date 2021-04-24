exports.run = async(client, message, args) => {
      let victim = message.mentions.users.first()
    if (!victim) message.reply("You need mention someone to roast.")
    else {
      let replies = [`${victim}, Ur mom is gae`, `Mirrors can't talk, luckily for ${victim} they can't laugh or scream either.`, `If laughter is the best medicine, then ${victim}'s face must be curing the World.`, `${victim}, SOMEDAY YOU'LL GO FAR.. AND I HOPE YOU REMAIN THERE`, `${victim} IS AS USELESS AS THE "UEUE" IN "QUEUE" ngl`]
      message.channel.send(replies[Math.floor(Math.random() * replies.length)])
}
}