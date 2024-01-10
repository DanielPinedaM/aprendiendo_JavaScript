/* eslint-disable no-param-reassign */
/* eslint-disable prefer-exponentiation-operator */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Objeto Math Operaciones Matemáticas

Tutorial - Jon Mircha:
https://youtu.be/BGXwssmxGuY

Documentación Oficial...
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
Son números fijos, que NO cambian

https://en.wikipedia.org/wiki/Mathematical_constant

https://en.wikipedia.org/wiki/List_of_mathematical_constants


Relación entre la circunferencia de un círculo y su diámetro
PI = π ≈ 3.1416
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

https://simple.wikipedia.org/wiki/Pi */

console.log(Math.PI);      // 3.141592653589793

/* Es la base de los logaritmos naturales

número de Euler = número e ≈ 2.718

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

/* Ejemplo 3 - Math.abs() valor absoluto de un número, hacer que un número SIEMPRE sea positivo
https://youtu.be/BGXwssmxGuY

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

https://en.wikipedia.org/wiki/Absolute_value */

console.log(Math.abs(7.8));        // 7.8
console.log(Math.abs(-7.8));       // 7.8

console.log(Math.abs(10));         // 10
console.log(Math.abs(-10));        // 10

console.log(Math.abs(0));          // 0
console.log(Math.abs(-0));         // 0

console.log(Math.abs(BigInt(99))); // ❌ Uncaught TypeError: Cannot convert a BigInt value to a number at Math.abs (<anonymous>)

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Math.ceil() Redondear "hacia ARRIBA", al número entero MAYOR más cercano
https://educative.io/answers/mathceil-mathfloor-and-mathround-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil */

console.log(Math.ceil(7));            // 7
console.log(Math.ceil(-7));           // -7

console.log(Math.ceil(7.1));          // 8
console.log(Math.ceil(7.9));          // 8

console.log(Math.ceil(-7.1));          // -7
console.log(Math.ceil(-7.9));          // -7

console.log(Math.ceil('7.1'));         // 8
console.log(Math.ceil('7.9'));         // 8

console.log(Math.ceil('-7.1'));        // -7
console.log(Math.ceil('-7.9'));        // -7

/* --- */

console.log(Math.ceil());             // NaN
console.log(Math.ceil('hola mundo')); // NaN

console.log(Math.ceil(true));         // 1
console.log(Math.ceil(false));        // 0

console.log(Math.ceil(null));         // 0
console.log(Math.ceil(undefined));    // NaN
console.log(Math.ceil(NaN));          // NaN

console.log(Math.ceil(Infinity));     // Infinity
console.log(Math.ceil(-Infinity));    // -Infinity

console.log(Math.ceil(0));            // 0
console.log(Math.ceil(-0));           // -0

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Math.floor() Redondear "hacia ABAJO", al número entero MENOR más cercano
https://educative.io/answers/mathceil-mathfloor-and-mathround-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor */

console.log(Math.floor(7));            // 7
console.log(Math.floor(-7));           // -7

console.log(Math.floor(7.1));          // 7
console.log(Math.floor(7.9));          // 7

console.log(Math.floor(-7.1));         // -8
console.log(Math.floor(-7.9));         // -8

console.log(Math.floor('7.1'));        // 7
console.log(Math.floor('7.9'));        // 7

console.log(Math.floor('-7.1'));       // -8
console.log(Math.floor('-7.9'));       // -8

/* --- */

console.log(Math.floor());             // NaN
console.log(Math.floor('hola mundo')); // NaN

console.log(Math.floor(true));         // 1
console.log(Math.floor(false));        // 0

console.log(Math.floor(null));         // 0
console.log(Math.floor(undefined));    // NaN
console.log(Math.floor(NaN));          // NaN

console.log(Math.floor(Infinity));     // Infinity
console.log(Math.floor(-Infinity));    // -Infinity

console.log(Math.floor(0));            // 0
console.log(Math.floor(-0));           // -0

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Math.round() Redondear al número ENTERO MAS CERCANO
https://educative.io/answers/mathceil-mathfloor-and-mathround-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

SI parte fraccionaria (despues del punto) es >= 5
Math.round() redondea "hacia ARRIBA", al número entero MAYOR mas cercano */

console.log(Math.round(7.5));            // 8
console.log(Math.round(-7.5));           // -7

console.log(Math.round(7.9));            // 8
console.log(Math.round(-7.9));           // -8

/* SINO la parte fraccionaria es <=4
Math.round() redondea "hacia ABAJO", al número entero MENOR mas cercano */

