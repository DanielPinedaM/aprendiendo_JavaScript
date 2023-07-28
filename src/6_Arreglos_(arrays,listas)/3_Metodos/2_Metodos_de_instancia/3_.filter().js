/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Recordatorio:

Resumen: Diferencia Entre .forEach() .map() .filter() .reduce() .find()

             |------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
             | ¿Recorre (itera) | ¿Crea una nueva copia           | ¿Modifica el array original?  | Valor de retorno return                          | Comparación entre el             | Ejemplo                                                                            |
             | el array?        | del array original (existente)? | (mutable / inmutable)         |                                                  | número de elementos .length      |                                                                                    |
             |                  |                                 |                               |                                                  | del array1 original              |                                                                                    |
             |                  |                                 |                               |                                                  | y su copia array2                |                                                                                    |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .forEach() | ✓                | X                               | ✓                             | X                                                | X                                | ['▲', '●', '✖', '■'].forEach((elemento, i) => {                                   |
|            |                  | Si es posible,                  | Dependiendo de lo que escriba | NO tiene valor de retorno                        |                                  |   console.log(`i=${i} | elemento='${elemento}'`);                                  |
|            |                  | pero para esto debería usarse   | en la función .forEach()      | Siempre retorna undefined                        |                                  |                                                                                    |
|            |                  | los otros métodos de array      | puedo escoger si editar o no  | Ejecuta una función para cada uno                |                                  |   // Aqui se escribe el codigo q se ejecuta                                        |
|            |                  |                                 | el array original             | de los elementos del array,                      |                                  |   // para cada uno de los elementos del array,                                     |
|            |                  |                                 |                               | es similar al bucle for () {}                    |                                  |   // .forEach() NO retorna return ningun valor                                     |
|            |                  |                                 |                               |                                                  |                                  | });                                                                                |
|            |                  |                                 |                               |                                                  |                                  |                                                                                    |
|            |                  |                                 |                               |                                                  |                                  | // i=0 | elemento='▲'                                                              |
|            |                  |                                 |                               |                                                  |                                  | // i=1 | elemento='●'                                                              |
|            |                  |                                 |                               |                                                  |                                  | // i=2 | elemento='✖'                                                             |
|            |                  |                                 |                               |                                                  |                                  | // i=3 | elemento='■'                                                              |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .map()     | ✓                | ✓                               | X                             | ✓                                                | array1.length                    | En el array1 original (existente)                                                  |
|            |                  |                                 |                               | Un nuevo array2 que MODIFICA                     | =                                | hay 4 cuadrados (4) ['■', '■', '■', '■']                                           |
|            |                  |                                 |                               | cada uno de los elementos                        | array2.length                    | pero .map() devuelve una copia array2                                              |
|            |                  |                                 |                               | del array1 original (existente)                  |                                  | en el q se MODIFICA CADA UNO de los elementos del array1 original                  |
|            |                  |                                 |                               | (MAPEAR array)                                   |                                  | concatenando (uniendo) los cuadrados con un triángulo '■▲'                         |
|            |                  |                                 |                               |                                                  |                                  |                                                                                    |
|            |                  |                                 |                               |                                                  |                                  | ['■', '■', '■', '■'].map((elemento) => `${elemento}▲`);                            |
|            |                  |                                 |                               |                                                  |                                  | // (4) ['■▲', '■▲', '■▲', '■▲']                                                    |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .filter()  | ✓                | ✓                               | X                             | ✓                                                | array1.length                    | En el array1 original (existente)                                                  |
|            |                  |                                 |                               | Un nuevo array2 en el que                        | <=                               | hay 3 cuadrados y un círculo (4) ['■', '■', '■', '●']                              |
|            |                  |                                 |                               | se ELIMINAN los elementos del array1 original    | array2.length                    | pero después de ejecutar .filter() se crea un nuevo array2                         |
|            |                  |                                 |                               | que NO cumplen con la condición de la función    |                                  | q solamente copia los cuadrados '■' del array1                                     |
|            |                  |                                 |                               | (FILTRAR array)                                  |                                  | y ELIMINA las otras figuras q NO son cuadrados                                     |
|            |                  |                                 |                               |                                                  |                                  |                                                                                    |
|            |                  |                                 |                               |                                                  |                                  | ['■', '■', '■', '●'].filter((elemento) => elemento === '■');                       |
|            |                  |                                 |                               |                                                  |                                  | // (3) ['■', '■', '■']                                                             |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .reduce()  | ✓                | X                               | X                             | ✓                                                | UN SOLO VALOR                    | Concatenar (unir)                                                                  |
| (mala      |                  |                                 |                               | Devuelve UN SOLO dato,                           | que puede ser de cualquier tipo: | cada uno de los elementos del array                                                |
| práctica)  |                  |                                 |                               | q es el resultado de ACUMULAR (sumar)            | '' string,                       | (4) ['▲', '●', '✖', '■']                                                           |
|            |                  |                                 |                               | todos los elementos del array                    | number,                          | en un solo string '▲●✖■'                                                           |
|            |                  |                                 |                               | (REDUCIR array)                                  | [] array,                        | (REDUCIR array)                                                                    |
|            |                  |                                 |                               |                                                  | {} object,                       |                                                                                    |
|            |                  |                                 |                               |                                                  | etc...                           | ['▲', '●', '✖', '■'].reduce((acumulador, elemento) => acumulador + elemento, '');  |
|            |                  |                                 |                               |                                                  |                                  | // '▲●✖■' -> .reduce() itera de Izquierda a Derecha                                |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .find()    | ✓                | X                               | X                             | ✓                                                | X                                | Devolver el PRIMER elemento q sea un círculo '●'                                   |
|            |                  |                                 |                               | Devuelve el PRIMER ELEMENTO                      |                                  | ['■', '●', '■', '●'].find((elemento) => elemento === '●'); // '●'                  |
|            |                  |                                 |                               | que cumple con la condición de la función return |                                  | //     ↑                                                                           |
|            |                  |                                 |                               | y cuando NO encuentre el elemento buscado        |                                  |                                                                                    |
|            |                  |                                 |                               | devuelve undefined                               |                                  | Devuelve undefined porque el elemento triangulo '▲' NO existe en el array          |
|            |                  |                                 |                               |                                                  |                                  | ['■', '●', '■', '●'].find((elemento) => elemento === '▲');                         |
|            |                  |                                 |                               |                                                  |                                  | // undefined                                                                       |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|

