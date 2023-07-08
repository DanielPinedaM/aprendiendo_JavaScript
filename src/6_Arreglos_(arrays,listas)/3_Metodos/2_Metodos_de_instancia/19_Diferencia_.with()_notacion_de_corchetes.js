/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
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

                                                   |--------------------------------------------------------|------------------------------------------------------------------------|
                                                   | .with()                                                | Notación de corchetes                                                  |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| ¿Reemplaza un elemento                           | ✓                                                      | ✓                                                                      |
| que está en una posición (índice) en específico? |                                                        |                                                                        |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| ¿MODIFICA el array1                              | INmutable                                              | MUtable                                                                |
| original (existente)?                            | X                                                      | ✓                                                                      |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| ¿Crea una nueva COPIA array2                     | ✓                                                      | X                                                                      |
| del array1 original?                             |                                                        |                                                                        |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| ¿Sirve para objeto literal {} ?                  | X                                                      | ✓                                                                      |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| ¿Sirve para array [] ?                           | ✓                                                      | ✓                                                                      |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| Ejemplo                                          | // array1 original (existente)                         | En cambio, la notacion de corchetes (MUtable) SI se modifica el array1 |
|                                                  | const array1 = ['▲', '●', '✖', '■'];                   | array1[2] = '❤️'; // nombreArray[indice]="nuevo elemento"             |
|                                                  | //               0    1    2    3 -> POSICION (INDICE) | console.log(array1);                                                   |
|                                                  | //                    ↑                                | // (4) [ '▲', '●', '❤️', '■' ]                                         |
|                                                  |                                                        | //         0    1    2    3 -> POSICION (INDICE)                       |
|                                                  | .with() y Notación de Corchetes                        | //                   ↑                                                 |
|                                                  | Reemplazar el elemento '✖'                             |                                                                        |
|                                                  | q esta en el indice 2 por un corazon '❤️'              |                                                                        |
|                                                  |                                                        |                                                                        |
|                                                  | .with() (INmutable) NO modifica el array1              |                                                                        |
|                                                  | const array2 = array1.with(2, '❤️');                   |                                                                        |
|                                                  | console.log(array2);                                   |                                                                        |
|                                                  | // (4) [ '▲', '●', '❤️', '■' ]                         |                                                                        |
|                                                  | //        0    1    2    3 -> POSICION (INDICE)        |                                                                        |
|                                                  |                                                        |                                                                        |
|                                                  | console.log(array1);                                   |                                                                        |
|                                                  | // (4) [ '▲', '●', '✖', '■' ]                          |                                                                        |
|                                                  | //        0    1    2    3 -> POSICION (INDICE)        |                                                                        |
|                                                  | //                  ↑                                  |                                                                        |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|
| Sintaxis                                         | array.with(numeroIndice, valor)                        | nombreArray[numeroIndice] = “nuevo valor”                              |
|                                                  |                                                        |                                                                        |
|                                                  |                                                        | nombreObjetoLiteral[nombrePropiedad] = “nuevo valor”                   |
|--------------------------------------------------|--------------------------------------------------------|------------------------------------------------------------------------|

Sintaxis:
array.with(numeroIndice, valor)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#syntax

Donde...
- .with()
Nombre del metodo de array

- array
Nombre de la variable con el array en el q quiero intercambiar el elemento

- numeroIndice
Numero de posicion (indice) en donde se reemplaza el elemento (valor)

- valor
* Es el nuevo elemento q se va asignar (reemplazar) en el indice del array []

* Puede ser CUALQUIER tipo de dato (string, booleano, objeto literal, array, etc) */

/* -------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre .with() y Notacion de Corchetes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#creating_a_new_array_with_a_single_element_changed

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

/* .with() (INmutable) NO modifica el array1,
en el indice 2 del array1 el elemento sigue siendo una equis '✖' */
console.log(array1);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//                  ↑

/* en cambio, la notacion de corchetes
nombreArray[indice]="nuevo elemento" (MUtable)
SI se modifica el array1 original (existente)

Antes en array1 en el indice 2 estaba el elemento equis '✖',
pero ahora se ha reemplazado por un corazon '❤️' */
array1[2] = '❤️';
console.log(array1);
// (4) [ '▲', '●', '❤️', '■' ]
//         0    1    2    3 -> POSICION (INDICE)
//                   ↑

/* -------------------------------------------------------------- */

/* Ejemplo 2:
https://www.youtube.com/watch?v=TJKAGh9jzx4&t=1223s

https://youtu.be/CI_FH2N88iE

Recordatorio:
Ver:
- " 9.4.3.3.7) .slice() Extraer una Parte de un Array de Acuerdo a sus Posiciones (Índices) "

- " 5.7.1) ... Sintaxis Extendida (Spread Operator) "

Esto es un problema de Redux:
Puedo usar .slice() q es una alternativa a .with()
para reemplazar un elemento
que está en una posición (índice) en específico,
pero usar .slice() para esto
como hare a continuacion es MALA PRACTICA,
lo correcto es usar .with() */

