/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Stack Overflow - Diferencia Entre .toLowerCase() y .toLocaleLowerCase()

Documentacion Oficial...
- .toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

- .toLocaleLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase

Ambos .toLowerCase() y .toLocaleLowerCase()
sirven para convertir strings a minúscula */

// string en MAYUSCULA
const string = 'HOLA MUNDO';
console.log(string);
// 'HOLA MUNDO'

// .toLowerCase() convertir a minuscula
console.log(string.toLowerCase());
// 'hola mundo'

/* .toLocaleLowerCase('es-ES') convertir a minuscula
texto escrito en español España */
console.log(string.toLocaleLowerCase('es-ES'));
// 'hola mundo'

/* .toLocaleLowerCase() tambien funciona
cuando NO copio nada dentro del par de parentesis */
console.log(string.toLocaleLowerCase());
// 'hola mundo'

/* Con ambos .toLowerCase() y .toLocaleLowerCase()
en ingles y español obtengo el mismo resultado */
console.log(string.toLocaleLowerCase('es-ES') === string.toLocaleLowerCase('en-US')); // true
console.log(string.toLowerCase() === string.toLocaleLowerCase('es-ES'));              // true

/* Hay casos demasiado extraños como por ejemplo en idioma Turco
que no tiene formato Unicode en los que si se pueden notar la diferencia
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase#examples */
console.log('\u0130');                                    // 'İ'
console.log('\u0130'.toLocaleLowerCase('tr') === 'i');    // true
console.log('\u0130'.toLocaleLowerCase('en-US') === 'i'); // false

/* La diferencia es que
dentro del par de parentesis de .toLocaleLowerCase()
puedo copiar entre comillas un solo idioma BCP 47
ó un array con una lista de idiomas idioma BCP 47
en cambio con .toLowerCase() NO
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase#description

'es-ES' es español de España

'en-US' es ingles de Estados Unidos

Lista de Idiomas BCP 47 en JavaScript:
https://www.techonthenet.com/js/language_tags.php */
const idiomas = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
console.log('\u0130'.toLocaleLowerCase(idiomas) === 'i'); // true

/* ERROR: no existe el 'IDIOMA INEXISTENTE'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase#exceptions */
console.log(''.toLocaleLowerCase('IDIOMA INEXISTENTE'));
// Uncaught RangeError: Incorrect locale information provided