Tutorial:
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

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntax */

// Funcion Flecha (Arrow Function)
// .filter((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function)
// .filter(callbackFn, thisArg)

// Función Retrollamada en una Sola Línea (Inline Callback Function)
// .filter(function (element, index, array) { /* … */ }, thisArg)

/* Donde...
- .filter()
Nombre del método

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
//                     0 1  2
//                       ↑

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

/* Ejemplo 7 - Usando .filter() encontrar TODOS los números primos q están en un array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#find_all_prime_numbers_in_an_array

Recordatorio:
Hay otros ejemplos similares a este, ver:
- " Ejemplo 6 - Usando .find() encontrar el PRIMER número primo de un array: "

- " Ejemplo 12 - Usando .findIndex() encontrar la PRIMERA posicion (indice) del numero primo de un array: "

- " Ejemplo 10 - Usando .findLastIndex() encontrar la ULTIMA posicion (indice) del numero primo de un array: "

- " Ejemplo 6 - Usando .findLast() encontrar el ULTIMO número primo de un array: "

Explicación:

Un numero primo...
1) Es un numero ENTERO MAYOR Q 1,
   por lo tanto el 0, 1, los numeros negativos y decimales NO son primos

2) Es divisible solamente por 1 y por si mismo

Ejemplo:
2 es un numero primo porque:
2 > 1     -> 2 es MAYOR Q 1
2 / 1 = 2 -> 2 es divisible por 1
2 / 2 = 1 -> 2 "              " si mismo

Solución:

Stack Overflow - Funcion para saber cuando un numero si es o no primo:
https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript

esPrimo() funcion flecha para saber cuando un numero si es o no primo
numero    es el numero q quiero saber si es o no primo */
const esPrimo = (numero) => {
  // NO son primos los numeros q NO son enteros (1.1 'hola mundo' ...)
  if (!Number.isInteger(numero)) return false;

  // Iterar desde 2 hasta la raíz cuadrada del número
  for (let i = 2, s = Math.sqrt(numero); i <= s; i++) {
    // El numero NO es primo cuando el indice i es divisible por el numero
    if (numero % i === 0) return false;
  }

  // NO son primos los numeros MENORES a 2 (1, 0, -1, -2 ...)
  return numero > 1; // else { return num > 1; }
};

