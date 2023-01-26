/* eslint-disable array-callback-return */
// @ts-nocheck

/* Documentacion Oficial - .entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

Object.entries() Convertir a Array Anidado que Contiene [propiedad, valor] del Objeto {}

Object.entries()

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Recorrer (iterar) objetoLiteral usando Object.entries()
https://youtu.be/Mz9HSiXSSVU */

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

/* Object.entries()
Contiene un array anidado con pares de  [propiedad, valor] del objeto literal {} */
const entries = Object.entries(objetoLiteral);
console.log(entries);
// (3) [ [ 'uno', 1 ], [ 'dos', 2 ], [ 'tres', 3 ] ]

/* Object.entries()
Convertir el objetoLiteral {} a array [] e iterarlo con .map() */
Object.entries(objetoLiteral).map((entry) => {
  const [propiedad, valor] = entry;
  console.log(`${propiedad} ➜ ${valor}`);
});
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 */
