/* eslint-disable no-multi-spaces */
/* eslint-disable no-restricted-properties */
/* eslint-disable prefer-exponentiation-operator */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
OPERADORES ARITMETICOS:

Tutorial de Jon Mircha de operadores aritmeticos:
https://www.youtube.com/watch?v=_8Z5AeGVIXE&t=47s

Documentacion Oficial...
Expresiones y operadores
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

Precedencia de Operadores:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

Matemáticas básicas en JS - números y operadores:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math

() operador de agrupacion, parentesis
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping

Math.pow() Exponente (potenciacion)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

** Exponente (potenciacion)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation

* Multiplicacion (producto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication

/ División (cociente)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division

% Modulo (resto, residuo)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

+ Suma (Adición, Mas)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition

- Resta (Sustracción, Menos)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction

El orden en que se resuelven
las operaciones matematicas tiene varios nombres,
todos significan lo mismo.
En matematicas se llama PEMDAS o BODMAS
y en JS se llama precedencia de operadores

El orden es:

|-------|------------|-------------------------------------|
| Orden | Operador   | Nombre                              |
|-------|------------|-------------------------------------|
| 1     | ()         | Paréntesis     (agrupacion)         |
|-------|------------|-------------------------------------|
| 2     | Math.pow() | Exponente      (potenciacion)       |
|       | **         |                                     |
|-------|------------|-------------------------------------|
| 3     | *          | Multiplicacion (producto)           |
|-------|------------|-------------------------------------|
| 4     | /          | División       (cociente)           |
|-------|------------|-------------------------------------|
| 5     | %          | Modulo         (resto, residuo)     |
|-------|------------|-------------------------------------|
| 6     | +          | Suma           (adicion, mas)       |
|-------|------------|-------------------------------------|
| 7     | -          | Resta          (Sustracción, menos) |
|-------|------------|-------------------------------------|

EJEMPLO 1: */

const n1 = 10;
const n2 = 2;

/* Math.pow() en ESLint Airbnb da error:
https://eslint.org/docs/latest/rules/prefer-exponentiation-operator

10**2 =
= Math.pow(10, 2)
= 10^2
= 10*10
= 100 */
console.log(Math.pow(n1, n2)); // 100
console.log(n1 ** n2);         // 100

console.log(n1 * n2);          // 10*2 = 20
console.log(n1 / n2);          // 10/2 = 5
console.log(n1 % n2);          // 10%2 = 0 -> 10 es par
console.log(n1 + n2);          // 10+2 = 12
console.log(n1 - n2);          // 10-2 = 8

/* --

EJEMPLO 2: */

let a = 5 + 5 - 10 * 3;
console.log(a);
// 10-30 = -20

a = 5 + (5 - 10) * 3;
console.log(a);
/* 5 + (-5) * 3 =
   = 5 - 5 * 3
   = 5 - 15
   = -10 */

/* -- */

const division = 5 / 2;
console.log(division);
// 2.5

const modulo = 5 % 2;
console.log(modulo);
// 1
