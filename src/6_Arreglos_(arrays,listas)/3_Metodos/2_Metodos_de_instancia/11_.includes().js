/* eslint-disable no-sparse-arrays */
// @ts-nocheck

/* --------------------------------------------------- */

/* Documentacion Oficial - .includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

Recordatorio:
.includes() tambien sirve para string, ver:
...\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia\5_.includes().js

.includes() Busca un ELEMENTO en Cualquier Parte de un Array

.includes() busca un ELEMENTO (valor) en un array
y devuelve un booleano boolean
que es true cuando SI encuentra el elemento ó false cuando NO.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality

Sintaxis:
.includes(searchElement, fromIndex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#syntax

Donde...
- .includes()
Nombre del método

- searchElement
* Es obligatorio escribirlo

* Es el ELEMENTO (valor) que estoy buscando en el array

- fromIndex
* Es opcional escribirlo

* Numero de posicion (indice)
A PARTIR del cual
se empieza a buscar el elemento

* Esta posicion SI se incluye en la busqueda */

/* ---------------------------------------------------------------- */

/* Ejemplo 1:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#using_includes

¿El elemento circulo '●' existe en el array?, true significa que si

No importa cuantas veces exista el elemento circulo '●' en el array,
si existe una sola vez o mas .includes() devuelve true

Las siguientes opciones dan el mismo resultado
que es buscar el elemento en TODO el array: */
console.log(['■', '●', '■', '■'].includes('●'));     // true -> 1) NO escribir fromIndex
console.log(['■', '●', '■', '■'].includes('●', 0));  // true -> 2) (fromIndex = 0)

console.log(['■', '●', '■', '■'].length);            // 4    -> longitud del array
console.log(['■', '●', '■', '■'].includes('●', -4)); // true -> 3) (fromIndex <= -array.length)
//                 ↑

/* fromIndex >= array.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#fromindex_is_greater_than_or_equal_to_the_array_length

SI fromIndex es MAYOR O IGUAL Q el numero de elementos .length del array,
entonces .includes() devuelve false

La longitud del array ['■', '●', '■', '■'] es 4,
entonces si fromIndex es 4 o un numero mayor q 4,
.includes() devuelve false */
console.log(['■', '●', '■', '■'].includes('●', 4));   // false
console.log(['■', '●', '■', '■'].includes('●', 999)); // false

// false significa q el elemento triangulo '▲' NO existe en el array
console.log(['■', '●', '■', '■'].includes('▲'));
// false

/* Buscar el circulo '●' A PARTIR de la posicion (indice) 1 hacia adelante (1, 2, 3),
devuelve true porq en el array ['■', '●', '■', '■']
el circulo '●' esta en esta parte ['●', '■', '■']  */
console.log(['■', '●', '■', '■'].includes('●', 1)); // true
//            0    1    2    3
//                 ↑

/* fromIndex < 0
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#computed_index_is_less_than_0

Si fromIndex es negativo,
los indices negativos cuentan al reves, de derecha a izquierda,
desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento

Los indices negativos sirven para buscar elementos en las ultimas posiciones

Buscar el circulo '●' A PARTIR de la posicion (indice) -3 hacia adelante (-3, -2, -1) */
console.log(['■', '●', '■', '■'].includes('●', -3)); // true
//           -4    -3   -2   -1
//                 ↑

// false porq el circulo '●' NO esta en posiciones 2 NI 3
console.log(['■', '●', '■', '■'].includes('●', 2)); // false
//            0    1    2    3

// false porq el circulo '●' NO esta en posiciones -2 NI -1
console.log(['■', '●', '■', '■'].includes('●', -2)); // false
//           -4    -3   -2   -1

/* ---------------------------------------------------------------- */

/* Ejemplo 2 - Array Disperso (Sparse Array) [,] y Método .includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#using_includes_on_sparse_arrays */

// La ranura vacia [,] esta en la posicion (indice) 1
const arrayDisperso = [1, , 3];
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

/* .includes() busca los elementos del array
que son ranuras vacias [,]
como si fueran undefined */
console.log(arrayDisperso.includes(undefined));
// true

// devuelve true porq el array contiene un elemento undefined
console.log([1, undefined, 3].includes(undefined));
// true
