// @ts-nocheck

/*
.startsWith()
¿El String ... EMPIEZA por los Caracteres ...?,
¿ El String ... TERMINA en el Carácter ... .length - 1?,
¿En el String… A PARTIR de la Posición (Índice)… Están los Caracteres…?

Tutorial
https://youtu.be/LUeCg6btmZU

Documentacion Oficial - .startsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

.startsWith() devuelve un booleano true ó false
para saber si un string empieza o no
por los caracteres especificados
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#return_value

.startsWith() traduce
¿el string ... empieza por los caracteres ...?

.startsWith() distingue entre MAYUSCULAS y minusculas
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#description

Sintaxis:
.startsWith(searchString, position)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#syntax

Donde...
- .startsWith()
Es el nombre del metodo

- searchString
Es un string,
son los caracteres que se buscan AL PRINCIPIO del string,
NO puede ser una expresion regular
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#exceptions

- position
Es un numero ENTERO MAYOR QUE 0 (NO negativo)
Y MENOR QUE la mayor (ultima) posicion contando desde 0 .length - 1,
es la POSICION (INDICE) del string
A PARTIR de la cual
se empieza a buscar
los caracteres searchString en el string,
su valor por defecto es 0,
es opcional

Ejemplo:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#examples */

const string = 'hola mundo';

/* .length - 1 mayor (ultima) posicion de 'hola mundo'
'hola mundo' tiene 9 posiciones contando desde 0 */
const mayorPosicion = string.length - 1;
console.log(mayorPosicion);
// 9

/* Devuelve true porque
el string 'hola mundo'
empieza por la palabra (caracteres) 'hola'

No importa si copio 0 ó no,
el resultado es el mismo
porque por defecto el caracter
se empieza a buscar desde la posicion (indice) 0
que es el PRIMER caracter del string */
console.log(string.startsWith('hola', 0)); // true
console.log(string.startsWith('hola'));    // true

/* Devuelve true porque el string 'hola mundo'
empieza por la letra (caracter) 'h' */
console.log(string.startsWith('h'));
// true

/* Devuelve false porque
'hola mundo' empieza por 'h' minuscula,
NO MAYUSCULA */
console.log(string.startsWith('H'));
// false

/* Devuelve false porque el string 'hola mundo'
NO empieza por 'CARACTER INEXISTENTE' */
console.log(string.startsWith('CARACTER INEXISTENTE'));
// false

/* Buscar caracteres A PARTIR de una posicion (indice) position

Del string 'hola mundo'
buscar los caracteres 'mundo'
que estan A PARTIR de la posicion 5 */
console.log(string.startsWith('mundo', 5));
// true

/* Devuelve false porque
del string 'hola mundo'
los caracteres que estan
A PARTIR de la posicion (indice) 3
son 'a mundo', NO 'hola' */
console.log(string.startsWith('hola', 3));
// false

// esto comprueba lo q escribi en el parrafo anterior:
console.log(string.startsWith('a mundo', 3));
// true

/* Si dentro del metodo .startsWith()
escribo el numero de la ultima (mayor) posicion
que se obtiene con .length - 1
entonces puedo saber si un string TERMINA o no en un caracter,
es decir:
¿el string ... TERMINA en el caracter ...? .length - 1

true porque del string 'hola mundo'
la ultima letra (caracter) es la 'o',
esto es como preguntar
¿'hola mundo' TERMINA en 'o'? */
console.log(string.startsWith('o', mayorPosicion));
// true

/* Se devuelve false
cuando NO escribo nada
dentro del par de parentesis de .startsWith() */
console.log(string.startsWith());
// false

// caracter en blanco ''

console.log(''.startsWith());      // false
console.log(''.startsWith(''));    // true
console.log(''.startsWith('', 0)); // true
console.log(''.startsWith(' '));   // false
