// @ts-nocheck

/* Documentacion Oficial - .includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

.includes() busca una cadena dentro de otra cadena
y devuelve un booleano boolean
que es true cuando SI encuentra la cadena ó false cuando NO.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#return_value

Ejemplo 1:
.includes() buscar una palabra, frase o letra
dentro de un texto

Dentro del par de parentesis de .includes()
se escribe lo q quiero buscar en el string

Su sintaxis es:
includes(searchString, position)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#syntax

Donde...
- searchString
es el CARACTER (numero, texto, etc.) que estoy buscando,
NO puede ser una expresion regular,
y es obligatorio escribirlo

- position
es el numero de POSICION (INDICE) en donde quiero buscar el caracter,
es un numero ENTERO positivo o negativo
y es OPCIONAL escribirlo */

const string = 'hola mundo1';

/* dentro del par de parentesis () de .includes
puedo escribir texto, numero o variable */
console.log('el metodo .includes() devuelve un tipo de dato: ', typeof string.includes('o'));
// el metodo .includes() devuelve un tipo de dato:  boolean

// true porque la letra 'o' SI existe en el string 'hola mundo1'
let buscar = 'o';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'o'?: true

// El método .includes() busca cualquier caracter (texto, numero, etc.) en un string
buscar = 'la';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'la'?: true

// false porque la letra 'w' NO existe en el string 'hola mundo1'
buscar = 'w';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'w'?: false

/* false porque los string en minuscula 'hola mundo1'
y en MAYUSCULA 'HOLA MUNDO1' son diferentes

.includes() distingue entre MAYUSCULAS y minusculas
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#case-sensitivity */
buscar = 'HOLA MUNDO1';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'HOLA MUNDO1'?: false

// El string 'hola mundo1' es lo mismo que 'hola mundo1'
buscar = 'hola mundo1';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'hola mundo1'?: true

/* el caracter buscado tiene que coincidir EXACTAMENTE

el string 'hola mundo ' CON un espacio al final es diferente de
'hola mundo' SIN espacio al final */
buscar = 'hola mundo ';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter 'hola mundo '?: false

/* Puedo buscar un tipo
numero number que es buscar = 1;
en el string 'hola mundo1' */
buscar = 1;
// buscar el # 1 en el string 'hola mundo1'
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter '1'?: true

// buscar caracter en blanco ''
buscar = '';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter ''?: true

// buscar un solo espacio en blanco ' '
buscar = ' ';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter ' '?: true

// buscar doble espacio en blanco '  '
buscar = '  ';
console.log(`¿existe el caracter '${buscar}'?:`, string.includes(buscar));
// ¿existe el caracter '  '?: false

/* puedo buscar un caracter
en una posicion (indice) en especifico

el numero cero 0 es la PRIMERA posicion (indice) del string,
que en el string 'hola mundo1' es la 'h' */
buscar = 'h';
console.log(`¿existe el caracter '${buscar}' en la PRIMERA posicion (indice)?:`, string.includes(buscar, 0));
// ¿existe el caracter 'h' en la PRIMERA posicion (indice)?: true

/* los numeros enteros POSITIVOS
cuentan de izquierda a derecha
empezando desde 0

1 es la SEGUNDA posicion (indice) */
buscar = 'o';
console.log(`¿existe el caracter '${buscar}' en la SEGUNDA posicion (indice)?:`, string.includes(buscar, 0));
// ¿existe el caracter 'o' en la SEGUNDA posicion (indice)?: true

/* los numeros enteros NEGATIVOS
cuentan al reves de derecha a izquierda
empezando desde -1

-1 es la ULTIMA posicion (indice) */

console.log(`¿existe el caracter '${buscar}' en la ULTIMA posicion (indice)?:`, string.includes(buscar, -1));
// ¿existe el caracter 'o' en la ULTIMA posicion (indice)?: true
