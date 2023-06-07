/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */

/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// @ts-nocheck

/* Tutorial - Diferencia Entre .every() y .some()
https://youtu.be/sVO65BeJjq8

Documentacion Oficial - .every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

.every() ¿TODOS los elementos del array cumplen con la condición de la función?

.every() determina si todos los elementos del array
cumplen con la condicion de una funcion

.every() devuelve un booleano, true ó false

.every() recorre (itera) cada uno de los elementos del array
y detiene la iteración en la posicion (indice)
en donde encuentra el primer elemento que NO cumple con la condición.

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#syntax

Dentro del par de parentesis ()
del metodo .every() va una funcion */

// Funcion Flecha (arrow function)
// .every((element, index, array) => { /* … */ })

// Funcion retrollamada (callback function)
// .every(callbackFn, thisArg)

// Funcion retrollamada en una sola linea (inline callback function)
// .every(function (element, index, array) { /* … */ }, thisArg)

/* Donde...
- .every()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta
para cada uno de los elementos del array

* Devuelve true cuando
TODOS los elementos del array
cumplen con la condicion de la funcion,
si existe al menos un elemento
que NO cumple con la condicion
entonces devuelve false
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#description

La funcion .every() tiene los siguientes argumentos:

- element
* Es el elemento actual del array

* El elemento element cambia porque el metodo .every() recorre (itera) el array

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1

- array
Es el array para el que se evalua la condicion de la funcion

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/* ---------------------------------------------------------------- */

// Ejemplo 1 - ¿TODOS los elementos del array tienen el mismo elemento buscado?

// Buscar el circulo ['●'] en el array
const buscarElemento = (elemento) => elemento === '●';
console.log(buscarElemento);
// [Function: buscarElemento]

// ¿TODOS los elementos del array son circulo ['●']?
console.log(['▲', '●', '✖', '■'].every(buscarElemento)); // false -> NO
console.log(['●', '●', '●', '●'].every(buscarElemento)); // true  -> SI

/* ---------------------------------------------------------------- */

// Ejemplo 2 - Recorrer (iterar) array usando el método .every()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Para q .every() itere todos los elementos del array,
tiene que devolver verdadero return true,
porque el bucle se detiene cuando retorna falso
q es cuando se encuentra un elemento
q NO cumple con la condicion de la funcion */
const iterar = figuras.every((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
  return true;
});
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

console.log(iterar);
// true

/* ---------------------------------------------------------------- */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#testing_size_of_all_array_elements

menorAcuarenta y mayorAcuarenta
son () => {} funciones flecha en una sola linea
(inline arrow function)
q recorren el array y evaluan una condicion */

const menorAcuarenta = (elemento) => elemento < 40;
console.log(menorAcuarenta);
// [Function: menorAcuarenta]

const mayorAcuarenta = (elemento) => elemento > 40;
console.log(mayorAcuarenta);
// [Function: mayorAcuarenta]

// array

const numeros = [1, 2, 3, 39];
console.log(numeros);
// (4) [39, 1, 2, 3]

// ¿Hay numeros MENOR A CUARENTA en todos los elementos del array?

console.log(numeros.every(menorAcuarenta));
// true

// ¿Hay numeros MAYOR A CUARENTA en todos los elementos del array?

console.log(numeros.every(mayorAcuarenta));
// false

/* ---------------------------------------------------------------- */

// Ejemplo 4 - ¿TODOS los elementos del array son numeros pares o impares?

// array con numeros PARES
const arrayPar = [2, 4, 6];
console.log(arrayPar);
// (3) [2, 4, 6]

// array con numeros IMPARES
const arrayImpar = [1, 3, 5];
console.log(arrayImpar);
// (3) [1, 3, 5]

// array con numeros IMPARES Y PARES
const arrayParImpar = [1, 2, 3, 4, 5, 6];
console.log(arrayParImpar);
// (6) [1, 2, 3, 4, 5, 6]

/* Devuelve true porq
TODOS los elementos del arrayPar [2, 4, 6]
son numeros PARES */
let esPar = arrayPar.every((elemento) => elemento % 2 === 0);
console.log(esPar);
// true

/* Devuelve false porq
en el arrayImpar [1, 3, 4]
NO TODOS los numeros son PARES */
esPar = arrayImpar.every((elemento) => elemento % 2 === 0);
console.log(esPar);
// false

