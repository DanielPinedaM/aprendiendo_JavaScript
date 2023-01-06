/* eslint-disable array-callback-return */
/* eslint-disable indent */
// @ts-nocheck

/* Documentacion Oficial - .findLastIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex */

/* ------------------------------------------------------------ */

/* Ejemplo 1

ULTIMO numero de posicion (indice) del circulo '●' */
  ['■', '●', '■', '●'].findLastIndex((elemento) => elemento === '●'); // 3
//  0    1    2    3
//                 ↑

// -1 significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].findLastIndex((elemento) => elemento === '▲'); // -1

/* ------------------------------------------------------------ */

// Ejemplo 2 - Recorrer (iterar) array usando el metodo .findLastIndex()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

figuras.findLastIndex((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});
/*
i=3 | elemento='■'
i=2 | elemento='✖'
i=1 | elemento='●'
i=0 | elemento='▲'
*/

/* ------------------------------------------------------------ */
