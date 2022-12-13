/* eslint-disable no-restricted-syntax */
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

/* .copyWithin()
Copiar array y pegarlo dentro del mismo array */
const numeros = [1, 2, 3, 4, 5];

numeros.copyWithin(0, 3, 4);    // (5) [4, 2, 3, 4, 5]

numeros.copyWithin(0, 3);       // (5) [4, 5, 3, 4, 5]

numeros.copyWithin(1);          // (5) [1, 1, 2, 3, 4]

numeros.copyWithin(2);          // (5) [1, 2, 1, 2, 3]
numeros.copyWithin(-3);         // (5) [1, 2, 1, 2, 3]

numeros.copyWithin(3);          // (5) [1, 2, 3, 1, 2]
numeros.copyWithin(-2);         // (5) [1, 2, 3, 1, 2]

numeros.copyWithin(-2, -3, -1); // (5) [1, 2, 3, 3, 4]
numeros.copyWithin(-2, -3);     // (5) [1, 2, 3, 3, 4]

numeros.copyWithin(-1);         // (5) [1, 2, 3, 4, 1]

/* .concat()
Concatenar (unir) array

Arrays con elementos de tipo... */
const array1 = ['1', '2'];    // string
const array2 = [3, 4];        // number
const array3 = [true, false]; // boolean

// variable string ''
const string = 'hola mundo';

// variable objetoLiteral {}
const objetoLiteral = {
  nombre: 'Daniel',
  edad: 99,
};

const concatenar = array1.concat(array2, array3, string, objetoLiteral);
console.log(concatenar);
/*
[
  '1',
  '2',
  3,
  4,
  true,
  false,
  'hola mundo',
  {
    nombre: 'Daniel',
    edad: 99
  }
]
*/

/* .entries()
Iterador de un array */

// Recorrer (iterar) array usando .entries(), for of y  [i, elemento]
for (const [i, elemento] of array.entries()) {
  console.log(`i = ${i} / elemento = '${elemento}'`);
}
/*
i = 0 / elemento = 'h'
i = 1 / elemento = 'o'
i = 2 / elemento = 'l'
i = 3 / elemento = 'a'
i = 4 / elemento = ''
i = 5 / elemento = 'm'
i = 6 / elemento = 'u'
i = 7 / elemento = 'n'
i = 8 / elemento = 'd'
i = 9 / elemento = 'o'
*/

/* .every()
¿TODOS los elementos del array cumplen con la CONDICION de la FUNCION? */
const o = ['o', 'o', 'o'];

const buscarElemento = (elemento) => elemento === 'o';
buscarElemento;
// [Function: buscarElemento]

/* false porq
en el array ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
NO todos los elementos tienen la letra ['o'] */
array.every(buscarElemento);
// false

/* true porq en el array ['o', 'o', 'o']
TODOS los elementos son ['o'] */
o.every(buscarElemento);
// true
