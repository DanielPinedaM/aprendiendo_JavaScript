// @ts-nocheck

/* --------------------------------------------------- */

/*
Documentacion Oficial - .repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

.repeat() devuelve un string que se repite cualquier numero de veces count

El string repetido se concatena (une)

Sintaxis:
.repeat(count)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#syntax

Donde..
- .repeat()
Nombre del método

- count
Es el numero de veces q se repite el string,
es un numero ENTERO MAYOR O IGUAL QUE 0 */

// el string 'hola mundo' NO tiene un espacio al final
let string = 'hola mundo';
console.log(string);
// 'hola mundo'

// Guardar en una variable el numero de caracteres .length de 'hola mundo'
const numeroCaracteres = string.length;
console.log(numeroCaracteres);
// 10

/* El par de parentesis vacio () y el (0) dan el mismo resultado:
un caracter en blanco '' */
console.log(string.repeat());
// ''

console.log(string.repeat(0));
// ''

/* El numero escrito dentro del par de parentesis () de .repeat()
tiene q ser MAYOR O IGUAL a 0
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#exceptions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Resulting_string_too_large */
console.log(string.repeat(-1));
// ERROR

// El numero NO puede ser demasiado grande
console.log(string.repeat(99999999));
// ERROR

/* Cuando el numero escrito dentro del par de parentesis
de .repeat es (1), se imprime exactamente el mismo string SIN repetirlo

Se esta imprimiendo 'hola mundo' SIN repetirse */
console.log(string.repeat(1));
// 'hola mundo'

/* el string se repite cuando es un numero ENTERO MAYOR a 1,
los nuevos string se agregan SIN espacio en blanco ' '

'hola mundohola mundo' se esta repitiendo 2 veces
y 'mundohola' esta junto SIN espacio en blanco ' ' */

console.log(string.repeat(2));
// 'hola mundohola mundo'

/* Los numeros DECIMALES mayor o igual q 0
se aproximan al MENOR decimal mas cercano

2.5 se aproxima a 2,
por lo tanto 'hola mundohola mundo'
se sigue repitiendo 2 veces */
console.log(string.repeat(2.5));
// 'hola mundohola mundo'

// repetir 3 veces el string 'hola mundo'

console.log(string.repeat(3));
// 'hola mundohola mundohola mundo'

/* 1) .padEnd() agrega un espacio en blanco ' ' al final del string
'hola mundo '

2) .repeat(3) hace q se repita tres veces el string
q ahora cada vez q se repita esta separado por un espacio en blanco
'hola mundo hola mundo hola mundo '

3) .trim() elimina los espacios en blanco AL PRINCIPIO Y FINAL del string
'hola mundo hola mundo hola mundo' */
string = string.padEnd(numeroCaracteres + 1, ' ').repeat(3).trim(); // forma correcta
console.log(string);
// 'hola mundo hola mundo hola mundo'

/* cuando NO escribo .trim()
al final del string hay un espacio en blanco ' ' */
string = 'hola mundo '.repeat(3); // forma INcorrecta
console.log(string);
// 'hola mundo hola mundo hola mundo '
