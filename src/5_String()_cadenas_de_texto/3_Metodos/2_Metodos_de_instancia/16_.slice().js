/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial - .slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

.slice() Extraer una Parte (Sub-string)
de un String de Acuerdo a sus Posiciones (Índices)

.slice() devuelve una parte (sub-string, sub-cadena)
q esta dentro de un string
SIN modificar el string original
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#description

Ejemplo 1:
El string (texto) completo es 'hola mundo'
y un ejemplo de sub-string (sub-cadena)
es la palabra 'mundo'

Su sintaxis es:
.slice(indexStart, indexEnd)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#syntax

Donde...
- .slice()
Es el nombre del metodo

- indexStart
Numero de posicion (indice) del
PRIMER carácter que se extrae en el sub-string,
el sub-string empieza A PARTIR de esta posicion,
es obligatorio

- indexEnd
ULTIMO numero de posicion (indice)
donde TERMINA el sub-string,
el sub-string termina HASTA esta posicion,
es opcional

Ejemplo 2: */

const string = 'hola mundo';

/* cuando el numero escrito dentro del par de parentesis de .slice()
es MAYOR O IGUAL QUE el numero total de CARACTERES (letras) .length
entonces .slice() devuelve un caracter en blanco '' */
const numeroCaracteres = string.length;
console.log(`# total de CARACTERES (letras) contando desde 1: ${numeroCaracteres}`);
// # total de CARACTERES (letras) contando desde 1: 10

/* .slice() devuelve un caracter en blanco ''
porque 'hola mundo' tiene 10 caracteres, NO 999 */
console.log(string.slice(999));              // ''

/* lo mismo sucede cuando dentro de .slice()
escribo el numero de caracteres */
console.log(string.slice(numeroCaracteres)); // ''
console.log(string.slice(10));               // ''

/* .slice() devuelve el string COMPLETO cuando...
1) El numero dentro del par de parentesis
   es MENOR O IGUAL al numero de caracteres .length pero NEGATIVO.
   Ejemplo: 'hola mundo'.length imprime 10 (positivo),
   entonces -10 (negativo) ó un numero menor a -10 (negativo)
   imprime todo el string 'hola mundo'

2) .slice(0) Escribo el 0 dentro del par de parentesis

3) .slice() NO escribo nada dentro del par de parentesis

4) Dentro del par de parentesis de .slice()
hay algo que NO se puede convertir a tipo Number() */
console.log(string.slice(-10));                                               // 'hola mundo' -> numero de caracteres .length NEGATIVO
console.log(string.slice(-numeroCaracteres));                                 // 'hola mundo'
console.log(string.slice(-999));                                              // 'hola mundo' -> numero MENOR a .length NEGATIVO
console.log(string.slice(0));                                                 // 'hola mundo' -> .slice(0)
console.log(string.slice());                                                  // 'hola mundo' -> .slice()
console.log(string.slice('este string NO se puede convertir a tipo number')); // 'hola mundo'

/* .slice() devuelve el ULTIMO caracter cuando...
1) Al numero de caracteres .length le resto -1
string.slice(numeroCaracteres - 1)

2) .slice(-1) escribo -1 dentro del par de parentesis

La ultima letra de 'hola mundo' es la 'o' */
console.log(string.slice(numeroCaracteres - 1)); // 'o' -> string.slice(string.length - 1)
console.log(string.slice(-1));                   // 'o'

/* .slice(-2) imprime los DOS ULTIMOS caracteres (letras)

las dos ultimas letras de 'hola mundo' son 'do'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice#using_slice_with_negative_indexes */
console.log(string.slice(-2));
// 'do'

// .slice(-5) imprimir los ultimos 5 caracteres (letras)
console.log(string.slice(-5));
// 'mundo'

/* Los numeros DECIMALES
se aproximan al MENOR decimal mas cercano */

console.log(string.slice(2.9)); // 2.9 se aproxima a 2
// 'la mundo'

console.log(string.slice(5.1)); // 5.1 se aproxima a 5
// 'mundo'

/* Extraer de un string
los caracteres que estan A PARTIR DE indexStart,
SI se incluye el caracter q esta en indexStart

De 'hola mundo' imprimir los caracteres
que estan A PARTIR de la posicion (indice) 2,
incluyendo la posicion 2 */
console.log(string.slice(2));
// 'la mundo'

// Imprimir caracteres A PARTIR de la posicion (indice) 5
console.log(string.slice(5));
// 'mundo'

/* Extraer de un string una parte
que va DESDE esta posicion (indice) indexStart
HASTA esta otra posicion indexEnd,
NO se incluye la ULTIMA posicion indexEnd,
el sub-string va hasta UNA POSICION ANTES del indexEnd

.slice(1, 3) De 'hola mundo' imprimir las posiciones 1 hasta 2,
NO se imprime la posicion 3 */
console.log(string.slice(1, 3));
// 'ol'

/* .slice(-5, -2) De 'hola mundo' imprimir las posiciones -5 hasta -2,
NO se imprime la posicion -2 */
console.log(string.slice(-5, -2));
// 'mun'

/* .slice(0, -2) imprimir desde el PRIMER caracter que es el 0 hasta el PEnultimo -3,
NO se imprime el -2 */
console.log(string.slice(0, -2));
// 'hola mun'

/* Lo q esta escrito dentro de par de parentesis de .slice()
se convierte a tipo Number() si es posible

'2' string se convierte a 2 tipo number */
console.log(string.slice('2'));
// 'la mundo'

/* .slice() devuelve un caracter en blanco ''
cuando indexEnd <= indexStart

0 es indexEnd y 1 es indexStart
0 es MENOR QUE 1 */
console.log(string.slice(1, 0));
// ''

/* ambos numeros son IGUALES (999, 999)

indexEnd ES IGUAL A indexStart */
console.log(string.slice(999, 999));
// ''

/* Ejemplo 3:
caracter en blanco '' */
console.log(''.slice());              // ''
console.log(''.slice(0));             // ''
console.log(''.slice(-1));            // ''
console.log(''.slice(-999));          // ''
console.log(''.slice(999));           // ''
console.log(''.slice(''.length));     // ''
console.log(''.slice(''.length - 1)); // ''
