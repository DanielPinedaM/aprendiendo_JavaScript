/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
// @ts-nocheck

/* --------------------------------------------------------------- */

const string = 'hola mundo';
console.log(string);
// 'hola mundo'

// El numero de CARACTERES (longitud, .length) del STRING es 10
console.log(string.length);
// 10

/*
Todos los siguientes codigos
imprimen por consola
la posicion (indice)
y el CARACTER actual
del STRING:

i=0 ➜ caracter='h'
i=1 ➜ caracter='o'
i=2 ➜ caracter='l'
i=3 ➜ caracter='a'
i=4 ➜ caracter=' '
i=5 ➜ caracter='m'
i=6 ➜ caracter='u'
i=7 ➜ caracter='n'
i=8 ➜ caracter='d'
i=9 ➜ caracter='o'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while */

let i = 0;

while (i < string.length) {
  console.log(`i=${i} ➜ caracter='${string[i]}'`);
  i += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ do {} while() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while */

i = 0;

do {
  console.log(`i=${i} ➜ caracter='${string[i]}'`);
  i += 1;
} while (i < string.length);

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ for () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for */

for (let i = 0; i < string.length; i++) {
  console.log(`i=${i} ➜ caracter='${string[i]}'`);
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */

i = 0;

for (const caracter of string) {
  console.log(`i=${i} ➜ caracter='${caracter}'`);
  i += 1;
}

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in */

for (const i in string) {
  console.log(`i=${i} ➜ caracter='${string[i]}'`);
}

/*
Recordatorio:
Ver:
- " 8.5.3.10) Formas de Convertir de String a Array "
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/

- “ 14.2) [] Array ”

Las formas q explique anteriormente
sirven para iterar tipo string,
pero si convierto de string "" a array []
entonces puedo usar
las formas de iterar array [] que son:

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
- .reduceRight()
- .find()
- .findLast()
- .findLastIndex()
- .findIndex()
- .indexOf()
- .lastIndexOf() */

// .split() convertir de string "" a array []
const array = string.split('');
console.log(array);
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://youtu.be/FMubfnVET74

Puedo usar el metodo de array .map()
porq converti de string "" a array [] */

const copiaArray = array.map((caracter, i) => {
  console.log(`i=${i} ➜ caracter='${caracter}'`);

  return caracter;
});

console.log(copiaArray);
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
