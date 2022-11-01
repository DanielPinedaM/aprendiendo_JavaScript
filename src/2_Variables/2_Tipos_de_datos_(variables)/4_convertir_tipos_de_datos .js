/* eslint-disable quotes */
/*
Convertir Tipos de Datos
(Convertir de un Tipo de Dato a Otro)
(Tipado Dinámico / Coerción)
https://javascript.info/type-conversions
*/

// @ts-nocheck
/* eslint-disable no-multi-spaces */

/*
Es mala práctica
forzar la conversión de datos
usando operadores lógicos
como por ejemplo
el operador de doble negación (doble no) !!
la forma correcta (buena práctica)
es usar los métodos () de los tipos de datos q son:
String()
Number()
BigInt()
Boolean()
Symbol()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_
https://youtube.com/shorts/RxxyJk4h9pU?feature=share
*/

/* Boolean() */
/*
1 = true
2 = false
*/
console.log(Boolean(0));                    /* false */
console.log(typeof Boolean(0));             /* boolean */

console.log(Boolean(1));                    /* true */
console.log(typeof Boolean(1));             /* boolean */

/* Las cadenas de texto (string) vacías ''
se convierten al booleano false */
console.log(Boolean(''));                   /* false */
console.log(typeof Boolean(''));            /* boolean */

/* Cualquier cadena de texto (string) y espacios en blanco
es equivalente a verdadero true */
console.log(Boolean(' '));                  /* true */
console.log(typeof Boolean(' '));           /* boolean */

console.log(Boolean('hola mundo'));         /* true */
console.log(typeof Boolean('hola mundo'));  /* boolean */

/* Number() */
console.log(Number('7'));              /* 7 */
console.log(typeof Number('7'));       /* number */

console.log(Number(null));             /* 0 */

console.log(Number(true));             /* 1 */
console.log(Number(false));            /* 0 */

console.log(Number(Infinity));         /* Infinity */

console.log(Number(true));             /* 1 */
console.log(typeof Number(true));      /* number */

console.log(Number(false));            /* 0 */
console.log(typeof Number(false));     /* number */

/* Los string vacios y espacios en blanco
se convierten en 0 */
console.log(Number(''));               /* 0 */

console.log(Number(" "));              /* 0 */

/* Cuando Number() no puede convertir el tipo de dato a numero
entonces devuelve NaN (No es un Numero)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion */
console.log(Number('hola mundo'));     /* NaN */
console.log(Number(undefined));        /* NaN */
console.log(Number(NaN));              /* NaN */

/* String() */
console.log(String(0));                /* '0' */
console.log(typeof String(0));         /* string */

const number = 0;
console.log(typeof number);            /* string */

console.log(number.toString());        /* '0' */
console.log(typeof number.toString()); /* string */

console.log(String(NaN));              /* 'NaN' */
console.log(NaN.toString());           /* 'NaN' */

/* Diferencia Entre String() y .toString()
https://stackoverflow.com/questions/3945202/whats-the-difference-between-stringvalue-vs-value-tostring */
console.log(String(null));             /* 'null' */
console.log(null.toString());          /* TypeError */

console.log(String(undefined));        /* 'undefined' */
console.log(undefined.toString());     /* TypeError */
