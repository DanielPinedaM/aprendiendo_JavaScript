/*
Tutorial Midudev - typeof y Tipos de Datos (Variables) en JS
https://youtu.be/baDdsQ4aw4o

Caracteristicas de JS:
1) TIPADO DINAMICO:
Puedo cambiar los tipos de datos en tiempo de ejecucion

2) TIPADO DEBIL:
No hay que definir el tipo de dato para cada variable.
*/

let tipadoDinamico = 'hola mundo';
console.log(typeof tipadoDinamico);
/* string */

tipadoDinamico = 2;
console.log(typeof tipadoDinamico);
/* number */

const concatenar = 1 + '1';
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