const figuras = ['▲', '●', '✖', '■'];
//               0    1    2    3 -> POSICION (INDICE)
//                         ↑

console.log(figuras);
// (4) ['▲', '●', '✖', '■']
//                 ↑

/* .slice() Reemplazar el elemento '✖'
q esta en el indice 2 por un corazon '❤️' */
const indice = 2;
console.log(indice);
// 2

const reemplazarElemento = [
  ...figuras.slice(0, indice),
  '❤️',
  ...figuras.slice(indice + 1),
];

console.log(reemplazarElemento);
// (4) [ '▲', '●', '❤️', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//                   ↑

/* Ambos .slice() y .with()
NO modifican el array1 original (existente),
porque el array figuras sigue teniendo los mismos elementos */
console.log(figuras);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//                  ↑

/* -------------------------------------------------------------- */

// Ejemplo 3 - .with() y variable con objetoLiteral {}

console.log(figuras);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//                  ↑

const objetoLiteral = {
  uno: 1,
  dos: 2,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2
}
*/

// Reemplazar el elemento '✖' q esta en el indice 2 por un objetoLiteral {}
const reemplazarElemento2 = figuras.with(2, objetoLiteral);
console.log(reemplazarElemento2);
// (4) ['▲', '●', {  uno: 1, dos: 2 }, '■']

/* -------------------------------------------------------------- */

/* Ejemplo 4
.with() Reemplazar un elemento
que está en una posición (índice) en específico
POR CUALQUIER TIPO DE DATO */

console.log(figuras);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//                  ↑

// String() Texto
figuras.with(2, 'hola mundo'); // (4) [ '▲', '●', 'hola mundo', '■' ]
//                                                     ↑

// Number() Numero
figuras.with(2, 123);          // (4) [ '▲', '●', 123, '■' ]
//                                                 ↑

// BigInt() Numero grande
figuras.with(2, BigInt(999));  // (4) [ '▲', '●', 999n, '■' ]
//                                                  ↑

// Boolean() Booleano
// true Verdadero
figuras.with(2, true);         // (4) [ '▲', '●', true, '■' ]
//                                                  ↑

// false Falso
figuras.with(2, false);        // (4) [ '▲', '●', false, '■' ]
//                                                  ↑

// Symbol() ID, simbolo
figuras.with(2, Symbol('ID')); // (4) [ '▲', '●', Symbol(ID), '■' ]
//                                                     ↑

// null
figuras.with(2, null);         // (4) [ '▲', '●', null, '■' ]
//                                                 ↑

// undefined Indefinido
figuras.with(2, undefined);    // (4) [ '▲', '●', undefined, '■' ]
//                                                     ↑

// NaN No es un Numero
figuras.with(2, NaN);          // (4) [ '▲', '●', NaN, '■' ]
//                                                 ↑

// {} Objeto literal
figuras.with(2, { uno: 1, dos: 2 }); // (4) ['▲', '●', { uno: 1, dos: 2 }, '■']
figuras.with(2, {});                 // (4) [ '▲', '●', {}, '■' ]
//                                                      ↑

// { {} } Objeto de Objetos (Objeto Anidado)
figuras.with(2, { uno: { dos: { tres: 'cuatro' } } });
/*
[
  '▲',
  '●',
  {
    uno: {
           dos: {
                  tres: 'cuatro'
                }
         }
  },
  '■'
]
*/

// [] Array
figuras.with(2, [1, 2, 3]);          // (4) [ '▲', '●', [ 1, 2, 3 ], '■' ]
figuras.with(2, []);                 // (4) [ '▲', '●', [], '■' ]
//                                                      ↑

// [ [] ] Array anidado (array de arrays)
figuras.with(2, [[]]);               // (4) [ '▲', '●', [ [] ], '■' ]
//                                                        ↑

// [ {} ] Array de objetos
figuras.with(2, [{}]);               // [ '▲', '●', [ {} ], '■' ]
//                                                    ↑

/* -------------------------------------------------------------- */

// Ejemplo 5

console.log(figuras);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> POSICION (INDICE)
//        ↑

/* En este ejemplo se reemplaza '▲' por undefined porq
.with() SIN escribir nada dentro del par de parentesis ()
reemplaza por undefined el elemento q esta en el indice 0 */

console.log(figuras.with());
// (4) [undefined, '●', '✖', '■']
//         ↑

/* -------------------------------------------------------------- */

/* Ejemplo 6 - indice negativo y .with()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#parameters

arrayObjeto.with(numeroIndice, value)
numeroIndice < 0

Si numeroIndice es negativo,
entonces los números negativos
cuentan al revés de atrás (ultima)
hacia adelante (primera) posición */

