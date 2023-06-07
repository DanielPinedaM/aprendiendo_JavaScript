/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable array-callback-return */
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

/* Documentacion Oficial...
- Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

- TypedArray.from() Array.from en arrays con tipos de datos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from

Recordatorio:
Ver:
\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia

Array.from()
Convertir a Array
y Ejecutar una Función para Cada Elemento

Array.from()
crea un nuevo array
haciendo una copia
y ejecuta una funcion
para cada uno de los elementos

Array.from()
convierte a array lo siguiente:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#description

- '' string (texto)
- Objetos iterables, como por ejemplo
  = {}; objeto literal
  map
  set
- Array
- JSON
- Cualquier tipo de dato que se pueda recorrer (iterar) .length

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#syntax

Funcion flecha (arrow function)
Array.from(arrayLike, (element, index) => { })

Mapear Funcion (Mapping function)
Array.from(arrayLike, mapFn, thisArg)

Mapear funcion en una sola linea (inline mapping function)
Array.from(arrayLike, function (element, index) { }, thisArg)

Donde...
- arrayLike
Es lo que quiero convertir a array,
es cualquier tipo de dato que se pueda recorrer (iterar),
es OBLIGATORIO

- mapFn
Es una funcion que sirve para recorrer (iterar) el array,
se ejecuta para cada uno de los elementos del array,
tiene los argumentos element, index, y thisArg
es OPCIONAL

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array,
es obligatorio pero solo cuando se define la funcion mapFn

- index
Es el numero de posicion (indice)
que empieza desde 0,
es opcional

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion mapFn */

/* ------------------------------------------------ */

/* Ejemplo 1 - Array.from() Convertir a array...

Estos son ejemplos
de los tipos de datos
q se pueden convertir a array */

// '' string
console.log(Array.from(''));             // []

// [] array
console.log(Array.from([]));             // []

// {} objeto literal
console.log(Array.from({}));             // []

// function () {} declaracion de funcion
console.log(Array.from(function () {})); // []

// funcion flecha (arrow function)
console.log(Array.from(() => {}));       // []

// class {} clases
console.log(Array.from(class {}));       // []

/* ------------------------------------------------ */

/* Ejemplo 2:
Recorrer (iterar) un string usando el metodo Array.from() */

const string = 'hola mundo';

Array.from(string, (elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});
/*
i=0 | elemento='h'
i=1 | elemento='o'
i=2 | elemento='l'
i=3 | elemento='a'
i=4 | elemento=' '
i=5 | elemento='m'
i=6 | elemento='u'
i=7 | elemento='n'
i=8 | elemento='d'
i=9 | elemento='o' */

/* ------------------------------------------------ */

/* Ejemplo 3 - Array.from() Convertir de String a Array:
Convertir cada uno de los caracteres del string
(incluyendo los espacios en blanco ' ')
a elementos de un array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#array_from_a_string */

let array1 = Array.from('ABCD'); // ('ABCD') SIN espacios
console.log(array1);
/* (4) ['A', 'B', 'C', 'D']
0: "A"
1: "B"
2: "C"
3: "D"
length: 4
[[Prototype]]: Array(0) */

array1 = Array.from('A B C D'); // ('A B C D') CON espacios en blanco
console.log(array1);
/* (7) ['A', ' ', 'B', ' ', 'C', ' ', 'D']
0: "A"
1: " "
2: "B"
3: " "
4: "C"
5: " "
6: "D"
length: 7
[[Prototype]]: Array(0) */

/* ------------------------------------------------ */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from

Crear una funcion flecha (arrow function) con el metodo Array.from()
para sumar por si mismo cada uno de los elementos de un array

Ejemplo:
Si el array es [1, 2, 3]

entonces sumar
(x) => x + x
1 + 1 = 2
2 + 2 = 4
3 + 3 = 6

y el array resultante es [2, 4, 6] */
console.log(Array.from([1, 2, 3], (x) => x + x));
/* (3) [2, 4, 6]
0: 2
1: 4
2: 6
length: 3
[[Prototype]]: Array(0) */

/* ------------------------------------------------ */

/* Ejemplo 5 - Secuencia de numeros
Crear un array con los numeros desde el 0 hasta el 5
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#using_arrow_functions_and_array.from */

const numeros = Array.from({ length: 5 }, (elemento, i) => i);
console.log(numeros);
/* (5) [0, 1, 2, 3, 4]
0: 0
1: 1
2: 2
3: 3
4: 4
length: 5
[[Prototype]]: Array(0) */

/* ------------------------------------------------ */

/* Ejemplo 6 - convertir objeto Set() a Array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#array_from_a_set

los numeros 1 y 2 se repiten [1, 1, 2, 2]

Crear variable new Set() */
const set = new Set([1, 1, 2, 2]);

// ¿El objeto Set() es un array?
console.log(Array.isArray(set)); // false

// Set() elimina los numeros repetidos Set(2) {1, 2}
console.log(set);
/* Set(2) {1, 2}
[[Entries]]
0: 1
1: 2
size: 2
[[Prototype]]: Set */

// convertir objeto Set() a Array
const array2 = Array.from(set);

/* Array.isArray() imprime true
despues de hacer la conversion a array */
console.log(Array.isArray(array2)); // true

console.log(array2);
/* (2) [1, 2]
0: 1
1: 2
length: 2
[[Prototype]]: Array(0) */

/* ------------------------------------------------ */

/* Ejemplo 7 - convertir objeto Map() a Array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#array_from_a_map */

const map = new Map([
// [clave, valor]
  [1, 2],
  [2, 4],
  [4, 8],
]);

console.log(map);
/* Map(3) {1 => 2, 2 => 4, 4 => 8}
[[Entries]]
0: {1 => 2}
1: {2 => 4}
2: {4 => 8}
size: 3
[[Prototype]]: Map */

/* convertir TODOS los propiedad: valor
del objeto Map() a Array */
let array3 = Array.from(map);

/* se crea un array anidado
con TODOS los numeros */
console.log(array3);
/* (3) [Array(2), Array(2), Array(2)]

[[1, 2], [2, 4], [4, 8]]

0: (2) [1, 2]
1: (2) [2, 4]
2: (2) [4, 8]
length: 3
[[Prototype]]: Array(0) */

// array con los valores .values() de Map()
array3 = Array.from(map.values());
console.log(array3);
/* (3) [2, 4, 8]
0: 2
1: 4
2: 8
length: 3
[[Prototype]]: Array(0) */

// array con las propiedades (claves) .keys() de Map()
array3 = Array.from(map.keys());
console.log(array3);
/* (3) [1, 2, 4]
0: 1
1: 2
2: 4
length: 3
[[Prototype]]: Array(0) */

/* ------------------------------------------------ */

/* Ejemplo 8 - Convertir a array los argumentos de una funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#array_from_an_array-like_object_arguments */

function f() {
  return Array.from(arguments);
}

// f(1, 2, 3) son los argumentos
const valorDeRetorno = f(1, 2, 3);
console.log(valorDeRetorno);
/* (3) [1, 2, 3]
0: 1
1: 2
2: 3
length: 3
[[Prototype]]: Array(0) */

/* Array.isArray()
¿el valorDeRetorno? de la funcion es un array? */
console.log(Array.isArray(valorDeRetorno)); // true

/* ------------------------------------------------ */

/* Ejemplo 9:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#calling_from_on_non-array_constructors

El metodo Array.from()
se puede llamar junto con
cualquier otra funcion constructora new
que acepte un solo argumento
que represente la longitud length del nuevo array */

function noArray(len) {
  console.log("llamar funcion noArray() y longitud .length", len);
}

// new Set() es iterable
console.log(Array.from.call(noArray, new Set(["foo", "bar", "baz"])));
/* 'llamar funcion noArray() y longitud .length'
noArray {
          '0': 'foo',
          '1': 'bar',
          '2': 'baz',
          length: 3
        } */

// .call()
console.log(Array.from.call(noArray, { length: 1, 0: "foo" }));
/* 'llamar funcion noArray() y longitud .length'
noArray {
         0: 'foo',
         length: 1
        } */

/* se devuelve un array
cuando el valor NO es un constructor new */
console.log(Array.from.call({}, { length: 1, 0: "foo" }));
/* [ 'foo' ]
0: "foo"
length: 1
[[Prototype]]: Array(0) */
