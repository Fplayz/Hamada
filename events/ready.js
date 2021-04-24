module.exports = (client) => {
    console.log('Im alive as' + client.user.tag)
     client.user.setActivity('+help', { type: 'STREAMING', url: 'https://twitch.tv/shroud' })
}