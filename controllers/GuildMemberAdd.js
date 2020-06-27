async function GuildMemberAdd(User){
    User.guild.channels.forEach(async (Channel) => {
        if(Channel.type == 'text' && Channel.name == 'welcome') Channel.send(`${User} Entrou No Servidor! Seja bem vindo!`);
    })
    
}

module.exports = GuildMemberAdd;