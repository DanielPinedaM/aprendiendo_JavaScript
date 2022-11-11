/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
// @ts-nocheck
/* eslint-disable no-unused-vars */

/* Documentación Oficial - .length Numero de Parámetros en Funciones
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length

La propiedad .length es un número
que tiene un significado diferente
dependiendo de con que tipo de dato se use:
- En strings es el número (longitud) de caracteres (letras, espacios, números, etc)
- En arrays es el número de elementos.
- En funciones es el número de parámetros. */

console.log('# de parametros: ', function () {}.length);
// # de parametros:  0

/* ---------------------------------------------- */

function saludar() {
  console.log('hola mundo');
}
console.log('# de parametros: ', saludar.length);
// # de parametros:  0

/* ---------------------------------------------- */

function sumar(n1, n2) {
  const resultado = n1 + n2;

  return resultado;
}

console.log('# de parametros: ', sumar.length);
// # de parametros:  2

/* ---------------------------------------------- */
