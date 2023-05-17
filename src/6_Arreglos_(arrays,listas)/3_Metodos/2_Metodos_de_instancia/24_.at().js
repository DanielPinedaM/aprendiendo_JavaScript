/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */

// @ts-nocheck

/* Documentacion Oficial - .at()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

Tutorial:
https://youtu.be/gSSjhChWYK4

.at() Obtener (Acceder) en Especifico a un ELEMENTO q se Encuentra en una Posición (Índice)

Recordatorio:

Resumen: Diferencia Entre [] .at() .charAt() - Acceder a una Posición (Índice) de un Carácter en Especifico

                                            |------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|
                                            | []                                             | .at()                                                  | .charAt()                                                                |
|-------------------------------------------|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|
| ¿Sirve para string y array?               | ✓                                              | ✓                                                      | X                                                                        |
|                                           |                                                |                                                        |                                                                          |
| El uso es diferente                       | // [] sirve para string y array                | // .at() sirve para string y array                     | // .charAt() solamente sirve para string                                 |
| dependiendo del tipo de dato:             | const string = 'hola mundo'; // caracteres     | console.log(string.at(1)); // 'o'                      | console.log(string.charAt(1)); // 'o'                                    |
|                                           | const array = [1, 2, 3];     // elementos      | console.log(array.at(1));  // 2                        | console.log(array.charAt(1));   // ERROR: .charAt() NO sirve para arrays |
| - String:                                 |                                                |                                                        |                                                                          |
| Acceder en específico al CARÁCTER         | // 1 es la SEGUNDA posicion (indice)           |                                                        |                                                                          |
| (letra, numero, etc.)                     | console.log(string[1]); // 'o'                 |                                                        |                                                                          |
| que se encuentra en una posición (índice) | console.log(array[1]);  // 2                   |                                                        |                                                                          |
|                                           |                                                |                                                        |                                                                          |
| - Array:                                  |                                                |                                                        |                                                                          |
| Acceder en específico al ELEMENTO         |                                                |                                                        |                                                                          |
| que se encuentra en una posición (índice) |                                                |                                                        |                                                                          |
|-------------------------------------------|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|
| Imprimir la PRIMERA (posición) índice 0   | // 0 es la PRIMERA (posición) índice           | // cuando no escribo nada                              | // para .at() y .charAt()                                                |
|                                           | console.log(string[0]); // 'h'                 | // dentro del par de parentesis ()                     | // no escribir nada dentro del par de parentesis ()                      |
|                                           | console.log(array[0]);  // 1                   | // de .at() y .charAt()                                | // y escribir (0) es lo mismo                                            |
|                                           |                                                | // se imprime el                                       | console.log(string.charAt());  // 'h'                                    |
|                                           | // ERROR: es obligatorio                       | // - caracter (string)                                 | console.log(string.charAt(0)); // 'h'                                    |
|                                           | // escribir un # dentro de los corchetes []    | // - elemento (array)                                  |                                                                          |
|                                           | console.log(string[]);                         | // q esta en la PRIMERA posicion (indice) 0            |                                                                          |
|                                           | console.log(array[]);                          | console.log(array.at());   // 1                        |                                                                          |
|                                           |                                                | console.log(array.at(0));  // 1                        |                                                                          |
|                                           |                                                |                                                        |                                                                          |
|                                           |                                                | console.log(string.at());  // 'h'                      |                                                                          |
|                                           |                                                | console.log(string.at(0)); // 'h'                      |                                                                          |
|-------------------------------------------|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|
| ¿Admite números negativos?                | ✓                                              | ✓                                                      | ✓                                                                        |
|                                           |                                                |                                                        |                                                                          |
| Imprimir las                              | // imprime undefined porq []                   | // los numeros negativos cuentan al reves              | // imprime caracter en blanco '' porq                                    |
| TRES ULTIMAS posiciones (índices)         | // NO funciona con numeros negativos           | // de atras (ultima) hacia adelante (primera) posicion | // .charAt() NO funciona con numeros negativos                           |
|                                           | console.log(string[-1]); // undefined          | *** STRING ***                                         | string.charAt(-1); // ''                                                 |
|                                           | console.log(array[-1]);  // undefined          | // ULTIMO caracter (letra)                             |                                                                          |
|                                           |                                                | console.log(string.at(-1)); // 'o'                     | // usar la siguiente sintaxis                                            |
|                                           | // usar la siguiente sintaxis                  | // PE-nultimo caracter                                 | // para q .charAt() funcione con numeros negativos                       |
|                                           | // para q [] funcione con numeros negativos    | console.log(string.at(-2)); // 'd'                     | // nombreVariable.charAt(nombreVariable.length - 1)                      |
|                                           |                                                | // ANTE-penultimo caracter                             | string.charAt(string.length -1); // 'o'                                  |
|                                           | // nombreVariable[nombreVariable.length - 1]   | console.log(string.at(-3)); // 'n'                     |                                                                          |
|                                           | console.log(string[string.length - 1]); // 'o' |                                                        |                                                                          |
|                                           | console.log(array[array.length - 1]);   // 3   | *** ARRAY ***                                          |                                                                          |
|                                           |                                                | // ULTIMO elemento (numero)                            |                                                                          |
|                                           |                                                | console.log(array.at(-1)); // 3                        |                                                                          |
|                                           |                                                | // PE-nultimo elemento                                 |                                                                          |
|                                           |                                                | console.log(array.at(-2)); // 2                        |                                                                          |
|                                           |                                                | // ANTE-penultimo elemento                             |                                                                          |
|                                           |                                                | console.log(array.at(-3)); // 1                        |                                                                          |
|-------------------------------------------|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|
| ¿Qué se devuelve cuando                   | undefined Indefinido                           | undefined Indefinido                                   | '' Carácter en blanco                                                    |
| la posición (índice) NO existe?           |                                                |                                                        |                                                                          |
|                                           | // la posicion (indice) 999 NO existe          | // .at() devuelve undefined                            | // .charAt() devuelve                                                    |
|                                           | // en el string 'hola mundo' porq              | // cuando la posicion (indice)                         | // un caracter en blanco ''                                              |
|                                           | // 'hola mundo' tiene 10 caracteres            | // NO existe                                           | // cuando la posicion (indice)                                           |
|                                           |                                                | console.log(string.at(999)); // undefined              | // NO existe                                                             |
|                                           | // cuando la posicion (indice) NO existe       | console.log(array.at(999));  // undefined              | 'hola mundo'.charAt(999); // ''                                          |
|                                           | // entonces [] devuelve undefined              |                                                        |                                                                          |
|                                           | console.log(string[999]); // undefined         |                                                        |                                                                          |
|                                           |                                                |                                                        |                                                                          |
|                                           | // el array NO tiene 999 posiciones            |                                                        |                                                                          |
|                                           | console.log(array[999]); // undefined          |                                                        |                                                                          |
|-------------------------------------------|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|

*/

