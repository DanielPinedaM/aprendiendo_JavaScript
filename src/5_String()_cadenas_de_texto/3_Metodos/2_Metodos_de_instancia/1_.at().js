// @ts-nocheck

/* Documentacion Oficial - .at()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

.at() Permite obtener (acceder) la posicion (indice) de un caracter en especifico

.at() devuelve el caracter (letra, numero, etc.)
que se encuentra en la posicion (indice)
que he escrito entre el par de parentesis de .at()

Dentro del par de parentesis de .at() va un numero entero positivo o negativo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at#syntax */

const string = 'hola mundo';

/* cuando escribo un numero negativo
dentro del par de parentesis de .at(),
los numeros enteros NEGATIVOS
cuentan desde atras (ultimo caracter)
hacia adelante (primer caracter)

Imprimir el ULTIMO caracter (letra):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at#comparing_methods */
console.log('ultimo caracter (letra):', string.at(-1)); // usando .at(-1)
// ultimo caracter (letra): o

// variableTipoString.charAt(variableTipoString.length - 1)
console.log('ultimo caracter (letra):', string.charAt(string.length - 1)); // usando .charAt() y .length
// ultimo caracter (letra): o

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

/* imprimie el PRIMER caracter

Los números enteros POSITIVOS
cuentan desde el primer caracter hacia el ultimo
(de izquierda a derecha)

no he escrito nada entre los parentesis del metodo .at() */
console.log('primer caracter (letra):', string.at());
// primer caracter (letra): h

/* el numero 0 es el primer caracter .at(0) */
console.log('primer caracter (letra):', string.at(0));
// primer caracter (letra): h

/* ----- */

/* Imprimir el segundo y tercer carácter  */

console.log('segundo caracter (letra):', string.at(1));
// segundo caracter (letra): o

console.log('tercer caracter (letra):', string.at(2));
// tercer caracter (letra): l

/* ----- */

// Usando la propiedad .length puedo ver el numero de caracteres de ‘hola mundo’
console.log(`${string} tiene ${string.length} caracteres`);
// hola mundo tiene 10 caracteres

/* cuando la posicion (indice) NO existe entonces se devuelve undefined

el string 'hola mundo' tiene 10 caracteres,
si intento acceder al caracter (posicion / indice) 999 que NO existe
entonces se imprime undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at#return_value */

console.log('numero de posicion (indice) inexistente:', string.at(999));
// numero de posicion (indice) inexistente: undefined
