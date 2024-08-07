/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Diferencias y Similitudes Entre .toSpliced() (INmutable)  y .splice() (MUtable) -
Eliminar, Reemplazar o Agregar Elemento de Array INICIANDO en una Posición (Índice) en Especifico

Tutorial - Midudev...
- Array by Copy - Métodos de Array .to 
https://www.youtube.com/watch?v=v6WZI1Zs9aY&t=2076s

https://midu.dev/to-reversed-to-spliced-to-sorted-with/

- .toSpliced() 
https://www.youtube.com/watch?v=v6WZI1Zs9aY&t=2906s


Documentación Oficial…
- .toSpliced()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced

- .splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

Wikipedia - Algoritmo en el lugar (In-place algorithm)
https://en.wikipedia.org/wiki/In-place_algorithm

|-----------------------------------------|-----------------------|-----------------------|
| Metodos de array .to()                  | ¿MODIFICA el array1   | ¿Crea una nueva COPIA |
|                                         | original (existente)? | array2 del array1?    |
|-----------------------------------------|-----------------------|-----------------------|
| .reverse()                              | MUtable               | X                     |
| .sort()                                 | ✔️                     |                       |
| .splice()                               |                       |                       |
| nombreArray[numeroIndice]="nuevo valor" |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|
| .toReversed()                           | INmutable             | ✔️                     |
| .toSorted()                             | X                     |                       |
| .toSpliced()                            |                       |                       |
| .with()                                 |                       |                       |
|-----------------------------------------|-----------------------|-----------------------|

Las DIFERENCIAS están de amarillo:

                                                    |-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
                                                    | .toSpliced()                                                                                                | .splice()                                                                               |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| ¿Elimina   elemento existente                     | ✔️                                                                                                           | ✔️                                                                                       |
| Reemplaza  elemento existente                     |                                                                                                             |                                                                                         |
| Agrega     nuevo elemento                         |                                                                                                             |                                                                                         |
| INICIANDO en una posición (índice) en específico? |                                                                                                             |                                                                                         |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| ¿MODIFICA los elementos                           | INmutable                                                                                                   | MUtable                                                                                 |
| del array1 original (existente)?                  | X                                                                                                           | ✔️                                                                                       |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| ¿Crea una nueva COPIA array2 del array1?          | ✔️                                                                                                           | X                                                                                       |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Valor de retorno                                  | Un NUEVO array2 con                                                                                         | Uno o más elementos                                                                     |
|                                                   | los elementos modificados                                                                                   | que fueron modificados en el array1                                                     |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| ¿Usa el algoritmo en el lugar?                    | ✔️                                                                                                           | ✔️                                                                                       |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Ejemplo                                           | const array1 = ['▲', '●', '✖', '■'];                                                                        | En cambio, .splice() SI modifica el array1                                              |
|                                                   | //             -4    -3   -2   -1  -> Posiciones (indices) NEGATIVOS                                        | console.log(array1.splice(-2, 1)); // ['✖'] -> .splice() devuelve el elemento eliminado |
|                                                   | //                         ↑                                                                                | console.log(array1);               // (3) ['▲', '●', '■']                               |
|                                                   |                                                                                                             |                                                                                         |
|                                                   | console.log(array1);                                                                                        |                                                                                         |
|                                                   | // (4) ['▲', '●', '✖', '■']                                                                                 |                                                                                         |
|                                                   |                                                                                                             |                                                                                         |
|                                                   | .toSpliced() y .splice()                                                                                    |                                                                                         |
|                                                   | Eliminar UN SOLO elemento q esta en un indice en especifico                                                 |                                                                                         |
|                                                   |                                                                                                             |                                                                                         |
|                                                   | Del array (4) ['▲', '●', '✖', '■']                                                                          |                                                                                         |
|                                                   | eliminar ['✖'] que esta en el indice -2                                                                     |                                                                                         |
|                                                   |                                                                                                             |                                                                                         |
|                                                   | .toSpliced() (INmutable) NO modifica el array1 original (existente)                                         |                                                                                         |
|                                                   | const array2 = array1.toSpliced(-2, 1); // -> .toSpliced() devuelve una COPIA con los elementos modificados |                                                                                         |
|                                                   | console.log(array2);                    // (3) ['▲', '●', '■']                                              |                                                                                         |
|                                                   |                                                                                                             |                                                                                         |
|                                                   | console.log(array1);                    // (4) ['▲', '●', '✖', '■']                                         |                                                                                         |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|

Sintaxis:
array.splice(start, deleteCount, item1, item2, itemN)
array.toSpliced(start, deleteCount, item1, item2, itemN)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced#syntax

Donde...
- .splice() y .toSpliced()
Es el nombre del metodo

