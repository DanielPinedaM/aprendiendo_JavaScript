/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial...
- .unshift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

- .push()

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Diferencia entre .unshift() y .push()

/* Originalmente el array tiene 2 elementos que son '●'
y una longitud .length de 2
pero esto lo modificare con .unshift() y .push() */
const circulos = ['●', '●'];
console.log(circulos);        // (2) ['●', '●']
console.log(circulos.length); // 2

/* .unshift() agrega un nuevo elemento al PRINCIPIO del array
y devuelve la nueva longitud .length del array

Agregar un corazon '❤️' al PRINCIPIO del array,
la longitud .length del array era 2
pero despues de agregarle el '❤️' es 3 */
const unshift = circulos.unshift('❤️');
console.log(unshift);         // 3
console.log(circulos);        // (3) ['❤️', '●', '●']

/* .push() agrega un nuevo elemento al FINAL del array
y devuelve la nueva longitud .length del array

Agregar un corazon '❤️' al FINAL del array,
antes la longitud .length era 3
pero despues de agregarle otro '❤️' es 4 */
const push = circulos.push('❤️');
console.log(push);            // 4
console.log(circulos);        // (4) ['❤️', '●', '●', '❤️']

/* --------------------------------------------------------------- */

/* Ejemplo 2 */

/* --------------------------------------------------------------- */
