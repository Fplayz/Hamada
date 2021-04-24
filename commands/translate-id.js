const translate = require('@iamtraction/google-translate')

exports.run = async(client, message, args) => {
  { 
   let args = message.content.split(" ").slice(1);
   const query = args.join(" ");
    if (!query) return message.reply("Ketik sesuatu untuk di terjemahkan.")

    const translated = await translate(query, {to: 'id'});
    message.channel.send(translated.text)
 }
}