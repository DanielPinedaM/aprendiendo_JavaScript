//                                             |------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
//                                             | setInterval()                                                          | setTimeout()                                                                      |
// |-------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
// | ¿CUANDO se ejecuta?                       | 1) se ejecuta INMEDIATAMENTE,                                          | ESPERA a que pase un tiempo                                                       |
// |                                           | NO espera a que pase un tiempo                                         | para poder ejecutarse                                                             |
// |-------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
// | ¿CUANTAS veces se ejecuta?                | INFINITAMENTE cada ciertos milisegundos                                | no importa si se detiene o no su ejecucion con clearTimeout(),                    |
// |                                           | hasta q se detenga con clearInterval()                                 | siempre se ejecuta UNA SOLA VEZ                                                   |
// |-------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
// | Su ejecucion se puede detener con ...     | clearInterval(intervalID)                                              | clearTimeout(timeoutID)                                                           |
// |-------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
// | ¿el tiempo delay que demora en ejecutarse | ✔️                                                                     | ✔️                                                                                |
// | se escribe en milisegundos?               |                                                                        |                                                                                   |
// |-------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
// | Sintaxis                                  | setInterval(func, delay, arg1, arg2, /* … */ argN)                     | setTimeout(func, delay, arg1, arg2, /* …, */ paramN)                              |
// |-------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
// | Ejemplo                                   | // Reloj                                                               | NO se esta imprimiendo console.log(hora); porque                                  |
// |                                           |                                                                        | 1) setTimeout espera 1000 milisegundos = 1 segundo para ejecutarse                |
// |                                           | const intervalID = setInterval(() => {                                 | 2) clearTimeout se ejecuta INMEDIATAMENTE, deteniendo la ejecucion del setTimeout |
// |                                           |  const hora = new Date().toLocaleTimeString();                         |                                                                                   |
// |                                           |   console.log(hora);                                                   | console.log('inicio');                                                            |
// |                                           |                                                                        | // 'inicio'                                                                       |
// |                                           |  const segundos = new Date().getSeconds();                             |                                                                                   |
// |                                           |  if (segundos === 59) {                                                | const timeoutID = setTimeout(() => {                                              |
// |                                           |    console.log('se ha detenido setInterval a las ', hora);             |  const hora = new Date().toLocaleTimeString();                                    |
// |                                           |    clearInterval(intervalID);                                          |  console.log(hora);                                                               |
// |                                           |  }                                                                     | }, 1000);                                                                         |
// |                                           |  console.log(segundos);                                                |                                                                                   |
// |                                           | }, 1000);                                                              | clearTimeout(timeoutID);                                                          |
// |                                           | // '10:37:56 p. m.' '10:37:57 p. m.' '10:37:58 p. m.' '10:37:59 p. m.' |                                                                                   |
// |                                           | // 56 57 58 59                                                         | console.log('final');                                                             |
// |                                           | // 'se ha detenido setInterval a la 10:37:59 p. m.'                    | // 'final'                                                                        |
// |-------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|

/* ---------------------------------------------- */

// Ejemplo 1

setTimeout(() => {
  console.log('setTimeout');
}, 8000);

setInterval(() => {
  console.log('setInterval');
}, 1000);

// 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval'
// 'setTimeout'
