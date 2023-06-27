// @ts-nocheck
/* eslint-disable prefer-const */

/* --------------------------------------------------- */

/* Documentacion Oficial - .codePointAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Lista completa de caracteres UTF-16:
https://www.fileformat.info/info/charset/UTF-16/list.htm

.codePointAt() imprime el punto de código
al que equivale el caracter (texto, numeros, etc.)
digitado en la posicion (indice)

asi es como se escribe 'hola mundo' en puntos de código
const NombreVariable = String.fromCodePoint(num1, num2, ..., numN) */
const holaMundo = String.fromCodePoint(104, 111, 108, 97, 32, 109, 117, 110, 100, 111);

console.log(holaMundo);
// hola mundo

console.log(typeof holaMundo);
// string

/* ----- */

// crear string 'hola mundo'
const string = 'hola mundo';

/* Recorrer (iterar) string 'hola mundo'
y imprimir el equivalente
de cada uno de los caracteres de 'hola mundo' a puntos de codigo */
for (let i = 0; i < string.length; i++) {
  let utf16 = string.codePointAt(i); // codePointAt(i)
  let texto = string.at(i); // texto 'hola mundo'

  console.log(`texto = ${texto} / utf16 = ${utf16}`);
}
/*
texto = h  /  utf16 = 104
texto = o  /  utf16 = 111
texto = l  /  utf16 = 108
texto = a  /  utf16 = 97
texto = '' /  utf16 = 32
texto = m  /  utf16 = 109
texto = u  /  utf16 = 117
texto = n  /  utf16 = 110
texto = d  /  utf16 = 100
texto = o  /  utf16 = 111
*/
