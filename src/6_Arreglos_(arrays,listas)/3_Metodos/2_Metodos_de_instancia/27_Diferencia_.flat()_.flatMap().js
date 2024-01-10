/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
/* eslint-disable indent */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Diferencias y Similitudes Entre .flat() y .flatMap() - Aplanar Array Anidado (Flatten Nested Array)

Tutorial:
https://youtu.be/em_Vh7ZGrnw

Documentación Oficial...
- .flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

- .flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

Diferencia Entre .flat() y .flatMap()...
- DigitalOcean:
https://www.digitalocean.com/community/tutorials/js-flat-flatmap

- FreeCodeCamp:
https://www.freecodecamp.org/news/flat-and-flatmap-javascript-array-methods/

                                   |--------------------------------|----------------------------------------------------------------|
                                   | .flat()                        | .flatMap()                                                     |
|----------------------------------|--------------------------------|----------------------------------------------------------------|
| ¿Sirve para aplanar              | ✓                              | ✓                                                              |
| array anidado?                   |                                |                                                                |
|----------------------------------|--------------------------------|----------------------------------------------------------------|
| ¿Ejecuta el método .map() ?      | X                              | ✓                                                              |
|                                  |                                |                                                                |
| .map() crea un nuevo array2      |                                |                                                                |
| que MODIFICA cada uno            |                                |                                                                |
| de los elementos                 |                                |                                                                |
| del array1 original (existente), |                                |                                                                |
| (MAPEAR array)                   |                                |                                                                |
|----------------------------------|--------------------------------|----------------------------------------------------------------|
| ¿Modifica (muta)                 | X                              | X                                                              |
| el array original?               |                                |                                                                |
|----------------------------------|--------------------------------|----------------------------------------------------------------|
| ¿Crea una nueva copia            | ✓                              | ✓                                                              |
| del array original?              |                                |                                                                |
|----------------------------------|--------------------------------|----------------------------------------------------------------|
| ¿Sirve para las ranuras vacías   | X                              | X                                                              |
| de los array dispersos [,]?      |                                |                                                                |
|----------------------------------|--------------------------------|----------------------------------------------------------------|
| Sintaxis                         | .flat(depth)                   | .flatMap((element, index, array) => { ... })                   |
|----------------------------------|--------------------------------|----------------------------------------------------------------|
| Ejemplo                          | // .flat() aplanar array       | // .flatMap() aplanar array y concatenar                       |
|                                  | ['▲', '●', ['✖', '■']].flat(); | // cada uno de los elementos                                   |
|                                  | // (4) ['▲', '●', '✖', '■']    | // del array con un corazon '❤'                               |
|                                  |                                | ['▲', '●', ['✖'], '■'].flatMap((elemento) => `${elemento}❤`); |
|                                  |                                | // (4) ['▲❤', '●❤', '✖❤', '■❤']                             |
|----------------------------------|--------------------------------|---------------------------------------------------------------|

Aplanar significa que se elimina el array anidado
(array que esta dentro del array)
y se conservan todos los elementos

.flatMap() hace lo siguiente, en este orden:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#return_value
1) Ejecuta .map():
Crea un nuevo array2 que MODIFICA
cada uno de los elementos del array1 original (existente)
(MAPEAR array)

2) Aplana el array2

En cambio, .flat() solamente aplana el array1
y crea una copia array2 aplanada del array1 original
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#return_value

Ambos .flat() y .flatMap()
SOLAMENTE aplanan arrays,
NO sirven para aplanar otros tipos de datos
que NO sean arrays como por ejemplo objetos literales {} */

// .flatMap() es lo mismo que array.map().flat(1)
// en otras palabras: .flatMap() = .flat() + .map()

/* La sintaxis de .flat() es:
.flat(depth)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#syntax

Donde...
- .flat()
Nombre del método

- depth
* Es opcional escribirlo

* Es el numero de dimensiones
del array anidado que se quiere aplanar

* Es la profunidad en la que se aplana el array anidado

* Su valor por defecto es 1 */

