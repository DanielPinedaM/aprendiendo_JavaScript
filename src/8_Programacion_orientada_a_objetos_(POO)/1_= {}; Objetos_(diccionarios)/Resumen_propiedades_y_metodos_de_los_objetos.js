/* eslint-disable no-compare-neg-zero */
/* eslint-disable no-self-compare */
/* eslint-disable use-isnan */

/* eslint-disable no-prototype-builtins */
// @ts-nocheck
/* eslint-disable array-callback-return */
/* eslint-disable max-len */

/* -------------------------------------------------------------- */

/* Documentacion Oficial - propiedades y metodos del objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods */

/* -------------------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ .length █
 ▀▀▀▀▀▀▀▀▀▀▀
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/

La longitud .length de un objeto literal {} es el numero de propiedades (claves) */

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
const longitudObjeto =  Object.keys(objSymbol).length + Object.getOwnPropertySymbols(objSymbol).length;
console.log(longitudObjeto);
// 4

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.defineProperty()   █
 █ Object.defineProperties() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#adding_properties_and_default_values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#using_object.defineproperties

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty

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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.getOwnPropertyDescriptor()  █
 █ Object.getOwnPropertyDescriptors() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

Obtener las siguientes propiedades (descripción) del objeto literal:
value:
writable:
enumerable:
configurable:
get
set */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
  dos: 2,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
}
*/

/* Object.getOwnPropertyDescriptor()
Obtener la descripción de UNA SOLA propiedad en específico del objeto literal */
let unaPropiedad = Object.getOwnPropertyDescriptor(objetoLiteral, 'uno');
console.log(unaPropiedad);
/*
{
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
}
*/

unaPropiedad = Object.getOwnPropertyDescriptor(objetoLiteral, 'dos');
console.log(unaPropiedad);
/*
{
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true
}
*/

/* Object.getOwnPropertyDescriptors()
Obtener TODAS las descripciones de las propiedades del objeto literal */
const todasLasPropiedades = Object.getOwnPropertyDescriptors(objetoLiteral);
console.log(todasLasPropiedades);
/*
{
  uno: { value: 1, writable: true, enumerable: true, configurable: true },
  dos: { value: 2, writable: true, enumerable: true, configurable: true }
}
*/

// Acceder a valores de las propiedades en especifico de Object.getOwnPropertyDescriptors()
console.log(todasLasPropiedades.uno.value);        // 1
console.log(todasLasPropiedades.uno.writable);     // true

console.log(todasLasPropiedades.dos.value);        // 2
console.log(todasLasPropiedades.dos.configurable); // true

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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.entries()     █
 █ Object.fromEntries() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
Object.entries() y Object.fromEntries() hacen lo opuesto */
console.log(objSymbol);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  [Symbol(fantasma)]: '👻'
}
*/

/* Object.entries() Convertir a array anidado que contiene [propiedad, valor] enumerables del objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries */
const entries = Object.entries(objSymbol);
console.log(entries);
/*
(3) [
      [ 'uno', 1 ],
      [ 'dos', 2 ],
      [ 'tres', 3 ]
    ]
*/

/* Object.fromEntries() Convertir de array anidado que contiene [propiedad, valor] a objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries */
const fromEntries = Object.fromEntries(entries);
console.log(fromEntries);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

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

/* Modificar el objeto destino (target)
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

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

Object.create() Crear un Nuevo Objeto que Hereda las Propiedades y Métodos de un Objeto Existente (Prototipo) */

const prototipo = {
// propiedad: valor,
  saludar: () => 'hola mundo',
};
console.log(prototipo);
// { saludar: [Function: saludar] }

// Ejecutar metodo (funcion) saludar() del objeto literal {} prototipo
console.log(prototipo.saludar('hola mundo'));
// 'hola mundo'

/* Object.create()
Hacer q objetoHijo herede las propiedades y metodos de prototipo

prototipo tiene la propiedad: valor, { saludar: [Function: saludar] }

En objetoHijo { __proto__: { saludar: [Function: saludar] } }
se crea una nueva propiedad llamada __proto__
q tiene como valor { saludar: [Function: saludar] } */

const objetoHijo = Object.create(prototipo);
console.log(objetoHijo);
// { __proto__: { saludar: ƒ saludar() } }

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

/* A pesar de que objetoHijo hereda las propiedades
y metodos del objeto padre prototipo,
cuando imprimo por consola console.log() el objetoHijo
NO se puede ver el metodo (funcion) saludar() */
console.log(objetoHijo);
// { uno: 1 }

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.getPrototypeOf() █
 █ Object.setPrototypeOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

