/* eslint-disable symbol-description */

/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// @ts-nocheck

/* Documentacion Oficial - Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

https://web.mit.edu/jwalden/www/isArray.html

Array.isArray() responde a la pregunta
¿el dato (variable) es un array?

Array.isArray() devuelve un booleano
q solamente es true
cuando el tipo de dato (variable)
es un array []
en caso de que NO sea un array,
entonces devuelve false
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#return_value

Array.isArray()
devuelve false con los arrays tipados
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

Su sintaxis es:
Array.isArray(value)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#syntax

Donde...
- Array.isArray()
Es el nombre del metodo

- value
Es el valor (dato, variable)
a evaluar si es o no un array

Ejemplo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#using_array.isarray */

console.log(Array.isArray([]));                             // true -> [] array lieral (BUENA PRACTICA)
console.log(Array.isArray(Array()));                        // true -> Array()     array constructor (MALA PRACTICA)
console.log(Array.isArray(new Array()));                    // true -> new Array() "                               "
console.log(Array.isArray(Array.prototype));                // true -> Array.prototype es un array

console.log(Array.isArray({ __proto__: Array.prototype })); // false -> NO se usa el array literal [] ó constructor Array()
console.log(Array.isArray(Array));                          // false -> Array objeto
console.log(Array.isArray(new Int8Array(1)));               // false -> array tipado
console.log(Array.isArray());                               // false -> () NO escribi nada dentro del par de parentesis de Array.isArray()
console.log(Array.isArray('hola mundo'));                   // false -> '' string (texto)
console.log(Array.isArray(123));                            // false -> 123 numero
console.log(Array.isArray(123n));                           // false -> BigInt(123n) numero grande
console.log(Array.isArray(true));                           // false -> true, verdadero, booleano
console.log(Array.isArray(false));                          // false -> false, falso, booleano
console.log(Array.isArray(Symbol()));                       // false -> Symbol() simbolo (identificador unico)
console.log(Array.isArray(null));                           // false -> null, nulo
console.log(Array.isArray(undefined));                      // false -> undefined, indefinido
console.log(Array.isArray(NaN));                            // false -> NaN, No es un Numero
console.log(Array.isArray({}));                             // false -> {} objeto literal
console.log(Array.isArray(() => {}));                       // false -> () => {} funcion flecha (arrow function)
console.log(Array.isArray(function () {}));                 // false -> function () {} declaracion de funcion
console.log(Array.isArray(class {}));                       // false -> class {} clases
