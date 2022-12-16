/* eslint-disable indent */
/* eslint-disable max-len */
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

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
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

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.of() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
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

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.isArray() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
¿el dato (variable) ES UN ARRAY? */
Array.isArray([]); // true  -> [] array
Array.isArray({}); // false -> {} objeto literal

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .length █
 ▀▀▀▀▀▀▀▀▀▀▀
numero total de ELEMENTOS (figuras) contando desde 1 */
 ['▲', '●', '✖', '■'].length;     // 4
// 1    2    3    4   -> los indices empiezan en 0, NO en 1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .length - 1 █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
mayor (ultima) POSICION (indice) contando desde 0 */
  ['▲', '●', '✖', '■'].length - 1; // 3
//  0    1    2    3   -> Los indices son asi

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ []          █
 █ .at()       █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
obtener (acceder) en especifico a un ELEMENTO q se encuentra en una posicion (indice)

0 PRIMER elemento */
  ['▲', '●', '✖', '■'][0];        // '▲' -> string
//  0    1    2    3

// -1 ULTIMO elemento
   ['▲', '●', '✖', '■'].at(-1);    // '■' -> string
   ['▲', '●', '✖', '■'].slice(-1); // ['■'] -> array
//  -4   -3   -2    -1  -> Indices negativos

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .indexOf()  █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
PRIMER numero de posición (indice) del ELEMENTO buscado

Posicion del PRIMER circulo '●' */
  ['▲', '●', '■', '●'].indexOf('●'); // 1
//  0    1    2    3

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .lastIndexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
ULTIMO numero de posición (indice) del ELEMENTO buscado

Posicion del ULTIMO circulo '●' */
  ['▲', '●', '■', '●'].lastIndexOf('●'); // 3
//  0    1    2    3

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .slice() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
Extraer una parte de un ARRAY de acuerdo a sus posiciones (indices) */

// array A PARTIR de la segunda posicion 1
  ['▲', '●', '✖', '■'].slice(1);      // (3) ['●', '✖', '■']
//  0    1    2    3

// array A PARTIR de la PE-nultima posicion -2
  ['▲', '●', '✖', '■'].slice(-2);     // (2) ['✖', '■']
//  -4   -3   -2   -1

/* array DESDE la posicion 0 HASTA 2,
NO se incluye la posicion 3 */
  ['▲', '●', '✖', '■'].slice(0, 3);   // (3) ['▲', '●', '✖']
//  0    1    2    3

/* posiciones -2 y -3 del array,
NO se incluye la posicion -1 */
  ['▲', '●', '✖', '■'].slice(-3, -1); // (2) ['●', '✖']
// -4   -3   -2    -1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .copyWithin() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtube.com/shorts/UNIR2RU8mXA?feature=share
Copiar array y pegarlo dentro del mismo array */

/* Copiar posicion (indice) 2,
NO se incluye la posicion 3
y pegar ['✖'] en posicion 0 */
  ['▲', '●', '✖', '■'].copyWithin(0, 2, 3); // (4) ['✖', '●', '✖', '■']
//  0    1    2    3

/* Copiar A PARTIR de la posicion 2 ['✖', '■']
y pegarlo en posicion 0 */
  ['▲', '●', '✖', '■'].copyWithin(0, 2);    // (4) ['✖', '■', '✖', '■']
//  0    1    2    3

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la posicion 1
ELIMINAR elemento de la ULTIMA posicion ['■'] */
  ['▲', '●', '✖', '■'].copyWithin(1);       // (4) ['▲', '▲', '●', '✖']
//  0    1    2    3

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la posicion 2
ELIMINAR elementos ['✖', '■'] */
  ['▲', '●', '✖', '■'].copyWithin(2); // (4) ['▲', '●', '▲', '●']
//  0    1    2    3

/* COPIAR posicion (indice) -2
NO se incluye la posicion -1
PEGAR ['✖'] en posicion -3
REEMPLAZAR ['●'] por ['✖']
ELIMINAR elemento ['■'] de la ultima posicion */
  ['▲', '●', '✖', '■'].copyWithin(-3, -2, -1); // (4) ['▲', '✖', '✖', '■']
// -4   -3   -2    -1

/* Copiar A PARTIR de la posicion -2 ['✖', '■']
y pegarlo en posicion -3 */
  ['▲', '●', '✖', '■'].copyWithin(-3, -2); // (4) ['▲', '✖', '■', '■']
// -4   -3   -2    -1

/* COPIAR el primer elemento ['▲']
PEGARLO en la ultima posicion -1
REEMPLAZAR ['■'] por ['▲'] */
  ['▲', '●', '✖', '■'].copyWithin(-1); // (4) ['▲', '●', '✖', '▲']
// -4   -3   -2    -1

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la PE-nultima posicion -2
REEMPLAZAR ['✖', '■'] por ['▲', '●'] */
  ['▲', '●', '✖', '■'].copyWithin(-2); // (4) ['▲', '●', '▲', '●']
// -4   -3   -2    -1

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la ANTE-penultima posicion -3
REEMPLAZAR ['●', '✖'] por ['▲', '●']
ELIMINAR el ultimo elemento ['■'] */
  ['▲', '●', '✖', '■'].copyWithin(-3); // (4) ['▲', '▲', '●', '✖']
// -4   -3   -2    -1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .concat() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
Concatenar (unir) array

Lo q esta dentro del parentesis de .concat()
puede ser cualquier tipo de dato */
['▲'].concat(['●', '✖'], ['■'], 'hola mundo', 1, true, false);
// (8) ['▲', '●', '✖', '■', 'hola mundo', 1, true, false]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
Iterador de un array */

['▲', '●', '✖', '■'].entries(); // Object [Array Iterator] {}

// Recorrer (iterar) array usando .entries(), for of y  [i, elemento]
for (const [i, elemento] of ['▲', '●', '✖', '■'].entries()) {
  console.log(`i = ${i} / elemento = '${elemento}'`);
}
/*
i = 0 / elemento = '▲'
i = 1 / elemento = '●'
i = 2 / elemento = '✖'
i = 3 / elemento = '■'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .every() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
¿TODOS los elementos del array cumplen con la CONDICION de la FUNCION? */

// buscar el circulo ['●'] en el array
const buscarElemento = (elemento) => elemento === '●';
buscarElemento; // [Function: buscarElemento]

// ¿TODOS los elementos del array son circulo ['●']?
['▲', '●', '✖', '■'].every(buscarElemento); // false -> NO
['●', '●', '●', '●'].every(buscarElemento); // true  -> SI

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .fill(value, start, end) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
Reemplazar UN VALOR value
en los elementos de un array
desde una start hasta otra end posición (indice)

Reemplazar por circulo '●'...
- Las posiciones 0 y 1 */
['■', '■', '■', '■'].fill('●', 0, 2); // (4) ['●', '●', '■', '■']

// - Todos los elementos A PARTIR de la posicion 2
['■', '■', '■', '■'].fill('●', 2);    // (4) ['■', '■', '●', '●']

// - La ULTIMA -1 posicion
['■', '■', '■', '■'].fill('●', -1); // (4) ['■', '■', '■', '●']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
*/

/* En el array1 hay 3 cuadrados ['■']
y un circulo ['●'] */
const array1 = ['■', '■', '■', '●'];
array1;
// (4) ['■', '■', '■', '●']

/* .filter() Crea un nuevo array2
copiando solamente los cuadrados '■' del array1
y elimina las otras figuras q NO son cuadrados */
const array2 = array1.filter((elemento) => elemento === '■');
array2;
// (3) ['■', '■', '■']

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