console.log(figuras);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> posicion (indice) POSITIVO
//       -4   -3   -2   -1 -> "               " NEGATIVO
//                  ↑

/* .with() Reemplazar el elemento '✖'
q esta en el indice -2 por un corazon '❤️' */
const copia = figuras.with(-2, '❤️');
console.log(copia);
// (4) [ '▲', '●', '❤️', '■' ]
//                  ↑

console.log(figuras);
// (4) [ '▲', '●', '✖', '■' ]
//                  ↑

/* -------------------------------------------------------------- */

/* Ejemplo 7 - Casos en los q .with() da error RangeError
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#exceptions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

Recordatorio:
Ver esta imagen:
" 9.2) Resumen: Partes (Sintaxis) de un Array " */

console.log(figuras);
// (4) [ '▲', '●', '✖', '■' ]
//        0    1    2    3 -> posicion (indice) POSITIVO
//       -4   -3   -2   -1 -> "               " NEGATIVO

// 3 es la MAYOR (ULTIMA) posicion (indice) POSITIVO del array figuras
console.log(figuras.length - 1);
// 3

/*
arrayObjeto.with(numeroIndice, valor)
1) numeroIndice > array.length-1

SI numeroIndice es MAYOR Q
la ULTIMA posicion del array
entonces .with() da error

Error: el indice 999 no existe en el array figuras */
// figuras.with(999, '❤️');
// RangeError: Invalid index : 999

// -4 es el mas MENOR (PRIMER) posicion (indice) NEGATIVO del array figuras
console.log(-figuras.length);
// -4

/* 2) numeroIndice < -array.length
SI numeroIndice es MENOR Q
el indice negativo mas menor del array
entonces .with() da error */
// figuras.with(-999, '❤️');
// RangeError: Invalid index : -999

/* -------------------------------------------------------------- */

/* Ejemplo 8 - Usar juntos los metodos de array .with() y .map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#chaining_array_methods */

const numeros = [1, 2, 3];
//               0  1  2
//               ↑

console.log(numeros);
// (3) [1, 2, 3]
//      ↑

/* .with() y .map() estan haciendo lo siguiente, en este orden:
1) .with() reemplazar por 6 el elemento 1 q esta en el indice 0 */

console.log(numeros.with(0, 6));
// (3) [6, 2, 3]
//      ↑

// 2) .map() multiplicar cada uno de los elementos del array por 2
const reemplazarNumeroYmultiplicarPorDos = numeros.with(0, 6).map((elemento) => {
  console.log(`${elemento}*2 = ${elemento * 2}`);

  return elemento * 2;
});
/*
'6*2 = 12'
'2*2 = 4'
'3*2 = 6'
*/

console.log(reemplazarNumeroYmultiplicarPorDos);
// (3) [12, 4, 6]

console.log(numeros);
// (3) [1, 2, 3]
//      ↑

/* -------------------------------------------------------------- */

/* Ejemplo 9 - Array Disperso (Sparse Array) [,] y Método .with()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#using_with_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

/* .with() permite reemplazar las ranuras vacias [,]
por otro elemento q NO sea una ranura vacia

.with() reemplazar la ranura vacia [,] del indice 1 por un '❤️' */
let copia2 = arrayDisperso.with(1, '❤️');
console.log(copia2);
// (3) [ 1, '❤️', 3 ]
//           ↑

/* .with() reemplaza las ranuras vacias [,] por undefined

en el indice 1 del arrayDisperso hay una ranura vacia
pero despues de ejecutar .with() se reemplaza por undefined */
copia2 = arrayDisperso.with(0, '❤️');
console.log(copia2);
// (3) ['❤️', undefined, 3]
//                ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

/* -------------------------------------------------------------- */

/* Ejemplo 10 - .with() en objetoLiteral {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with#calling_with_on_non-array_objects

.with() crea y devuelve un nuevo array.

Lee la length propiedad de this
y luego accede a cada propiedad cuya clave es
un numero entero no negativo menor que length.

A medida que se accede a cada propiedad de this,
el elemento del array que tiene un índice
igual a la clave de la propiedad
se establece en el valor de la propiedad.
Finalmente, el valor de la matriz en index se establece en value */

const objetoLiteral2 = {
  length: 3,
  hola: 'mundo',
  0: 5,
  2: 4,
  3: 3, // ignorado por .with() porq la longitud length es 3
};

const copia3 = Array.prototype.with.call(objetoLiteral2, 0, 1);
console.log(copia3);
// [ 1, undefined, 4 ]

console.log(objetoLiteral2);
/*
{
  '0': 5,
  '2': 4,
  '3': 3,
  length: 3,
  hola: 'mundo'
}
*/
