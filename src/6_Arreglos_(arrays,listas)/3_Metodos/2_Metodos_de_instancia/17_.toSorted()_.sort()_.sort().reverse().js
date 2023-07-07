/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Tutorial - Métodos de Array .toReversed() .toSorted() .toSpliced() .with() ...
- Midudev
https://youtu.be/YIZWGn13RCE

https://youtu.be/TJKAGh9jzx4

https://midu.dev/to-reversed-to-spliced-to-sorted-with/

- Fernando Herrera:
https://youtu.be/Di9B9BiZRBs

https://youtu.be/CI_FH2N88iE

Wikipedia - Algoritmos de Ordenamiento:
https://en.wikipedia.org/wiki/Sorting_algorithm

https://en.wikipedia.org/wiki/Category:Sorting_algorithms

Documentación Oficial…
- .toSorted()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

- .sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Wikipedia - Algoritmo en el lugar (In-place algorithm)
https://en.wikipedia.org/wiki/In-place_algorithm

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

.sort() usa el algoritmo en el lugar

.sort() Ordenar de menor a mayor (ascendente)
y .sort().reverse() de mayor a menor (descendente)
array con números y letras

.sort() Ordena las letras en orden alfabetico (a, b, c...)
y los numeros de menor a mayor (1, 2, 3...)

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#syntax */

// Sin Funcion:
// .sort()

// Funcion Flecha (Arrow Function):
// .sort((a, b) => { /* ... */ } )

// Función de Comparación (Compare Function):
// .sort(compareFn)

// Función de Comparación en una Sola Linea (Inline Compare Function):
// .sort(function compareFn(a, b) { /* ... */ })

/*
Donde...
- .sort()
Nombre del método

- compareFn
* Es opcional escribirlo

* Es la funcion de comparacion

* Es el orden de los elementos despues de ordenar el array

- (a, b)
* Parametros de compareFn

* Elementos que se comparan

* SIEMPRE q escriba una compareFn tiene q retornar los siguientes valores,
cuando esto no se hace asi, los elementos se ordenan mal:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_with_non-well-formed_comparator

|-------------------------------|------------------------------------------------------------------------------------|
| Valor de retorno de compareFn |                           Índice de (a, b)                                         |
|-------------------------------|------------------------------------|-----------------------------------------------|
| numero < 0                    | a esta en un indice menor q b      | (indice a) < (indice b)                       |
|-------------------------------|------------------------------------|-----------------------------------------------|
| numero = 0                    | a y b se quedan en el mismo indice | (indice a = indice a) Y (indice b = indice b) |
|-------------------------------|------------------------------------|-----------------------------------------------|
| numero > 0                    | a esta en un indice mayor q b      | (indice a) > (indice b)                       |
|-------------------------------|------------------------------------|-----------------------------------------------| */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Diferencias y Similitudes Entre .toSorted() y .sort()

// .sort() Ordenar de menor a mayor (ascendente)
[2, 4, 3, 5, 1].sort((a, b) => a - b);                                           // (5) [1, 2, 3, 4, 5]
['b', 'd', 'c', 'e', 'a'].sort((a, b) => a.localeCompare(b, 'es-ES'));           // (5) ['a', 'b', 'c', 'd', 'e']

// .sort().reverse() de mayor a menor (descendente) array con números y letras
[2, 4, 3, 5, 1].sort((a, b) => a - b).reverse();                                 // (5) [5, 4, 3, 2, 1]
['a', 'b', 'c', 'd', 'e'].sort((a, b) => a.localeCompare(b, 'es-ES')).reverse(); // (5) ['e', 'd', 'c', 'b', 'a']

/* --------------------------------------------------------------- */

/* Ejemplo 2 - .sort((a, b) => a - b) para array con números:
https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#creating_displaying_and_sorting_an_array

Los numeros Number() se convierten a texto String()
cuando NO escribo nada dentro del par de parentesis de .sort(),
esto ocasiona un error.

La siguiente linea de codigo tiene un error:
NO esta ordenando los numeros */
console.log([9, '80000', 1].sort());                // (3) [1, '80000', 9]

/* Solucion:
.sort((a, b) => a - b)) ordena numeros de menor a mayor (ascendente),
NO funciona con texto String() */
console.log([9, '80000', 1].sort((a, b) => a - b)); // (3) [1, 9, '80000']

/* --------------------------------------------------------------- */

/* Ejemplo 3 - .sort((a, b) => a.localeCompare(b, 'es-ES')) para array con letras:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_non-ascii_characters

Usar este codigo para ordenar arrays
que contienen letras con tildes,
lo cual es lo mismo q
caracteres q NO son ASCII
o idiomas diferentes al ingles: */

console.log(['ú', 'ó', 'í', 'é', 'á'].sort((a, b) => a.localeCompare(b, 'es-ES')));
// (5) ['á', 'é', 'í', 'ó', 'ú']

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Desordenar array:
En otras palabras:
Cambiar las posiciones de los elementos del array aleatoriamente usando .sort() y Math.random()

https://youtu.be/YIZWGn13RCE

https://twitter.com/midudev/status/1488211287159025667/photo/1

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

const numeros = [2, 4, 6, 8];
console.log(numeros);
// (4) [2, 4, 6, 8]

numeros.sort(() => Math.random() - 0.5);
console.log(numeros);
/* (4) [8, 6, 4, 2]
   (4) [2, 4, 6, 8]
   (4) [2, 8, 4, 6] */

