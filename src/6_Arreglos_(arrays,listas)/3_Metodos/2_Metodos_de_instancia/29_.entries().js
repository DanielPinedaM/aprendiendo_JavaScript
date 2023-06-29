/* eslint-disable array-callback-return */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Tutorial:
https://youtu.be/sVO65BeJjq8

Documentacion Oficial...
- .entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

- Iteradores y Generadores
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

.entries() devuelve el iterador de un array

.entries() Iterador de un Array que Contiene [i, elemento]

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

  console.log(`i=${indice} | elemento='${elemento}'`);
}
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

/* ----------------------------------------------------- */

/* Ejemplo 3 - for of y [i, elemento]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries#iterating_with_index_and_element */

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

// for of y  [i, elemento]
for (const [i, elemento] of figuras.entries()) {
  console.log(`i=${i} | elemento='${elemento}'`);
}
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
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

/* Ejemplo 6 - Object.entries() en objetoLiteral {}

Tutorial de Midudev:
https://youtu.be/Mz9HSiXSSVU */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};

/* Object.entries() Convertir el objetoLiteral {} a array [],
                    el array contiene pares de [propiedad, valor]

.map()              Devolver un Nuevo Array con el Resultado de Ejecutar una Función
                    a Cada Uno de los Elementos de un Array Existente (Mapear Array) */
Object.entries(objetoLiteral).map((entry) => {
  const [propiedad, valor] = entry;
  console.log(`${propiedad} ➜ ${valor}`);
});
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/
