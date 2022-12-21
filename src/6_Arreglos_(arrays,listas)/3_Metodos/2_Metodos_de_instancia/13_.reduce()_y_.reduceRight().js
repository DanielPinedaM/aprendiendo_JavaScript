// @ts-nocheck

/* Tutorial...
- Hola Mundo
https://youtu.be/0y5lXGYMEw0

- Midudev:
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

/* ------------------------------------------------------------ */

// Ejemplo 3 - Sumar todos los numeros (elementos) de un array

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

// Esto funciona pero es MALA PRACTICA
const sumar1 = (elemento) => {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += elemento[i];
  }

  return acumulador;
};

// 1 + 2 + 3 + 4 + 5 = 15
const resultado1 = sumar1(numeros);
console.log(resultado1);
// 15

// Refactorizar codigo - FORMA CORRECTA
const sumar2 = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(sumar2);
// 15

/* ------------------------------------------------------------ */

/* Ejemplo 4 */

/* ------------------------------------------------------------ */
