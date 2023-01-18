/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial...
- .shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

- .pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

Eliminar y Devolver el .shift() PRIMER y .pop() ULTIMO Elemento del Array

Recordatorio:
.slice() es una alternativa a .shift() y .pop(), ver:
" 9.4.3.3.3) .slice() Extraer una Parte de un Array de Acuerdo a sus Posiciones (Índices) "

Ambos .shift() y .pop() modifican la longitud .length del array original (existente)

La sintaxis de .shift() es:
.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift#syntax

Donde...
- .shift()
Es el nombre del metodo

La sintaxis de .pop() es:
.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#syntax

Donde...
- .pop()
Es el nombre del metodo */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia entre .shift() y .pop()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift#removing_an_element_from_an_array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#removing_the_last_element_of_an_array */

/* Originalmente el array tiene los numeros del 1 al 5,
pero lo modificare despues con .shift() y .pop() */
let array = [1, 2, 3, 4, 5];
console.log(array);   // (5) [1, 2, 3, 4, 5]

/* .shift() elimina y devuelve el
PRIMER elemento del array q es el numero 1 */
const primero = array.shift();
console.log(primero); // 1
console.log(array);   // (4) [2, 3, 4, 5]

// Hacer q el array tenga otra vez los numeros del 1 al 5:
array = [1, 2, 3, 4, 5];

/* En cambio .pop() elimina y devuelve el
ULTIMO elemento que es el numero 5 */
const ultimo = array.pop();
console.log(ultimo);  // 5
console.log(array);   // (4) [1, 2, 3, 4]

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Array vacio [] en metodos .shift() y .pop()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop#return_value

Ambos .shift() y .pop()  devuelven undefined cuando el array esta vacio [] */

console.log([].shift()); // undefined
console.log([].pop());   // undefined

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Recorrer (iterar) array y eliminar todos los elementos de un array (vaciar array)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift#using_shift_method_in_while_loop */

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Cuando la longitud sea igual a cero:
- Se eliminaron todos los elementos del array
- Se detiene la iteracion */
while (figuras.length !== 0) {
  const eliminado = figuras.shift();
  console.log(`elemento eliminado = '${eliminado}'`);
}
/*
elemento eliminado = '▲'
elemento eliminado = '●'
elemento eliminado = '✖'
elemento eliminado = '■'
*/

console.log(figuras);
// []
