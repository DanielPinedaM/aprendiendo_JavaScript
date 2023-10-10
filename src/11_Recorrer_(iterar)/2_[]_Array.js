/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Recordatorio:
Ver:
" 9.4.3.1) Resumen: Diferencia Entre .forEach() .map() .filter() .reduce() .find() "

Hay 2 formas diferentes de recorrer (iterar)
los array [] de acuerdo a la DIRECCION de iteracion:

1) De izquierda a derecha →
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
   - Object.groupBy()
   - Map.groupBy()

   El resultado es:

   i=0 ➜ elemento='▲'
   i=1 ➜ elemento='●'
   i=2 ➜ elemento='✖'
   i=3 ➜ elemento='■'

2) Al revés, de derecha a izquierda ←
   (desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento),
   para esto se usan los codigos:

   - for i--
   - for i-- y .join()
   - .reduceRight()
   - .findLast()
   - .lastIndexOf()
   - .findLastIndex()

   El resultado es:

   i=3 ➜ elemento='■'
   i=2 ➜ elemento='✖'
   i=1 ➜ elemento='●'
   i=0 ➜ elemento='▲' */

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

// El numero de ELEMENTOS (longitud, .length) del ARRAY es 4
console.log(array.length);
// 4

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

1) Evalua la condicion

2) Itera el array hasta que termine de cumplirse la condicion */

let i = 0;

while (i < array.length) {
  console.log(`i=${i} ➜ elemento='${array[i]}'`);
  i += 1;
}

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ do {} while () █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

1) Ejecuta las instrucciones del bucle (ciclo) al menos una vez

2) Evalua la condicion

3) Itera el array hasta que termine de cumplirse la condicion */

i = 0;

do {
  console.log(`i=${i} ➜ elemento='${array[i]}'`);
  i += 1;
} while (i < array.length);

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i++ █
 ▀▀▀▀▀▀▀▀▀▀▀
https://midu.dev/foreach-mas-rapido-for/

i++ Iterar array en orden ASCENDENTE (de IZQUIERDA A DERECHA)
desde la PRIMERA posicion (indice) let i = 0
hasta la ULTIMA posicion i < array.length */

for (let i = 0; i < array.length; i++) {
  console.log(`i=${i} ➜ elemento='${array[i]}'`);
}

/*
 →
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */

i = 0;

for (const elemento of array) {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
  i += 1;
}

/*
 →
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in */

for (const i in array) {
  console.log(`i=${i} ➜ elemento='${array[i]}'`);
}

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Convertir a Array [] y Ejecutar una Función para Cada Elemento */

const copiaArray = Array.from(array, (elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
  return elemento;
});

console.log(copiaArray);
// (4) ['▲', '●', '✖', '■']

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .every() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/sVO65BeJjq8

¿TODOS los elementos del array cumplen con la condición de la función? */

array.every((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  /* Para q .every() itere todos los elementos del array,
  tiene que devolver verdadero return true,
  porque el bucle se detiene cuando retorna falso
  q es cuando se encuentra un elemento
  q NO cumple con la condicion de la funcion */
  return true;
});

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .some() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/sVO65BeJjq8

¿AL MENOS UN SOLO Elemento del Array Cumple con la Condición de la Función? */

array.some((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  /* .some() deja de iterar cuando
  AL MENOS UN SOLO elemento del array
  cumple con la condición de la función
  q es cuando retorna true la PRIMERA VEZ,
  entonces para q itere todos los elementos
  siempre tiene q retornar false */
  return false;
});

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://midu.dev/foreach-mas-rapido-for/

Recorrer (Iterar) Array y ejecutar una función para cada elemento */

array.forEach((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
});

/*
 →
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://youtu.be/FMubfnVET74

Devolver un Nuevo Array
con el Resultado de Ejecutar una Función
a Cada Uno de los Elementos
de un Array Existente (Mapear Array) */

const copiaArray2 = array.map((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  return elemento;
});

console.log(copiaArray2);
// (4) ['▲', '●', '✖', '■']

/*
 →
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

const mapearAplanar = array.flatMap((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  return elemento;
});

console.log(mapearAplanar);
// (4) ['▲', '●', '✖', '■']

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/fCvuOyVXUUQ

Crear una Copia de un Array Existente Dependiendo de la Condición de una Función (Filtrar Array) */

const filtrar = array.filter((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  /* .filter() agrega al array []
  los elementos q cumplen
  con la condicion de la funcion
  q es cuando se retorna true,
  como siempre se retorna true
  entonces .filter() agrega todos los elementos */
  return true;
});

console.log(filtrar);
// (4) ['▲', '●', '✖', '■']

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀

.reduce() y .reduceRight() son MALA PRACTICA:
https://youtu.be/S1ZXSoAxEBg

https://youtu.be/qaGjS7-qWzg

Acumular los Elementos de un Array
para Devolver un Solo Dato
Iterando de Izquierda a Derecha (Reducir Array)

.reduce() imprime todos los elementos porque
NO se esta usando la variable acumulador
para reducir el array a un solo dato */

const reduce = array.reduce((acumulador, elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  return array;
}, 0);

console.log(reduce);
// (4) ['▲', '●', '✖', '■']

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .find() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/en5f0sYFJZE

