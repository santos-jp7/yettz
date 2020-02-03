const Discord = require('discord.js');

module.exports = async function(m, Client){
    let [command, user, ...args] = m.content.toLowerCase().split(' ');
    if(user == undefined && args == undefined) return 'Esse comando precisa ser comentado.';
    if(user == undefined) return 'Você precisar informar qual usuário eu devo banir.';
    if(m.mentions.users.first() == undefined) return 'Não consegui identificar esse úsuario.';

    args = args.join(' ');
    user = m.mentions.users.first();

    let embed = new Discord.RichEmbed();
	embed.setColor(0xffffff);
	embed.setAuthor(m.author.tag, m.author.avatarURL);
	embed.setDescription(`Votação para banir ${user}\n**Tenha certeza de seu voto, não é possível alterar.\n15 segundos para votar!**`);

    const embedSend = await m.channel.send(embed);
    embedSend.react("✔");
    embedSend.react("❌");

    let userVoted = [];
    let no = 0;
    let yes = 0;

    const filter = (reaction, user) => {		
        if(user.id === Client.user.id) return false;
        if(userVoted[user.id] == true) return false;

        if(['❌'].includes(reaction.emoji.name)){
            userVoted[user.id] = true;
            no++;

            embed.addField(`${user.tag}:`, "❌");
            embedSend.edit(embed);
            return true;
        }

        if(['✔'].includes(reaction.emoji.name)){
            userVoted[user.id] = true;
            yes++;

            embed.addField(`${user.tag}:`, "✔");
            embedSend.edit(embed);			
            return true;
        }
    };

    const collected = await embedSend.awaitReactions(filter, {time: 15000});
    const total = yes + no;

    embed.addField("-", `#⃣ A votação obteve um total de ${total} votos, sendo ${yes} para sim e ${no} para não.`);
    embedSend.edit(embed);

    if(yes < 3 && no > 1) return 'Banimento negado.';
    if(yes < 3 && no < 2) return 'Não ouve votos positivos suficientes para o banimento.';
    if(yes > no + 1){
        try{
            await m.guild.member(user).ban(args);
            return 'Banimento aprovado!';
        }catch(e){
            return 'Ops... O banimento foi aprovado, mas ocorreu um erro em banir.';
        }
    }
    return 'Banimento negado.';   
}