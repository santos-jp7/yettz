require('dotenv/config');

const Mongoose = require('mongoose');

const Dm = require('./utils/Dm');
const Functions = require('./utils/Functions');

const Guild = require('../Models/Guild');

async function Message(m, Client){
    if(Client.user.id == m.author.id) return;
    if(process.env.DEV == 'yes' && m.author.id != process.env.DEV_ID) return;
    if(m.channel.type == 'dm') return Dm(m, Client);

    let prefix;

    const guildId = m.guild.id;
    
    if(Mongoose.connection.readyState == 1){
        const guild = await Guild.findOne({id: guildId});

        if(!guild) prefix = process.env.PREFIX; else prefix = guild.prefix;
    }else{
        prefix = process.env.PREFIX;
    }

    const {content} = m;

    if(content.indexOf(prefix) != 0) return;

    let [command] = content.toLowerCase().split(' ');
    command = command.replace(prefix, '');
    
    if((command in Functions) == false) return;

    const response = await Functions[command](m, Client);
    return m.reply(response);
}

module.exports = Message;