/* eslint-disable no-sparse-arrays */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
// @ts-nocheck

/* Tutorial:
https://youtu.be/sVO65BeJjq8

Documentacion Oficial...
- .entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

- Iteradores y Generadores
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

.entries() devuelve el iterador de un array

.entries() devuelve un array
q contiene en sus elementos pares de [indice, elemento]

.entries() sirve para recorrer (iterar) arrays */

/* ----------------------------------------------------- */

/* Ejemplo 1 - .next().value y .entries()

Documentacion Oficial - .next()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next */

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterador = figuras.entries();
console.log(iterador);
// Object [Array Iterator] {}

console.log(iterador.next().value); // (2) [0, '▲']
console.log(iterador.next().value); // (2) [1, '●']
console.log(iterador.next().value); // (2) [2, '✖']
console.log(iterador.next().value); // (2) [3, '■']

/* ----------------------------------------------------- */

// Ejemplo 2 - for

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterador2 = figuras.entries();
console.log(iterador2);
// Object [Array Iterator] {}

// Recorrer (iterar) array usando .entries(), for of y [i, elemento]
for (let i = 0; i < figuras.length; i++) {
  let array2 = iterador2.next().value;
  let indice = array2[0];
  let elemento = array2[1];

  console.log(`i = ${indice} | elemento = '${elemento}'`);
}
/*
i = 0 | elemento = '▲'
i = 1 | elemento = '●'
i = 2 | elemento = '✖'
i = 3 | elemento = '■'
*/

/* ----------------------------------------------------- */

/* Ejemplo 3 - for of y [i, elemento]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries#iterating_with_index_and_element */

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

// for of y  [i, elemento]
for (const [i, elemento] of figuras.entries()) {
  console.log(`i = ${i} | elemento = '${elemento}'`);
}
/*
i = 0 | elemento = '▲'
i = 1 | elemento = '●'
i = 2 | elemento = '✖'
i = 3 | elemento = '■'
*/

/* ----------------------------------------------------- */

/* Ejemplo 4 - for of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries#using_a_for...of_loop */

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterador3 = figuras.entries();
console.log(iterador3);
// Object [Array Iterator] {}

// for of
for (const elemento of iterador3) {
  console.log(`i = ${elemento[0]} | elemento = '${elemento[1]}'`);
}
/*
i = 0 | elemento = '▲'
i = 1 | elemento = '●'
i = 2 | elemento = '✖'
i = 3 | elemento = '■'
*/

/* ----------------------------------------------------- */

/* Ejemplo 5 - Array Disperso (Sparse Array) y Metodo .entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries#iterating_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

Al recorrer (iterar) arrays dispersos
el metodo .entries() reemplaza las
"ranuras vacías" (empty items) [,,] por undefined */

/* la posicion (indice) 1
del arrayDisperso es una ranura vacia [,,] */
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

// el metodo .entries() genera un iterador de array
const iterador4 = arrayDisperso.entries();
console.log(iterador4);
// Object [Array Iterator] {}

/* al recorrer el arrayDisperso
se imprime undefined en la posicion (indice) 1
porque el elemento de esta posicion es una ranura vacia [,,] */
for (const elemento of iterador4) {
  console.log(`i = ${elemento[0]} | elemento = ${elemento[1]}`);
}
/*
i = 0 | elemento = 1
i = 1 | elemento = undefined
i = 2 | elemento = 3
*/

/* ----------------------------------------------------- */

/* Ejemplo 6 - Recorrer (Iterar) Objeto Literal {} Usando el Metodo de Array [] .entries()
El método .entries() lee la propiedad length de this
y despues accede a cada índice entero

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries#calling_entries_on_non-array_objects */

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
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
*/

const iterador5 = Array.prototype.entries.call(objetoLiteral);
console.log(iterador5);
// Object [Array Iterator] {}

for (const array3 of iterador5) {
  //             propiedad: valor,
  console.log(`${array3[0]} : ${array3[1]}`);
}
/*
0 : a
1 : b
2 : c
*/
