/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-callback-return */
// @ts-nocheck

/* Documentacion Oficial - .getOwnPropertySymbols()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols

.getOwnPropertySymbols()

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Recorrer (iterar) propiedad: valor, de tipo Symbol() en un objeto literal {}

// Crear objeto {} con tipo Symbol()
const fantasma = Symbol('fantasma');
console.log(fantasma);
// Symbol(fantasma)

const objetoLiteral = {
// propiedad: valor,
  [fantasma]: '👻', // Symbol()
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  [Symbol(fantasma)]: '👻'
}
*/

/* Object.getOwnPropertySymbols()
iterar SOLAMENTE los pares de propiedad: valor, q son de tipo Symbol() */
Object.getOwnPropertySymbols(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(propiedad, '➜', valor);
});
// Symbol(fantasma) ➜ 👻

/* En cambio, Object.keys() Object.getOwnPropertyNames() y Object.entries()
NO convierten a array los pares de propiedad: valor, q son de tipo Symbol()  */
console.log(Object.keys(objetoLiteral));                // (3) ['uno', 'dos', 'tres']
console.log(Object.getOwnPropertyNames(objetoLiteral)); // (3) ['uno', 'dos', 'tres']
console.log(Object.entries(objetoLiteral));             // (3) [ [ 'uno', 1 ], [ 'dos', 2 ], [ 'tres', 3 ] ]

/* --------------------------------------------------------------- */

/* Ejemplo 2 */
