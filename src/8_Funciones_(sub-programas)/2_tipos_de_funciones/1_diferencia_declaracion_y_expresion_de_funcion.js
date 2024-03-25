// @ts-nocheck
/* eslint-disable func-names */
/* eslint-disable max-len */

/* --------------------------------------------------------------- */

/*
Diferencia Entre Declaración de Funcion (Function Declaration) y Expresión de Función (Function Expression)

- JavaScript Info:
https://javascript.info/function-expressions#function-expression-vs-function-declaration

- Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions

Recordatorio:
Ver:
“ 4.2.3.2) Elevación de Declaración de Función ”

Las diferencias tienen fondo amarillo:

                                          |------------------------------------------------|-----------------------------------------------------|
                                          | Declaración de Función                         | Expresión de Función                                |
                                          | (Function Declaration)                         | (Function Expression)                               |
|-----------------------------------------|------------------------------------------------|-----------------------------------------------------|
| Ejemplo:                                | function sumar(numero1, numero2) {             | const sumar = function (numero1, numero2) {         |
| Sumar 2 numeros                         |  return numero1 + numero2;                     |  return numero1 + numero2;                          |
|                                         | }                                              | };                                                  |
|                                         |                                                |                                                     |
|                                         | sumar(1, 1); // 1+1 = 2                        | sumar(1, 1); // 1+1 = 2                             |
|                                         | // 2                                           | // 2                                                |
|-----------------------------------------|------------------------------------------------|-----------------------------------------------------|
| Elevación (hoisting):                   | ✔️                                              | X                                                   |
| ¿La función se puede                    |                                                |                                                     |
| primero ejecutarse                      | sumar(1, 1); // 1+1 = 2                        | sumar(1, 1);                                        |
| y después definirse?                    | // 2                                           | // ❌ Uncaught ReferenceError: sumar is not defined |
| (MALA PRACTICA)                         |                                                |                                                     |
|                                         | function sumar(numero1, numero2) {             | const sumar = function (numero1, numero2) {         |
|                                         |   return numero1 + numero2;                    |   return numero1 + numero2;                         |
|                                         | }                                              | };                                                  |
|-----------------------------------------|------------------------------------------------|-----------------------------------------------------|
| ¿Puedo usar una variable                | ✔️                                              | ✔️                                                   |
| para guardar el valor de retorno return |                                                |                                                     |
| de la funcion?                          | function sumar(numero1, numero2) {             | const sumar = function (numero1, numero2) {         |
|                                         |  return numero1 + numero2;                     |  return numero1 + numero2;                          |
|                                         | }                                              | };                                                  |
|                                         |                                                |                                                     |
|                                         | const valorDeRetorno = sumar(1, 1); // 1+1 = 2 | const valorDeRetorno = sumar(1, 1); // 1+1 = 2      |
|                                         | console.log(valorDeRetorno);        // 2       | console.log(valorDeRetorno);        // 2            |
|-----------------------------------------|------------------------------------------------|-----------------------------------------------------|
| ¿Se puede usar con                      | ✔️                                              | X                                                   |
| () => {} funcion flecha?                |                                                |                                                     |
|                                         | // Expresión de funcion flecha                 |                                                     |
|                                         | const sumar = (numero1, numero2) => {          |                                                     |
|                                         |  return numero1 + numero2                      |                                                     |
|                                         | }                                              |                                                     |
|                                         |                                                |                                                     |
|                                         | sumar(1, 1); // 1+1 = 2                        |                                                     |
|                                         | // 2                                           |                                                     |
|-----------------------------------------|------------------------------------------------|-----------------------------------------------------| */

/* --------------------------------------------------------------- */

/* Ejemplo 1
En una declaracion de funcion
usar la palabra reservada function
SIN nombre de la funcion da error */

function(nombre) {
    return `Hola, mi nombre es ${nombre}`
}(function() {
  console.log('deeecode')
})()
// ❌ Uncaught SyntaxError: Function statements require a function name

/* --------------------------------------------------------------- */

// Ejemplo 2 - Expresión de funcion flecha en metodos de array .map() .filter() .toSorted() etc 

const numeros = ["A", "B", "C"];
console.log(numeros);
// (3) ['A', 'B', 'C']

// Recorrer (iterar) array
numeros.forEach((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
});
/*
"i=0 ➜ elemento='A'"
"i=1 ➜ elemento='B'"
"i=2 ➜ elemento='C'"
*/
