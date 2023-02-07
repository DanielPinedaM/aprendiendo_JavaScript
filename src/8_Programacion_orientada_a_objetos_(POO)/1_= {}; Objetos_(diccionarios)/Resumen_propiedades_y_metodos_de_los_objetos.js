/* eslint-disable no-prototype-builtins */
// @ts-nocheck
/* eslint-disable array-callback-return */
/* eslint-disable max-len */

/* -------------------------------------------------------------- */

/* Documentacion Oficial - propiedades y metodos del objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods */

/* -------------------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ longitud .length del objeto █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/

La longitud de un objeto literal {} es el numero de propiedades (claves) */

const fantasma = Symbol('fantasma');
console.log(fantasma);
// Symbol(fantasma)

const objSymbol = {
// propiedad: valor,
  [fantasma]: '👻', // Symbol()
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objSymbol);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  [Symbol(fantasma)]: '👻'
}
*/

//                     propiedades enumerables       + propiedades de tipo Symbol()
const longitudObjeto = Object.keys(objSymbol).length + Object.getOwnPropertySymbols(objSymbol).length;
console.log(longitudObjeto);
// 4

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.defineProperty()   █
 █ Object.defineProperties() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#adding_properties_and_default_values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#using_object.defineproperties

Agregar las siguientes propiedades al objeto literal:
* writable:
¿El objeto literal {} si (MUtable) se puede o no (INmutable) modificar?

* enumerable:
¿La propiedad: valor, esta oculta o es visible?

* configurable:
¿Puedo cambiar el valor de las propiedades value: writable: y enumerable: ?

* get
Funcion q se ejecuta al acceder a una propiedad,
su valor por defecto es undefined

* set
Funcion q se ejecuta cuando se asigna un valor a una propiedad,
su valor por defecto es undefined */

let objPropiedades = {};
console.log(objPropiedades);
// {}

/* Esta es la UNICA diferencia q hay entre
Object.defineProperty() y Object.defineProperties()

Object.defineProperty() permite agregar UNA SOLA propiedad: valor, */
Object.defineProperty(objPropiedades, 'uno', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});
console.log(objPropiedades);
/*
{
  uno: 1
}
*/

// Vaciar objPropiedades {}
objPropiedades = {};
console.log(objPropiedades);
// {}

/* En cambio, Object.defineProperties()
permite agregar una o mas pares de propiedad: valor, */
Object.defineProperties(objPropiedades, {
  uno: {
    value: 1,
    writable: true,
    configurable: true,
    enumerable: true,
  },
  dos: {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: true,
  },
});
console.log(objPropiedades);
/*
{
  uno: 1,
  dos: 2
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .propertyIsEnumerable() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable

¿La propiedad: valor, si es o no Enumerable?

|------------------------------|-------------------------|
| La propiedad: valor, esta... | .propertyIsEnumerable() |
|------------------------------|-------------------------|
| visible                      | enumerable: true,       |
|------------------------------|-------------------------|
| oculta                       | enumerable: false,      |
|------------------------------|-------------------------| */

const esEnumerable = {};
console.log(esEnumerable);
// {}

Object.defineProperties(esEnumerable, {
  uno: {
    value: 1,
    enumerable: false, // uno: 1, esta oculto
  },

  dos: {
    value: 2,
    enumerable: true, // dos: 2, es visible
  },
});
console.log(esEnumerable);
/*
{
  dos: 2
}
*/

console.log(esEnumerable.propertyIsEnumerable('uno')); // false
console.log(esEnumerable.propertyIsEnumerable('dos')); // true

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.keys() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

Convertir a array [] las propiedades (claves) enumerables del objeto {} */

console.log(esEnumerable);
/*
{
  dos: 2
}
*/

const keys = Object.keys(esEnumerable);
console.log(keys);
// [ 'dos' ]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.getOwnPropertyNames() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames

Convertir a array [] las propiedades (claves) enumerables y NO enumerables del objeto {} */

console.log(esEnumerable);
/*
{
  dos: 2
}
*/

const getOwnPropertyNames = Object.getOwnPropertyNames(esEnumerable);
console.log(getOwnPropertyNames);
// (2) ['uno', 'dos']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.values() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

