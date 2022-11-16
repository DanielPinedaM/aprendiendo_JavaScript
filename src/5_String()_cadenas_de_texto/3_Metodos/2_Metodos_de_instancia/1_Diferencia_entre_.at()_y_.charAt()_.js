/* eslint-disable prefer-const */
/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial...
- .at()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

- .charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

Ambos .at() y .charAt()
permiten obtener (acceder)
a la posicion (indice) de un caracter en especifico

Ambos .at() y .charAt()
devuelven el caracter (letra, numero, etc.)
que se encuentra en la posicion (indice)
que he escrito entre el par de parentesis de .at()

Dentro del par de parentesis de .at()
va un numero entero positivo o negativo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at#syntax

En cambio .charAt()
solo admite numeros enteros mayores iguales a cero (0, 1, 2, 3...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt#description */

const string = 'hola mundo';

/* cuando escribo un numero negativo
dentro del par de parentesis de .at(),
los numeros enteros NEGATIVOS
cuentan desde atras (ultimo caracter)
hacia adelante (primer caracter)

.at() si admite numeros negativos
entre el par de parentesis,
en cambio .charAt() NO

Imprimir el ULTIMO caracter (letra):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at#comparing_methods */
console.log('ultimo caracter (letra):', string.at(-1)); // usando .at(-1)
// ultimo caracter (letra): o

/* para q .charAt() admita numeros negativos tiene q ser asi:
variableTipoString.charAt(variableTipoString.length - 1) */
console.log('ultimo caracter (letra):', string.charAt(string.length - 1)); // usando .charAt() y .length
// ultimo caracter (letra): o

/* se imprime un espacio en blanco ''
porq .charAt() NO funciona con numeros negativos
dentro del par de parentesis () */
console.log(string.charAt(-1));
// ''

console.log(string.charAt(-1) === '');
// true

/* ----- */

// Imprimir el PE-NULTIMO caracter (letra):
console.log('pe-nultimo caracter (letra):', string.at(-2)); // usando .at(-2)
// pe-nultimo caracter (letra): d

console.log('pe-ultimo caracter (letra):', string.charAt(string.length - 2)); // usando .charAt() y .length
// pe-nultimo caracter (letra): d

/* ----- */

// Imprimir el ANTE-PENULTIMO caracter (letra):
console.log('ante-penultimo caracter (letra):', string.at(-3)); // usando .at(-3)
// ante-penultimo caracter (letra): n

console.log('ante-ultimo caracter (letra):', string.charAt(string.length - 3)); // usando .charAt() y .length
// ante-penultimo caracter (letra): n

/* ----- */

/* En ambos metodos .at() y .charAt()
los números enteros POSITIVOS
cuentan desde el primer caracter hacia el ultimo
(de izquierda a derecha)

En ambos metodos .at() y .charAt()
cuando no escribo nada
entre el par de parentesis ()
se imprime el primer caracter,
es decir, la posicion (indice) 0

imprimie el PRIMER caracter

no he escrito nada entre el par de parentesis () */
console.log('primer caracter (letra):', string.at());      // .at()
// primer caracter (letra): h

// el # 0 es el primer caracter .at(0)
console.log('primer caracter (letra):', string.at(0));     // .at(0)
// primer caracter (letra): h

console.log('primer caracter (letra):', string.charAt());  // .charAt()
// primer caracter (letra): h

/* el # 0 es el primer caracter .charAt(0) */
console.log('primer caracter (letra):', string.charAt(0)); // .charAt(0)
// primer caracter (letra): h

/* ----- */

/* Imprimir el segundo (1) y tercer (2) carácter (letra)  */

console.log('segundo caracter (letra):', string.at(1));     // .at(1)
// segundo caracter (letra): o

console.log('segundo caracter (letra):', string.charAt(1)); // .charAt(1)

// segundo caracter (letra): o

console.log('tercer caracter (letra):', string.at(2));      // .at(2)
// tercer caracter (letra): l

console.log('tercer caracter (letra):', string.charAt(2));  // .charAt(2)
// tercer caracter (letra): l

/* ----- */

/* La posicion (indice) 999 NO existe en el string 'hola mundo'
porq 'hola mundo' tiene 10 caracteres (posiciones / indice)

Usando la propiedad .length puedo ver el numero de caracteres de ‘hola mundo’ */
console.log(`${string} tiene ${string.length} caracteres`);
// hola mundo tiene 10 caracteres

/* cuando la posicion (indice) NO existe entonces
.at() devuelve undefined indefinido
en cambio
.charAt() devuelve un caracter en blanco ''
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at#return_value */

console.log('numero de posicion (indice) inexistente:', string.at(999));     // .at(999)
// numero de posicion (indice) inexistente: undefined

console.log(string.at(999) === undefined);
// true

console.log('numero de posicion (indice) inexistente:', string.charAt(999)); // .charAt(999)
// numero de posicion (indice) inexistente: ''

console.log(string.charAt(999) === '');
// true

/* ----- */

// .at() sirve para tipo string y array
const array = [1, 2, 3];

console.log(array.at(1)); // .at()
// 2

console.log(array[1]);
// 2

// en cambio .charAt() solamente sirve para tipo string
console.log(array.charAt(1)); // .charAt()
// ERROR (TypeError): charAt() NO sirve para arrays

/* ----- */

const emoji = '😀​';

console.log(emoji.at(0));

console.log(emoji.charAt(0));

/* ----- */

// Recorrer (iterar) string

for (let i = 0; i < string.length; i++) {
  let caracter = string.at(i); // .at(i)
  console.log(caracter);
}
/*
h
o
l
a

m
u
n
d
o
*/
for (let i = 0; i < string.length; i++) {
  let caracter = string.charAt(i); // .charAt(i)
  console.log(caracter);
}
/*
h
o
l
a

m
u
n
d
o
*/
