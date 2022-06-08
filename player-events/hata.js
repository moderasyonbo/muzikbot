module.exports = (client, error, message) => {

    switch (error) {
        case 'Oynatılmıyor':
            message.channel.send(`Bu sunucuda çalınan müzik yok!`);
            break;
        case 'BağlantıYok':
            message.channel.send(`Herhangi bir ses kanalına bağlı değilsiniz!`);
            break;
        case 'Katılamaz':
            message.channel.send(`Ses kanalınıza katılamıyorum, lütfen izinlerimi kontrol edin!`);
            break;
        default:
            message.channel.send(`Bilinmeyen bir hata oluştu!Bot sahibi iseniz panele bakmanız önerilir!`);
    };

};
