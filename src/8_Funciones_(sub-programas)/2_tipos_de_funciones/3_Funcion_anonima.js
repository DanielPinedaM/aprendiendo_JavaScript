/* eslint-disable func-names */
/* eslint-disable max-len */

/* --------------------------------------------------------------- */

/* Función Anónima

Tutorial - Fazt
https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1948s

Es una funcion q NO tiene nombre */

/* --------------------------------------------------------------- */

/* Ejemplo 1
https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1948s

https://eslint.org/docs/latest/rules/func-names */

// cuando la funcion SI tiene un nombre
function nombreFuncion1() {
  return 'hola mundo';
}

// Se ejecuta con su nombre
nombreFuncion1();
// 'hola mundo'

// En cambio, las funciones anonimas se ejecutan SIN el nombre
console.log(
  (function nombreFuncion2() {
    return 'hola mundo';
  }()), // el par de parentesis () ejecuta la funcion
);
// 'hola mundo'

console.log(
  (function () {
    return 'hola mundo';
  }()),
);
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 2:

Recordatorio:
Ver:
" (() => { })(); Función Auto-ejecutable (IIFE, Immediately Invoked Function Expression, Self-Executing Anonymous Function, Self-Executing Invoking Function) "

Todas las funciones auto-ejecutables son anonimas */

(() => {
  console.log('hola mundo');
})();

/* --------------------------------------------------------------- */

/* Ejemplo 3 - onClick y Funcion Anonima
https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1948s */

// crear <button>
const button = document.createElement('button');

// Agregarle texto "click me"
button.innerText = 'click me';

// onClick: Al dar click en <button> ejecutar funcion anonima que abre un alert()
button.addEventListener('click', () => { // Funcion Anonima
  alert('has dado click en button');
});

// En el DOM, dentro del <body> agregar <button>
document.body.append(button);

/* --------------------------------------------------------------- */

/* Ejemplo 4 - onClick y Funcion flecha
https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1948s

Lo anterior tambien se puede hacer con una funcion q tenga un nombre */

const button2 = document.createElement('button2');

button2.innerText = 'click me';

// Funcion CON nombre
const funcionNOanonima = () => {
  alert('hola mundo');
};

button2.addEventListener('click', funcionNOanonima);

document.body.append(button2);