/* La sintaxis de .flatMap() es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#syntax */

// Funcion Flecha (Arrow Function):
// .flatMap((element, index, array) => { /* ... */ })

// Función Retrollamada (Callback Function):
// .flatMap(callbackFn, thisArg)

// Función Retrollamada en una Sola Línea (Inline Callback Function):
// .flatMap(function (element, index, array) { /* … */ }, thisArg)

/*
Donde...
- .flatMap()
Nombre del método

- callbackFn
* Funcion que crea un nuevo array2
con el resultado de ejecutar .map()
y aplanar el array1 original (existente)

La funcion .flatMap() tiene los siguientes argumentos:

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1

- array
Es el array para el que se ejecuta .flatMap()

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/* ----------------------------------------------------- */

// Ejemplo 1 - Diferencia Entre .flat() y .flatMap()

/* .flat() aplanar array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#try_it */
['▲', '●', ['✖', '■']].flat();
// (4) ['▲', '●', '✖', '■']

/* .flatMap() aplanar array y concatenar cada uno de los elementos del array con un corazon '❤'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#try_it */
['▲', '●', ['✖'], '■'].flatMap((elemento) => `${elemento}❤`);
// (4) ['▲❤', '●❤', '✖❤', '■❤']

/* ----------------------------------------------------- */

// Ejemplo 2 - Aplanar Array Multi-dimensional usando .flat(Infinity) y .flat(Number.MAX_SAFE_INTEGER)

// .flat(0) imprime exactamente el mismo array SIN aplanarlo:
const bidimensional = [1, 2, [3, 4], [5], 6];
console.log(bidimensional);         // (5) [ 1, 2, [ 3, 4 ], [ 5 ], 6 ]
console.log(bidimensional.flat(0)); // (5) [ 1, 2, [ 3, 4 ], [ 5 ], 6 ]

/* Si uso .flat() ó .flat(1) da el mismo resultado
cuando el array tiene 2 dimensiones: */
console.log(bidimensional.flat());  // (6) [1, 2, 3, 4, 5, 6]
console.log(bidimensional.flat(1)); // (6) [1, 2, 3, 4, 5, 6]

/* El problema es q .flat() y .flat(1)
NO funcionan cuando el array tiene mas de 2 dimensiones: */
const multidimensional = [1, 2, [3, 4, [5, 6], 7, 8]];
console.log(multidimensional);                               // (3) [ 1, 2, [ 3, 4, [ 5, 6 ], 7, 8 ] ]

console.log(multidimensional.flat());                        // (7) [ 1, 2, 3, 4, [ 5, 6 ], 7, 8 ]
console.log(multidimensional.flat(1));                       // (7) [ 1, 2, 3, 4, [ 5, 6 ], 7, 8 ]

/* Para aplanar arrays con cualquier numero de dimensiones, la solucion es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#flattening_nested_arrays */
console.log(multidimensional.flat(Infinity));                // (8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(multidimensional.flat(Number.MAX_SAFE_INTEGER)); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

/* ----------------------------------------------------- */

// Ejemplo 3 - Recorrer (iterar) array usando .flatMap()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras.flatMap((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return elemento;
});
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

console.log(iterar);
// (4) ['▲', '●', '✖', '■']

/* ----------------------------------------------------- */

/* Ejemplo 4:

https://youtu.be/em_Vh7ZGrnw

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#for_adding_and_removing_items_during_a_map

Problema:
1) Crear un array con numeros

2) Eliminar los numeros pares de un array
para q solamente queden los numeros impares
(filtrar array)

3) Multiplicar por 2 los numeros impares

Solucion:
Hay varias formas de solucionar esto */

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);
// (6) [1, 2, 3, 4, 5, 6]

// .filter() y .map()
let imparMultiplicar = numeros.filter((x) => x % 2 !== 0) // Guardar los numeros impares
                             .map((x) => x * 2);          // Multiplicar por 2 los numeros impares
console.log(imparMultiplicar);
// (3) [2, 6, 10]

