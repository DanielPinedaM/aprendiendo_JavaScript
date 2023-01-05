/* eslint-disable max-len */
/* eslint-disable func-names */
// @ts-nocheck
/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */

/*
Resumen: typeof Tipos de Datos (Variables) en JS

             |----------------------------------|-----------------------|
             | Tipos de Datos (Variables) en JS | typeof                |
|------------|----------------------------------|-----------------------|
| Primitivos | String() Cadenas de Texto        | typeof 'hola mundo'   |
|            |                                  | // 'string'           |
|            |                                  |                       |
|            |                                  | typeof String()       |
|            |                                  | // 'string'           |
|            |                                  |                       |
|            |                                  | typeof new String()   |
|            |                                  | // 'object'           |
|            |----------------------------------|-----------------------|
|            | Number() Numero                  | typeof 1              |
|            |                                  | // 'number'           |
|            |                                  |                       |
|            |                                  | typeof Number()       |
|            |                                  | // 'number'           |
|            |                                  |                       |
|            |                                  | typeof new Number()   |
|            |                                  | // 'object'           |
|            |----------------------------------|-----------------------|
|            | BigInt() Numero Grande           | typeof BigInt(1)      |
|            |                                  | // 'bigint'           |
|            |                                  |                       |
|            |                                  | typeof 1n             |
|            |                                  | // 'bigint'           |
|            |----------------------------------|-----------------------|
|            | Boolean()                        | typeof true           |
|            | true y false                     | // 'boolean'          |
|            | Booleano                         |                       |
|            |                                  | typeof false          |
|            |                                  | // 'boolean'          |
|            |                                  |                       |
|            |                                  | typeof Boolean()      |
|            |                                  | // 'boolean'          |
|            |                                  |                       |
|            |                                  | typeof new Boolean()  |
|            |                                  | // 'object'           |
|            |----------------------------------|-----------------------|
|            | Symbol()                         | typeof Symbol()       |
|            | Símbolo                          | // 'symbol'           |
|            | Identificador Único              |                       |
|            | ID                               |                       |
|            |----------------------------------|-----------------------|
|            | null Nulo                        | typeof null           |
|            |                                  | // 'object'           |
|            |----------------------------------|-----------------------|
|            | undefined Indefinido             | typeof undefined      |
|            |                                  | // 'undefined'        |
|            |----------------------------------|-----------------------|
|            | NaN No es un Numero              | typeof NaN            |
|            |                                  | 'number'              |
|------------|----------------------------------|-----------------------|
| Compuestos | = [];                            | typeof []             |
| (Objetos)  | Arreglos                         | // 'object'           |
|            | Arrays                           |                       |
|            | Listas                           |                       |
|            |----------------------------------|-----------------------|
|            | = {};                            | typeof {}             |
|            | Objetos                          | // 'object'           |
|            | Diccionarios                     |                       |
|            |----------------------------------|-----------------------|
|            | Funciones                        | // Funcion Regular    |
|            |                                  | // (Regular Function) |
|            |                                  | typeof function() {}  |
|            |                                  | // 'function'         |
|            |                                  |                       |
|            |                                  | // Funcion Flecha     |
|            |                                  | // (Arrow Function)   |
|            |                                  | typeof (() => {})     |
|            |                                  | // 'function'         |
|            |----------------------------------|-----------------------|
|            | class {} Clases                  | typeof class {}       |
|            |                                  | // 'function'         |
|------------|----------------------------------|-----------------------|

|-------------------------------------------------------------------------------------------------------------------|
|                                               Tipos de Datos (Variables) en JS                                    |
|-------------------------|-------------------------------------------|---------------------------------------------|
|                         | Primitivos                                | Compuestos (Objetos)                        |
|                         |-------------------------------------------|---------------------------------------------|
| ¿Cuáles son?            | String() Cadenas de Texto                 | = []; Arreglos (Arrays, Listas)             |
|                         | Number() Numero                           | = {}; Objetos (Diccionarios)                |
|                         | BigInt() Numero Grande                    |                                             |
|                         | Boolean()- true y false - Booleano        | function () {} Funciones                    |
|                         | Symbol() Símbolo (Identificador Único)    | class {} Clases                             |
|                         | null Nulo                                 |                                             |
|                         | undefined Indefinido                      |                                             |
|                         | NaN No es un Numero                       |                                             |
|-------------------------|-------------------------------------------|---------------------------------------------|
| MUtable:                | Son INmutables                            | MUtable,                                    |
| El valor de la variable | cuando se definen (inicializan) con const | hay métodos que modifican los objetos {}    |
| SI se puede modificar.  |                                           |                                             |
|                         | Son MUtables                              | Ejemplo 1:                                  |
| INmutable:              | cuando se definen con var ó let           | .pop() elimina el último elemento del array |
| El valor de la variable |                                           |                                             |
| NO se puede modificar.  | Ejemplo 1:                                | Ejemplo 2:                                  |
|                         | null siempre es null,                     | En JS no existen 2 objetos {} iguales       |
|                         | no se puede modificar                     | porque a cada objeto se le asigna           |
|                         |                                           | un espacio de memoria diferente.            |
|                         | Ejemplo 2:                                | Aquí estoy comparando 2 objetos vacíos:     |
|                         | Puedo comparar                            | {} === {}                                   |
|                         | los valores de las variables:             | // false                                    |
|                         | null === null                             |                                             |
|                         | // true                                   |                                             |
|-------------------------|-------------------------------------------|---------------------------------------------|
| ¿Cómo acceder           | Se accede DIRECTAMENTE                    | Se accede a la REFERENCIA                   |
| a la variable?          | al VALOR de la variable                   | donde se encuentra el valor,                |
|                         | al momento de definirla.                  | se necesita saber dónde está definido       |
|                         |                                           | para acceder al dato (variable).            |
|-------------------------|-------------------------------------------|---------------------------------------------|
| ¿Puede guardar          | Uno solo                                  | Mas de uno                                  |
| un solo dato            |                                           |                                             |
| o más de uno?           |                                           |                                             |
|-------------------------|-------------------------------------------|---------------------------------------------|

Tutorial Midudev - typeof y Tipos de Datos (Variables) en JS
https://youtu.be/baDdsQ4aw4o

Caracteristicas de JS:
1) TIPADO DINAMICO:
Puedo cambiar los tipos de datos en tiempo de ejecucion

2) TIPADO DEBIL:
No hay que definir el tipo de dato para cada variable.
*/

