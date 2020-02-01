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
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await Limpar(m); 

    }
    
    async no(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async nsfw(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async on(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async rule34(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async slap(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async yes(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async yt(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async ban(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async kick(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async voteban(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async send(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }

    async warn(m, Client){
        const {content} = m;
        let [command, ...args] = content.toLowerCase().split(' ');

        return await 'a'; 

    }
}

module.exports = new Functions();