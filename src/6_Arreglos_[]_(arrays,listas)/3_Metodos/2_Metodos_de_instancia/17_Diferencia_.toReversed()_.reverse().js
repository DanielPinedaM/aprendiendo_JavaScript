/* eslint-disable func-names */
/* eslint-disable no-extend-native */
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

Wikipedia - Algoritmo en el lugar (In-place algorithm)
https://en.wikipedia.org/wiki/In-place_algorithm

|-----------------------------------------|-----------------------|-----------------------|
| Metodos de array .to()                  | ¿MODIFICA el array1   | ¿Crea una nueva COPIA |
|                                         | original (existente)? | array2 del array1?    |
|-----------------------------------------|-----------------------|-----------------------|
| .reverse()                              | MUtable               | X                     |
| .sort()                                 | ✔️                     |                       |
| .splice()                               |                       |                       |
| nombreArray[numeroIndice]="nuevo valor" |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|
| .toReversed()                           | INmutable             | ✔️                     |
| .toSorted()                             | X                     |                       |
| .toSpliced()                            |                       |                       |
| .with()                                 |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|

Wikipedia - Algoritmo en el lugar (In-place algorithm)
https://en.wikipedia.org/wiki/In-place_algorithm

                                       |--------------------------------------|---------------------------------------------|
                                       | .toReversed()                        | .reverse()                                  |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| ¿Sirve para invertir (voltear)       | ✔️                                    | ✔️                                           |
| el orden de los elementos del array? |                                      |                                             |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| El primer elemento del array         | ✔️                                    | ✔️                                           |
| se convierte en el último            |                                      |                                             |
| y el último elemento                 |                                      |                                             |
| se convierte en el primero           |                                      |                                             |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| ¿MODIFICA el array1                  | INmutable                            | MUtable                                     |
| original (existente)?                | X                                    | ✔️                                           |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| ¿Crea una nueva COPIA                | ✔️                                    | X                                           |
| array2 del array1?                   |                                      |                                             |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| Cada una de las ranuras vacías       | undefined                            | <1 empty item>                              |
| de los array dispersos [,]           |                                      |                                             |
| son reemplazadas por…                | [1, , 3].toReversed()                | [1, , 3].reverse()                          |
|                                      | // (3) [ 3, undefined, 1 ]           | // (3) [ 3, <1 empty item>, 1 ]             |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| ¿Usa el algoritmo en el lugar?       | ✔️                                    | ✔️                                           |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| Ejemplo                              | array1 original (existente)          | En cambio, .reverse() SI modifica el array1 |
|                                      | const array1 = [1, 2, 3];            | array1.reverse();                           |
|                                      | console.log(array1);                 | console.log(array1);                        |
|                                      | // (3) [1, 2, 3]                     | // (3) [3, 2, 1]                            |
|                                      |                                      |                                             |
|                                      | .toReversed() y .reverse()           |                                             |
|                                      | invertir (voltear)                   |                                             |
|                                      | el orden de los elementos del array1 |                                             |
|                                      |                                      |                                             |
|                                      | .toReversed() NO modifica el array1  |                                             |
|                                      | const array2 = array1.toReversed();  |                                             |
|                                      | console.log(array2);                 |                                             |
|                                      | // (3) [3, 2, 1]                     |                                             |
|                                      |                                      |                                             |
|                                      | console.log(array1);                 |                                             |
|                                      | // (3) [1, 2, 3]                     |                                             |
|                                      |                                      |                                             |
|--------------------------------------|--------------------------------------|---------------------------------------------|
| Sintaxis                             | array.toReversed()                   | array.reverse()                             |
|--------------------------------------|--------------------------------------|---------------------------------------------|

Sintaxis:
array.reverse()
array.toReversed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed#syntax

Donde...
- .reverse() y .toReversed()
Es el nombre del metodo

- array
* Nombre de la variable q contiene el array []

* Es el array que quiero invertir (voltear) */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencias y Similitudes Entre .reverse() y .toReversed()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed#reversing_the_elements_in_an_array

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

/* Ejemplo 2 - Crear Función (Metodo, Polyfill) de .toReversed()
https://youtu.be/TJKAGh9jzx4 */

Array.prototype.toReversed = function () {
  return this.slice().reverse();
};

const numeros = [1, 2, 3];
console.log(numeros.toReversed()); // (3) [ 3, 2, 1 ]
console.log(numeros);              // (3) [ 1, 2, 3 ]

/* --------------------------------------------------------------- */

/* Ejemplo 3 - .reverse() y ... sintaxis de propagación (MALA PRACTICA)
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
y que NO se modifiq el array original (INmutabilidad)
puedo usar cualquiera de estas opciones:
- .toReversed()
- .reduceRight()
- ... sintaxis de propagación

Recordatorio:
Ver:
“ Ejemplo 12 - Diferencia Entre .reduceRight() y .reverse() para Invertir (Voltear) Array ”

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy */

// Hacer otra vez q el array tenga los numeros del 1 al 3
array3 = [1, 2, 3];
console.log(array3); // (3) [1, 2, 3]

/* Hacer esto es MALA PRACTICA
porque es lento en arrays con muchos elementos,
lo correcto es usar .toReversed()

... Crear copia invertida (volteada) del array */

const copia = [...array3].reverse();
console.log(copia);  // (3) [3, 2, 1]

// NO se modifica el array original (INmutabilidad)
console.log(array3); // (3) [1, 2, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Array Disperso (Sparse Array) [,] en Métodos .toReversed() y .reverse()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed#using_toreversed_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#using_reverse_on_sparse_arrays

Imprimir array disperso [,] SIN usar metodos de array: */

console.log([,]); // [ <1 empty item> ]

/* .reverse() reemplaza por <1 empty item>
cada una las ranuras vacias de los array dispersos [,] */

console.log([1, , 3].reverse());    // (3) [ 3, <1 empty item>, 1 ]
console.log([,].reverse());         // [ <1 empty item> ]

// En cambio, .toReversed() por undefined
console.log([1, , 3].toReversed()); // (3) [ 3, undefined, 1 ]
console.log([,].toReversed());      // [ undefined ]

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Metodos de Array [] .toReversed() y .reverse() en objeto literal {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed#calling_toreversed_on_non-array_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#calling_reverse_on_non-array_objects

Ambos métodos .toReversed() y .reverse()
leen la propiedad length de this
y luego accede a cada propiedad con un numero entero */

const objetoLiteral = {
// propiedad: valor,
  length: 3,
  hola: 'mundo',
  2: 4,
  3: 33, // propiedad: valor, ignorado por .reverse() porq la longitud length es 3
};
console.log(objetoLiteral);
/*
{
  2: 4,
  3: 33,
  length: 3,
  hola: 'mundo'
}
*/

/* .toReversed() Los indices "0" y "1" no estan presentes,
por lo q se convierten en undefined */
const toReversed = Array.prototype.toReversed.call(objetoLiteral);
console.log(toReversed);
// (3) [4, undefined, undefined]

/* .reverse() El índice 2 se elimina porque no había ningún índice 0 presente originalmente

El índice 3 no cambia porq la longitud length es 3 */
Array.prototype.reverse.call(objetoLiteral);
console.log(objetoLiteral);
/*
{
  0: 4,
  3: 33,
  length: 3,
  hola: 'mundo'
}
*/
