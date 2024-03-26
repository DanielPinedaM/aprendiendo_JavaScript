/* eslint-disable max-len */
/* eslint-disable import/extensions */

/* --------------------------------------------------------------- */

/*
Diferencia Entre Importar import con export y export default

                                       |------------------------------------------|---------------------------------------------|
                                       | Exportar por Defecto                     | Exportar                                    |
                                       | export default                           | export                                      |
|--------------------------------------|------------------------------------------|---------------------------------------------|
| Necesita llaves {} para importar     | ❌                                       | ✔️                                          |
|                                      | import sumando from './math.js';         | import { uno as primero } from './math.js'; |
|--------------------------------------|------------------------------------------|---------------------------------------------|
| Necesita as para renombrar el modulo | ❌                                       | ✔️                                          |
|                                      |                                          |                                             |
|                                      | // math.js                               | // math.js                                  |
|                                      | const sumar = (a, b) => a + b;           | export const uno = 1;                       |
|                                      | export default sumar;                    |                                             |
|                                      |                                          |                                             |
|                                      | // index.js                              | // index.js                                 |
|                                      | import sumando from './math.js';         | import { uno as primero } from './math.js'; |
|                                      |                                          |                                             |
|                                      | console.log(                             | console.log(primero);                       |
|                                      |    sumando(2, 2),                        | // 1                                        |
|                                      | );                                       |                                             |
|                                      | // 2+2 = 4                               |                                             |
|--------------------------------------|------------------------------------------|---------------------------------------------|
| Sintaxis                             | import defaultExport from "module-name"; | import { export1 } from "module-name";      |
|                                      |                                          |                                             |
|                                      | export default expression;               | export expression;                          |
|--------------------------------------|------------------------------------------|---------------------------------------------| */

/* --------------------------------------------------------------- */

import sumando, { uno } from './math.js';

console.log(uno);
// 1

console.log(
  sumando(2, 2),
);
// 2+2 = 4
