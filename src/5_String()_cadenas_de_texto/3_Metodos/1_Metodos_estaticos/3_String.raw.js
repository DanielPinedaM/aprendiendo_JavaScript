/* eslint-disable quotes */
// @ts-nocheck
/* eslint-disable no-useless-escape */

/* Documentacion Oficial - String.raw() Guardar String de una Ruta (Texto sin Procesar)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw */

/* ---------------------------------------- */
/* GUARDAR RUTA DE ARCHIVO O CARPETA EN UNA VARIABLE */

// ERROR - no se esta imprimiendo los slash invertidos \
let ruta = 'C:\Windows\System32';
console.log(ruta);
// C:WindowsSystem32

// ahora si se esta guardando la ruta correctamente con los slash invertidos \
ruta = String.raw`C:\Windows\System32`; // `` comillas invertidas (template string)
console.log(ruta);
// C:\Windows\System32

console.log(typeof ruta);
// string

/* ---------------------------------------- */
/* TEXTO SIN PROCESAR */

/* Cuando imprimo esto sin usar String.raw`` entonces se muestra su equivalente:
\u2605  caracter estrella en unicode
\n      salto de linea (renglon) */
console.log(`\u2605\n\u2605`);
/*
★
★
*/

// String.raw`` imprime el texto tal cual como esta escrito
console.log(String.raw`\u2605\n\u2605`);
// \u2605\n\u2605
