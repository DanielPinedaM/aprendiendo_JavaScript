/* eslint-disable no-shadow */
// @ts-nocheck
/* eslint-disable max-len */
/* eslint-disable func-names */

/* --------------------------------------------------------------- */

/*
(() => { })(); Función Auto-ejecutable
(IIFE, Immediately Invoked Function Expression, Self-Executing Anonymous Function, Self-Executing Invoking Function)

Recordatorio:
Ver:
" 12.4.1) Diferencia Entre Declaración de Funcion (Function Declaration) y Expresión de Función (Function Expression) "

Tutorial...
- Midudev:
https://youtu.be/yK_vE6ghox8

- Jon Mircha:
https://youtu.be/gbHr5qJjLRg

Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function

Es una funcion q se ejecuta a si misma,
inmediatamente que el interprete lee esa linea de codigo,
NO se tiene q invocar para poder ejecutarse

En ReactJS se usa para el Hook useEffect()
https://youtu.be/TBxpAhpQqYk

https://react.dev/reference/react/useEffect

Sintaxis:
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

Expresion de Funcion Auto-ejecutable
(function () {
  // …
})();

Funcion flecha auto-ejecutable
(() => {
  // …
})();

Funcion flecha y asincrona auto-ejecutable
(async () => {
  // …
})(); */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - ¿Que es IIFE?
https://youtu.be/yK_vE6ghox8

NO es una función auto-ejecutable
porque se tiene que invocar (llamar) para ejecutarse */

const funcionFlecha = () => { console.log('funcionFlecha'); }; // definir funcion
funcionFlecha();                                               // ejecutar funcion
// 'funcionFlecha'

/* Sintaxis - Funcion Flecha Auto-ejecutable
(() => {
  // ...
})();  */

(() => {
  console.log('IIFE');
})(); // con esto (); se ejecuta
// 'IIFE'

/* la funcion NO se ejecuta
cuando NO escribo al final ();
https://eslint.org/docs/latest/rules/no-unused-expressions */

(() => {
  console.log('IIFE');
});

/* --------------------------------------------------------------- */

/* Ejemplo 2 */

// INCOMPLETO
(() => {
  console.log('');
})([]);

/* --------------------------------------------------------------- */

/* Ejemplo 3 */

// INCOMPLETO
(() => {
  console.log('');
})([1, 2, 3]);

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Sintaxis - Expresion de Funcion Auto-ejecutable
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function () {
  // …
})(); */

(function () {
  console.log('hola mundo');
}());
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Sintaxis - Funcion flecha y asincrona auto-ejecutable
(async () => {
  // …
})(); */

/* --------------------------------------------------------------- */

// Ejemplo 6 - scope de funcion auto-ejecutable
// https://youtu.be/yK_vE6ghox8

// Recordatorio:
// Ver: " 4.2.1.2) Alcance de Bloque (Variable Local) (Block Scope) "

// Puedo tener dos variables numero con el mismo nombre
// porque con el par de llaves {/*...*/}
// de la funcion auto-ejecutable creo un nuevo scope (alcance)

const numero = 1;
console.log(numero);
// 1

(() => {
  const numero = 2;
  console.log(numero);
  // 2
})();

/* --------------------------------------------------------------- */

// Ejemplo 7 - scope de funcion auto-ejecutable
// https://youtu.be/yK_vE6ghox8

(() => {
  const numero3 = 2;
  console.log(numero3);
  // 2
})();

// ❌ ERROR
// numero3 solamente se puede usar donde esta definido
// dentro del par de llaves {} de la funcion auto-ejecutable
console.log(numero3);
// ReferenceError: numero2 is not defined

/* --------------------------------------------------------------- */

/* Ejemplo 8
https://youtu.be/yK_vE6ghox8 */

// Definir variable numero3 FUERA del scope {/*...*/} de la funcion auto-ejecutable
const numero4 = 1;
console.log(numero4);
// 1

(() => {
  // y acceder a la variable DENTRO de la funcion auto-ejecutable
  console.log(numero4);
  // 1
})();

/* --------------------------------------------------------------- */

/* Ejemplo 9
https://youtu.be/yK_vE6ghox8 */

/* --------------------------------------------------------------- */

// Ejemplo 10

(() => {
  const a = 1;
  const b = 1;

  if (a === b) {
    console.log('numeros iguales');
    // 'numeros iguales'

    return; // return detiene la ejecucion de la función
  }

  console.log('esto NO se ejecuta');
})();

/* --------------------------------------------------------------- */

/* Ejemplo 11
Las Funciones Auto-ejecutables son anonimas porque
NO tienen un nombre de funcion

ERROR:
A una funcion auto-ejecutable:
1) NO se le puede dar un nombre */

(function nombreFuncion() {
  console.log('deeecode');
}());

// 2) NO se puede acceder al nombre de la funcion
nombreFuncion();
// ❌ Uncaught ReferenceError: nombreFuncion is not defined
