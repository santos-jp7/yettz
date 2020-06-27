require('dotenv/config');

const Discord = require('discord.js');
const Mongoose = require('mongoose');

const Client = new Discord.Client();

if(process.env.DB_URL != undefined){
    Mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

const Ready = require('./controllers/Ready');
const Message = require('./controllers/Message');
const GuildMemberAdd = require('./controllers/GuildMemberAdd')

Client.on('ready', () => Ready(Client));
Client.on('message', (m) => Message(m, Client));
Client.on('guildMemberAdd', (u) => GuildMemberAdd(u));

Client.login(process.env.TOKEN);