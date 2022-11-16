/* eslint-disable max-len */
// @ts-nocheck

/* Documentación Oficial - .length Numero de Elementos en Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

En arrays dependiendo de como escribas la propiedad .length tiene un significado diferente:

.length es el numero TOTAL DE ELEMENTOS contando desde 1

Pero si le restas -1
.length - 1 es la MAYOR (ULTIMA) POSICION (índice) contando desde 0

El número de elementos .length es mayor que el número de posiciones (índice):
(número de ELEMENTOS .length) > (número de POSICIONES, INDICE) */

// array vacio
let array = [];
console.log('# de elementos: ', array.length);
// # de elementos: 0

// array "lleno" con 4 elementos

array = [1, 2, 3, 4];

/* .length es el numero TOTAL DE ELEMENTOS contando desde 1
en el array estan los numeros desde el 1 hasta el 4,
entonces hay 4 ELEMENTOS,
hay 4 numeros */
console.log('# de ELEMENTOS:', array.length);
// # de ELEMENTOS: 4

/* puedo recorrer (iterar)
un array usando la propiedad .length y el bucle for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length#iterating_over_an_array */

for (let i = 0; i < array.length; i++) {
  const elemento = array[i];
  console.log(`indice = ${i} / elemento = ${elemento}`);
}
/*
indice = 0 / elemento = 1
indice = 1 / elemento = 2
indice = 2 / elemento = 3
indice = 3 / elemento = 4
*/

/* al restarle uno
.length - 1 entonces obtengo la MAYOR (ULTIMA) POSICION (índice)
en el array estan los numeros desde el 1 hasta el 4,
entonces
indice = 0 / elemento = 1
indice = 1 / elemento = 2
indice = 2 / elemento = 3
indice = 3 / elemento = 4
empezando a contar desde cero
el numero MAYOR de todos los INDICES (POSICION) es 3
y al mismo tiempo 3 es el ULTIMO indice (posicion) */

console.log('MAYOR (ULTIMA) POSICION (INDICE):', array.length - 1);
// MAYOR (ULTIMA) POSICION (INDICE): 3

/* Stack Overflow - Obtener el último elemento del array:
https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array

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
