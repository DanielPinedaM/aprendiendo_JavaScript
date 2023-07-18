// @ts-nocheck

/* -------------------------------------------------------------- */

/*
Importar libreria .group()

https://github.com/es-shims/Array.prototype.group

https://github.com/tc39/proposal-array-grouping

npm install -D array.prototype.group

En un futuro cuando .group() sea compatible con todos los navegadores
entonces NO habrá q instalar ninguna libreria para q funcione .group()

Can I Use - .group()
https://caniuse.com/mdn-javascript_builtins_array_group */

const assert = require('assert');
const group = require('array.prototype.group');

// when Array#group is present
const shimmed = group.shim();
assert.equal(shimmed, Array.prototype.group);

/* -------------------------------------------------------------- */

/*
Un array de objetos [ {} ] es un array []
q dentro contiene objetos {}

Para recorrer (iterar) un array de objetos [ {} ]
JUNTO las formas que hay para iterar arrays [] y objetos {}

A continuacion solo resumi las principales formas,
pero en este link hay mas formas:

Techie Delight - Recorrer (Iterar) Array de Objetos [ {} ]
https://www.techiedelight.com/loop-through-array-of-objects-javascript/
*/

/* -------------------------------------------------------------- */

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
https://youtu.be/FMubfnVET74

.map() obtener los objetos {}
q estan dentro del array de objetos [ {} ] */

const getObjects = arrayDeObjetos.map((objetoLiteral, i) => {
  console.log('i=', i, '➜', objetoLiteral);

  return objetoLiteral;
});
/*
'i=' 0 '➜' { uno: 'tres', dos: 'cuatro' }
'i=' 1 '➜' { uno: 'cinco', dos: 'seis' }
*/

console.log(getObjects);
/*
[
  { uno: 'tres', dos: 'cuatro' },
  { uno: 'cinco', dos: 'seis' }
]
*/

/* .map() Iterar array de objetos [ {} ]
SI conozco los nombres de las propiedades */

const getValue = arrayDeObjetos.map((objetoLiteral) => {
  console.log(objetoLiteral.uno);
  console.log(objetoLiteral.dos);
  console.log('---');

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
  console.log('---');

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
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .group() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/LnqjvuwA83s

.group() AGRUPAR array [] dependiendo de la condición de la función

.group() Iterar array de objetos [ {} ]
SI conozco los nombres de las propiedades

Con la desestructuracion { uno, dos }
puedo acceder a cada uno de los valores de la propiedad del objeto {}
q esta dentro del array de objetos [ {} ] */

const agrupar = arrayDeObjetos.group(({ uno, dos }, i) => {
  console.log(`i=${i} → uno → ${uno}`);
  console.log(`i=${i} → dos → ${dos}`);
  console.log('---');

  return 'nombrePropiedad';
});
/*
i=0 → uno → tres
i=0 → dos → cuatro
---
i=1 → uno → cinco
i=1 → dos → seis
---
*/

console.log(agrupar.nombrePropiedad);
/*
[
  { uno: 'tres', dos: 'cuatro' },
  { uno: 'cinco', dos: 'seis' }
]
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.keys() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Convertir a Array [] las Propiedades (Claves) del Objeto {}

Object.keys() obtener SOLAMENTE las propiedades
cuando el nombre de las propiedades es DESCONOCIDA

Se ELIMINAN los nombres de las propiedades repetidas

[0] significa q se obtienen
las propiedades del objeto
q esta en la posicion (indice) 0
del array de objetos, es decir, estas propiedades:
{
  uno: 'tres',
  dos: 'cuatro',
}, */

const getProperty = Object.keys(arrayDeObjetos[0]);
console.log(getProperty);
// (2) ['uno', 'dos']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.entries() █
 █ .map()           █
 █ .forEach()       █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Recordatorio:
Ver:
" 9.4.3.1) Resumen: Diferencia Entre .forEach() .map() .filter() .reduce() .find() "

Iterar arrayDeObjetos [ {} ]
para obtener las propiedad: valor,
cuando el nombre de las propiedades es DESCONOCIDO

Se itera 2 veces:
1) .map() obtener los objetos {}
q estan dentro del array de objetos [ {} ]  */
const getPropertyValue = arrayDeObjetos.map((objeto) => {
  /* 2) Object.entries() y .forEach()
     Obtener las propiedad: valor,
     q son los elementos del array de objetos */
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
