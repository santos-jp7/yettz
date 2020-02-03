const {getInfo} = require('ytdl-getinfo');
const Encurtar = require('./Encurtar');

module.exports = async function(args){
    if(args.length == 0) return "Você precisa informar o link do video.";    
    args = args.join(' ');

    try{
        const {items} = await getInfo(args);

        const url = items[0].url;
        const linkFor = await Encurtar(url);
        return linkFor;
    }catch(e){
        console.log(e);
        return 'Ops... Ocorreu um erro.';
    }
}
