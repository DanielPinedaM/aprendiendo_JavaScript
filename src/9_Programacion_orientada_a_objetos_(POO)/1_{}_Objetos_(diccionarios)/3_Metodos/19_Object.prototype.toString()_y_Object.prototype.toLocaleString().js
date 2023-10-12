// @ts-nocheck
/* eslint-disable max-len */

/* --------------------------------------------------- */

/*
Object.prototype.toString() y Object.prototype.toLocaleString()
ya los explique antes,
estos métodos son muy similares
porque todos convierten a string, ver:

ResumenJS.docx
- " 8.5.3.22) Diferencia Entre String() y .toString() - Convertir a Texto (String) "

- " 9.4.3.6) Diferencias y Similitudes Entre .join() Intl.ListFormat() .toString() .toLocaleString() - Convertir de Array a String (Texto) "

En esta seccion (resumen),
no copie todos los ejemplos,
para mas informacion, ver:

Documentacion Oficial...
- Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

- Object.prototype.toLocaleString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString

Idioma locales BCP 47 admitidos por .toLocaleString()
https://www.techonthenet.com/js/language_tags.php
*/

/* --------------------------------------------------------------- */

/* Ejemplo:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString#date_tolocalestring_override

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

Convertir de objeto Date fecha a string */

/* objetoDate imprime en consola un resultado diferente
dependiendo donde se ejecute el codigo de JS: */
const objetoDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(objetoDate);
// Wed Dec 19 2012 22:00:00 GMT-0500 (hora estándar de Colombia) -> Navegador de Chrome
// 2012-12-20T03:00:00.000Z                                      -> NodeJS

// objetoDate es de tipo typeof objeto
console.log(typeof objetoDate);
// 'object'

/* Para convertir a String() SIEMPRE,
sin importar el tipo de dato
es buena practica usar String() porque:
1) La diferencia en .toString() y .toLocaleString()
es en caracteres muy especificos,
cuando se usa para convetir a texto en español e ingles son lo mismo

2) null.toString() y undefined.toString()
dan error, en cambio
String(null) y String(undefined) NO */

console.log(String(objetoDate));                 // 'Wed Dec 19 2012 22:00:00 GMT-0500 (hora estándar de Colombia)'

console.log(objetoDate.toString());              // 'Wed Dec 19 2012 22:00:00 GMT-0500 (hora estándar de Colombia)'

console.log(objetoDate.toLocaleString());        // '19/12/2012, 10:00:00 p.m.'
console.log(objetoDate.toLocaleString('es-ES')); // '19/12/2012, 22:00:00'
console.log(objetoDate.toLocaleString('en-US')); // '12/19/2012, 10:00:00 PM'
console.log(objetoDate.toLocaleString('de'));    // '19.12.2012, 22:00:00'
