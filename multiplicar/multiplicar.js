//required
const fs = require('fs');
const colors = require('color');


let listarTabla = (base, limite = 12) => {

    if (!Number(base)) {
        console.log(`${base} no es numero`)
        return
    }
    console.log('====================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('====================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
};

let crearArchivo = (base, limite = 8) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-limite-${limite}.txt`);
        });
    })
};

module.exports = {
    crearArchivo,
    listarTabla
}