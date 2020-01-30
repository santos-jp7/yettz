module.exports = async function(Client){
    return `Pong! -> ${Math.round(Client.ping)}ms`
}