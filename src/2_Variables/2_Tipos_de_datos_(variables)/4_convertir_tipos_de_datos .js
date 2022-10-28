/*
Convertir Tipos de Datos
(Convertir de un Tipo de Dato a Otro)
(Tipado Dinámico / Coerción)
https://javascript.info/type-conversions
*/

// @ts-nocheck
/* eslint-disable no-multi-spaces */

const NULL = null;
console.log(typeof NULL);              /* object */

const number = 0;
console.log(typeof number);            /* number */

const string = '7';
console.log(typeof string);            /* string */

/* Metodos de los tipos de datos
String()
Number()
BigInt()
Symbol() */
console.log(Boolean(0));               /* false */
console.log(typeof Boolean(0));        /* boolean */

console.log(Boolean(1));               /* true */
console.log(typeof Boolean(1));        /* boolean */

console.log(Number(string));           /* 7 */
console.log(typeof Number(string));    /* number */

console.log(String(number));           /* '0' */
console.log(typeof String(number));    /* string */

console.log(number.toString());        /* '0' */
console.log(typeof number.toString()); /* string */

/* Diferencia Entre String() y .toString()
https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring */
console.log(String(NULL));             /* 'null' */
console.log(NULL.toString());          /* TypeError */
console.log(undefined.toString());     /* TypeError */
