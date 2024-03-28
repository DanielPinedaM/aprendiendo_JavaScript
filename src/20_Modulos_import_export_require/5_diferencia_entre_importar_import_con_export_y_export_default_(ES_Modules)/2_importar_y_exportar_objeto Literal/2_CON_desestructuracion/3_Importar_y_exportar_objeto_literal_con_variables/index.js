/* eslint-disable import/extensions */

/* --------------------------------------------------- */

// Importar y exportar objeto literal {} CON desestructuracion
import {
  numero,
  array,

  restar,
  sumar,

  obj,
} from './math.js';

console.log(numero);       // 99
console.log(array);        // (3) [1, 2, 3]

console.log(restar(5, 1)); // 5-1 = 4
console.log(sumar(3, 3));  // 3+3 = 6

console.log(obj);
/*
{
    nombre: 'Daniel',
    edad: 99,
    humano: true
}
*/

console.log(obj.nombre);               // 'Daniel'
console.log(obj.edad);                 // 99
console.log(obj.humano);               // true
console.log(obj.propiedadInexistente); // undefined
