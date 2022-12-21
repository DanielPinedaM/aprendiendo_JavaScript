/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
// @ts-nocheck

/* Tutorial:
https://youtu.be/fCvuOyVXUUQ

Documentacion Oficial - .filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

.filter() Crear una COPIA de un ARRAY EXISTENTE
dependiendo de la CONDICIÓN de una FUNCIÓN (FILTRAR array)

.filter() hace lo siguiente:
1) Itera (recorre) el array.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

2) Crea (copia) un nuevo array2
   a partir de uno existente array1.
   https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

3) Elimina en el array2 copiado
   los elementos del array1
   que NO cumplen con la condición de la función
   (cuando la función retorna falso return false),
   SOLAMENTE agrega al array2
   los elementos para los cuales
   la condicion retorna verdadero return true
   (se cumple la condición),
   .filter() FILTRA los elementos de un array.

4) Si ningun elemento del array
   cumple con la condicion de la funcion,
   entonces .filter() devuelve un array vacio []
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#return_value

5) .filter() Devuelve un NUEVO array2 que
   NO modifica el array1 original,
   .filter() es INMUTABLE

6) (array1.length <= array2.length)
   El numero de elementos .length del array1 original
   y la copia array2 puede ser el MISMO
   O la copia array2 puede tener MENOS elementos
   q el array1 original

Su sintaxis es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntax */

// Funcion Flecha (Arrow Function)
// .filter((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function)
// .filter(callbackFn, thisArg)

// Función Retrollamada en una Sola Línea (Inline Callback Function)
// .filter(function (element, index, array) { /* … */ }, thisArg)

/* Donde...
- .filter()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta
para cada uno de los elementos del array

* Si retorna VERDADERO return true
al comparar el elemento actual element
con la condicion de la funcion,
entonces el elemento es AGREGADO a la copia del array,
y si retorna FALSO return false
entonces el elemento es ELIMINADO de la copia del array

La funcion .filter() tiene los siguientes argumentos:

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1

- array
Es el array para el que se evalua la condicion de la funcion

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/* ---------------------------------------------------------------- */

// Ejemplo 1:

/* En el array1 hay 3 cuadrados ['■']
y un circulo ['●'] */
const array1 = ['■', '■', '■', '●'];
console.log(array1);
// (4) ['■', '■', '■', '●']

/* .filter() Crea un nuevo array2
solamente con los cuadrados '■' de array1
y elimina las otras figuras q NO son cuadrados */
const array2 = array1.filter((elemento) => elemento === '■'); // CONDICION (return): elemento === '■'
console.log(array2);
// (3) ['■', '■', '■']

/* La condicion de la funcion se evalua
para el numero total de elementos
que tiene el array1 original .length
en el momento de ejecutar .filter(),
si se agregan nuevos elementos al array1 original
despues de ejecutar .filter(),
entonces los nuevos elementos NO se tendran en cuenta
al crear la copia array2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#affecting_initial_array_modifying_appending_and_deleting

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods

Al crear la copia array2,
.filter() NO evaluo la condicion con el 'NUEVO ELEMENTO'
porq apenas lo acabo de agregar a continuacion: */
console.log(array1.push('NUEVO ELEMENTO')); // 5 -> numero de elementos .length del array1
console.log(array1);                        // [ '■', '■', '■', '●', 'NUEVO ELEMENTO' ]

console.log(array2);                        // [ '■', '■', '■' ]

/* ---------------------------------------------------------------- */

// Ejemplo 2 - FILTRAR los numeros PARES de un array

// Array con numeros impares y pares
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
// (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* .filter() Crear una copia del array numeros
q ELIMINE los numeros IMPARES
y solamente GUARDE los numeros PARES

elemento % 2 === 0 comprueba si
cada uno de los numeros del array
se puede dividir entre 2 */
const par = numeros.filter((elemento) => elemento % 2 === 0);
console.log(par);
// (6) [0, 2, 4, 6, 8, 10]

/* ---------------------------------------------------------------- */

// Ejemplo 3 - Recorrer (Iterar) Array Usando .filter()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* copiar array llamado figuras
a otro array llamado iterar */
const iterar = figuras.filter((elemento, i) => {
  console.log(`i = ${i} | elemento = '${elemento}'`);

  /* .filter() agrega al array iterar
   los elementos q cumplen con la condicion,
   como siempre se retorna verdadero return true
   entonces .filter() agrega todos los elementos */
  return true;
});
/*
i = 0 | elemento = '▲'
i = 1 | elemento = '●'
i = 2 | elemento = '✖'
i = 3 | elemento = '■'
*/

console.log(iterar); // (4) ['▲', '●', '✖', '■']

/* ---------------------------------------------------------------- */

/* Ejemplo 4 - Array Disperso (Sparse Array) [,] y Método .filter()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#using_filter_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

// Recorrer (iterar) array usando .filter()
const filter = arrayDisperso.filter((elemento, i) => { // Funcion flecha () => {}
  console.log(`i = ${i} | elemento = ${elemento}`);

  return true; // condicion de la funcion
});

/* .filter() NO evalua la condicion de la funcion
en las ranuras vacias (empty item) [,] porque estas son ignoradas

Esto lo compruebo porq
al iterar el arrayDisperso con .filter()
NO se imprime la ranura vacia [,]
NI la posicion 1 */

