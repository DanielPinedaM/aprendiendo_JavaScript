/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-expressions */
// @ts-nocheck

/* -------------------------------------------------------------- */

/* Propiedades y metodos de los array...
- Tutorial:
https://youtu.be/LYF4FeJyccc

- Documentacion Oficial:
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
Array.of('1', '2', '3', 4, 5);
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
https://youtu.be/FMubfnVET74

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
https://youtu.be/fCvuOyVXUUQ

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
https://youtu.be/qaGjS7-qWzg

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
https://youtu.be/en5f0sYFJZE

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
https://stackoverflow.com/questions/41443029/difference-between-indexof-and-findindex-function-of-array

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
https://stackoverflow.com/questions/41443029/difference-between-indexof-and-findindex-function-of-array

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
https://youtu.be/sVO65BeJjq8

¿TODOS los elementos del array cumplen con la CONDICION de la FUNCION? */
const buscarElemento = (elemento) => elemento === '●';

// ¿TODOS los elementos del array son circulo ['●']?
['▲', '●', '✖', '■'].every(buscarElemento); // false -> NO
['●', '●', '●', '●'].every(buscarElemento); // true  -> SI

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .some() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/sVO65BeJjq8

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
['■', '●', '■', '■'].includes('●'); // true
//     ↑

// false significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '■'].includes('▲');
// false

/* Buscar el circulo '●' A PARTIR de la posicion (indice) 1 hacia adelante (1, 2, 3),
devuelve true porq en el array ['■', '●', '■', '■']
el circulo '●' esta en esta parte ['●', '■', '■']  */
  ['■', '●', '■', '■'].includes('●', 1); // true
//  0    1    2    3
//       ↑

/* Los indices negativos sirven para buscar en las ultimas posiciones,
buscar el circulo '●' A PARTIR de la posicion (indice) -3 hacia adelante (-3, -2, -1) */
  ['■', '●', '■', '■'].includes('●', -3); // true
//  -4   -3   -2   -1
//       ↑

// false porq el circulo '●' NO esta en posiciones 2 NI 3
  ['■', '●', '■', '■'].includes('●', 2); // false
//  0    1    2    3

// false porq el circulo '●' NO esta en posiciones -2 NI -1
  ['■', '●', '■', '■'].includes('●', -2); // false
// -4   -3   -2   -1

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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .shift() y .pop() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop */

let array = [1, 2, 3, 4, 5];

// Eliminar y devolver el .shift() PRIMER
const primero = array.shift();
console.log(primero); // 1
console.log(array);   // (4) [2, 3, 4, 5]

// y .pop() ULTIMO elemento del array
array = [1, 2, 3, 4, 5];

const ultimo = array.pop();
console.log(ultimo);  // 5
console.log(array);   // (4) [1, 2, 3, 4]

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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .unshift() y .push() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push */

const circulos = ['●', '●'];
console.log(circulos);        // (2) ['●', '●']
console.log(circulos.length); // 2

// Agregar nuevo elemento al .unshift() PRINCIPIO
const unshift = circulos.unshift('❤️');
console.log(unshift);         // 3
console.log(circulos);        // (3) ['❤️', '●', '●']

/*  y .push() FINAL del array
y devolver la nueva longitud .length del array */
const push = circulos.push('❤️');
console.log(push);            // 4
console.log(circulos);        // (4) ['❤️', '●', '●', '❤️']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .splice(start, deleteCount, item1, item2, itemN) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

https://youtu.be/luXkteqv0I8

Eliminar, Reemplazar o Agregar Elemento de Array
INICIANDO en una Posición (Índice) en Especifico */

// Array original (existente) que modificare despues con .splice()
let figuras = ['▲', '●', '✖', '■'];
//              0    1    2    3   -> Posiciones (indices) POSITIVOS
//             -4    -3   -2   -1  -> "                  " NEGATIVOS

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (SI escribo start) Y (NO escribo deleteCount) Y (NO escribo item1, item2, itemN)
Cuando escribo un solo numero dentro del par de parentesis de .splice()
entonces se eliminan elementos

Eliminar los elementos que estan A PARTIR del indice 2
HASTA el ULTIMO elemento del array,
SI se incluye el indice 2 y el ultimo elemento del array,
se eliminan elementos de indices 2 y 3

