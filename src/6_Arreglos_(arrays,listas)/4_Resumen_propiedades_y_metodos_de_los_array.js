/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-spaces */
// @ts-nocheck
/* eslint-disable no-unused-expressions */

/* -------------------------------------------------------------- */

/* Propiedades y metodos de los array...
- Tutorial:
https://youtu.be/LYF4FeJyccc

- Documentacion Oficial
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#static_methods */

/* -------------------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .length █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

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
//                 ↑

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

¿el dato (variable) ES UN ARRAY? */
Array.isArray([]); // true  -> [] array
Array.isArray({}); // false -> {} objeto literal

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Recorrer (Iterar) Array y Ejecutar una Función para Cada Elemento */
['▲', '●', '✖', '■'].forEach((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* Aqui se escribe el codigo q se ejecuta
  para cada uno de los elementos del array,
  .forEach() NO retorna return ningun valor */
});
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

En el array1 original (existente) hay 4 cuadrados ['■', '■', '■', '■']
pero .map() devuelve una copia array2 en el q se
MODIFICA CADA UNO de los elementos del array1 original
concatenando (uniendo) los cuadrados con un triangulo '■▲' */
['■', '■', '■', '■'].map((elemento) => `${elemento}▲`);
// (4) ['■▲', '■▲', '■▲', '■▲']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

En el array1 original (existente) hay 3 cuadrados
y un circulo ['■', '■', '■', '●']
pero despues de ejecutar .filter()
se crea un nuevo array2
q solamente copia los cuadrados '■' del array1
y ELIMINA las otras figuras q NO son cuadrados */
['■', '■', '■', '●'].filter((elemento) => elemento === '■');
// (3) ['■', '■', '■']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

.reduce() concatenar (unir)
cada uno de los elementos
del array (4) ['▲', '●', '✖', '■']
en un solo string '▲●✖■' (REDUCIR array) */
['▲', '●', '✖', '■'].reduce((acumulador, elemento) => acumulador + elemento, '');
// '▲●✖■' -> .reduce() itera de Izquierda a Derecha

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

.reduceRight() hace lo mismo q .reduce(),
la unica diferencia es el orden de iteracion */
['▲', '●', '✖', '■'].reduceRight((acumulador, elemento) => acumulador + elemento, '');
// '■✖●▲' -> .reduceRight() itera Derecha a Izquierda

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .find() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

Primer Elemento que Coincide con la Condición de la Función

Devolver el PRIMER elemento q sea un circulo '●' */
['■', '●', '■', '●'].find((elemento) => elemento === '●'); // '●'
//     ↑

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLast() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast

ULTIMO elemento q es un circulo '●' */
  ['■', '●', '■', '●'].findLast((elemento) => elemento === '●'); // '●'
//                 ↑

// undefined significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].findLast((elemento) => elemento === '▲'); // undefined

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .indexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

Recibe como parametro dentro del par de parentesis () un VALOR

PRIMER numero de posición (indice) del ELEMENTO buscado

Posicion del PRIMER circulo '●' */
  ['■', '●', '■', '●'].indexOf('●'); // 1
//  0    1    2    3
//       ↑

// -1 significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].indexOf('▲'); // -1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Recibe como parametro dentro del par de parentesis () una FUNCIÓN

PRIMER numero de posicion (indice) del circulo '●' */
  ['■', '●', '■', '●'].findIndex((elemento) => elemento === '●'); // 1
//  0    1    2    3
//       ↑

// -1 significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].findIndex((elemento) => elemento === '▲'); // -1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .lastIndexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

Recibe como parametro dentro del par de parentesis () un VALOR

ULTIMO numero de posición (indice) del ELEMENTO buscado

ULTIMO numero de posicion (indice) del circulo '●'  */
  ['■', '●', '■', '●'].lastIndexOf('●'); // 3
//  0    1    2    3
//                 ↑

// -1 significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].lastIndexOf('▲'); // -1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLastIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex

Recibe como parametro dentro del par de parentesis () una FUNCIÓN

ULTIMO numero de posicion (indice) del circulo '●' */
  ['■', '●', '■', '●'].findLastIndex((elemento) => elemento === '●'); // 3
