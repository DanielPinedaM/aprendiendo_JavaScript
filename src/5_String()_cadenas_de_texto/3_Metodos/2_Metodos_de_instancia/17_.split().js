/* eslint-disable no-multi-spaces */
/* eslint-disable no-tabs */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// @ts-nocheck

/* Samantha Ming - Formas de convertir de string a array:
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/ */

const string = 'hola mundo';   // string con formato de codificacion UTF-16
console.log(string);           // 'hola mundo'

const emoji = 'hola mundo 😋'; // los emojis NO son UTF-16
console.log(emoji);            // 'hola mundo 😋'

let array = [];                // array let vacio [] que reasignare
console.log(array);            // []

/* ----- */

/* Documentacion Oficial - .split() Método de String
8.5.3.17.1) .split() Método de String https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

La sintaxis de .split() es:
.split(separator, limit)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#syntax

Donde...
- .split()
Es el nombre del metodo

- separator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#description

Es lo que separa cada uno de los caracteres
que quiero convertir a string.

separator puede ser...
1) Un string

2) Expresion regular
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

3) Metodo Symbol.split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split

separator es opcional

- limit
* Es el LIMITE de caracteres que quiero convertir de string a array

* Es el numero total de elementos del array contando desde 1 .length

* Es un NUMERO ENTERO MAYOR A CERO (NO negativo)

* Cuando es 0 devuelve un array vacio [],

* limit se ignora cuando es mayor al numero de caracteres .length

* limit es opcional

.split(' ') cada elemento del array esta separado por un espacio en blanco ' ',
tambien puedo tener cualquier otro separador

el string 'hola mundo' tiene dos palabras
que estan separadas por un espacio en blanco ' ',
cada palabra del string se convierte en un elemento del array ['hola', 'mundo'] */
array = string.split(' '); // .split(' ') un espacio en blanco
console.log(array);
/* (2) ['hola', 'mundo']
0: "hola"
1: "mundo"
length: 2
[[Prototype]]: Array(0) */

/* .split('') convierte cada uno de los caracteres del string a un elemento del array

cada una de los caracteres (letras y espacios) del string 'hola mundo'
se convierten en un elemento del array ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o'] */
array = string.split(''); // .split('') caracter en blanco
console.log(array);
/* (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

/* El string completo ocupa una sola posicion
cuando NO se escribe nada dentro del par de parentesis de .split()

El string 'hola mundo'
se convierte a array
de una sola posicion ['hola mundo'] */
array = string.split(); // NO escribo nada dentro del par de parentesis de .split()
console.log(array);
/* ['hola mundo']
0: "hola mundo"
length: 1
[[Prototype]]: Array(0) */

/* .split('', 4)
separator '' significa que cada CARACTER del STRING es un ELEMENTO del ARRAY

limit 4 significa convertir los 4 primeros caracteres del string a array

Del string 'hola mundo' convertir a array
los 4 primeros caracteres que son ['h', 'o', 'l', 'a'] */
array = string.split('', 4);
console.log(array);
/* (4) ['h', 'o', 'l', 'a']
0: "h"
1: "o"
2: "l"
3: "a"
length: 4
[[Prototype]]: Array(0) */

/* .split('', 0)
como escribi 0 entonces devuelve un array vacio [] */
array = string.split('', 0);
console.log(array);
// []

/* .split('', -1)
limit NO puede ser negativo */
array = string.split('', -1);
console.log(array);
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

/* .split('', 1) convertir de string a array el PRIMER caracter

el primer caracter (letra) de 'hola mundo' es ['h'] */
array = string.split('', 1);
console.log(array);
// ['h']

/* Los numeros DECIMALES mayor o igual q 0
se aproximan al MENOR decimal mas cercano */
array = string.split('', 1.5); // 1.5 se aproxima a 1
console.log(array);
// ['h']

/* limit se ignora cuando es mayor al numero de caracteres .length

'hola mundo' tiene 10 caracteres .length NO 999 */
array = string.split('', 999); // .split('', 999) ERROR
console.log(array);
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

array = string.split(999); // .split(999) ERROR
console.log(array);
// ['hola mundo']

// .split('\t') los caracteres estan separados por la tecla tabulador	(tab)
const tabulador = '	tabulador	hola	mundo	';
console.log(tabulador.split('\t'));
/* (5) ['', 'tabulador', 'hola', 'mundo', '']
0: ""
1: "tabulador"
2: "hola"
3: "mundo"
4: ""
length: 5
[[Prototype]]: Array(0) */

