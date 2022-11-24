/* eslint-disable max-len */
// @ts-nocheck

/* Documentacion Oficial - .search() en tipo de dato...
-  string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search

- Symbol()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search

ALTERNATIVAS A .search()
1) Si quiero saber cuando
un string existe o no entonces usar
.test() que devuelve un booleano:

Documentacion Oficial - .test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

2) y 3) son para saber los caracteres q coinciden con la expresion regular
2) Recordatorio:
Ver:
" 8.5.3.10) Resumen: Diferencia Entre .match() .matchAll() - Caracteres que Coinciden con la Expresión Regular "

3) Documentacion Oficial - .exec()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

.search() busca los caracteres de una expresion regular en un string

/g NO se puede usar en la expresion regular
escrita dentro del par de parentesis de .search()

.search() devuelve...
1) la PRIMERA posicion (indice) q coincide entre la expresion regular y el string,
esto es un numero entero mayor o igual a cero (0, 1, 2, 3...)

2) -1 cuando la expresion regular NO coincide con el string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search#return_value

Su sintaxis es:
.search(regexp)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search#syntax

Donde..
- .search()
Es el nombre del metodo

- regexp
Dentro del par de parentesis de .search()
se puede escribir una de las siguientes opciones:
1) string (texto / caracteres)

2) Expresion regular
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

3) Symbol()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search

cuando NO se escribe una expresion regular NI un Symbol(),
entonces se hace la conversion a expresion regular new RegExp(regexp)

Es buena practica escribir expresiones regulares y NO string */

const string = 'hola mundo';

/* BUSQUEDA USADNO STRING

en el string 'hola mundo' la letra (caracter) 'h'
esta en la posicion (indice) 0,
lo cual significa que es la primera letra */
console.log(string.search('h'));
// 0

/* El string 'hola mundo'
contiene el sub-string (palabra) 'mundo'
que tiene la letra 'm' que esta en la posicion (indice) 5 */

console.log(string.search('mundo'));
// 5

/* .search() devuelve la posición (índice)
de la PRIMERA aparición del carácter buscado

'hola mundo' tiene dos letras (caracteres) 'o'
q estan en las posiciones (indices) 1 y 9,
.search() devuelve 1 q es la posicion de la PRIMERA letra (caracter) 'o' */
console.log(string.search('o'));
// 1

/* 'hola mundo' tiene un espacio en blanco ' '
q esta en la posicion (indice) 4 */
console.log(string.search(' '));
// 4

/* Cuando escribo un caracter en blanco ''
o NO escribo nada dentro del par de parentesis de .search()
entonces devuelve 0 */
console.log(string.search('')); // caracter en blanco ''
// 0

console.log(string.search()); // NO escribi nada dentro del par de parentesis ()
// 0

/* .search() devuelve -1
porq el 'CARACTER INEXISTENTE'
NO existe en el string 'hola mundo' */
console.log(string.search('CARACTER INEXISTENTE'));
// -1

/* BUSQUEDA USANDO EXPRESIONES REGULARES
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search#using_search

imprime -1 porq 'hola mundo'
esta escrito en minuscula y NO en MAYUSCULA /[A-Z]/ */

console.log(string.search(/[A-Z]/));
// -1

// imprime -1 porq 'hola mundo' NO tiene punto /[.]/
console.log(string.search(/[.]/));
// -1

/* imprime 0 porq la 'h' esta en la primera posicion (indice)
y es la primera letra q coincide con la expresion regular /[a-z]/ */
console.log(string.search(/[a-z]/));
// 0
