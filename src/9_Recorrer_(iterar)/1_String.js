/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
// @ts-nocheck

const string = 'hola mundo';
console.log(string);
// 'hola mundo'

/*
Todos los siguientes codigos
imprimen por consola
el indice
y el CARACTER actual
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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
*/
let j = 0;

while (j < string.length) {
  console.log(`i=${j} / caracter='${string[j]}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ do {} while() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
*/
j = 0;

do {
  console.log(`i=${j} / caracter='${string[j]}'`);
  j += 1;
} while (j < string.length);

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ for () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/
for (let i = 0; i < string.length; i++) {
  console.log(`i=${i} / caracter='${string[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
*/
j = 0;

for (const caracter of string) {
  console.log(`i=${j} / caracter='${caracter}'`);
  j += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/
for (const i in string) {
  console.log(`i=${i} / caracter='${string[i]}'`);
}

/* Las formas q explique anteriormente
sirven para tipo string,
pero si convierto de string a array,
entonces puedo usar
las formas de iterar array que son:
- Array.from()
- .entries()
- .every()
- .some()
- .forEach()
- .map()
- .filter()
- .reduce() */
const array = string.split(''); // .split() convertir de string a array
console.log(array);
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

/*
Puedo usar el metodo de array .forEach()
porq converti de string a array
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
array.forEach((caracter, i) => {
  console.log(`i=${i} / caracter='${caracter}'`);
});
