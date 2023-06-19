/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable func-names */
/* eslint-disable max-len */
// @ts-nocheck

/* ------------------------------------------------ */

/*
Array.fromAsync() De Forma Asíncrona, Convertir a Array y Ejecutar una Función para Cada Elemento

Recordatorio:
Ver:
- " 9.4.2.1.1) Diferencias y Similitudes Entre Array.from() y Array.fromAsync() "

- " 9.4.3.1.2) .map() Devolver un Nuevo Array con el Resultado de Ejecutar una Función a Cada Uno de los Elementos de un Array Existente (Mapear Array) "

Array.fromAsync()...
- Documentacion Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync

- ES Proposals:
https://www.proposals.es/proposals/Array.fromAsync

https://github.com/tc39/proposal-array-from-async

- CoreJS:
https://github.com/zloirock/core-js#arrayfromasync

- npm:
https://www.npmjs.com/package/array-from-async

Array.fromAsync() devuelve una promesa cuyo valor de cumplimiento es la nueva copia del array []
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Array.fromAsync() itera de forma similar a for await...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Array.fromAsync() es lo mismo que (alternativa a Array.fromAsync() ):
https://stackoverflow.com/questions/58668361/how-can-i-convert-an-async-iterator-to-an-array

const array = [];
for await (const elemento of asyncElemento) {
  array.push(elemento);
}

Ambos Array.fromAsync() y Promise.all() convierten
un iterable de promesas en una promesa de array.
Las diferencias son:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#description
1) Array.fromAsync() espera CADA UNO DE LOS VALORES producidos por el objeto secuencialmente, en cambio,
Promise.all() espera TODOS los valores en paralelo.

2) Array.fromAsync() itera el iterable perezosamente (lazy load)
y NO recupera el siguiente valor hasta q se obtenga el actual, en cambio,
Promise.all() recupera TODOS los valores por adelantado y los espera a todos.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all */

/* ------------------------------------------------ */

/* Ejemplo 1 - Ejecutar Array.fromAsync() de forma ASINCRONA async
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#array_from_an_async_iterable */

const iterableAsincrono = (async function* () {
  for (let i = 0; i < 5; i++) {
    // Esperar 10 * i milisegundos para q el for continue con la siguiente iteracion
    await new Promise((resolve) => setTimeout(resolve, 10 * i));

    console.log(i);
    /*
    0
    1
    2
    3
    4
    */

    yield i;
  }
}());
// Promise { <state>: "pending" }

Array.fromAsync(iterableAsincrono).then((array) => console.log(array));
// (5) [ 0, 1, 2, 3, 4 ]

console.log(iterableAsincrono);
// AsyncGenerator {  }

/* ------------------------------------------------ */

/* Ejemplo 2 - Ejecutar Array.fromAsync() de forma SINCRONA (NO Asincrona)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#array_from_a_sync_iterable

(x) => x + x
1 + 1 = 2
2 + 2 = 4
3 + 3 = 6 */

const iterableSincrono = Array.fromAsync([1, 2, 3], (x) => x + x);
console.log(iterableSincrono); // (3) [ 2, 4, 6 ]
/*
Promise { <state>: "pending" }
        <state>: "fulfilled"
        <value>: Array(3) [ 2, 4, 6 ]
        <prototype>: Promise.prototype { … }
*/

/* ------------------------------------------------ */

/* Ejemplo 3 - Array.fromAsync() y Promesas Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#array_from_a_sync_iterable_that_yields_promises

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise */

Array.fromAsync(
  new Set([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ]),
).then((array) => console.log(array));
/*
(3) [ 1, 2, 3 ]

Promise { <state>: "fulfilled", <value>: undefined }
        <state>: "fulfilled"
        <value>: undefined
        <prototype>: Promise.prototype { … }
*/

/* ------------------------------------------------ */

/* Ejemplo 5 - Convertir a array [] un objetoLiteral {} q contiene promesas Promise en sus valores:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#array_from_an_array-like_object_of_promises

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise */

const objetoLiteral = {
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
};
console.log(objetoLiteral);
/*
{
  '0': Promise { 1 },
  '1': Promise { 2 },
  '2': Promise { 3 },
  length: 3
}
*/

