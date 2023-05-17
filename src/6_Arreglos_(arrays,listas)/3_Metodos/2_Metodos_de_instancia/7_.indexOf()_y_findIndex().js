/* eslint-disable no-self-compare */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
/* eslint-disable indent */

/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
// @ts-nocheck

/*
Diferencias y Similitudes Entre .indexOf() y .findIndex() -
PRIMER Número de Posición (Índice) del Elemento Buscado

Documentacion Oficial...
- .indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

- .findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Recordatorio:
.indexOf() también sirve para STRING, ver:
...\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia\7_.indexOf().js

Stack Overflow - Diferencia Entre .indexOf() y .findIndex()
https://stackoverflow.com/questions/41443029/difference-between-indexof-and-findindex-function-of-array

                                              |------------------------------------------------------------------------------------------------------------------------------|
                                              |                                               Método de Array                                                                |
                                              |------------------------------------------------------|-----------------------------------------------------------------------|
                                              | .indexOf()                                           | .findIndex()                                                          |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| Devuelve el PRIMER                          | ✓                                                    | ✓                                                                     |
| número de posición (índice)                 |                                                      |                                                                       |
| del elemento buscado en un array            |                                                      |                                                                       |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| ¿Qué parámetros se pueden escribir          | Valor                                                | Función                                                               |
| dentro del par de paréntesis () del método? |                                                      |                                                                       |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| Sintaxis                                    | .indexOf(searchElement, fromIndex)                   | .findIndex((element, index, array) => { })                            |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| Valor de retorno return                     | -1                                                   | -1                                                                    |
| cuando NO se encuentra                      | // .indexOf() devuelve -1 porq el elemento           | // .findIndex() devuelve -1 porq el elemento                          |
| el elemento buscado                         | // triangulo '▲' NO existe en el array               | // triangulo '▲' NO existe en el array                                |
|                                             | ['■', '●', '■', '●'].indexOf('▲'); // -1             | ['■', '●', '■', '●'].findIndex((elemento) => elemento === '▲'); // -1 |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| Usar para buscar                            | Datos primitivos:                                    | Datos compuestos (objetos):                                           |
| en los elementos de un array                | - ['hola mundo'] Cadenas de texto                    | - [[]] Array anidado                                                  |
| los tipos de datos...                       | - [1, 2, 3] Numero                                   | - [{}] Array de objetos                                               |
|                                             | - [1n, 2n, 3n] Numero grande (Big Int)               | - [function () {}] Array de funciones                                 |
|                                             | - [true, false] Booleano                             | - [class {}] Array de clases                                          |
|                                             | - [Symbol()] Símbolo (identificador único)           |                                                                       |
|                                             | - [null] Nulo                                        |                                                                       |
|                                             | - [undefined] Indefinido                             |                                                                       |
|                                             | - [NaN] No es un Numero                              |                                                                       |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| ¿Puedo usar el método                       | ✓                                                    | ✓                                                                     |
| para recorrer (iterar) array?               |                                                      |                                                                       |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| ¿Sirve para las ranuras vacías              | X                                                    | X                                                                     |
| de los array dispersos [,]?                 |                                                      |                                                                       |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| ¿Modifica (muta)                            | X                                                    | X                                                                     |
| el array original (existente)?              |                                                      |                                                                       |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| ¿Distingue entre MAYUSCULAS y minúsculas?   | ✓                                                    | ✓                                                                     |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|
| Ejemplo                                     | // .indexOf()                                        | // .findIndex()                                                       |
|                                             | // PRIMER numero de posicion (indice) del ELEMENTO 3 | // PRIMER numero de posicion (indice) del elemento MAYOR Q 3          |
|                                             | // El argumento es un VALOR                          | // el argumento de una FUNCIÓN                                        |
|                                             | console.log(numeros.indexOf(3)); // 2                | console.log(numeros.findIndex(elemento) => elemento > 3)); // 4       |
|                                             | // [1, 2, 3, 3, 4, 5]  ARRAY                         | // [1, 2, 3, 3, 4, 5]  ARRAY                                          |
|                                             | //  0  1  2  3  4  5   POSICIÓN (ÍNDICE)             | //  0  1  2  3  4  5   POSICIÓN (ÍNDICE)                              |
|                                             | //        ↑                                          | //              ↑                                                     |
|---------------------------------------------|------------------------------------------------------|-----------------------------------------------------------------------|

Ambos .indexOf() y .findIndex()
empiezan a contar las posiciones (índices)
desde 0 de izquierda a derecha

0 es la PRIMERA   posición (índice)
1 “     ” SEGUNDA “               ”

La sintaxis de .indexOf() es:
.indexOf(searchElement, fromIndex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#syntax

Donde...
- .indexOf()
Es el nombre del metodo

- searchElement
Es el ELEMENTO que estoy buscando en el array,
es OBLIGATORIO escribirlo

- fromIndex
* Es un número

* Es OPCIONAL escribirlo

* Cuando NO se escribe fromIndex
entonces su valor por defecto es 0
y .indexOf() busca el carácter searchElement en TODO el array,
en cambio cuando SI se escribe fromIndex,
.indexOf() devuelve el numero de
la PRIMERA aparición del ELEMENTO especificado
en un INDICE MAYOR O IGUAL QUE el número especificado fromIndex

* SI fromIndex < 0
Si fromIndex es negativo,
entonces los números negativos
cuentan al revés de atrás (ultima)
hacia adelante (primera) posición

* SI fromIndex >= array.length
Si fromIndex
es mayor o igual que la longitud del array
entonces se devuelve -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#return_value

La sintaxis de .findIndex() es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#syntax */

