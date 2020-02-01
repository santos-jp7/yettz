require('dotenv/config');

const Dm = require('./utils/Dm');
const Functions = require('./utils/Functions');

async function Message(m, Client){
    if(Client.user.id == m.author.id) return;
    if(process.env.DEV == 'yes' && m.author.id != process.env.DEV_ID) return m.reply("Bot em manutenção.");
    if(m.channel.type == 'dm') return Dm(m, Client);

    const prefix = process.env.PREFIX;
    const {content} = m;

    if(content.indexOf(prefix) != 0) return;

    let [command] = content.toLowerCase().split(' ');
    command = command.replace(prefix, '');
    
    if((command in Functions) == false) return m.reply(`Comando inválido.`);

    const response = await Functions[command](m, Client);
    return m.reply(response);
}

module.exports = Message;