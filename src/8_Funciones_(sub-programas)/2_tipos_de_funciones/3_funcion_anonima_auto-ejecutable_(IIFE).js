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

https://react.dev/reference/react/useEffect */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - ¿Que es IIFE?
https://youtu.be/yK_vE6ghox8

NO es una función auto-ejecutable
porque se tiene que invocar (llamar) para ejecutarse */

const funcionFlecha = () => { console.log('funcionFlecha'); }; // definir funcion
funcionFlecha();                                             // ejecutar funcion
// 'funcionFlecha'

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Sintaxis - Expresion de Funcion Auto-ejecutable
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function () {
  // …
})(); */

(function () {
  console.log('hola mundo');
}());
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Sintaxis - Funcion Flecha Auto-ejecutable
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(() => {
  // …
})(); */

(() => {
  console.log('hola mundo');
})();
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Sintaxis - Funcion flecha y asincrona auto-ejecutable
(async () => {
  // …
})(); */

/* --------------------------------------------------------------- */

/* Ejemplo 5:
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
