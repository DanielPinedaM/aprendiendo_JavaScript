/* eslint-disable import/extensions */

/* --------------------------------------------------- */

// Importar y exportar objeto literal {}

import objetoLiteral from './math.js';

console.log(objetoLiteral);
// {
//   nombre: 'Daniel',
// }

console.log(objetoLiteral.nombre);               // 'Daniel'

console.log(objetoLiteral.propiedadInexistente); // undefined
