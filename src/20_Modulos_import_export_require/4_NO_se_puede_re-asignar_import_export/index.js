/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/extensions */

/* --------------------------------------------------- */

import { uno } from './math.js';

console.log(uno); // 1

// ❌ ERROR: No se puede re-asignar 'uno' porque es una importacion
uno = 2;
console.log(uno);

// toca copiar la importacion a otra variable
// porq NO se puede re-asignar un import export
let copia = uno;
console.log(copia); // 1

copia = 2;
console.log(copia); // 2
