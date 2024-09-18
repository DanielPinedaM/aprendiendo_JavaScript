/* 

                             |--------------------------------|-----------------------------|
                             | setInterval()                  | setTimeout()                |
|----------------------------|--------------------------------|-----------------------------|
| ¿CUANDO se ejecuta?        | se ejecuta inmediatamente,     | ESPERA a que pase un tiempo |
|                            | NO espera a que pase un tiempo | para poderse ejecutar       |
|----------------------------|--------------------------------|-----------------------------|
| ¿CUANTAS veces se ejecuta? | INFINITAMENTE hasta q          | UNA sola vez                |
|                            | se detenga con clearInterval() |                             |
|----------------------------|--------------------------------|-----------------------------|
| Ejemplo                    |
|                            |
|----------------------------|

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
