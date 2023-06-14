/* eslint-disable max-len */
/* eslint-disable no-shadow */
// @ts-nocheck

/* --------------------------------------------------------------- */

/* Un objetoDeObjetos u objeto anidado { {} }
es un objeto literal {} q contiene mas objetos */

const objetoDeObjetos = {
// propiedad: valor,
  par: { dos: 2, cuatro: 4 },
  impar: { uno: 1, tres: 3 },
};
console.log(objetoDeObjetos);
/*
{
  par:   { dos: 2, cuatro: 4 },
  impar: { uno: 1, tres: 3 },
};
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.keys() █
 █ .map()        █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Object.keys() Convertir a Array [] las Propiedades (Claves) del Objeto {}

Object.keys() Obtener el nombre de las propiedades del objeto padre objetoDeObjetos

.map() Devolver un Nuevo Array
con el Resultado de Ejecutar
una Función a Cada Uno
de los Elementos de un Array Existente (Mapear Array)

Object.keys() y .map() iterar las PROPIEDADES del objetoDeObjetos */

const getProperty = Object.keys(objetoDeObjetos).map((elemento, i) => {
  console.log(`i=${i} ➜ elemento=${elemento}`);

  return elemento;
});
/*
'i=0 ➜ elemento=par'
'i=1 ➜ elemento=impar'
*/

console.log(getProperty);
// (2) ['par', 'impar']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

Object.values() Convertir a Array [] los Valores Enumerables del Objeto {}

En un objetoDeObjetos { {} } Object.values()
devuelve un array de objetos [ {} ]
q contiene los valores del objetoDeObjetos

Object.values() y .map() iterar los VALORES del objetoDeObjetos */

const getValues = Object.values(objetoDeObjetos).map((valor, i) => {
  console.log(`i=${i} ➜ valor=`, valor);

  return valor;
});
/*
'i=0 ➜ valor=' { dos: 2, cuatro: 4 }
'i=1 ➜ valor=' { uno: 1, tres: 3 }
*/

console.log(getValues);
/*
[
  {
    dos: 2,
    cuatro: 4
  },
  {
    uno: 1,
    tres: 3
  }
]
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.entries() █
 █ .map()           █
 █ .forEach()       █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Iterar objetoDeObjetos { {} }
para obtener las propiedad: valor,
cuando el nombre de las propiedades es DESCONOCIDO

Se itera 2 veces:
1) Obtener nombre propiedades
del objeto padre objetoDeObjetos
q son par e impar */
const getValues2 = Object.entries(objetoDeObjetos).map(([propiedad, valor]) => {
  console.log(`propiedad objeto padre ➜ ${propiedad}`);
  /*
    'propiedad objeto padre ➜ par'
    'propiedad objeto padre ➜ impar'
  */

  console.log('valor objeto padre ➜', valor);
  /*
    'valor objeto padre ➜' { dos: 2, cuatro: 4 }
    'valor objeto padre ➜' { uno: 1, tres: 3 }
  */

  /* 2) iterar los valores del objeto padre objetoDeObjetos
     q son { dos: 2, cuatro: 4 } y { uno: 1, tres: 3 } */
  Object.entries(valor).forEach(([propiedad, valor]) => {
    console.log(`${propiedad} ➜ ${valor}`);
  });
  console.log('---');
  /*
    'dos    ➜ 2'
    'cuatro ➜ 4'
    '---'
    'uno    ➜ 1'
    'tres   ➜ 3'
    '---'
  */

  return valor;
});

/* Object.entries(), .map() y .forEach() juntos
retornan lo mismo q Object.values() */
console.log(getValues2);
/*
[
  {
    dos: 2,
    cuatro: 4
  },
  {
    uno: 1,
    tres: 3
  }
]
*/
