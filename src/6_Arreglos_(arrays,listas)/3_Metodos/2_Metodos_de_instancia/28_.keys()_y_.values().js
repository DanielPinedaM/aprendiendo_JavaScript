/* eslint-disable array-callback-return */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
// @ts-nocheck

/* Documentacion Oficial...
- .keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

- .values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

Iterador de Índices .keys() y Elementos .values() de un Array

La sintaxis de .keys() es:
.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys#syntax

Donde...
- .keys()
Es el nombre del metodo

La sintaxis de .values() es:
.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#syntax

Donde...
- .values()
Es el nombre del metodo */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre .keys() y .values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol */

const array = ['▲', '●', '✖', '■'];
//              0    1    2    3

console.log(array);
// (4) ['▲', '●', '✖', '■']

// Ambos .keys() y .values() devuelven un nuevo objeto array iterador
const indices = array.keys();
console.log(indices);
// Object [Array Iterator] {}

const elementos = array.values();
console.log(elementos);
// Object [Array Iterator] {}

/* La diferencia es que con array.keys() obtengo los INDICES (POSICIONES) del array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys#try_it */

for (const key of indices) {
  console.log(`i=${key}`);
}
/*
i=0
i=1
i=2
i=3
*/

/* en cambio, con array.values() los ELEMENTOS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#iteration_using_for...of_loop */

for (const value of elementos) {
  console.log(`elemento='${value}'`);
}
/*
elemento='▲'
elemento='●'
elemento='✖'
elemento='■'
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Recorrer (iterar) array usando .keys() y .values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#iteration_using_next */

console.log(array);
// (4) ['▲', '●', '✖', '■']

// Índices de array = array.keys()
const keys = array.keys();
console.log(keys);
// Object [Array Iterator] {}

// Elementos de array = array.values()
const values = array.values();
console.log(values);
// Object [Array Iterator] {}

// Recorrer (iterar) array usando .keys() y .values()
for (let i = 0; i < array.length; i++) {
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

/* --------------------------------------------------------------- */

/* Ejemplo 3 - .values() y modificar elementos del array durante la iteración
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#mutations_during_iteration */

const figuras = ['▲', '●', '✖', '■'];
//                ↑

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

// .values() Obtener el iterador con los elementos del array
const iterador = figuras.values();

// Originalmente el elemento del indice 0 es un triangulo '▲'
console.log(figuras[0]);            // '▲'

// Modificar array: reemplazar triangulo '▲' por corazon '♥'
figuras[0] = '♥';
console.log(figuras[0]);            // '♥'

/* Si los elementos del array se modifican,
entonces los elementos de .values() tambien se modifican

A pesar de que primero guarde el iterador
con los elementos originales del array ['▲', '●', '✖', '■']
y despues modifique el array ['♥', '●', '✖', '■']

.values() imprime el elemento '♥' que ha sido modificado */
console.log(iterador.next().value); // '♥' -> Imprimir el primer elemento figuras[0]

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Array Disperso (Sparse Array) [,] y Metodos .keys() y .values()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys#using_keys_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#iterating_sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

/* .keys() EN ARRAY []
array.keys() guarda todos los indices del array
sin importar si tiene o no ranuras vacias [,] */
const arrayKeys = [...arrayDisperso.keys()];
console.log(arrayKeys);
// (3) [0, 1, 2]

/* .keys() EN OBJETO {}
En cambio, Object.keys() NO guarda los indices que tienen una ranura vacia,
en el siguiente array falto el 1 que es la posicion (indice) de la ranura vacia [,] */
const objectKeys = Object.keys(arrayDisperso);
console.log(objectKeys);
// (2) ['0', '2']

/* .values() EN ARRAY []
array.values() Reemplaza las ranuras vacias de los array dispersos [,] por undefined */
const arrayValues = [...arrayDisperso.values()];
console.log(arrayValues);
// (3) [1, undefined, 3]

/* .values() EN OBJETO {}
Object.values() NO guarda los valores del objeto {} que contienen ranuras vacias [,] */
const objectValues = Object.values(arrayDisperso);
console.log(objectValues);
// (2) [1, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 5:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator

array.values() es lo mismo que Array.prototype[@@iterator]() */

console.log(Array.prototype.values === Array.prototype[Symbol.iterator]);
// true

/* --------------------------------------------------------------- */

/* Ejemplo 6:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#reusing_the_iterable

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols

NO se puede iterar mas de una sola vez el mismo array usando .values() */

const array2 = ['a', 'b', 'c'];
console.log(array2);
// (3) ['a', 'b', 'c']

let elementos2 = array2.values();
console.log(elementos2);
// Object [Array Iterator] {}

// La primera vez se imprimen todos los elementos
for (const values of elementos2) {
  console.log(`elemento='${values}'`);
}
/*
elemento='a'
elemento='b'
elemento='c'
*/

// Pero despues de la primera NO se imprime nada
for (const values of elementos2) {
  console.log(`elemento='${values}'`);
}

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Reanudar iteracion de .values()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values#reusing_the_iterable

Si detengo la iteracion con break;
entonces .values() continua iterando
desde el siguiente elemento donde detuve la iteracion */

elementos2 = array2.values();

/* En el primer for of detengo la iteracion en elemento 'b',
el elemento 'b' si se imprime por consola */
for (const values of elementos2) {
  console.log(`elemento='${values}'`);

  if (values === 'b') {
    console.log('iteracion detenida en el elemento b');
    break;
  }
}
/*
elemento='a'
elemento='b'
iteracion detenida en el elemento b
*/

/* Cuando vuelva a iterar otra vez el mismo array,
la iteracion continua desde el elemento que esta despues de la 'b' que es la 'c' */
for (const values of elementos2) {
  console.log(`elemento='${values}'`);
}
// elemento='c'

/* --------------------------------------------------------------- */

/* Ejemplo 8 - Object.keys() y Object.values() en objetoLiteral {}

Tutorial de Midudev:
https://youtu.be/Mz9HSiXSSVU */

const objetoLiteral = {
  uno: 1,
  dos: 2,
  tres: 3,
};

// Object.keys() Recorrer (iterar) las propiedad: valor, de un objetoLiteral {}
Object.keys(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/

// Object.values() Recorrer (iterar) los valores de un objetoLiteral {}
Object.values(objetoLiteral).map((valor) => {
  console.log(valor);
});
/*
1
2
3
*/
