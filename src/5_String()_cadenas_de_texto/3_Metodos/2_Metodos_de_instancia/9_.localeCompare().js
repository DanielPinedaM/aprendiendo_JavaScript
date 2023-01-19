/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial - .localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

.localeCompare() compara entre dos strings para saber
¿cual es el string que va primero y despues en el orden que esta el ABECEDARIO?

.localeCompare() sirve para cualquier string (letras, palabras y textos largos)

Para explicar esto
he llamado a las variables tipo string
str que es el string 1
y str2 que es el string 2
pero los nombres de las variables pueden ser cualquiera

.localeCompare() devuelve un número entero
según el orden que se encuentran las letras en el abecedario:
1) negativo ó -1 si str esta ANTES de str2

2) positivo ó 1 si str esta DESPUES de str2

3) 0 si str y str2 son los MISMOS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#return_value

Algunos navegadores pueden devolver -2 ó 2
(o cualquier otro numero que sea positivo o negativo),
no necesariamente -1 ó 1,
pero lo importante es que los numeros sean negativos ó positivos.
0 no tiene este problema,
0 siempre es igual en todos los navegadores
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#description

Su sintaxis es:
str.localeCompare(str2, locales, options)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#parameters

donde...
- str
es el primer string

- str2
es el segundo string

- locales
es el idioma
usar 'es-ES' para español de España
y 'en-US' para ingles de Estados Unidos,
aunque si muy extrañamente quieres usar otro idioma aquí tienes la lista completa:
https://www.techonthenet.com/js/language_tags.php

- options
Sirve para Intl.Collator() pero no escribiré resumen de esto, entonces consulta la documentación:

Documentación Oficial - Intl.Collator()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator

Recordatorio:
abecedario:
a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z */

/* -------------------------------------------------------------------------------- */

/* Stack Overflow - Saber si un numero es negativo
https://stackoverflow.com/questions/3571717/how-to-check-if-a-number-is-negative

Documentacion Oficial - Ejemplo de .localeCompare() con strings
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#using_localecompare */
let str = 'a';
let str2 = 'z';

let resultado = str.localeCompare(str2, 'es-ES');
console.log(resultado);        // -1
console.log(typeof resultado); // number

if (resultado < 0) { // (resultado === -1)
  console.log(`en el abecedario la letra '${str}' esta ANTES q la letra '${str2}'`);
}
// en el abecedario la letra 'a' esta ANTES q la letra 'z'

/* ----- */

str = 'z';
str2 = 'a';

resultado = str.localeCompare(str2, 'es-ES');
console.log(resultado); // 1

if (resultado > 0) { // resultado === 1
  console.log(`en el abecedario la letra '${str}' esta DESPUES q la letra '${str2}'`);
}
// en el abecedario la letra 'z' esta DESPUES q la letra 'a'

/* ----- */

// mismas letras 'b'
str = 'b';
str2 = 'b';

resultado = str.localeCompare(str2, 'es-ES');
console.log(resultado); // 0

if (resultado === 0) {
  console.log(`en el abecedario las letras '${str}' y '${str2}' estan en el MISMO lugar`);
}
// en el abecedario las letras 'b' y 'b' estan en el MISMO lugar

/* ----- */

// .localeCompare() con MAYUSCULAS 'B' y minúsculas 'b'
str = 'b';
str2 = 'B';

resultado = str.localeCompare(str2, 'es-ES');
console.log(resultado); // -1

/* -------------------------------------------------------------------------------- */
/* ordenar un array alfabeticamente

las letras de un array estan en desorden ['c', 'a', 'd', 'b']
con .localeCompare() puedo ordenarlas alfabeticamente
para que queden asi [ 'a', 'b', 'c', 'd' ]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#sort_an_array */

const array = ['c', 'a', 'd', 'b'];
const ordenAlfabetico = array.sort((a, b) => a.localeCompare(b, 'es-ES'));

console.log('array ordenado alfabeticamente:', ordenAlfabetico);
// array ordenado alfabeticamente: [ 'a', 'b', 'c', 'd' ]
