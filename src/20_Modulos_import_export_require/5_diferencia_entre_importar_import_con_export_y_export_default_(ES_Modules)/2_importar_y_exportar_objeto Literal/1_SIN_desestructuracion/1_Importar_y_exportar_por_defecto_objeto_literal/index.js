/* eslint-disable import/extensions */

/* --------------------------------------------------- */

// Importar objeto literal {} SIN desestructuracion

import objetoLiteral from './math.js';

console.log(objetoLiteral);
// {
//   nombre: 'Daniel',
// }

console.log(objetoLiteral.nombre);               // 'Daniel'

console.log(objetoLiteral.propiedadInexistente); // undefined
