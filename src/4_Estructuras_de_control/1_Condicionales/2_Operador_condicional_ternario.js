/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Operador Condicional Ternario
(Abreviar if else)
(Conditional Ternary Operator)

Tutorial...
- Midudev:
https://youtu.be/YFES8Nm6uF4

https://youtu.be/8jooZieM48E

https://youtu.be/UYjZ0MDUkn0

- Jon Mircha:
https://www.youtube.com/watch?v=9h5hyh_wDjo&t=1234s

ESLint - no-nested-ternary - NO permitir operador condicional ternario anidado
https://eslint.org/docs/latest/rules/no-nested-ternary

Documentacion Oficial - Operador Condicional Ternario
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

Sintaxis:
(condition ? ifTrue : ifFalse)

Donde... */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Validar Cuando una Variable es null, undefined, NaN, "" Carácter Vacío, " " Espacio en Blanco, 0, false
https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in */

const variable = true;
console.log(variable);
// true

// ESTO ...
const operadorTernario = variable && String(variable).trim() !== '' ? 'valor Truthy (verdadero)' : 'valor Falsy (falso)';
console.log(operadorTernario);
// 'valor Truthy (verdadero)'

// ES LO MISMO Q ESTO:
if (variable && String(variable).trim() !== '') {
  console.log('valor Truthy (verdadero)');
} else {
  console.log('valor Falsy (falso)');
}
// 'valor Truthy (verdadero)'

/* --------------------------------------------------------------- */

/* Ejemplo 2 */
