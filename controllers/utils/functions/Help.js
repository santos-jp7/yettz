const Discord = require('discord.js');

module.exports = async function(m, Client){
    let embed = new Discord.RichEmbed();
    let embed2 = new Discord.RichEmbed();
    let embed3 = new Discord.RichEmbed();

    embed.setColor(0xffffff);
    embed.setAuthor(`Ajuda do ${Client.user.username}`, Client.user.avatarURL);
    embed.setDescription("**Olá! Eu sou o " + Client.user.username + "! Faço parte do " + m.guild.name + ". Minha função é ajudar a executar as tarefas de lá. Também tenho vários comandos divertidos! Olha só os meus comandos de utilidade:**");
    embed.addField("ℹ `" + process.env.PREFIX + "ping`","Informa o tempo de resposta do servidor.");
    embed.addField("ℹ `" + process.env.PREFIX + "echo`","Comando de fala, o bot irá responder o que você especificar.");
    embed.addField("ℹ `" + process.env.PREFIX + "math`", "Resolve simples operações matemáticas.");
    embed.addField("ℹ `" + process.env.PREFIX + "on`", "Informa se o bot está online.");
    embed.addField("ℹ `" + process.env.PREFIX + "invite`", "Cria um link de convite para a guild.");
    embed.addField("ℹ `" + process.env.PREFIX + "yt`", "Informa um link para download de vídeo do YouTube.");
    embed.addField("ℹ `" + process.env.PREFIX + "encurtar`", "Encurta o link especificado.");
    embed.addField("ℹ `" + process.env.PREFIX + "voteban`", "Abre votação para banir um úsuario.");
    embed.addField("ℹ `" + process.env.PREFIX + "clima`", "Exibe informações sobre o clima de uma cidade.");

    embed2.setColor(0xffffff);
    embed2.setDescription("**É diversão que você quer?**");
    embed2.addField("ℹ `" + process.env.PREFIX + "slap`", "Da um tapa em um úsuario.");
    embed2.addField("ℹ `" + process.env.PREFIX + "nsfw`", "Exibe uma foto sensual 🔞.");
    embed2.addField("ℹ `" + process.env.PREFIX + "rule34`", "Exibe hentai 🔞.");
    embed2.addField("ℹ `" + process.env.PREFIX + "yes`", "Diz sim para algum úsuario.");
    embed2.addField("ℹ `" + process.env.PREFIX + "no`", "Diz não para algum úsuario.");
    embed2.addField("ℹ `" + process.env.PREFIX + "decide`", "Deixe o bot decidir algo por ti, repondendo com sim ou não.");	
    embed2.setFooter("Ainda estou trabalhando para melhorar isso!");	

    embed3.setColor(0xffffff);
    embed3.setDescription("**Também tenho umas funções administrativas:**");
    embed3.addField("ℹ `" + process.env.PREFIX + "warn`", "Informa todos os úsuarios da guild sobre algo.");
    embed3.addField("ℹ `" + process.env.PREFIX + "send`", "Envia uma mensagem privada para o úsuario especificado.");
    embed3.addField("ℹ `" + process.env.PREFIX + "limpar`", "Limpa mensagens de um canal.");
    embed3.addField("ℹ `" + process.env.PREFIX + "ban`", "Bane um úsuario da guild.");
    embed3.addField("ℹ `" + process.env.PREFIX + "kick`", "Expulsa um úsuario da guild.");
    embed3.addField("ℹ `" + process.env.PREFIX + "prefix`", "Altera o prefixo do bot.");
    // embed3.addField("ℹ `" + process.env.PREFIX + "set_bot`", "Informa qual canal vai ser permitido usar comandos.");
    // embed3.addField("ℹ `" + process.env.PREFIX + "set_welcome`", "Informa qual canal vai ser enviado as boas vindas.");
    // embed3.addField("ℹ `" + process.env.PREFIX + "set_anuncios`", "Informa qual canal vai ser permitido enviar links de convite.");
    // embed3.addField("ℹ `" + process.env.PREFIX + "habilitar`", "Habilitar algum comando.");
    // embed3.addField("ℹ `" + process.env.PREFIX + "desabilitar`", "Desabilitar algum comando.");
    embed3.setFooter("By FLO4T ❤");

    try{
        await m.author.send(embed);
        await m.author.send(embed2);
        await m.author.send(embed3);

        return `Te enviei os comandos no PV.`;
    }catch(e){
        return `Ops... Tentei te enviar os comandos no pv, mas, ocorreu um erro.`;
    }
}