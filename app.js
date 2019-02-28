const { argv } = require('./config/yargs');
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //path relativo

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${colors.green(archivo)}`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);
// console.log(argv.limite);