console.log(Math.round(7.4));            // 7
console.log(Math.round(-7.4));           // -7

console.log(Math.round(7.1));            // 7
console.log(Math.round(-7.1));           // -7

/* --- */

console.log(Math.round());             // NaN
console.log(Math.round('hola mundo')); // NaN

console.log(Math.round(true));         // 1
console.log(Math.round(false));        // 0

console.log(Math.round(null));         // 0
console.log(Math.round(undefined));    // NaN
console.log(Math.round(NaN));          // NaN

console.log(Math.round(Infinity));     // Infinity
console.log(Math.round(-Infinity));    // -Infinity

console.log(Math.round(0));            // 0
console.log(Math.round(-0));           // -0

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Math.trunc() ELIMINAR todos los decimales de un número, SIN importar si es el número entero mayor o menor más cercano
https://www.educative.io/answers/mathceil-mathfloor-and-mathround-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc */

console.log(Math.trunc(7));            // 7
console.log(Math.trunc(-7));           // -7

console.log(Math.trunc(7.1));          // 7
console.log(Math.trunc(7.9));          // 7

console.log(Math.trunc(-7.1));         // -7
console.log(Math.trunc(-7.9));         // -7

console.log(Math.trunc('7.1'));        // 7
console.log(Math.trunc('7.9'));        // 7

console.log(Math.trunc('-7.1'));       // -7
console.log(Math.trunc('-7.9'));       // -7

/* --- */

console.log(Math.trunc());             // NaN
console.log(Math.trunc('hola mundo')); // NaN

console.log(Math.trunc(true));         // 1
console.log(Math.trunc(false));        // 0

console.log(Math.trunc(null));         // 0
console.log(Math.trunc(undefined));    // NaN
console.log(Math.trunc(NaN));          // NaN

console.log(Math.trunc(Infinity));     // Infinity
console.log(Math.trunc(-Infinity));    // -Infinity

console.log(Math.trunc(0));            // 0
console.log(Math.trunc(-0));           // -0

/* --------------------------------------------------------------- */

/* Ejemplo 8 - Math.sqrt() Raíz cuadrada de un número
https://youtu.be/BGXwssmxGuY

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt */

console.log(Math.sqrt(0));            // 0
console.log(Math.sqrt(-0));           // -0

console.log(Math.sqrt(-1));           // NaN
console.log(Math.sqrt(1));            // 1

console.log(Math.sqrt(2));            // 1.4142135623730951
console.log(Math.sqrt(9));            // 3


console.log(Math.sqrt());             // NaN

console.log(Math.sqrt('hola mundo')); // NaN

console.log(Math.sqrt(true));         // 1
console.log(Math.sqrt(false));        // 0

console.log(Math.sqrt(null));         // 0
console.log(Math.sqrt(undefined));    // NaN
console.log(Math.sqrt(NaN));          // NaN

console.log(Math.sqrt(Infinity));     // Infinity
console.log(Math.sqrt(-Infinity));    // NaN

/* --------------------------------------------------------------- */

/* Ejemplo 9 - Potenciación - Diferencias y Similitudes Entre Math.pow() y Operador **

Recordatorio:
Ver:
" 5.1) Operadores Aritméticos - () Paréntesis, Math.pow() y *** Exponente, * Multiplicación, / División, % Modulo, + Suma, - Resta "

https://stackoverflow.com/questions/37601189/difference-between-ecmascript-2016-exponentiation-operator-and-math-pow

https://youtu.be/BGXwssmxGuY

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation

https://eslint.org/docs/latest/rules/prefer-exponentiation-operator

                             |---------------------------------------------------------------------------------|-----------------------------|
                             | Math.pow()                                                                      | Operador **                 |
|----------------------------|---------------------------------------------------------------------------------|-----------------------------|
| ¿Sirve para potenciacion?  | ✓                                                                               | ✓                           |
|                            | console.log(Math.pow(4, 2));                                                    | console.log(4 ** 2);        |
|                            | // 16                                                                           | // 16                       |
|----------------------------|---------------------------------------------------------------------------------|-----------------------------|
| ¿Sirve con BigInt()        | X                                                                               | ✓                           |
| números grandes?           | console.log(                                                                    | console.log(                |
|                            |   Math.pow(BigInt(999), BigInt(2)),                                             |   BigInt(999) ** BigInt(2), |
|                            | );                                                                              | );                          |
|                            | // ❌ Uncaught TypeError: Cannot convert a BigInt value to a number at Math.pow | // 998001n                  |
|----------------------------|---------------------------------------------------------------------------------|-----------------------------|
| Sintaxis                   | Math.pow(base, exponente)                                                       | base ** exponente           |
|----------------------------|---------------------------------------------------------------------------------|-----------------------------| */

