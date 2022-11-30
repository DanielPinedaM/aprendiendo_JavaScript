// @ts-nocheck
/* eslint-disable no-unused-expressions */

/* Propiedades y metodos de los array...
- Tutorial:
https://youtu.be/LYF4FeJyccc

- Documentacion Oficial
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods */

const array = ['A', 'B', 'C', 'D'];

/* Array.from()
convertir a ARRAY y ejecutar una funcion para cada elemento

(x) => x + x
1 + 1 = 2
2 + 2 = 4
3 + 3 = 6 */
Array.from([1, 2, 3], (x) => x + x);
/* (3) [2, 4, 6]
0: 2
1: 4
2: 6
length: 3
[[Prototype]]: Array(0) */

/* Array.of()
*/

/* Array.isArray()
Saber si un dato (variable) es o no un array */
Array.isArray([]); // true  -> [] array
Array.isArray({}); // false -> {} objeto literal

/* []
.at()
obtener (acceder) en especifico a un ELEMENTO q se encuentra en una posicion (indice)

0 PRIMER elemento */
array[0]; // 'A'

// -1 ULTIMO elemento
array.at(-1); // 'D'

/* .length
numero total de ELEMENTOS (letras) contando desde 1 */
array.length; // 4

/* .length - 1
mayor (ultima) POSICION (indice) contando desde 0 */
array.length - 1; // 3
