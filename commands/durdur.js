exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir ses kanalında bulunmuyorsun!`);

    if (!client.player.getQueue(message)) return message.channel.send(`Çalmayan müziği durduramazsın!`);

    client.player.pause(message);

    message.channel.send(`Müzik başarıyla durduruldu!`);

};
