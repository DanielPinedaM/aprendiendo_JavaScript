// @ts-nocheck

/* Documentacion Oficial...
- .replace() con strings:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

- .replace() con expresión regular:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace

- .replaceAll()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

.replace() reemplaza la PRIMERA aparicion del caracter buscado

.replaceAll() reemplaza TODOS los caracteres q coincidan con el caracter buscado

Su sintaxis es:
.replace(pattern, replacement)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#syntax

.replaceAll(pattern, replacement)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#syntax

Donde...
- .replace() y .replaceAll()
Es el nombre del metodo

- pattern
Es el caracter BUSCADO en el string que quiero reemplazar,
es un string o una expresion regular

- replacement
Es el NUEVO caracter
que reemplaza el caracter buscado,
es un string o una funcion,
tambien puede contener estos valores:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement */

const string = 'hola mundo';
console.log(string);
// 'hola mundo'

/* 'hola mundo' tiene dos caracteres (letras) 'o' pero el metodo .replace()
solamente va a reemplazar el PRIMER caracter (letra) 'o' por 'REPLACE' */
let replace = string.replace('o', 'REPLACE');
console.log(replace);
// 'hREPLACEla mundo'

/* en cambio .replaceAll()
reemplaza TODAS las letras (caracteres) 'o' por 'REPLACE_ALL',
NO solamente la primera
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll#using_replaceall */
let replaceAll = string.replaceAll('o', 'REPLACE_ALL');
console.log(replaceAll);
// 'hREPLACE_ALLla mundREPLACE_ALL'

// .replace() ELIMINAR solamente la PRIMERA letra (caracter) 'o' del string 'hola mundo'
replace = string.replace('o', '');
console.log(replace);
// 'hla mundo'

// .replaceAll() ELIMINAR TODAS las letras (caracteres) 'o' del string 'hola mundo'
replaceAll = string.replaceAll('o', '');
console.log(replaceAll);
// 'hla mund'

/* Cuando uso .replace() con un caracter en blanco '' pattern,
entonces el nuevo caracter se agrega AL PRINCIPIO del string

AL PRINCIPIO del string 'hola mundo'
se ha agregado un guion bajo '_' */
replace = string.replace('', '_');
console.log(replace);
// '_hola mundo'

/* en cambio .remplaceAll()
reemplaza el caracter '_' ANTES Y DESPUES
de cada una de las letras de 'hola mundo'
y se sigue conservando el espacio en blanco */
replaceAll = string.replaceAll('', '_');
console.log(replaceAll);
// '_h_o_l_a_ _m_u_n_d_o_'

/* Cuando NO se encuentra el caracter buscado pattern
entonces .remplace() y .remplaceAll()
devuelven exactamente el mismo string SIN reemplazar nada

El string no se modifica porque
'CARACTER INEXISTENTE' NO existe en el string 'hola mundo' */
replace = string.replace('CARACTER INEXISTENTE', '_');
console.log(replace);
// 'hola mundo'

replaceAll = string.replaceAll('CARACTER INEXISTENTE', '_');
console.log(replaceAll);
// 'hola mundo'

/* puedo usar funciones para reemplazar caracteres de un string

el valor de return de la funcion
es lo que se reemplaza en el string

en el string 'hola mundo'
se reemplaza 'FUNCION'
que es el valor de retorno return
de la funcion reemplazar()

Hice un ejemplo basico,
la documentacion oficial tiene el ejemplo completo:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#using_an_inline_function_that_modifies_the_matched_characters */
function reemplazar() {
  return 'FUNCION'; // esto return es lo q se reemplaza en el string 'hola mundo'
}

replace = string.replace('o', reemplazar); // .replace()
console.log(replace);
// 'hFUNCIONla mundo'

replaceAll = string.replaceAll('o', reemplazar); // .replaceAll()
console.log(replaceAll);
// hFUNCIONla mundFUNCION

/* --------------------------------------------------------------------------- */

/* Tambien puedo usar expresiones regulares
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#switching_words_in_a_string

Consulta la documentacion oficial para saber mas sobre expresiones regulares y .replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace */

const str = 'Maria Cruz';
console.log(str); // 'Maria Cruz'

const re = /(\w+)\s(\w+)/;
console.log(re); // /(\w+)\s(\w+)/

const newstr = str.replace(re, '$2, $1');
console.log(newstr); // Cruz, Maria