- array
* Nombre de la variable q contiene el array []

* Es el array en el que quiero eliminar, reemplazar o agregar 1 o más elementos

- start
* Es obligatorio escribirlo

* Es un numero entero

* Numero de posicion (indice) A PARTIR del cual se modifica el array

- deleteCount
* Es opcional escribirlo

* Es un numero entero

* Indica si los elementos se van a agregar, reemplazar o eliminar

- item1, item2, itemN
* Es opcional escribirlo

* Es uno o mas nuevos elementos que se agregan al array desde la posicion (indice) start */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Diferencia Entre .toSpliced() y .splice()

const array1 = ['▲', '●', '✖', '■'];
//             -4    -3   -2   -1  -> Posiciones (indices) NEGATIVOS
//                         ↑

console.log(array1);
// (4) ['▲', '●', '✖', '■']

/* .toSpliced() y .splice()
Eliminar UN SOLO elemento q esta en un indice en especifico

Del array (4) ['▲', '●', '✖', '■']
eliminar ['✖'] que esta en el indice -2

.toSpliced()
1) Crea una nueva COPIA en una variable array2 */
const array2 = array1.toSpliced(-2, 1); // -> .toSpliced() devuelve una COPIA con los elementos modificados
console.log(array2);                    // (3) ['▲', '●', '■']

/* 2) NO modifica el array1 original,
en el array1 aun NO se ha eliminado la ['✖'] */
console.log(array1);                  // (4) ['▲', '●', '✖', '■']

// En cambio, .splice() SI modifica el array1
console.log(array1.splice(-2, 1)); // ['✖'] -> .splice() devuelve el elemento eliminado
console.log(array1);               // (3) ['▲', '●', '■']

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Explicacion COMPLETA de .toSpliced() y .splice()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced#deleting_adding_and_replacing_elements

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#try_it */

// Array original (existente) que modificare despues con .splice()
let figuras = ['▲', '●', '✖', '■'];
//              0    1    2    3   -> Posiciones (indices) POSITIVOS
//             -4    -3   -2   -1  -> "                  " NEGATIVOS

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (SI escribo start) Y (NO escribo deleteCount) Y (NO escribo item1, item2, itemN)
Cuando escribo un solo numero dentro del par de parentesis de .splice()
entonces se eliminan elementos

Eliminar los elementos que estan A PARTIR del indice 2
HASTA el ULTIMO elemento del array,
SI se incluye el indice 2 y el ultimo elemento del array,
se eliminan elementos de indices 2 y 3

Cuando del array (4) ['▲', '●', '✖', '■'] elimino (2) ['✖', '■']
quedan los elementos (2) ['▲', '●']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_all_elements_starting_from_index_2 */

console.log(figuras.splice(2)); // (2) ['✖', '■']
console.log(figuras);           // (2) ['▲', '●']

// Hacer otra vez que el array tenga todas las figuras
figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * start < 0
Si start es negativo,
entonces los números negativos
cuentan al revés de atrás (ultima)
hacia adelante (primera) posición

Eliminar los elementos que estan A PARTIR del indice -2
HASTA el ultimo elemento del array,
SI se incluye el indice -2 y el ultimo elemento del array,
se eliminan elementos de indices -2 y -1

Cuando del array (4) ['▲', '●', '✖', '■'] elimino (2) ['✖', '■']
quedan los elementos (2) ['▲', '●'] */

console.log(figuras.splice(-2)); // (2) ['✖', '■']
console.log(figuras);            // (2) ['▲', '●']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Eliminar UN SOLO elemento q esta en un indice en especifico

Del array (4) ['▲', '●', '✖', '■']
eliminar ['✖'] que esta en el indice -2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_from_index_-2 */

console.log(figuras.splice(-2, 1)); // ['✖']
console.log(figuras);               // (3) ['▲', '●', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = Infinity)
Eliminar los elementos q estan DESDE el indice 1,
hasta el ULTIMO elemento del array,
SI se incluye el indice 1
y el ultimo elemento del array,
se eliminan los elementos de los indices 1, 2 y 3

Cuando del array (4) ['▲', '●', '✖', '■']
elimino (3) ['●', '✖', '■']
queda el elemento ['▲'] */

console.log(figuras.splice(1, Infinity)); // (3) ['●', '✖', '■']
console.log(figuras);                     // ['▲']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = Number.MAX_SAFE_INTEGER)
     Obtengo el mismo resultado con Number.MAX_SAFE_INTEGER */
console.log(figuras.splice(1, Number.MAX_SAFE_INTEGER)); // (3) ['●', '✖', '■']
console.log(figuras);                                    // ['▲']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 1) Y (NO escribo item1, item2, itemN)
Eliminar UN elemento q esta en un indice en especifico

