/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial...
- .toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

- .toLocaleUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase

Ambos .toUpperCase() y .toLocaleUpperCase()
convierten strings a MAYUSCULA */

// string en minuscula
const string = 'hola mundo';
console.log(string);
// 'hola mundo'

// .toUpperCase() convertir a MAYUSCULA
console.log(string.toUpperCase());
// 'HOLA MUNDO'

/* .toLocaleUpperCase('es-ES') convertir a MAYUSCULA
texto escrito en español España */
console.log(string.toLocaleUpperCase('es-ES'));
// 'HOLA MUNDO'

/* .toLocaleUpperCase() tambien funciona
cuando NO copio nada dentro del par de parentesis */
console.log(string.toLocaleUpperCase());
// 'HOLA MUNDO'

/* Con ambos .toUpperCase() y .toLocaleUpperCase()
en ingles y español obtengo el mismo resultado */
console.log(string.toLocaleUpperCase('es-ES') === string.toLocaleUpperCase('en-US')); // true
console.log(string.toUpperCase() === string.toLocaleUpperCase('es-ES'));              // true

/* Hay casos demasiado extraños como por ejemplo en idioma Turco
que no tiene formato Unicode en los que si se pueden notar la diferencia */
console.log('i\u0307');                                                                  // 'i̇'

console.log('i\u0307'.toLocaleUpperCase('tr') === 'İ');                                  // false
console.log('i\u0307'.toLocaleUpperCase('en-US') === 'İ');                               // true
console.log('i\u0307'.toLocaleUpperCase('tr') === 'i\u0307'.toLocaleLowerCase('en-US')); // false

/* La diferencia es que
dentro del par de parentesis de .toLocaleUpperCase()
puedo copiar entre comillas un solo idioma BCP 47
ó un array con una lista de idiomas idioma BCP 47
en cambio con .toUpperCase() NO
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase#examples

'es-ES' es español de España

'en-US' es ingles de Estados Unidos

Lista de Idiomas BCP 47 en JavaScript:
https://www.techonthenet.com/js/language_tags.php */
const idiomas = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
console.log('i\u0307'.toLocaleUpperCase(idiomas) ===  'I');  // 'true'

/* ERROR:
No existe el 'IDIOMA INEXISTENTE'
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase#exceptions */

console.log(string.toLocaleUpperCase('IDIOMA INEXISTENTE'));
// Uncaught RangeError: Incorrect locale information provided
