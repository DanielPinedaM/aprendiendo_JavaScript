/* eslint-disable import/extensions */

/* --------------------------------------------------- */

import math from './math.js';

console.log(math);
/*
{
    numero: 99,
    array: (3) [1, 2, 3],

    restar: (a, b) => a - b,

    obj: {
      nombre: 'Daniel',
      edad: 99,
      humano: true
    }
}
*/

console.log(math.numero);       // 99
console.log(math.array);        // (3) [1, 2, 3]

console.log(math.restar(5, 1)); // 5-1 = 4
console.log(math.sumar(3, 3));  // 3+3 = 6

console.log(math.obj);
/*
{
    nombre: 'Daniel',
    edad: 99,
    humano: true
}
*/

console.log(math.obj.nombre);               // 'Daniel'
console.log(math.obj.edad);                 // 99
console.log(math.obj.humano);               // true
console.log(math.obj.propiedadInexistente); // undefined