//  0    1    2    3
//                 ↑

// -1 significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].findLastIndex((elemento) => elemento === '▲'); // -1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .every() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

¿TODOS los elementos del array cumplen con la CONDICION de la FUNCION? */
const buscarElemento = (elemento) => elemento === '●';

// ¿TODOS los elementos del array son circulo ['●']?
['▲', '●', '✖', '■'].every(buscarElemento); // false -> NO
['●', '●', '●', '●'].every(buscarElemento); // true  -> SI

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .some() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

¿AL MENOS UN SOLO elemento del array cumple con la CONDICION de la FUNCION? */
const buscarElemento2 = (elemento) => elemento === '●';

// ¿Hay AL MENOS UN SOLO circulo ['●'] o mas en el array ?
['▲', '●', '✖', '■'].some(buscarElemento2);   // true  ->  SI
['●', '●', '●', '●'].some(buscarElemento2);   // true  ->  SI
['✖', '✖', '✖', '✖'].some(buscarElemento2);  // false ->  NO

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .includes() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

Buscar ELEMENTOS en cualquier parte de un array

¿El elemento circulo '●' existe en el array?, true significa que si */
console.log(['■', '●', '■', '■'].includes('●')); // true
//                 ↑

// false significa q el elemento triangulo '▲' NO existe en el array
console.log(['■', '●', '■', '■'].includes('▲'));
// false

/* Buscar el circulo '●' A PARTIR de la posicion (indice) 1 hacia adelante (1, 2, 3),
devuelve true porq en el array ['■', '●', '■', '■']
el circulo '●' esta en esta parte ['●', '■', '■']  */
console.log(['■', '●', '■', '■'].includes('●', 1)); // true
//            0    1    2    3
//                 ↑

/* Los indices negativos sirven para buscar en las ultimas posiciones,
buscar el circulo '●' A PARTIR de la posicion (indice) -3 hacia adelante (-3, -2, -1) */
console.log(['■', '●', '■', '■'].includes('●', -3)); // true
//           -4   -3   -2   -1
//                 ↑

// false porq el circulo '●' NO esta en posiciones 2 NI 3
console.log(['■', '●', '■', '■'].includes('●', 2)); // false
//            0    1    2    3

// false porq el circulo '●' NO esta en posiciones -2 NI -1
console.log(['■', '●', '■', '■'].includes('●', -2)); // false
//           -4   -3   -2   -1

/*
 ▄▄▄▄▄▄▄▄▄
 █ []    █
 █ .at() █
 ▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

obtener (acceder) en especifico a un ELEMENTO q se encuentra en una posicion (indice)

0 PRIMER elemento */
  ['▲', '●', '✖', '■'][0];        // '▲' -> string
//  0    1    2    3
//  ↑

// -1 ULTIMO elemento
   ['▲', '●', '✖', '■'].at(-1);    // '■' -> string
   ['▲', '●', '✖', '■'].slice(-1); // ['■'] -> array
//  -4   -3   -2    -1  -> Indices negativos

// -1 significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].findIndex((elemento) => elemento === '▲'); // -1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .slice() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

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

Copiar array y pegarlo dentro del mismo array

Copiar posicion (indice) 2,
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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .fill(value, start, end) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

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

// undefined significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].find((elemento) => elemento === '▲'); // undefined

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .concat() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

Concatenar (unir) array

Lo q esta dentro del parentesis de .concat()
puede ser cualquier tipo de dato */
['▲'].concat(['●', '✖'], ['■'], 'hola mundo', 1, true, false);
// (8) ['▲', '●', '✖', '■', 'hola mundo', 1, true, false]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

Iterador de un array */
['▲', '●', '✖', '■'].entries(); // Object [Array Iterator] {}

// Recorrer (iterar) array usando .entries(), for of y  [i, elemento]
for (const [i, elemento] of ['▲', '●', '✖', '■'].entries()) {
  console.log(`i = ${i} | elemento = '${elemento}'`);
}
/*
i = 0 | elemento = '▲'
i = 1 | elemento = '●'
i = 2 | elemento = '✖'
i = 3 | elemento = '■'
*/
