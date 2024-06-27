/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Tutorial - Midudev...
- Array by Copy - Métodos de Array .to 
https://www.youtube.com/watch?v=v6WZI1Zs9aY&t=2076s

https://midu.dev/to-reversed-to-spliced-to-sorted-with/

- .toSorted()
https://www.youtube.com/watch?v=v6WZI1Zs9aY&t=2537s

https://youtu.be/YIZWGn13RCE


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
| .sort()                                 | ✔️                    |                       |
| .splice()                               |                       |                       |
| nombreArray[numeroIndice]="nuevo valor" |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|
| .toReversed()                           | INmutable             | ✔️                     |
| .toSorted()                             | X                     |                       |
| .toSpliced()                            |                       |                       |
| .with()                                 |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|

Las DIFERENCIAS están de amarillo:

                                                |---------------------------------------------------------|------------------------------------------------|
                                                | .toSorted()                                             | .sort()                                        |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| ¿.toSorted() y .sort()                        | ✔️                                                       | ✔️                                              |
| Ordena ASCENDENTEMENTE (de menor a mayor)     |                                                         |                                                |
| las letras en orden alfabético (a, b, c...)   |                                                         |                                                |
| y los números (1, 2, 3...)?                   |                                                         |                                                |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| ¿.toSorted() y .sort()                        | ✔️                                                       | ✔️                                              |
| El primer elemento del array                  |                                                         |                                                |
| se convierte en el último                     |                                                         |                                                |
| y el último elemento                          |                                                         |                                                |
| se convierte en el primero?                   |                                                         |                                                |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| ¿.sort().reverse() y .toSorted().toReversed() | ✔️                                                       | ✔️                                              |
| Ordena DESCENDENTEMENTE (de mayor a menor)    |                                                         |                                                |
| las letras en orden alfabético (…c, b, a)     |                                                         |                                                |
| y los números (…3, 2, 1)?                     |                                                         |                                                |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| ¿MODIFICA los elementos                       | INmutable                                               | MUtable                                        |
| del array1 original (existente)?              | .toSorted()                                             | .sort()                                        |
|                                               | .toSorted().toReversed()                                | .sort().reverse()                              |
|                                               | X                                                       | ✔️                                              |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| ¿Crea una nueva COPIA array2 del array1?      | .toSorted()                                             | .sort()                                        |
|                                               | .toSorted().toReversed()                                | .sort().reverse()                              |
|                                               | ✔️                                                       | X                                              |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| Array disperso [,]                            | Imprimir ranura vacia de array disperso [,]             | En cambio, .toSorted()                         |
|                                               | SIN usar metodos de array                               | reemplaza las ranuras vacias [,] por undefined |
|                                               | console.log([,]);                                       | console.log([,].toSorted());                   |
|                                               | // [ <1 empty item> ]                                   | // [ undefined ]                               |
|                                               |                                                         |                                                |
|                                               | .sort() conserva las ranuras vacias                     |                                                |
|                                               | de los arrays dispersos [,]                             |                                                |
|                                               | console.log([,].sort());                                |                                                |
|                                               | // [ <1 empty item> ]                                   |                                                |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| ¿Usa el algoritmo en el lugar?                | ✔️                                                       | ✔️                                              |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| Ejemplo                                       | array1 original (existente)                             | En cambio .sort() SI modifica el array1        |
|                                               | const numeros = [3, 2, 1];                              | numeros.sort(compareFn);                       |
|                                               | console.log(numeros);                                   | console.log(numeros);                          |
|                                               | // (3) [3, 2, 1]                                        | (3) [ 1, 2, 3 ]                                |
|                                               |                                                         |                                                |
|                                               | Funcion compareFn para ordenar array con numeros        |                                                |
|                                               | const compareFn = (a, b) => a - b;                      |                                                |
|                                               | console.log(compareFn);                                 |                                                |
|                                               | // (a, b) => a - b                                      |                                                |
|                                               |                                                         |                                                |
|                                               | .toSorted() y .sort()                                   |                                                |
|                                               | Ordenar array con numeros de menor a mayor (ASCENDENTE) |                                                |
|                                               |                                                         |                                                |
|                                               | .toSorted() NO modifica el array1                       |                                                |
|                                               | const copia = numeros.toSorted(compareFn);              |                                                |
|                                               | console.log(copia);   // (3) [1, 2, 3]                  |                                                |
|                                               | console.log(numeros); // (3) [3, 2, 1]                  |                                                |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|
| Sintaxis                                      |                                              SIN Funcion (Functionless)                                  |
|                                               |---------------------------------------------------------|------------------------------------------------|
|                                               | array.toSorted()                                        | array.sort()                                   |
|                                               |---------------------------------------------------------|------------------------------------------------|
|                                               |                                           Funcion Flecha (Arrow function)                                |
|                                               |---------------------------------------------------------|------------------------------------------------|
|                                               | array.toSorted((a, b) => { ... })                       | array.sort((a, b) => { ... })                  |
|                                               |---------------------------------------------------------|------------------------------------------------|
|                                               |                                   Función de Comparación (Compare function)                              |
|                                               |---------------------------------------------------------|------------------------------------------------|
|                                               | array.toSorted(compareFn)                               | array.sort(compareFn)                          |
|                                               |---------------------------------------------------------|------------------------------------------------|
|                                               |                                       Funcion de Comparacion en una Sola Linea                           |
|                                               |                                             (Inline compare function)                                    |
|                                               |---------------------------------------------------------|------------------------------------------------|
|                                               | array.toSorted(function compareFn(a, b) { ... })        | array.sort(function compareFn(a, b) { ... })   |
|-----------------------------------------------|---------------------------------------------------------|------------------------------------------------|

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted#syntax */