// Funcion Flecha (Arrow Function):
// .findIndex((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function):
// .findIndex(callbackFn, thisArg)

// Función Retrollamada en una Sola Línea (Inline Callback Function):
// .findIndex(function (element, index, array) { /* … */ }, thisArg)

/*
Donde...
- .findIndex()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta
  para cada uno de los elementos del array

* Cuando devuelve verdadero return true
significa que se ha encontrado el elemento buscado

* Cuando devuelve falso return false
significa que NO se encontro el elemento buscado

La funcion .findIndex() tiene los siguientes argumentos:

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1

- array
Es el array para el que se ejecuta el metodo (funcion) .findIndex()

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/* ---------------------------------------------------------------- */

/* Ejemplo 1:

PRIMER numero de posicion (indice) del circulo '●' */
  ['■', '●', '■', '●'].indexOf('●');                              // 1 -> .indexOf()
  ['■', '●', '■', '●'].findIndex((elemento) => elemento === '●'); // 1 -> .findIndex()
//  0    1    2    3
//       ↑

// Devuelve -1 porq el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].indexOf('▲');                              // -1 -> .indexOf()
['■', '●', '■', '●'].findIndex((elemento) => elemento === '▲'); // -1 -> .findIndex()

/* ---------------------------------------------------------------- */

// Ejemplo 2 - Recorrer (iterar) array usando el metodo .findIndex()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras.findIndex((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  // aqui NO escribi return
});
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

/* .findIndex() devuelve -1
porq NO tiene valor de retorno return */
console.log(iterar);
// -1

/* ---------------------------------------------------------------- */

// Ejemplo 3 - Recorrer (iterar) array usando el metodo .indexOf()

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

for (const elemento of figuras) {
  const i = figuras.indexOf(elemento); // MALA PRACTICA: obtener indice actual con .indexOf()
  console.log(`i=${i} | elemento='${elemento}'`);
}
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

/* ---------------------------------------------------------------- */

// Ejemplo 4 - Diferencia Entre los Metodos de Array .indexOf() y .findIndex()

// Array [] con numeros
const numeros = [1, 2, 3, 3, 4, 5];
console.log(numeros);
// (6) [1, 2, 3, 3, 4, 5]

/* .indexOf()
PRIMER numero de posicion (indice) del ELEMENTO 3
El argumento es un VALOR */
console.log(numeros.indexOf(3)); // 2
// [1, 2, 3, 3, 4, 5]  ARRAY
//  0  1  2  3  4  5   POSICIÓN (ÍNDICE)
//        ↑

/* .findIndex()
PRIMER numero de posicion (indice) del elemento MAYOR Q 3
El argumento es una FUNCIÓN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#try_it */
console.log(numeros.findIndex((elemento) => elemento > 3)); // 4
// [1, 2, 3, 3, 4, 5]  ARRAY
//  0  1  2  3  4  5   POSICIÓN (ÍNDICE)
//              ↑

/* ---------------------------------------------------------------- */

/* Ejemplo 5 - ¿Cuando usar .indexOf() ó .findIndex() ?
https://stackoverflow.com/questions/41443029/difference-between-indexof-and-findindex-function-of-array */

