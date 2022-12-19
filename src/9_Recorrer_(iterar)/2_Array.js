/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// @ts-nocheck

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

/* Todos los siguientes codigos
imprimen por consola
el indice
y el ELEMENTO actual
del ARRAY:

i=0 / elemento='▲'
i=1 / elemento='●'
i=2 / elemento='✖'
i=3 / elemento='■'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
let j = 0;

while (j < array.length) {
  console.log(`i=${j} / elemento='${array[j]}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ do {} while() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
j = 0;

do {
  console.log(`i=${j} / elemento='${array[j]}'`);
  j += 1;
} while (j < array.length);

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ for () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
for (let i = 0; i < array.length; i++) {
  console.log(`i=${i} / elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
*/
j = 0;

for (const elemento of array) {
  console.log(`i=${j} / elemento='${elemento}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
*/
for (const i in array) {
  console.log(`i=${i} / elemento='${array[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
Array.from(array, (elemento, i) => {
  console.log(`i=${i} / elemento='${elemento}'`);
  return elemento;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
const iterador = array.entries();
console.log(iterador);
// Object [Array Iterator] {}

// for of
for (const elemento of iterador) {
  console.log(`i=${elemento[0]} / elemento='${elemento[1]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .every() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
¿TODOS los elementos del array cumplen con la condición de la función?
*/
array.every((elemento, i) => {
  console.log(`i = ${i} / elemento = '${elemento}'`);
  return true;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .some() █
 ▀▀▀▀▀▀▀▀▀▀▀
*/
array.some((elemento, i) => {
  console.log(`i = ${i} / elemento = '${elemento}'`);

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
*/
array.forEach((elemento, i) => {
  console.log(`i=${i} / elemento='${elemento}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
*/
array.map((elemento, i) => {
  console.log(`i=${i} / elemento='${elemento}'`);
  return elemento;
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
array.filter((elemento, i) => {
  console.log(`i = ${i} / elemento = '${elemento}'`);

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
*/
array.reduce((acumulador, elemento, i) => {
  console.log(`i = ${i} / elemento = '${elemento}'`);
  return array;
}, 0);