/* Devuelve false porq
en el arrayParImpar [1, 2, 3, 4, 5, 6]
NO TODOS los numeros son PARES */
esPar = arrayParImpar.every((elemento) => elemento % 2 === 0);
console.log(esPar);
// false

/* Devuelve true porq
TODOS los elementos del arrayImpar [1, 3, 4]
son numeros IMPARES */
let esImpar = arrayImpar.every((elemento) => Math.abs(elemento % 2) === 1);
console.log(esImpar);
// true

/* Devuelve false porq
en el arrayPar [2, 4, 6]
NO TODOS los numeros son IMPARES */
esImpar = arrayPar.every((elemento) => Math.abs(elemento % 2) === 1);
console.log(esImpar);
// false

/* Devuelve false porq
NO TODOS los elementos
del arrayParImpar [1, 2, 3, 4, 5, 6]
son IMPARES */
esImpar = arrayParImpar.every((elemento) => Math.abs(elemento % 2) === 1);
console.log(esImpar);
// false

/* ---------------------------------------------------------------- */

/* Ejemplo 5 - ¿El array1 es un Sub-conjunto del array2?
Comprobar si TODOS los elementos del array2 están en el array1

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#check_if_one_array_is_a_subset_of_another_array */

// Funcion q determina si array1 es un sub-conjunto del array2
const esSubconjunto = (array1, array2) => array2.every((element) => array1.includes(element));
console.log(esSubconjunto);
// [Function: esSubconjunto]

// array1 en el q se buscan los elementos
const array1 = [1, 2, 3, 4, 5, 6, 7];
console.log(array1);
// (7) [1, 2, 3, 4, 5, 6, 7]

// array2 q contiene los elementos buscados
let array2 = [5, 7, 6];
console.log(array2);
// (3) [5, 7, 6]

/* Imprime true porq
en el array1 [1, 2, 3, 4, 5, 6, 7]
SI estan TODOS los elementos del array2 [5, 7, 6]

El orden de los elementos NO importa */
console.log(esSubconjunto(array1, array2));
// true

array2 = [5];
console.log(array2);
// [5]

/* Imprime true porq
el array1 [1, 2, 3, 4, 5, 6, 7]
contiene el elemento [5] del array2 */
console.log(esSubconjunto(array1, array2));
// true

array2 = [5, 8, 7];
console.log(array2);
// (3) [5, 8, 7]

/* Imprime false porq
el array2 [5, 8, 7] contiene el elemento [8]
q NO esta en el array1 [1, 2, 3, 4, 5, 6, 7] */
console.log(esSubconjunto(array1, array2));
// false

/* ---------------------------------------------------------------- */

/* Ejemplo 6 - Array Disperso (Sparse Array) y Método .every()
El metodo .every()
NO ejecuta la funcion callbackFn
para las ranuras vacias (empty items)
de los arrays dispersos (sparse array) [,,]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#using_every_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2));         // true

console.log([2, , 2].every((x) => x === [,]));       // false
console.log([2, , 2].every((x) => x === [, ,]));     // false

/* ---------------------------------------------------------------- */

/* Ejemplo 7 - Metodo .every() cuando se modifica el array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#affecting_initial_array_modifying_appending_and_deleting */

// -----------------------------
// MODIFICAR elementos del array
// -----------------------------

let array3 = [1, 2, 3, 4];
console.log(array3);
// (4) [1, 2, 3, 4]

/* Normalmente cuando se recorre (itera) un array,
el bucle se ejecuta para cada uno de los elementos del array .length */
console.log(array3.length);
// 4

// Recorrer (iterar) array usando el bucle for
for (let i = 0; i < array3.length; i++) {
  const elemento = array3[i];
  console.log(elemento);
}
/*
1
2
3
4
*/

// .every()
array3.every((elemento, i, array3) => {
  // Restarle uno -- al siguiente elemento [i + 1] del array3
  array3[i + 1]--;

  /* Imprimir:
  - array3
  - Posicion (indice)
  - El elemento actual q se esta recorriendo (iterando) */
  console.log(`[${array3}][${i}] -> ${elemento}`);

  /* Retornar:
  - true  si el elemento actual ES MENOR Q         2 (1, 0, -1, -2...)
  - false "                   " ES MAYOR O IGUAL Q 2 (2, 3, 4...) */
  return elemento < 2;
});

