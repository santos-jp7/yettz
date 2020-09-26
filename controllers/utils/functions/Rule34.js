const axios = require('axios');
const Discord = require('discord.js');

module.exports = async function(args){
    if(args.length != 0) args = '?tags='+args.join(" ");
    if(args.length == 0) args = '';

    const {data} = await axios.get('https://e621.net/posts.json'+args.trim());
    if(data.posts.length == 0) return "Não achei imagens com essa tag.";
    
    const length = data.posts.length;
    const random = Math.floor(Math.random() * length);
    const image = data.posts[random].file.url;

    let embed = new Discord.RichEmbed();
    embed.setColor(0xffffff);
    embed.setTitle("Não carregou? clique aqui!");
    embed.setURL(image);
    embed.setImage(image);

    return embed;
}