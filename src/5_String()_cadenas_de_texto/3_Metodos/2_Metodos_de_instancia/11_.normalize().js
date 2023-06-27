// @ts-nocheck

/* --------------------------------------------------- */

/*
Documentacion Oficial - .normalize()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize

.normalize() devuelve la "Forma de Normalización Unicode" de un string

.normalize() sirve para q dos string sean diferentes
a pesar de que ambos tengan exactamente los mismos caracteres,
en otras palabras:
esto pasa cuando dos string son iguales pero su formato Unicode es diferente,
entonces uso .normalize() para saber si los string tienen un Unicode igual o diferente,
este proceso se llama "Forma de Normalización Unicode" */

let string1 = '\u00F1';
console.log(string1); // ñ

let string2 = '\u006E\u0303';
console.log(string2); // ñ

/* SIN .normalize()

¿los string son iguales? */
console.log(string1 === string2);               // false
// ¿los string tienen el mismo # de caracteres?
console.log(string1.length === string2.length); // false

string1 = string1.normalize('NFC');
string2 = string2.normalize('NFC');

// usando .normalize()
console.log(string1 === string2);               // true
console.log(string1.length === string2.length); // true
