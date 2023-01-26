/* eslint-disable max-len */
// @ts-nocheck

/* -------------------------------------------------------------- */

/* Documentacion Oficial - propiedades y metodos del objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods */

/* -------------------------------------------------------------- */

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

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ longitud .length del objeto █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/

                       propiedades enumerables           + propiedades de tipo Symbol() */
const longitudObjeto = Object.keys(objetoLiteral).length + Object.getOwnPropertySymbols(objetoLiteral).length;
console.log(longitudObjeto);
// 4

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.getOwnPropertySymbols() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols

Convertir a Array [] las Propiedades que son de Tipo Symbol() */
const symbol = Object.getOwnPropertySymbols(objetoLiteral);
console.log(symbol);
// [Symbol(fantasma)]
