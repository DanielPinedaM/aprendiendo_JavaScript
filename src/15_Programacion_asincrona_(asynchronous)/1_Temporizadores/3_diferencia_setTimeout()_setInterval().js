/* 

                                            |------------------------------------------------------------------------|-------------------------------------|
                                            | setInterval()                                                          | setTimeout()                        |
|-------------------------------------------|------------------------------------------------------------------------|-------------------------------------|
| ¿CUANDO se ejecuta?                       | se ejecuta INMEDIATAMENTE,                                             | ESPERA a que pase un tiempo         |
|                                           | NO espera a que pase un tiempo                                         | para poderse ejecutar               |
|-------------------------------------------|------------------------------------------------------------------------|-------------------------------------|
| ¿CUANTAS veces se ejecuta?                | INFINITAMENTE                                                          | UNA sola vez,                       |
|                                           | hasta q se detenga con clearInterval()                                 | se puede detener con clearTimeout() |
|-------------------------------------------|------------------------------------------------------------------------|-------------------------------------|
| Su ejecucion se puede detener con ...     | clearInterval(intervalID)                                              | clearTimeout(timeoutID)             |
|-------------------------------------------|------------------------------------------------------------------------|-------------------------------------|
| ¿el tiempo delay que demora en ejecutarse | ✔️                                                                     | ✔️                                  |
| se escribe en milisegundos?               |                                                                        |                                     |
|-------------------------------------------|------------------------------------------------------------------------|-------------------------------------|
| Ejemplo                                   | // RELOJ                                                               |
|                                           |                                                                        |
|                                           | const IDsetInterval = setInterval(() => {                              |
|                                           |  const hora = new Date().toLocaleTimeString();                         |
|                                           |   console.log(hora);                                                   |
|                                           |                                                                        |
|                                           |  const segundos = new Date().getSeconds();                             |
|                                           |  if (segundos === 59) {                                                |
|                                           |    console.log('se ha detenido setInterval a las ', hora);             |
|                                           |    clearInterval(IDsetInterval);                                       |
|                                           |  }                                                                     |
|                                           |  console.log(segundos);                                                |
|                                           | }, 1000);                                                              |
|                                           | // '10:37:56 p. m.' '10:37:57 p. m.' '10:37:58 p. m.' '10:37:59 p. m.' |
|                                           | // 56 57 58 59                                                         |
|                                           | // 'se ha detenido setInterval a la 10:37:59 p. m.'                    |
|-------------------------------------------|------------------------------------------------------------------------|

*/

// Ejemplo

setTimeout(() => {
  console.log('setTimeout');
}, 8000);

setInterval(() => {
  console.log('setInterval');
}, 1000);

// 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval' 'setInterval'
// 'setTimeout'