Cuando del array (4) ['▲', '●', '✖', '■'] elimino (2) ['✖', '■']
quedan los elementos (2) ['▲', '●']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_all_elements_starting_from_index_2 */
console.log(figuras.splice(2)); // (2) ['✖', '■']
console.log(figuras);           // (2) ['▲', '●']

// Hacer otra vez que el array tenga todas las figuras
figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * start < 0
Si start es negativo,
entonces los números negativos
cuentan al revés de atrás (ultima)
hacia adelante (primera) posición

Eliminar los elementos que estan A PARTIR del indice -2
HASTA el ultimo elemento del array,
SI se incluye el indice -2 y el ultimo elemento del array,
se eliminan elementos de indices -2 y -1

Cuando del array (4) ['▲', '●', '✖', '■'] elimino (2) ['✖', '■']
quedan los elementos (2) ['▲', '●'] */
console.log(figuras.splice(-2)); // (2) ['✖', '■']
console.log(figuras);            // (2) ['▲', '●']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Eliminar UN SOLO elemento q esta en un indice en especifico

Del array (4) ['▲', '●', '✖', '■']
eliminar ['✖'] que esta en el indice -2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_from_index_-2 */
console.log(figuras.splice(-2, 1)); // ['✖']
console.log(figuras);               // (3) ['▲', '●', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = Infinity)
Eliminar los elementos q estan DESDE el indice 1,
hasta el ULTIMO elemento del array,
SI se incluye el indice 1
y el ultimo elemento del array,
se eliminan los elementos de los indices 1, 2 y 3

Cuando del array (4) ['▲', '●', '✖', '■']
elimino (3) ['●', '✖', '■']
queda el elemento ['▲'] */
console.log(figuras.splice(1, Infinity)); // (3) ['●', '✖', '■']
console.log(figuras);                     // ['▲']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = Number.MAX_SAFE_INTEGER)
Obtengo el mismo resultado con Number.MAX_SAFE_INTEGER */
console.log(figuras.splice(1, Number.MAX_SAFE_INTEGER)); // (3) ['●', '✖', '■']
console.log(figuras);                                    // ['▲']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 1) Y (NO escribo item1, item2, itemN)
Eliminar UN elemento q esta en un indice en especifico

