exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir ses kanalında bulunmuyorsun!`);

    if (!client.player.getQueue(message)) return message.channel.send(`Şu anda bir müzik çalmıyor!`);

    client.player.resume(message);

    message.channel.send(` ${client.player.getQueue(message).playing.title} Adındaki müzik devam ettiriliyor!`);

};
