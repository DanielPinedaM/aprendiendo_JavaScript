/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// @ts-nocheck

/* Documentacion Oficial - .concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion

.concat() sirve para concatenar (unir) strings

.concat() devuelve una NUEVA cadena de texto (string)
que NO afecta al string creado anteriormente
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat#description */

const hola = 'hola';
const mundo = 'mundo';

// str1.concat(str2, str3, /* ..., */ strN)
console.log(hola.concat(' ', mundo));
// hola mundo

console.log(mundo.concat(' ', hola));
// mundo hola

/* ------------------ */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat#using_concat */

/* convertir de tipo array a string
(concatenar los elementos de un array) */

const array = ['hola', ' ', 'mundo', '!'];

console.log(typeof array);
// object

console.log(''.concat(...array));
// hola mundo!

console.log(typeof ''.concat(...array));
// string

/* ------------------ */
/* TODO lo q este dentro del par de parentesis de .concat()
se convierte a tipo string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat#description */

// number
console.log(''.concat(4, 5));           // '45'

// boolean
console.log(''.concat(true));           // 'true'
console.log(''.concat(false));          // 'false'

console.log(''.concat(null));           // 'null'
console.log(''.concat(undefined));      // 'undefined'
console.log(''.concat(NaN));            // 'NaN'

// Arreglos (Arrays, Listas)
console.log(''.concat([]));             // ''
// Objetos (Diccionarios)
console.log(''.concat({}));             // '[object Object]'
// Funciones
console.log(''.concat(function () {})); // 'function () {}'
// Clases
console.log(''.concat(class {}));       // 'class {}'
