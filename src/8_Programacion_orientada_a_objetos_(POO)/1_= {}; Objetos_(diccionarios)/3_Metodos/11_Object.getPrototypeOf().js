// @ts-nocheck

/*
Documentacion Oficial - Object.getPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

Object.getPrototypeOf() prototipo del objeto

Object.getPrototypeOf() devuelve el prototipo
que es el valor de la propiedad interna [[Prototype]]
del objeto padre especificado

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* --------------------------------------------------------------- */

/* Ejemplo 1 */

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
const prototipo = Object.getPrototypeOf(objetoLiteral);
console.log(prototipo);
// [Object: null prototype] {}

/* --------------------------------------------------------------- */

/* Ejemplo 2 */