/* .findIndex()
En el ARRAY DE OBJETOS [{}]
encontrar el numero del PRIMER indice
del objeto con el valor 'naranja' */

let frutas = [
//   propiedad: valor,
   { tipo: 'manzana', cantidad: 1 }, // 0
   { tipo: 'naranja', cantidad: 2 }, // 1 -> PRIMER indice con valor 'naranja'
   { tipo: 'pera', cantidad: 3 },    // 2
   { tipo: 'naranja', cantidad: 4 }, // 3
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

let indice = frutas.findIndex((elemento) => elemento.tipo === 'naranja');
console.log(indice);
// 1

/* Con el indice puedo obtener el OBJETO {}
q tiene el valor 'naranja' */
const objeto = frutas[indice];
console.log(objeto);
/*
{
  tipo: 'naranja',
  cantidad: 2
}
*/

/* Y si obtengo el objeto,
tambien puedo obtener el VALOR 'naranja' */
const valor = objeto.tipo;
console.log(valor);
// 'naranja'

/* .indexOf()
En el ARRAY []
encontrar el numero del PRIMER indice
del elemento 'naranja' */
frutas = ['manzana', 'naranja', 'pera', 'naranja'];
//           0           1        2        3
//                       ↑
console.log(frutas);
// (4) ['manzana', 'naranja', 'pera', 'naranja']

indice = frutas.indexOf('naranja');
console.log(indice);
// 1

// Con el indice puedo obtener el ELEMENTO 'naranja'
const elemento2 = frutas[indice];
console.log(elemento2);
// 'naranja'

/* ---------------------------------------------------------------- */

/* Ejemplo 6:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#using_indexof

Creo un nuevo array [] */
const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];
//              0    1    2    3   4    5    6    7    8    9
//                   ↑

/* Obtener la posicion (indice)
de la PRIMERA aparicion del ELEMENTO ['o']

en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
hay dos ELEMENTOS ['o']
pero .indexOf() y .findIndex() SOLAMENTE imprimen la posicion (indice) del PRIMER elemento ['o'] */

let buscar = 'o';

// .indexOf()
let indicePrimeraAparicion = array.indexOf(buscar);
console.log(`el PRIMER elemento ['${buscar}'] esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER elemento ['o'] esta en la posicion (indice) 1

// .findIndex()
indicePrimeraAparicion = array.findIndex((elemento) => elemento === buscar);
console.log(`el PRIMER elemento ['${buscar}'] esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER elemento ['o'] esta en la posicion (indice) 1

/* obtener la posicion (indice)
de la SEGUNDA aparicion del ELEMENTO ['o']

indicePrimeraAparicion + 1 =
= 1 + 1
= 2 */

// .indexOf()
const indiceSegundaAparicion = array.indexOf(buscar, (indicePrimeraAparicion + 1)); //
console.log(`el SEGUNDO elemento ['${buscar}'] esta en la posicion (indice) ${indiceSegundaAparicion}`);
// el SEGUNDO elemento ['o'] esta en la posicion (indice) 9

/* ---- */

/* la PRIMERA posicion (indice) es el 0
en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
el PRIMER ELEMENTO es ['h'] */

buscar = 'h';

// .indexOf()
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.indexOf(buscar)}`);
// el ELEMENTO ['h'] esta en la posicion (indice): 0

// .findIndex()
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.findIndex((elemento) => elemento === buscar)}`);
// el ELEMENTO ['h'] esta en la posicion (indice): 0

/* ---- */

// ELEMENTO en blanco ''

buscar = '';

// .indexOf()
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.indexOf(buscar)}`);
// el ELEMENTO [''] esta en la posicion (indice): 4

/* .indexOf(searchElement, fromIndex)
El valor por defecto de fromIndex es 0
que significa buscar el ELEMENTO en todo el string,
obtengo el mismo resultado */
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.indexOf(buscar, 0)}`);
// el ELEMENTO [''] esta en la posicion (indice): 4

