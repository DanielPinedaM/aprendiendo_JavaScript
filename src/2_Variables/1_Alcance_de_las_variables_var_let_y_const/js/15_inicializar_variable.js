// @ts-nocheck

/* Ejemplo 1 - var y let NO se tienen que inicializar: */
/* Definir variables */
var varNombre;
console.log(varNombre); /* undefined */

let letNombre;
console.log(letNombre); /* undefined */

/* Inicializar variables
(darles un valor a las variables) */
varNombre = 'Daniel 1';
console.log(varNombre); /* Daniel 1 */

letNombre = 'Daniel 2';
console.log(letNombre); /* Daniel 2 */

/* ----------------------------------- */

/* Ejemplo 2 - const SI se tiene que inicializar: */
const constNombre = 'Daniel 3';
console.log(constNombre); /* Daniel 3 */
