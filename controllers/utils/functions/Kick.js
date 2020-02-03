const Discord = require('discord.js');

module.exports = async function(m){
    let [command, user, ...args] = m.content.toLowerCase().split(' ');
    if(user == undefined && args == undefined) return 'Esse comando precisa ser comentado.';
    if(user == undefined) return 'Você precisar informar qual usuário eu devo expulsar.';
    if(m.mentions.users.first() == undefined) return 'Não consegui identificar esse úsuario.';

    args = args.join(' ');
    user = m.mentions.users.first();

    try{
        await m.guild.member(user).kick(args);
        let embed = new Discord.RichEmbed();
        embed.setColor(0x0077ee);
        embed.setTitle("EXPELLED!");
        embed.setDescription(`${user} foi expulso por ${m.author.username}`);
        embed.setFooter('Expulso com sucesso!');
        return embed;
    }catch(e){
        return 'Ops... Ocorreu um erro.';
    }
}