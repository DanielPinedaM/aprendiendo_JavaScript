/* importar variables de variables.js */
import { letPI, constPI } from './4_variables.js';

/*
JavaScript Info - Alcance del Módulo:
https://javascript.info/modules-intro#module-level-scope
*/

console.log('archivo console_log.js');
/* archivo console_log.js */

/* imprimir las variables q estan en otro archivo .js diferente */
console.log('letPI = ', letPI);
/* 3.1416 */

console.log('constPI = ', constPI);
/* 3.1416 */
