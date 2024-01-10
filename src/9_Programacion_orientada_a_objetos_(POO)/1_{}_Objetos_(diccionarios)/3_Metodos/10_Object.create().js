/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Métodos de Prototipo de Objeto

Object.create() Crear un Nuevo Objeto que Hereda las Propiedades y Métodos de un Objeto Existente (Prototipo)

Documentación Oficial...
- Object.create()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

- Prototipos de objetos:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

Object.create() crea un nuevo objeto literal {} a partir de un objeto literal existente

Sintaxis:
Object.create(proto, propertiesObject)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#syntax

Donde...
- Object.create()
Nombre del método

- proto
* Es obligatorio escribirlo

* Puede ser null o un objeto literal {}

* Cuando NO es null NI un objeto literal {},
entonces da error:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#exceptions

* Cuando proto es null, se crea un objeto literal vacio {}

* Se utiliza como prototipo para el nuevo objeto que se creará

* Es un objeto o null que se utiliza como prototipo para el nuevo objeto que se creará.

- propertiesObject
* Es opcional escribirlo

* Es un objeto que contiene una descripción de las propiedades que se agregarán al nuevo objeto.

Recordatorio:
Ver:
" 12.1.5.2.1) Diferencias y Similitudes Entre Object.defineProperty() y Object.defineProperties() - Agregar Propiedades de Objeto... "

* Las propiedad: valor, que puede agregar propertiesObject son
las mismas que Object.defineProperty() y Object.defineProperties() que son:
value:
writable:
enumerable:
configurable:
getters
setters */

/* --------------------------------------------------------------- */

/* Ejemplo 1
https://developser.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#try_it */

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
Hacer q el objetoHijo herede las propiedades y metodos de prototipo

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

/* A pesar de que el objetoHijo hereda las propiedades
y metodos del objeto padre prototipo,
cuando imprimo por consola console.log() el objetoHijo
NO se puede ver el metodo (funcion) saludar() */
console.log(objetoHijo);
// { uno: 1 }

/* --------------------------------------------------------------- */

/* Ejemplo 2 - proto = null
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects */

const protoNull = Object.create(null);
console.log(protoNull);
// [Object: null prototype] {}

/* --------------------------------------------------------------- */

// Ejemplo 3 - propertiesObject

const prototipo2 = {
// propiedad: valor,
  saludar: () => 'hola mundo',
};
console.log(prototipo2);
// { saludar: [Function: saludar] }

const objetoHijo2 = Object.create(prototipo2, {
  uno: {                // Propiedad del objeto literal
    value: 1,           // Valor del objeto literal
    enumerable: true,   // Hacer visible por consola la propiedad: valor,
    writable: true,     // La propiedad: valor, es MUtable (se puede modificar)
    configurable: true, // Permitir modificar los valores de value: enumerable: writable:
  },
});

// Imprimir objetoHijo2
console.log(objetoHijo2);
// { uno: 1 }

// Imprimir valor de la propiedad (clave) uno
console.log(objetoHijo2.uno);
// 1

// Ejecutar metodo (funcion) saludar() desde el objetoHijo2
console.log(objetoHijo2.saludar());
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 4:
Los ejemplos anteriores
que yo escribi en esta seccion son basicos,
pero en la MDN hay mas ejemplos:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#examples */