// SIN Funcion (Functionless):
// array.sort()
// array.toSorted()

// Funcion Flecha (Arrow Function):
// array.sort((a, b) => { /* … */ })
// array.toSorted((a, b) => { /* … */ })

// Funcion de Comparacion (Compare function)
// array.sort(compareFn)
// array.toSorted(compareFn)

// Funcion de Comparacion en una Sola Linea (Inline compare function):
// array.sort(function compareFn(a, b) { /* … */ })
// array.toSorted(function compareFn(a, b) { /* … */ })

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

// Ejemplo 1 - Diferencias y Similitudes Entre .toSorted() y .sort() + .sort().reverse() y .toSorted().toReversed()

// array1 original (existente)
const numeros = [2, 4, 3, 1];
const letras = ['b', 'd', 'c', 'a'];

/* .toSorted() y .sort()
Ordenar de menor a mayor (ASCENDENTE)

.toSorted() NO modifica el array1 */
let copia = numeros.toSorted((a, b) => a - b);
console.log(copia);   // (4) [ 1, 2, 3, 4 ] -> orden ascendente
console.log(numeros); // (4) [2, 4, 3, 1]   -> array desordenado

copia = letras.toSorted((a, b) => a.localeCompare(b, 'es-ES'));
console.log(copia);   // (4) [ 'a', 'b', 'c', 'd' ] -> orden ascendente
console.log(letras);  // (4) ['b', 'd', 'c', 'a']   -> array desordenado

// En cambio, .sort() SI modifica el array1
numeros.sort((a, b) => a - b);
console.log(numeros); // (4) [ 1, 2, 3, 4 ] -> orden ascendente

letras.sort((a, b) => a.localeCompare(b, 'es-ES'));
console.log(letras);  // (4) [ 'a', 'b', 'c', 'd' ] -> orden ascendente

/* .toSorted().toReversed() y .sort().reverse()
Ordenar de mayor a menor (DESCENDENTE)

.toSorted().toReversed() NO modifica el array1  */
copia = numeros.toSorted((a, b) => a - b).toReversed();
console.log(copia);   // (4) [ 4, 3, 2, 1 ] -> orden descendente

// En cambio, .sort().reverse() SI modifica el array1
numeros.sort((a, b) => a - b).reverse();
console.log(numeros); // (4) [ 4, 3, 2, 1 ] -> orden descendente

letras.sort((a, b) => a.localeCompare(b, 'es-ES')).reverse();
console.log(letras);  // (4) [ 'd', 'c', 'b', 'a' ] -> orden descendente

/* --------------------------------------------------------------- */

