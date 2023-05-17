/* eslint-disable max-len */
/*
Documentacion Oficial...
- if

- if else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

*/

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Validar Cuando una Variable es null, undefined, NaN, "" Carácter Vacío, " " Espacio en Blanco, 0 , false
https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
*/

const variable = null;

if (
  (variable)
  && (String(variable).trim() !== '')
) {
  console.log(`
  La variable NO es NINGUNA de las siguientes opciones:
  - null
  - undefined
  - NaN
  - "" Carácter Vacío
  - " " Espacio en Blanco
  - 0
  - false
  `);
} else {
  console.log();
}

/* --------------------------------------------------------------- */

/* Ejemplo 2 */
