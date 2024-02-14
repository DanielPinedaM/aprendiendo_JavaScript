/* eslint-disable prefer-regex-literals */
/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Expresiones Regulares (Regular Expressions, Regex)

IMPORTANTE:
NO tienes q aprender esto,
si necesitas una expresion regular googleala

Tutorial - Jon Mircha:
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp

Documentación Oficial...
- Expresiones Regulares
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

- RegExp()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

- .test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

- Grupos y rangos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences

JavaScript Info - Expresiones Regulares:
https://javascript.info/regular-expressions

Wikipedia - Expresiones Regulares:
https://en.wikipedia.org/wiki/Regular_expression

Recordatorio:
Ver:
- " 8.5.3.8) .search() Primer Número de Posición (Índice) que Coincide con la Expresión Regular o Carácter "

- " 8.5.3.9) Resumen: Diferencia Entre .match() y .matchAll() - Caracteres que Coinciden con la Expresión Regular "

Secuencia de caracteres que forman un patron de busqueda

Buscan que un string tenga ciertos caracteres

Se usa principalmente en string */

/* --------------------------------------------------- */

/* Ejemplo 1 - Validar Correo:
https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript */

const esCorreo = (string) => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(string);
};

esCorreo('correo@gmail.com'); // true

esCorreo('hola mundo');       // false
esCorreo(123);                // false
esCorreo(null);               // false
esCorreo(undefined);          // false
esCorreo(NaN);                // false

/* --------------------------------------------------- */

/* Ejemplo 2 - Formas de Evaluar Expresion Regular
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp

https://eslint.org/docs/latest/rules/prefer-regex-literals */

const string = 'LOREM ipsum, doloremque';
//                             ↑

/*
Sintaxis:

buscar exactamente los caracteres 'lorem',
distingue entre mayusculas y minusculas

"g" busqueda global buscar todas las apariciones del caracter buscado */
const expReg = new RegExp('lorem', 'g'); // Funcion Constructora      -> RegExp(patronAbuscar, banderas)
const expReg2 = /lorem/g;                // Expresión Regular Literal -> /patronAbuscar/banderas

/* .test() evaluar si se cumple o no la expresion regular
devuelve un booleano Boolean() */
console.log(
  expReg.test(string),
);
// true

/*
exec() devuelve:
- null cuando NO se encuentra la expresion regular
- un array [] SI se encuentra la expresion regular

* 'lorem' caracter buscado

* index: 16 numero de indice donde empieza el caracter buscado

* input: 'LOREM ipsum, do lorem que' string a evaluar

* groups Un null objeto prototipo de grupos de captura con nombre, cuyas claves son los nombres y los valores son los grupos de captura, o undefined si no se definieron grupos de captura con nombre.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences */
console.log(
  expReg2.exec(string),
);
// [ 'lorem', index: 15, input: 'LOREM ipsum, doloremque', groups: undefined ]

/* --------------------------------------------------- */

/* Ejemplo 3 - Bandera i ignorar mayusculas y minusculas
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp */

const string2 = 'LOREMipsum';
//               ↑

// buscar caracter lorem
const expReg3 = /lorem/i;
console.log(
  expReg3.test(string2),
);
// true

/* --------------------------------------------------- */

/* Ejemplo 4 - Bandera \d buscar un digito del 0 al 9
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp */

const string3 = 'lorem - lorem 45';
//                             ↑

const expReg4 = /\d/;

console.log(
  expReg4.test(string3),
);
// true

console.log(
  expReg4.exec(string3),
);
// [ '4', index: 14, input: 'lorem - lorem 45', groups: undefined ]

/* --------------------------------------------------- */

/* Ejemplo 5 - Bandera [0-9] Buscar rango numerico, desde este numero hasta este otro numero
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp */

const string4 = 'lorem 0 lorem';
//                     ↑

const expReg5 = /[0-9]/;

console.log(
  expReg4.test(string4),
);
// true

console.log(
  expReg5.exec(string4),
);
// [ '0', index: 6, input: 'lorem 0 lorem', groups: undefined ]

/* --------------------------------------------------- */

/* Ejemplo 6 - Bandera [a-z] Buscar rango de letras en el orden del abacedario, buscar desde esta letra hasta este otra letra
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp */

const string5 = 'lorem lorem';
//                ↑

const expReg6 = /[m-z]/;

console.log(
  expReg4.test(string5),
);
// true

console.log(
  expReg6.exec(string5),
);
// [ 'o', index: 1, input: 'lorem 0 lorem', groups: undefined ]

/* --------------------------------------------------- */

/* Ejemplo 7 - Bandera {inicio,fin} Rango de repeticiones de un caracter - ¿El caracter se repite N veces?
https://youtu.be/aPkBloR9MEI?si=3QOCE_Hw_wWzAoPp */

const string6 = 'lorem lorem';

// true porq 'lorem' se remite AL MENOS una vez
let expReg7 = /lorem{1}/ig;
console.log(
  expReg7.test(string6),
);
// true

// {3,4} false porque 'lorem' NO se repite ENTRE 3 y 4 veces
expReg7 = /lorem{3,4}/ig;

console.log(
  expReg7.test(string6),
);
// false
