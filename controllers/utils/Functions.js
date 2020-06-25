const Echo = require('./functions/Echo');
const Ping = require('./functions/Ping');
const Math = require('./functions/Math');
const Clima = require('./functions/Clima');
const Decide = require('./functions/Decide');
const Encurtar = require('./functions/Encurtar');
const Help = require('./functions/Help');
const Invite = require('./functions/Invite');
const Limpar = require('./functions/Limpar');
const No = require('./functions/No');
const Nsfw = require('./functions/Nsfw');
const On = require('./functions/On');
const Rule34 = require('./functions/Rule34');
const Slap = require('./functions/Slap');
const Yes = require('./functions/Yes');
const Yt = require('./functions/Yt');
const Ban = require('./functions/Ban');
const Kick = require('./functions/Kick');
const Voteban = require('./functions/Voteban');
const Send = require('./functions/Send');
const Warn = require('./functions/Warn');
const Status = require('./functions/Status');
const Prefix = require('./functions/Prefix')

class Functions{
    async echo(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Echo(args);
    }

    async ping(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Ping(Client);
    }

    async math(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Math(args);
    }

    async clima(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Clima(args); 
    }

    async decide(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Decide(); 
    }

    async encurtar(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Encurtar(args);
    }

    async help(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Help(m, Client); 
    }

    async invite(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Invite(m);

    }

    async limpar(m, Client){
        if(!m.member.hasPermission("ADMINISTRATOR")) return 'Você não tem permissão para executar esse comando.';

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Limpar(m); 

    }
    
    async no(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await No(m); 

    }

    async yes(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Yes(m); 

    }

    async sim(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Yes(m); 

    }

    async nsfw(m, Client){
        if(m.channel.nsfw == false) return "Esse comando só pode ser executado em canais adultos.";

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Nsfw(m);

    }

    async on(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await On(); 

    }

    async rule34(m, Client){
        if(m.channel.nsfw == false) return "Esse comando só pode ser executado em canais adultos.";

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Rule34(args);

    }

    async slap(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Slap(m); 
    }

    async yt(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Yt(args); 

    }

    async ban(m, Client){
        if(!m.member.hasPermission("BAN_MEMBERS")) return 'Você não tem permissão para banir usuários.';

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Ban(m); 

    }

    async kick(m, Client){
        if(!m.member.hasPermission("KICK_MEMBERS")) return 'Você não tem permissão para banir usuários.';

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Kick(m); 

    }

    async voteban(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Voteban(m, Client);

    }

    async send(m, Client){
        if(!m.member.hasPermission("ADMINISTRATOR")) return 'Você não tem permissão para executar esse comando.';
        
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Send(m); 

    }

    async warn(m, Client){
        if(!m.member.hasPermission("ADMINISTRATOR")) return 'Você não tem permissão para executar esse comando.';

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Warn(m, Client); 

    }

    async status(m, Client){
        if(m.author.id != process.env.DEV_ID) return 'Você não tem permissão para executar esse comando.';

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Status(m, Client);
    }

    async prefix(m, Client){
        if(!m.member.hasPermission("ADMINISTRATOR")) return 'Você não tem permissão para executar esse comando.';

        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Prefix(m, args);
    }
}

module.exports = new Functions();