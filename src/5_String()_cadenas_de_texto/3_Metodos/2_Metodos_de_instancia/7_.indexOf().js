/* eslint-disable no-plusplus */
// @ts-nocheck

/* Documentacion Oficial - .indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

.indexOf() devuelve el PRIMER numero de posicion (indice)
donde se encuentra el caracter que se esta buscando

.indexOf() empieza a contar las posiciones (indices)
desde 0 de izquierda a derecha

0 es la primera posicion (indice)

Su sintaxis es:
.indexOf(searchString, position)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#syntax

Donde...
-searchString
Es el caracter (texto, numero, etc.) que estoy buscando

- position
es un numero,
es OPCIONAL,
cuando NO se escribe position entonces
.indexOf() busca el caracter searchString en TODO el string,
en cambio cuando SI se escribe position  */

const string = 'hola mundo';

/* obtener la posicion (indice)
de la PRIMERA aparicion de la letra 'o'

la SEGUNDA posicion (indice) es el 1

en el string 'hola mundo' hay dos letras 'o'
pero .indexOf() SOLAMENTE imprime la posicion (indice) de la PRIMERA 'o'  */
let buscar = 'o';
const indicePrimeraAparicion = string.indexOf(buscar);
console.log(`el PRIMER caracter '${buscar}' esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER caracter 'o' esta en la posicion (indice) 1

/* obtener la posicion (indice)
de la SEGUNDA aparicion de la letra 'o'

indicePrimeraAparicion + 1 =
= 1 + 1
= 2 */
const indiceSegundaAparicion = string.indexOf(buscar, (indicePrimeraAparicion + 1)); //
console.log(`el SEGUNDO caracter '${buscar}' esta en la posicion (indice) ${indiceSegundaAparicion}`);
// el SEGUNDO caracter 'o' esta en la posicion (indice) 9

/* ---- */

// la PRIMERA posicion (indice) es el 0
buscar = 'h';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar)}`);
// el caracter 'h' esta en la posicion (indice): 0

/* ---- */

// caracter en blanco ''
buscar = '';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar)}`);
// el caracter '' esta en la posicion (indice): 0

console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar, 0)}`);
// el caracter '' esta en la posicion (indice): 0

/* ---- */

// espacio en blanco ' '
buscar = ' ';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar)}`);
// el caracter ' ' esta en la posicion (indice): 4

/* ---- */

/* string.indexOf() SIN escribir nada
dentro de los parentesis de .indexOf() imprime -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#parameters */
console.log('hola mundo'.indexOf());
// -1

console.log(''.indexOf());
// -1

console.log(' '.indexOf());
// -1

console.log('Lorem ipsum dolor'.indexOf());
// -1

console.log('null'.indexOf());
// -1

console.log('undefine'.indexOf());
// -1

/* ---- */

/* 'undefined'.indexOf() SIN escribir nada
dentro de los parentesis de .indexOf() imprime 0 */
console.log('undefined'.indexOf());
// 0

/* ---- */

/* cuando la posicion (indice) NO existe se imprime 999 */
buscar = 'h';

console.log(`el string ${string} tiene ${string.length} caracteres`);
// el string hola mundo tiene 10 caracteres

console.log(string.indexOf(buscar, 999));
// -1

/* ---- */

/* ---- */
/* contar el numero de veces q aparece un caracter en un string

contar el numero de veces
q esta el caracter (letra) 'o'
en el string 'hola mundo'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#using_indexof_to_count_occurrences_of_a_letter_in_a_string */

// const string = 'hola mundo';
buscar = 'o';
let contador = 0;
let posicion = string.indexOf('o');

while (posicion !== -1) {
  contador++;
  posicion = string.indexOf('o', (posicion + 1));
}

console.log(`el caracter '${buscar}' se repite ${contador} veces en el string '${string}'`);
// el caracter 'o' se repite 2 veces en el string 'hola mundo'
