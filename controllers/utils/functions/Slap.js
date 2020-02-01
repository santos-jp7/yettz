const Discord = require('discord.js');

module.exports = async function(m){
    if(m.mentions.users.first() == undefined) return "Você precisa marcar um usuário.";

    let embed = new Discord.RichEmbed();
    embed.setColor(0xffffff);
    embed.setDescription(`${m.mentions.users.first()} toma esse tapão.`);
    embed.setImage("https://cdn.discordapp.com/attachments/486234794074832901/546945716526776330/action.gif");

    return embed;
}