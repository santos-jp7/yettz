const axios = require('axios');
const Discord = require('discord.js');

module.exports = async function(m){
    if(m.channel.nsfw == false) return "Esse comando só pode ser executado em canais adultos.";

    const {content} = m;
    let [command, ...args] = content.toLowerCase().split(' ');
    if(args.length != 0) args = '?tags='+args.join(" ");
    if(args.length == 0) args = '';

    const {data} = await axios.get('https://e621.net/post/index.json'+args.trim());
    if(data.length == 0) return "Não achei imagens com essa tag.";
    
    const length = data.length;
    const random = Math.floor(Math.random() * length);
    const image = data[random].file_url;

    let embed = new Discord.RichEmbed();
    embed.setColor(0xffffff);
    embed.setTitle("Não carregou? clique aqui!");
    embed.setURL(image);
    embed.setImage(image);

    return embed;
}