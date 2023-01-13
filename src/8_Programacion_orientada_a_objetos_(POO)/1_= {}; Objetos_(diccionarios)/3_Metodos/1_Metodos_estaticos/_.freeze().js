/* eslint-disable no-self-compare */
// @ts-nocheck

/* Documentacion Oficial - .freeze()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

Object.freeze() Objeto INMUTABLE (que NO se puede modificar)

Con el metodo .freeze()
puedo hacer q cualquier OBJETO sea INMUTABLE,
es decir, que NO se pueda modificar.

Recordatorio:
Ver:
- " 4.2.6) Re-asignar, Mutable e Inmutable "

- 12.1.2) “En JS Casi Todo es un Objeto”
https://www.youtube.com/watch?v=N_t1A39IB_8&t=318s

En JS un OBJETO es cualquier tipo de dato q NO sea un dato primitivo,
como por ejemplo:
- []             Array
- {}             Objeto literal
- function () {} Funciones
- class {}       Clases

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* ----------------------------------------------------------------- */

const objetoLiteral = {
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* ----------------------------------------------------------------- */

// Ejemplo - Crear Array Inmutable Usando Object.freeze()

const array = [1, 2, 3];
console.log(array);
// (3) [1, 2, 3]

/* Object.freeze() congela el array,
hace q el array sea inmutable

Hacer una copia de array en inmutable
y agregarle un nuevo elemento 4 */
const inmutable = Object.freeze([...array, 4]);
console.log(inmutable);
// (4) [1, 2, 3, 4]

/* Las 2 siguientes lineas de codigo dan ERROR
porq el array NO se puede modificar (es INMUTABLE) */
// console.log(inmutable.push(5)); // agregar un nuevo numero 5 al ultimo elemento del array
// console.log(inmutable.pop()); // eliminar el ultimo elemento del array

console.log(inmutable);
// (4) [1, 2, 3, 4]

/* El array llamado inmutable NO se puede modificar,
la unica forma de modificarlo es crear una copia del array
y modificar la copia del array */
const mutable = [...inmutable, 5];
console.log(mutable);
// (5) [1, 2, 3, 4, 5]

/* ----------------------------------------------------------------- */
