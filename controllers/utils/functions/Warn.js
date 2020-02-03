module.exports = async function(m, Client){
    let [command, ...args] = m.content.toLowerCase().split(' ');

    args = args.join(' ');

    const {members} = await m.channel.guild.fetchMembers();
    await members.forEach((member) => {
        if(member.user.id != Client.user.id) member.send(args);
    })
    
    return 'Mensagens enviadas com sucesso.';   
}