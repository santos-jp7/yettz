module.exports = async function(m){
    const {content} = m;
    let [command, ...args] = content.toLowerCase().split(' ');

    if(args.length == 0) return "Esse comando precisa ser comentado.";

    try{
        args = parseInt(args);
        if(args > 99) return "Posso apagar no máximo 99 mensagens.";

        const messages = await m.channel.fetchMessages({limit: args+1});
        const deletes = await m.channel.bulkDelete(messages);

        if(!deletes) return "Ops... Ocorreu um erro.";

        return 'Chat limpo com sucesso!';
    }catch(e){
        console.log(e);
        return "Ops... Ocorreu um erro.";
    }
}