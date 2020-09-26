const axios = require('axios');
const Discord = require('discord.js');

module.exports = async function(){
    const terms = ['nsfw', 'nudes', 'anal', 'sexy', 'pussy'];
    const randomt = Math.floor(Math.random() * 4);
    const term = terms[randomt];

    const response = await axios.get(`https://www.reddit.com/r/${term}.json`);
    const {data} = response.data;
    const {dist} = data;
    const random = Math.floor(Math.random() * dist);
    const img = data.children[random].data.url;

    let embed = new Discord.RichEmbed();
    embed.setColor(0xffffff);
    embed.setTitle("Não carregou? clique aqui!");
    embed.setURL(img);
    embed.setImage(img);

    return embed;
}