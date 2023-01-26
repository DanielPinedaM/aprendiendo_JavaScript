/* eslint-disable array-callback-return */
/* eslint-disable indent */
// @ts-nocheck
/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */

/*
Diferencias y Similitudes Entre .lastIndexOf() y .findLastIndex() -
ULTIMO Número de Posición (Índice) del Elemento Buscado

Documentacion Oficial...
- .lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

- .findLastIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex

Recordatorio:
.lastIndexOf() también sirve para STRING, ver:
...\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia\8_.lastIndexOf().js

                                              |----------------------------------------------------------------------------------------------------------------------------------|
                                              |                                               Método de Array                                                                    |
                                              |------------------------------------------------------|---------------------------------------------------------------------------|
                                              | .lastIndexOf()                                       | .findLastIndex()                                                          |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| Devuelve el ULTIMO                          | ✓                                                    | ✓                                                                         |
| número de posición (índice)                 |                                                      |                                                                           |
| del elemento buscado en un array            |                                                      |                                                                           |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| ¿Qué parámetros se pueden escribir          | Valor                                                | Función                                                                   |
| dentro del par de paréntesis () del método? |                                                      |                                                                           |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| Sintaxis                                    | .lastIndexOf(searchString, position)                 | .findLastIndex((element, index, array) => { ... })                        |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| Valor de retorno return                     | -1                                                   | -1                                                                        |
| cuando NO se encuentra                      | // .lastIndexOf() devuelve -1 porq el elemento       | // .findLastIndex() devuelve -1 porq el elemento                          |
| el elemento buscado                         | // triangulo '▲' NO existe en el array               | // triangulo '▲' NO existe en el array                                    |
|                                             | ['■', '●', '■', '●'].lastIndexOf('▲'); // -1         | ['■', '●', '■', '●'].findLastIndex((elemento) => elemento === '▲'); // -1 |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| Usar para buscar                            | Datos primitivos:                                    | Datos compuestos (objetos):                                               |
| en los elementos de un array                | - ['hola mundo'] Cadenas de texto                    | - [[]] Array anidado                                                      |
| los tipos de datos...                       | - [1, 2, 3] Numero                                   | - [{}] Array de objetos                                                   |
|                                             | - [1n, 2n, 3n] Numero grande (Big Int)               | - [function () {}] Array de funciones                                     |
|                                             | - [true, false] Booleano                             | - [class {}] Array de clases                                              |
|                                             | - [Symbol()] Símbolo (identificador único)           |                                                                           |
|                                             | - [null] Nulo                                        |                                                                           |
|                                             | - [undefined] Indefinido                             |                                                                           |
|                                             | - [NaN] No es un Numero                              |                                                                           |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| ¿Puedo usar el método                       | ✓                                                    | ✓                                                                         |
| para recorrer (iterar) array?               |                                                      |                                                                           |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| ¿Sirve para las ranuras vacías              | X                                                    | X                                                                         |
| de los array dispersos [,]?                 |                                                      |                                                                           |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| ¿Modifica (muta)                            | X                                                    | X                                                                         |
| el array original (existente)?              |                                                      |                                                                           |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| ¿Distingue entre MAYUSCULAS y minúsculas?   | ✓                                                    | ✓                                                                         |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|
| Ejemplo                                     | // Array [] con numeros                              | // .findLastIndex()                                                       |
|                                             | const numeros = [2, 3, 4, 4, 5, 6];                  | // ULTIMO numero de posicion (indice) del elemento MAYOR Q 4              |
|                                             | console.log(numeros);                                | // El argumento es una FUNCIÓN                                            |
|                                             | // (6) [2, 3, 4, 4, 5, 6]                            | posicion = numeros.findLastIndex((elemento) => elemento > 4);             |
|                                             |                                                      | console.log(posicion); // 5                                               |
|                                             | // .lastIndexOf()                                    | // [2, 3, 4, 4, 5, 6]  ARRAY                                              |
|                                             | // ULTIMO numero de posicion (indice) del ELEMENTO 4 | //  0  1  2  3  4  5   POSICIÓN (ÍNDICE)                                  |
|                                             | // El argumento es un VALOR                          | //                 ↑                                                      |
|                                             | let posicion = numeros.lastIndexOf(4);               |                                                                           |
|                                             | console.log(posicion); // 3                          |                                                                           |
|                                             | // [2, 3, 4, 4, 5, 6]  ARRAY                         |                                                                           |
|                                             | //  0  1  2  3  4  5   POSICIÓN (ÍNDICE)             |                                                                           |
|                                             | //           ↑                                       |                                                                           |
|---------------------------------------------|------------------------------------------------------|---------------------------------------------------------------------------|

Ambos .lastIndexOf() y .findLastIndex()
empiezan a contar las posiciones (índices)
al reves, de derecha a izquierda
(desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento)

La sintaxis de .lastIndexOf() es:
.lastIndexOf(searchElement, fromIndex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#syntax

Donde...
- .lastIndexOf()
Es el nombre del metodo

- searchElement
* Es el ELEMENTO que estoy buscando

* Es OBLIGATORIO escribirlo

- fromIndex
* Es un numero

* Es OPCIONAL escribirlo

* Cuando NO se escribe fromIndex entonces .lastIndexOf()
busca el elemento searchElement en TODO el array,
en cambio cuando SI se escribe fromIndex,
.lastIndexOf() devuelve
la ULTIMA aparición del ELEMENTO buscado searchElement
en un INDICE MENOR O IGUAL QUE
el número especificado fromIndex

La sintaxis de .findLastIndex() es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex#syntax */

