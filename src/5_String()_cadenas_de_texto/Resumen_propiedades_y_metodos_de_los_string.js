// @ts-nocheck
/* eslint-disable no-unused-expressions */

/* Documentacion Oficial - Propiedades y metodos de los string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods */

const string = 'hola mundo';

// Numero de Caracteres de 'hola mundo'
string.length; // 10

// Convertir de Formato UTF-16 a Texto
String.fromCharCode(104, 111, 108, 97, 32, 109, 117, 110, 100, 111); // hola mundo

// Convertir de Puntos de Código a Texto
String.fromCodePoint(104, 111, 108, 97, 32, 109, 117, 110, 100, 111); // hola mundo

// Guardar String de una Ruta (Texto sin Procesar)
String.raw`C:\Windows\System32`; // C:\Windows\System32

/* obtener (acceder) a la posición (índice) de un carácter en específico
.at() admite numeros negativos entre el par de paréntesis ()
      devuelve undefined cuando la posición (índice) NO existe
      SI sirve para array */
string.at(-1); // o

/* obtener (acceder) a la posición (índice) de un carácter en específico
.charAt() se tiene q convinar con .length para admitir numeros negativos, Asi:
          variableTipoString.charAt(variableTipoString.length - 1)
          devuelve '' caracter en blanco cuando la posición (índice) NO existe
          NO sirve para array */
string.charAt(1); // o

// Convertir la posicion (indice) del string a formato de codificacion UTF-16 (104 = H)
string.charCodeAt(0); // 104

// Convertir la posicion (indice) del string a punto de codigo (104 = H)
string.codePointAt(0); // 104

// Concatenar (Unir) String
'concatenar'.concat(' ', string, 123); // 'concatenar hola mundo123'

// Buscar Caracteres en CUALQUIER PARTE de un String
string.includes('o'); // true

// Buscar Caracteres AL FINAL de un String
string.endsWith('mundo'); // true

// PRIMER Número de Posición (Índice) del Carácter Buscado
string.indexOf('o'); // 1

// ÚLTIMO Número de Posición (Índice) del Carácter Buscado
string.lastIndexOf('o'); // 9