/*
i = 0 | elemento = 1
i = 2 | elemento = 3
*/

console.log(filter); // (2) [1, 3]

/* ---------------------------------------------------------------- */

/* Ejemplo 5:

https://youtu.be/fCvuOyVXUUQ

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#filtering_out_all_small_values */

console.log(numeros);
// (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filtrar los numeros q son MENOR Q 5
const menorAcinco = numeros.filter((elemento) => elemento < 5);
console.log(menorAcinco);
// (4) [0, 1, 2, 3, 4]

/* ---------------------------------------------------------------- */

/* Ejemplo 6 - .filter() en Array q Contiene Objeto Literal [{}]
https://youtu.be/fCvuOyVXUUQ */

const mascotas = [ // Array q contiene objeto literal [{}]
  { nombre: 'Puchini',  raza: 'perro' },
  { nombre: 'Chanchito feliz',  raza: 'perro' },
  { nombre: 'Pulga',  raza: 'perro' },
  { nombre: 'Pelusa',  raza: 'gato' },
];
console.log(mascotas);
/*
[
  { nombre: 'Puchini', raza: 'perro' },
  { nombre: 'Chanchito feliz', raza: 'perro' },
  { nombre: 'Pulga', raza: 'perro' },
  { nombre: 'Pelusa', raza: 'gato' }
]
*/

// Filtrar solamente los PERROS del array mascotas [{}]
const perros = mascotas.filter((elemento) => elemento.raza === 'perro');
console.log(perros);
/*
[
  { nombre: 'Puchini',  raza: 'perro' },
  { nombre: 'Chanchito feliz', raza: 'perro' },
  { nombre: 'Pulga', raza: 'perro' }
]
*/

// Filtrar solamente los GATOS del array mascotas [{}]
const gatos = mascotas.filter((elemento) => elemento.raza === 'gato');
console.log(gatos);
/*
[
  {
    nombre: 'Pelusa',
    edad: 16,
    raza: 'gato'
  }
]
*/

/* ---------------------------------------------------------------- */

/* Ejemplo 7 - Encontrar todos los numeros primos q estan en un array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#find_all_prime_numbers_in_an_array

Un numero primo...
1) Es un numero ENTERO MAYOR Q 1,
   por lo tanto el 0, 1, los numeros negativos y decimales NO son primos

2) Es divisible solamente por 1 y por si mismo

Ejemplo:
2 es un numero primo porque:
2 > 1     -> 2 es MAYOR Q 1
2 / 1 = 2 -> 2 es divisible por 1
2 / 2 = 1 -> 2 "              " si mismo */

// ¿Que numeros de este array3 son primos?
const array3 = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(array3);
// (15) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

/* El parametro numero de la () => {} funcion flecha
es cada uno de los numeros (elementos) del array3,
es el elemento actual */

const numeroPrimo = (numero) => {
  /* let i = 2
  Significa que i empieza en 2 porq
  los numeros primos son un numero ENTERO MAYOR Q 1

  numero > i
  El bucle continuará iterando
  mientras q el numero (elemento) actual
  sea mayor que i

  i++ El valor de i incrementa de uno en uno (2, 3, 4...) */
  for (let i = 2; numero > i; i++) { // for () {} Recorrer (iterar) array3
    /* Dividir cada uno de los numeros del array3 por el indice
    y obtener su modulo %

    El numero NO false es primo cuando
    (numero % i === 0) el numero actual
    sea divisible por el indice  */
    if (numero % i === 0) {
      return false;
    }
  }
  /* El numero SI true es primo cuando
  el bucle for termina sin encontrar
  un número que divide al numero (elemento) actual del array3

  numero > 1 verifica q los numeros del array sean MAYOR Q 1 */
  return numero > 1; // else { /*...*/ }
};

// Imprimir la () => {}  función flecha numeroPrimo
console.log(numeroPrimo);
// [Function: numeroPrimo]

// .filter() Del array3 FILTRAR los numeros q son primos
console.log(array3.filter(numeroPrimo));
// (6) [2, 3, 5, 7, 11, 13]

// Otra forma de llamar la () => {} funcion flecha numeroPrimo es:
console.log(numeroPrimo(0)); // false -> 0 NO es un numero primo
console.log(numeroPrimo(2)); // true  -> 1 SI "                "

/* ---------------------------------------------------------------- */

/* Ejemplo 8 - .filter() en objetoLiteral {}
El método .filter() lee la propiedad .length de this
y luego accede a cada índice entero

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#calling_filter_on_non-array_objects */

// Crear un nuevo objetoLiteral {}
const objetoLiteral = {
// propiedad: valor,
  a: 1,
  b: 2, // 2 valor par
  6: 'c',
  d: 4, // 4 valor par
};
console.log(objetoLiteral);
/*
{
  '6': 'c',
  a: 1,
  b: 2,
  d: 4
}
*/

/* Object.entries() convierte de objetoLiteral {} a array []

.filter() filtra del objetoLiteral {}
lo pares de propiedad: valor,
q tienen un valor par */
const par2 = Object.entries(objetoLiteral).filter(([propiedad, valor]) => valor % 2 === 0);
console.log(par2);
// [ [ 'b', 2 ], [ 'd', 4 ] ]
