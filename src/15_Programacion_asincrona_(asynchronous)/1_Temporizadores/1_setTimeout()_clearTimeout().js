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

// Ejemplo 1

console.log('inicio');
// 'inicio'

const milisegundos = 3000;
const mensaje = `ejecutando setTimeout una sola vez despues de ${milisegundos} milisegundos `;

console.time(mensaje);

setTimeout(() => {
  console.timeEnd(mensaje);
}, milisegundos);
// 'esto se ejecuta una sola vez despues de 3000 milisegundos : 3.008s'

/* ---------------------------------------------- */

/*  Ejemplo 2
NO se esta imprimiendo console.log(hora); porq 
1) setTimeout espera 1000 milisegundos para ejecutarse

2) clearTimeout se ejecuta INMEDIATAMENTE, deteniendo la ejecucion del setTimeout   */

console.log('inicio');
// 'inicio'

const IDsetTimeout = setTimeout(() => {
  const hora = new Date().toLocaleTimeString();
  console.log(hora);
}, 1000);

clearTimeout(IDsetTimeout);

console.log('final');
// 'final'
