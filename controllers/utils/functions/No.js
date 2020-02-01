const axios = require('axios');
const Discord = require('discord.js');

module.exports = async function(m){
    const {data} = await axios.get('https://yesno.wtf/api?force=no');
    const {image} = data;

    let embed = new Discord.RichEmbed();
    embed.setColor(0xffffff);
    embed.setDescription(`${m.mentions.users.first()} Não!`);
    embed.setImage(image);

    return embed;
}