El valor del prototipo esta en la propiedad interna [[Prototype]]

Object.setPrototypeOf() ESTABLECER el Valor del Prototipo __proto__ de un objeto1 a otro objeto2. Cuando no se establece es null

Object.getPrototypeOf() OBTENER el Valor del Prototipo __proto__ del Objeto

El siguiente ejemplo explica la diferencia entre
Object.getPrototypeOf() y Object.setPrototypeOf() */

// Crear obj objeto hijo vacio {}
const obj = {};
console.log(obj);
// {}

/* Crear prototype objeto padre

Acceder a valor de propiedad uno
del objeto literal llamado prototype

Originalmente prototype SI tiene la propiedad uno */
const prototype = { uno: 1 };
console.log(prototype.uno);
// 1

/* Hasta el momento:
1) obj NO tiene la propiedad uno */
console.log(obj.uno);
// undefined

/* 2) Con Object.getPrototypeOf() puedo ver (acceder) al valor de la propiedad __proto__
q en ambos objetos obj y prototype es null,
esto sucede porq no he usado Object.setPrototypeOf() para definir el valor de __proto__
por esto antes copie "Cuando no se establece es null" */
console.log(Object.getPrototypeOf(obj));       // [Object: null prototype] {}
console.log(Object.getPrototypeOf(prototype)); // [Object: null prototype] {}

/* Object.setPrototypeOf() Al obj q esta vacio {}
definirle el valor de la propiedad prototipo __proto__

Las propiedad: valor, del objeto1 llamado prototype q son { uno: 1 }
se copian en el valor de la propiedad __proto__ del otro objeto2 llamado obj */
Object.setPrototypeOf(obj, prototype);
// { __proto__: { uno: 1 } }

/* Ahora:
1) Ambos objetos prototype y obj
tienen las mismas propiedad: valor, */
console.log(prototype.uno); // 1
console.log(obj.uno);       // 1

/* 2) Object.getPrototypeOf()
El prototipo (valor de la propiedad __proto__) de obj
contiene las mismas propiedad: valor, que prototype

El prototipo de prototype es null porq es el objeto padre */
console.log(Object.getPrototypeOf(obj));       // { uno: 1 }
console.log(Object.getPrototypeOf(prototype)); // [Object: null prototype] {}

/* Imprimir propiedad: valor, de los objetos

El objeto hijo obj { __proto__: { uno: 1 } }
hereda las propiedades y metodos del objeto padre prototype { uno: 1 } */
console.log(prototype); // { uno: 1 }
console.log(obj);       // { __proto__: { uno: 1 } }

/* Tutorial - Midudev Object.entries() recorrer (iterar) objeto literal {}
https://youtu.be/Mz9HSiXSSVU

Al iterar el objeto prototype imprime las propiedad: valor,
con las q lo defini q son { uno: 1 } */
Object.entries(prototype).map((entry) => {
  const [propiedad, valor] = entry;
  console.log(`${propiedad} ➜ ${valor}`);
});
// uno ➜ 1

/* En cambio, al iterar obj imprime un array vacio [] porq
el obj tiene las propiedad: valor, del prototipo __proto__ */
Object.entries(obj).map((entry) => {
  const [propiedad, valor] = entry;
  console.log(`${propiedad} ➜ ${valor}`);
});
// []

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .isPrototypeOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
Stack Overflow - Diferencia Entre .isPrototypeOf() y instanceof
https://stackoverflow.com/questions/2464426/whats-the-difference-between-isprototypeof-and-instanceof-in-javascript

¿El objeto1 si está o no en la Cadena de Prototipos de Otro objeto2? */

// Objeto padre q NO tiene prototipo
const objetoLiteral1 = Object.create(Object.prototype);
console.log(objetoLiteral1);
// {}

/* Prototipo (objetos hijos):
objetoLiteral2 -> objetoLiteral1

Crear objetoLiteral2 con el objetoLiteral1 como prototipo */
const objetoLiteral2 = Object.create(objetoLiteral1);
console.log(objetoLiteral2);
// {}

/* Prototipo (objetos hijos):
objetoLiteral3 -> objetoLiteral2 -> objetoLiteral1

Crear un objetoLiteral3 con el objetoLiteral2 como prototipo
q es prototipo de objetoLiteral1 */
const objetoLiteral3 = Object.create(objetoLiteral2);
console.log(objetoLiteral3); // {}

