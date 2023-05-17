/* eslint-disable max-len */
/* eslint-disable no-self-compare */

// @ts-nocheck

/*
Documentacion Oficial - Object.getPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

Object.getPrototypeOf() OBTENER el Valor del Prototipo __proto__ del Objeto

Recordatorio:
Ver:
“ Ejemplo 1 - Diferencia Entre Object.getPrototypeOf() y Object.setPrototypeOf() ”

Object.getPrototypeOf() devuelve el prototipo del objeto padre especificado

El prototipo es el valor de la propiedad interna [[Prototype]]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf#return_value

Su sintaxis es:
Object.getPrototypeOf(nombreObjeto)

Donde...
- Object.getPrototypeOf()
Es el nombre del metodo

- nombreObjeto
* Nombre de la variable que contiene el objeto

* Nombre del objeto del que se accede al prototipo */

/* --------------------------------------------------------------- */

/* Ejemplo 1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf#try_it */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

// Object.getPrototypeOf() acceder al prototipo del objetoLiteral
let prototipo = Object.getPrototypeOf(objetoLiteral);
console.log(prototipo);
// [Object: null prototype] {}

// Comparar objetoLiteral con su prototipo
console.log(objetoLiteral === prototipo);
// false

/* Object.create() Crear un Nuevo Objeto
que Hereda las Propiedades y Métodos
de un Objeto Existente (Prototipo) */
const objectCreate = Object.create(objetoLiteral);
console.log(objectCreate);
// {}

/* Object.getPrototypeOf()
acceder al prototipo del nuevo objeto literal */
prototipo = Object.getPrototypeOf(objectCreate);
console.log(prototipo);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

// Comparar objetoLiteral con su prototipo
console.log(objetoLiteral === prototipo);
// true

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Object.getPrototypeOf() y objeto vacio {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf#using_getprototypeof */

console.log(Object.create({}));                // {}
console.log(Object.getPrototypeOf({}));        // [Object: null prototype] {}
console.log(Object.getPrototypeOf({}) === {}); // false

/* --- */

const objetoVacio = {};
console.log(objetoVacio);
// {}

// En JS NO existen 2 objetos iguales
console.log({} === {});
// false

const objectCreate2 = Object.create(objetoVacio);
console.log(objectCreate2);
// {}

const getPrototypeOf = Object.getPrototypeOf(objectCreate2);
console.log(getPrototypeOf);
// {}

console.log(getPrototypeOf === objetoVacio); // true
console.log(objectCreate2 === objetoVacio);  // false

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Object.getPrototypeOf() en tipo de dato primitivo (q NO es objeto)
Saber esto no es importante pero lo escribire para aprender:
La version de JS q usa NodeJS y todos los navegadores modernos es >= ES 6 (2015)

>= ES 6 (2015)
A PARTIR de ES 6 (2015) Object.getPrototypeOf()
devuelve un objeto vacio {}
al usarse con tipo de dato primitivo

< ES 6 (2015)
ANTES de ES 6 al usar Object.getPrototypeOf() con datos primitivos daba error

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf#non-object_coercion

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object */

// String() texto
console.log(Object.getPrototypeOf('hola mundo')); // {}

// Number() numero
console.log(Object.getPrototypeOf(123));          // {}

// BigInt() numero grande
console.log(Object.getPrototypeOf(BigInt(1n)));   // Object [BigInt] {}

// Boolean booleano
console.log(Object.getPrototypeOf(true));         // {}
console.log(Object.getPrototypeOf(false));        // {}

// Symbol() identificador unico (ID)
console.log(Object.getPrototypeOf(Symbol(9)));    // Object [Symbol] {}

// null Nulo
// console.log(Object.getPrototypeOf(null));      // ERROR: NO se puede convertir undefined o null a objeto

// undefined Indefinido
// console.log(Object.getPrototypeOf(undefined)); // ERROR: NO se puede convertir undefined o null a objeto

// NaN No es un Numero
console.log(Object.getPrototypeOf(NaN));          // {}
