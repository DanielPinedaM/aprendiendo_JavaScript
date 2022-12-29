/* eslint-disable array-callback-return */
/* eslint-disable indent */
// @ts-nocheck

/* Documentacion Oficial...
- .findLast()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast

- .findLastIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* ------------------------------------------------------------ */

/* Ejemplo 1

ULTIMO elemento q es un circulo '●' */
  ['■', '●', '■', '●'].findLast((elemento) => elemento === '●'); // '●'
//  0    1    2    3
//                 ↑

// Devuelve undefined porq el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].findLast((elemento) => elemento === '▲'); // undefined

/* ------------------------------------------------------------ */

// Ejemplo 2 - Recorrer (iterar) array usando el metodo .findLast()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

figuras.findLast((elemento, i) => {
    console.log(`i = ${i} | elemento = '${elemento}'`);
});
/*
i = 3 | elemento = '■'
i = 2 | elemento = '✖'
i = 1 | elemento = '●'
i = 0 | elemento = '▲'
*/

/* ------------------------------------------------------------ */