Cuando del array (4) ['▲', '●', '✖', '■']
elimino el elemento circulo ['●'] q esta en el indice 1
quedan los elementos (3) ['▲', '✖', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_3 */

console.log(figuras.splice(1, 1)); // ['●']
console.log(figuras);              // (3) ['▲', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 2) Y (NO escribo item1, item2, itemN)
Eliminar DOS elementos DESDE el indice 1,
se eliminan elementos de indices 1 y 2

Cuando del array (4) ['▲', '●', '✖', '■']
elimino (2) ['●', '✖']
quedan los elementos (2) ['▲', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_2_elements_starting_from_index_2 */

console.log(figuras.splice(1, 2)); // (2) ['●', '✖']
console.log(figuras);              // (2) ['▲', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 0) Y (escribo item1, item2, itemN)
.splice() devuelve un array vacio []
cuando agrego un nuevo elemento en un indice en especifico

Cuando al array (4) ['▲', '●', '✖', '■']
le agrego un elemento corazon '❤️' en el indice 1,
el array con el nuevo elemento agregado es (5) ['▲', '❤️', '●', '✖', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_0_zero_elements_before_index_2_and_insert_drum */

console.log(figuras.splice(1, 0, '❤️')); // []
console.log(figuras);                    // (5) ['▲', '❤️', '●', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Agregar 2 nuevos elementos DESDE un indice en especifico,
agregar dos corazones '❤️', '❤️' DESDE el indice 1

Cuando al array (4) ['▲', '●', '✖', '■']
le agrego dos corazones '❤️', '❤️' en los indices 1 y 2,
el array con los nuevos elementos agregados es (5) ['▲', '❤️', '❤️' '●', '✖', '■']
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_0_zero_elements_before_index_2_and_insert_drum_and_guitar */

console.log(figuras.splice(1, 0, '❤️', '❤️')); // []
console.log(figuras);                          // (5) ['▲', '❤️', '❤️' '●', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 1) Y (escribo item1, item2, itemN)
Reemplazar UN SOLO elemento que esta en un indice en especifico
por otro(s) nuevo(s) elemento(s)

Reemplazar el elemento circulo ['●'] q esta en el indice 1
por UN elemento corazon '❤️'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_2_and_insert_trumpet */

console.log(figuras.splice(1, 1, '❤️')); // ['●']
console.log(figuras);                    // (4) ['▲', '❤️', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Reemplazar el elemento circulo ['●'] q esta en el indice 1
por DOS corazones '❤️', '❤️' */
console.log(figuras.splice(1, 1, '❤️', '❤️')); // ['●']
console.log(figuras);                          // (5) ['▲', '❤️', '❤️', '✖', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 2) Y (escribo item1, item2, itemN)
Reemplazar DOS elementos A PARTIR del indice 1

Reemplazar los dos elementos (2) ['●', '✖']
por dos corazones '❤️', '❤️'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_2_elements_from_index_0_and_insert_parrot_anemone_and_blue */

console.log(figuras.splice(1, 2, '❤️', '❤️')); // (2) ['●', '✖']
console.log(figuras);                          // (4) ['▲', '❤️', '❤️', '■']

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* * (start = 0) ó (start <= -array.length)
TODOS los elementos se eliminan del array ( vaciar array [] )
cuando sucede alguno de estos casos:
- .splice(0)

- start es MENOR O IGUAL Q
el numero de elementos del array .length pero NEGATIVO */
console.log(figuras.splice(0));  // (4) ['▲', '●', '✖', '■']
console.log(figuras);            // []

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);            // (4) ['▲', '●', '✖', '■']

console.log(figuras.length);     // 4 -> longitud array, -4 ó numero menor a -4 (-4, -5, -6...) vacia el array []
console.log(figuras.splice(-4)); // (4) ['▲', '●', '✖', '■']
console.log(figuras);            // []

figuras = ['▲', '●', '✖', '■'];
console.log(figuras);            // (4) ['▲', '●', '✖', '■']

/* .splice() devuelve un array vacio []
y NO modifica el array original (existente)
cuando sucede alguno de estos casos:
- .splice() NO escribo nada dentro del par de parentesis

- (deleteCount <= 0) Y (NO escribo item1, item2, itemN)
  (deleteCount es 0 ó un numero negativo) Y (NO escribo item1, item2, itemN)

- (start >= array.length)
start es MAYOR O IGUAL Q
el numero de elementos del array .length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#return_value */

console.log(figuras.splice());     // []
console.log(figuras);              // (4) ['▲', '●', '✖', '■']

console.log(figuras.splice(1, 0)); // []
console.log(figuras);              // (4) ['▲', '●', '✖', '■']

console.log(figuras.length);       // 4 -> longitud array, 4 ó un numero mayor a 4 (4, 5, 6...) NO modifica el array original
console.log(figuras.splice(4));    // []
console.log(figuras);              // (4) ['▲', '●', '✖', '■']

/* * (start >= array.length) Y (escribo deleteCount) Y (escribo item1, item2, itemN)
SI se cumplen TODAS las siguientes condiciones:
- start es MAYOR O IGUAL Q
el numero de elementos del array .length

- escribo deleteCount,
NO importa q numero sea deleteCount

- escribo uno o mas nuevos elementos a agregar item1, item2, itemN

Entonces se agregan nuevos elementos AL FINAL del array

.length longitud array,
para q se agreguen nuevos elementos
start tiene q ser 4 ó un numero mayor a 4 (4, 5, 6) */
console.log(figuras.length);                     // 4

// Agregar 2 nuevos elementos corazones '❤️', '❤️' AL FINAL del array
console.log(figuras.splice(4, 999, '❤️', '❤️')); // []
console.log(figuras);                            // (6) ['▲', '●', '✖', '■', '❤️', '❤️']

/* --------------------------------------------------------------- */

// Ejemplo 3 - item1, item2, itemN en un array

let figuras2 = ['▲', '●', '✖', '■'];
//               0    1    2    3

const letras = ['a', 'b'];

/* * (escribo start) Y (deleteCount = 0) Y (item1, item2, itemN son un array)
En el array (4) ['▲', '●', '✖', '■']
AGREGARLE el array (2) ['a', 'b']
en el indice 1 */
console.log(figuras2.splice(1, 0, letras)); // []
console.log(figuras2);                      // (5) [ '▲', [ 'a', 'b' ], '●', '✖', '■' ]

// .flat() Aplanar array
figuras2 = figuras2.flat(Infinity);
console.log(figuras2);                      // (6) ['▲', 'a', 'b', '●', '✖', '■']

// Hacer otra vez que el array tenga todas las figuras
figuras2 = ['▲', '●', '✖', '■'];
console.log(figuras2);                      // (4) ['▲', '●', '✖', '■']

/* * (escribo start) Y (deleteCount = 1) Y (item1, item2, itemN son un array)
En el array (4) ['▲', '●', '✖', '■']
REEMPLAZAR el elemento ['●'] q esta en el indice 1
por el array (2) ['a', 'b'] */
console.log(figuras2.splice(1, 1, letras)); // ['●']
console.log(figuras2);                      // (4) [ '▲', [ 'a', 'b' ], '✖', '■' ]

// .flat() Aplanar array
figuras2 = figuras2.flat(Infinity);
console.log(figuras2);                      // (6) ['▲', 'a', 'b', '●', '✖', '■']

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Array Disperso (Sparse Array) [,] en Métodos .toSpliced() y .splice()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced#using_tospliced_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#using_splice_on_sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

// Imprimir array disperso [,] SIN usar metodos de array:

console.log(arrayDisperso);              // (3) [ 1, <1 empty item>, 3 ]

/* Ambos .toSpliced() y .splice()
pueden eliminar las ranuras vacias de los array dispersos [,]

Eliminar la ranura vacia [,] q esta en el indice 1 */

// .toSpliced()
console.log(arrayDisperso.toSpliced(1, 1)); // (2) [1, 3]      -> array despues de eliminar ranura vacia [,]

// .splice()
console.log(arrayDisperso.splice(1, 1)); // [ <1 empty item> ] -> elemento eliminado
console.log(arrayDisperso);              // (2) [1, 3]         -> array despues de eliminar ranura vacia [,]

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Metodos de Array [] .toSpliced() y .splice() en objeto literal {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced#calling_tospliced_on_non-array_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#calling_splice_on_non-array_objects

Ambos métodos .toSpliced() y .splice()
leen la propiedad length de this
y luego accede a cada propiedad con un numero entero */

const objetoLiteral = {
  length: 3,
  hola: 'mundo',
  0: 5,
  2: 4,
};
console.log(objetoLiteral);
/*
{
  '0': 5,
  '2': 4,
  length: 3,
  hola: 'mundo'
}
*/

// .toSpliced()
const toSpliced = Array.prototype.toSpliced.call(objetoLiteral, 0, 1, 2, 3);
console.log(toSpliced);
// (4) [2, 3, undefined, 4]

// .splice()
console.log(Array.prototype.splice.call(objetoLiteral, 0, 1, 2, 3));
// [ 5 ]

console.log(objetoLiteral);
/*
{
  '0': 2,
  '1': 3,
  '3': 4,
  length: 4,
  hola: 'mundo'
}
*/
