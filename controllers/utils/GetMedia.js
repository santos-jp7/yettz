const Discord = require('discord.js');
const ytdl = require("ytdl-core");
const ytsr = require("ytsr");
const ytpl = require("ytpl");
const axios = require("axios");

const Spotifye = require("./Spotifye");

async function yt(args, m, Client){
    const result = await ytdl.getInfo(args);

    return {media: [{type: "yt", stream: result.videoDetails.video_url, title: result.videoDetails.title}], error: false};
}

async function yt_search(args, m, Client){
    let results = await ytsr(args, {});

    results.items = results.items.filter(value => {
        if(value.type == "video") return true;
    })

    if(results.items.length < 5) return results.items[0].link;

    let embed = new Discord.RichEmbed();
    embed.setTitle("Selecione a música:");
    embed.addField("1⃣ - "+results.items[0].title, "Duração: "+results.items[0].duration);
    embed.addField("2⃣ - "+results.items[1].title, "Duração: "+results.items[1].duration);
    embed.addField("3⃣ - "+results.items[2].title, "Duração: "+results.items[2].duration);
    embed.addField("4⃣ - "+results.items[3].title, "Duração: "+results.items[3].duration);
    embed.addField("5⃣ - "+results.items[4].title, "Duração: "+results.items[4].duration);

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

    if(react == "1⃣") return {media: [{type: "yt", stream: results.items[0].link, title: results.items[0].title}], error: false};
    if(react == "2⃣") return {media: [{type: "yt", stream: results.items[1].link, title: results.items[1].title}], error: false};
    if(react == "3⃣") return {media: [{type: "yt", stream: results.items[2].link, title: results.items[2].title}], error: false};
    if(react == "4⃣") return {media: [{type: "yt", stream: results.items[3].link, title: results.items[3].title}], error: false};
    if(react == "5⃣") return {media: [{type: "yt", stream: results.items[4].link, title: results.items[4].title}], error: false};

    return {type: "error", media: ["Ops... Ocorreu um erro."], error: true};
}

async function yt_playlist(args, m, Client){
    let id = args.split("&list=")[1];
    if(id.includes("&")) id = id.split("&")[0];

    const results = await ytpl(id);

    const playlist = results.items.map(value => {
        return {type: "yt", stream: value.url_simple, title: value.title};
    })

    return {media: playlist, error: false}
}

async function soundcloud(args, m, Client){
    let {data} = await axios.get(`http://api.soundcloud.com/resolve.json?url=${args}&client_id=71dfa98f05fa01cb3ded3265b9672aaf`);
    return {media: [{type: "soundcloud", stream: `https://api.soundcloud.com/tracks/${data.id}/stream?client_id=71dfa98f05fa01cb3ded3265b9672aaf`, title: data.title}], error: false};
}

async function soundcloud_playlist(args, m, Client){
    let {data} = await axios.get(`http://api.soundcloud.com/resolve.json?url=${args}&client_id=71dfa98f05fa01cb3ded3265b9672aaf`);
    const playlist = data.tracks.map(value => {
        return {type: "soundcloud", stream: `https://api.soundcloud.com/tracks/${value.id}/stream?client_id=71dfa98f05fa01cb3ded3265b9672aaf`, title: value.title}
    })

    return {media: playlist, error: false}
}

function spotify_type(args){
    if(args.includes('/track/')) {
        return 'song';
    }
    else if (args.includes('/playlist/')) {
        return 'playlist';
    }
    else if (args.includes('/album/')) {
        return 'album';
    }
    else if(args.includes('/artist/')) {
        return 'artist';
    }
    else {
        return false;
    }
}

async function spotify_search(str){
    let results = await ytsr(str, {});

    return results.items[0].link;
}

async function spotify(args, m, Client){
    const urlType = spotify_type(args);

    var spotifye = new Spotifye();

    switch(urlType) {
        case 'song': {
            let songData = await spotifye.getTrack(args);
            const songName = songData.name + ' ' + songData.artists[0];

            let link = await spotify_search(songName);

            return {media: [{type: "spotify", stream: link, title: songName}], error: false};
        }

        case 'playlist': {
            let {tracks} = await spotifye.getPlaylist(args);

            let playlist = [];
            for await(song of tracks){
                const songResult = await spotifye.extrTrack(song);
                const songName = songResult.name + ' ' + songResult.artists[0];

                let link = await spotify_search(songName);

                playlist.push({type: "spotify", stream: link, title: songName});
            }
            
            return {media: playlist, error: false};
        }

        case 'album': {
          let {tracks} = await spotifye.getAlbum(args);
          
          let playlist = [];
          for await(song of tracks){
              const songResult = await spotifye.extrTrack(song);
              const songName = songResult.name + ' ' + songResult.artists[0];

              let link = await spotify_search(songName);

              playlist.push({type: "spotify", stream: link, title: songName});
          }
          
          return {media: playlist, error: false};
        }

        default: {
            return {type: "error", media: ["Ainda não consigo realizar esse tipo de leitura."], error: true};
        }
    }
}

module.exports = async function(m, Client){
    const {content} = m;
    let [command, ...args] = content.split(' ');

    if(args.length == 0) return {type: "error", media: ["Esse comando precisa ser comentado."], error: true};

    args = args.join(" ");

    console.log(command, args);

    if(args.includes(" ") || !args.startsWith("https://")) return yt_search(args, m, Client);
    if(args.includes("list") && args.startsWith("https://www.youtube.com/")) return yt_playlist(args, m, Client);
    if(args.startsWith("https://soundcloud.com/") && args.includes("sets")) return soundcloud_playlist(args, m, Client);
    if(args.startsWith("https://soundcloud.com/")) return soundcloud(args, m, Client);
    if(args.startsWith("https://open.spotify.com/")) return spotify(args, m, Client);
    
    return yt(args, m, Client);
}