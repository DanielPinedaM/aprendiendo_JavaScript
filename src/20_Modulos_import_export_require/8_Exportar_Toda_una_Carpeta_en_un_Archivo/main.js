/* eslint-disable import/extensions */

/* --------------------------------------------------- */

/* Module Aggregation: Exportar Toda una Carpeta en un Archivo
https://www.educative.io/answers/how-to-use-an-es-modules-aggregator-file */

import {
  constante,
  objetoLiteral,
  restar,
  sumar,
} from './export/export.js';

console.log(sumar(1, 1));   // 1+1 = 2
console.log(restar(5, 1));  // 5-1 = 4
console.log(constante);     // 'hola mundo'
console.log(objetoLiteral); // { uno: 1 }
