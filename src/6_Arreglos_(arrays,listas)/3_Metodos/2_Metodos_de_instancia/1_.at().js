/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial - .at()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

Tutorial:
https://youtu.be/gSSjhChWYK4

.at() Obtener (Acceder) en Especifico a un ELEMENTO q se Encuentra en una Posición (Índice)

Ejemplo - Formas de Obtener (Acceder) al ULTIMO elemento
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at#comparing_methods

Con todas estas formas
puedo obtener el ULTIMO elemento,
la diferencia es que:
1) .at() tiene una sintaxis mas limpia,
   es la forma mas corta de escribirlo

2) .at(), [] y .length devuelven un string 'D'
   en cambio
   .slice(-1) devuelve un array ['D'] */

const array = ['A', 'B', 'C', 'D'];

// longitud del array
const numeroElementos = array.length;
console.log(numeroElementos); // 4

// 'D' es el ultimo elemento del array
console.log(array.at(-1));               // 'D'   -> .at()        devuelve un string
console.log(array[numeroElementos - 1]); // 'D'   -> [] y .length "                "
console.log(array.slice(-1));            // ['D'] -> .slice()     devuelve un array