// Ejemplos basicos
console.log(7 ** 2);  // 7^2   = 7*7                 = 49
console.log(7 ** 2);  // 7^2   = 7*7                 = 49

console.log(7 ** 3);  // 7^3   = 7*7*7               = 343
console.log(2 ** 10); // 2^10 = 2*2*2*2*2*2*2*2*2*2 = 1024

// Exponentes fraccionarios
console.log(4 ** 0.5);     // 2                  -> raíz cuadrada de 4
console.log(8 ** (1 / 3)); // 2                  -> raíz cúbica de 8
console.log(2 ** 0.5);     // 1.4142135623730951 -> raíz cuadrada de 2
console.log(2 ** (1 / 3)); // 1.2599210498948732 -> raíz cúbica de 2

// Exponente negativo
console.log(7 ** -2);       // 0.02040816326530612 = 1/49
console.log(8 ** (-1 / 3)); // 0.5
console.log(2 ** -1);       // 0.5

// Base negativa
console.log((-7) ** 2);   // 49   -> todo número elevado al cuadrado 2 siempre es positivo
console.log((-7) ** 3);   // -343 -> los números elevados al cubo 3 pueden ser negativos
console.log((-7) ** 0.5); // NaN  -> los números negativos no tienen raíz cuadrada real

/*
Debido a que las raíces "pares" e "impares" se encuentran cerca unas de otras,
y límites en la precisión del número flotante,
las bases negativas con exponentes fraccionarios siempre devuelven NaN,
incluso cuando el resultado matemático es real */

console.log((-7) ** (1 / 3)); // NaN

// Infinito y cero
console.log(0 ** 0);              // 1         -> cualquier cosa ** ±0 is 1
console.log(Infinity ** 0.1);     // Infinity  -> exponente positivo
console.log(Infinity ** -1);      // 0         -> exponente negativo
console.log((-Infinity) ** 1);    // -Infinity -> exponente entero, impar y positivo
console.log((-Infinity) ** 1.5);  // Infinity  -> exponente positivo
console.log((-Infinity) ** -1);   // -0        -> exponente entero, impar y negativo
console.log((-Infinity) ** -1.5); // 0         -> exponente negativo
console.log(0 ** 1);              // 0         -> exponente positivo
console.log(0 ** -1);             // Infinity  -> exponente negativo
console.log((-0) ** 1);           // -0        -> exponente entero, impar y positivo
console.log((-0) ** 1.5);         // 0         -> exponente positivo
console.log((-0) ** -1);          // -Infinity -> exponente entero, impar y negativo
console.log((-0) ** -1.5);        // Infinity  -> exponente negativo
console.log(0.9 ** Infinity);     // 0
console.log(1 ** Infinity);       // NaN
console.log(1.1 ** Infinity);     // Infinity
console.log(0.9 ** -Infinity);    // Infinity
console.log(1 ** -Infinity);      // NaN
console.log(1.1 ** -Infinity);    // 0

// NaN No Es Un Numero
console.log(NaN ** 0); // 1 -> solamente Math.pow(NaN, 0) NO da como resultado NaN
console.log(NaN ** 1); // NaN
console.log(1 ** NaN); // NaN

/* --------------------------------------------------------------- */

/* Ejemplo 10 - Math.sign() Saber si un número es negativo, cero o positivo
https://youtu.be/BGXwssmxGuY

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

Lo q esta dentro de los parentesis de Math.sign() se convierte a número Number()

|---------------------------------------|----------------------------------|--------------------------|
| Si el número es...                    | entonces Math.sign() devuelve... | Ejemplo                  |
|---------------------------------------|----------------------------------|--------------------------|
| +   positivo                          | 1                                | Math.sign(99);     // 1  |
|                                       |                                  | Math.sign("99");   // 1  |
|                                       |                                  |                          |
|                                       |                                  | Math.sign(7.1);    // 1  |
|                                       |                                  | Math.sign("7.1");  // 1  |
|---------------------------------------|----------------------------------|--------------------------|
| -   negativo                          | -1                               | Math.sign(-99);    // -1 |
|                                       |                                  | Math.sign("-99");  // -1 |
|                                       |                                  |                          |
|                                       |                                  | Math.sign(-7.1);   // -1 |
|                                       |                                  | Math.sign("-7.1"); // -1 |
|---------------------------------------|----------------------------------|--------------------------|
| 0   cero                              | 0                                | Math.sign(0);      // 0  |
|                                       |                                  | Math.sign("0");    // 0  |
|                                       |                                  |                          |
|                                       |                                  | Math.sign(0.0);    // 0  |
|                                       |                                  | Math.sign("0.0");  // 0  |
|---------------------------------------|----------------------------------|--------------------------|
| -0  cero negativo                     | -0                               | Math.sign(-0);     // -0 |
|                                       |                                  | Math.sign("-0");   // -0 |
|                                       |                                  |                          |
|                                       |                                  | Math.sign(-0.0);   // -0 |
|                                       |                                  | Math.sign("-0.0"); // -0 |
|---------------------------------------|----------------------------------|--------------------------| */

