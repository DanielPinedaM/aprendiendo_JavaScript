/*
JavaScript Info - Alcance del Módulo:
https://javascript.info/modules-intro#module-level-scope
*/

console.log('\n', '\narchivo variables.js');
/* archivo variables.js */

let letPI = 3.1416;
const constPI = 3.1416;

/* exportar las variables */
export { letPI, constPI };
