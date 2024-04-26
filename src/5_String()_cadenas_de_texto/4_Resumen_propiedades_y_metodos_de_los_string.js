/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
// @ts-nocheck

/* --------------------------------------------------- */

/* Documentación Oficial - Propiedades y metodos de los string:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods */

const string = 'hola mundo';

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ String.fromCharCode() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

convertir de formato UTF-16 a texto */
String.fromCharCode(104, 111, 108, 97, 32, 109, 117, 110, 100, 111); // 'hola mundo'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .charCodeAt() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

convertir la posicion (indice) del string a formato de codificacion UTF-16 (104 = 'H') */
string.charCodeAt(0); // 104

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ String.fromCodePoint() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

convertir de puntos de codigo a texto */
String.fromCodePoint(104, 111, 108, 97, 32, 109, 117, 110, 100, 111); // 'hola mundo'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .codePointAt() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

convertir la posicion (indice) del string a punto de codigo (104 = 'H') */
string.codePointAt(0); // 104

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .normalize() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize

forma de normalización unicode de un string */
const string1 = '\u00F1'.normalize('NFC');       // 'ñ'
const string2 = '\u006E\u0303'.normalize('NFC'); // 'ñ'

string1 === string2;                             // true
string1.length === string2.length;               // true

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ String.raw`` █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw

guardar string de una ruta (TEXTO SIN PROCESAR) */
String.raw`C:\Windows\System32`; // 'C:\Windows\System32'

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .length █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

numero total de CARACTERES (letras) contando desde 1 */
string.length;     // 10

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .length - 1 █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

mayor (ultima) POSICION (indice) contando desde 0 */
string.length - 1; // 9

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ []        █
 █ .at()     █
 █ .charAt() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

obtener (acceder) en especifico a un CARACTER q se encuentra en una posicion (indice)

0 PRIMER caracter (letra) */
string.charAt(0);    // 'h'

// 1 SEGUNDO caracter (letra)
string[1];           // 'o'

// -1 ULTIMO caracter (letra)
string.at(-1);       // 'o'
string.slice(-1);    // 'o'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .indexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

PRIMER numero de posicion (indice) del caracter buscado */
string.indexOf('o');     // 1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .lastIndexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

ULTIMO numero de posicion (indice) del caracter buscado */
string.lastIndexOf('o'); // 9

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .slice()     █
 █ .substring() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

Extraer una parte (SUB-STRING) de un string de acuerdo a sus posiciones (indices) */
string.slice(2);                                        // 'la mundo'
string.substring(2);                                    // 'la mundo'

string.slice(-2);                                       // 'do'
string.substring(string.length - 2);                    // 'do'

string.slice(1, 3);                                     // 'ol'
string.substring(1, 3);                                 // 'ol'

string.slice(-5, -2);                                   // 'mun'
string.substring(string.length - 5, string.length - 2); // 'mun'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .search() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

PRIMER numero de POSICION (INDICE) q coincide con la EXPRESION REGULAR o CARACTER */
string.search('o'); // 1

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .match()    █
 █ .matchAll() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

CARACTERES que coinciden con la EXPRESION REGULAR */
string.match(/[a-z]/); // ['h', index: 0, input: 'hola mundo', groups: undefined]

[...string.matchAll(/[a-z]/g)];
/* (9) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

[ 'h', index: 0, input: 'hola mundo', groups: undefined ]
[ 'o', index: 1, input: 'hola mundo', groups: undefined ]
[ 'l', index: 2, input: 'hola mundo', groups: undefined ]
[ 'a', index: 3, input: 'hola mundo', groups: undefined ]
[ 'm', index: 5, input: 'hola mundo', groups: undefined ]
[ 'u', index: 6, input: 'hola mundo', groups: undefined ]
[ 'n', index: 7, input: 'hola mundo', groups: undefined ]
[ 'd', index: 8, input: 'hola mundo', groups: undefined ]
[ 'o', index: 9, input: 'hola mundo', groups: undefined ] */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .split() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/

convertir de STRING "" A ARRAY [] */

let array = string.split(''); // .split('') caracter en blanco
console.log(array);
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

array = string.split(' '); // .split(' ') un espacio en blanco
console.log(array);
// (2) ['hola', 'mundo']

array = string.split(); // NO escribo nada dentro del par de parentesis de .split()
console.log(array);
// (1) ['hola mundo']

