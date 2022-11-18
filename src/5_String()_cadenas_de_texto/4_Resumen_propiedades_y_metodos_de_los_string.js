// @ts-nocheck
/* eslint-disable no-unused-expressions */

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
