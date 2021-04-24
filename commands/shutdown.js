exports.run = async function (client, message, args) {
const BO = '716284854043410474';
const bot = client.user
  if(message.author.id === BO) 
    {

      message.channel.send('Shutting Down...  3').then(E1 => 
        {
          setTimeout(function() 
              {
                E1.edit(`Shutting Down...  2`)
              }, 2000) 
          setTimeout(function() 
              {
                E1.edit(`Shutting Down...  1`)
              }, 4000)
          setTimeout(function() 
              {
                E1.delete()
              }, 6000)
          setTimeout(function() 
              {
                process.exit()
              }, 8000)                                              
        })


    }
    else
    {
      message.reply(`\`\`\`yaml\nMissing Permission To access Devs Commands\n\`\`\``)
  }
}