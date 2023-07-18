/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
// @ts-nocheck

/* --------------------------------------------------------------- */

/* Tutorial de Midudev - Recorrer (iterar) objetoLiteral {}
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

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */

const ObjectKeys = Object.keys(objetoLiteral);
console.log(ObjectKeys);
// (3) ['uno', 'dos', 'tres']

for (const propiedad of ObjectKeys) {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
}
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

for in para iterar objetoLiteral es MALA PRACTICA:
https://stackoverflow.com/questions/1963102/what-does-the-jslint-error-body-of-a-for-in-should-be-wrapped-in-an-if-statemen

https://eslint.org/docs/latest/rules/no-restricted-syntax

https://eslint.org/docs/latest/rules/guard-for-in */

for (const propiedad in objetoLiteral) {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
}
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.keys() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Recordatorio:
Ver:
" Ejemplo 1 - Diferencia Entre Object.keys() y Object.getOwnPropertyNames() "

Object.keys() Convierte a array []
              SOLAMENTE las propiedades enumerables,
              NO devuelve propiedades de tipo Symbol(),
              con la propiedad puedo obtener el valor del objetoLiteral {}

.map()        Devolver un Nuevo Array con el Resultado de Ejecutar una Función
              a Cada Uno de los Elementos de un Array Existente (Mapear Array) */

const getProperty = Object.keys(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);

  return propiedad;
});
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

console.log(getProperty);
// (3) ['uno', 'dos', 'tres']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.getOwnPropertyNames() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames

Recordatorio:
Ver:
" Ejemplo 1 - Diferencia Entre Object.keys() y Object.getOwnPropertyNames() "

Object.getOwnPropertyNames() Convierte a array []
las propiedades enumerables y no enumerables,
NO devuelve propiedades de tipo Symbol(),
con la propiedad puedo obtener el valor del objetoLiteral {} */

const getProperty2 = Object.getOwnPropertyNames(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);

  return propiedad;
});
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

console.log(getProperty2);
// (3) ['uno', 'dos', 'tres']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

Convertir a array [] los valores del objetoLiteral {} */

const getValues = Object.values(objetoLiteral).map((valor, i) => {
  console.log(`i=${i} ➜ valor=`, valor);

  return valor;
});
/*
'i=0 ➜ valor=' 1
'i=1 ➜ valor=' 2
'i=2 ➜ valor=' 3
*/

console.log(getValues);
// (3) [1, 2, 3]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

Recordatorio:
Ver:
" Ejemplo 1 - Diferencia Entre Object.entries() y Object.fromEntries() "

Object.entries() es la MEJOR FORMA de iterar objetoLiteral {}

Convertir el objetoLiteral {} a array [],
el array contiene pares de [propiedad, valor] enumerables */

const entries = Object.entries(objetoLiteral).map((entry) => {
  const [propiedad, valor] = entry;
  console.log(`${propiedad} ➜ ${valor}`);

  return [propiedad, valor];
});
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

console.log(entries);
/*
(3) [
      [ 'uno', 1 ],
      [ 'dos', 2 ],
      [ 'tres', 3 ]
    ]
*/
