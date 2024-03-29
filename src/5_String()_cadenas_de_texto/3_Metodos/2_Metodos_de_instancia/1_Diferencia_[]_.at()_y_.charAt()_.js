/* eslint-disable max-len */
/* eslint-disable prefer-const */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Documentación Oficial...
- .at() en string:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

- .at() en arrays:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at

- .charAt() en string:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

Resumen: Diferencia Entre [] .at() .charAt() - Acceder a una Posición (Índice) de un Carácter en Especifico

                                            |------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|
                                            | []                                             | .at()                                                  | .charAt()                                                                |
|-------------------------------------------|------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------|
| ¿Sirve para string y array?               | ✔️                                              | ✔️                                                      | X                                                                        |
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
| ¿Admite números negativos?                | ✔️                                              | ✔️                                                      | ✔️                                                                        |
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

/* ---------------------------------------------------------------------------------- */

const string = 'hola mundo'; // caracteres
const array = [1, 2, 3];     // elementos

/* ¿Sirve para string y array?
El uso es diferente dependiendo del tipo de dato:

- String:
Acceder en específico al CARÁCTER (letra, numero, etc.) que se encuentra en una posición (índice)

- Array:
Acceder en específico al ELEMENTO que se encuentra en una posición (índice)

[] sirve para string y array
1 es la SEGUNDA posicion (indice) */
console.log(string[1]); // 'o'
console.log(array[1]);  // 2

// .at() sirve para string y array
console.log(string.at(1)); // 'o'
console.log(array.at(1));  // 2

// .charAt() solamente sirve para string
console.log(string.charAt(1)); // 'o'
console.log(array.charAt(1));  // ERROR: .charAt() NO sirve para arrays

/* ----- */
/* Imprimir la PRIMERA (posición) índice 0

0 es la PRIMERA (posición) índice */
console.log(string[0]); // 'h'
console.log(array[0]);  // 1

// ERROR: es obligatorio escribir un # dentro de los corchetes []
console.log(string[]);
console.log(array[]);

/* cuando no escribo nada
dentro del par de parentesis ()
de .at() y .charAt()
se imprime el
- caracter (string)
- elemento (array)
q esta en la PRIMERA posicion (indice) 0 */
console.log(array.at());   // 1
console.log(array.at(0));  // 1

console.log(string.at());  // 'h'
console.log(string.at(0)); // 'h'

/* para .at() y .charAt()
no escribir nada dentro del par de parentesis ()
y escribir (0) es lo mismo */
console.log(string.charAt()); // 'h'
console.log(string.charAt(0)); // 'h'

/* ----- */

/* ¿Admite números negativos?

Imprimir las TRES ULTIMAS posiciones (índices)

imprime undefined porq []
NO funciona con numeros negativos */
console.log(string[-1]); // undefined
console.log(array[-1]);  // undefined

/* usar la siguiente sintaxis
para q [] funcione con numeros negativos

nombreVariable[nombreVariable.length - 1] */
console.log(string[string.length - 1]); // 'o'
console.log(array[array.length - 1]);   // 3

/* los numeros negativos cuentan al reves
de atras (ultima) hacia adelante (primera) posicion */
/* ---- STRING ---- */
// ULTIMO caracter (letra)
console.log(string.at(-1)); // 'o'
// PE-nultimo caracter
console.log(string.at(-2)); // 'd'
// ANTE-penultimo caracter
console.log(string.at(-3)); // 'n'

/* ---- ARRAY ---- */
// ULTIMO elemento (numero)
console.log(array.at(-1)); // 3
// PE-nultimo elemento
console.log(array.at(-2)); // 2
// ANTE-penultimo elemento
console.log(array.at(-3)); // 1

/* imprime caracter en blanco '' porq
.charAt() NO funciona con numeros negativos */
console.log(string.charAt(-1)); // ''

/* usar la siguiente sintaxis
para q .charAt() funcione con numeros negativos

nombreVariable.charAt(nombreVariable.length - 1) */
console.log(string.charAt(string.length -1)); // 'o'

/* ----- */
/* ¿Qué se devuelve cuando la posición (índice) NO existe?

la posicion (indice) 999 NO existe
en el string 'hola mundo' porq
'hola mundo' tiene 10 caracteres

cuando la posicion (indice) NO existe
entonces [] devuelve undefined */
console.log(string[999]); // undefined

// el array NO tiene 999 posiciones
console.log(array[999]); // undefined

/* .at() devuelve undefined
cuando la posicion (indice)
NO existe */
console.log(string.at(999)); // undefined
console.log(array.at(999));  // undefined

/* .charAt() devuelve
un caracter en blanco ''
cuando la posicion (indice)
NO existe */
console.log('hola mundo'.charAt(999));

/* ----- */

/* Conclusión:
Entre todas las opciones es mejor usar .at() 
porque tiene una sintaxis más fácil de recordar 
cuando quieres acceder a las ultimas posiciones (índices). */

/* ----- */
// Recorrer (iterar) string 'hola mundo' usando el bucle for 

for (let i = 0; i < string.length; i++) {
  let caracter = string[i]; // [i]
  console.log(caracter);
}
/*
h
o
l
a

m
u
n
d
o
*/

/* ----- */

for (let i = 0; i < string.length; i++) {
  let caracter = string.at(i); // .at(i)
  console.log(caracter);
}
/*
h
o
l
a

m
u
n
d
o
*/

/* ----- */

for (let i = 0; i < string.length; i++) {
  let caracter = string.charAt(i); // .charAt(i)
  console.log(caracter);
}
/*
h
o
l
a

m
u
n
d
o
*/

/* ---------------------------------------------------- */

/* Se imprime �
porq los emojis
NO estan en los caracteres UTF-16 */
const emoji = '😀​';

console.log(emoji[0]);        // �
console.log(emoji.at(0));     // �
console.log(emoji.charAt(0)); // �
