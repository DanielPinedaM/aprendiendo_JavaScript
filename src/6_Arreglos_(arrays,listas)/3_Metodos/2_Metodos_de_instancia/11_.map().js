// @ts-nocheck

/* Tutorial:
https://youtu.be/FMubfnVET74

Documentacion Oficial - .map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

.map() Devolver un Nuevo Array con el Resultado de Ejecutar una Funcion a Cada Elemento del Array

.forEach() Ejecutar una Funcion para Cada Elemento del Array

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* ------------------------------------------------------------ */

// Ejemplo 1

const array1 = ['■', '■', '■', '▲'];
console.log(array1);
// (4) ['■', '■', '■', '▲']

/* Metodos .map() y .replace()
reemplazar los cuadrados '■' del array1 por circulos '●' */
const array2 = array1.map((elemento) => elemento.replace('■', '●'));
console.log(array2);
// (4) ['●', '●', '●', '▲']

/* ------------------------------------------------------------ */

const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];

console.log(array);

/* ------------------------------------------------------------ */