/* El bucle se ejecuta 3 veces,
pero ha ejecutado 2 iteraciones SIN NINGUNA modificación

iteracion 1: [1,1,3,4][0] -> 1
iteracion 2: [1,1,2,4][1] -> 1
iteracion 3: [1,1,2,3][2] -> 2 */

// array3 despues de ser modificado
console.log(array3);
// (4) [1, 1, 2, 3]

// -----------------------------------------
// .push() AGREGAR NUEVOS elementos al array
// -----------------------------------------
array3 = [1, 2, 3];
console.log(array3);
// (4) [1, 2, 3, 4]

array3.every((elemento, i, array3) => {
  // .push() agrega un nuevo elemento en la ULTIMA posicion (indice) del array
  array3.push('NUEVO ELEMENTO');
  console.log(`[${array3}][${i}] -> ${elemento}`);
  return elemento < 4;
});

/* El bucle se ejecuta 3 veces,
incluso después de agregar nuevos elementos al array .push()

iteracion 1: [1, 2, 3, 'NUEVO ELEMENTO'][0]                                     -> 1
iteracion 2: [1, 2, 3, 'NUEVO ELEMENTO', 'NUEVO ELEMENTO'][1]                   -> 2
iteracion 3: [1, 2, 3, 'NUEVO ELEMENTO', 'NUEVO ELEMENTO', 'NUEVO ELEMENTO'][2] -> 3 */

// array3 despues de agregarle 3 nuevos elementos
console.log(array3);
// (6) [1, 2, 3, 'NUEVO ELEMENTO', 'NUEVO ELEMENTO', 'NUEVO ELEMENTO']

// -------------------------
// .pop() ELIMINAR elementos del array
// -------------------------
array3 = [1, 2, 3, 4];
console.log(array3);
// (4) [1, 2, 3, 4]

array3.every((elemento, i, array3) => {
  // .pop() elimina el elemento q esta en la ULTIMA posicion (indice)
  array3.pop();
  console.log(`[${array3}][${i}] -> ${elemento}`);
  return elemento < 4;
});

/* El bucle se ejecuta solo 2 veces,
porq los elementos restantes se eliminan .pop()

iteracion 1: [1,2,3][0] -> 1
iteracion 2: [1,2][1]   -> 2 */

// array3 despues de eliminar los 2 ultimos elementos
console.log(array3);
// (2) [1, 2]

/* ---------------------------------------------------------------- */

/* Ejemplo 8 - Metodo de Array [] .every() en ObjetoLiteral {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every#calling_every_on_non-array_objects */

const objetoLiteral = {
// propiedad: valor,
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
};
console.log(objetoLiteral);
/*
{
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
*/

/* Imprime true porq
TODOS los valores del objetoLiteral {}
son de tipo string (texto) ''

Si hubiera AL MENOS UNO o mas valores
en el objetoLiteral {}
que NO fueran string,
entonces se imprimiria false */
const every = Array.prototype.every.call(objetoLiteral, (x) => typeof x === 'string');
console.log(every);
// true

/* ---------------------------------------------------------------- */

/* Ejemplo 9 - Array Vacio [] y Método .every()
El metodo .every()
SIEMPRE devuelve true
para CUALQUIER condicion
q se evalue con un array vacio [] */

[].every((elemento) => elemento);                            // true -> SIN condicionales

[].every((elemento) => elemento === '');                     // true -> '' string (texto)
[].every((elemento) => elemento === 'hola mundo');           // true

[].every((elemento) => elemento > 0);                        // true -> Number() numero
[].every((elemento) => elemento < 0);                        // true
[].every((elemento) => elemento === 0);                      // true

[].every((elemento) => elemento === true);                   // true -> Boolean() booleano
[].every((elemento) => elemento === false);                  // true

[].every((elemento) => elemento === null);                   // true -> null Nulo

[].every((elemento) => elemento === undefined);              // true -> undefined Indefinido

[].every((elemento) => elemento === Number.isNaN(elemento)); // true -> NaN No es un Numero

[].every((elemento) => elemento === []);                     // true -> [] Array

[].every((elemento) => elemento === {});                     // true -> {} Objeto literal

[].every((elemento) => elemento === function () {});         // true -> function Funcion

[].every((elemento) => elemento === class {});               // true -> class Clase
