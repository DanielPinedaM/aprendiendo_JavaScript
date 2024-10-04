// @ts-nocheck

/* ---------------------------------------------- */

/* 
Ejecutar función setTimeout() UNA sola vez DESPUES de ciertos milisegundos 
y detener su ejecución con clearTimeout() */

// Sintaxis
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#syntax
// setTimeout(code, delay)

// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)

/* 
Donde...
- setTimeout(() => {})
Funcion a ejecutar

- delay
numero de milisegundos q se DEMORA en ejecutar la funcion */

/* clearTimeout(timeoutID)
https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout#syntax

Donde... 
- 

- */

/* ---------------------------------------------- */

// Ejemplo

console.log('inicio');
// 'inicio'

const milisegundos = 3000;
const mensaje = `ejecutando setTimeout una sola vez despues de ${milisegundos} milisegundos `;

console.time(mensaje);

setTimeout(() => {
  console.timeEnd(mensaje);
}, milisegundos);
// 'ejecutando setTimeout una sola vez despues de 3000 milisegundos : 3.007s'
