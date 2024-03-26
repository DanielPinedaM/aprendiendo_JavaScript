/* --------------------------------------------------------------- */

/*
Alias as

Las variables numero
tienen el mismo nombre en index.js y math.js

SINO usara as daria este error
❌ Uncaught SyntaxError: Indetifier restar 'restar' has already been declared

export necesita alias (as)
para cambiar nombre de la variable importada

modulo: importado de math.js
numero: variable q defino en index.js
*/

import { hola, numero as modulo } from './math';

const numero = 2;
console.log(numero);
// 2

console.log(modulo);
// 1

console.log(hola);
// 'hola mundo'