// Agregar nuevas propiedad: valor, a los objetos literales {}
objetoLiteral1.uno = 1; // nombreObjeto.nuevaPropiedad = nuevoValor
objetoLiteral2.dos = 2;
objetoLiteral3.tres = 3;

/* __proto__ (prototipo)
son las propiedaes de un objeto1
q hacen referencia a las propiedades de otro objeto2

Imprimir los objetos literales {} */
console.log(objetoLiteral1); // { uno: 1 }
console.log(objetoLiteral2); // { dos: 2, __proto__: { uno: 1 } }
console.log(objetoLiteral3); // { tres: 3, __proto__: { dos: 2, uno: 1 } }

// Acceder a los valores de las propiedades y metodos de los prototipos
console.log(objetoLiteral2.uno); // 1

console.log(objetoLiteral3.uno); // 1
console.log(objetoLiteral3.dos); // 2

/* .isPrototypeOf()
¿El objeto1 si está o no en la Cadena de Prototipos de Otro objeto2? */
console.log(objetoLiteral1.isPrototypeOf(objetoLiteral2));   // true
console.log(objetoLiteral2.isPrototypeOf(objetoLiteral1));   // false

console.log(objetoLiteral2.isPrototypeOf(objetoLiteral3));   // true
console.log(objetoLiteral3.isPrototypeOf(objetoLiteral2));   // false

console.log(Object.prototype.isPrototypeOf(objetoLiteral1)); // true
console.log(Object.prototype.isPrototypeOf(objetoLiteral2)); // true
console.log(Object.prototype.isPrototypeOf(objetoLiteral3)); // true

/*
Recordatorio:
Ver:
" 12.1.5.2.14) Diferencias y Similitudes Entre .hasOwnProperty() (Mala Práctica) y Object.hasOwn() (Buena Práctica) - ¿Si Existe o no la Propiedad Propia (NO Heredada) en el Objeto? "

Object.hasOwn() devuelve true porq en el objetoLiteral1 { uno: 1 }
se cumplen TODAS las siguientes condiciones:
1) La propiedad 'uno' SI existe en objetoLiteral1

2) En objetoLiteral1 la propiedad 'uno' NO es un prototipo __proto__ */

console.log(Object.hasOwn(objetoLiteral1, 'uno')); // true

/* Object.hasOwn() devuelve false
porq las propiedades 'uno' y 'dos' SI existen en los objetos
objetoLiteral2 { dos: 2, __proto__: { uno: 1 } }
y objetoLiteral3 { tres: 3, __proto__: { dos: 2, uno: 1 } }
PERO son Object.create() prototipos, es decir,
q estan como valor de la propiedad __proto__ */
console.log(Object.hasOwn(objetoLiteral2, 'uno')); // false

console.log(Object.hasOwn(objetoLiteral3, 'uno')); // false
console.log(Object.hasOwn(objetoLiteral3, 'dos')); // false

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.freeze()            █
 █ Object.seal()              █
 █ Object.preventExtensions() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://javascript.plainenglish.io/object-freeze-vs-object-seal-vs-object-preventextensions-e78ef3a24201

Objeto inmutable
(que NO se puede modificar)

                                                         |-----------------------------|---------------------------|----------------------------------------|
                                                         | Object.freeze()             | Object.seal()             | Object.preventExtensions()             |
                                                         | Object.isFrozen()           | Object.isSealed()         | Object.isExtensible()                  |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Hace que el objeto literal {}                         | ✓                           | ✓                         | ✓                                      |
| sea inmutable (que NO se pueda modificar)              |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Permite MODIFICAR                                     | X                           | ✓                         | ✓                                      |
| el valor de la propiedad?                              |                             |                           |                                        |
|                                                        |                             |                           |                                        |
| nombreObjeto.nombrePropiedadExistente = 'nuevo valor'; |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Permite ELIMINAR                                      | X                           | X                         | ✓                                      |
| propiedad: valor, ?                                    |                             |                           |                                        |
|                                                        |                             |                           |                                        |
| delete nombreObjeto.nombrePropiedadExistente;          |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Permite AGREGAR                                       | X                           | X                         | X                                      |
| una nueva propiedad: valor, ?                          |                             |                           |                                        |
|                                                        |                             |                           |                                        |
| nombreObjeto.nombreNuevaPropiedad = 'nuevo valor';     |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| Sintaxis                                               | Object.freeze(nombreObjeto) | Object.seal(nombreObjeto) | Object.preventExtensions(nombreObjeto) |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.freeze() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze */

let inmutable = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

Object.freeze(inmutable);

// MODIFICAR valor 1 de la propiedad 'uno'
inmutable.uno = 'nuevo valor'; // NO hace nada, el valor sigue siendo 1

