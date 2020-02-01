module.exports = async function(m){
    try{
        const {url} = await m.channel.createInvite();
        return url;
    }catch(e){
        console.log(e);
        return "Ops... Ocorreu um erro.";
    }
}