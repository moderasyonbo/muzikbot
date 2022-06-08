exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`İlk önce bir ses kanalına gir!`);

    if (!args[0]) return message.channel.send(`Lütfen bir şarkı ismi gir!`);

    client.player.play(message, args.join(" "));

};