/* .map() significa:
- if (x % 2 === 0) { return false; } else { return x * 2 }
- Multiplicar por 2 los numeros impares
- Reemplazar por false los numeros pares

.filter() Elimina los elementos q son false,
es decir, los numeros pares */
imparMultiplicar = numeros.map((x) => (x % 2 === 0 ? false : x * 2)) // (6) [ 2, false, 6, false, 10, false ]
                          .filter((x) => x !== false);
console.log(imparMultiplicar);
// (3) [2, 6, 10]

/* .reduce() (MALA PRACTICA)
https://youtu.be/qaGjS7-qWzg */
imparMultiplicar = numeros.reduce((acumulador, elemento) => {
  if (elemento % 2 !== 0) {
    return [...acumulador, elemento * 2];
  }

  return acumulador;
}, []);
console.log(imparMultiplicar);
// (3) [2, 6, 10]

/* .flat(Infinity) y .flatMap()...
1) Funciona con arrays anidados con cualquier numero de dimensiones.

2) Itera una sola vez.

3) Convierte a true los numeros que son pares
y a false los que son impares.

4) Crea mas arrays:
Primero crea arrays anidados y despues aplana el array

5) Multiplica por dos los numeros impares */
imparMultiplicar = numeros.flat(Infinity)
                          .flatMap((x) => (x % 2 === 0 ? [] : [x * 2])); // if (x % 2 === 0) { return [] } else { return [x * 2] }
console.log(imparMultiplicar);
// (3) [2, 6, 10]

/* ----------------------------------------------------- */

/* Ejemplo 5 - Array Disperso (Sparse Array) [,] y Métodos .flat() y .flatMap()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#using_flat_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#using_flatmap_on_sparse_arrays */

/* La posicion (indice) 1
tiene una ranura vacia (empty item) [,]
y es un array anidado */
const arrayDisperso = [1, [,],  3];
//                     0   1  2
//                         ↑

console.log(arrayDisperso);
// (3) [ 1, [ <1 empty item> ], 3 ]

/* Ambos .flat() y .flatMap()
ELIMINAN las ranuras vacias [,] al aplanar el array */
console.log(arrayDisperso.flat(Infinity));                  // (2) [1, 3]
console.log(arrayDisperso.flatMap((elemento) => elemento)); // (2) [1, 3]

/* ----------------------------------------------------- */

/* Ejemplo 6:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#alternative

Alternativa a .flatMap()

Multiplicar por 2 cada uno de los numeros de un array */

const array = [1, 2, 3, 4];
console.log(array);
// (4) [1, 2, 3, 4]

// .flatMap() Esto ...
let porDos = array.flatMap((x) => [x * 2]);
console.log(porDos);
// (4) [2, 4, 6, 8]

// for() {} Es lo mismo q esto:
const longitud = array.length;
console.log(longitud);
// 4

porDos = [];
console.log(porDos);
// []

for (let i = 0; i < longitud; i++) {
  const elemento = array[i] * 2;
  porDos.push(elemento);
}

console.log(porDos);
// (4) [2, 4, 6, 8]

/* ----------------------------------------------------- */

/* Ejemplo 7 - Metodo de Array .flatMap() y Metodo de String .split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap#map_and_flatmap */

const array2 = ['1 2', '', '3 4'];
console.log(array2);
// (3) ['1 2', '', '3 4']

/* .map() y .split()
NO dan el resultado esperado
porq esta separando cada numero en un elemento
pero el resultado es un array anidado */
const mapSplit = array2.map((elemento) => elemento.split(' '));
console.log(mapSplit);
// (3) [ [ '1', '2' ], [ '' ], [ '3', '4' ] ]

/* Este es el resultado esperado:
.flatMap() aplanar array y ejecutar .split()
.split()   convertir cada uno de los string (numeros) del array2 a elementos de un array */
const flatMapSplit = array2.flatMap((elemento) => elemento.split(' '));
console.log(flatMapSplit);
// (5) [ '1', '2', '', '3', '4' ]
