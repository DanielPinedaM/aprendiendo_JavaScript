/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Tutorial Jon Mircha
= []; Arreglos (Arrays, Listas)
https://youtu.be/o3c8cW73weQ

¿Qué es un Array?
Array es lo mismo que arreglo y lista.

Array es una colección de elementos
que contiene varios valores
que pueden ser de cualquier tipo de dato.

Un array puede contener a otro array
y objetos dentro de sus elementos.

Los pares de corchetes [] significan que se esta definiendo un array: */

// array vacio
console.log([]);
/*
[]
length: 0
[[Prototype]]: Array(0)
*/

console.log(typeof []);
// object

/* *** */

const arrayVacio = [];
console.log(arrayVacio);
// []

/* ------------------------------------------------------------------ */
// Array que contiene en sus elementos otros tipos de datos

const array = [1, 'hola mundo', true, false, null, // array q contiene tipos de datos number, string, booleano y null
  { // array q contiene un objeto
    nombre: 'Daniel',
    apellido: 'Pineda',
  },
  ['a', 'b', 'c'], // array anidado: array q contiene otro array
  [1, 2, 3,
    ['primero', 'segundo', 'tercero'],
  ],
];

console.log(array);
/* (8) [1, 'hola mundo', true, false, null, {…}, Array(3), Array(4)]
0: 1
1: "hola mundo"
2: true
3: false
4: null
5: {
    nombre: 'Daniel',
    apellido: 'Pineda'
   }
6: (3) ['a', 'b', 'c']
7: (4) 0: 1
       1: 2
       2: 3
       3: (3) 0: "primero"
              1: "segundo"
              2: "tercero"
*/

console.log('# de elementos (propiedad .length):', array.length);
// # de elementos (propiedad .length): 8

console.log('elemento de la posicion 0 (PRIMER ELEMENTO):', array[0]);
// elemento de la posicion 0 (PRIMER ELEMENTO): 1

console.log('elemento de la posicion 1 (SEGUNDO ELEMENTO):', array[1]);
// elemento de la posicion 1 (SEGUNDO ELEMENTO): 'hola mundo'

console.log('elemento de la posicion 5:', array[5]);
/*
elemento de la posicion 5:
{
  nombre: 'Daniel',
  apellido: 'Pineda'
}
*/

console.log('elemento de la posicion 6:', array[6]);
/*
(3) ['a', 'b', 'c']
0: "a"
1: "b"
2: "c"
length: 3
*/

/* [6] el array dentro del array esta en la posicion 6
   [1] la letra 'b' es elemento q esta en la posicion 1 del array q esta dentro del array  */
console.log('posicion 1 del array q esta dentro del array:', array[6][1]);
// posicion 1 del array q esta dentro del array: b

/* [7] posicion donde estan los dos arrays anidados
   [3] posicion donde esta el array ['primero', 'segundo', 'tercero']
   [2] posicion donde esta el elemento 'tercero' */
console.log('array anidado:', array[7][3][2]);
// array anidado: tercero

/* sobrescribir (actualizar) un elemento del array,
antes estaba el número 1 y ahora lo voy a reemplazar por el numero 99 */
array[0] = 99;
console.log(array);
/* (8) [99, 'hola mundo', true, false, null, {…}, Array(3), Array(4)]
0: 99
1: "hola mundo"
2: true
3: false
4: null
5: {
     nombre: 'Daniel',
     apellido: 'Pineda'
   }
6: (3) ['a', 'b', 'c']
7: (4) 0: 1
       1: 2
       2: 3
       3: (3) 0: "primero"
              1: "segundo"
              2: "tercero"
length: 8
[[Prototype]]: Array(0) */

/* Guardar en una variable el ultimo elemento del array

const nombreVariable = nombreArray[(nombreArray.length) - 1]; */
const guardarUltimoElemento = array[(array.length) - 1];
console.log('ultimo elemento del array: ', guardarUltimoElemento);
/* ultimo elemento del array:
[ 1, 2, 3, [ 'primero', 'segundo', 'tercero' ] ] */