// Casos especiales de Math.sign()
Math.sign();             // NaN
Math.sign('hola mundo'); // NaN -> Number('hola mundo') de string con texto es NaN
Math.sign('');           // 0   -> Number("")           de string vacio ''  es 0

// Los booleanos se convierten a número Number()
Math.sign(true);         // 1 -> true es 1 y es positivo
Math.sign(false);        // 0 -> false es 0

Math.sign(null);         // 0   -> Number(null) es 0
Math.sign(undefined);    // NaN -> Number(undefined) es NaN
Math.sign(NaN);          // NaN -> Number(undefined) es NaN

Math.sign(Infinity);     // 1
Math.sign(-Infinity);    // -1

Math.sign(BigInt(999));   // ❌ Uncaught TypeError: Cannot convert a BigInt value to a number at Math.sign

/* --------------------------------------------------------------- */

/* Ejemplo 11 - Math.random() Número Pseudo-aleatorio entre 0 y 1
https://youtu.be/BGXwssmxGuY

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

Math.random() número pseudo-aleatorio entre 0 y 1
0 <= número < 1

Casi siempre Math.random() es un número decimal

Math.random() NO es 100% aleatorio,
casi siempre da resultados cercanos a 0.5

Casi siempre q ejecuto Math.random() da un resultado diferente */

console.log(Math.random()); // 0.401307855455707
console.log(Math.random()); // 0.3411483314021051
console.log(Math.random()); // 0.9367034277578408

/* --- */

/* Desordenar los elementos de un array []
https://youtu.be/YIZWGn13RCE

https://twitter.com/midudev/status/1488211287159025667/photo/1 */

const array = [2, 4, 6, 8];
console.log(array);
// (4) [2, 4, 6, 8]

const desordenarArray = array.toSorted(() => Math.random() - 0.5);
console.log(desordenarArray);
/* (4) [8, 6, 4, 2]
   (4) [2, 4, 6, 8]
   (4) [2, 8, 4, 6] */

/* --- */

/* Obtener aleatoriamente un elemento del array:

https://youtu.be/YIZWGn13RCE

https://twitter.com/midudev/status/1488211291802152965/photo/1

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor */

const letras = ['a', 'b', 'c'];
//               0    1    2 -> POSICIONES (INDICES)

console.log(letras);
// (3) ['a', 'b', 'c']

/* Esto NO es 100% aleatorio porq a veces el indice NO cambia

Math.floor() aproximar al MENOR número entero

Multiplicar:
(Math.random() número pseudo-aleatorio y decimal entre 0 y 1) * (.length número de elementos del array) */

const indicePseudoaleatorio = Math.floor(
  Math.random() * letras.length,
);
console.log(indicePseudoaleatorio);
/*
2
1
*/

const elemento = letras[indicePseudoaleatorio];
console.log(elemento);
/*
'c'
'b'
*/

/* --- */

/* Número entero y pseudo-aleatorio desde un número hasta otro número

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil */

const getRandomIntInclusive = (min, max) => {
  // Math.ceil() Redondear "hacia ARRIBA", al número entero MAYOR mas cercano
  min = Math.ceil(min);
  console.log(min);
  /*
  10
  10

  500
  500
  */

  // Math.floor() Redondear "hacia ABAJO", al número entero MENOR mas cercano
  max = Math.floor(max);
  console.log(max);
  /*
  20
  20

  600
  600
  */

  // Math.random() número pseudo-aleatorio entre 0 y 1
  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomIntInclusive(10, 20);   // 15
getRandomIntInclusive(10, 20);   // 14

getRandomIntInclusive(500, 600); // 535
getRandomIntInclusive(500, 600); // 529
