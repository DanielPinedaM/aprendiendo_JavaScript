/* eslint-disable max-len */
/* eslint-disable default-param-last */
/* eslint-disable space-in-parens */

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
- En arrays .length es el número total de elementos y .length – 1 es la mayor (ultima) posición (índice).
- En funciones es el número de parámetros. */

/* ---------------------------------------------- */

// Funcion anonima SIN parametros
console.log('# de parametros: ', function () {}.length);
// '# de parametros: ' 0

/* ---------------------------------------------- */

// Funcion anonima con 3 parametros q son (a, b, c)
console.log('# de parametros: ', function (a, b, c) {}.length);
// '# de parametros: ' 3

/* ---------------------------------------------- */

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#argument_length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#description

1) Cuando en la funcion se escribe UN SOLO parametro (...rest)
para q rest.length funcione se tiene q escribir DENTRO de la funcion */

function miFuncion1(...rest) { // "UN SOLO parametro (...rest)"
  console.log(rest.length);    // "DENTRO de la funcion"
}

// Imprimir el numero de argumentos de la funcion
miFuncion1();              // 0
miFuncion1('A');           // 1
miFuncion1('A', 'B');      // 2
miFuncion1('A', 'B', 'C'); // 3

/* cuando hay UN SOLO parametro (...rest)
nombreFuncion.length imprime 0 */
console.log(miFuncion1.length);
// 0

/* --- */

/* 2) cuando escribo 1 o mas parametros a, b, c
y despues ...rest (a, b, c, ...rest)
rest.length imprime 0 DENTRO de la funcion */

function miFuncion2(a, b, c, ...rest) { // "parametros"
  console.log(rest.length);             // "DENTRO de la funcion"
}

miFuncion2();              // 0
miFuncion2('A', 'B', 'C'); // 0

/*
cuando escribo 1 o mas parametros a, b, c
y despues ...rest (a, b, c, ...rest)
nombreFuncion.length NO tiene en cuenta el parametro ...rest
para contar el numero de parametros

(a, b, c, ...rest) son 4 parametros pero se imprime 3 */

console.log(miFuncion2.length);
// 3

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
