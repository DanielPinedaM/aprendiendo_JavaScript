// @ts-nocheck

/*
Para recorrer (iterar) un array de objetos [ {} ]
JUNTO las formas que hay para iterar arrays [] y objetos {}

A continuacion solo resumi las principales formas,
pero en este link hay mas formas:

Techie Delight - Recorrer (Iterar) Array de Objetos [ {} ]
https://www.techiedelight.com/loop-through-array-of-objects-javascript/
*/

const arrayDeObjetos = [
  {
    uno: 'tres',
    dos: 'cuatro',
  },
  {
    uno: 'cinco',
    dos: 'seis',
  },
];
console.log(arrayDeObjetos);
/*
[
  { uno: 'tres', dos: 'cuatro' },
  { uno: 'cinco', dos: 'seis' }
]
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

.map() obtener los objetos {}
q estan dentro del array de objetos [ {} ] */

const getObjects = arrayDeObjetos.map((objetoLiteral) => {
  console.log(objetoLiteral);

  return objetoLiteral;
});
/*
{ uno: 'tres', dos: 'cuatro' }
{ uno: 'cinco', dos: 'seis' }
*/

console.log(getObjects);
/*
[
  { uno: 'tres', dos: 'cuatro' },
  { uno: 'cinco', dos: 'seis' }
]
*/

/* .map() Iterar array de objetos [ {} ]
SI conozco los nombres de las propiedades  */

const getValue = arrayDeObjetos.map((objetoLiteral) => {
  console.log(objetoLiteral.uno);
  console.log(objetoLiteral.dos);

  return [objetoLiteral.uno, objetoLiteral.dos];
});
/*
'tres'
'cuatro'
'cinco'
'seis'
*/

console.log(getValue.flat(Infinity));
// (4) [ 'tres', 'cuatro', 'cinco', 'seis' ]

const getValue2 = arrayDeObjetos.map((_, indice) => {
  console.log(arrayDeObjetos[indice].uno);
  console.log(arrayDeObjetos[indice].dos);

  return [arrayDeObjetos[indice].uno, arrayDeObjetos[indice].dos];
});
/*
'tres'
'cuatro'
'cinco'
'seis'
*/

console.log(getValue2.flat(Infinity));
// (4) ['tres', 'cuatro', 'cinco', 'seis']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.keys() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Object.keys() Iterar array de objetos [ {} ]
para obtener SOLAMENTE las propiedades
cuando el nombre de las propiedades es DESCONOCIDA

Se ELIMINAN los nombres de las propiedades repetidas */

const getProperty = Object.keys(arrayDeObjetos[0]);
console.log(getProperty);
// (2) ['uno', 'dos']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .map()           █
 █ Object.entries() █
 █ .forEach()       █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Iterar array de objetos [ {} ]
para obtener las propiedad: valor,
cuando el nombre de las propiedades es DESCONOCIDO

Se itera 2 veces:
1) .map() obtener los objetos {}
q estan dentro del array de objetos [ {} ]

2) Object.entries() y .forEach()
Obtener las propiedad: valor, */

const getPropertyValue = arrayDeObjetos.map((objeto) => {
  Object.entries(objeto).forEach((entry) => {
    const [propiedad, valor] = entry;
    console.log(`${propiedad} ➜ ${valor}`);
  });

  return objeto;
});
/*
'uno ➜ tres'
'dos ➜ cuatro'
'uno ➜ cinco'
'dos ➜ seis'
*/

console.log(getPropertyValue);
/*
[
  { uno: 'tres', dos: 'cuatro' },
  { uno: 'cinco', dos: 'seis' }
]
*/
