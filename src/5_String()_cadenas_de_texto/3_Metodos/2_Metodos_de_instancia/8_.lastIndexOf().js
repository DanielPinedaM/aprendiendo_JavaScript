/* eslint-disable max-len */
// @ts-nocheck

/* Documentacion Oficial - .lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

.lastIndexOf() devuelve el ULTIMO numero de posicion (indice)
donde se encuentra el caracter que se esta buscando,
en caso de que NO se encuentre el carácter entonces devuelve -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf#return_value

.lastIndexOf() empieza a contar las posiciones (indices)
desde 0 de izquierda a derecha

0 es la PRIMERA posicion (indice)
1 "   " SEGUNDA "               "

.lastIndexOf() distingue entre MAYUSCULAS y minusculas
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf#case-sensitivity

Sintaxis:
.lastIndexOf(searchString, position)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf#syntax

Donde...
- searchString
Es el caracter (palabra, letra, numero, etc.) que estoy buscando,
es OBLIGATORIO escribirlo

- position
es un numero,
es OPCIONAL escribirlo,

cuando NO se escribe position entonces
.lastIndexOf() busca el caracter searchString en TODO el string,
en cambio cuando SI se escribe position
.lastIndexOf() devuelve la ULTIMA aparición
de la SUB-CADENA especificada
en un INDICE MENOR O IGUAL QUE el número especificado position */

const string = 'hola mundo';
const buscar = 'o';

/* en el string 'hola mundo' hay dos letras 'o'
con el metodo .indexOf()
obtengo el numero 1 que es la PRIMERA posicion (indice)
donde esta la letra 'o' en 'hola mundo',
en cambio con .lastIndexOf() obtengo el numero 9
que es la ULTIMA posicion (indice) de la letra 'o'  */
const indicePrimeraAparicion = string.indexOf(buscar);
console.log(`el PRIMER caracter '${buscar}' esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER caracter 'o' esta en la posicion (indice) 1

const indiceUltimaAparicion = string.lastIndexOf(buscar);
console.log(`el ULTIMO caracter '${buscar}' esta en la posicion (indice) ${indiceUltimaAparicion}`);
// el ULTIMO caracter 'o' esta en la posicion (indice) 9

/* ---------------------------------------------------------------- */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf#description */

const string2 = 'canal';

/* el string 'canal' tiene dos letras (caracteres) 'a'
pero .lastIndexOf() imprime la posicion (indice)
de la ULTIMA letra 'a' que es 3 */
console.log(string2.lastIndexOf('a')); // 3

/* .lastIndexOf('a', 2) significa
1) 'a' significa buscar la ULTIMA letra 'a'

2) 2 significa que solamente se va a buscar el caracter 'a'
en el sub-string 'can'
porque son los caracteres (letras)
q tienen una posicion (indice)
MENOR O IGUAL QUE 2

se imprime 1 porque
esta es la ULTIMA posicion (indice)
donde esta el caracter (letra) 'a'
en el sub-string 'can' */
console.log(string2.lastIndexOf('a', 2)); // 1

/* cuando el caracter buscado
NO existe en el string
entonces se imprime -1 */
console.log(string2.lastIndexOf('a', 0)); // -1

console.log(string2.lastIndexOf('caracter inexistente')); // -1

/* el string 'canal' tiene un solo caracter (letra) 'c'
q esta en la posicion (indice) 0 */
console.log(string2.lastIndexOf('c')); // 0

// caracter en blanco ''

console.log(string2.lastIndexOf(''));       // 5
console.log(string2.lastIndexOf('', 0));    // 0
console.log(string2.lastIndexOf('', 1));    // 1
console.log(string2.lastIndexOf('', 2));    // 2
console.log(string2.lastIndexOf('', 3));    // 3
console.log(string2.lastIndexOf('', 4));    // 4
console.log(string2.lastIndexOf('', 5));    // 5
console.log(string2.lastIndexOf('', 6));    // 5
console.log(string2.lastIndexOf('', 999));  // 5
console.log(string2.lastIndexOf('', -999)); // 0

/* ---------------------------------------------------------------- */
/* Diferencia entre .indexOf() y .lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf#using_indexof_and_lastindexof */

const string3 = 'Brave, Brave New World';

/* .indexOf() imprime 0 porque:
1) .indexOf() busca la PRIMERA vez q estan los caracteres 'Brave'
en el string 'Brave, Brave New World'

2) la letra (caracter) 'B'
del caracter buscado 'Brave'
que esta ANTES de la coma ,
empiezan en la posicion (indice) 0 */
console.log(string3.indexOf('Brave'));     // 0

/* .lastIndexOf() imprime 7 porque:
1) .lastIndexOf() busca la ULTIMA vez q estan los caracteres 'Brave'
en el string 'Brave, Brave New World'

2) la letra (caracter) 'B'
del caracter buscado 'Brave'
que esta DESPUES de la coma ,
empiezan en la posicion (indice) 7 */

console.log(string3.lastIndexOf('Brave')); // 7

/* ---------------------------------------------------------------- */

/* 'undefined'.lastIndexOf() SIN escribir nada
dentro de los parentesis de .lastIndexOf() imprime 0
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf#parameters */
console.log('undefined'.lastIndexOf()); // 0
