const axios = require('axios');

module.exports = async function(args){
    const KEY = process.env.REBRANDLY_KEY;
    if(KEY == undefined) return 'Esse comando não está habilitado.';

    if(args.length == 0) return 'Esse comando precisa ser comentado.';
    if(args.indexOf('http') != 0) args = 'http://'+args;

    try{
        const {data} = await axios.post('https://api.rebrandly.com/v1/links',{
            destination: args,
            domain:{
                fullName: 'rebrand.ly'
            }
        },{
            headers:{
                apikey: KEY
            }
        })
    
        if('shortUrl' in data) return 'https://'+data.shortUrl;
        return 'Ops... Ocorreu um erro.';
    }catch(e){
        return 'Ops... Ocorreu um erro.';
    }
}