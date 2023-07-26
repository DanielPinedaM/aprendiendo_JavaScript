/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-sparse-arrays */
// @ts-nocheck

/* --------------------------------------------------- */

/*
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ DIFERENCIAS Y SIMILITUDES ENTRE     █
█ .join()                             █
█ Intl.ListFormat()                   █
█ .toString()                         █
█ .toLocaleString()                   █
█ CONVERTIR DE ARRAY A STRING (TEXTO) █
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

IMPORTANTE: ⚠️
No te enredes estudiando este tema,
siempre que necesites convertir de array a string usa Intl.ListFormat(),
lo mas IMPORTANTE ⚠️ de esta sección es que veas el tutorial de Midudev:

Tutorial de Midudev - Intl.ListFormat()
https://youtu.be/59tYAYnt_sg

https://twitter.com/ericclemmons/status/1488558951008509963

Diferencia Entre .join() .toString() .toLocaleString()
https://luxiyalu.com/difference-arr-join-arr-tostring-arr-tolocalestring/

Documentacion Oficial...
- .join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

- Intl.ListFormat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat

- .toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString

- .toLocaleString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString

Recordatorio:
También puedo convertir de string a array, ver:
...\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia\17_.split().js
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/

                                 |---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
                                 | .join()                                           | new Intl.ListFormat()                                                                     | .toLocaleString()                                                |
|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| ¿Convierte de array            | ✓                                                 | ✓                                                                                         | ✓                                                                |
| a string (texto)?              |                                                   |                                                                                           |                                                                  |
|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Sintaxis                       | .join(separator)                                  | new Intl.ListFormat(locales, options)                                                     | .toLocaleString(locales, options)                                |
|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| ¿Admite el separador del array | ✓                                                 | X                                                                                         | X                                                                |
| convertido a string?           |                                                   |                                                                                           |                                                                  |
|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| ¿Admite el idioma              | X                                                 | ✓                                                                                         | ✓                                                                |
| en que esta escrito el array?  |                                                   |                                                                                           |                                                                  |
|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| ¿Agrega un y / o               | X                                                 | ✓                                                                                         | X                                                                |
| antes del último carácter?     |                                                   |                                                                                           |                                                                  |
|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Ejemplo                        | const array = [1, 2, 3];                          | // .map() convertir a string                                                              | // convertir a string, array q tiene fecha y esta en ingles      |
|                                | console.log(array);                               | // cada uno de los elementos del array                                                    | const fecha = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];    |
|                                | // (3) [1, 2, 3]                                  | const elementoString = array3.map((elemento) => String(elemento));                        | console.log(fecha);                                              |
|                                |                                                   | console.log(elementoString);                                                              | // (3) [ 1, 'a', 1997-12-21T14:12:00.000Z ]                      |
|                                | // .join('-') separar los caracteres por un guion | // (3) ['1', '2', '3']                                                                    |                                                                  |
|                                | console.log(array.join('-'));                     |                                                                                           | const string2 = fecha.toLocaleString('en', { timeZone: 'UTC' }); |
|                                | // '1-2-3'                                        | // new Intl.ListFormat() el array esta en español 'es',                                   | console.log(string2);                                            |
|                                |                                                   | // agregar 'y' antes del ultimo caracter                                                  | // '1,a,12/21/1997, 2:12:00 PM'                                  |
|                                |                                                   | const string = new Intl.ListFormat('es', { type: 'conjunction' }).format(elementoString); |                                                                  |
|                                |                                                   | console.log(string);                                                                      |                                                                  |
|                                |                                                   | // '1, 2 y 3'                                                                             |                                                                  |
|--------------------------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------|

.join() Convertir de Array a String (Texto)

.join() devuelve un string que concatena (une) todos los elementos de un array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects

Sintaxis:
.join(separator)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#syntax

Donde...
- .join()
Nombre del método

- separator
* Es opcional escribirlo

* Es un string que se agrega entre cada uno de los caracteres
del array convertido a string

* .join() y .join(',') dan el mismo resultado
que es separar cada uno de los caracteres por una coma ,

* .join('') el caracter en blanco
concatena (junta) todos los elementos del array
en un string SIN ningun separador
entre cada uno de los caracteres */

/* ----------------------------------------------------- */

/* Ejemplo 1 - .join()
Lo q se escribe dentro del par de parentesis de .join()
es por lo que esta separado cada uno de los caracteres:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways */

['▲', '●', '✖', '■'].join();    // '▲,●,✖,■' -> NO escribir nada dentro del par de parentesis de .join()
['▲', '●', '✖', '■'].join(','); // '▲,●,✖,■' -> es lo mismo q separar el string por una coma ,

['▲', '●', '✖', '■'].join('');  // '▲●✖■'    -> .join('') caracter en blanco
['▲', '●', '✖', '■'].join(' '); // '▲ ● ✖ ■' -> .join(' ') un espacio en blanco
['▲', '●', '✖', '■'].join('-'); // '▲-●-✖-■' -> .join('-') guion
['▲', '●', '✖', '■'].join(1);   // '▲1●1✖1■' -> El separador tipo numero Number() se convierte a texto String()

