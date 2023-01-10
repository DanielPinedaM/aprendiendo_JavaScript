/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
/* eslint-disable func-names */
/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Tutorial - Diferencia Entre .every() y .some()
https://youtu.be/sVO65BeJjq8

Documentacion Oficial - .some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

.some() ¿AL MENOS UN SOLO elemento del array cumple con la condición de la función?

.some() recorre (itera) cada uno de los elementos del array
y detiene la iteración en la posicion (indice)
en donde encuentra el primer elemento
que cumple con la condición de la funcion return,
en caso de que NINGUN elemento cumpla con la condicion entonces devuelve falso

.some() NO modifica el array original (existente)

Su sintaxis es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#syntax */

// Funcion Flecha (arrow function)
// .some((element, index, array) => { /* … */ })

// Funcion retrollamada (callback function)
// .some(callbackFn, thisArg)

// Funcion retrollamada en una sola linea (inline callback function)
// .some(function (element, index, array) { /* … */ }, thisArg)

/* Donde...
- .some()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta
para cada uno de los elementos del array

* Devuelve true cuando hay AL MENOS UN SOLO elemento
q cumple con la condicion de la funcion return,
cuando NINGUN elemento cumple con la condicion entonces devuelve false
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#description

La funcion .some() tiene los siguientes argumentos:

- element
* Es el elemento actual del array

* El elemento element cambia porque el metodo .some() recorre (itera) el array

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

/* ------------------------------------------------------------ */

// Ejemplo 1:

// Buscar el circulo ['●'] en el array
const buscarElemento = (elemento) => elemento === '●';
console.log(buscarElemento);
// [Function: buscarElemento]

// ¿Hay AL MENOS un solo circulo ['●'] o mas en el array ?
console.log(['▲', '●', '✖', '■'].some(buscarElemento));  // true  ->  SI
console.log(['●', '●', '●', '●'].some(buscarElemento));  // true  ->  SI
console.log(['✖', '✖', '✖', '✖'].some(buscarElemento)); // false ->  NO

/* ------------------------------------------------------------ */

// Ejemplo 2 - Recorrer (iterar) array usando el método .some()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras.some((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* .some() deja de iterar cuando
  AL MENOS UN SOLO elemento del array
  cumple con la condición de la función
  q es cuando retorna true la PRIMERA VEZ,
  entonces para q itere todos los elementos
  siempre tiene q retornar false */
  return false;
});
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

// La variable iterar toma el valor de retorno de .some()
console.log(iterar);
// false

/* ------------------------------------------------------------ */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#testing_value_of_array_elements

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#testing_array_elements_using_arrow_functions */

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* () => {} Funcion flecha para saber Si un numero...
- Es o no par */
const par = (numero) => numero % 2 === 0;
console.log(par);
// [Function: par]

// - Es mayor a tres
const mayorAtres = (numero) => numero > 3;
console.log(mayorAtres);
// [Function: mayorAtres]

// ¿En el array numeros hay AL MENOS UN SOLO o mas numeros PARES?
console.log(numeros.some(par));
// true -> SI

// ¿En el array numeros hay AL MENOS UN SOLO o mas numeros MAYOR A TRES?
console.log(numeros.some(mayorAtres));
// true -> SI

// Otra forma de llamar las funciones par() y mayorAtres()
console.log(par(2));                 // true
console.log(par(numeros[0]));        // false

console.log(mayorAtres(0));          // false
console.log(mayorAtres(numeros[1])); // false

/* ------------------------------------------------------------ */

/* Ejemplo 4:
Buscar si un array de objetos [{}] cumple una condicion

https://youtube.com/shorts/Q8SX7gaA-wI?feature=share */

// Array q contiene un objeto [{}]
const personas = [
  { nombre: 'Midudev', edad: 17 }, // SI hay personas mayor a 18 años
  { nombre: 'Daniel', edad: 18 },
  { nombre: 'Fazt', edad: 19 },
];
console.log(personas);
/*
  [
    { nombre: 'Midudev', edad: 17},
    { nombre: 'Daniel', edad: 18 },
    { nombre: 'Fazt', edad: 19 }
  ]
*/

