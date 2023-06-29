/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Tutorial - Métodos de Array .toReversed() .toSorted() .toSpliced() .with() ...
- Midudev
https://youtu.be/TJKAGh9jzx4

https://midu.dev/to-reversed-to-spliced-to-sorted-with/

- Fernando Herrera:
https://youtu.be/Di9B9BiZRBs

https://youtu.be/CI_FH2N88iE

Documentación Oficial…
- .toReversed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed

- .reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

|-----------------------------------------|-----------------------|-----------------------|
| Metodos de array .to()                  | ¿MODIFICA el array1   | ¿Crea una nueva COPIA |
|                                         | original (existente)? | array2 del array1?    |
|-----------------------------------------|-----------------------|-----------------------|
| .reverse()                              | MUtable               | X                     |
| .sort()                                 | ✓                     |                       |
| .splice()                               |                       |                       |
| nombreArray[numeroIndice]="nuevo valor" |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|
| .toReversed()                           | INmutable             | ✓                     |
| .toSorted()                             | X                     |                       |
| .toSpliced()                            |                       |                       |
| .with()                                 |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|

|
|
|

.reverse() usa el algoritmo en el lugar

Wikipedia - Algoritmo en el lugar (In-place algorithm)
https://en.wikipedia.org/wiki/In-place_algorithm

.reverse() Invertir (Voltear) el Orden de los Elementos del Array

El primer elemento del array se convierte en el ultimo
y el ultimo elemento se convierte en el primero
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#return_value

.reverse() modifica el array original (existente)

Sintaxis:
.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#syntax

Donde...
- .reverse()
Nombre del método */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencias y Similitudes Entre .reverse() y .toReversed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#reversing_the_elements_in_an_array */

// Originalmente el array1 es:
const array1 = [1, 2, 3];
console.log(array1);
// (3) [1, 2, 3]

/* SIMILITUD:
Ambos .reverse() y .toReversed() sirven para
invertir (voltear) el orden de los elementos del array1

DIFERENCIAS:
.toReversed()
1) Crea una nueva COPIA en una variable array2 */
const array2 = array1.toReversed();
console.log(array2);
// (3) [3, 2, 1]

/* 2) NO modifica el array1 original,
los elementos del array1
siguen en el mismo orden (3) [1, 2, 3] */
console.log(array1);
// (3) [1, 2, 3]

// En cambio, .reverse() SI modifica el array1
array1.reverse();
console.log(array1);
// (3) [3, 2, 1]

/* --------------------------------------------------------------- */

/* Ejemplo 2 - .reverse() y sintaxis de propagación:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#the_reverse_method_returns_the_reference_to_the_same_array */

// array3 original (existente)
let array3 = [1, 2, 3];
console.log(array3);  // (3) [1, 2, 3]

// La variable reverse crea una copia del array3 invertido (volteado)
const reverse = array3.reverse();
console.log(reverse); // (3) [3, 2, 1]
console.log(array3);  // (3) [3, 2, 1]

/* Si modifico el array3 original,
tambien se modifica la copia del array original reverse (MUtabilidad)

Cuando reemplazo el elemento del indice 1 por 'nuevo elemento',
se reemplaza en las variables reverse y array3 */
reverse[0] = 'nuevo elemento';

console.log(reverse); // (3) ['nuevo elemento', 2, 1] -> copia del array3
console.log(array3);  // (3) ['nuevo elemento', 2, 1] -> array3 original (existente)

/* Para crear una copia del array original invertida (volteada)
y que NO se modifiq el array original
puedo usar .reduceRight() ó la sintaxis de propagación (INmutabilidad)

Recordatorio:
Ver:
“ Ejemplo 12 - Diferencia Entre .reduceRight() y .reverse() para Invertir (Voltear) Array ”

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy */

// Hacer otra vez q el array tenga los numeros del 1 al 3
array3 = [1, 2, 3];
console.log(array3); // (3) [1, 2, 3]

// Crear copia invertida (volteada) del array
const copia = [...array3].reverse();
console.log(copia);  // (3) [3, 2, 1]

// NO se modifica el array original (INmutabilidad)
console.log(array3); // (3) [1, 2, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Array Disperso (Sparse Array) [,] y Método .reverse()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#using_reverse_on_sparse_arrays

.reverse() conserva las ranuras vacias de los array dispersos [,] */
console.log([1, , 3].reverse()); // (3) [ 3, <1 empty item>, 1 ]
console.log([,].reverse());      // [ <1 empty item> ]
