// @ts-nocheck

/* Tutorial:
https://youtu.be/0y5lXGYMEw0

https://youtu.be/S1ZXSoAxEBg

Documentacion Oficial...
- .reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

- .reduceRight()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

.reduce()

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* ------------------------------------------------------------ */

// Ejemplo 1

const array2 = ['■', '■', '■', '■'];
console.log(array2);
// (4) ['■', '■', '■', '■']

/* ------------------------------------------------------------ */

// Ejemplo 2 - Diferencia Entre .reduce() y .reduceRight()

const array = ['1', '2', '3'];
console.log(array);
// (3) [1, 2, 3]

const reduce = array.reduce((concatenar, elemento) => concatenar + elemento);
console.log(reduce);
// '123'

const reduceRight = array.reduceRight((concatenar, elemento) => concatenar + elemento);
console.log(reduceRight);
// '321'
