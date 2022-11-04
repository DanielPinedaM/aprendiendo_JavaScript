/* eslint-disable prefer-const */

/* JSDoc sirve para:
- Agregar en los comentarios tipos de datos en Vanilla JS sin TypeScript.
- Documentar el código de JS, esto se llama docstring.

Tutorial:
https://youtu.be/HOJd1X2-45s

https://youtu.be/r0H-acWQS6c

Wikipedia:
https://es.wikipedia.org/wiki/JSDoc

Documentación Oficial:
https://jsdoc.app/

https://eslint.org/docs/latest/rules/valid-jsdoc

GitHub:
https://github.com/jsdoc

npm:
https://www.npmjs.com/package/jsdoc

https://www.npmjs.com/package/eslint-plugin-jsdoc */

// en los comentarios se escriben los tipos de datos:
/**
 * @param {number} num1
 * @param {number} num2
 */
function sumar(num1, num2) {
  let resultado = num1 + num2;
  console.log(`${num1} + ${num2} = ${resultado}`);
}

sumar(1, 1);
/* 1 + 1 = 2 */
