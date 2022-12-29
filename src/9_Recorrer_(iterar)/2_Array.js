/* eslint-disable array-callback-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// @ts-nocheck

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

/*
Hay 2 formas diferentes de recorrer (iterar)
los array de acuerdo a la DIRECCION de iteracion:

1) De izquierda a derecha
   (desde el PRIMER 0 elemento hacia el ULTIMO -1 elemento),
   para esto se usan los codigos:

   - while () {}
   - do {} while ()
   - for i++
   - for of
   - for in
   - Array.from()
   - .entries()
   - .every()
   - .some()
   - .forEach()
   - .map()
   - .filter()
   - .reduce()
   - .find()
   - .findIndex()

   El resultado es:

   i=0 | elemento='▲'
   i=1 | elemento='●'
   i=2 | elemento='✖'
   i=3 | elemento='■'

2) Al revés, de derecha a izquierda
   (desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento),
   para esto se usan los codigos:

   - for i--
   - .reduceRight()
   - .findLast()
   - .findLastIndex()

   El resultado es:

   i=3 | elemento='■'
   i=2 | elemento='✖'
   i=1 | elemento='●'
   i=0 | elemento='▲'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
*/
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
*/
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
*/
for (let i = 0; i < array.length; i++) {
  console.log(`i=${i} | elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/
j = 0;

for (const elemento of array) {
  console.log(`i=${j} | elemento='${elemento}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/
for (const i in array) {
  console.log(`i=${i} | elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
Array.from(array, (elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
  return elemento;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
*/
const iterador = array.entries();
console.log(iterador);
// Object [Array Iterator] {}

// for of
for (const elemento of iterador) {
  console.log(`i=${elemento[0]} | elemento='${elemento[1]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .every() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
¿TODOS los elementos del array cumplen con la condición de la función?
*/
array.every((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
  return true;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .some() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
*/
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
*/
array.forEach((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
array.map((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* .map() devuelve el elemento actual
  q cambia dependiendo de la posicion (indice) q se esta iterando,
  al terminar de iterar se copia el array llamado figuras
  en otro array llamado iterar */
  return elemento;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
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
*/
array.reduce((acumulador, elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
  return array;
}, 0);

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .find() █
 ▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/
array.find((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
*/
array.findIndex((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i-- █
 ▀▀▀▀▀▀▀▀▀▀▀
*/
for (let i = array.length - 1; i >= 0; i--) {
  console.log(`i=${i} | elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight */
array.reduceRight((acumulador, elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
  return array;
}, 0);

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLast() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast
*/
array.findLast((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .findLastIndex() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
*/
array.findLastIndex((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);
});
