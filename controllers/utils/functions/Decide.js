const axios = require('axios');
const Discord = require('discord.js');

module.exports = async function(args){
    const {data} = await axios.get("https://yesno.wtf/api");

    let {image, answer} = data;
    if(answer == 'no') answer = '**NÃO**';
    if(answer == 'yes') answer = '**SIM**';

    let embed = new Discord.RichEmbed();
    embed.setColor(0xffffff);
    embed.setDescription(answer);
    embed.setImage(image);

    return embed;
}