/* Ejemplo 2 - ((a, b) => a - b) para array con números:
https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#creating_displaying_and_sorting_an_array

ERROR:
Los numeros Number() se convierten a texto String()
cuando NO escribo nada dentro del par de parentesis de .toSorted() y .sort(),
esto ocasiona un error.

La siguiente linea de codigo tiene un error:
NO esta ordenando los numeros */
console.log([9, '80000', 1].sort());                    // (3) [1, '80000', 9] -> .sort()
console.log([9, '80000', 1].toSorted());                // (3) [1, '80000', 9] -> .toSorted()

/* SOLUCIÓN:
((a, b) => a - b)) ordena numeros de menor a mayor (ascendente),
NO funciona con texto String() */
console.log([9, '80000', 1].sort((a, b) => a - b));     // (3) [1, 9, '80000'] -> .sort()
console.log([9, '80000', 1].toSorted((a, b) => a - b)); // (3) [1, 9, '80000'] -> .toSorted()

/* --------------------------------------------------------------- */

/* Ejemplo 3 - ((a, b) => a.localeCompare(b, 'es-ES')) para array con letras:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_non-ascii_characters

Usar este codigo para ordenar arrays
que contienen idiomas diferentes al ingles, es decir:

1) Vocales con tildes,
lo cual es lo mismo q
caracteres q NO son ASCII

2) Array q contiene letra ñ */

console.log(['ñ', 'ú', 'ó', 'í', 'é', 'á'].sort((a, b) => a.localeCompare(b, 'es-ES')));     // (6) ['á', 'é', 'í', 'ñ', 'ó', 'ú'] -> .sort()
console.log(['ñ', 'ú', 'ó', 'í', 'é', 'á'].toSorted((a, b) => a.localeCompare(b, 'es-ES'))); // (6) ['á', 'é', 'í', 'ñ', 'ó', 'ú'] -> .toSorted()

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Desordenar array:
https://youtu.be/YIZWGn13RCE

https://twitter.com/midudev/status/1488211287159025667/photo/1

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

En otras palabras:
Cambiar las posiciones de los elementos del array pseudo-aleatoriamente usando .toSorted() y Math.random() */

const numeros2 = [2, 4, 6, 8];
console.log(numeros2);
// (4) [2, 4, 6, 8]

const pseudoaleatorio = numeros2.toSorted(() => Math.random() - 0.5);
console.log(pseudoaleatorio);
/* (4) [8, 6, 4, 2]
   (4) [2, 4, 6, 8]
   (4) [2, 8, 4, 6] */

/*
Math.random() Numero pseudo-aleatorio entre 0 y 1
0 <= numero < 1

Casi siempre Math.random() es un numero decimal

Math.random() NO es 100% aleatorio,
casi siempre da resultados cercanos a 0.5

Casi siempre q ejecuto Math.random() da un resultado diferente */

console.log(Math.random()); // 0.401307855455707
console.log(Math.random()); // 0.3411483314021051
console.log(Math.random()); // 0.9367034277578408

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Obtener aleatoriamente un elemento del array:

https://youtu.be/YIZWGn13RCE

https://twitter.com/midudev/status/1488211291802152965/photo/1

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */

const letras2 = ['a', 'b', 'c'];
//                0    1    2

console.log(letras2);
// (3) ['a', 'b', 'c']

/* Esto NO es 100% aleatorio porq a veces el indice NO cambia

Math.floor() aproximar al MENOR numero entero

Multiplicar:
(Math.random() Numero pseudo-aleatorio y decimal entre 0 y 1) * (.length numero de elementos del array) */

