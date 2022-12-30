/* eslint-disable indent */
// @ts-nocheck
/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */

/* Documentacion Oficial - .lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

Recordatorio:
.lastIndexOf() también sirve para STRING, ver:
...\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia\8_.lastIndexOf().js

.lastIndexOf() devuelve el ULTIMO número de posicion (indice) donde se encuentra el ELEMENTO que se esta buscando, en caso de que NO se encuentre el elemento entonces devuelve -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#return_value

.lastIndexOf() empieza a contar las posiciones (índices)
desde 0 de izquierda a derecha

0 es la PRIMERA posicion (indice)
1 "   " SEGUNDA "               "

.lastIndexOf() distingue entre MAYUSCULAS y minusculas
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf#case-sensitivity

Su sintaxis es:
.lastIndexOf(searchElement, fromIndex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#syntax

Donde...
- .lastIndexOf()
Es el nombre del metodo

- searchElement
* Es el ELEMENTO que estoy buscando

* Es OBLIGATORIO escribirlo

- fromIndex
* Es un numero

* Es OPCIONAL escribirlo

* Cuando NO se escribe fromIndex entonces .lastIndexOf()
busca el elemento searchElement en TODO el array,
en cambio cuando SI se escribe fromIndex,
.lastIndexOf() devuelve
la ULTIMA aparición del ELEMENTO buscado searchElement
en un INDICE MENOR O IGUAL QUE
el número especificado fromIndex */

/* ---------------------------------------------------------------- */

/* Ejemplo 1:

Posición (índice) del ULTIMO circulo '●' */
  ['■', '●', '■', '●'].lastIndexOf('●'); // 3
//  0    1    2    3

// Devuelve -1 porq el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].lastIndexOf('▲'); // -1

/* ---------------------------------------------------------------- */

// Ejemplo 2 - Diferencia Entre .indexOf() y .lastIndexOf()

const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];
const buscar = 'o';

/* en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
hay dos ELEMENTOS ['o']
con el metodo .indexOf()
obtengo el numero 1 que es la PRIMERA posicion (indice)
donde esta el ELEMENTO ['o'],
en cambio con .lastIndexOf() obtengo el numero 9
que es la ULTIMA posicion (indice) del elemento ['o'] */

const indicePrimeraAparicion = array.indexOf(buscar);
console.log(`el PRIMER ELEMENTO ['${buscar}'] esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER ELEMENTO ['o'] esta en la posicion (indice) 1

const indiceUltimaAparicion = array.lastIndexOf(buscar);
console.log(`el ULTIMO ELEMENTO ['${buscar}'] esta en la posicion (indice) ${indiceUltimaAparicion}`);
// el ULTIMO ELEMENTO ['o'] esta en la posicion (indice) 9

/* ---------------------------------------------------------------- */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#using_lastindexof */

const array2 = ['c', 'a', 'n', 'a', 'l'];

/* el array2 ['c', 'a', 'n', 'a', 'l']
tiene dos ELEMENTOS ['a']
pero .lastIndexOf() imprime la posicion (indice)
del ULTIMO elemento ['a'] que es 3 */
console.log(array2.lastIndexOf('a')); // 3

/* .lastIndexOf('a', 2) significa
1) ['a'] significa buscar el ULTIMO ELEMENTO ['a']

2) 2 significa que solamente se va a buscar el ELEMENTO ['a']
en la parte del array ['c', 'a', 'n']
y NO en el array completo ['c', 'a', 'n', 'a', 'l']
porque son los ELEMENTOS
q tienen una posicion (indice)
MENOR O IGUAL QUE 2

se imprime 1 porque
esta es la ULTIMA posicion (indice)
donde esta el ELEMENTO ['a']
en la parte del array ['c', 'a', 'n'] */
console.log(array2.lastIndexOf('a', 2)); // 1

/* cuando el ELEMENTO buscado
NO existe en el array
entonces se imprime -1

En el array2 ['c', 'a', 'n', 'a', 'l']
NO existe el elemento ['W'] */
console.log(array2.lastIndexOf('W')); // -1

/* El array2 ['c', 'a', 'n', 'a', 'l']
tiene un solo ELEMENTO ['c']
q esta en la posicion (indice) 0 */
console.log(array2.lastIndexOf('c')); // 0

/* ---------------------------------------------------------------- */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#finding_all_the_occurrences_of_an_element

1) Usar el método de array .lastIndexOf()

2) Crear un array 1
que contenga elementos repetidos

3) Buscar un elemento en el array 1

4) Guardar en un array 2
los números de posición (índice)
repetidos del elemento buscado en el array 1 */

const array3 = ['a', 'b', 'a', 'c', 'a', 'd'];
const buscar2 = 'a';
const indices = [];
let idx = array3.lastIndexOf(buscar2);

while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? array3.lastIndexOf(buscar2, idx - 1) : -1;
}

console.log(`el ELEMENTO ['${buscar2}'] se repite en las posiciones (indices):`, indices);
/* el ELEMENTO ['a'] se repite en las posiciones (indices): (3) [4, 2, 0]
0: 4
1: 2
2: 0
length: 3
[[Prototype]]: Array(0) */

/* ---------------------------------------------------------------- */

/* Ejemplo 5 - Array Disperso (Sparse Array):
.lastIndexOf() NO busca "ranuras vacías" (empty items) en los array dispersos

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#using_lastindexof_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// esto , , es una "ranura vacia" (empty items)
console.log([1, , 3].lastIndexOf(undefined)); // -1
console.log([1, , 3].lastIndexOf(''));        // -1

/* ---------------------------------------------------------------- */

/* Ejemplo 6 - .indexOf() y .lastIndexOf() en Objeto Literal {}
Ambos metodos .indexOf() y .lastIndexOf()
leen la propiedad length de this
y luego acceden a cada indice entero.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#calling_indexof_on_non-array_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf#calling_lastindexof_on_non-array_objects */

const objetoLiteral = {
// propiedad: valor,
  length: 3,  /* cuando NO escribo length: 3, entonces
                 .indexOf() y .lastIndexOf() NO funcionan */
  0: 'cero', // .indexOf()     posicion 0
  1: 'uno',
  2: 'cero', // .lastIndexOf() posicion 2
};

// imprimir objetoLiteral {}
console.log(objetoLiteral);
/*
{
  0: 'cero',
  1: 'uno',
  2: 'cero',
  length: 3
}
*/

// imprimir la longitud .length del objetoLiteral {}
console.log(objetoLiteral.length); // 3

/* En el objetoLiteral {} hay dos valores 'cero',
el PRIMERO .indexOf() esta en la posicion (indice) 0 */
console.log(Array.prototype.indexOf.call(objetoLiteral, 'cero'));     // 0

// en cambio, el ULTIMO .lastIndexOf() esta en la posicion 2
console.log(Array.prototype.lastIndexOf.call(objetoLiteral, 'cero')); // 2

/* Ambos .indexOf() y .lastIndexOf()
devuelven -1 porq 2 NO es un valor del objetoLiteral {} */
console.log(Array.prototype.indexOf.call(objetoLiteral, 2));          // -1
console.log(Array.prototype.lastIndexOf.call(objetoLiteral, 2));      // -1
