const Discord = require('discord.js');
const ytdl = require("ytdl-core");

const GetMedia = require("./utils/GetMedia");
const GetRadio = require("./utils/GetRadio");

const images = {
    yt: "https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png",
    soundcloud: "https://logodownload.org/wp-content/uploads/2017/04/soundcloud-logo-2.png",
    spotify: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png",
    radio: "https://images.vexels.com/media/users/3/151183/isolated/preview/f8740a62cd25d5215b225f5fd6c881cc---cone-de-r--dio-port--til-by-vexels.png"
}

class Voice{
    constructor(){
        this.guilds = {};
    }

    async play(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";
    
        const medias = await GetMedia(m, Client);

        if(medias.error) return m.reply(medias.media[0]);

        if(this.guilds[m.guild.id] == undefined){
            this.guilds[m.guild.id] = {};
            this.guilds[m.guild.id].emittersInit = false;
            this.guilds[m.guild.id].conn = await m.member.voiceChannel.join();
            this.guilds[m.guild.id].connID = m.member.voiceChannelID;
            this.guilds[m.guild.id].playing = false;
            this.guilds[m.guild.id].queue = [];
        }

        medias.media.forEach(value => {
            this.guilds[m.guild.id].queue.push(value);
        })

        if(!this.guilds[m.guild.id].playing){
            this.guilds[m.guild.id].playing = true;

            this.#_next(m);
        }

        if(medias.media.length == 1) m.reply(`${medias.media[0].title} foi adicionado para a lista de reprodução.`);
        if(medias.media.length > 1) m.reply(`${medias.media.length} músicas foram adicionadas para a lista de reprodução.`);
    }

    pause(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";

        if(!(m.guild.id in this.guilds)) return;

        if(this.guilds[m.guild.id].player.paused) return m.reply("O player já está pausado.");

        return this.guilds[m.guild.id].player.pause();
    }

    stop(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";

        if(!(m.guild.id in this.guilds)) return;

        this.guilds[m.guild.id].conn.disconnect();
        this.guilds[m.guild.id] = undefined;

        return m.reply("A lista de reprodução foi esvaziada.");
    }

    resume(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";

        if(!(m.guild.id in this.guilds)) return;

        if(!this.guilds[m.guild.id].player.paused) return m.reply("O player não está pausado.");

        this.guilds[m.guild.id].player.resume();
    }

    skip(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";

        if(!(m.guild.id in this.guilds)) return;

        this.guilds[m.guild.id].player.end();
    }

    current(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";

        if(!(m.guild.id in this.guilds)) return;

        const current = this.guilds[m.guild.id].current;

        let embed = new Discord.RichEmbed();
        embed.setTitle("Música atual:");
        embed.setThumbnail(images[current.type]);
        embed.setDescription(current.title);

        return m.reply(embed);
    }

    queue(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";

        if(!(m.guild.id in this.guilds)) return;

        const current = this.guilds[m.guild.id].current;

        let embed = new Discord.RichEmbed();
        embed.setTitle("Lista de reprodução:");
        embed.setThumbnail("https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg");
        embed.addField("Atual:", current.title);

        let l;
        if(this.guilds[m.guild.id].queue.length >= 5) l = 5; else l = this.guilds[m.guild.id].queue.length;

        for(let i = 0; i < l; i++){
            embed.addField(i+2, this.guilds[m.guild.id].queue[i].title);
        }

        embed.setFooter(`${this.guilds[m.guild.id].queue.length} músicas na lista de reprodução`)
        return m.reply(embed);
    }

    async radio(m, Client){
        if(m.member.voiceChannelID == null) return "Você precisa está conectado em um canal de voz para executar esse comando.";
    
        const radio = await GetRadio(m, Client);

        if(radio.error) return m.reply(radio.media[0]);

        if(this.guilds[m.guild.id] == undefined){
            this.guilds[m.guild.id] = {};
            this.guilds[m.guild.id].emittersInit = false;
            this.guilds[m.guild.id].conn = await m.member.voiceChannel.join();
            this.guilds[m.guild.id].connID = m.member.voiceChannelID;
            this.guilds[m.guild.id].playing = false;
            this.guilds[m.guild.id].queue = [];
        }

        radio.media.forEach(value => {
            this.guilds[m.guild.id].queue.push(value);
        })

        if(!this.guilds[m.guild.id].playing){
            this.guilds[m.guild.id].playing = true;

            this.#_next(m);
        }else{
            this.guilds[m.guild.id].player.end();
        }

        m.reply(`Tocando ${radio.media[0].title}.`);
    } 

    #_next = (m) => {
        const current = this.guilds[m.guild.id].queue.shift();
        this.guilds[m.guild.id].current = current;
    
        if(current.type == "yt") this.guilds[m.guild.id].player = this.guilds[m.guild.id].conn.playStream(ytdl(current.stream));
        if(current.type == "soundcloud") this.guilds[m.guild.id].player = this.guilds[m.guild.id].conn.playStream(current.stream);
        if(current.type == "spotify$s") this.guilds[m.guild.id].player = this.guilds[m.guild.id].conn.playStream(ytdl(current.stream));
        if(current.type == "radio") this.guilds[m.guild.id].player = this.guilds[m.guild.id].conn.playStream(current.stream);

        this.guilds[m.guild.id].emittersInit = true;

        this.guilds[m.guild.id].player.on("end", data => {
            if(this.guilds[m.guild.id].queue.length > 0){
                this.#_next(m);
            }else{
                this.guilds[m.guild.id].playing = false;
            }
        })
    }
}

module.exports = new Voice();