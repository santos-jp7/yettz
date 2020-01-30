module.exports = async function(args){
    if(args.length == 0) return 'Esse comando precisa ser comentado.';

    if(Array.isArray(args)) args = args.join('');

    let type = undefined;
    if(args.indexOf('+') != -1) type = '+';
    if(args.indexOf('-') != -1) type = '-';
    if(args.indexOf('*') != -1) type = '*';
    if(args.indexOf('/') != -1) type = '/';

    if(type == undefined) return 'Ainda não consigo realizar essa operação.';

    const [n1, n2] = args.split(type);

    if(type == '+') return parseInt(n1) + parseInt(n2);
    if(type == '-') return parseInt(n1) - parseInt(n2);
    if(type == '*') return parseInt(n1) * parseInt(n2);
    if(type == '/') return parseInt(n1) / parseInt(n2);
}