// .findIndex()
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.findIndex((elemento) => elemento === buscar)}`);
// el ELEMENTO [''] esta en la posicion (indice): 4

/* ---- */

/* Cuando el ELEMENTO buscado NO existe en el ARRAY
entonces se imprime -1

se imprime -1 porque
en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
NO existe el ELEMENTO ['W'] */

buscar = 'W';

// .indexOf()
console.log(`el ELEMENTO ['${buscar}'] NO existe en el ARRAY [${array}]: ${array.indexOf(buscar)}`);
// el ELEMENTO ['W'] NO existe en el ARRAY [h,o,l,a,,m,u,n,d,o]: -1

// .findIndex()
console.log(`el ELEMENTO ['${buscar}'] NO existe en el ARRAY [${array}]: ${array.findIndex((elemento) => elemento === buscar)}`);
// el ELEMENTO ['W'] NO existe en el ARRAY [h,o,l,a,,m,u,n,d,o]: -1

/* ---- */

/* cuando NO se escribo nada
dentro del par de parentesis () ...

1) .indexOf() imprime -1 */
console.log(array.indexOf()); // -1
console.log([].indexOf());    // -1

// 2) .findIndex() da error
// console.log(array.findIndex());
// ERROR -> undefined is not a function

/* 3) .findIndex() Si busco un array vacio []
devuelve -1 porque en JS NO existen dos array iguales */
console.log([].findIndex((elemento) => elemento === [])); // -1
console.log([] === []);                                   // false

/* ---- */

/* En .indexOf() cuando la posicion (indice)
es MAYOR al numero de ELEMENTOS del ARRAY
se imprime -1

array.indexOf(buscar, 999) imprime -1 porque
el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
tiene 10 ELEMENTOS .length y 999 es MAYOR QUE 10 */

buscar = 'h';

console.log(`el array [${array}] tiene ${array.length} ELEMENTOS`);
// el array [h,o,l,a,,m,u,n,d,o] tiene 10 ELEMENTOS

console.log(`fromIndex MAYOR: ${array.indexOf(buscar, 999)}`);
// fromIndex MAYOR: -1

/* ---- */

/* En .indexOf() cuando la posicion (indice) fromIndex
es MENOR (NEGATIVO) al numero de caracteres del ARRAY
se imprime 0

array.indexOf(buscar, -999) imprime 0 porque
el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
tiene 10 ELEMENTOS y -999 es MENOR QUE 10 */

console.log(`fromIndex MENOR: ${array.indexOf(buscar, -999)}`);
// fromIndex MENOR: 0

/* ---- */

/* Ambos .indexOf() y .findIndex()
distinguen entre MAYUSCULAS y minusculas,
cuando NO se encuentra el ELEMENTO en el ARRAY se imprime -1

como el ELEMENTO ['H'] MAYUSCULA
no esta en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
que tiene ['h'] minuscula entonces se imprime -1 */

buscar = 'H';

// .indexOf()
console.log(`en el ARRAY [${array}] NO existe el ELEMENTO ['${buscar}']: ${array.indexOf(buscar)}`);
// en el ARRAY [h,o,l,a,,m,u,n,d,o] NO existe el ELEMENTO ['H']: -1

// .findIndex()
console.log(`en el ARRAY [${array}] NO existe el ELEMENTO ['${buscar}']: ${array.findIndex((elemento) => elemento === buscar)}`);
// en el ARRAY [h,o,l,a,,m,u,n,d,o] NO existe el ELEMENTO ['H']: -1

/* ---------------------------------------------------------------- */

/* Ejemplo 7:
Saber si un ELEMENTO existe o no en un ARRAY

saber si en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
existe el ELEMENTO ['o']

Recordatorio:
La forma mas facil de solucionar esto es usar .includes(),
pero para aprender aqui lo explicare con .indexOf() y .findIndex() */

console.log(array);
// (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']

buscar = 'o';

// .indexOf()
let indexOf = array.indexOf(buscar);
console.log(indexOf);
// 1

if (indexOf !== -1) {
  console.log('en el ARRAY', array, `SI existe el ELEMENTO [${buscar}]`);
} else { // === -1
  console.log('en el ARRAY', array, `NO existe el ELEMENTO [${buscar}]`);
}
// en el ARRAY (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] SI existe el ELEMENTO [o]

// .findIndex()
let findIndex = array.findIndex((elemento) => elemento === buscar);
console.log(findIndex);
// 1

if (findIndex !== -1) {
  console.log('en el ARRAY', array, `SI existe el ELEMENTO [${buscar}]`);
} else { // === -1
  console.log('en el ARRAY', array, `NO existe el ELEMENTO [${buscar}]`);
}
// en el ARRAY (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] SI existe el ELEMENTO [o]

/* ---------------------------------------------------------------- */

/* Ejemplo 8:
Contar el numero de veces q aparece un ELEMENTO en un ARRAY

Contar el numero de veces
q esta el ELEMENTO ['o']
en el ARRAY (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] */

console.log(array);  // (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
console.log(buscar); // 'o'
let contador = 0;

// .indexOf()
indexOf = array.indexOf(buscar);
console.log(indexOf);
// 1

while (indexOf !== -1) {
  contador++;
  indexOf = array.indexOf(buscar, (indexOf + 1));
}

console.log(`el ELEMENTO ['${buscar}'] se repite ${contador} veces en el ARRAY`, array);
/* el ELEMENTO ['o'] se repite 2 veces en el ARRAY
(10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] */

// .findIndex()
contador = 0;

array.findIndex((elemento) => {
  if (elemento === buscar) {
    contador++;
  }

  /*  .findIndex() Itera todo el array
  porque NO escribi valor de retorno return */
});

console.log(`el ELEMENTO ['${buscar}'] se repite ${contador} veces en el ARRAY`, array);
/* el ELEMENTO ['o'] se repite 2 veces en el ARRAY
(10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] */

/* ---------------------------------------------------------------- */

/* Ejemplo 9:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#finding_all_the_occurrences_of_an_element

1) Resolver este mismo ejercicio una vez
usando el método de array .indexOf()
y otra vez usando .findIndex()

2) Crear un array1
que contenga elementos repetidos

3) Buscar un elemento en el array1

4) Guardar en un array2
los números de posición (índice)
repetidos del elemento buscado en el array 1 */

const array2 = ['a', 'b', 'a', 'c', 'a', 'd'];
//               0    1    2    3    4    5
//               ↑         ↑         ↑

let indices = [];
buscar = 'a';

// .indexOf()
indexOf = array2.indexOf(buscar);
console.log(indexOf);
// 0

while (indexOf !== -1) {
  indices.push(indexOf);
  indexOf = array2.indexOf(buscar, (indexOf + 1));
}

console.log(`el ELEMENTO ['${buscar}'] se repite en las posiciones (indices):`, indices);
/* el ELEMENTO ['a'] se repite en las posiciones (indices): (3) [0, 2, 4]
0: 0
1: 2
2: 4
length: 3
[[Prototype]]: Array(0) */

// .findIndex()
indices = [];

array2.findIndex((elemento, i) => {
  if (elemento === 'a') {
    indices.push(i);
  }

  /*  .findIndex() Itera todo el array
  porque NO escribi valor de retorno return */
});
console.log(`el ELEMENTO ['${buscar}'] se repite en las posiciones (indices):`, indices);
/* el ELEMENTO ['a'] se repite en las posiciones (indices): (3) [0, 2, 4]
0: 0
1: 2
2: 4
length: 3
[[Prototype]]: Array(0) */

/* ---------------------------------------------------------------- */

/* Ejemplo 10:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#finding_if_an_element_exists_in_the_array_or_not_and_updating_the_array

1) Resolver este mismo ejercicio una vez
usando el método de array .indexOf()
y otra vez usando .findIndex()

2) Crear una funcion para lo siguiente...

3) Buscar un elemento en un array

4) En caso de q el elemento NO exista en el array,
entonces agregar un nuevo elemento al array
e imprimir mensaje 'nuevo elemento agregado al array'

5) Si el elemento ya existe entonces imprimir mensaje
'el elemento NO se puede agregar al array porq ya existe' */

// .indexOf()
function actualizarArray(array4, nuevoElemento) {
  indexOf = array4.indexOf(nuevoElemento);

  if (indexOf === -1) { // === -1 el elemento buscado NO existe en el array
    array4.push(nuevoElemento);
    console.log(`Nuevo elemento ${nuevoElemento} agregado al array:`, array4);
  } else { // !== -1 el elemento buscado SI existe en el array
    console.log(`El elemento ${nuevoElemento} NO se puede agregar al array porq ya existe`);
  }
}

let array4 = ['potato', 'tomato', 'chillies', 'green-pepper'];
console.log(array4);
// (4) ['potato', 'tomato', 'chillies', 'green-pepper']

actualizarArray(array4, 'spinach');
/* Nuevo elemento spinach agregado al array:
(5) ['potato', 'tomato', 'chillies', 'green-pepper', 'spinach']
0: "potato"
1: "tomato"
2: "chillies"
3: "green-pepper"
4: "spinach"
length: 5
[[Prototype]]: Array(0) */

actualizarArray(array4, 'spinach');
// El elemento spinach NO se puede agregar al array porq ya existe

// .findIndex()
array4 = ['potato', 'tomato', 'chillies', 'green-pepper'];
console.log(array4);
// (4) ['potato', 'tomato', 'chillies', 'green-pepper']

function actualizarArray2(array4, nuevoElemento) {
  findIndex = array4.findIndex((elemento) => elemento === nuevoElemento);

  if (findIndex === -1) {
    array4.push(nuevoElemento);
    console.log(`Nuevo elemento ${nuevoElemento} agregado al array:`, array4);
  } else {
    console.log(`El elemento ${nuevoElemento} NO se puede agregar al array porq ya existe`);
  }
}

actualizarArray2(array4, 'spinach');
/* Nuevo elemento spinach agregado al array:
(5) ['potato', 'tomato', 'chillies', 'green-pepper', 'spinach']
0: "potato"
1: "tomato"
2: "chillies"
3: "green-pepper"
4: "spinach"
length: 5
[[Prototype]]: Array(0) */

actualizarArray2(array4, 'spinach');
// El elemento spinach NO se puede agregar al array porq ya existe

/* ---------------------------------------------------------------- */

/* Ejemplo 11 - Array Disperso (Sparse Array) para Metodos .indexOf() y .findIndex()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#using_indexof_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#using_findindex_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

Ambos .indexOf() y .findIndex():
- NO buscan "ranuras vacías" (empty items) en los array dispersos [,]

- Reemplazan las ranuras vacías (empty items) [,] por undefined */

// La posicion (indice) 1 tiene una ranura vacia [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

// .indexOf()
for (const elemento of arrayDisperso) {
  const i = arrayDisperso.indexOf(elemento);
  console.log(`i=${i} | elemento=${elemento}`);
}
/*
i=0  | elemento=1
i=-1 | elemento=undefined -> i=-1 el elemento buscado ( ranura vacia [,] ) NO existe en el array
i=2  | elemento=3
*/

console.log(arrayDisperso.indexOf(undefined)); // -1

// .findIndex()
arrayDisperso.findIndex((elemento, i) => {
  console.log(`i=${i} | elemento=${elemento}`);
});
/*
i=0 | elemento=1
i=1 | elemento=undefined -> i=1 PRIMER numero de posicion (indice) con ranura vacia [,]
i=2 | elemento=3
*/

findIndex = arrayDisperso.findIndex((elemento) => elemento === undefined);
console.log(findIndex); // 1

/* ---------------------------------------------------------------- */

/* Ejemplo 12 - Usando .findIndex() encontrar la PRIMERA posicion (indice) del numero primo de un array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#find_the_index_of_a_prime_number_in_an_array

Recordatorio:
Hay otros ejemplos similares a este, ver:
- " Ejemplo 7 - Usando .filter() encontrar TODOS los números primos q están en un array: "

- " Ejemplo 6 - Usando .find() encontrar el PRIMER número primo de un array: "

- " Ejemplo 10 - Usando .findLastIndex() encontrar la ULTIMA posicion (indice) del numero primo de un array: "

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

// .findIndex() devuelve -1 porq NO hay numeros primos en el array
console.log([-1, 0, 1, 2.1].findIndex(esPrimo));
// -1

/* -1 y 0 NO son primos,
3 y 5 SI son primos,
el .findIndex() PRIMER numero primo es 3,
la posicion del numero (elemento) 3 es 2 */
console.log([-1, 0, 3, 5].findIndex(esPrimo)); // 2
//            0  1  2  3
//                  ↑

// Esta es otra forma de llamar la () => {} funcion flecha esPrimo()
console.log(esPrimo(0)); // false -> 0 NO es primo
console.log(esPrimo(2)); // true  -> 2 SI es primo

/* ---------------------------------------------------------------- */

/* Ejemplo 13:

Recordatorio:
Este Ejemplo 13 lo escribi en otra seccion, ver:

Ruta:
...\aprendiendo_JS\src\6_Arreglos_(arrays,listas)\3_Metodos\2_Metodos_de_instancia\3_.lastIndexOf().js

Nombre del ejemplo:
" Ejemplo 6 - Métodos de Array .indexOf() y .lastIndexOf() en objetoLiteral {} " */
