const translate = require('@iamtraction/google-translate')

exports.run = async(client, message, args) => {
  { 
   let args = message.content.split(" ").slice(1);
   const query = args.join(" ");
    if (!query) return message.reply("Please type a text to translate.")

    const translated = await translate(query, {to: 'en'});
    message.channel.send(translated.text)
 }
}