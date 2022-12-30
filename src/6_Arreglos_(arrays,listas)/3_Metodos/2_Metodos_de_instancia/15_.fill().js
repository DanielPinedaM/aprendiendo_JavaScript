/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial - .fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

.fill() reemplazar UN VALOR value
en los elementos de un array
desde start una hasta end otra posición (indice)

.fill() cambia (reemplaza)
todos los elementos de un array por un valor value,
desde una posicion inicial start
(predeterminado 0
q es la PRIMERA posicion)
hasta una posicion final end
(predeterminado array.length
q es el numero total de ELEMENTOS contando desde 1)

.fill() MODIFICA (MUTA) los elementos del array original
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods

.fill() NO modifica el numero total de elementos del array .length

Su sintaxis es:
.fill(value, start, end)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#syntax

Donde...
- .fill()
Es el nombre del metodo

- value
* Es obligatorio

* Es el valor q se reemplaza en el array

- start
* Es opcional

* Es el PRIMER numero de posicion (indice)
A PARTIR del cual se reemplaza el valor value

* Cuando NO se copia start
entonces se establece
en su valor por defecto que es 0,
el primer elemento

* Si es posible, start se convierte a un numero entero
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion

- end
* Es opcional

* Es el ULTIMO numero de posicion (indice)
HASTA el cual se reemplaza el valor value

* Cuando NO se copia end
entonces se establece
en su valor por defecto que es
array.length el numero total de ELEMENTOS contando desde 1

* Si es posible, end se convierte a un numero entero */

/* ---------------------------------------------------------------------------- */

/* Ejemplo 1:
Reemplazar por circulo '●'...

- Las posiciones 0 y 1 */
['■', '■', '■', '■'].fill('●', 0, 2); // (4) ['●', '●', '■', '■']

// - Todos los elementos A PARTIR de la posicion 2
['■', '■', '■', '■'].fill('●', 2);    // (4) ['■', '■', '●', '●']

// - La ULTIMA -1 posicion
['■', '■', '■', '■'].fill('●', -1); // (4) ['■', '■', '■', '●']

/* ---------------------------------------------------------------------------- */

/* Ejemplo 2 - El metodo .fill() MODIFICA (MUTA) los elementos del array original:
El array numeros en un principio tiene los numeros del 1 al 5 */
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

// numero total de ELEMENTOS contando desde 1
const numeroElementos = numeros.length;
console.log(numeroElementos);
// 5

/* Reemplazar con 0 desde la posicion (indice) 2 hasta 999

999 > array.length
999 es MAYOR QUE el numero total de ELEMENTOS del array .length */
console.log(numeros.fill(0, 2, 999));
// (5) [1, 2, 0, 0, 0]

/* En un principio el array original
tenia los elementos (5) [1, 2, 3, 4, 5]
pero despues de usar el metodo .fill()
el array se ha modificado por (5) [1, 2, 0, 0, 0] */
console.log(numeros);
// (5) [1, 2, 0, 0, 0]

/* He definido el array numeros con let y NO con const,
para poderlo re-asignar a su valor original con los numeros del 1 al 5 */
numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* ---------------------------------------------------------------------------- */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#using_fill

Las dos siguientes lineas de codigo dan el mismo resultado:
Reemplazar con 0 TODOS los elementos
A PARTIR de la posicion (indice) 1
hasta el numero total de ELEMENTOS .length

SI se incluye la posicion 1
y el numero total de ELEMENTOS .length

La posicion 1 es el segundo elemento del array */

//                         .fill(value, start, end)
console.log([1, 2, 3, 4, 5].fill(0, 1, numeroElementos)); // (5) [1, 0, 0, 0, 0]
/* Cuando NO se escribe end
entonces los elementos se reemplazan
hasta el numero total de ELEMENTOS .length */
console.log([1, 2, 3, 4, 5].fill(0, 1));                  // (5) [1, 0, 0, 0, 0]

/* Las dos siguientes lineas de codigo dan el mismo resultado:
Reemplazar con 0 desde la posicion (indice) 2
hasta la PE-nultima posicion array.length - 1

La ULTIMA posicion NO se reemplaza  */
console.log([1, 2, 3, 4, 5].fill(0, 2, numeroElementos - 1)); // (5) [1, 2, 0, 0, 5]
console.log([1, 2, 3, 4, 5].fill(0, 2, numeros.length - 1));  // (5) [1, 2, 0, 0, 5]

/* array.length - 1 y numeroElementos - 1 son lo mismo

numeros es el nombre del array */
console.log(numeroElementos - 1); // 4
console.log(numeros.length - 1);  // 4

// .fill(0) Reemplazar TODOS los elementos del array con 0
console.log([1, 2, 3, 4, 5].fill(0));
// (5) [0, 0, 0, 0, 0]

/* Cuando NO escribo nada dentro del par de parentesis de .fill()
entonces reemplaza TODOS los elementos del array por undefined */
console.log([1, 2, 3, 4, 5].fill());
// (5) [undefined, undefined, undefined, undefined, undefined]

