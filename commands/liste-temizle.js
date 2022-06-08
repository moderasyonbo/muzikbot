exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir ses kanalında değilsin!`);

    if (!client.player.getQueue(message)) return message.channel.send(`Şuan bir müzik çalmadığı için bir liste yok!`);

    client.player.clearQueue(message);

    message.channel.send(`Liste başarıyla temizlendi!`);

};