array = string.split(","); // el separador "," NO esta en el string 'hola mundo'
console.log(array);
// (1) ['hola mundo']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .includes() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

buscar caracteres en CUALQUIER PARTE de un string */
string.includes('o'); // true

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .endsWith() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

buscar caracteres AL FINAL de un String */
string.endsWith('mundo'); // true

/* eliminar ESPACIOS EN BLANCO ' ' de un string al...
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ 1) .trim() principio y final █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim */
'   a b   '.trim();                // 'a b'
'   a b   '.trimStart().trimEnd(); // 'a b'
'   a b   '.trimEnd().trimStart(); // 'a b'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ 2) .trimStart() ó .trimLeft() - principio (lado izquierdo) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart */
'   a b   '.trimStart();           // 'a b   '
'   a b   '.trimLeft();            // 'a b   '

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ 3) .trimEnd() ó .trimRight() - final (lado derecho) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd */
'   a b   '.trimEnd();             // '   a b'
'   a b   '.trimRight();           // '   a b'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .padStart() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

agregar nuevos caracteres AL PRINCIPIO de un string */
string.padStart(string.length + 5);    // '     hola mundo'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .padEnd() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd

agregar nuevos caracteres AL FINAL de un string */
string.padEnd(string.length + 5, '.'); // 'hola mundo.....'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .repeat() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

REPETIR string */
string.repeat(3);                                       // 'hola mundohola mundohola mundo'
string.padEnd(string.length + 1, ' ').repeat(3).trim(); // 'hola mundo hola mundo hola mundo'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .replace() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

reemplazar el PRIMER caracter buscado */
string.replace('o', 'REPLACE');        // 'hREPLACEla mundo'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .replaceAll() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

reemplazar TODOS los caracteres q coincidan con el caracter buscado */
string.replaceAll('o', 'REPLACE_ALL'); // 'hREPLACE_ALLla mundREPLACE_ALL'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .startsWith() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/LUeCg6btmZU

¿el string ... EMPIEZA por los caracteres ...? */
string.startsWith('hola');                  // true

/* ¿en el string 'hola mundo'
A PARTIR de la posicion (indice) 5
estan los caracteres (palabra) 'mundo'? */
console.log(string.startsWith('mundo', 5)); // true

// ¿el string 'hola mundo' TERMINA en el caracter (letra) 'o'? .length - 1
string.startsWith('o', string.length - 1);  // true

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .toLowerCase()       █
 █ .toLocaleLowerCase() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase

convertir string a minúscula */
'HOLA MUNDO'.toLowerCase();               // 'hola mundo'
'HOLA MUNDO'.toLocaleLowerCase('es-ES');  // 'hola mundo'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .toUpperCase()       █
 █ .toLocaleUpperCase() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase

convertir string a MAYÚSCULA */
'hello world'.toUpperCase();              // 'HELLO WORLD'
'hello world'.toLocaleUpperCase('en-US'); // 'HELLO WORLD'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .localeCompare() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

comparar orden de dos string en el ABECEDARIO */
'a'.localeCompare('z'); // -1 -> NEGATIVO porq en el abecedario la letra 'a' esta ANTES   q la letra 'z'
'z'.localeCompare('a'); // 1  -> POSITIVO "                            " 'z' "  " DESPUES "        " 'a'
'b'.localeCompare('b'); // 0  -> CERO porq son las mismas letras

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .valueOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf

convertir de TIPO OBJETO new String() a dato primitivo STRING (texto) */
const stringObjeto = new String('hola mundo'); // MALA PRACTICA new String()
stringObjeto;                                  // String {'hola mundo'}
typeof stringObjeto;                           // object

const string3 = stringObjeto.valueOf();        // MALA PRACTICA .valueOf()
string3;                                       // 'hola mundo'
typeof string3;                                // string

const string4 = String(stringObjeto);          // BUENA PRACTICA String()
string4;                                       // 'hola mundo'
typeof string4;                                // string
string3 === string4;                           // true

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ String()    █
 █ .toString() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring

convertir a tipo TEXTO (string) */
String(null);         // 'null'    -> BUENA PRACTICA String()
null.toString();      // TypeError -> MALA PRACTICA .toString()

String(undefined);    // 'undefined'
undefined.toString(); // TypeError

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .concat() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat

concatenar (unir) string */
'concatenar'.concat(' ', string, 123); // 'concatenar hola mundo123'