Convertir a array [] los VALORES del objeto {} q tienen propiedades enumerables */

console.log(objSymbol);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  [Symbol(fantasma)]: '👻'
}
*/

const values = Object.values(objSymbol);
console.log(values);
// (3) [1, 2, 3]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.entries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

Convertir a array anidado que contiene [propiedad, valor] enumerables del objeto {} */

console.log(objSymbol);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  [Symbol(fantasma)]: '👻'
}
*/

const propiedadValor = Object.entries(objSymbol);
console.log(propiedadValor);
// (3) [ [ 'uno', 1 ], [ 'dos', 2 ], [ 'tres', 3 ] ]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.getOwnPropertySymbols() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols

Convertir a array [] las propiedades que son de tipo Symbol() */

console.log(objSymbol);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  [Symbol(fantasma)]: '👻'
}
*/

// Recorrer (iterar) propiedad: valor, de tipo Symbol() en un objeto literal {}
Object.getOwnPropertySymbols(objSymbol).map((propiedad) => {
  const valor = objSymbol[propiedad];
  console.log(propiedad, '➜', valor);
});
// Symbol(fantasma) ➜ 👻

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.assign(destino, ...origenes) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

Concatenar (unir) Objeto Literal {}

objetoLiteral1 {} (origen, source):
Son las propiedad: valor, q voy a COPIAR */
const source = {
  tres: 3,
  cuatro: 4,
};
console.log(source);
/*
{
  tres: 3,
  cuatro: 4
}
*/

/* objetoLiteral2 {} (destino, target):
Objeto donde voy a PEGAR las propiedad: valor, */
const target = {
  uno: 1,
  dos: 2,
};
console.log(target);
/*
{
  uno: 1,
  dos: 2
}
*/

/* Object.assign() En variable concatenar
COPIAR propiedad: valor, de objetoLiteral1 {} (origen, source)
y PEGARLO en objetoLiteral2 {} (destino, target) */
const concatenar = Object.assign(target, source);
console.log(concatenar);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  cuatro: 4
}
*/

// Los objetos concatenar y destino (target) son iguales
console.log(concatenar === target);
// true

/* Se ha modificado el objeto destino (target)
agregandole (concatenar) las propiedad: valor, de objeto origen (source) */
console.log(target);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  cuatro: 4
}
*/

// El objeto origen (source) NO se ha modificado
console.log(source);
/*
{
  tres: 3,
  cuatro: 4
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.create(proto, propertiesObject) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Object.create() Crear un Nuevo Objeto que Hereda las Propiedades y Métodos de un Objeto Existente (Prototipo) */

const prototipo = {
// propiedad: valor,
  saludar: () => 'hola mundo',
};

// Imprimir objeto literal {} prototipo
console.log(prototipo);
// { saludar: [Function: saludar] }

// Ejecutar metodo (funcion) saludar() del objeto literal {} prototipo
console.log(prototipo.saludar('hola mundo'));
// 'hola mundo'

/* Object.create()
El objetoHijo hereda todas las propiedades y metodos del objeto prototipo */
const objetoHijo = Object.create(prototipo);

// Imprimir por consola el objetoHijo
console.log(objetoHijo);
// {}

/* Agregar nuevo propiedad: valor, al objetoHijo
usando sintaxis nombreObjeto.nombreNuevaPropiedad = nuevoValor */
objetoHijo.uno = 1;

// Acceder al valor de la propiedad uno del objetoHijo
console.log(objetoHijo.uno);
// 1

/* El metodo (funcion) saludar() existe en el objetoHijo
porq se puede ejecutar con la sintaxis nombreObjeto.propiedad  */
console.log(objetoHijo.saludar());
// 'hola mundo'

/* A pesar de que el objetoHijo hereda las propiedades
y metodos del objeto padre prototipo,
cuando imprimo por consola console.log() el objetoHijo
NO se puede ver el metodo (funcion) saludar() */
console.log(objetoHijo);
// { uno: 1 }

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.freeze()            █
 █ Object.preventExtensions() █
 █ Object.seal()              █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

*/