/*
Math.random() Numero pseudo-aleatorio y decimal entre 0 y 1
0 <= numero < 1

Math.random() NO es 100% aleatorio,
casi siempre da resultados cercanos a 0.5

Cada vez q lo ejecuto Math.random() da un resultado diferente */
console.log(Math.random());
/* 0.9461178966551149
   0.6511244697243286
   0.19540344535720178 */

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Obtener aleatoriamente un elemento del array:

https://youtu.be/YIZWGn13RCE

https://twitter.com/midudev/status/1488211291802152965/photo/1

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor */

const letras = ['a', 'b', 'c'];
//               0    1    2

console.log(letras);
// (3) ['a', 'b', 'c']

// Esto NO es 100% aleatorio porq a veces el indice NO cambia
const indicePseudoaleatorio = Math.floor( // Math.floor() aproximar al MENOR numero entero
/* Multiplicar:
   (Numero pseudo-aleatorio y decimal entre 0 y 1) * (numero de elementos del array) */
  Math.random() * letras.length,
);
console.log(indicePseudoaleatorio);
/*
2
1
*/

const elemento = letras[indicePseudoaleatorio];
console.log(elemento);
/*
'c'
'b'
*/

/* --------------------------------------------------------------- */

/* Ejemplo 6 - .sort() y undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description

Los elementos q son undefined se situan de ultimo despues de ordenar el array con .sort() */
console.log([3, undefined, 1].sort((a, b) => a - b)); // (3) [1, 3, undefined]
console.log(['c', undefined, 'a'].sort());            // (3) ['a', 'c', undefined]

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Ordenar array de objetos [{}]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sort_stability */

// array de objetos [{}]
const personas = [
//  propiedad: valor,
  { nombre: 'a', edad: 2 },
  { nombre: 'c', edad: 1 },
  { nombre: 'b', edad: 3 },
];
console.log(personas);
/*
[
  { nombre: 'Daniel', edad: 2 },
  { nombre: 'Julian', edad: 1 },
  { nombre: 'David', edad: 3 }
]
*/

/* Puedo ordenar los array de objetos [{}]
comparando el valor de uno de sus objetos

Ordenar personas por su EDAD
de menor a mayor (ascendente) (1, 2, 3) */
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);
/*
[
  { nombre: 'c', edad: 1 },
  { nombre: 'a', edad: 2 },
  { nombre: 'b', edad: 3 }
]
*/

/* Ordenar personas por su NOMBRE
en orden alfabetico de menor a mayor (ascendente) (a, b, c)

.localeCompare() devuelve un número entero
según el orden que se encuentran las letras en el abecedario:
1) negativo ó -1 si str esta ANTES de str2

2) positivo ó 1 si str esta DESPUES de str2

3) 0 si str y str2 son los MISMOS

https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript */

personas.sort((a, b) => a.nombre.localeCompare(b.nombre, 'es-ES'));
console.log(personas);
/*
[
  { nombre: 'a', edad: 2 },
  { nombre: 'b', edad: 3 },
  { nombre: 'c', edad: 1 }
]
*/

/* --------------------------------------------------------------- */

/* Ejemplo 8 - .sort() y sintaxis de propagación:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sort_returns_the_reference_to_the_same_array

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy */

// Array original (existente) con numeros en desorden
let array = [2, 1, 3];
console.log(array);            // (3) [2, 1, 3]

// La variable sort crea una copia del array ordenado de menor a mayor (ascendente)
const sort = array.sort((a, b) => a - b);
console.log(sort);             // (3) [1, 2, 3]
console.log(array);            // (3) [1, 2, 3]

/* Si modifico el array original,
tambien se modifica la copia del array original sort (MUtabilidad)

El 'nuevo elemento' se reemplaza en ambas variables sort y array */
sort[0] = 'nuevo elemento 1';  // modificar sort copia
console.log(sort);             // (3) ['nuevo elemento 1', 2, 3]
console.log(array);            // (3) ['nuevo elemento 1', 2, 3]

array[1] = 'nuevo elemento 2'; // modificar array original
console.log(sort);             // (3) ['nuevo elemento 1', 'nuevo elemento 2', 3]
console.log(array);            // (3) ['nuevo elemento 1', 'nuevo elemento 2', 3]

/* Para crear una copia del array ordenado de menor a mayor (ascendente)
y que NO se modifiq el array original
puedo usar la sintaxis de propagación (INmutabilidad) */

// Hacer otra vez q el array tenga los numeros en desorden
array = [2, 1, 3];
console.log(array);            // (3) [2, 1, 3]

/* Usar la sintaxis de propagación
para crear copia con numeros ordenados de menor a mayor (ascendente) */
const copia = [...array].sort((a, b) => a - b);
console.log(copia);           // (3) [1, 2, 3]

// NO se modifica el array original (INmutabilidad)
console.log(array);            // (3) [2, 1, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 9 - Array Disperso (Sparse Array) [,] y Método .sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#using_sort_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description

.sort() conserva las ranuras vacias de los arrays dispersos [,] */
console.log([,].sort());                     // [ <1 empty item> ]
console.log([1, , 3].sort((a, b) => a - b)); // (3) [1, 3, vacío]
console.log(['a', , 'c'].sort());            // (3) ['a', 'c', vacío]

// Las ranuras vacias [,] se ordenan de ultimo y undefined de penultimo
console.log([undefined, 'a', , 'c'].sort()); // (4) [ 'a', 'c', undefined, <1 empty item> ]
