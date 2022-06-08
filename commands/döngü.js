exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir ses kanalında bulunmuyorsun!`);

    if (!client.player.getQueue(message)) return message.channel.send(`Bir müzik çalmadığı için döngüye alınacak şarkı yok!`);

    const repeatMode = client.player.getQueue(message).repeatMode;

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(`Döngü modu başarıyla kapatıldı!`);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(`Döngü modu başarıyla açıldı!`);
    };

};