/* ---------------------------------------------------------------------------------------- */

/* Ejemplo 1:

0 PRIMER elemento */
  ['▲', '●', '✖', '■'][0];        // '▲' -> string
//  0    1    2    3

// -1 ULTIMO elemento
   ['▲', '●', '✖', '■'].at(-1);    // '■' -> string
   ['▲', '●', '✖', '■'].slice(-1); // ['■'] -> array
//  -4   -3   -2    -1

/* ---------------------------------------------------------------------------------------- */

/* Ejemplo 2 - Formas de Obtener (Acceder) al ULTIMO elemento
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at#comparing_methods

Con todas estas formas
puedo obtener el ULTIMO elemento,
la diferencia es que:
1) .at() tiene una sintaxis mas limpia,
   es la forma mas corta de escribirlo

2) .at(), [] y .length devuelven un string 'D'
   en cambio
   .slice(-1) devuelve un array ['D'] */

const array = ['A', 'B', 'C', 'D'];

// longitud del array
const numeroElementos = array.length;
console.log(numeroElementos); // 4

// 'D' es el ultimo elemento del array
console.log(array.at(-1));               // 'D'   -> .at()        devuelve un string
console.log(array[numeroElementos - 1]); // 'D'   -> [] y .length "                "
console.log(array.slice(-1));            // ['D'] -> .slice()     devuelve un array
