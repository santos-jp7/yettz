require('dotenv/config');

const Dm = require('./utils/Dm');
const Comands = require('./utils/Comands');

async function Message(m, Client){
    if(Client.user.id == m.author.id) return;
    if(process.env.DEV == 'yes' && m.author.id != process.env.DEV_ID) return;
    if(m.channel.type == 'dm') return Dm(m, Client);

    const prefix = process.env.PREFIX;
    const {content} = m;

    if(content.indexOf(prefix) != 0) return;

    let [comand] = content.toLowerCase().split(' ');
    comand = comand.replace(prefix, '');
    
    if((comand in Comands) == false) return m.reply(`Comando inválido.`);

    const response = await Comands[comand](m, Client);
    return m.reply(response);
}

module.exports = Message;