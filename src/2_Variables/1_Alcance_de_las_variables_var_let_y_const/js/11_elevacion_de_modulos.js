/*
Tutorial La Cocina del Codigo - Elevación (Hoisting)
https://youtu.be/uI6o97A4IrI
*/

/* ERROR: los import tienen q estar en las primeras lineas de codigo */
/*
var nombre2 = 'Daniel';

saludar2(nombre2);

import saludar2 from './12_saludar.js';
*/

/* hola Daniel */

/* --------------------------------------- */

/* Codigo corregido: */
import saludar2 from './12_saludar';

const nombre2 = 'Daniel';

saludar2(nombre2);
