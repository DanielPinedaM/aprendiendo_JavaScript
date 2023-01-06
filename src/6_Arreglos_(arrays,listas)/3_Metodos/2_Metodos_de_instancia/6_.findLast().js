/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-sparse-arrays */
/* eslint-disable array-callback-return */
/* eslint-disable indent */
// @ts-nocheck

/* Documentacion Oficial - .findLast()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast

.findLast() ÚLTIMO ELEMENTO que Coincide con la Condición de la Función

.findLast() devuelve el ÚLTIMO ELEMENTO
que cumple con la condicion de la funcion return,
en caso de que NO se encuentre el elemento buscado
entonces devuelve undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#return_value

.findLast() NO modifica el array original (existente)

.findLast() empieza a contar las posiciones (índices)
al reves, de derecha a izquierda
(desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento)

Alternativas al metodo .findLast():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#try_it

- Usar .find() para encontrar el PRIMER ELEMENTO
  q coincida con la condicion de la funcion

- Usar .indexOf() ó .findIndex()
  para encontrar el PRIMER NUMERO
  de POSICION (INDICE)
  del elemento buscado en un array

- Usar .lastIndexOf() ó .findLastIndex()
  para encontrar el ULTIMO NUMERO
  de POSICION (INDICE)
  del elemento buscado en un array

- Usar .includes() para saber
  cuando un elemento
  si existe o no en un array

- Usar .every()  para saber si
  ¿TODOS los
  elementos del array
  cumplen con la condición de la función?

- Usar .some() para saber si
  ¿AL MENOS UN SOLO
  elemento del array
  cumple con la condición de la función?

Su sintaxis es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#syntax */

// Función Flecha (Arrow Function):
// .findLast((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function):
// .findLast(callbackFn, thisArg)

// Función Retrollamada en una Sola Linea (Inline Callback Function):
// .findLast(function (element, index, array) { /* … */ }, thisArg)

/*
Donde...
- .findLast()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta
para cada uno de los elementos del array

* Devuelve el ULTIMO elemento
q cumple con la condicion de la funcion return

* Devuelve undefined
cuando NINGUN elemento
cumple con la condicion de la funcion return

La funcion .findLast() tiene los siguientes argumentos:

- element
* Es el elemento actual del array

* El elemento element q cambia porque el metodo .findLast() recorre (itera) el array

- index
* Numero de posicion (indice) actual del array

* Empieza en la ULTIMA posicion del array
q la puedo obtener con la propiedad array.length - 1
y termina en la PRIMERA 0 posicion

- array
Es el array para el que se evalua la condicion de la funcion

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/* ------------------------------------------------------------ */

/* Ejemplo 1

ULTIMO elemento q es un circulo '●' */
  ['■', '●', '■', '●'].findLast((elemento) => elemento === '●'); // '●'
//                 ↑

// undefined significa q el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].findLast((elemento) => elemento === '▲');
// undefined

/* ------------------------------------------------------------ */

// Ejemplo 2 - Recorrer (iterar) array usando el metodo .findLast()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras.findLast((elemento, i) => {
    console.log(`i=${i} | elemento='${elemento}'`);

    // Aqui NO escribi valor de retorno return
});
/*
i=3 | elemento='■'
i=2 | elemento='✖'
i=1 | elemento='●'
i=0 | elemento='▲'
*/

/* .findLast() devuelve undefined
porq NO escribi valor de retorno return */
console.log(iterar);
// undefined

/* ------------------------------------------------------------ */

/* Ejemplo 3 - Array Disperso (Sparse Array) [,] y Método .findLast()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#using_findlast_on_sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

const iterar2 = arrayDisperso.findLast((elemento, i) => {
  console.log(`i=${i} | elemento=${elemento}`);

  if (elemento === undefined) {
    console.log(`elemento en la posicion ${i} es undefined`);
  }
});
/* .findLast() Evalua la condicion de la funcion return
en las ranuras vacias de los array dispersos [,]
como si fueran undefined

Esto lo compruebo porq
al iterar el arrayDisperso
se imprime undefined en la posicion (indice) 1
q es donde esta la ranura vacia [,] */

/*
i=2 | elemento=3
i=1 | elemento=undefined
elemento en la posicion 1 es undefined
i=0 | elemento=1
*/

/* .findLast() devuelve undefined
porq NO escribi valor de retorno return */
console.log(iterar2);
// undefined

/* ------------------------------------------------------------ */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#try_it */

// Array [] con numeros
const numeros = [5, 12, 50, 130, 44];
//                           ↑

console.log(numeros);
// (5) [5, 12, 50, 130, 44]