// ELIMINAR propiedad: valor,
delete inmutable.dos; // NO hace nada, la propiedad: valor, dos: 2, sigue existiendo

// AGREGAR una nueva propiedad: valor,
inmutable.cuatro = 4; // NO hace nada, NO agrega cuatro: 4, al objeto literal

// El objeto NO se modifico
console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.seal() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal */

inmutable = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

Object.seal(inmutable);

inmutable.uno = 'nuevo valor'; // el valor se MODIFICA a uno: 'nuevo valor',
delete inmutable.dos;          // NO hace nada, la propiedad: valor, dos: 2, sigue existiendo
inmutable.cuatro = 4;          // NO hace nada, NO agrega cuatro: 4, al objeto literal

console.log(inmutable);
/*
{
  uno: 'nuevo valor',
  dos: 2,
  tres: 3
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.preventExtensions() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions */

inmutable = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

Object.preventExtensions(inmutable);

inmutable.uno = 'nuevo valor'; // el valor se MODIFICA a uno: 'nuevo valor',
delete inmutable.dos;          // se ELIMINA dos: 2,
inmutable.cuatro = 4;          // NO hace nada, NO agrega cuatro: 4, al objeto literal

console.log(inmutable);
/*
{
  uno: 'nuevo valor',
  tres: 3
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.isFrozen()     █
 █ Object.isSealed()     █
 █ Object.isExtensible() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible

¿El Objeto es INmutable o MUtable?

NO te enredes entediendo esto,
en el cuadro anterior de
Object.freeze() Object.preventExtensions() Object.seal()
esta resumido TODO */

const vacioFreeze = Object.freeze({});
const datosFreeze = Object.freeze({ uno: 1 });

console.log(Object.isFrozen(vacioFreeze));     // true
console.log(Object.isFrozen(datosFreeze));     // true

console.log(Object.isSealed(vacioFreeze));     // true
console.log(Object.isSealed(datosFreeze));     // true

console.log(Object.isExtensible(vacioFreeze)); // false
console.log(Object.isExtensible(datosFreeze)); // false

/* --- */

const vacioSeal = Object.seal({});
const datosSeal = Object.seal({ uno: 1 });

console.log(Object.isFrozen(vacioSeal));     // true
console.log(Object.isFrozen(datosSeal));     // false

console.log(Object.isSealed(vacioSeal));     // true
console.log(Object.isSealed(datosSeal));     // true

console.log(Object.isExtensible(vacioSeal)); // false
console.log(Object.isExtensible(datosSeal)); // false

/* --- */

const vacioPreventExtensions = Object.preventExtensions({});
const datosPreventExtensions = Object.preventExtensions({ uno: 1 });

console.log(Object.isFrozen(vacioPreventExtensions));     // true
console.log(Object.isFrozen(datosPreventExtensions));     // false

console.log(Object.isSealed(vacioPreventExtensions));     // true
console.log(Object.isSealed(datosPreventExtensions));     // false

console.log(Object.isExtensible(vacioPreventExtensions)); // false
console.log(Object.isExtensible(datosPreventExtensions)); // false

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.is() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

Stack Overflow - Diferencia Entre === y Object.is()
https://stackoverflow.com/questions/30543190/object-is-vs

=== hace exactamente lo mismo q Object.is(),
ambos comparan el valor y tipo de dato.
Las unicas diferencias son:

1) Para === +0 (positivo) y -0 (negativo) son lo mismo,
en cambio para Object.is() son diferentes */
console.log(+0 === -0);         // true
console.log(Object.is(+0, -0)); // false

/* 2) Para === NaN y NaN son diferentes,
en cambio para Object.is() son lo mismo */
console.log(NaN === NaN);         // false
console.log(Object.is(NaN, NaN)); // true

/* 3) Igual que ocurre en 2)
para === Number.NaN y Number.NaN son diferentes
en cambio para Object.is() son lo mismo */
console.log(Number.NaN === Number.NaN);         // false
console.log(Object.is(Number.NaN, Number.NaN)); // true

/* 4) Para === NaN y Number.NaN son diferentes
en cambio para Object.is() son iguales */
console.log(NaN === Number.NaN);         // false
console.log(Object.is(NaN, Number.NaN)); // true

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .hasOwnProperty() █
 █ Object.hasOwn()   █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

.hasOwnProperty() (mala practica) esta obsoleto
y ha sido reemplazado por Object.hasOwn() (buena practica),
para la explicacion de esto, ver:
https://stackoverflow.com/questions/69561596/object-hasown-vs-object-prototype-hasownproperty