.find() Busca el PRIMER ELEMENTO
que coincide con la condición de la función return

Itera todo el array [] porque no escribi return */

array.find((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  // return
});

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

Devolver el PRIMER NÚMERO de posición (índice) del elemento buscado en un array

Itera todo el array porque no hay ningun return */

array.findIndex((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  // return
});

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .indexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

PRIMER Número de Posición (Índice) del Elemento Buscado */

for (const elemento of array) {
  const i = array.indexOf(elemento); // MALA PRACTICA: obtener indice actual con .indexOf()
  console.log(`i=${i} ➜ elemento='${elemento}'`);
}

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/pduSpSe-V-o?si=Qa-YzxFT_PH0X0NY

AGRUPAR array [] en un objeto literal {}
dependiendo de la condición de la función
q esta en el valor de retorno return */

const iterar = Object.groupBy(array, (elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* Object.groupBy() AGRUPA en un objeto literal DEPENDIENDO
  del valor de retorno return de la funcion */
  return elemento;
});
/*
i=0 | elemento = '▲'
i=1 | elemento = '●'
i=2 | elemento = '✖'
i=3 | elemento = '■'
*/

/* Object.groupBy()
return elemento retorna un objeto literal {}
q contiene en las propiedades y valores el array []
porq NO hay un condicional, solo se devuelve el elemento actual */

console.log(iterar);
/*
{
  '▲': [ '▲' ],
  '●': [ '●' ],
  '✖': [ '✖' ],
  '■': [ '■' ]
}
*/

/* Con Object.keys() puedo acceder a
las propiedades de variable iterar q es el mismo array */
const ObjectKeys = Object.keys(iterar);
console.log(ObjectKeys);
// (4) ['▲', '●', '✖', '■']

/*
 →
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Map.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/pduSpSe-V-o?si=Qa-YzxFT_PH0X0NY

AGRUPAR array [] en un objeto literal {}
dependiendo de la condición de la función
q esta en el valor de retorno return */
const iterar2 = Map.groupBy(array, (elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return elemento;
});
/*
i=0 | elemento = '▲'
i=1 | elemento = '●'
i=2 | elemento = '✖'
i=3 | elemento = '■'
*/

/* Map.groupBy() retorna un objeto Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map */
console.log(iterar2);
/*
=> Map {
         '▲': [ '▲' ],
         '●': [ '●' ],
         '✖': [ '✖' ],
         '■': [ '■' ]
       }
*/

/*
 ←
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i-- █
 ▀▀▀▀▀▀▀▀▀▀▀
https://midu.dev/foreach-mas-rapido-for/

Iterar array en orden DESCENDENTE (de DERECHA A IZQUIERDA) i--
desde la ULTIMA posicion (indice) let i = array.length - 1
hasta la PRIMERA posicion i >= 0 */

for (let i = array.length - 1; i >= 0; i--) {
  console.log(`i=${i} ➜ elemento='${array[i]}'`);
}

/*
 ←
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

.reduce() y .reduceRight() son MALA PRACTICA:
https://youtu.be/S1ZXSoAxEBg

https://youtu.be/qaGjS7-qWzg

Acumular los Elementos de un Array
para Devolver un Solo Dato Iterando de
derecha a izquierda ←
(desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento),

.reduceRight() hace lo mismo q .reduce(),
lo unico q cambia es el orden de iteracion */

const reduceRight = array.reduceRight((acumulador, elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  return array;
}, 0);

console.log(reduceRight);
// (4) ['▲', '●', '✖', '■']

/*
 ←
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLast() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast

ÚLTIMO Elemento que Coincide con la Condición de la Función */

array.findLast((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
});

/*
 ←
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .lastIndexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

ULTIMO Número de Posición (Índice) del Elemento Buscado */

for (let i = array.length - 1; i >= 0; i--) {
  const k = array.lastIndexOf(array[i]); // MALA PRACTICA: obtener indice actual con .lastIndexOf()
  console.log(`i=${k} ➜ elemento='${array[k]}'`);
}

/*
 ←
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLastIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex

ULTIMO Número de Posición (Índice) del Elemento Buscado */

array.findLastIndex((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .join() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/59tYAYnt_sg

.join() Convertir de array [] a string "" */

const string = array.join('');
console.log(string);
// '▲●✖■'

// for () {} Recorrer (iterar) string
for (let i = 0; i < string.length; i++) {
  console.log(`i=${i} ➜ caracter='${string[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries

Iterador de un Array que Contiene [i, elemento] */

const iterador = array.entries();
console.log(iterador);
// Object [Array Iterator] {}

// for of
for (const [i, elemento] of iterador) {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .keys() y .values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values

Iterador de Índices .keys() y Elementos .values() de un Array [] */

// Posiciones (Índices) = array.keys()
const keys = array.keys();
console.log(keys);
// Object [Array Iterator] {}

// Elementos = array.values()
const values = array.values();
console.log(values);
// Object [Array Iterator] {}

// Recorrer (iterar) array [] usando .keys() y .values()
for (let i = 0; i < array.length; i++) {
  const indices = keys.next().value;
  const elementos = values.next().value;

  console.log(`i=${indices} ➜ elemento='${elementos}'`);
}
