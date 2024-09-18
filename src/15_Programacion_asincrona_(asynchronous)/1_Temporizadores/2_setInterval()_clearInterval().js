/* 
Ejecutar función setInterval() INFINITAMENTE, CADA ciertos milisegundos 
y detener su ejecución con clearInterval()

setInterval() se ejecuta inmediatamente, NO espera a que pase un tiempo */

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

// Ejemplo 1

console.log('inicio');
// 'inicio'

setInterval(() => {
  console.log('ejecutando setInterval indefinidamente cada cierto intervalo de tiempo');
}, 1000);
// 'ejecutando setInterval indefinidamente cada cierto intervalo de tiempo'
// 'ejecutando setInterval indefinidamente cada cierto intervalo de tiempo'
// 'ejecutando setInterval indefinidamente cada cierto intervalo de tiempo'
// 'ejecutando setInterval indefinidamente cada cierto intervalo de tiempo'

/* ---------------------------------------------- */

// Ejemplo 2