¿Si Existe o no la Propiedad Propia (NO Heredada) en el Objeto? */

console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
}
*/

/* Ambos .hasOwnProperty() y Object.hasOwn()
devuelven true porq la propiedad 'uno' SI esta en el objetoLiteral */
console.log(objetoLiteral.hasOwnProperty('uno')); // true -> MALA PRACTICA
console.log(Object.hasOwn(objetoLiteral, 'uno')); // true -> BUENA PRACTICA

/* Ambos .hasOwnProperty() y Object.hasOwn()
devuelven false porq la propiedad
'propiedadInexistente' NO esta en el objetoLiteral */
console.log(objetoLiteral.hasOwnProperty('propiedadInexistente')); // false
console.log(Object.hasOwn(objetoLiteral, 'propiedadInexistente')); // false

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .valueOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

Convertir de Tipo Objeto a Dato Primitivo

.valueOf() es MALA PRACTICA, debes usar:
String()
Number()
Boolean()
segun el tipo de dato q necesites convertir */

const objetoThis = {
  value: '42',
  valueOf() {
    return this.value;
  },
};
console.log(objetoThis);
/*
{
  value: '42',
  valueOf: [Function: valueOf]
}
*/

/* El valor de la propiedad value
es de tipo String() porq esta entre comillas "" */
console.log(objetoThis.value);        // '42'
console.log(typeof objetoThis.value); // 'string'

/* .valueOf() devuelve lo mismo q objetoThis.value
q es el numero '42' en tipo String() */

console.log(objetoThis.valueOf());                      // '42' -> .valueOf() MALA PRACTICA
console.log(objetoThis.value === objetoThis.valueOf()); // true
console.log(typeof objetoThis.valueOf());               // 'string'

// En cambio, Number() convierte a tipo numero 42
console.log(Number(objetoThis));        // 42 -> Number() BUENA PRACTICA
console.log(typeof Number(objetoThis)); // 'number'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.toString()       █
 █ Object.toLocaleString() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString

Esto lo escribi en otra seccion, ver:
- " 8.5.3.22) Diferencia Entre String() y .toString() - Convertir a Texto (String) "

- " 9.4.3.6) Diferencias y Similitudes Entre .join() Intl.ListFormat() .toString() .toLocaleString() - Convertir de Array a String (Texto) "

Idioma locales BCP 47 admitidos por .toLocaleString()
https://www.techonthenet.com/js/language_tags.php

Convertir de objeto Date fecha a string

objetoDate imprime en consola un resultado diferente
dependiendo donde se ejecute el codigo de JS: */

const objetoDate = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(objetoDate);
// Wed Dec 19 2012 22:00:00 GMT-0500 (hora estándar de Colombia) -> Navegador de Chrome
// 2012-12-20T03:00:00.000Z                                      -> NodeJS

// objetoDate es de tipo typeof objeto
console.log(typeof objetoDate);
// 'object'

/* Para convertir a texto SIEMPRE,
sin importar el tipo de dato
es buena practica usar String() porque:
1) La diferencia en .toString() y .toLocaleString()
es en caracteres muy especificos,
cuando se usa para convetir a texto en español e ingles son lo mismo

2) null.toString() y undefined.toString()
dan error, en cambio
String(null) y String(undefined) NO */

console.log(String(objetoDate));                 // 'Wed Dec 19 2012 22:00:00 GMT-0500 (hora estándar de Colombia)'

console.log(objetoDate.toString());              // 'Wed Dec 19 2012 22:00:00 GMT-0500 (hora estándar de Colombia)'

console.log(objetoDate.toLocaleString());        // '19/12/2012, 10:00:00 p.m.'
console.log(objetoDate.toLocaleString('es-ES')); // '19/12/2012, 22:00:00'
console.log(objetoDate.toLocaleString('en-US')); // '12/19/2012, 10:00:00 PM'
console.log(objetoDate.toLocaleString('de'));    // '19.12.2012, 22:00:00'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.prototype.constructor █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

Propiedad Object.prototype.constructor constructor del objeto

crea un constructor Tree
y un objeto de ese tipo theTree */

function Tree(nombre) {
  this.nombre = nombre;
}

/* Imprimir theTree.constructor
la propiedad constructor del objeto theTree */
const theTree = new Tree('hola mundo');

console.log(theTree);
// Tree { nombre: 'hola mundo' }

console.log(`${theTree.constructor}`);
/*
'function Tree(nombre) {
  this.nombre = nombre;
}'
*/
