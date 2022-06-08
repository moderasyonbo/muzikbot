exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir sesli kanalda değilsin!`);

    if (!client.player.getQueue(message)) return message.channel.send(`Şu anda bir müzik çalmıyor!`);

    client.player.shuffle(message);

    return message.channel.send(`Başarıyla karıştırdım!`);

};
