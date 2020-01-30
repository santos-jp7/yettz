async function Ready(Client){
    const {tag, id} = Client.user;
    console.log(`Console de ${tag}(${id})`);
}

module.exports = Ready;