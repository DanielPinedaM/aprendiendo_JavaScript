/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-sparse-arrays */
// @ts-nocheck

/* Documentacion Oficial - .reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

.reverse() usa el algoritmo en el lugar

Wikipedia - Algoritmo en el lugar (In-place algorithm)
https://en.wikipedia.org/wiki/In-place_algorithm

.reverse() Invertir (Voltear) el Orden de los Elementos del Array

El primer elemento del array se convierte en el ultimo
y el ultimo elemento se convierte en el primero
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#return_value

.reverse() modifica el array original (existente)

Su sintaxis es:
.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#syntax

Donde...
- .reverse()
Es el nombre del metodo */

/* --------------------------------------------------------------- */

/* Ejemplo 1:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#reversing_the_elements_in_an_array */

// Originalmente el array es:
const array = [1, 2, 3];
console.log(array); // (3) [1, 2, 3]

// Y despues de invertirlo (voltearlo):
array.reverse();
console.log(array); // (3) [3, 2, 1]

/* --------------------------------------------------------------- */

/* Ejemplo 2 - .reverse() y sintaxis de propagación:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#the_reverse_method_returns_the_reference_to_the_same_array */

// array2 original (existente)
let array2 = [1, 2, 3];
console.log(array2);  // (3) [1, 2, 3]

// La variable reverse crea una copia del array2 invertido (volteado)
const reverse = array2.reverse();
console.log(reverse); // (3) [3, 2, 1]
console.log(array2);  // (3) [3, 2, 1]

/* Si modifico el array2 original,
tambien se modifica la copia del array original reverse (MUtabilidad)

Cuando reemplazo el elemento del indice 1 por 'nuevo elemento',
se reemplaza en las variables reverse y array2 */
reverse[0] = 'nuevo elemento';

console.log(reverse); // (3) ['nuevo elemento', 2, 1] -> copia del array2
console.log(array2);  // (3) ['nuevo elemento', 2, 1] -> array2 original (existente)

/* Para crear una copia del array original invertida (volteada)
y que NO se modifiq el array original
puedo usar .reduceRight() ó la sintaxis de propagación (INmutabilidad)

Recordatorio:
Ver:
“ Ejemplo 12 - Diferencia Entre .reduceRight() y .reverse() para Invertir (Voltear) Array ”

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy */

// Hacer otra vez q el array tenga los numeros del 1 al 3
array2 = [1, 2, 3];
console.log(array2); // (3) [1, 2, 3]

// Crear copia invertida (volteada) del array
const copia = [...array2].reverse();
console.log(copia);  // (3) [3, 2, 1]

// NO se modifica el array original (INmutabilidad)
console.log(array2); // (3) [1, 2, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Array Disperso (Sparse Array) [,] y Método .reverse()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#using_reverse_on_sparse_arrays

.reverse() conserva las ranuras vacias de los array dispersos [,] */
console.log([1, , 3].reverse()); // (3) [ 3, <1 empty item>, 1 ]
console.log([,].reverse());      // [ <1 empty item> ]
