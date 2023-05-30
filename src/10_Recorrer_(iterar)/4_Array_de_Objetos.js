// @ts-nocheck

/*
Para recorrer (iterar) un array de objetos [ {} ]
JUNTO las formas que hay para iterar arrays [] y objetos {}

A continuacion solo resumi las principales formas,
pero en este link hay mas formas:

Techie Delight - Recorrer (Iterar) Array de Objetos [{}]
https://www.techiedelight.com/loop-through-array-of-objects-javascript/
*/

const arrayDeObjetos = [
  {
    uno: 1,
    dos: 2,
  },
  {
    tres: 3,
    cuatro: 4,
  },
];
console.log(arrayDeObjetos);
/*
[
  { uno: 1, dos: 2 },
  { tres: 3, cuatro: 4 }
]
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */

const getObjects = arrayDeObjetos.map((objetoLiteral) => {
  console.log(objetoLiteral);

  return objetoLiteral;
});
/*
{ uno: 1, dos: 2 }
{ tres: 3, cuatro: 4 }
*/

console.log(getObjects);
/*
[
  { uno: 1, dos: 2 },
  { tres: 3, cuatro: 4 }
]
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .map()           █
 █ Object.entries() █
 █ .forEach()       █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach */

const getPropertyValue = arrayDeObjetos.map((objeto) => {
  Object.entries(objeto).forEach((entry) => {
    const [propiedad, valor] = entry;
    console.log(`${propiedad} ➜ ${valor}`);
  });

  return objeto;
});
/*
'uno    ➜ 1'
'dos    ➜ 2'
'tres   ➜ 3'
'cuatro ➜ 4'
*/

console.log(getPropertyValue);
/*
[
  { uno: 1, dos: 2 },
  { tres: 3, cuatro: 4 }
]
*/
