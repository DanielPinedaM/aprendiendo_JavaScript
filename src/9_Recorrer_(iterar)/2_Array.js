/* eslint-disable array-callback-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// @ts-nocheck

/*
Hay 2 formas diferentes de recorrer (iterar)
los array de acuerdo a la DIRECCION de iteracion:

1) De izquierda a derecha
   (desde el PRIMER 0 elemento hacia el ULTIMO -1 elemento),
   para esto se usan los codigos:

   - while () {}
   - do {} while ()
   - for i++
   - for i++ y .join()
   - for of
   - for in
   - Array.from()
   - .entries()
   - .keys() y .values()
   - .every()
   - .some()
   - .forEach()
   - .map()
   - .flatMap()
   - .filter()
   - .reduce()
   - .find()
   - .findIndex()
   - .indexOf()

   El resultado es:

   i=0 | elemento='▲'
   i=1 | elemento='●'
   i=2 | elemento='✖'
   i=3 | elemento='■'

2) Al revés, de derecha a izquierda
   (desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento),
   para esto se usan los codigos:

   - for i--
   - for i-- y .join()
   - .reduceRight()
   - .findLast()
   - .lastIndexOf()
   - .findLastIndex()

   El resultado es:

   i=3 | elemento='■'
   i=2 | elemento='✖'
   i=1 | elemento='●'
   i=0 | elemento='▲'
*/

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

1) Evalua la condicion

2) Itera el array hasta que termine de cumplirse la condicion */
let j = 0;

while (j < array.length) {
  console.log(`i=${j} | elemento='${array[j]}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ do {} while () █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

1) Ejecuta las instrucciones del bucle (ciclo) al menos una vez

2) evalua la condicion

3) Itera el array hasta que termine de cumplirse la condicion */
j = 0;

do {
  console.log(`i=${j} | elemento='${array[j]}'`);
  j += 1;
} while (j < array.length);

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i++ █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

Iterar array en orden ASCENDENTE (de IZQUIERDA A DERECHA) i++
desde la PRIMERA posicion (indice) let i = 0
hasta la ULTIMA posicion i < array.length */
for (let i = 0; i < array.length; i++) {
  console.log(`i=${i} | elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */
j = 0;

for (const elemento of array) {
  console.log(`i=${j} | elemento='${elemento}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in */
for (const i in array) {
  console.log(`i=${i} | elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Convertir a Array y Ejecutar una Función para Cada Elemento */
Array.from(array, (elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
  return elemento;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .every() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

¿TODOS los elementos del array cumplen con la condición de la función? */
array.every((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* Para q .every() itere todos los elementos del array,
  tiene que devolver verdadero return true,
  porque el bucle se detiene cuando retorna falso
  q es cuando se encuentra un elemento
  q NO cumple con la condicion de la funcion */
  return true;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .some() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

¿AL MENOS UN SOLO Elemento del Array Cumple con la Condición de la Función? */
array.some((elemento, i) => {
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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Recorrer (Iterar) Array y Ejecutar una Función para Cada Elemento */
array.forEach((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Devolver un Nuevo Array
con el Resultado de Ejecutar una Función
a Cada Uno de los Elementos
de un Array Existente (Mapear Array) */
array.map((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return elemento;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .flatMap() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/em_Vh7ZGrnw

.flatMap() hace lo siguiente, en este orden:
1) Ejecuta .map():
Crea un nuevo array2 que MODIFICA
cada uno de los elementos del array1 original (existente)
(MAPEAR array)

2) Aplana el array original */
array.flatMap((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return elemento;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Crear una Copia de un Array Existente Dependiendo de la Condición de una Función (Filtrar Array) */
array.filter((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* .filter() agrega al array
  los elementos q cumplen
  con la condicion de la funcion
  q es cuando se retorna true,
  como siempre se retorna true
  entonces .filter() agrega todos los elementos */
  return true;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Acumular los Elementos de un Array
para Devolver un Solo Dato
Iterando de Izquierda a Derecha (Reducir Array)

.reduce() imprime todos los elementos porque
NO se esta usando la variable acumulador
para reducir el array a un solo dato */
array.reduce((acumulador, elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return array;
}, 0);

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .find() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

.find() Busca el PRIMER ELEMENTO
que coincide con la condición de la función return

Itera todo el array porque no hay ningun return */
array.find((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Devolver el PRIMER NÚMERO de posición (índice) del elemento buscado en un array

Itera todo el array porque no hay ningun return */
array.findIndex((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .indexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

PRIMER Número de Posición (Índice) del Elemento Buscado */
for (const elemento of array) {
  const i = array.indexOf(elemento); // MALA PRACTICA: obtener indice actual con .indexOf()
  console.log(`i=${i} | elemento='${elemento}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i-- █
 ▀▀▀▀▀▀▀▀▀▀▀
Iterar array en orden DESCENDENTE (de DERECHA A IZQUIERDA) i--
desde la ULTIMA posicion (indice) let i = array.length - 1
hasta la PRIMERA posicion i >= 0 */
for (let i = array.length - 1; i >= 0; i--) {
  console.log(`i=${i} | elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

.reduceRight() hace lo mismo q .reduce(),
lo unico q cambia es el orden de iteracion */
array.reduceRight((acumulador, elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
  return array;
}, 0);

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLast() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast

ÚLTIMO Elemento que Coincide con la Condición de la Función */
array.findLast((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .lastIndexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexO

ULTIMO Número de Posición (Índice) del Elemento Buscado */
for (let i = array.length - 1; i >= 0; i--) {
  const k = array.lastIndexOf(array[i]); // MALA PRACTICA: obtener indice actual con .lastIndexOf()
  console.log(`i=${k} | elemento='${array[k]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLastIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex

ULTIMO Número de Posición (Índice) del Elemento Buscado */
array.findLastIndex((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .join() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/59tYAYnt_sg

.join() Convertir de array a string */
const string = array.join('');
console.log(string);
// '▲●✖■'

// for () {} Recorrer (iterar) string
for (let i = 0; i < string.length; i++) {
  console.log(`i=${i} | caracter='${string[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

Iterador de un Array que Contiene [i, elemento]  */
const iterador = array.entries();
console.log(iterador);
// Object [Array Iterator] {}

// for of
for (const [i, elemento] of iterador) {
  console.log(`i=${i} | elemento='${elemento}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .keys() y .values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

Iterador de Índices .keys() y Elementos .values() de un Array */

// Índices = array.keys()
const keys = array.keys();
console.log(keys);
// Object [Array Iterator] {}

// Elementos = array.values()
const values = array.values();
console.log(values);
// Object [Array Iterator] {}

// Recorrer (iterar) array usando .keys() y .values()
for (let i = 0; i < array.length; i++) {
  const indices = keys.next().value;
  const elementos = values.next().value;

  console.log(`i=${indices} | elemento='${elementos}'`);
}
