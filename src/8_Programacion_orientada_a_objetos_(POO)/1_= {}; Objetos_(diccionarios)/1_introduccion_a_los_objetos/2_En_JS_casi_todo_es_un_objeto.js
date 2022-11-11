/* eslint-disable symbol-description */
/* eslint-disable max-len */
/* eslint-disable no-new-wrappers */
/* eslint-disable func-names */
// @ts-nocheck
/* eslint-disable no-multi-spaces */

/* Curso de Fazt en YouTube de POO en JS:
https://www.youtube.com/watch?v=N_t1A39IB_8&t=318s */

// datos PRIMITIVOS
console.log(typeof 'hola mundo');   // string
console.log(typeof 100);            // number
console.log(typeof 100n);           // bigint
console.log(typeof true);           // boolean
console.log(typeof false);          // boolean
console.log(typeof Symbol());       // symbol
console.log(typeof null);           // object (ERROR de JS, null es primitivo y typeof null deberia imprimir null)
console.log(typeof undefined);      // undefined
console.log(typeof NaN);            // number

// datos compuestos (OBJETOS)
console.log(typeof []);             // object (arreglos, arrays, listas)
console.log(typeof {});             // object (objetos, diccionarios)

/* En JS las funciones son objetos de primera clase,
porque pueden tener propiedades y métodos como cualquier otro objeto

Lo que distingue un objeto de una funcion
es que la funcion se puede llamar (invocar), en cambio el objeto no */
console.log(typeof function () {}); // function (funciones)

/* Stack Overflow - ¿Por qué typeof class {} imprime function?
https://stackoverflow.com/questions/42100659/why-in-javascript-class-a-instanceof-function-but-typeof-class-a-is-not-an-obje

En JS las clases también son funciones y las funciones a su vez son objetos: */
console.log(typeof class {});       // function (clases)

// todas las variables (datos) q se crean con el operador new son un objeto

console.log(typeof new Date());               // object
console.log(typeof new RegExp());             // object
console.log(typeof new String('hola mundo')); // object
console.log(typeof new Number(100));          // object
console.log(typeof new Boolean(true));        // object
console.log(typeof new Boolean(false));       // object
