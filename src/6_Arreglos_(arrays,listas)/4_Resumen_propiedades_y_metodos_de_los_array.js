/* eslint-disable no-multi-spaces */
// @ts-nocheck
/* eslint-disable no-unused-expressions */

/* Propiedades y metodos de los array...
- Tutorial:
https://youtu.be/LYF4FeJyccc

- Documentacion Oficial
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods */

const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];

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
crear un nuevo array a partir de ARGUMENTOS */
console.log(Array.of('1', '2', '3', 4, 5));
/* (5) ['1', '2', '3', 4, 5]
0: "1"
1: "2"
2: "3"
3: 4
4: 5
length: 5
[[Prototype]]: Array(0) */

/* Array.isArray()
¿el dato (variable) ES UN ARRAY? */
Array.isArray([]); // true  -> [] array
Array.isArray({}); // false -> {} objeto literal

/* .length
numero total de ELEMENTOS (letras) contando desde 1 */
array.length;     // 10

/* .length - 1
mayor (ultima) POSICION (indice) contando desde 0 */
array.length - 1; // 9

/* []
.at()
obtener (acceder) en especifico a un ELEMENTO q se encuentra en una posicion (indice)

0 PRIMER elemento */
array[0];        // 'h'   -> string

// -1 ULTIMO elemento
array.at(-1);    // 'o'   -> string
array.slice(-1); // ['o'] -> array

/* .indexOf()
PRIMER numero de posición (indice) del ELEMENTO buscado  */
array.indexOf('o'); // 1

/* .lastIndexOf()
ULTIMO numero de posición (indice) del ELEMENTO buscado */
array.lastIndexOf('o'); // 9

/* .slice()
Extraer una parte de un ARRAY de acuerdo a sus posiciones (indices) */
array.slice(2);      // (8) ['l', 'a', '', 'm', 'u', 'n', 'd', 'o']
array.slice(-2);     // (2) ['d', 'o']

array.slice(1, 3);   // (2) ['o', 'l']
array.slice(-5, -2); // (3) ['m', 'u', 'n']
