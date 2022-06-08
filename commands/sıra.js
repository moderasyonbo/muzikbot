exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir ses kanalında değilsin!`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`Şu anda çalan bir müzik yok!`);

    message.channel.send(`**Sunucu Listesi - ${message.guild.name} ${client.emotes.queue}**\nAkım : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Ve **${queue.tracks.length - 5}**  diğer şarkılar...` : `Oynatma Listesinde: **${queue.tracks.length}** müzik)...`}`));

};
