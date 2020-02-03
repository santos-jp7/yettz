module.exports = async function(m){
    let [command, user, ...args] = m.content.toLowerCase().split(' ');
    if(user == undefined && args == undefined) return 'Esse comando precisa ser comentado.';
    if(user == undefined) return 'Você precisar informar qual usuário eu devo enviar uma mensagem.';
    if(m.mentions.users.first() == undefined) return 'Não consegui identificar esse úsuario.';

    args = args.join(' ');
    user = m.mentions.users.first();

    try{
        await user.send(args);
        return 'Mensagem enviada com sucesso.';
    }catch(e){
        console.log(e);
        return 'Ocorreu um erro em enviar a mensagem.';
    }
}