/*
CSS-Tricks (Trucos CSS) - Inmutabilidad en JS:
https://css-tricks.com/understanding-immutability-in-javascript/

Re-asignar:
Es volver a darle otro valor (otra vez) a una variable.

Mutable:
Es cuando el valor de la variable SI se puede modificar.

Inmutable:
Es cuando el valor de la variable NO se puede modificar.

var y let SIEMPRE son MUtables.

Las variables definidas con const
son INmutables en datos PRIMITIVOS
y MUtables en datos COMPUESTOS (OBJETOS).
*/

// @ts-nocheck

/* Las Cadenas de Texto (Strings) son datos PRIMITIVOS */
let nombreMutable = 'Daniel 1'; /* inicializar variable con let */
console.log(nombreMutable); /* Daniel 1 */

/* Re-asignar:
Darle un nuevo valor a la variable nombreMutable

Puedo re-asignar la variable porq
la estoy definiendo con let
y estoy guardando un dato primitivo */
nombreMutable = 'Daniel 2';
console.log(nombreMutable); /* Daniel 2 */

const nombreInmutable = 'Daniel 3'; /* inicializar variable con const */
console.log(nombreInmutable); /* Daniel 3 */

/* ERROR:
cuando defino una variable PRIMITIVA con const
NO la puedo modificar (es INmutable) */
nombreInmutable = 'Daniel 4';

/* ------------------------------------------------ */

/* crear un nuevo objeto (dato compuesto) */
const objeto = { nombre: 'Daniel 5' };
console.log(objeto);
/* { nombre: 'Daniel 5' } */

/* agregar un nuevo dato clave: valor al objeto,
const permite modificar variables COMPUESTAS (OBJETOS)   */
objeto.edad = 99; /* nombre_objeto.nueva_clave = nuevo_valor; */
console.log(objeto);
/* { nombre: 'Daniel 5', edad: 99 } */
