/* eslint-disable no-useless-escape */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Expresiones Regulares (Regular Expressions, Regex)

Tutorial - Jon Mircha:
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp

Documentación Oficial...
- Expresiones Regulares
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

- RegExp()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

JavaScript Info - Expresiones Regulares:
https://javascript.info/regular-expressions

Wikipedia - Expresiones Regulares:
https://en.wikipedia.org/wiki/Regular_expression

Secuencia de caracteres que forman un patron de busqueda

Buscan que un string tenga ciertos caracteres

Se usa principalmente en string */

/* --------------------------------------------------- */

/* Ejemplo 1 - Validar Correo:
https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript */

const esCorreo = (string) => {
  const regex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(string);
};

esCorreo('correo@gmail.com'); // true

esCorreo('hola mundo');       // false
esCorreo(123);                // false
esCorreo(null);               // false
esCorreo(undefined);          // false
esCorreo(NaN);                // false

/* --------------------------------------------------- */

/* Ejemplo 2 -
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp */
