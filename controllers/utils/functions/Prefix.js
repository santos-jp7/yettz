const Guild = require('../../../Models/Guild');
const Mongoose = require('mongoose');

module.exports = async function(m, args){
    if(args.length == 0) return 'Esse comando precisa ser comentado.';   
    if(Mongoose.connection.readyState != 1) return 'Esse comando não está habilitado.';

    const newPrefix = args[0];
    const guildId = m.guild.id;

    try{
        let guild = await Guild.findOne({id: guildId});

        if(!guild){
            guild = await Guild.create({
                id: guildId,
                prefix: newPrefix
            })

            return 'Prefixo cadastrado com sucesso!';
        }else{
            guild.prefix = newPrefix;
            guild.save();

            return 'Prefixo cadastrado com sucesso!';
        }
    }catch(e){
        return 'Ocorreu um erro.';
    }
}