/* * start <= -array.lengt
SI start es MENOR O IGUAL Q el numero de elementos del array .length pero NEGATIVO,
entonces start se establece en 0,

El numero de elementos del array (5) [1, 2, 3, 4, 5] es 5 (POSITIVO),
entonces si en start escribo -5 (NEGATIVO)
o un numero MENOR Q -5 (NEGATIVO),
start se establece en 0,
0 significa q
los elementos se EMPIEZAN a reemplazar
A PARTIR de la PRIMERA posicion (indice)

En el siguiente ejemplo:
1) 6 es el numero q se reemplaza en los elementos del array (5) [1, 2, 3, 4, 5]

2) start 0 es lo mismo q start -5 y -999 */

//                         .fill(value, start, end)
console.log([1, 2, 3, 4, 5].fill(6, 0));       // (5) [6, 6, 6, 6, 6]
console.log([1, 2, 3, 4, 5].fill(6, -5));      // (5) [6, 6, 6, 6, 6]
console.log([1, 2, 3, 4, 5].fill(6, -999));    // (5) [6, 6, 6, 6, 6]

console.log([1, 2, 3, 4, 5].fill(6, 0, 3));    // (5) [6, 6, 6, 4, 5]
console.log([1, 2, 3, 4, 5].fill(6, -999, 3)); // (5) [6, 6, 6, 4, 5]

/* .fill() devuelve exactamente el mismo array
SIN reemplazar ningun valor en los siguientes casos:
1) start >= array.length
Si start es MAYOR O IGUAL Q el numero total de elementos array.length

start = numeroElementos = numeros.length = 5 */
console.log([1, 2, 3, 4, 5].fill(0, numeroElementos)); // (5) [1, 2, 3, 4, 5]

// (999 start) > (5 numeros.length)
console.log([1, 2, 3, 4, 5].fill(0, 999));             // (5) [1, 2, 3, 4, 5]

/* 2) (start = NaN) Y (end = NaN)
Ambos start y end son un tipo de dato
q NO se puede convertir a tipo numero Number(),
es decir, un dato que NO es un Numero NaN */
console.log([1, 2, 3, 4, 5].fill(0, NaN, NaN));                   // (5) [1, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].fill(0, 'hola mundo', 'hola mundo')); // (5) [1, 2, 3, 4, 5]

/* 3) start = end
start y end tienen el MISMO numero */
//                         .fill(value, start, end)
console.log([1, 2, 3, 4, 5].fill(0, 0, 0));     // (5) [1, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].fill(0, -1, -1));   // (5) [1, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].fill(0, 999, 999)); // (5) [1, 2, 3, 4, 5]

/* 4) start > end
start es MAYOR Q end

(999 start) > (1 end) */
console.log([1, 2, 3, 4, 5].fill(0, 999, 1)); // (5) [1, 2, 3, 4, 5]

/* 5) (start > array.length) Y (end > array.length)
Ambos start y end son MAYOR Q
el numero total de elementos del array .length

(6 > array.length) Y (7 > array.length) */
console.log([1, 2, 3, 4, 5].fill(0, 6, 7)); // (5) [1, 2, 3, 4, 5]

/* .fill() CON NUMEROS NEGATIVOS
* (start < 0) ó (end < 0)
Si start ó end es negativo, entonces
los números negativos cuentan al revés
desde atrás (ultima) hacia adelante (primera) posición

Reemplazar con 0 el ANTE-penultimo elemento
q esta en la posicion (indice) -3,
NO se incluye la posicion -2 */
console.log([1, 2, 3, 4, 5].fill(0, -3, -2));
// (5) [1, 2, 0, 4, 5]

/* Reemplazar con 0 los elementos q estan en
la ANTE-penultima -3 y PE-nultima -2 posicion (indice),
NO se incluye la ULTIMA -1 posicion */
console.log([1, 2, 3, 4, 5].fill(0, -3, -1));     // (5) [1, 2, 0, 0, 5]

/* Si es posible, start '-3' y end '-1'
se convierten a un numero entero Number() */
console.log([1, 2, 3, 4, 5].fill(0, '-3', '-1')); // (5) [1, 2, 0, 0, 5]

/* Reemplazar con 0 los elementos q estan
A PARTIR de la ANTE-penultima -3 posicion (indice) */
console.log([1, 2, 3, 4, 5].fill(0, -3));
// (5) [1, 2, 0, 0, 0]

// Reemplazar con 0 SOLAMENTE la ULTIMA -1 posicion (indice)
console.log([1, 2, 3, 4, 5].fill(0, -1));
// (5) [1, 2, 3, 4, 0]

/* ---------------------------------------------------------------------------- */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#using_fill_to_create_a_matrix_of_all_1

1) Usar el metodo .fill()

2) Llenar todas las posiciones (indices)
de un array bi-dimensional (anidado) con el mismo elemento