// Funcion Flecha (Arrow Function):
// .findLastIndex((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function):
// .findLastIndex(callbackFn, thisArg)

// Función Retrollamada en una Sola Línea (Inline Callback Function):
// .findLastIndex(function (element, index, array) { /* … */ }, thisArg)

/*
Donde...
- .findLastIndex()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta
  para cada uno de los elementos del array

* Cuando devuelve verdadero return true
significa que se ha encontrado el elemento buscado

* Cuando devuelve falso return false
significa que NO se encontro el elemento buscado

La funcion .findLastIndex() tiene los siguientes argumentos:

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array

- index
* Numero de posicion (indice) actual del array

* Itera al reves,
empieza en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1
y termina en 0 q es la primera posicion del array

- array
Es el array para el que se ejecuta el metodo (funcion) .findLastIndex()

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn
*/

/* ---------------------------------------------------------------- */

/* Ejemplo 1:

ULTIMO numero de posicion (indice) del circulo '●' */
  ['■', '●', '■', '●'].lastIndexOf('●');                              // 3 -> .lastIndexOf()
  ['■', '●', '■', '●'].findLastIndex((elemento) => elemento === '●'); // 3 -> .findLastIndex()
//  0    1    2    3
//                 ↑

// Devuelve -1 porq el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].lastIndexOf('▲');                              // -1 -> .lastIndexOf()
['■', '●', '■', '●'].findLastIndex((elemento) => elemento === '▲'); // -1 -> .findLastIndex()

/* ---------------------------------------------------------------- */

// Ejemplo 2 - Recorrer (iterar) array usando el metodo .findLastIndex()

const figuras = ['▲', '●', '✖', '■'];
//                0    1    2    3

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras.findLastIndex((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  // aqui NO escribi return
});
/*
i=3 | elemento='■'
i=2 | elemento='✖'
i=1 | elemento='●'
i=0 | elemento='▲'
*/

/* .findLastIndex() devuelve -1
porq NO tiene valor de retorno return */
console.log(iterar);
// -1

/* ---------------------------------------------------------------- */

// Ejemplo 3 - Recorrer (iterar) array usando el metodo .lastIndexOf()

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

for (let i = figuras.length - 1; i >= 0; i--) {
  const j = figuras.lastIndexOf(figuras[i]); // MALA PRACTICA: obtener indice actual con .lastIndexOf()
  console.log(`i=${j} | elemento='${figuras[j]}'`);
}
/*
i=3 | elemento='■'
i=2 | elemento='✖'
i=1 | elemento='●'
i=0 | elemento='▲'
*/

/* ---------------------------------------------------------------- */

// Ejemplo 4 - Diferencia Entre los Metodos de Array .indexOf() y .lastIndexOf()

const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];
//              0    1    2    3   4    5    6    7    8    9
//                   ↑                                      ↑
//          .indexOf()                         .lastIndexOf()

console.log(array);
// (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']

const buscar = 'o';
console.log(buscar);
// 'o'

/* en el ARRAY (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
hay dos ELEMENTOS ['o']
con el metodo .indexOf()
obtengo el numero 1 que es la PRIMERA posicion (indice)
donde esta el ELEMENTO ['o'],
en cambio con .lastIndexOf() obtengo el numero 9
que es la ULTIMA posicion (indice) del elemento ['o'] */