/* .findLast() ULTIMO numero MAYOR Q 45,
mirar desde el ultimo numero hacia el primero

44 NO es mayor q 45
130 > 45 -> 130 SI es mayor q 45 */
const findLast = numeros.findLast((elemento) => elemento > 45);
console.log(findLast);
// 130

/* ------------------------------------------------------------ */

/* Ejemplo 5 - Buscar en un array de objetos [{}] el ULTIMO objeto {} que cumple con una condicion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#find_last_object_in_an_array_matching_on_element_properties */

// Array de objetos [{}]
const frutas = [
  { nombre: 'manzana', cantidad: 2 },
  { nombre: 'banana', cantidad: 0 },
  { nombre: 'pescado', cantidad: 1 }, // .findLast() -> ULTIMO objeto q cumple condicion 1 < 2
  { nombre: 'cerezas', cantidad: 5 },
];
console.log(frutas);
/*
[
  { nombre: 'manzana', cantidad: 2 },
  { nombre: 'banana', cantidad: 0 },
  { nombre: 'pescado', cantidad: 1 },
  { nombre: 'cerezas', cantidad: 5 }
]
*/

// ULTIMO objeto {} q tiene una cantidad MENOR A 2
const objeto = frutas.fisndLast((elemento) => elemento.cantidad < 2);
console.log(objeto);
/*
{
  nombre: 'pescado',
  cantidad: 1
}
*/

// Valores del objeto {}
console.log(objeto.nombre);   // 'pescado'
console.log(objeto.cantidad); // 1

/* ------------------------------------------------------------ */

/* Ejemplo 6 - Usando .findLast() encontrar el ULTIMO número primo de un array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#find_last_prime_number_in_an_array

Recordatorio:
Hay otros ejemplos similares a este, ver:
- " Ejemplo 6 - Usando .find() encontrar el PRIMER número primo de un array: "

- " Ejemplo 7 - Usando .filter() encontrar TODOS los números primos q están en un array: "

- " Ejemplo 12 - Usando .findIndex() encontrar la PRIMERA posicion (indice) del numero primo de un array: "

- " Ejemplo 10 - Usando .findLastIndex() encontrar la ULTIMA posicion (indice) del numero primo de un array: "

Explicacion:

Un numero primo...
1) Es un numero ENTERO MAYOR Q 1,
   por lo tanto el 0, 1, los numeros negativos y decimales NO son primos

2) Es divisible solamente por 1 y por si mismo

Ejemplo:
2 es un numero primo porque:
2 > 1     -> 2 es MAYOR Q 1
2 / 1 = 2 -> 2 es divisible por 1
2 / 2 = 1 -> 2 "              " si mismo

Problema:
Usando .findLast() encontrar el ULTIMO numero primo de un array,
en caso de que en el array no existan numeros primos entonces devolver undefined

Solucion:

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

// .findLast() Devuelve undefined porq NO hay numeros primos en el array
console.log([-1, 0, 1, 2.1].findLast(esPrimo));
// undefined

/* 0 NO es primo,
el resto de los numeros 2, 3, 5 SI son primos

.findLast() 5 es el ULTIMO numero primo del array */
console.log([0, 2, 3, 5].findLast(esPrimo)); // 5
//                    ↑

// Esta es otra forma de llamar la () => {} funcion flecha esPrimo()
console.log(esPrimo(0)); // false -> 0 NO es primo
console.log(esPrimo(2)); // true  -> 2 SI es primo

/* ------------------------------------------------------------ */

/* Ejemplo 7 - Metodo de array .findLast() en objetoLiteral {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast#calling_findlast_on_non-array_objects

El método .findLast() lee la propiedad length de this
y luego accede a cada índice entero. */

const objetoLiteral = {
// propiedad: valor,
  0: 4,
  1: 5.3,
  2: 6, // .findLast() -> 6 es el ULTIMO valor del objetoLiteral {} q es un numero entero
  3: 7.1,
};
console.log(objetoLiteral);
/*
{
  0: 4,
  1: 5.3,
  2: 6,
  3: 7.1
}
*/

/* Object.keys() convertir a array las propiedades (claves) del objetoLiteral {}
   .length Numero de propiedades (claves) del objetoLiteral {}
   https://stackoverflow.com/questions/4690520/javascript-object-literal-length-undefined */
const longitud = Object.keys(objetoLiteral).length;
console.log(longitud);
// 4

// Añadir una nueva propiedad: valor, al objetoLiteral {}
objetoLiteral.length = longitud;
console.log(objetoLiteral);
/*
{
  0: 4,
  1: 5.3,
  2: 6,
  3: 7.1,
  length: 4
}
*/

// .findLast() ULTIMO valor del objetoLiteral {} q es un numero entero
const entero = Array.prototype.findLast.call(objetoLiteral, (valorObjeto) => Number.isInteger(valorObjeto));
console.log(entero);
// 6