3) Re-asignar (modificar) cualquier posicion del array bi-dimensional

Crear array con 3 elementos vacios (empty items)
usando el constructor new Array() */
const arrayBidimensional = new Array(3);
console.log(arrayBidimensional);
// (3) [ <3 empty items> ]

// .length Numero total de elementos contando desde 1
console.log(arrayBidimensional.length);
// 3

for (let i = 0; i < arrayBidimensional.length; i++) { // Recorrer (iterar) array
  // 2) Llenar arrayBidimensional con el mismo elemento 1
  arrayBidimensional[i] = new Array(4).fill(1);

  // Imprimir array en cada iteracion
  console.log(arrayBidimensional[i]);
}

/* Actualmente TODOS los elementos del arrayBidimensional son 1

Esto es un array
4x3
anchoXalto

(4) [ 1, 1, 1, 1 ]
(4) [ 1, 1, 1, 1 ]
(4) [ 1, 1, 1, 1 ]

3) Re-asignar la posicion [0][0]
q se encuentra en la esquina superior izquierda ↖
del arrayBidimensional */
arrayBidimensional[0][0] = 10;
console.log(arrayBidimensional[0][0]); // 10
console.log(arrayBidimensional[1][0]); // 1
console.log(arrayBidimensional[2][0]); // 1

console.log(arrayBidimensional);
/*
[
  (4) [ 10, 1, 1, 1 ],
  (4) [ 1, 1, 1, 1 ],
  (4) [ 1, 1, 1, 1 ]
]
*/

/* ---------------------------------------------------------------------------- */

/* Ejemplo 5 - Metodo .fill() en Array Vacio []
.fill() NO puede modificar un array vacio []
porq el array vacio NO tiene elementos */

console.log([].length);        // 0 -> Array vacio SIN elementos []

console.log([].fill());        // []
console.log([].fill(0));       // []
console.log([].fill(0, 0));    // []
console.log([].fill(0, 0, 0)); // []

/* ---------------------------------------------------------------------------- */

/* Ejemplo 6:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#using_fill_to_populate_an_empty_array

Crear un array...
1) De 3 posiciones (indices)

2) Todas sus 3 posiciones contienen el numero (elemento) 4

3) Usar el constructor Array() y el metodo .fil()

.fill(4) y .fill(4, 0) son lo mismo */
let arrayRepetido = Array(3).fill(4);
console.log(arrayRepetido); // (3) [4, 4, 4]

arrayRepetido = Array(3).fill(4, 0);
console.log(arrayRepetido); // (3) [4, 4, 4]

/* ---------------------------------------------------------------------------- */

/* 7) Metodo .fill() en objetoLiteral {} ...

Ejemplo 7.1:

7.1.1) Reemplazar con un objeto literal vacio
los elementos de un array [{}]
A PARTIR de la posicion (indice) 1
hasta el numero total de ELEMENTOS .length */
console.log([1, 2, 3, 4, 5]);             // (5) [1, 2, 3, 4, 5]
console.log([1, 2, 3, 4, 5].fill({}, 1)); // (5) [1, {}, {}, {}, {}]

/* Ejemplo 7.2:
7.2.1) Crear un array
que contenga un objeto literal [{}]
con los mismos pares de propiedad: 'valor',

Array [] q contiene 3 objetos vacios {} */
const array = Array(3).fill({});
console.log(array);
// (3) [{}, {}, {}]

/* 7.2.2) Llenar el objeto literal
q esta dentro del array [{}]
con los mismos pares de propiedad: 'valor', */
array[0].propiedad = 'valor';
console.log(array);
/*
[
  { propiedad: 'valor' },
  { propiedad: 'valor' },
  { propiedad: 'valor' }
]
*/

/* Ejemplo 7.3:
6.3.1) El método .fill() lee la propiedad .length de this
y establece el valor de cada propiedad entera de start a end

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#calling_fill_on_non-array_objects */

const objetoLiteral = {
// propiedad: valor,
  length: 2,
};
console.log(objetoLiteral);
/*
{
  length: 2
}
*/

/*
7.3.2) 1 es el valor del objetoLiteral {}

7.3.3) Las propiedades son numeros q empiezan en 0
       y terminan dependiendo de length: 2,

7.3.4) length: 2, significa q se añaden 2 nuevos pares de propiedad: valor,
*/
const fill = Array.prototype.fill.call(objetoLiteral, 1);
console.log(fill);
/*
{
  0: 1,
  1: 1,
  length: 2
}
*/

/* ---------------------------------------------------------------------------- */

/* Ejemplo 8 - Array Disperso (Sparse Array) y Método .fill()
.fill() funciona con arrays dispersos [,]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

const arrayDisperso = [,];
console.log(arrayDisperso);
// [ <1 empty item> ]

// .fill(0) Reemplazar TODOS los elementos del arrayDisperso por 0
console.log(arrayDisperso.fill(0));
// [0]
