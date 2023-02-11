/* eslint-disable yoda */
/* eslint-disable max-len */
/* eslint-disable use-isnan */
/* eslint-disable no-multi-spaces */
// @ts-nocheck
/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */

/* --------------------------------------------------------------- */

/*
OPERADORES RELACIONALES

Tutorial de Jon Mircha de operadores relacionales:
https://www.youtube.com/watch?v=_8Z5AeGVIXE&t=314s

Tablas de Igualdad en JS:
https://dorey.github.io/JavaScript-Equality-Table/

Stack Overflow - Diferencia Entre...
== y ===
https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

=== y Object.is()
https://stackoverflow.com/questions/30543190/object-is-vs

Documentacion Oficial...
> mayor que
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than

>= mayor o igual que
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal

< menor que
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than

<= menor o igual que
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal

Comparaciones de igualdad
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

== Operador de igualdad (doble igual)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality

=== Operador estricto de identidad (triple igual)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality

Object.is() Método de Objeto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is

|-------------------|-------------------------------------------------------------------------|
| Operador          | Definición                                                              |
|-------------------|-------------------------------------------------------------------------|
| >                 | true si el operando de la izquierda es MAYOR Q el de la derecha         |
| mayor que         |                                                                         |
|-------------------|-------------------------------------------------------------------------|
| >=                | true si el operando de la izquierda es MAYOR O IGUAL Q el de la derecha |
| mayor o igual que |                                                                         |
|-------------------|-------------------------------------------------------------------------|
| <                 | true si el operando de la izquierda es MENOR Q el de la derecha         |
| menor que         |                                                                         |
|-------------------|-------------------------------------------------------------------------|
| <=                | true si el operando de la izquierda es MENOR O IGUAL Q el de la derecha |
| menor o igual que |                                                                         |
|-------------------|-------------------------------------------------------------------------|

>  mayor que
>= mayor o igual que

<  menor que
<= menor o igual que */

// 8 NO es mayor q 9
console.log(8 > 9);
// false

/* 8 NO es mayor q 9
NI tampoco 8 es igual a 9 */
console.log(8 >= 9);
// false

// 9 SI es mayor q 8
console.log(9 > 8);
// true

/* 9 NO es igual a 8
pero 9 SI es mayor q 8 */
console.log(9 >= 8);
// true

// 9 SI es igual a 9
console.log(9 >= 9);
// true

// 7 NO es menor q 7
console.log(7 < 7);
// false

/* 7 NO es menor q 7
pero 7 SI es igual a 7 */
console.log(7 <= 7);
// true

/* COMPARACION DE IGUALDAD:

|--------------------------------|-----------------------------------|--------------------|--------------------------|
| Comparación de Igualdad        | Definición                        | ¿Compara el VALOR? | ¿Compara TIPOS de datos? |
|--------------------------------|-----------------------------------|--------------------|--------------------------|
| ==                             | true si los operandos son iguales | ✓                  | X                        |
| Operador de igualdad           |                                   |                    |                          |
| (doble igual)                  |                                   |                    |                          |
|--------------------------------|-----------------------------------|--------------------|--------------------------|
| ===                            | true si los operandos son iguales | ✓                  | ✓                        |
| Operador estricto de identidad | en tipo y valor                   |                    |                          |
| (triple igual)                 |                                   |                    |                          |
|                                | Excepto si los operandos son      |                    |                          |
|                                | NaN y Number.NaN,                 |                    |                          |
|                                | solo en este caso devuelve false  |                    |                          |
|--------------------------------|-----------------------------------|--------------------|--------------------------|
| Object.is()                    | true si los operandos son iguales | ✓                  | ✓                        |
| Método de objeto               | en tipo y valor                   |                    |                          |
|                                |                                   |                    |                          |
|                                | Excepto si los operandos son      |                    |                          |
|                                | 0 (positivo) y -0 (negativo),     |                    |                          |
|                                | solo en este caso devuelve false  |                    |                          |
|--------------------------------|-----------------------------------|--------------------|--------------------------|

Segun ESLint Airbnb se debe usar === y NO ==
En otras palabras:
=== es buena practica y == es mala practica
https://eslint.org/docs/latest/rules/eqeqeq
https://airbnb.io/javascript/#comparison--eqeqeq

Ejemplo de == Operador de igualdad (doble igual) */

// 7 es lo mismo q 7
console.log(7 == 7);
// true

/* '7' tipo String() es lo mismo q 7 tipo Number(),
porq el valor 7 es el mismo */
console.log('7' == 7);
// true