// caracter en blanco ''
console.log(''.split(''));
/* []
length: 0
[[Prototype]]: Array(0) */

console.log(''.split());
/* ['']
0: ""
length: 1
[[Prototype]]: Array(0) */

console.log(''.split(0));
/* ['']
0: ""
length: 1
[[Prototype]]: Array(0) */

// .split() devuelve un array del string en UN SOLO elemento
array = emoji.split();
console.log(array);
// ['hola mundo 😋']

/* .split('') con caracter en blanco NO sirve con emojis porque
convierte los emoji a codigo UTF-16
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#description */

array = emoji.split('');
console.log(array);
// (13) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o', ' ', '\uD83D', '\uDE0B']

/* .split(' ') retorna el emoji 😋,
cada espacio en blanco ' '
define donde empieza y termina cada elemento del array */
array = emoji.split(' ');
console.log(array);
// (3) ['hola', 'mundo', '😋']

/* .split(/(?:)/u)
es una solucion para se devuelva el emoji y NO el codigo UTF-16 */
array = '😄😄'.split(/(?:)/);  // ERROR: devuelve codigos UTF-16
console.log(array);            // (4) [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]

array = '😄😄'.split(/(?:)/u); // SOLUCION: devuelve los emojis
console.log(array);            // (2) [ '😄', '😄' ]

/* ----- */

/* Documentacion Oficial - .map() Método de Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */

array = Array.prototype.map.call(string, (caracter) => caracter);
console.log(array);
/* (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

// .map() NO funciona con emojis
array = Array.prototype.map.call('😄😄', (caracter) => caracter);
console.log(array);
// (4) ['\uD83D', '\uDE04', '\uD83D', '\uDE04']

/* ----- */

/* Documentacion Oficial -  .slice() Método de Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice */

array = Array.prototype.slice.call(string);
console.log(array);
/* (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

// .slice() NO funciona con emojis

array = Array.prototype.slice.call('😄😄');
console.log(array);
// (4) ['\uD83D', '\uDE04', '\uD83D', '\uDE04']

/* ----- */

/* Documentacion Oficial - Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */

array = Array.from(string);
console.log(array);
/* (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

// Array.from() funciona con emojis
array = Array.from(emoji);
console.log(array);
/* (12) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o', ' ', '😋']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
10: " "
11: "😋"
length: 12
[[Prototype]]: Array(0) */

array = Array.from('😄😄');
console.log(array);
/* (2) ['😄', '😄']
0: "😄"
1: "😄"
length: 2
[[Prototype]]: Array(0) */

/* ----- */

/* Documentacion Oficial - Object.assign()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

Array.isArray() devuelve false
porque Object.assign() NO es un array */
console.log(Array.isArray(Object.assign)); // false

array = Object.assign([], string);
console.log(array);
/* (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

// Object.assign() NO funciona con emojis
array = Object.assign([], '😄😄');
console.log(array);
// (4) ['\uD83D', '\uDE04', '\uD83D', '\uDE04']

/* ----- */

/* [...string]; Sintaxis Extendida (Spread Syntax)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax */
array = [...string];
console.log(array);
/* (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

// la sintaxis extendida funciona con los emojis
array = [...emoji];
console.log(array);
// (12) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o', ' ', '😋']

array = [...'😄😄'];
console.log(array);
/* (2) [ '😄', '😄' ]
0: "😄"
1: "😄"
length: 2
[[Prototype]]: Array(0) */

/* ----- */

/* for of Recorrer (iterar) string para agregarlo a un array .push()

Documentacion Oficial - for of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */

// array vacio []
array = [];
console.log(array);
// []

for (let caracter of string) { // recorrer (iterar) string
  array.push(caracter); // .push() agregar nuevos elementos al array
}

/* cada caracter de 'hola mundo' ocupa una posicion en el array
despues de convertir de string a array */
console.log(array);
/* (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

/* for of funciona con emojis

[] vaciar array (otra vez) */
array = [];

for (let caracter of emoji) {
  array.push(caracter);
}
console.log(array);
// (12) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o', ' ', '😋']

array = [];
for (let caracter of '😄😄') {
  array.push(caracter);
}
console.log(array);
// (2) ['😄', '😄']