const indicePseudoaleatorio = Math.floor(
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

/* Ejemplo 6 - .toSorted(), .sort() y undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description

Los elementos q son undefined se situan de ultimo despues de ordenar el array */

console.log([3, undefined, 1].sort((a, b) => a - b));                               // (3) [1, 3, undefined] -> .sort()
console.log([3, undefined, 1].toSorted((a, b) => a - b));                           // (3) [1, 3, undefined] -> .toSorted()

console.log(['c', undefined, 'a'].sort((a, b) => a.localeCompare(b, 'es-ES')));     // (3) ['a', 'c', undefined] -> .sort()
console.log(['c', undefined, 'a'].toSorted((a, b) => a.localeCompare(b, 'es-ES'))); // (3) ['a', 'c', undefined] -> .toSorted()

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
let ordenar = personas.toSorted((a, b) => a.edad - b.edad);
console.log(ordenar);
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

ordenar = personas.toSorted((a, b) => a.nombre.localeCompare(b.nombre, 'es-ES'));
console.log(ordenar);
/*
[
  { nombre: 'a', edad: 2 },
  { nombre: 'b', edad: 3 },
  { nombre: 'c', edad: 1 }
]
*/

/* --------------------------------------------------------------- */

/* Ejemplo 8 - .sort() y ... sintaxis de propagación (MALA PRACTICA)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sort_returns_the_reference_to_the_same_array

https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

Puedo usar juntos .sort() y la ... sintaxis de propagación para ordenar un array
SIN modificar el array1 original (INmutabilidad),
pero hacer esto es MALA PRACTICA,
lo correcto es usar .toSorted()
porque escribo menos codigo (codigo limpio)
y se ejecuta mas rapido en arrays con muchos elementos */

// array1 original (existente) con numeros en desorden
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
const copia2 = [...array].sort((a, b) => a - b);
console.log(copia2);           // (3) [1, 2, 3]

// NO se modifica el array original (INmutabilidad)
console.log(array);            // (3) [2, 1, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 9 - Métodos .sort() y .toSorted() en Array Disperso [,] (Sparse Array)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted#using_tosorted_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#using_sort_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description

Imprimir ranura vacia de array disperso [,]
SIN usar metodos de array */

console.log([,]);                                                          // [ <1 empty item> ]

// .sort() conserva las ranuras vacias de los arrays dispersos [,]
console.log([,].sort());                                                   // [ <1 empty item> ]               -> .sort()

// En cambio, .toSorted() reemplaza las ranuras vacias por undefined
console.log([,].toSorted());                                               // [ undefined ]                    -> .toSorted()

console.log([1, , 3].sort((a, b) => a - b));                               // (3) [ 1, 3, <1 empty item> ]     -> .sort()
console.log([1, , 3].toSorted((a, b) => a - b));                           // (3) [ 1, 3, undefined ]          -> .toSorted()

console.log(['a', , 'c'].sort((a, b) => a.localeCompare(b, 'es-ES')));     // (3) [ 'a', 'c', <1 empty item> ] -> .sort()
console.log(['a', , 'c'].toSorted((a, b) => a.localeCompare(b, 'es-ES'))); // (3) [ 'a', 'c', undefined ]      -> .toSorted()

// .sort() ordena las ranuras vacias [,] de ultimo y undefined de penultimo
console.log([undefined, 'a', , 'c'].sort());     // (4) [ 'a', 'c', undefined, <1 empty item> ]

// En cambio, .toSorted() reemplaza las ranuras vacias [,] por undefined y situa de ultimo todos los undefined
console.log([undefined, 'a', , 'c'].toSorted()); // [ 'a', 'c', undefined, undefined ]

/* --------------------------------------------------------------- */

/* Ejemplo 10 - Metodos de Array [] .toSorted() y .sort() en objeto literal {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted#calling_tosorted_on_non-array_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#calling_sort_on_non-array_objects

Ambos metodos .toSorted() y .sort()
leen la propiedad length de this.
Luego recopilan todas las propiedades
de clave entera existentes
en el rango de 0 a .length - 1,
las ordena y las escribe en una nuevo array.

Si faltan propiedades en el rango,
las propiedades finales correspondientes se eliminan,
como si las propiedades inexistentes se ordenaran hacia el final. */

const objetoLiteral = {
// propiedad: valor,
  length: 3,
  hola: 'mundo',
  0: 5,
  2: 4,
  3: 3, // propiedad: valor, ignorado por .toSorted() porq la longitud length es 3
};
console.log(objetoLiteral);
/*
{
  '0': 5,
  '2': 4,
  '3': 3,
  length: 3,
  hola: 'mundo'
}
*/

// .toSorted()
const copia3 = Array.prototype.toSorted.call(objetoLiteral);
console.log(copia3);
// (3) [4, 5, undefined]

// .sort()
Array.prototype.sort.call(objetoLiteral);
console.log(objetoLiteral);
/*
{
  '0': 4,
  '1': 5,
  '3': 3,
  length: 3,
  hola: 'mundo'
}
*/
