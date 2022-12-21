/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
// @ts-nocheck

/* Diferencia Entre .match() y .matchAll()
https://blog.tildeloop.com/posts/javascript-the-difference-between-match-and-matchall

Documentacion Oficial...
- .match() en tipo string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

- .match() en tipo symbol
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match

- .matchAll()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

Ambos .match() y .matchAll() comparan un string con una expresión regular
*/

const string = 'hola mundo';

/* --------- */
// .match()

// Array.isArray() devuelve true porq .match() devuelve un array []
console.log(Array.isArray(string.match(/[a-z]/)));
// true

/* el string 'hola mundo' esta en minuscula,
por lo tanto NO coincide con la expresion regular
/[A-Z]/ q esta en MAYUSCULA */
console.log(string.match(/[A-Z]/));
// null

/* /g en la expresion regular devuelve
TODOS los caracteres q coinciden
con la expresion regular */
console.log(string.match(/[a-z]/g));
/* (9) ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: "m"
5: "u"
6: "n"
7: "d"
8: "o"
length:9
[[Prototype]]: Array(0) */

/* cuando NO se escribe /g
en la expresion regular
se devuelve la PRIMERA coincidencia
de la expresion regular

el PRIMER caracter (letra) de 'hola mundo'
q coincide con la expresion regular
/[a-z]/ es la 'h' */
console.log(string.match(/[a-z]/));
/* ['h', index: 0, input: 'hola mundo', groups: undefined]
0:  "h"
groups: undefined
index: 0
input: "hola mundo"
length: 1
[[Prototype]]: Array(0) */

/* --------- */
// .matchAll()

/* .matchAll() devuelve un iterador
q contiene arrays con
TODOS los caracteres
q coinciden con la expresion regular */
const matchAll = string.matchAll(/[a-z]/g);

// {} objeto literal vacío
console.log(matchAll);
// Object [RegExp String Iterator] {}

console.log(typeof matchAll);
// object

// false porq .matchAll() NO devuelve un array
console.log(Array.isArray(matchAll));
// false

// Recorrer (iterar)
Array.from(matchAll, (elemento1) => console.log(elemento1));

for (const elemento2 of matchAll) {
  console.log(elemento2);
}
/* (9) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

[ 'h', index: 0, input: 'hola mundo', groups: undefined ]
[ 'o', index: 1, input: 'hola mundo', groups: undefined ]
[ 'l', index: 2, input: 'hola mundo', groups: undefined ]
[ 'a', index: 3, input: 'hola mundo', groups: undefined ]
[ 'm', index: 5, input: 'hola mundo', groups: undefined ]
[ 'u', index: 6, input: 'hola mundo', groups: undefined ]
[ 'n', index: 7, input: 'hola mundo', groups: undefined ]
[ 'd', index: 8, input: 'hola mundo', groups: undefined ]
[ 'o', index: 9, input: 'hola mundo', groups: undefined ]
*/

// crear un array a partir del metodo .matchAll()
const array = [...string.matchAll(/[a-z]/g)];
console.log(array);
// (9) [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1)]

// Recorrer (iterar) array
array.forEach((elemento3, i) => {
  console.log(`i = ${i} | elemento = '${elemento3}'`);
});
/*
i = 0 | elemento = h
i = 1 | elemento = o
i = 2 | elemento = l
i = 3 | elemento = a
i = 4 | elemento = m
i = 5 | elemento = u
i = 6 | elemento = n
i = 7 | elemento = d
i = 8 | elemento = o
*/

/* ERROR: con el metodo .matchAll()
es obligatorio escribir /g en la expresion regular */
// console.log(string.matchAll(/[a-z]/));
