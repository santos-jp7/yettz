const Discord = require('discord.js');

module.exports = async function(m){
    let [command, user, ...args] = m.content.toLowerCase().split(' ');
    if(user == undefined && args == undefined) return 'Esse comando precisa ser comentado.';
    if(user == undefined) return 'Você precisar informar qual usuário eu devo banir.';
    if(m.mentions.users.first() == undefined) return 'Não consegui identificar esse úsuario.';

    args = args.join(' ');
    user = m.mentions.users.first();

    try{
        await m.guild.member(user).ban(args);
        let embed = new Discord.RichEmbed();
        embed.setColor(0x0077ee);
        embed.setTitle("BANNED!");
        embed.setDescription(`${user} foi banido por ${m.author.username}`);
        embed.setFooter('Banido com sucesso!')
        embed.setImage("https://i.imgur.com/O3DHIA5.gif");
        return embed;
    }catch(e){
        return 'Ops... Ocorreu um erro.';
    }
}