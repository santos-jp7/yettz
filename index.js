require('dotenv/config');

const Discord = require('discord.js');
const Client = new Discord.Client();

const Ready = require('./controllers/Ready');
const Message = require('./controllers/Message');

Client.on('ready', () => Ready(Client));
Client.on('message', (m) => Message(m, Client));

Client.login(process.env.TOKEN);