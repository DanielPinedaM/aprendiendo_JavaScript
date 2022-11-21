/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
// @ts-nocheck

/* Documentacion Oficial - Propiedades y metodos de los string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods */

const string = 'hola mundo';

// convertir la posicion (indice) del string a formato de codificacion UTF-16 (104 = 'H')
string.charCodeAt(0); // 104

// convertir la posicion (indice) del string a punto de codigo (104 = 'H')
string.codePointAt(0); // 104

// convertir de formato UTF-16 a texto
String.fromCharCode(104, 111, 108, 97, 32, 109, 117, 110, 100, 111); // hola mundo

// convertir de puntos de codigo a texto
String.fromCodePoint(104, 111, 108, 97, 32, 109, 117, 110, 100, 111); // hola mundo

// "Forma de Normalización Unicode" de un string
const string1 = '\u00F1'.normalize('NFC');       // ñ
const string2 = '\u006E\u0303'.normalize('NFC'); // ñ

string1 === string2;               // true
string1.length === string2.length; // true

// guardar string de una ruta (texto sin procesar)
String.raw`C:\Windows\System32`; // C:\Windows\System32

// numero total de CARACTERES (letras) contando desde 1
string.length; // 10

// mayor (ultima) POSICION (indice) contando desde 0
string.length - 1; // 9

// obtener (acceder) en especifico a un CARACTER q se encuentra en una posicion (indice)

// 0 PRIMER caracter (letra)
string.charAt(0); // 'h'

// 1 SEGUNDO caracter (letra)
string[1]; // 'o'

// -1 ULTIMO caracter (letra)
string.at(-1); // 'o'

// concatenar (unir) string
'concatenar'.concat(' ', string, 123); // 'concatenar hola mundo123'

// buscar caracteres en CUALQUIER PARTE de un String
string.includes('o'); // true

// buscar caracteres AL FINAL de un String
string.endsWith('mundo'); // true

// PRIMER numero de posicion (indice) del caracter buscado
string.indexOf('o'); // 1

// ULTIMO numero de posicion (indice) del caracter buscado
string.lastIndexOf('o'); // 9

/* comparar orden de dos string en el abecedario
imprime -1 negativo porque en el abecedario la letra 'a' esta ANTES q la letra 'z' */
'a'.localeCompare('z'); // -1

// saber si un string coincide o no con una expresion regular
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
[ 'o', index: 9, input: 'hola mundo', groups: undefined ]
*/

// agregar nuevos caracteres AL PRINCIPIO de un string
string.padStart(string.length + 5); // '     hola mundo'

// agregar nuevos caracteres AL FINAL de un string
string.padEnd(string.length + 5, '.'); // 'hola mundo.....'

// Repetir string
string.repeat(3);                                       // 'hola mundohola mundohola mundo'
string.padEnd(string.length + 1, ' ').repeat(3).trim(); // 'hola mundo hola mundo hola mundo'

// reemplazar el PRIMER caracter buscado
string.replace('o', 'REPLACE'); // 'hREPLACEla mundo'

// reemplazar TODOS los caracteres q coincidan con el caracter buscado
string.replaceAll('o', 'REPLACE_ALL'); // 'hREPLACE_ALLla mundREPLACE_ALL'
