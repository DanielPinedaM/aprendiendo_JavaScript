/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Objeto Math Operaciones Matemáticas

Tutorial - Jon Mircha:
https://youtu.be/BGXwssmxGuY

Documentacion Oficial...
- Objeto Math
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

- Lista de Todos los Objetos en JS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Imprimir Objeto Math
https://youtu.be/BGXwssmxGuY */

console.log(Math);
/*
Object [Math] {
  abs: ƒ abs(),
  acos: ƒ acos(),
  acosh: ƒ acosh(),
  asin: ƒ asin(),
  asinh: ƒ asinh(),
  atan: ƒ atan(),
  atanh: ƒ atanh(),
  atan2: ƒ atan2(),
  ceil: ƒ ceil(),
  cbrt: ƒ cbrt(),
  expm1: ƒ expm1(),
  clz32: ƒ clz32(),
  cos: ƒ cos(),
  cosh: ƒ cosh(),
  exp: ƒ exp(),
  floor: ƒ floor(),
  fround: ƒ fround(),
  hypot: ƒ hypot(),
  imul: ƒ imul(),
  log: ƒ log(),
  log1p: ƒ log1p(),
  log2: ƒ log2(),
  log10: ƒ log10(),
  max: ƒ max(),
  min: ƒ min(),
  pow: ƒ pow(),
  random: ƒ (),
  round: ƒ round(),
  sign: ƒ sign(),
  sin: ƒ sin(),
  sinh: ƒ sinh(),
  sqrt: ƒ sqrt(),
  tan: ƒ tan(),
  tanh: ƒ tanh(),
  trunc: ƒ trunc(),
  E: 2.718281828459045,
  LN10: 2.302585092994046,
  LN2: 0.6931471805599453,
  LOG10E: 0.4342944819032518,
  LOG2E: 1.4426950408889634,
  PI: 3.141592653589793,
  SQRT1_2: 0.7071067811865476,
  SQRT2: 1.4142135623730951,
  __proto__: {
    constructor: ƒ Object(),
    __defineGetter__: ƒ __defineGetter__(),
    __defineSetter__: ƒ __defineSetter__(),
    hasOwnProperty: ƒ hasOwnProperty(),
    __lookupGetter__: ƒ __lookupGetter__(),
    __lookupSetter__: ƒ __lookupSetter__(),
    isPrototypeOf: ƒ isPrototypeOf(),
    propertyIsEnumerable: ƒ propertyIsEnumerable(),
    toString: ƒ toString(),
    valueOf: ƒ valueOf(),
    toLocaleString: ƒ toLocaleString()
  }
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Números Constantes: Math.PI, Math.E, Math.LN2, Math.LOG2E, Math.LOG10E, Math.SQRT1_2 y Math.SQRT2
Son numeros fijos, que NO cambian

https://en.wikipedia.org/wiki/Mathematical_constant

https://en.wikipedia.org/wiki/List_of_mathematical_constants


Relación entre la circunferencia de un círculo y su diámetro
PI = π ≈ 3.1416
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

https://simple.wikipedia.org/wiki/Pi */

console.log(Math.PI);      // 3.141592653589793

/* Es la base de los logaritmos naturales

número de Euler = numero e ≈ 2.718

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E

https://en.wikipedia.org/wiki/E_(mathematical_constant) */

console.log(Math.E);       // 2.718281828459045

/* Logaritmo natural de 2 = Ln(2) ≈ 0.693
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LN2 */

console.log(Math.LN2);     // 0.6931471805599453

/* Logaritmo en base 2 de e ≈ 1,442
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG2E */

console.log(Math.LOG2E);   // 1.4426950408889634

/* Logaritmo en base 10 de e ≈ 0.434
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/LOG10E */

console.log(Math.LOG10E);  // 0.4342944819032518

/* Raíz cuadrada de 1/2 = √1/2 ≈ 0,707.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2 */

console.log(Math.SQRT1_2); // 0.7071067811865476

/* Raíz cuadrada de 2 = √2 ≈ 1.414
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT2 */

console.log(Math.SQRT2);   // 1.4142135623730951

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Math.abs Valor absoluto de un numero, hacer que un numero SIEMPRE sea positivo
https://youtu.be/BGXwssmxGuY */

console.log(Math.abs(-7.8)); // 7.8
console.log(Math.abs(-7.8)); // 7.8

console.log(Math.abs(10));   // 10
console.log(Math.abs(-10));  // 10


