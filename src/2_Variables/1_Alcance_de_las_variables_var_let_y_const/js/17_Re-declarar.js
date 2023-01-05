/* 
Re-declarar variables es mala práctica. 
No tiene sentido copiar var mas de una vez 
para volver a definir la misma variable 
porque nunca debes usar var 
y porque estas repitiendo código, 
si lo que quieres es cambiar el valor de la variable 
entonces lo que deberías hacer es usar let 
para re-asignar el valor de la variable.

Re-declarar es cuando se define 
mas de una misma ves la misma variable con el mismo nombre.

Las variables definidas con var 
son las únicas que se pueden re-declarar, 
en cambio let y const NO se pueden re-declarar.
*/

/* Ejemplo 1 - Re-declarar var */

/* Declarando una variable nombreVar con var */
var nombreVar = 'Daniel 1';
console.log(nombreVar); /* Daniel 1 */

/* RE-declarando (OTRA VEZ) la misma variable con var */
var nombreVar = 'Daniel 2';
console.log(nombreVar); /* Daniel 2 */

/* --------------------------------------- */

/* Ejemplo 2 - let y const NO se pueden re-declarar */

/* ERROR: 
NO puedes inicializar mas de una vez 
la misma variable con let y const */

/* let */
let nombreLet = 'Daniel 3';
console.log(nombreLet);

let nombreLet = 'Daniel 4';
console.log(nombreLet);

/* const */
const nombreConst = 'Daniel 5';
console.log(nombreConst);

const nombreConst = 'Daniel 6';
console.log(nombreConst);
