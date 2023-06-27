// @ts-nocheck

/* --------------------------------------------------- */

/* Documentacion Oficial - .includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

Recordatorio:
.includes() tambien sirve para array, ver:
...\aprendiendo_JS\src\6_Arreglos_(arrays,listas)\3_Metodos\2_Metodos_de_instancia\11_.includes().js

.includes() Buscar CARACTERES en Cualquier Parte de un String

.includes() busca una CADENA dentro de otra cadena
y devuelve un booleano boolean
que es true cuando SI encuentra la cadena ó false cuando NO.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#return_value

Ejemplo 1:
.includes() buscar una palabra, frase o letra
dentro de un texto

Sintaxis:
.includes(searchString, position)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#syntax

Donde...
- .includes()
Nombre del método

- searchString
* Es obligatorio escribirlo

* Es el CARACTER (numero, texto, etc.) que estoy buscando

* Puede ser un numero o variable

* NO puede ser una expresion regular

- position
* Es opcional escribirlo

* Numero de posicion (indice)
A PARTIR del cual
se empieza a buscar el elemento

* Esta posicion SI se incluye en la busqueda */

/* --------------------------------------------------------- */

// Ejemplo 2

const string = 'hola mundo';
console.log(string);
// 'hola mundo'

// typeof
console.log('el metodo .includes() devuelve un tipo de dato: ', typeof string.includes('o'));
// el metodo .includes() devuelve un tipo de dato:  boolean

/* Las siguientes opciones dan el mismo resultado
que es buscar el elemento en TODO el string:

true porque la letra 'o' SI existe en el string 'hola mundo' */
let buscar = 'o';
console.log(string.includes(buscar));      // true -> 1) NO escribir position
console.log(string.includes(buscar, 0));   // true -> 2) (position = 0)

console.log(string.length);                // 10   -> longitud del string
console.log(string.includes(buscar, -10)); // true -> 3) (position <= -string.length)

/* position >= string.length

SI position es MAYOR O IGUAL Q el numero de caracteres .length del string,
entonces .includes() devuelve false

La longitud .length del string 'hola mundo' es 10,
entonces si position es 10 o un numero mayor q 10,
includes() devuelve false */
console.log(string.includes(buscar, 10));  // false
console.log(string.includes(buscar, 999)); // false

// El método .includes() busca cualquier caracter (texto, numero, etc.) en un string
buscar = 'la';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'la'?: true

// false porque la letra 'w' NO existe en el string 'hola mundo'
buscar = 'w';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'w'?: false

/* false porque los string en minuscula 'hola mundo'
y en MAYUSCULA 'HOLA MUNDO' son diferentes

.includes() distingue entre MAYUSCULAS y minusculas
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#case-sensitivity */
buscar = 'HOLA MUNDO';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'HOLA MUNDO'?: false

// true porque el string 'hola mundo' es lo mismo que 'hola mundo'
buscar = 'hola mundo';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'hola mundo'?: true

/* El caracter buscado tiene que coincidir EXACTAMENTE

El string 'hola mundo ' CON un espacio al final es diferente de
'hola mundo' SIN espacio al final */
buscar = 'hola mundo ';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'hola mundo '?: false

/* Puedo buscar un numero que esta dentro de un string,
.includes() devuelve true porque
en el string 'hola mundo1'
esta dentro el numero 1 */
console.log('hola mundo1'.includes(1));   // true -> JS convierte el tipo de dato (Tipado Dinámico / Coerción)
console.log('hola mundo1'.includes('1')); // true

// buscar caracter en blanco ''
buscar = '';
console.log(`¿existe el caracter '${buscar}' ?:`, string.includes(buscar));
// ¿existe el caracter '' ?: true

// buscar un solo espacio en blanco ' '
buscar = ' ';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter ' ' ?: true

/* Los numeros positivos cuentan de izquierda a derecha,
desde la PRIMERA 0 posicion hasta la ULTIMA posicion
que la puedo obtener con la propiedad string.length -1

Puedo elegir A PARTIR de q posicion (indice)
se empieza a buscar el caracter

Buscar caracter 'n' en el string 'hola mundo'
en esta parte 'ndo' que son las posiciones 7 en adelante (7, 8, 9)

Devuelve true porque la 'n' SI esta en la parte del string 'ndo'  */
buscar = 'n';
console.log(string.includes(buscar, 7));
// true

/* false porq la 'n' NO esta en 'do'
q son las posiciones 8 hacia adelante (8, 9) */
console.log(string.includes(buscar, 8));
// false
