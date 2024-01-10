/* eslint-disable func-names */

/* --------------------------------------------------------------- */

/*
(() => { })(); Función Auto-ejecutable (IIFE)

Tutorial...
- Midudev:
https://youtu.be/yK_vE6ghox8

- Jon Mircha:
https://youtu.be/gbHr5qJjLRg

Documentación Oficial - IIFE:
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

Es una funcion q se ejecuta inmediatamente que el interprete lee esa linea de codigo,
NO se tiene q invocar para poder ejecutarse

En ReactJS se usa para el Hook useEffect
https://youtu.be/TBxpAhpQqYk

https://react.dev/reference/react/useEffect

Sintaxis:
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

- Expresión de función auto-ejecutable
(function () {
  // …
})();

- Funcion flecha auto-ejecutable
(() => {
  // …
})();

- - Funcion flecha y asincrona auto-ejecutable
(async () => {
  // …
})(); */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Expresion de Funcion Auto-ejecutable

(function () {
  console.log('hola mundo');
}());
// 'hola mundo'

/* --------------------------------------------------------------- */

// Ejemplo 2 - Funcion Flecha Auto-ejecutable

(() => {
  console.log('hola mundo');
})();
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 3:
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