Array.fromAsync(objetoLiteral).then((array) => console.log(array));
/*
(3) [ 1, 2, 3 ]

Promise { <state>: "fulfilled", <value>: undefined }
        <state>: "fulfilled"
        <value>: undefined
        <prototype>: Promise.prototype { … } */

/* ------------------------------------------------ */

/* Ejemplo 6 - mapFn en Array.fromAsync(arrayLike, mapFn, thisArg)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#using_mapfn

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

mapFn
Es una funcion que sirve para recorrer (iterar) el array,
se ejecuta para cada uno de los elementos del array,
tiene los argumentos element, index, y thisArg,
es OPCIONAL

La entrada y salida de mapFn
son esperadas internamente por Array.fromAsync()

Ejecutar promesa Promise() despues de setTimeout() 100 milisegundos

El parametro v de la funcion valorRetrasado(v)
se devuelve (obtiene) despues de 100 milisegundos  */

function valorRetrasado(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

// Array.fromAsync() espera q se resuelva la promesa de valorRetrasado(v) para seguir ejecutandose
Array.fromAsync(
  // Array q ejecuta funcion asincrona valorRetrasado(v)
  [
    valorRetrasado(1),
    valorRetrasado(2),
    valorRetrasado(3),
  ],
  // Elemento actual del array []
  (elemento) => {
    console.log(elemento);
    /*
    1
    2
    3
    */

    // Multiplicar por 2 el elemento actual del array []
    console.log(`${elemento}*2 = ${elemento * 2}`);
    /*
    1*2 = 2
    2*2 = 4
    3*2 = 6
    */

    return valorRetrasado(elemento * 2);
  },
).then((array) => console.log(array));
// (3) [2, 4, 6]

/* ------------------------------------------------ */

/* Ejemplo 7 - Array.fromAsync() y Promise.all()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#comparison_with_promise.all

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all */

function* hacerAsyncIterable() {
  // for Iterar 5 veces
  for (let i = 0; i < 5; i++) {
    // Esperar 100 milisegundos y despues continuar con la proxima iteracion
    yield new Promise((resolve) => setTimeout(resolve, 100));

    console.log(i);
    /*
    0
    1
    2
    3
    4
    */
  }
}

/*
Funcion (() => { })(); Auto-ejecutable (IIFE) y async asincrona
(async () => {
  // …
})();

Array.fromAsync() demora mas tiempo en terminar de ejecutarse q Promise.all()

Array.fromAsync() espera CADA UNO de los valores producidos por el objeto SECUENCIALMENTE, en cambio,
Promise.all() espera TODOS los valores en PARALELO */

(async () => {
  console.time('Array.fromAsync() tiempo');
  await Array.fromAsync(hacerAsyncIterable());
  console.timeEnd('Array.fromAsync() tiempo');
  // Array.fromAsync() tiempo: 503.610ms

  console.time('Promise.all() tiempo');
  await Promise.all(hacerAsyncIterable());
  console.timeEnd('Promise.all() tiempo');
  // Promise.all() tiempo: 101.728ms
})();

/* ------------------------------------------------ */

/* Ejemplo 8
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync#no_error_handling_for_sync_iterables

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of#iterating_over_sync_iterables_and_generators

Similar a for await...of
si el objeto que se itera es iterable de sincronización
y se produce un error durante la iteración,
return() NO llamará al método del iterador subyacente,
por lo que el iterador no se cerrará. */

function* funcionGeneradoraConPromesasRechazadas() {
  try {
    yield 0;
    yield Promise.reject(3);
  } finally {
    console.log('llamado final');
  }
}

(async () => {
  try {
    await Array.fromAsync(funcionGeneradoraConPromesasRechazadas());
  } catch (e) {
    console.log('atrapar', e);
  }
})();
/*
'atrapar' 3
   -> NO se imprime 'llamado final' <-
*/

/* Para imprimir 'llamado final' y cewrrar el iterador,
se tiene q usar el bucle for...of y dentro un await para cada valor */

(async () => {
  const arr = [];
  try {
    for (const val of funcionGeneradoraConPromesasRechazadas()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log('atrapar', e);
  }
})();
/*
'llamado final'
'atrapar' 3
*/
