/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Documentacion Oficial...
- .unshift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

- .push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pushs

Agregar Nuevo Elemento al .unshift() PRINCIPIO y .push() FINAL del Array
y Devolver la Nueva Longitud .length del Array

Ambos .unshift() y .push() modifican la longitud .length del array original (existente) */

// La sintaxis de .unshift() es:
// .unshift(element0, element1, /* ... ,*/ elementN)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift#syntax

// La sintaxis de .push() es:
// .push(element0, element1, /* ... ,*/ elementN)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push#syntax

// Donde...
// - .unshift() y .push()
// Nombre del método

// - element0, element1, /* ... ,*/ elementN
// Son los nuevos elementos que se agregan al array,
// puede ser un solo elemento o mas

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia entre .unshift() y .push() */

/* Originalmente el array tiene 2 elementos que son circulo '●'
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

/* Ejemplo 2 - Agregar varios elementos al array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift#using_unshift

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push#try_it */

let a = [1, 2, 3];
console.log(a);               // (3) [1, 2, 3]

const b = ['a', 'b', 'c'];
console.log(b);               // (3) ['a', 'b', 'c']

/* Al array (3) [1, 2, 3]
agregar los elementos 4 y 5 al PRINCIPIO del array */
console.log(a.unshift(4, 5)); // 5
console.log(a);               // (5) [4, 5, 1, 2, 3]

// Hacer otra vez q el array a tenga los numeros del 1 al 3
a = [1, 2, 3];
console.log(a);               // (3) [1, 2, 3]

// Al array a agregarle los elementos del array b
console.log(a.unshift(b));    // 4
console.log(a);               // (4) [ [ 'a', 'b', 'c' ], 1, 2, 3 ]

// .flat() Aplanar array
a = a.flat(Infinity);
console.log(a);               // (6) ['a', 'b', 'c', 1, 2, 3]
console.log(a.length);        // 6

// Hacer otra vez q el array a tenga los numeros del 1 al 3
a = [1, 2, 3];
console.log(a);               // (3) [1, 2, 3]

/* Recordatorio:
.concat() es una alternativa a .unshift() y .push(), ver:
" 9.4.3.3.5) .concat() Concatenar (Unir) Array "

Puedo lograr un resultado similar usando .concat(),
la diferencia es que .unshift() y .push() SI modifican el array original (existente),
en cambio .concat() NO, .concat() crea una nueva copia del array original con los nuevos elementos */
const c = a.concat(b);
console.log(c);               // (6) [1, 2, 3, 'a', 'b', 'c']

// Hacer otra vez q el array a tenga los numeros del 1 al 3
a = [1, 2, 3];
console.log(a);               // (3) [1, 2, 3]

/* Otra alternativa es usar la sintaxis extendida junto con .unshift() y .push()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push#merging_two_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */

console.log(a.unshift(...b)); // 6
console.log(a);               // (6) ['a', 'b', 'c', 1, 2, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Diferencia entre agregar los elementos con y sin un bucle
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift#description */

// Agregar a este array (3) [4, 5, 6] los numeros del 1 al 3
let array = [4, 5, 6];
console.log(array);                  // (3) [4, 5, 6]

// SIN bucle (6) [1, 2, 3, 4, 5, 6]
console.log(array.unshift(1, 2, 3)); // 6
console.log(array);                  // (6) [1, 2, 3, 4, 5, 6]

// Hacer otra vez q el array a tenga los numeros del 4 al 6
array = [4, 5, 6];
console.log(array);                  // (3) [4, 5, 6]

/* for i++ Iterar de izquierda a derecha
(desde el PRIMER 0 elemento hacia el ULTIMO -1 elemento)

CON bucle i++ (6) [3, 2, 1, 4, 5, 6] */
for (let i = 1; i < 4; i++) {
  array.unshift(i); // 1, 2, 3
  console.log(`nuevo elemento agregaro al array = ${i}`);
}
/*
nuevo elemento agregaro al array = 1
nuevo elemento agregaro al array = 2
nuevo elemento agregaro al array = 3
*/

console.log(array);                  // (6) [3, 2, 1, 4, 5, 6]

// Hacer otra vez q el array a tenga los numeros del 4 al 6
array = [4, 5, 6];
console.log(array);                  // (3) [4, 5, 6]

/* for i-- Iterar al revés, de derecha a izquierda
(desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento)

CON bucle i-- (6) [1, 2, 3, 4, 5, 6] */
for (let i = 3; i !== 0; i--) {
  array.unshift(i); // 3, 2, 1
  console.log(`nuevo elemento agregaro al array = ${i}`);
}
/*
nuevo elemento agregaro al array = 3
nuevo elemento agregaro al array = 2
nuevo elemento agregaro al array = 1
*/

console.log(array);                  // (6) [1, 2, 3, 4, 5, 6]
