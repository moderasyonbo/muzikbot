module.exports = async (client) => {

    console.log(`giriş başarılı!`);

    client.user.setActivity(client.config.game);

};
