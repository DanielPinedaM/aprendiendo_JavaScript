// @ts-nocheck

/* Documentación Oficial - .length Numero de Caracteres en String
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

La propiedad .length es un número
que tiene un significado diferente
dependiendo de con que tipo de dato se use:
- En strings es el número (longitud) de caracteres (letras, espacios, números, etc)
- En arrays es el número de elementos.
- En funciones es el número de parámetros. */

let string = 'hola mundo';
console.log('# de caracteres:', string.length);
// # de caracteres 10

// string con numeros
string = '1 23';
console.log('# de caracteres:', string.length);
// # de caracteres: 4

/* JS usa el formato de codificacion UTF-16,
esto significa q .length funciona para
caracteres especiales, numeros, el alfabeto en ingles y español
aunque .length falla para caracteres
que NO esten en el formato de codificacion UTF-16
como por ejemplo emojis y simbolos matematicos

Esta es la lista completa de caracteres UTF-16:
https://www.fileformat.info/info/charset/UTF-16/list.htm

Ejemplos donde .length falla:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters */

// hay un solo emoji pero .length imprime 2
string = '😀';
console.log('# de caracteres:', string.length);
// # de caracteres: 2

/* idioma fula hablado en Africa Occidental y Central
hay 3 letras pero .length imprime 8 */
string = '𞤲𞥋𞤣𞤫';
console.log('# de caracteres:', string.length);
// # de caracteres: 8

/* formula matematica,
en realidad hay 9 caracteres pero .length imprime 11 */
string = '∀𝑥∈ℝ,𝑥²≥0';
console.log('# de caracteres:', string.length);
// # de caracteres: 11

// cadena de texto vacia
string = '';
console.log('# de caracteres:', string.length);
// # de caracteres: 0

// un espacio en blanco
string = ' ';
console.log('# de caracteres:', string.length);
// # de caracteres: 1

// funcion q cuenta el # de caracteres
function numeroCaracteres(str) {
  return [...str].length;
}

console.log(numeroCaracteres('hola mundo'));
// 10
