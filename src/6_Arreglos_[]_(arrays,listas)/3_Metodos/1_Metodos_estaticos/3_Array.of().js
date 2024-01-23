/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/* Documentación Oficial - Array.of()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

Array.of() crea un nuevo array,
dentro del par de parentesis de Array.of()
van los argumentos que pueden ser:
- un solo argumento o mas
- cualquier tipo de dato */

// Su sintaxis es..
// Array.of(element0, element1, /* … ,*/ elementN)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of#syntax

// Donde...
// - Array.of()
// Nombre del método

// - element0, element1, /* … ,*/ elementN
// Son los argumentos,
// son los elementos con los q se crea el array

/* Ejemplo 1 - Diferencias Entre Array.of() y Array()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of#using_array.of

1) Usar el constructor Array() es MALA PRACTICA,
la forma correcta es usar la notacion literal de array []

ESLint Airbnb - no-array-constructor
https://airbnb.io/javascript/#arrays--literals

https://eslint.org/docs/latest/rules/no-array-constructor

2) Array.of() es un metodo de array,
en cambio Array() es un constructor

3) El metodo Array.of(7) devuelve un array
q contiene un solo elemento .length q es el numero 7 */
console.log(Array.of(7));        // [7] -> Array q contiene elemento 7
console.log(Array.of(7).length); // 1   -> 7 es UN SOLO elemento

/* en cambio, el constructor Array(7) devuelve un array
con 7 elementos vacios .length */
console.log(Array(7));           // (7) [vacío × 7] -> Todos los elementos estan vacios
console.log(Array(7).length);    // 7               -> 7 elementos vacios

/* A simple vista no hay diferencia
cuando hay mas de un solo parametro (numero)
dentro del par de parentesis () */
console.log(Array.of(1, 2, 3)); // (3) [1, 2, 3]
console.log(Array(1, 2, 3));    // (3) [1, 2, 3]

/* Aunque en realidad
Array.of() ES DIFERENTE DE Array() */
console.log(Array.of() === Array());               // false
console.log(Array.of(7) === Array(7));             // false
console.log(Array.of(1, 2, 3) === Array(1, 2, 3)); // false

/* --------------------------------------------------- */

// Ejemplo 2 - [{...}] Array que contiene dentro un objeto:

const objetoLiteral = {
  nombre: 'Daniel',
  edad: 99,
};

console.log(objetoLiteral);
/*
{
  nombre: 'Daniel',
  edad: 99
}
*/

const arrayOf = Array.of(objetoLiteral);

// [{...}] Array que contiene dentro un objeto
console.log(arrayOf);                // [ { nombre: 'Daniel', edad: 99 } ]

// Array.isArray() comprueba q la variable SI es un array
console.log(Array.isArray(arrayOf)); // true

// el unico elemento .length q hay dentro del array [] es un objeto literal {}
console.log(arrayOf.length);         // 1

/* --------------------------------------------------- */

// Ejemplo 3:

console.log(Array.of());                     // []                               -> array vacio
console.log(Array.of([]));                   // [ [] ]                           -> array anidado y vacio
console.log(Array.of('1', '2', '3', 4, 5));  // (5) ['1', '2', '3', 4, 5]        -> crear array a partir de unos argumentos
console.log(Array.of([1, 2, 3], [4, 5, 6])); // (2) [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] -> array anidado
console.log(Array.of('hola mundo'));         // ['hola mundo']                   -> array [] q contiene un string ''
console.log(Array.of({}));                   // [{...}]                          -> array [] q contiene un objeto literal {}
console.log(Array.of(true, false));          // (2) [ true, false ]              -> array q contiene booleanos
console.log(Array.of(null, undefined, NaN)); // (3) [ null, undefined, NaN ]     -> array q contiene nulo, indefinido y No es un Numero