Cuando del array (4) ['▲', '●', '✖', '■']
elimino el elemento circulo ['●'] q esta en el indice 1
quedan los elementos (3) ['▲', '✖', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_3 */
console.log(figuras.splice(1, 1)); // ['●']
console.log(figuras);              // (3) ['▲', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 2) Y (NO escribo item1, item2, itemN)
Eliminar DOS elementos DESDE el indice 1,
se eliminan elementos de indices 1 y 2

Cuando del array (4) ['▲', '●', '✖', '■']
elimino (2) ['●', '✖']
quedan los elementos (2) ['▲', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_2_elements_starting_from_index_2 */
console.log(figuras.splice(1, 2)); // (2) ['●', '✖']
console.log(figuras);              // (2) ['▲', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 0) Y (escribo item1, item2, itemN)
.splice() devuelve un array vacio []
cuando agrego un nuevo elemento en un indice en especifico

Cuando al array (4) ['▲', '●', '✖', '■']
le agrego un elemento corazon '❤️' en el indice 1,
el array con el nuevo elemento agregado es (5) ['▲', '❤️', '●', '✖', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_0_zero_elements_before_index_2_and_insert_drum */
console.log(figuras.splice(1, 0, '❤️')); // []
console.log(figuras);                    // (5) ['▲', '❤️', '●', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Agregar 2 nuevos elementos DESDE un indice en especifico,
agregar dos corazones '❤️', '❤️' DESDE el indice 1

Cuando al array (4) ['▲', '●', '✖', '■']
le agrego dos corazones '❤️', '❤️' en los indices 1 y 2,
el array con los nuevos elementos agregados es (5) ['▲', '❤️', '❤️' '●', '✖', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_0_zero_elements_before_index_2_and_insert_drum_and_guitar */
console.log(figuras.splice(1, 0, '❤️', '❤️')); // []
console.log(figuras);                          // (5) ['▲', '❤️', '❤️' '●', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 1) Y (escribo item1, item2, itemN)
Reemplazar UN SOLO elemento que esta en un indice en especifico
por otro(s) nuevo(s) elemento(s)

Reemplazar el elemento circulo ['●'] q esta en el indice 1
por UN elemento corazon '❤️'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_2_and_insert_trumpet */
console.log(figuras.splice(1, 1, '❤️')); // ['●']
console.log(figuras);                    // (4) ['▲', '❤️', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Reemplazar el elemento circulo ['●'] q esta en el indice 1
por DOS corazones '❤️', '❤️' */
console.log(figuras.splice(1, 1, '❤️', '❤️')); // ['●']
console.log(figuras);                          // (5) ['▲', '❤️', '❤️', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 2) Y (escribo item1, item2, itemN)
Reemplazar DOS elementos A PARTIR del indice 1

Reemplazar los dos elementos (2) ['●', '✖']
por dos corazones '❤️', '❤️'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_2_elements_from_index_0_and_insert_parrot_anemone_and_blue */
console.log(figuras.splice(1, 2, '❤️', '❤️')); // (2) ['●', '✖']
console.log(figuras);                          // (4) ['▲', '❤️', '❤️', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (start = 0) ó (start <= -array.length)
TODOS los elementos se eliminan del array ( vaciar array [] )
cuando sucede alguno de estos casos:
- .splice(0)

- start es MENOR O IGUAL Q
el numero de elementos del array .length pero NEGATIVO */
console.log(figuras.splice(0));  // (4) ['▲', '●', '✖', '■']
console.log(figuras);            // []

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);            // (4) ['▲', '●', '✖', '■']

console.log(figuras.length);     // 4 -> longitud array, -4 ó numero menor a -4 (-4, -5, -6...) vacia el array []
console.log(figuras.splice(-4)); // (4) ['▲', '●', '✖', '■']
console.log(figuras);            // []

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);            // (4) ['▲', '●', '✖', '■']

/* .splice() devuelve un array vacio []
y NO modifica el array original (existente)
cuando sucede alguno de estos casos:
- .splice() NO escribo nada dentro del par de parentesis

- (deleteCount <= 0) Y (NO escribo item1, item2, itemN)
  (deleteCount es 0 ó un numero negativo) Y (NO escribo item1, item2, itemN)

- (start >= array.length)
start es MAYOR O IGUAL Q
el numero de elementos del array .length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#return_value */
console.log(figuras.splice());     // []
console.log(figuras);              // (4) ['▲', '●', '✖', '■']

console.log(figuras.splice(1, 0)); // []
console.log(figuras);              // (4) ['▲', '●', '✖', '■']

console.log(figuras.length);       // 4 -> longitud array, 4 ó un numero mayor a 4 (4, 5, 6...) NO modifica el array original
console.log(figuras.splice(4));    // []
console.log(figuras);              // (4) ['▲', '●', '✖', '■']

/* * (start >= array.length) Y (escribo deleteCount) Y (escribo item1, item2, itemN)
SI se cumplen TODAS las siguientes condiciones:
- start es MAYOR O IGUAL Q
el numero de elementos del array .length

- escribo deleteCount,
NO importa q numero sea deleteCount

- escribo uno o mas nuevos elementos a agregar item1, item2, itemN

Entonces se agregan nuevos elementos AL FINAL del array

.length longitud array,
para q se agreguen nuevos elementos
start tiene q ser 4 ó un numero mayor a 4 (4, 5, 6) */
console.log(figuras.length);                     // 4

// Agregar 2 nuevos elementos corazones '❤️', '❤️' AL FINAL del array
console.log(figuras.splice(4, 999, '❤️', '❤️')); // []
console.log(figuras);                            // (6) ['▲', '●', '✖', '■', '❤️', '❤️']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reverse() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

Invertir (voltear) el orden de los elementos del array

.reverse():
MODIFICAR el array original (existente) (MUtabilidad) */
let array2 = [1, 2, 3];
console.log(array2); // (3) [1, 2, 3]

array2.reverse();
console.log(array2); // (3) [3, 2, 1] -> SI se modifica el array original

// Hacer otra vez q array2 tenga numeros del 1 al 3
array2 = [1, 2, 3];
console.log(array2); // (3) [1, 2, 3]

/* Sintaxis de propagación:
Crear una COPIA invertida (volteada) del array */
const copia = [...array2].reverse();
console.log(copia);  // (3) [3, 2, 1]

// NO se modifica el array original (INmutabilidad)
console.log(array2); // (3) [1, 2, 3]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .sort() y .sort().reverse() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/YIZWGn13RCE */

// .sort() Ordenar de menor a mayor (ascendente)
[2, 4, 3, 5, 1].sort((a, b) => a - b);                                           // (5) [1, 2, 3, 4, 5]
['b', 'd', 'c', 'e', 'a'].sort((a, b) => a.localeCompare(b, 'es-ES'));           // (5) ['a', 'b', 'c', 'd', 'e']

// .sort().reverse() de mayor a menor (descendente) array con números y letras
[2, 4, 3, 5, 1].sort((a, b) => a - b).reverse();                                 // (5) [5, 4, 3, 2, 1]
['a', 'b', 'c', 'd', 'e'].sort((a, b) => a.localeCompare(b, 'es-ES')).reverse(); // (5) ['e', 'd', 'c', 'b', 'a']

/*
 ▄▄▄▄▄▄▄▄▄
 █ []    █
 █ .at() █
 ▀▀▀▀▀▀▀▀▀
https://youtu.be/gSSjhChWYK4

Obtener (acceder) en especifico a un ELEMENTO q se encuentra en una posicion (indice)

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
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .flat() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/em_Vh7ZGrnw

Solamente aplana array */
['▲', '●', ['✖', '■']].flat(Infinity);                // (4) ['▲', '●', '✖', '■']
['▲', '●', ['✖', '■']].flat(Number.MAX_SAFE_INTEGER); // (4) ['▲', '●', '✖', '■']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .flatMap() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/em_Vh7ZGrnw

Primero ejecuta .map()
y despues aplana array

Aplanar array y concatenar cada uno de los elementos del array con un corazon '❤' */
['▲', '●', ['✖'], '■'].flatMap((elemento) => `${elemento}❤`);
// (4) ['▲❤', '●❤', '✖❤', '■❤']

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .join() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Convertir de Array a String (Texto) */
['▲', '●', '✖', '■'].join();    // '▲,●,✖,■' -> NO escribir nada dentro del par de parentesis de .join()
['▲', '●', '✖', '■'].join(','); // '▲,●,✖,■' -> es lo mismo q separar el string por una coma ,

['▲', '●', '✖', '■'].join('');  // '▲●✖■'    -> .join('') caracter en blanco
['▲', '●', '✖', '■'].join(' '); // '▲ ● ✖ ■' -> .join(' ') un espacio en blanco
['▲', '●', '✖', '■'].join('-'); // '▲-●-✖-■' -> .join('-') guion
['▲', '●', '✖', '■'].join(1);   // '▲1●1✖1■' -> El separador tipo numero Number() se convierte a texto String()

['▲'].join();    // '▲'
['▲'].join('');  // '▲'
['▲'].join(' '); // '▲'
['▲'].join('-'); // '▲'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

Iterador de un array que contiene [i, elemento] */
['▲', '●', '✖', '■'].entries();
// Object [Array Iterator] {}

// Recorrer (iterar) array
for (const [i, elemento] of ['▲', '●', '✖', '■'].entries()) {
  console.log(`i=${i} | elemento='${elemento}'`);
}
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .keys() y .values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

Iterador de Índices .keys() y Elementos .values() de un Array */

// Índices = array.keys()
const keys = ['▲', '●', '✖', '■'].keys();
console.log(keys);
// Object [Array Iterator] {}

// Elementos = array.values()
const values = ['▲', '●', '✖', '■'].values();
console.log(values);
// Object [Array Iterator] {}

// Recorrer (iterar) array usando .keys() y .values()
for (let i = 0; i < ['▲', '●', '✖', '■'].length; i++) {
  const indices = keys.next().value;
  const elementos = values.next().value;

  console.log(`i=${indices} | elemento='${elementos}'`);
}
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/
