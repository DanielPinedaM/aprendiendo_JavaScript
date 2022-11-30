/* eslint-disable symbol-description */
/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// @ts-nocheck

/* Documentacion Oficial - Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

Array.isArray() devuelve un booleano
q solamente es true
cuando el tipo de dato (variable)
es un array []

en caso de que NO sea un array,
entonces devuelve false */

console.log(Array.isArray([]));             // true -> [] array

console.log(Array.isArray());               // false -> () NO escribi nada dentro del par de parentesis de Array.isArray()
console.log(Array.isArray('hola mundo'));   // false -> '' string (texto)
console.log(Array.isArray(123));            // false -> 123 numero
console.log(Array.isArray(123n));           // false -> BigInt(123n) numero grande
console.log(Array.isArray(true));           // false -> true, verdadero, booleano
console.log(Array.isArray(false));          // false -> false, falso, booleano
console.log(Array.isArray(Symbol()));       // false -> Symbol() simbolo (identificador unico)
console.log(Array.isArray(null));           // false -> null, nulo
console.log(Array.isArray(undefined));      // false -> undefined, indefinido
console.log(Array.isArray(NaN));            // false -> NaN, No es un Numero
console.log(Array.isArray({}));             // false -> {} objeto literal
console.log(Array.isArray(() => {}));       // false -> () => {} funcion flecha (arrow function)
console.log(Array.isArray(function () {})); // false -> function () {} declaracion de funcion
console.log(Array.isArray(class {}));       // false -> class {} clases
