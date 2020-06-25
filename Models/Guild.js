const Mongoose = require('mongoose');

const guildSchema = Mongoose.Schema({
    id: Number,
    prefix: String
})

module.exports = Mongoose.model('Guild', guildSchema);