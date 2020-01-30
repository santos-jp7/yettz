module.exports = async function(args){
    if(args.length == 0) return 'Esse comando precisa ser comentado.';
    return args.join(' ').trim();
}