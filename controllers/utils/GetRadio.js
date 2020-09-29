const Discord = require('discord.js');

const radios = {
    metropolitana: {media: [{type: "radio", stream: "https://ice.fabricahost.com.br/metropolitana985sp", title: "Rádio Metropolitana 98.5FM"}], error: false},
    "jovem pan": {media: [{type: "radio", stream: "https://playerservices.streamtheworld.com/api/livestream-redirect/JP_SP_FMAAC_SC", title: "Rádio Jovem Pan (São Paulo)"}], error: false},
    mix: {media: [{type: "radio", stream: "https://shout12.crossradio.com.br:18002/stream/1/", title: "Rádio Mix FM (São Paulo)"}], error: false},
    transamerica: {media: [{type: "radio", stream: "https://shout25.crossradio.com.br:19100/stream/1/", title: "Transamérica Pop (São Paulo)"}], error: false},
    "coca cola": {media: [{type: "radio", stream: "https://str2b.openstream.co/1084", title: "Coca-Cola FM (Brasil)"}], error: false},
    dumont: {media: [{type: "radio", stream: "https://64-237-45-183.webnow.com.br/dumont.aac", title: "Dumont FM (Sao Paulo)"}], error: false},
    globo: {media: [{type: "radio", stream: "https://r6.ciclano.io:15062/stream", title: "Radio Globo (Sao Paulo)"}], error: false},
    itatiaia: {media: [{type: "radio", stream: "https://8903.brasilstream.com.br/stream", title: "Itatiaia Radio"}], error: false},
    funk: {media: [{type: "radio", stream: "https://svrstream1.svreua.com/stream.php?porta=8098", title: "Rádio Funk Paulista"}], error: false},
}

async function direct(args, m, Client){
    if(!(args in radios)) return {type: "error", media: ["Ainda não posso reproduzir essa estação de rádio."], error: true};

    return radios[args];
}

async function embed(m, Client){
    let embed = new Discord.RichEmbed();
    embed.setTitle("Selecione a estação de rádio:");
    embed.addField("1⃣ - Rádio Metropolitana 98.5FM", "_");
    embed.addField("2⃣ - Rádio Jovem Pan (São Paulo)", "_");
    embed.addField("3⃣ - Transamérica Pop (São Paulo)", "_");
    embed.addField("4⃣ - Coca-Cola FM (Brasil)", "_");
    embed.addField("5⃣ - Itatiaia Radio", "_");

    const embedSend = await m.reply(embed);
    embedSend.react("1⃣");
    embedSend.react("2⃣");
    embedSend.react("3⃣");
    embedSend.react("4⃣");
    embedSend.react("5⃣");

    let react;
    const filter = (reaction, user) => {		
        if(user.id === Client.user.id) return false;
        if(user.id !== m.author.id) return false;

        const reactions = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣'];

        if(reactions.includes(reaction.emoji.name)){
            react = reaction.emoji.name;

            return true;
        }
    };

    const collected = await embedSend.awaitReactions(filter, {time: 60000, max: 1});

    if(react == "1⃣") return radios["metropolitana"];
    if(react == "2⃣") return radios["jovem pan"];
    if(react == "3⃣") return radios["transamerica"];
    if(react == "4⃣") return radios["coca cola"];
    if(react == "5⃣") return radios["itatiaia"];

    return {type: "error", media: ["Ops... Ocorreu um erro."], error: true};
}

module.exports = async function(m, Client){
    const {content} = m;
    let [command, ...args] = content.split(' ');

    if(args.length == 0) return await embed(m, Client);

    args = args.join(" ");
    args = args.toLowerCase();

    console.log(command, args);

    return await direct(args, m, Client);
}