const indicePrimeraAparicion = array.indexOf(buscar);
console.log(`el PRIMER ELEMENTO ['${buscar}'] esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER ELEMENTO ['o'] esta en la posicion (indice) 1

const indiceUltimaAparicion = array.lastIndexOf(buscar);
console.log(`el ULTIMO ELEMENTO ['${buscar}'] esta en la posicion (indice) ${indiceUltimaAparicion}`);
// el ULTIMO ELEMENTO ['o'] esta en la posicion (indice) 9

/* ---------------------------------------------------------------- */

// Ejemplo 5 - Diferencia Entre los Metodos de Array .lastIndexOf() y .findLastIndex()

// Array [] con numeros
const numeros = [2, 3, 4, 4, 5, 6];
console.log(numeros);
// (6) [2, 3, 4, 4, 5, 6]

/* .lastIndexOf()
ULTIMO numero de posicion (indice) del ELEMENTO 4
El argumento es un VALOR */
let posicion = numeros.lastIndexOf(4);
console.log(posicion); // 3
// [2, 3, 4, 4, 5, 6]  ARRAY
//  0  1  2  3  4  5   POSICIÓN (ÍNDICE)
//           ↑

/* .findLastIndex()
ULTIMO numero de posicion (indice) del elemento MAYOR Q 4
El argumento es una FUNCIÓN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex#try_it */
posicion = numeros.findLastIndex((elemento) => elemento > 4);
console.log(posicion); // 5
// [2, 3, 4, 4, 5, 6]  ARRAY
//  0  1  2  3  4  5   POSICIÓN (ÍNDICE)
//                 ↑

/* ---------------------------------------------------------------- */

/* Ejemplo 6 - ¿Cuando usar .lastIndexOf() ó .findLastIndex() ?
https://stackoverflow.com/questions/41443029/difference-between-indexof-and-findindex-function-of-array

.findLastIndex()
En el ARRAY DE OBJETOS [{}]
encontrar el numero del ULTIMO indice
del objeto con el valor 'naranja' */

let frutas = [
//  propiedad: valor,
  { tipo: 'manzana', cantidad: 1 }, // 0
  { tipo: 'naranja', cantidad: 2 }, // 1
  { tipo: 'pera', cantidad: 3 },    // 2
  { tipo: 'naranja', cantidad: 4 }, // 3 -> ULTIMO indice con valor 'naranja'
];
console.log(frutas);
/*
(4) [
     {tipo: 'manzana', cantidad: 1 },
     {tipo: 'naranja', cantidad: 2 },
     {tipo: 'pera', cantidad: 3 },
     {tipo: 'naranja', cantidad: 4 }
    ]
*/

let indice = frutas.findLastIndex((elemento) => elemento.tipo === 'naranja');
console.log(indice);
// 3

/* Con el indice puedo obtener el OBJETO {}
q tiene el valor 'naranja' */
const objeto = frutas[indice];
console.log(objeto);
/*
{
  tipo: 'naranja',
  cantidad: 4
}
*/

/* Y si obtengo el objeto,
tambien puedo obtener el VALOR 'naranja' */
const valor = objeto.tipo;
console.log(valor);
// 'naranja'

/* .lastIndexOf()
En el ARRAY []
encontrar el numero del ULTIMO indice
del elemento 'naranja' */
frutas = ['manzana', 'naranja', 'pera', 'naranja'];
//           0           1        2        3
//                                         ↑
console.log(frutas);
// (4) ['manzana', 'naranja', 'pera', 'naranja']

indice = frutas.lastIndexOf('naranja');
console.log(indice);
// 3

// Con el indice puedo obtener el ELEMENTO 'naranja'
const elemento2 = frutas[indice];
console.log(elemento2);
// 'naranja'

/* ---------------------------------------------------------------- */

/* Ejemplo 7:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#using_lastindexof */

const array2 = ['c', 'a', 'n', 'a', 'l'];
//               0    1    2    3    4
//                              ↑

console.log(array2);
// (5) ['c', 'a', 'n', 'a', 'l']

/* el array2 ['c', 'a', 'n', 'a', 'l']
tiene dos ELEMENTOS ['a']
pero .lastIndexOf() y .findLastIndex()
imprimen la posicion (indice)
del ULTIMO elemento ['a'] que es 3 */

// .lastIndexOf()
let lastIndexOf = array2.lastIndexOf('a');
console.log(lastIndexOf);
// 3

// .findLastIndex()
let findLastIndex = array2.findLastIndex((elemento) => elemento === 'a');
console.log(findLastIndex);
// 3

/* .lastIndexOf('a', 2) significa
1) ['a'] significa buscar el ULTIMO ELEMENTO ['a']

2) 2 significa que solamente se va a buscar el ELEMENTO ['a']
en la parte del array ['c', 'a', 'n']
y NO en el array completo ['c', 'a', 'n', 'a', 'l']
porque son los ELEMENTOS
q tienen una posicion (indice)
MENOR O IGUAL QUE 2

se imprime 1 porque
esta es la ULTIMA posicion (indice)
donde esta el ELEMENTO ['a']
en la parte del array ['c', 'a', 'n'] */
lastIndexOf = array2.lastIndexOf('a', 2);
console.log(lastIndexOf);
// 1

/* El array2 ['c', 'a', 'n', 'a', 'l']
tiene un solo ELEMENTO ['c']
q esta en la posicion (indice) 0 */

// .lastIndexOf()
lastIndexOf = array2.lastIndexOf('c');
console.log(lastIndexOf);
// 0

// .findLastIndex()
findLastIndex = array2.findLastIndex((elemento) => elemento === 'c');
console.log(findLastIndex);
// 0

/* ---------------------------------------------------------------- */

/* Ejemplo 8:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#finding_all_the_occurrences_of_an_element

1) Resolver este mismo ejercicio una vez
usando el método de array .lastIndexOf()
y otra vez usando .findLastIndex()

2) Crear un array1
que contenga elementos repetidos

3) Buscar un elemento en el array1

4) Guardar en un array2
los números de posición (índice)
repetidos del elemento buscado en el array1 */

// .lastIndexOf()

// Array [] con elementos repetidos
const array3 = ['a', 'b', 'a', 'c', 'a', 'd'];
//               0    1    2    3    4    5
//               ↑         ↑         ↑

console.log(array3);
// (6) ['a', 'b', 'a', 'c', 'a', 'd']

// Elemento q quiero buscar en array
const buscar2 = 'a';
console.log(buscar2);
// 'a'

/* Array [] q contiene una lista
con todos los numeros de posiciones (indices)
donde se encuentra el elemento buscado */
let indices = [];
console.log(indices);
// []

// Variable q contiene indices donde se repite el elemento buscado
let indiceActual = array3.lastIndexOf(buscar2);
console.log(indiceActual);
// 4

/* Recorrer (iterar) array

-1 significa q el elemento NO existe en el array */
while (indiceActual !== -1) {
  // .push() agregar nuevo elemento al array
  indices.push(indiceActual);

  /* Buscar indices del elemento q se repite en el array

  Esto...
  if (indiceActual > 0) {
    indiceActual = array3.lastIndexOf(buscar2, indiceActual - 1);
  } else {
    indiceActual = -1;
  }

  Es lo mismo q esto: */
  indiceActual = indiceActual > 0 ? array3.lastIndexOf(buscar2, indiceActual - 1) : -1;
}

console.log(`el ELEMENTO ['${buscar2}'] se repite en las posiciones (indices):`, indices);
/* el ELEMENTO ['a'] se repite en las posiciones (indices): (3) [4, 2, 0]
0: 4
1: 2
2: 0
length: 3
[[Prototype]]: Array(0) */

// .findLastIndex()
indices = [];

array3.findLastIndex((elemento, i) => { // Recorrer (iterar) array
  if (elemento === 'a') {               // Bscar elemento 'a'
    indices.push(i);                    // Guardar en array [] los indices donde se repite el elemento 'a'
  }
});
console.log('el ELEMENTO [a] se repite en las posiciones (indices):', indices);
/* el ELEMENTO ['a'] se repite en las posiciones (indices): (3) [4, 2, 0]
0: 4
1: 2
2: 0
length: 3
[[Prototype]]: Array(0) */

/* ---------------------------------------------------------------- */

/* Ejemplo 9 - Array Disperso (Sparse Array) para Metodos de Array .lastIndexOf() y .findLastIndex()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#using_lastindexof_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex#using_findlastindex_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑
//        .findLastIndex()

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

/* .lastIndexOf() NO sirve para buscar
"ranuras vacías" (empty items) en los array dispersos [,] */
console.log(arrayDisperso.lastIndexOf(undefined)); // -1
console.log(arrayDisperso.lastIndexOf(''));        // -1
console.log(arrayDisperso.lastIndexOf([,]));       // -1

/* En cambio, con .findLastIndex()
al buscar undefined en el arrayDisperso
obtengo la ULTIMA posicion (indice) de la ranura vacia [,] */
console.log(arrayDisperso.findLastIndex((elemento) => elemento === undefined));
// 1

/* ---------------------------------------------------------------- */

/* Ejemplo 10 - Usando .findLastIndex() encontrar la ULTIMA posicion (indice) del numero primo de un array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex#find_the_index_of_the_last_prime_number_in_an_array

Recordatorio:
Hay otros ejemplos similares a este, ver:
- " Ejemplo 7 - Usando .filter() encontrar TODOS los números primos q están en un array: "

- " Ejemplo 6 - Usando .find() encontrar el PRIMER número primo de un array: "

- " Ejemplo 12 - Usando .findIndex() encontrar la PRIMERA posicion (indice) del numero primo de un array: "

- " Ejemplo 6 - Usando .findLast() encontrar el ULTIMO número primo de un array: "

Explicacion:
Un numero primo...
1) Es un numero ENTERO MAYOR Q 1, por lo tanto el 0, 1, los números negativos y decimales NO son primos

2) Es divisible solamente por 1 y por si mismo

Ejemplo:
2 es un numero primo porque:
2 > 1      → 2 es MAYOR Q 1
2 / 1 = 2 → 2 es divisible por 1
2 / 2 = 1 → 2 "                      " si mismo

Problema:
1) Usar .findIndex()

2) Crear una funcion q devuelva el PRIMER numero de posicion (indice)
de un numero primo en un array

3) Devolver -1 en caso de que
NO exista ningun numero primo en el array

Solucion:

Stack Overflow - Funcion para saber cuando un numero si es o no primo:
https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript

esPrimo() funcion flecha para saber cuando un numero si es o no primo
numero    es el numero q quiero saber si es o no primo */
const esPrimo = (numero) => {
  // NO son primos los numeros q NO son enteros (1.1 'hola mundo' ...)
  if (!Number.isInteger(numero)) return false;

  // Iterar desde 2 hasta la raíz cuadrada del número
  for (let i = 2, s = Math.sqrt(numero); i <= s; i++) {
      // El numero NO es primo cuando el indice i es divisible por el numero
      if (numero % i === 0) return false;
  }

  // NO son primos los numeros MENORES a 2 (1, 0, -1, -2 ...)
  return numero > 1; // else { return num > 1; }
};

// .findLastIndex() devuelve -1 porq NO hay numeros primos en el array
console.log([-1, 0, 1, 2.1].findLastIndex(esPrimo)); // -1

/* -1 y 0 NO son primos,
3 y 5 SI son primos,
el ULTIMO .findLastIndex() numero primo es 5,
la posicion del numero (elemento) 5 es 3 */
console.log([-1, 0, 3, 5].findLastIndex(esPrimo)); // 3
//            0  1  2  3
//                     ↑

// Esta es otra forma de llamar la () => {} funcion flecha esPrimo()
console.log(esPrimo(0)); // false -> 0 NO es primo
console.log(esPrimo(2)); // true  -> 2 SI es primo

/* ---------------------------------------------------------------- */

/* Ejemplo 11 - Métodos de Array .indexOf() y .lastIndexOf() en objetoLiteral {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#calling_indexof_on_non-array_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#calling_lastindexof_on_non-array_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex#calling_findlastindex_on_non-array_objects

Ambos metodos .indexOf() y .lastIndexOf()
leen la propiedad length de this
y luego acceden a cada indice entero. */

const objetoLiteral = {
// propiedad: valor,
  0: 'cero', // .indexOf()     PRIMER valor 'cero' en posicion 0
  1: 'uno',
  2: 'cero', // .lastIndexOf() ULTIMO valor 'cero' en posicion 2
};
console.log(objetoLiteral);
/*
{
  0: 'cero',
  1: 'uno',
  2: 'cero'
}
*/

/* Object.keys() convertir a array las propiedades (claves) del objetoLiteral {}
   .length Numero de propiedades (claves) del objetoLiteral {}
   https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/*/
const longitud = Object.keys(objetoLiteral).length;
console.log(longitud);
// 3

// Agregar una nueva propiedad: valor, al objetoLiteral {}
objetoLiteral.length = longitud;
console.log(objetoLiteral);
/*
{
  0: 'cero',
  1: 'uno',
  2: 'cero',
  length: 3
}
*/

/* En el objetoLiteral {} hay dos valores 'cero',
el PRIMERO .indexOf() esta en la posicion (indice) 0 */
console.log(Array.prototype.indexOf.call(objetoLiteral, 'cero'));
// 0

// en cambio, el ULTIMO .lastIndexOf() esta en la posicion 2
console.log(Array.prototype.lastIndexOf.call(objetoLiteral, 'cero'));
// 2

/* Ambos .indexOf() y .lastIndexOf()
devuelven -1 porq 2 NO es un valor del objetoLiteral {} */
console.log(Array.prototype.indexOf.call(objetoLiteral, 2));     // -1 -> .indexOf()
console.log(Array.prototype.lastIndexOf.call(objetoLiteral, 2)); // -1 -> .lastIndexOf()
