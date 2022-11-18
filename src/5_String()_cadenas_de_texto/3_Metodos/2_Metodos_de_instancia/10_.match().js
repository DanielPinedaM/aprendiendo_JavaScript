// @ts-nocheck

/* Documentacion Oficial...
- .match() en tipo string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

- .match() en tipo symbol
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match

.match() Saber si un String Coincide o no con una Expresión Regular

.match() compara un string con una expresion regular

*/

const string = 'hola mundo';
const expresionRegular = /[a-z]/;
const match = string.match(expresionRegular);

console.log(string); // 'hola mundo'
console.log(expresionRegular); // /[a-z]/
console.log(match);
/* [ 'h', index: 0, input: 'hola mundo', groups: undefined ]
0: "h"
groups: undefined
index: 0
input: "hola mundo"
length: 1
[[Prototype]]: Array(0) */
console.log(typeof match); // object
