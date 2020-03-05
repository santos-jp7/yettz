module.exports = async function(m, Client){
    let [command, status, ...args] = m.content.split(' ');
    args = args.join(' ').trim();

    console.log(status, args);
    Client.user.setPresence({
        game:{
            name: args
        },
        status: status
    })

    return 'Status configurado com sucesso.';   
}