/* ------------------------------------------------------------------ */
// Array.of() es otra forma de crear arrays:

const arrayOf = Array.of('X', 'Y', 'Z', 9, 8, '7');

console.log(arrayOf);
/*
(6) ['X', 'Y', 'Z', 9, 8, '7']
0: "X"
1: "Y"
2: "Z"
3: 9
4: 8
5: "7"
length: 6
[[Prototype]]: Array(0)
*/

console.log(typeof arrayOf);
// object

/* ------------------------------------------------------------------ */

console.log('objeto Array de JS:', Array);
// objeto Array de JS: ƒ Array() { [native code] }

console.log(typeof Array);
// function

/* ------------------------------------------------------------------ */
// Array().fill() crear un array con todos sus elementos iguales

let arrayIgual = Array(5).fill();

console.log(arrayIgual);
/* (5) [undefined, undefined, undefined, undefined, undefined]
0: undefined
1: undefined
2: undefined
3: undefined
4: undefined
length: 5
[[Prototype]]: Array(0)
*/

/* (5) numero de elementos .length del array
   .fill() elemento repetido del array */
arrayIgual = Array(5).fill('hola mundo');
console.log(arrayIgual);
/* (5) ['hola mundo', 'hola mundo', 'hola mundo', 'hola mundo', 'hola mundo']
0: 'hola mundo'
1: 'hola mundo'
2: 'hola mundo'
3: 'hola mundo'
4: 'hola mundo'
length: 5
[[Prototype]]: Array(0)
*/

/* ------------------------------------------------------------------ */
/* new Array() Array Constructor (Mala Práctica)
https://eslint.org/docs/latest/rules/no-array-constructor */

const arrayConstructorVacio = new Array();
console.log(arrayConstructorVacio);        // []
console.log(typeof arrayConstructorVacio); // object

/* *** */

const arrayConstructorLleno = new Array(1, '2', 'hola mundo', true, false);
console.log(arrayConstructorLleno);
/*
(5) [1, '2', 'hola mundo', true, false]
0: 1
1: "2"
2: "hola mundo"
3: true
4: false
length: 5
*/

/* ------------------------------------------------------------------ */

const colores = ['amarillo', 'azul', 'rojo'];
console.log(colores);
/*
(3) ['amarillo', 'azul', 'rojo']
0: "amarillo"
1: "azul"
2: "rojo"
length: 3
[[Prototype]]: Array(0)
*/

/* .push() agregar nuevo elemento al array
el nuevo elemento se agrega a la ultima posicion del array */
colores.push('negro');
console.log(colores);
/*
(4) ['amarillo', 'azul', 'rojo', 'negro']
0: "amarillo"
1: "azul"
2: "rojo"
3: "negro"
length: 4
[[Prototype]]: Array(0)
*/

// .pop() eliminar el ultimo elemento del array
colores.pop();
console.log(colores);
/*
(3) ['amarillo', 'azul', 'rojo']
0: "amarillo"
1: "azul"
2: "rojo"
length: 3
[[Prototype]]: Array(0)
*/

// guardar en una variable el ultimo elemento eliminado del array
const eliminarUltimoElemento = colores.pop();
console.log('ultimo elemento del array colores:', eliminarUltimoElemento);
// ultimo elemento del array colores: rojo

console.log(colores);
/*
(2) ['amarillo', 'azul']
0: "amarillo"
1: "azul"
length: 2
[[Prototype]]: Array(0)
*/

/* .forEach recorrer (iterar) array

 element son los elementos del array
i = i son los indices 0, 1, 2... del array */
colores.forEach((element, i) => {
  console.log(`<li id="${i}">${element}</li>`);
});
/*
<li id="0">amarillo</li>
<li id="1">azul</li>
*/