// Ambos valores 0 y false son falsos
console.log(0 == false);
// true

console.log(NaN == NaN);
// false

/* Segun ESLint Airbnb comparar -0 es un error
https://eslint.org/docs/latest/rules/no-compare-neg-zero */
console.log(-0 == 0);
// true

/*
Stack Overflow
Diferencia Entre
=== Operador estricto de identidad (triple igual)
y Object.is() Método de Objeto
https://stackoverflow.com/questions/30543190/object-is-vs

Ejemplo - Diferencia Entre === Operador estricto de identidad (triple igual) y Object.is() Metodo de Objeto

7 tipo Number() es exactamente lo mismo q 7 tipo Number() */
console.log(7 === 7);         // true
console.log(Object.is(7, 7)); // true

// '7' tipo String() es diferente de 7 tipo Number()
console.log('7' === 7);         // false
console.log(Object.is('7', 7)); // false

/* A pesar de q ambos valores 0 y false son falsos,
0 tipo Number() es diferente a false tipo Boolean() */
console.log(0 === false);         // false
console.log(Object.is(0, false)); // false

/* === hace exactamente lo mismo q Object.is(),
ambos comparan el valor y tipo de dato.
Las unicas diferencias son:

1) Para === +0 (positivo) y -0 (negativo) son lo mismo,
en cambio para Object.is() son diferentes */
console.log(+0 === -0);         // true
console.log(Object.is(+0, -0)); // false

/* 2) Para === NaN y NaN son diferentes,
en cambio para Object.is() son lo mismo  */
console.log(NaN === NaN);         // false
console.log(Object.is(NaN, NaN)); // true

/* 3) Igual que ocurre en 2)
Para === Number.NaN y Number.NaN son diferentes
en cambio para Object.is() son lo mismo */
console.log(Number.NaN === Number.NaN);         // false
console.log(Object.is(Number.NaN, Number.NaN)); // true

/* 4) Para === NaN y Number.NaN son diferentes
en cambio para Object.is() son iguales */
console.log(NaN === Number.NaN);         // false
console.log(Object.is(NaN, Number.NaN)); // true

/*
COMPARACION DE DESIGUALDAD:

Diferencia entre
!=  Operador de desigualdad
y !== Operador de desigualdad estricta
https://www.geeksforgeeks.org/difference-between-and-operator-in-javascript-2/

!= es mala practica
y !== es buena practica

|----------------------|--------------------------------------|--------------------|--------------------------|
| Operador de...       | Definición                           | ¿Compara el VALOR? | ¿Compara TIPOS de datos? |
|----------------------|--------------------------------------|--------------------|--------------------------|
| !=                   | true si los valores                  | ✔                  | X                        |
| desigualdad          | de los operandos son diferentes      |                    |                          |
|----------------------|--------------------------------------|--------------------|--------------------------|
| !==                  | true si los valores o tipos de datos | ✔                  | ✔                       |
| desigualdad estricta | son diferentes                       |                    |                          |
|----------------------|--------------------------------------|--------------------|--------------------------| */

/* false porque 7 de tipo Number() y 7 de tipo Number(), NO son diferentes.
Ambos tienen el mismo valor y tipo de dato */
console.log(7 != 7);  // false
console.log(7 !== 7); // false

/* false porq '7' tipo String() se convierte a 7 tipo Number(),
es decir, esto '7' != 7 es lo mismo q esto 7 != 7 */
console.log('7' != 7);  // false

// true porq '7' tipo String() es diferente de 7 tipo Number()
console.log('7' !== 7); // true

// Ambos valores 0 y false son falsos, es decir, NO son diferentes
console.log(0 != false);  // false

// true porq 0 tipo Number() SI es diferente de false tipo Boolean()
console.log(0 !== false); // true

// Ambos valores 1 y true son verdaderos, es decir, NO son diferentes
console.log(1 != true);  // false

// true porq 1 tipo Number() SI es diferente de true tipo Boolean()
console.log(1 !== true); // true

/* != convierte [] a false,
es decir que [] != false es lo mismo q false != false.
Entonces devuelve false
porq ambos valores (false y false) NO son diferentes */
console.log([] != false);  // false

// true porq el array [] tipo object SI es diferente de false tipo Boolean()
console.log([] !== false); // true

console.log({} != false);  // true
console.log({} !== false); // true

console.log(null != undefined);  // false

// true porq null y undefined tienen diferente tipo y valor
console.log(null !== undefined); // true