// ¿Hay personas mayores de edad (con 18 o mas años)?
const condicion = personas.some((persona) => persona.edad >= 18);

// .some() devuelve true al encontrar el primer elemento q cumple con la condicion
console.log(condicion);
// true

/* ------------------------------------------------------------ */

/* Ejemplo 5 - Metodo de array .some() en objetoLiteral {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#calling_some_on_non-array_objects */

// TODOS los valores del objetoLiteral NO son de tipo numero
const objetoLiteral = {
// propiedad: valor,
  0: 'a',
  1: 'b',
  2: 'c',
};
console.log(objetoLiteral);
/*
{
  0: 'a',
  1: 'b',
  2: 'c'
}
*/

/* Object.keys() convertir a array las propiedades (claves) del objetoLiteral {}
   .length Numero de propiedades (claves) del objetoLiteral {}
   https://stackoverflow.com/questions/4690520/javascript-object-literal-length-undefined */
const longitud = Object.keys(objetoLiteral).length;
console.log(longitud);
// 3

// Añadir una nueva propiedad: valor, al objetoLiteral {}
objetoLiteral.length = longitud;
console.log(objetoLiteral);
/*
{
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}
*/

// .some()
const some = Array.prototype.some.call(objetoLiteral, (valorObjeto) => typeof valorObjeto === 'number');

// ¿ALGUN (uno o mas) valor del objetoLiteral {} es de tipo numero (number)?
console.log(some);
// false

/* ------------------------------------------------------------ */

/* Ejemplo 6 - Buscar elemento en un array usando .some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#checking_whether_a_value_exists_in_an_array

Este mismo problema se puede solucionar
escribiendo menos codigo usando el metodo .includes(),
pero para aprender lo explicare con .some() */

const frutas = ['manzana', 'banana', 'mango', 'guayaba'];
console.log(frutas);
// (4) ['manzana', 'banana', 'mango', 'guayaba']

// () => {} funcion flecha para saber si un elemento existe o no en un array
const includes = (array, elementoActual) => array.some((buscarElemento2) => elementoActual === buscarElemento2);
console.log(includes);
// [Function: includes]

// ¿El array frutas tiene el elemento...?
console.log(includes(frutas, 'manzana'));              // true
console.log(includes(frutas, 'ELEMENTO INEXISTENTE')); // false

/* ------------------------------------------------------------ */

/* Ejemplo 7 - Array Disperso (Sparse Array) y Método .some()
El metodo .some()
NO ejecuta la funcion callbackFn
para las ranuras vacias (empty items)
de los arrays dispersos (sparse array) [,]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some#using_some_on_sparse_arrays */

console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1));         // false

console.log([1, , 1].some((x) => x === [,]));       // false
console.log([1, , 1].some((x) => x === [, ,]));     // false

/* ------------------------------------------------------------ */

/* Ejemplo 8 - Array Vacio [] y Método .some()
El metodo .some()
SIEMPRE devuelve false
para CUALQUIER condicion
q se evalue con un array vacio [] */

[].some((elemento) => elemento);                            // false -> SIN condicionales

[].some((elemento) => elemento === '');                     // false -> '' string (texto)
[].some((elemento) => elemento === 'hola mundo');           // false

[].some((elemento) => elemento > 0);                        // false -> Number() numero
[].some((elemento) => elemento < 0);                        // false
[].some((elemento) => elemento === 0);                      // false

[].some((elemento) => elemento === true);                   // false -> Boolean() booleano
[].some((elemento) => elemento === false);                  // false

[].some((elemento) => elemento === null);                   // false -> null Nulo

[].some((elemento) => elemento === undefined);              // false -> undefined Indefinido

[].some((elemento) => elemento === Number.isNaN(elemento)); // false -> NaN No es un Numero

[].some((elemento) => elemento === []);                     // false -> [] Array

[].some((elemento) => elemento === {});                     // false -> {} Objeto literal

[].some((elemento) => elemento === function () {});         // false -> function Funcion

[].some((elemento) => elemento === class {});               // false -> class Clase
