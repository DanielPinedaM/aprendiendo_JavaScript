/* eslint-disable default-param-last */
/* eslint-disable space-in-parens */
/* eslint-disable no-multi-spaces */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// @ts-nocheck
/* eslint-disable no-unused-vars */

/* Hay dos formas de contar el numero de parámetros en las funciones que son:

Documentación Oficial - Numero de Parámetros en Funciones…
- .length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

- arguments.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length

La propiedad .length es un número
que tiene un significado diferente
dependiendo de con que tipo de dato se use:
- En strings es el número (longitud) de caracteres (letras, espacios, números, etc)
- En arrays es el número de elementos.
- En funciones es el número de parámetros. */

/* ---------------------------------------------- */

// Funcion anonima SIN parametros
console.log('# de parametros: ', function () {}.length);
// # de parametros:  0

/* ---------------------------------------------- */

// Funcion anonima con 3 parametros q son (a, b, c)
console.log('# de parametros: ', function (a, b, c) {}.length);
// # de parametros:  0

/* ---------------------------------------------- */

// Declaracion de funcion SIN parametros
function saludar() {
  console.log('hola mundo');
}
console.log('# de parametros: ', saludar.length);
// # de parametros:  0

/* ---------------------------------------------- */

// Declaracion de funcion con 2 parametros que son (n1, n2)
function sumar1(n1, n2) {
  const resultado = n1 + n2;

  return resultado;
}

sumar1(1, 1);
// 1 + 1 = 2

console.log('# de parametros: ', sumar1.length);
// # de parametros:  2

/* ---------------------------------------------- */

/* Constructor de funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length#using_function_length */

console.log(Function.length);
// 1

/* ---------------------------------------------- */

// Funcion flecha (arrow function)
console.log( (() => {}).length );     // 0
console.log( ((a) => {}).length );    // 1
console.log( ((a, b) => {}).length ); // 2

/* ---------------------------------------------- */

/* .length NO cuenta los parametros
de la función variadica (variadic function) ..args
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length#description */

console.log( ((...args) => {}).length );
// 0

/* ---------------------------------------------- */

/* en realidad en la funcion sumar2 hay 4 parametros
q son (n1, n2, n3 = 1, n4). Solamente le he asignado un valor por defecto a n3 = 1
el resto de los parametros n1, n2 y n4 no les he asignado ningun valor

.length esta imprimiendo 2
porq solamente esta contando
el # de parametros antes de n3
sin contar a n3, es decir,
esta contando q hay dos parametros q son n1 y n2,
el resto de los parametros
a partir del primer parametro
inicializado q es n3 = 1 NO se cuentan

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length#using_function_length */
function sumar2(n1, n2, n3 = 1, n4) {
  const resultado = n1 + n2 + n3 + n4;

  return resultado;
}

console.log('# de parametros: ', sumar2.length);
/* # de parametros:  2
.length solamente cuenta los paranetros ANTES del primer valor asignado */
