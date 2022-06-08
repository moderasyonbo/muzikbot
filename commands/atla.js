exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir ses kanalında değilsin!`);

    if (!client.player.getQueue(message)) return message.channel.send(`Şu anda çalan müzik olmadığı için bir müziği atlayamazsın!`);

    client.player.skip(message);

    message.channel.send(`Müzik Başarıyla Atlandı!`);

};
