/* eslint-disable no-plusplus */
// @ts-nocheck

/* --------------------------------------------------- */

/* Documentación Oficial - .indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Recordatorio:
.indexOf() también sirve para ARRAY, ver:
...\aprendiendo_JS\src\6_Arreglos_(arrays,listas)\3_Metodos\2_Metodos_de_instancia\2_.indexOf().js

.indexOf() devuelve el PRIMER numero de posicion (indice)
donde se encuentra el caracter que se esta buscando,
en caso de que NO se encuentre el carácter entonces devuelve -1

.indexOf() empieza a contar las posiciones (indices)
desde 0 de izquierda a derecha

0 es la PRIMERA posicion (indice)
1 "   " SEGUNDA "               "

Sintaxis:
.indexOf(searchString, position)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#syntax

Donde...
- searchString
Es el caracter (palabra, letra, numero, etc.) que estoy buscando,
es OBLIGATORIO escribirlo

- position
es un numero,
es OPCIONAL escribirlo,
cuando NO se escribe position entonces
su valor por defecto es 0
y .indexOf() busca el caracter searchString en TODO el string,
en cambio cuando SI se escribe position
.indexOf() devuelve la primera aparición
de la subcadena especificada
en un índice mayor o igual
que el número especificado */

/* ---------------------------------------------------------------- */

const string = 'hola mundo';

/* obtener la posicion (indice)
de la PRIMERA aparicion de la letra 'o'

en el string 'hola mundo' hay dos letras 'o'
pero .indexOf() SOLAMENTE imprime la posicion (indice) de la PRIMERA 'o'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#using_indexof */
let buscar = 'o';
const indicePrimeraAparicion = string.indexOf(buscar);
console.log(`el PRIMER caracter '${buscar}' esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER caracter 'o' esta en la posicion (indice) 1

/* obtener la posicion (indice)
de la SEGUNDA aparicion de la letra 'o'

indicePrimeraAparicion + 1 =
= 1 + 1
= 2 */
const indiceSegundaAparicion = string.indexOf(buscar, (indicePrimeraAparicion + 1));
console.log(`el SEGUNDO caracter '${buscar}' esta en la posicion (indice) ${indiceSegundaAparicion}`);
// el SEGUNDO caracter 'o' esta en la posicion (indice) 9

/* ---- */

/* la PRIMERA posicion (indice) es el 0
en el string 'hola mundo' la PRIMERA letra (caracter) es la 'h' */
buscar = 'h';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar)}`);
// el caracter 'h' esta en la posicion (indice): 0

/* ---- */

// caracter en blanco ''
buscar = '';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar)}`);
// el caracter '' esta en la posicion (indice): 0

/* el valor por defecto de position es 0
que significa buscar el caracter en todo el string,
obtengo el mismo resultado */
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar, 0)}`);
// el caracter '' esta en la posicion (indice): 0

/* ---- */

// espacio en blanco ' '
buscar = ' ';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar)}`);
// el caracter ' ' esta en la posicion (indice): 4

/* ---- */

/* 'hola mundo' tiene 9 posiciones (indices)
y el caracter 'mundo'
empieza en la posicion (indice) 5,
porque la 'm'
que es la primera letra de 'mundo'
esta en la posicion (indice) 5 */

buscar = 'mundo';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar, 0)}`);
// el caracter 'mundo' esta en la posicion (indice): 5

/* ---- */

/* 'hola mundo' tiene 9 posiciones (indices)
y el caracter 'hola' empieza en la posicion (indice) 0,
porque la 'h' esta en la posicion (indice) 0 */
buscar = 'hola';
console.log(`el caracter '${buscar}' esta en la posicion (indice): ${string.indexOf(buscar, 0)}`);
// el caracter 'hola' esta en la posicion (indice): 0

/* ---- */

/* Cuando el caracter buscado NO existe en el string
entonces se imprime -1

se imprime -1 porque
en el string 'hola mundo' NO existen los caracteres 'caracter inexistente'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#description */
buscar = 'caracter inexistente';
console.log(`el '${buscar}' NO existe en el string '${string}': ${string.indexOf(buscar)}`);
// el 'caracter inexistente' NO existe en el string 'hola mundo': -1

/* ---- */

/* string.indexOf() SIN escribir nada
dentro del par de parentesis () .indexOf() imprime -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#parameters */

// string ''
console.log('hola mundo'.indexOf());
// -1

console.log('Lorem ipsum dolor'.indexOf());
// -1

console.log('null'.indexOf());
// -1

console.log('undefine'.indexOf());
// -1

// caracter en blanco ''
console.log(''.indexOf());
// -1

// espacio en blanco ' '
console.log(' '.indexOf());
// -1

/* ---- */

/* 'undefined'.indexOf() SIN escribir nada
dentro de los parentesis de .indexOf() imprime 0 */
console.log('undefined'.indexOf()); // 0

/* ---- */