/* Problema:
¿Que numeros de este array3 son primos? */
const array3 = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//                        ↑  ↑     ↑     ↑            ↑       ↑
console.log(array3);
// (15) [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// .filter() Del array3 FILTRAR los numeros q son primos
console.log(array3.filter(esPrimo));
// (6) [2, 3, 5, 7, 11, 13]

// Esta es otra forma de llamar la () => {} funcion flecha esPrimo()
console.log(esPrimo(0)); // false -> 0 NO es primo
console.log(esPrimo(2)); // true  -> 2 SI es primo

/* ---------------------------------------------------------------- */

/* Ejemplo 8 - array.filter(Boolean) para Eliminar Elementos de un Array que son null, undefined, NaN, "" Carácter Vacío, 0, false

Este codigo lo copie de Stack Overflow pero lo modifique para mejorarlo:
https://stackoverflow.com/questions/30016773/javascript-filter-true-booleans

https://stackoverflow.com/questions/35476948/remove-empty-or-whitespace-strings-from-array-javascript

Recordatorio:
Ver:
" Ejemplo 1 - Validar Cuando una Variable es null, undefined, NaN, "" Carácter Vacío, " " Espacio en Blanco, 0, false "

array con elementos truthy y falsy

Los elementos q son falsy tienen un comentario con una flecha hacia arriba ↑,
y los truthy NO tienen flecha */

const array = [null, undefined, NaN, '', ' ', 'hola mundo', 1, '1', true, 'true', 0, '0', false, 'false', Infinity, 999, {}, []];
//              ↑        ↑       ↑   ↑                                            ↑         ↑

/* array.filter(Boolean) ELIMINAR los elementos del array que son FALSY (falso)
y CONSERVAR los valores que son TRUTHY (verdadero) */

let truthy = array.filter(Boolean);

/* array.filter(Boolean) tiene el PROBLEMA
de q NO elimina los espacios en blanco " " */
console.log(truthy);
// (12) [ ' ', 'hola mundo', 1, '1', true, 'true', '0', 'false', Infinity, 999, {}, [] ]

// SOLUCION para eliminar los elementos falsy Y espacio en blanco " "
const validar = (variable) => {
  // truthy
  if (Array.isArray(variable)) {                           // en JS los array [] son truthy
    return true;
  } else if (variable && String(variable).trim() !== '') { // validar truthy en JS y espacio en blanco " "
    return true;
  } else { // falsy
    return false;
  }
};

truthy = array.filter((elemento) => validar(elemento));
console.log(truthy);
// (11) [ 'hola mundo', 1, '1', true, 'true', '0', 'false', Infinity, 999, {}, [] ]

// .filter() NO modifica el array1 original (existente)
console.log(array);
// (18) [ null, undefined, NaN, '', ' ', 'hola mundo', 1, '1', true, 'true', 0, '0', false, 'false', Infinity, 999, {}, [] ]
//         ↑        ↑       ↑   ↑                                            ↑         ↑

/* ---------------------------------------------------------------- */

/* Ejemplo 9 - .filter() en objetoLiteral {}
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
