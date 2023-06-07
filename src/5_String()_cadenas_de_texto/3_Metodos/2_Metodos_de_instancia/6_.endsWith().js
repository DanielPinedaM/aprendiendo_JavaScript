// @ts-nocheck

/* Documentacion Oficial - .endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

.endsWith() busca una cadena AL FINAL (ULTIMA PALABRA) de otra cadena
y devuelve un booleano boolean
que es true cuando SI encuentra la cadena ó false cuando NO.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#return_value

.endsWith() evalua si una cadena TERMINA igual o no que otra cadena
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#description

.endsWith() busca el string de derecha a izquierda,
desde el ultimo hacia el primer carácter.

Ejemplo 1:
.endsWith() buscar una palabra, letra o numero
en la ULTIMA PALABRA de un texto (string).

Dentro del par de parentesis de .endsWith()
se escribe lo q quiero buscar en el string

Sintaxis:
endsWith(searchString, endPosition)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#syntax

Donde...
- searchString
Es el CARACTER (número, texto, etc.) que estoy buscando AL FINAL,
NO puede ser una expresión regular
y es obligatorio escribirlo.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#exceptions

- endPosition
sirve para definir el numero de caracteres del string,
su valor por defecto es .length()
q es el total de caracteres del string,
es opcional escribirlo */

const string = 'Lorem ipsum dolor';

// 'dolor' SIN espacios
let buscar = 'dolor';
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'dolor'?: true

// ' dolor' CON espacio en blanco al principio
buscar = ' dolor';
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en ' dolor'?: true

/*
false porque los string en minuscula 'dolor'
y en MAYUSCULA 'DOLOR' son diferentes

.endsWith() distingue entre MAYUSCULAS y minusculas */
buscar = 'DOLOR';
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'DOLOR'?: false

/* true porque las dos ultimas palabras
del string 'Lorem ipsum dolor'
son 'ipsum dolor' */
buscar = 'ipsum dolor';
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'ipsum dolor'?: true

/* false porq el string 'Lorem ipsum dolor'
termina en 'dolor' y NO en 'lorem' */
buscar = 'lorem';
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'lorem'?: false

/* false porq el string 'Lorem ipsum dolor'
termina en 'dolor' y NO en 'ipsum' */
buscar = 'ipsum';
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'ipsum'?: false

/* true porque 'Lorem ipsum dolor'
es lo mismo que 'Lorem ipsum dolor' */
buscar = string;
console.log(buscar);            // 'Lorem ipsum dolor'
console.log(string);            // 'Lorem ipsum dolor'
console.log(buscar === string); // true
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'Lorem ipsum dolor'?: true

console.log(`el # de caracteres de '${string}' es ${string.length}`);
// el # de caracteres de 'Lorem ipsum dolor' es 17

/* endPosition limitar el numero de caracteres q cuenta .endsWith()

true porque del string 'Lorem ipsum dolor'
los primeros 5 caracteres son 'Lorem' */
buscar = 'Lorem';
console.log(`Contando los primeros 5 caracteres, ¿termina en '${buscar}'?:`, string.endsWith(buscar, 5));
// Contando los primeros 5 caracteres, ¿termina en 'Lorem'?: true

/* false porque NO se tiene en cuenta todo el string por completo 'Lorem ipsum dolor',
solamente los primeros 5 caracteres que son 'Lorem'
y 'Lorem' NO termina en 'r' */
buscar = 'r';
console.log(`Contando los primeros 5 caracteres, ¿termina en '${buscar}'?:`, string.endsWith(buscar, 5));
// Contando los primeros 5 caracteres, ¿termina en 'r'?: false

// true porque 'Lorem ipsum dolor' SI termina en 'r'
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'r'?: true

// false porque 'Lorem ipsum dolor' NO termina en 'o'
buscar = 'o';
console.log(`¿termina en '${buscar}'?:`, string.endsWith(buscar));
// ¿termina en 'o'?: false

//
/* El numero 5 que esta dentro de los parentesis de .endsWith()
significa que solamente se va a tener encuenta
los primeros 5 caracteres que son 'Lorem'

true porque 'Lorem' SI termina en 'm' */
buscar = 'm';
console.log(`Contando los primeros 5 caracteres, ¿termina en '${buscar}'?:`, string.endsWith(buscar, 5));
// Contando los primeros 5 caracteres, ¿termina en 'm'?: true