/* cuando la posicion (indice)
es MAYOR al numero de caracteres del string
se imprime -1

string.indexOf(buscar, 999) imprime -1 porque
'hola mundo' tiene 10 caracteres y 999 es MAYOR QUE 10 */
buscar = 'h';

console.log(`el string ${string} tiene ${string.length} caracteres`);
// el string hola mundo tiene 10 caracteres

console.log(`position MAYOR: ${string.indexOf(buscar, 999)}`);
// position MAYOR: -1

/* ---- */

/* cuando la posicion (indice)
es MENOR (NEGATIVO) al numero de caracteres del string
se imprime 0

string.indexOf(buscar, -999) imprime 0 porque
'hola mundo' tiene 10 caracteres y -999 es MENOR QUE 10 */
console.log(`position MENOR: ${string.indexOf(buscar, -999)}`);
// position MENOR: 0

/* ---- */

/* .indexOf() distingue entre MAYUSCULAS y minusculas,
cuando NO se encuentra el caracter en el string se imprime -1

como el caracter (letra) 'H' MAYUSCULA
no esta en el string 'hola mundo'
que tiene 'h' minuscula entonces se imprime -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#indexof_and_case-sensitivity */
buscar = 'H';
console.log(`en el string '${string}' NO existe el caracter '${buscar}': ${string.indexOf(buscar)}`);
// en el string 'hola mundo' NO existe el caracter 'H': -1

/* ---- */

/* cuando uso .indexOf() con un string vacio
ocasiona resultados extraños: */

console.log(string);                 // 'hola mundo'

console.log(string.indexOf(''));     // 0
console.log(string.indexOf(' '));    // 4

console.log(string.indexOf('', 0));  // 0
console.log(string.indexOf(' ', 0)); // 4

console.log(string.indexOf('', 1));  // 1
console.log(string.indexOf(' ', 1)); // 4

console.log(string.indexOf('', 2));  // 2
console.log(string.indexOf(' ', 2)); // 4

/* ---- */

/* cuando dentro de indexOf()
1) escribes un numero position
mayor o igual que el numero de caracteres

2) en el caracter buscado searchString escribes un caracter en blanco ''

entonces se imprime el numero de caracteres del string .length */
console.log(`el # de caracteres de '${string}' es ${string.length}`);
// el # de caracteres de 'hola mundo' es 10

console.log(string.indexOf('', 10));  // 10
console.log(string.indexOf('', 11));  // 10
console.log(string.indexOf('', 12));  // 10
console.log(string.indexOf('', 999)); // 10

// un espacio en blanco ' '
console.log(string.indexOf(' ', 10));  // -1
console.log(string.indexOf(' ', 11));  // -1
console.log(string.indexOf(' ', 12));  // -1
console.log(string.indexOf(' ', 999)); // -1

/* ---------------------------------------------------------------- */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#parameters

imprime -4 porque hace que el método .indexOf()
se comporte como si el segundo argumento fuera 0,
y la primera aparición de 'o'
en una posición mayor o igual a 0
es en la posición 4 */
console.log('hello world hello'.indexOf('o', -5));     // 4

/* imprime -1 porque, si bien es cierto que
la sub-cadena 'world' se encuentra en el índice 6,
esa posición no es mayor o igual que 12 */
console.log('hello world hello'.indexOf('world', 12)); // -1

/* imprime -1 porque
99 es mayor que la longitud de 'hello world hello',
lo que hace que .indexOf() NO busque el caracter 'o'
en el string 'hello world hello' */

console.log(`la longitud es: ${'hello world hello'.length}`);
// la longitud es: 17

console.log('hello world hello'.indexOf('o', 999));
// -1

/* ---------------------------------------------------------------- */

/* Saber si un caracter existe o no en un string

saber si en el string 'hola mundo' existe el caracter 'o'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#checking_occurrences */

const string1 = 'hola mundo';
const buscar1 = 'o';

if (string1.indexOf(buscar1) !== -1) {
  console.log(`en el string '${string1}' SI existe el caracter '${buscar1}'`);
} else {
  console.log(`en el string '${string1}' NO existe el caracter '${buscar1}'`);
}
// en el string 'hola mundo' SI existe el caracter 'o'

/* ---------------------------------------------------------------- */
/* contar el numero de veces q aparece un caracter en un string

contar el numero de veces
q esta el caracter (letra) 'o'
en el string 'hola mundo'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf#using_indexof_to_count_occurrences_of_a_letter_in_a_string */

const string2 = 'hola mundo';
const buscar2 = 'o';
let contador = 0;
let posicion = string2.indexOf(buscar2);

while (posicion !== -1) {
  contador++;
  posicion = string2.indexOf(buscar2, (posicion + 1));
}

console.log(`el CARACTER '${buscar2}' se repite ${contador} veces en el STRING '${string2}'`);
// el CARACTER 'o' se repite 2 veces en el string 'hola mundo'