/* Cuando el array tiene un solo elemento,
entonces se devuelve el mismo elemento SIN el separador: */
['▲'].join();    // '▲'
['▲'].join('');  // '▲'
['▲'].join(' '); // '▲'
['▲'].join('-'); // '▲'

/* ----------------------------------------------------- */

// Ejemplo 2 - Recorrer (iterar) array usando .join()

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

// .join() Convertir de array a string
const string = array.join('');
console.log(string);
// '▲●✖■'

// for () {} Recorrer (iterar) string
for (let i = 0; i < string.length; i++) {
  console.log(`i=${i} | caracter='${string[i]}'`);
}
/*
i=0 | caracter='▲'
i=1 | caracter='●'
i=2 | caracter='✖'
i=3 | caracter='■'
*/

/* ----------------------------------------------------- */

/* Ejemplo 3 - Array vacio [] y .join()
.join() devuelve un caracter en blanco '' cuando el array esta vacio []
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#return_value */

[].join();    // ''
[].join('');  // ''
[].join(' '); // ''
[].join('-'); // ''

/* ----------------------------------------------------- */

/* Ejemplo 4 - null, undefined, NaN y .join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#description */

/* Si hay un elemento del array que sea null ó undefined,
entonces se convierte a un caracter en blanco '' */
[null].join();             // ''
[null, '▲'].join('');      // '▲'

[undefined].join();        // ''
[undefined, '▲'].join(''); // '▲'

/* NO sucede lo mismo con NaN,
que SI se convierte a string */
[NaN].join();              // 'NaN'
[NaN, '▲'].join();         // 'NaN▲'

/* ----------------------------------------------------- */

/* Ejemplo 5 - Array Disperso (Sparse Array) [,] y Método de Array .join()
Las ranuras vacias de los array dispersos [,]
y elementos del array que son undefined
se convierten a string caracter en blanco ''
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#using_join_on_sparse_arrays */

[,].join();        // ''
[,].join('');      // ''

[, ,].join();      // ','
[, ,].join('');    // ''

[1, , 3].join();   // '1,,3'
[1, , 3].join(''); // '13'

/* ----------------------------------------------------- */

/* Ejemplo 6 - Metodo de array .join() en objetoLiteral {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#calling_join_on_non-array_objects */

const objetoLiteral = {
  uno: [1, 2, [3, 4, [5]], 6],
  dos: '7',
  tres: 8,
};
console.log(objetoLiteral);
/*
{
  uno: [ 1, 2, [ 3, 4, [Array] ], 6 ],
  dos: '7',
  tres: 8
}
*/

/* Convertir los valores del objetoLiteral {} en string,
el problema de este codigo es q
NO funciona si los valores tienen un objeto literal anidado {{}}

Object.values() Array [] con los valores del objetoLiteral {}
.flat(Infinity) Aplanar array multi-dimensional
.join('')       Convertir de array a string */
const string2 = Object.values(objetoLiteral).flat(Infinity).join('');
console.log(string2);
// '12345678'

/* ----------------------------------------------------- */

/* Ejemplo 7 - Intl.ListFormat()
https://youtu.be/59tYAYnt_sg

https://twitter.com/ericclemmons/status/1488558951008509963

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat */

const numeros = [1, 2, 3];
console.log(numeros);
// (3) [1, 2, 3]

// .join(', ') Convertir de array a string y separar los caracteres por comas:
let string3 = numeros.join(', ');
console.log(string3);
// '1, 2, 3'

/* --- */

/* .join() MALA PRACTICA:
   Es mucho codigo */
const lenguaje = 'en';

/*
if (lenguaje === 'en') {
    const conector = ' and '
} else {
    const conector = ' y '
} */
const conector = lenguaje === 'en' ? ' and ' : ' y ';

string3 = numeros.slice(0, -1)
                 .join(', ')
                 .concat(conector + numeros.slice(-1));
console.log(string3);
// '1, 2 and 3'

/* --- */

// .map() Convertir a string cada uno de los elementos del array
const elementoString = numeros.map((elemento) => String(elemento));
console.log(elementoString);
// (3) ['1', '2', '3']

/* new Intl.ListFormat() BUENA PRACTICA:
Permite escribir el idioma dentro del par de parentesis () */
string3 = new Intl.ListFormat('es').format(elementoString);
console.log(string3);
// '1, 2 y 3'

/* Ademas cuando el idioma es ingles agrega una coma antes del and
lo cual hace parte de la ortografia del ingles */
string3 = new Intl.ListFormat('en').format(elementoString);
console.log(string3);
// '1, 2, and 3'

/* Tambien puedo elegir usar...
- y
- o */
string3 = new Intl.ListFormat('es', { type: 'conjunction' }).format(elementoString);
console.log(string3);
// '1, 2 y 3'

string3 = new Intl.ListFormat('es', { type: 'disjunction' }).format(elementoString);
console.log(string3);
// '1, 2 o 3'
