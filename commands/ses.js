exports.run = async (client, message, args) => {

    if (!message.member.voice.channel) return message.channel.send(`Bir ses kanalında bulunmuyorsun!`);

    if (!client.player.getQueue(message)) return message.channel.send(`Şu anda bir müzik çalmıyor!`);

    if (!args[0]) return message.channel.send(`Lütfen bir sayı gir (ses düzeyi için)`);

    if (isNaN(args[0]) || 100 < args[0] || args[0] <= 0) return message.channel.send(`1 ile 100 arasında bir sayı girmelisin!`);

    if (message.content.includes('-') || message.content.includes('+') || message.content.includes(',') || message.content.includes('.')) return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);

    client.player.setVolume(message, parseInt(args[0]));

    message.channel.send(`Ses **${args.join(" ")}%** olarak ayarlandı! !`);

};
