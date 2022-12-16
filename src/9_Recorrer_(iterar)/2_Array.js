/* eslint-disable no-restricted-syntax */
// @ts-nocheck

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

/*
Todos los siguientes codigos
imprimen por consola
el indice
y el caracter actual
del ARRAY:

i = 0 / elemento = '▲'
i = 1 / elemento = '●'
i = 2 / elemento = '✖'
i = 3 / elemento = '■'
*/

/*
 ▄▄▄▄▄▄▄▄▄
 █ while █
 ▀▀▀▀▀▀▀▀▀
INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄
 █ for █
 ▀▀▀▀▀▀▀
INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Array.from() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
INCOMPLETO
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
array.forEach((caracter, i) => {
  console.log(`i=${i} / caracter='${caracter}'`);
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
  console.log(`i = ${elemento[0]} / elemento = '${elemento[1]}'`);
}
/*
i = 0 / elemento = '▲'
i = 1 / elemento = '●'
i = 2 / elemento = '✖'
i = 3 / elemento = '■'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
*/
const iterar = array.filter((elemento, i) => {
  console.log(`i = ${i} / elemento = '${elemento}'`);

  /* .filter() agrega al array iterar
  los elementos q cumplen con la condicion,
  como siempre se retorna verdadero return true
  entonces .filter() agrega todos los elementos */
  return true;
});

console.log(iterar);
// (4) ['▲', '●', '✖', '■']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ [@@iterador]() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
INCOMPLETO
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator */
