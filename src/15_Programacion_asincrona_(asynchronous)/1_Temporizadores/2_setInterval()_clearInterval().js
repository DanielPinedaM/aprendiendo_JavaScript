// @ts-nocheck

/* ---------------------------------------------- */

/* 
Ejecutar función setInterval() INFINITAMENTE, CADA ciertos milisegundos 
y detener su ejecución con clearInterval() */

// Sintaxis
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval#syntax
// setInterval(code, delay)

// setInterval(func, delay, arg1, arg2, /* …, */ argN)

/* 
Donde...
- setInterval(() => {})
Funcion a ejecutar

- delay
numero de milisegundos a partir del cual se EMPIEZA a ejecutar la funcion */

/* clearInterval(intervalID)
https://developer.mozilla.org/en-US/docs/Web/API/clearInterval#syntax

Donde... 
- 

- */

/* ---------------------------------------------- */

/* Ejemplo
1) se imprime 'inicio' y 'final' porque son sincronos

2) de forma asincrona: despues de 1000 milisegundos, 
empieza a ejecutarse indefinidamente el setInterval cada 1000 milisegundos */

console.log('inicio');

const milisegundos = 1000

setInterval(() => {
  console.log(`ejecutando setInterval indefinidamente cada ${milisegundos} milisegundos`);
}, milisegundos);

console.log('final');

// 'inicio'
// 'final'

// 'ejecutando setInterval indefinidamente cada 1000 milisegundos'
// 'ejecutando setInterval indefinidamente cada 1000 milisegundos'
// 'ejecutando setInterval indefinidamente cada 1000 milisegundos'
// 'ejecutando setInterval indefinidamente cada 1000 milisegundos'
//...
