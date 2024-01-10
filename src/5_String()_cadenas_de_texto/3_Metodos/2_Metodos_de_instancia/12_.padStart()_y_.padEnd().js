// @ts-nocheck

/* --------------------------------------------------- */

/*
Documentación Oficial...
- .padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

- .padEnd()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd

Puedo agregar nuevo caracteres (letras, numeros, etc.) a un string existente,
los nuevos caracteres pueden ir al...
- .padStart() Principio
- .padEnd() Final

.padStart() y .padEnd() devuelven un nuevo string con los nuevos caracteres agregados,
los nuevos caracteres se pueden repetir
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#return_value

Sintaxis:
.padStart(targetLength, padString)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#syntax

.padEnd(targetLength, padString)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#syntax

Donde...
- .padStart() y .padEnd()
Nombre del método

- targetLength
es el numero de nuevos caracteres q quiero agregar al string

- padString
Es el nuevo caracter que quiero agregar al string existente,
su valor por defecto es un espacio en blanco ' ',
si padString es muy largo entonces
se recortan (eliminan) algunos de los nuevos caracteres añadidos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#parameters

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd#parameters */

/* ------------------------------------------- */

// guardar en una variable el string 'hola mundo'
const string = 'hola mundo';

// guardar en una variable el numero de caracteres de 'hola mundo'

const numeroCaracteres = string.length;
console.log(numeroCaracteres); // 10

// variable loremIpsum con texto de relleno
const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, vitae? Inventore veniam minus impedit, nisi id harum delectus voluptatum accusantium necessitatibus commodi doloribus dicta alias quia rerum! Ipsa, delectus nam. FINAL';

/* NO escribir el nuevo string que quiero agregar padString
es lo mismo que escribir un espacio en blanco ' ',
ambas formas agregaran un espacio en blanco ' ' al string 'hola mundo'

Fijate que el numero que estoy usando es
numeroCaracteres + 5 =
=  10 + 5
= 15
esto quiere decir que
10 es el numero de caracteres (letras y espacio) .length de 'hola mundo'
y el 5 significa que se van agregar 5 nuevos caracteres a 'hola mundo',
que en este caso son 5 espacios
y como estoy usando el metodo .padStart()
los 5 espacios se agregan AL PRINCIPIO de 'hola mundo' */

let padStart = string.padStart(numeroCaracteres + 5, ' '); // espacio en blanco ' '
console.log(padStart);
// '     hola mundo'

// obtengo el mismo resultado
padStart = string.padStart(numeroCaracteres + 5); // NO escribi padString
console.log(padStart);
// '     hola mundo'

/* cuando el numero targetLength que esta dentro del par de parentesis ()
es MENOR O IGUAL al numero de caracteres .length
del string entonces NO se agrega ningun nuevo caracter
por eso es q antes a la variable numeroCaracteres le habia sumado un numero

'hola mundo' tiene 10 caracteres,
si escribo el 10
ó un numero menor a 10
entonces NO se agregan nuevos caracteres */
padStart = string.padStart(numeroCaracteres, '-------');
console.log(padStart); // Al string 'hola mundo' NO se le agregan los caracteres '-------'
// 'hola mundo'

/* En cambio,
cuando el numero targetLength que esta dentro del par de parentesis ()
es MAYOR al numero de caracteres del string .length entonces
SI se agregan los nuevos caracteres

como 11 es MAYOR a 10 q es el # de caracteres de 'hola mundo',
entonces SI se agrega el nuevo caracter q es el espacio en blanco ' ' */
padStart = string.padStart(11, ' ');
console.log(padStart);
// ' hola mundo'

/* Debido a q los nuevos caracteres a agregar loremIpsum son muchos,
entonces se recorta el nuevo string q esta en la variable padStart,
es decir, se eliminan (algunos, no todos) los nuevos caracteres agregados */

padStart = string.padStart(numeroCaracteres + 999, loremIpsum);
console.log(padStart);
// hola mundo Lorem ipsum dolor (...) FINAL hola mundo

/* .padEnd() agrega los nuevos caracteres AL FINAL del string

agregar 2 guiones -- AL FINAL del string 'hola mundo' */

const padEnd = string.padEnd(numeroCaracteres + 2, '-');
console.log(padEnd);
// 'hola mundo--'
