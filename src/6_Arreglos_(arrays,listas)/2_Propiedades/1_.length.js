// @ts-nocheck

/* Documentación Oficial - .length Numero de Elementos en Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

La propiedad .length es un número
que tiene un significado diferente
dependiendo de con que tipo de dato se use:
- En strings es el número (longitud) de caracteres (letras, espacios, números, etc)
- En arrays es el número de elementos.
- En funciones es el número de parámetros. */

// array vacio
let array = [];
console.log('# de elementos: ', array.length);
// # de elementos: 0

// array "lleno" con 4 elementos
array = [1, 2, 3, 4];
console.log('# de elementos:', array.length);
// # de elementos: 4

/* puedo recorrer (iterar)
un array usando la propiedad .length y el bucle for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length#iterating_over_an_array */

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(`i = ${i} / element = ${element}`);
}
/*
i = 0 / element = 1
i = 1 / element = 2
i = 2 / element = 3
i = 3 / element = 4
*/

/* .length imprime el # total de elementos del array
pero si le resto uno -1
dentro de los corchetes []
entonces da como resultado
el ultimo elemento del array

esto pasa porq el # de elementos .length
es mayor q el # de posiciones (indice):
(# de elementos .length) > (# de posiciones, indice)

const nombreVariable = nombreArray[(nombreArray.length) - 1]; */
const ultimoElemento = array[(array.length) - 1];
console.log('ultimo elemento del array: ', ultimoElemento);
// ultimo elemento del array:  4

// tambien obtengo el mismo resultado con .at(-1)
console.log('ultimo elemento del array: ', array.at(-1));
// ultimo elemento del array:  4

/* voy a re-asignar a .length
un # MAYOR al # de elementos del array

en realidad el # de elementos
del array [1, 2, 3, 4] es 4,
pero a la propiedad .length
le re-asigne el # 10  */
array.length = 10; // # MAYOR al verdadero # de elementos

console.log('re-asignar a un # MAYOR de elementos: ', array.length);
// re-asignar a un # MAYOR de elementos:  10

/* Cuando imprimo el array
como el array tiene 4 y no 10 elementos
entonces el resto de los elementos se llenan con elementos vacios */
console.log(array);
// [ 1, 2, 3, 4, <6 empty items> ]

/* Sinembargo, al recorrer (iterar) el array con .forEach
los elementos vacios NO estan */
array.forEach((element, i) => {
  console.log(`i = ${i} / elemento = ${element}`);
});
/*
i = 0 / elemento = 1
i = 1 / elemento = 2
i = 2 / elemento = 3
i = 3 / elemento = 4
*/

/* voy a re-asignar a .length
un # MENOR al # de elementos del array

en realidad el # de elementos
del array [1, 2, 3, 4] es 4,
pero a la propiedad .length
le re-asigne el # 1 */
array.length = 1; // # MENOR al verdadero # de elementos

console.log('re-asignar a un # MENOR de elementos: ', array.length);
// re-asignar a un # MENOR de elementos:  1

/* los elementos se eliminan al
DISMINUIR la propiedad .length,
se esta recortado el array */
console.log(array);
// [ 1 ]

// esto lo compruebo recorriendo el array forEach
array.forEach((element, i) => {
  console.log(`i = ${i} / elemento = ${element}`);
});
// i = 0 / elemento = 1

/* en este momento el array tiene una sola posicion [ 1 ]
cuando agrego un nuevo elemento a una posicion mayor,
es decir a la posicion 20,
entonces:
- se conservan los elementos existentes
- se crean elementos vacios (empty items)
- el nuevo elemento se agrega a la ultima posicion */
array[5] = 'posicion mayor al # de elementos';
console.log(array);
// [ 1, <4 empty items>, 'posicion mayor al # de elementos' ]

/* al recorrer (iterar) el array con forEach
se muestran los elementos ya existentes, q es el elemento 1
y el ultimo elemento q es 'posicion mayor al # de elementos'
con el indice que 5
q es el indice mayor
al # verdadero de elementos del array */
array.forEach((element, i) => {
  console.log(`i = ${i} / elemento = ${element}`);
});
/*
i = 0 / elemento = 1
i = 5 / elemento = posicion mayor al # de elementos
*/

/* ---------------------------------------------------------- */

/* Crear array vacio con una longitud (# de elementos) fija

Puedo crear un array vacio
y asignarle un # de elementos a la propiedad .length */

// crear array vacio
const arrayVacio = [];

// re-asignar el # de elementos .length
arrayVacio.length = 5;

console.log('re-asignar a un # MAYOR de elementos: ', arrayVacio.length);
// re-asignar a un # MAYOR de elementos:  5

// las 5 posiciones del array se llenan con elementos vacios
console.log(arrayVacio);
// [ <5 empty items> ]

// al recorrer el arrayVacio con forEach no se imprime nada
arrayVacio.forEach((element, i) => {
  console.log(`i = ${i} / elemento = ${element}`);
});
