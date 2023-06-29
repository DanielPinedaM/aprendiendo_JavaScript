// @ts-nocheck

/* -------------------------------------------------------------- */

/*
Tutorial - .with() ...
- Midudev
https://www.youtube.com/watch?v=TJKAGh9jzx4&t=1223s

- Fernando Herrera
https://youtu.be/CI_FH2N88iE

Documentacion Oficial...
- .with()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with

- Notacion de corchetes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation

|-----------------------------------------|-----------------------|-----------------------|
| Metodos de array .to()                  | ¿MODIFICA el array1   | ¿Crea una nueva COPIA |
|                                         | original (existente)? | array2 del array1?    |
|-----------------------------------------|-----------------------|-----------------------|
| .reverse()                              | MUtable               | X                     |
| .sort()                                 | ✓                     |                       |
| .splice()                               |                       |                       |
| nombreArray[numeroIndice]="nuevo valor" |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|
| .toReversed()                           | INmutable             | ✓                     |
| .toSorted()                             | X                     |                       |
| .toSpliced()                            |                       |                       |
| .with()                                 |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|

|
|
|

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#syntax

Donde...
*/

/* -------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre .with() y Notacion de Corchetes []
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation

El array1 original (existente) tiene los elementos (4) [ '▲', '●', '✖', '■' ]

Originalmente en la posicion (indice) 2 hay un elemento equis '✖' */
const array1 = ['▲', '●', '✖', '■'];
//               0    1    2    3 -> POSICION (INDICE)
//                         ↑

/* .with() Reemplazar el elemento '✖'
q esta en el indice 2 por un corazon '❤️' */
const array2 = array1.with(2, '❤️');
console.log(array2);
// (4) [ '▲', '●', '❤️', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//                  ↑

/* .with() NO modifica el array1 (es INmutable),
en el indice 2 del array1 el elemento sigue siendo una equis '✖' */
console.log(array1);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//                  ↑

/* en cambio, la notacion de corchetes
nombreArray[indice]="nuevo elemento"
SI se modifica el array1 original (existente) (es MUtable)

Antes en array1 en el indice 2 estaba el elemento equis '✖',
pero ahora se ha reemplazado por un corazon '❤️' */
array1[2] = '❤️';
console.log(array1);
// (4) [ '▲', '●', '❤️', '■' ]
//         0    1    2    3 -> POSICION (INDICE)
//                   ↑

/* -------------------------------------------------------------- */

/* Ejemplo 2 */
