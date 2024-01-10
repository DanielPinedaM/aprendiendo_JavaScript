/* eslint-disable max-len */
/* eslint-disable array-callback-return */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Object.getOwnPropertySymbols() Convertir a Array [] las Propiedades del Objeto {} que son de Tipo Symbol()

Documentación Oficial - Object.getOwnPropertySymbols()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols

Alternativas a Object.getOwnPropertySymbols()

|--------------------------------|------------------------------------------------------------|
| Object.entries()               | Convertir a array anidado que contiene [propiedad, valor]  |
|                                | enumerables del objeto {}                                  |
|--------------------------------|------------------------------------------------------------|
| Object.keys()                  | Convertir a array [] las propiedades (claves)              |
|                                | enumerables del objeto {}                                  |
|--------------------------------|------------------------------------------------------------|
| Object.getOwnPropertyNames()   | Convertir a array [] las propiedades (claves)              |
|                                | enumerables y no enumerables del objeto {}                 |
|--------------------------------|------------------------------------------------------------|
| Object.values()                | Convertir a array [] los valores enumerables del objeto {} |
|--------------------------------|------------------------------------------------------------|

Sintaxis:
Object.getOwnPropertySymbols(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols#syntax

Donde...
- Object.getOwnPropertySymbols()
Nombre del método

- nombreObjeto
Nombre de la variable que contiene el objeto literal {} */

/* --------------------------------------------------------------- */

/* Ejemplo 1:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols#using_getownpropertysymbols */

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

/* Numero de propiedades del objetoLiteral {} q son de tipo Symbol()
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/  */
const symbolLength = Object.getOwnPropertySymbols(objetoLiteral).length;
console.log(symbolLength);
// 1

/* Object.getOwnPropertySymbols()
iterar SOLAMENTE los pares de propiedad: valor, q son de tipo Symbol() */
Object.getOwnPropertySymbols(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(propiedad, '➜', valor);

  // return
});
// Symbol(fantasma) ➜ 👻

/* En cambio, Object.keys() Object.getOwnPropertyNames() y Object.entries()
NO convierten a array los pares de propiedad: valor, q son de tipo Symbol() */
console.log(Object.keys(objetoLiteral));                // (3) ['uno', 'dos', 'tres']
console.log(Object.getOwnPropertyNames(objetoLiteral)); // (3) ['uno', 'dos', 'tres']
console.log(Object.entries(objetoLiteral));             // (3) [ [ 'uno', 1 ], [ 'dos', 2 ], [ 'tres', 3 ] ]

/* Lo mismo sucede con Object.values()
q NO convierte a array los valores del objeto literal {} q son de tipo Symbol() */
console.log(Object.values(objetoLiteral));
// (3) [1, 2, 3]