/* ------------------------------------------------------ */

let tipadoDinamico = 'hola mundo';
console.log(typeof tipadoDinamico);
/* string */

tipadoDinamico = 2;
console.log(typeof tipadoDinamico);
/* number */

const concatenar = `${1}1`;
console.log(concatenar);
/* 11 */

const booleano = true;
console.log(typeof booleano);
/* boolean */

/* ------------------------------------------ */

const isDefined = true || null;
console.log(isDefined);
/* true */

/* ------------------------------------------ */

let texto = 'hola mundo';
console.log(texto);
/* hola mundo */

/* JS convierte el numero 2 en string */
texto += 2;
console.log(texto);
/* hola mundo2 */

/* ------------------------------------------ */

/* DATOS (VARIABLES) PRIMITIVOS */

console.log(typeof undefined); /* undefined */

console.log(typeof true); /* boolean */
console.log(typeof false); /* boolean */
console.log(typeof Boolean()); /* boolean */

console.log(typeof 1); /* number */
console.log(typeof Number()); /* number */

console.log(typeof 'hola mundo'); /* string */
console.log(typeof String()); /* string */

console.log(typeof BigInt(1)); /* bigint */

console.log(typeof Symbol(2)); /* symbol */

console.log(typeof NaN); /* number */

/* null en realidad es un dato primitivo
pero hay un error en JS
en el que typeof null imprime object,
cuando en realidad deberia imprimir null */
console.log(typeof null); /* object */

/* ------------------------------------------ */

console.log(null === null); /* true */

/* ------------------------------------------ */

/* DATOS (VARIABLES) COMPUESTOS (OBJETOS) */

/* = {}; Objetos (Diccionarios) */
console.log(typeof {}); /* object */

const set = new Set();
console.log(typeof set); /* object */

const map = new Map();
console.log(typeof map); /* object */

/* = []; Arreglos (Arrays, Listas) */
console.log(typeof []); /* object */

/* () {} Funciones
es tu tipo especial
typeof function () {} imprime function
pero las funciones en JS son objetos
porq las funciones al igual q los objetos
tienen propiedades y metodos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions# */
console.log(typeof function () {}); /* function */

/* En JS las clases tambien son funciones,
son como una "funcion especial"
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#defining_classes */
console.log(typeof class {}); /* function */

/* ------------------------------------------ */

/*
Los objetos {} en JS son diferentes,
no existen 2 objetos iguales,
esto es así porque:
- A cada objeto se le asigna un espacio de memoria diferente
- Los objetos se comparan por referencia y NO por valor
https://stackoverflow.com/questions/28599976/why-is-false-in-javascript

objetos vacios */
console.log({} === {}); /* false */
console.log({} == {}); /* false */
