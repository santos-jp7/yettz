const Mongoose = require('mongoose');

const guildSchema = Mongoose.Schema({
    id: Number,
    prefix: String,
    channels: Object
})

module.exports = Mongoose.model('Guild', guildSchema);