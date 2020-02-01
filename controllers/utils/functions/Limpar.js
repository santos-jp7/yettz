module.exports = async function(m){
    const {content} = m;
    let [command, ...args] = content.toLowerCase().split(' ');

    try{
        args = parseInt(args);
        if(args > 100) return "Posso apagar no máximo 100 mesagens.";

        const messages = await m.channel.fetchMessages({limit: args + 1});
        m.channel.bulkDelete(messages);
        return "Chat limpo com sucesso.";
    }catch(e){
        console.log(e);
        return "Ops... Ocorreu um erro.";
    }
}