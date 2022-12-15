/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
// @ts-nocheck

const string = 'hola mundo';
console.log(string);
// 'hola mundo'

// .split() Convertir de string a array
const array = string.split('');
console.log(array);
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

/*
Todos los siguientes codigos
imprimen por consola
el indice
y el caracter actual
del STRING:

i=0 / caracter='h'
i=1 / caracter='o'
i=2 / caracter='l'
i=3 / caracter='a'
i=4 / caracter=' '
i=5 / caracter='m'
i=6 / caracter='u'
i=7 / caracter='n'
i=8 / caracter='d'
i=9 / caracter='o'
*/

/*
 ▄▄▄▄▄▄▄▄▄
 █ while █
 ▀▀▀▀▀▀▀▀▀
*/
let j = 0;

while (j < string.length) {
  console.log(`i=${j} / caracter='${string[j]}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄
 █ for █
 ▀▀▀▀▀▀▀
*/
for (let i = 0; i < string.length; i++) {
  console.log(`i=${i} / caracter='${string[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
*/
let k = 0;

for (const caracter of string) {
  k += 1;
  console.log(`i=${k} / caracter='${caracter}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
*/
for (const i in string) {
  console.log(`i=${i} / caracter='${string[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
array.forEach((caracter, i) => {
  console.log(`i=${i} / caracter='${caracter}'`);
});

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
convierte el string a array
y ejecuta una funcion flecha () => {}
que recorre el array (string) */
Array.from(string, (caracter, i) => {
  console.log(`i=${i} / caracter='${caracter}'`);
  return caracter;
});
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
*/
// .map() Aplica una función a cada caracter y devuelve un nuevo array
array.map((caracter, i) => {
  console.log(`i=${i} / caracter='${caracter}'`);
  return caracter;
});
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ [@@iterador]() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator

INCOMPLETO
*/
