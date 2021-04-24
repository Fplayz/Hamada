exports.run = async(client, message) => {
  
      const args = message.content
    .trim()
    .split(/ +/g);
        let text = args.slice(1).join(" ");
if(!text) return message.channel.send(`:x: | Please provide text!! **Example:** \`+reverse I love cakes\``)

        var reversed = '';
        var i = text.length;

        while (i > 0) {
        reversed += text.substring(i - 1, i);
        i--;
    }
    message.channel.send(reversed);

}