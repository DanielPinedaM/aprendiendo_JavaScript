/* eslint-disable no-sparse-arrays */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
// @ts-nocheck

/* Documentacion Oficial - .concat() en Array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

.concat() sirve para concatenar (unir, juntar, fusionar)...
1) 2 o mas array.

2) Un array con cualquier otro tipo de dato.

.concat() crea un nuevo array q NO modifica los array existentes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods */

// Su sintaxis es:
// .concat(value0, value1, /* ... ,*/ valueN)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#syntax

// Donde...
// - .concat()
// Es el nombre del metodo
// value0, value1, /* ... ,*/ valueN
// Son los valores q quiero concatenar,
// pueden ser arrays ó cualquier otro tipo de dato

/* ------------------------------------------------------ */

/* Ejemplo 1:
Lo q esta dentro del parentesis de .concat()
puede ser cualquier tipo de dato

Concatenar el array ['▲']
con otros tipos de dato */

['▲'].concat(['●', '✖'], ['■'], 'hola mundo', 1, true, false);
// (8) ['▲', '●', '✖', '■', 'hola mundo', 1, true, false]

/* ------------------------------------------------------ */

/* Para los siguientes ejemplos defino...
4 arrays q en sus elementos contienen diferentes tipos de datos */
const array1 = ['1', '2'];    // string
const array2 = [3, 4];        // number
const array3 = [true, false]; // boolean
const array4 = [,,];          // Array Disperso (Sparse Array)

// un string ''
const string = 'hola mundo';

// y un objetoLiteral {}
const objetoLiteral = {
  nombre: 'Daniel',
  edad: 99,
};

// Ejemplo 2 - Concatenar 2 array
// Cuando NO se escribe nada
// dentro del par de parentesis
// value0, value1, /* ... ,*/ valueN
//  de .concat()
// entonces devuelve el array existente
// https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

// array1.concat()
// devuelve el array existente array1
// q contiene los elementos ['1', '2']
let concatenar = array1.concat();
console.log(concatenar);
/* (2) ['1', '2']
0: "1"
1: "2"
length: 2
[[Prototype]]: Array(0) */

/* ------------------------------------------------------ */

/* Ejemplo 3 - Concatenar 2 Array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#concatenating_two_arrays */

console.log(array1); // (2) ['1', '2']
console.log(array2); // (2) [3, 4]

concatenar = array1.concat(array2);
console.log(concatenar);
/* (4) ['1', '2', 3, 4]
(4) ['1', '2', 3, 4]
0: "1"
1: "2"
2: 3
3: 4
length: 4
[[Prototype]]: Array(0) */

/* ------------------------------------------------------ */

/* Ejemplo 4:
1) Concatenar 2 ó mas Array

2) .concat() sirve para concatenar array
y cualquier otro tipo de dato
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#concatenating_three_arrays */

console.log(array1);        // (2) ['1', '2']
console.log(array2);        // (2) [3, 4]
console.log(array3);        // (2) [true, false]
console.log(string);        // 'hola mundo'
console.log(objetoLiteral); // {nombre: 'Daniel', edad: 99}

concatenar = array1.concat(array2, array3, string, objetoLiteral);
console.log(concatenar);
/*
[
  '1',
  '2',
  3,
  4,
  true,
  false,
  'hola mundo',
  {
    nombre: 'Daniel',
    edad: 99
  }
]
*/

/* ------------------------------------------------------ */

/* Ejemplo 5 - Concatenar Arrays Anidados
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#concatenating_nested_arrays */

console.log(array1);       // (2) ['1', '2']

const arrayAnidado = [3, [4, 5, [6]]];
console.log(arrayAnidado); // (2) [ 3, [ 4, 5, [ 6 ] ] ]

concatenar = array1.concat(arrayAnidado);
console.log(concatenar);   // [ '1', '2', 3, [ 4, 5, [ 6 ] ] ]

/* ------------------------------------------------------ */

/* Ejemplo 6 - Symbol.isConcatSpreadable
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#concatenating_array-like_objects_with_symbol.isconcatspreadable

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable */

console.log(array1); // (2) ['1', '2']

/* [Symbol.isConcatSpreadable]: true,
aplana el array, haciendo que...
1) Cada uno de los elementos del array concatenado
ocupe una sola posicion (indice)

2) El resultado es un array */
const objetoLiteral2 = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 'hola',
  1: 'mundo',
};

concatenar = array1.concat(objetoLiteral2); // array concatenado
console.log(concatenar);
// [ '1', '2', 'hola', 'mundo' ]

/* En cambio, [Symbol.isConcatSpreadable]: false,
NO aplana el array:
1) Se conservan todas las posiciones y elementos
   tal cual como estan en el array [] y el objeto {}

2) El resultado es un array q contiene dentro un objeto [{}] */

const objetoLiteral3 = {
  [Symbol.isConcatSpreadable]: false,
  length: 2,
  0: 'hola',
  1: 'mundo',
};

concatenar = array1.concat(objetoLiteral3);
console.log(concatenar);
/*
[
  '1',
  '2',
  {
    '0': 'hola',
    '1': 'mundo',
    length: 2,
    [Symbol(Symbol.isConcatSpreadable)]: false
  }
]
*/

/* ------------------------------------------------------ */

/* Ejemplo 7 - Array Disperso (Sparse Array) y Metodo .concat()
.concat() conserva las "ranuras vacías" (empty items) de los array dispersos

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#using_concat_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

console.log(array1);     // [ '1', '2' ]
console.log(array4);     // [ <2 empty items> ]

concatenar = array1.concat(array4);
console.log(concatenar); // [ '1', '2', <2 empty items> ]

/* ------------------------------------------------------ */

/* Ejemplo 8 - Metodo .concat() en Objetos {} que NO son Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#calling_concat_on_non-array_objects

Si el valor de this NO es un array [],
entonces se convierte a objeto {}
y despues se trata de la misma manera
que los argumentos de .concat() */

console.log(Array.prototype.concat.call({}, 1, 2, 3));          // [ {}, 1, 2, 3 ]
console.log(Array.prototype.concat.call(1, 2, 3));              // [ [Number: 1], 2, 3 ]

const objetoLiteral4 = {
  [Symbol.isConcatSpreadable]: true, // aplanar array
  length: 2, // longitud del objeto {} q tiene dos pares de propiedad: valor,
  0: 'cero',
  1: 'uno',
};
console.log(Array.prototype.concat.call(objetoLiteral4, 2, 3)); // [ 'cero', 'uno', 3, 4 ]

/* ------------------------------------------------------ */

// Ejemplo 9 - Array Vacio []

console.log([].concat());       // []
console.log([].concat([]));     // []

console.log(array1);            // (2) ['1', '2']
console.log(array1.concat([])); // (2) ['1', '2']
console.log([].concat(array1)); // (2) ['1', '2']
