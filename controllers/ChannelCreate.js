const messages = [
    'First! (:',
    'Olá chat! (:',
    'Presente! (:',
    'Hi guys! (:',
    'Terra chamando! (:',
    'Por aqui passei, meu rasto deixei! (:',
    'Aqui é a área 51? (:',
    'Fala rapaziada do Youtubeeee! (:',
    'Salveee! (8'
]

async function ChannelCrate(Channel){
    const random = Math.floor(Math.random() * messages.length - 1);
    Channel.send(messages[random]);
}

module.exports = ChannelCrate;