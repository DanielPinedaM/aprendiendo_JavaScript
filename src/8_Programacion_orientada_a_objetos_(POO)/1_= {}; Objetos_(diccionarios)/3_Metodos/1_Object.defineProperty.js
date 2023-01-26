/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
// @ts-nocheck

/* Samantha Ming - ¿Que son las propiedades enumerables y no enumerables?
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length

Documentación Oficial...
- Clasificación de las Propiedades de los Objetos:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

- Object.defineProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

- Object.defineProperties()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

La sintaxis de Object.defineProperty() es:
Object.defineProperty(nombreObjeto, nombrePropiedad, descripcionPropiedad)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#syntax

La sintaxis de Object.defineProperties() es:
Object.defineProperties(nombreObjeto, nombresPropiedades)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#syntax

Donde...
- Object.defineProperty() y Object.defineProperties()
Es el nombre del metodo

-

A continuacion explicare con ejemplos
cada una de las propiedades que se pueden agregar
con Object.defineProperty() y Object.defineProperties() */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - enumerable - ¿Que son las propiedades enumerables (visible) y no enumerables (oculta)?

https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/#what-are-enumerables

https://2ality.com/2015/10/enumerability-es6.html

Al crear objeto con notacion de dos puntos el valor por defecto es enumerable: true,

Normalmente los objetos literales {} se definen con la sintaxis de dos puntos: */
let objetoLiteral = {
// propiedad: valor,
  uno: 1,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
}
*/

/* .propertyIsEnumerable()
true = la propiedad: valor, es enumerable = la propiedad: valor, es visible */
console.log(objetoLiteral.propertyIsEnumerable('uno'));
// true

// Vaciar objeto literal
objetoLiteral = {};
console.log(objetoLiteral);
// {}

/* Tambien puedo usar Object.defineProperty() para editar la propiedad enumerable

Al crear objeto con Object.defineProperty()
el valor por defecto es enumerable: false,
esto significa q las propiedad: valor, del objetoLiteral estan ocultas
y por eso a continuacion se imprime un objeto vacio {} */

Object.defineProperty(objetoLiteral, 'uno', {
  value: 1,

  /* Como enumerable: false, es el valor por defecto,
  no importa si lo escribo o no,
  el resultado es el mismo */
  // enumerable: false,
});
console.log(objetoLiteral);
// {}

Object.defineProperty(objetoLiteral, 'dos', {
  value: 2,
  enumerable: true, // hacer visible la propiedad: valor,
});
console.log(objetoLiteral);
/*
{
  dos: 2
}
*/

/* ¿ .propertyIsEnumerable() las propiedades 'uno' y 'dos' son enumerables?

false significa q NO es enumerable y q la propiedad 'uno' esta OCULTA */
console.log(objetoLiteral.propertyIsEnumerable('uno'));
// false

// true significa q SI es enumerable y q la propiedad 'dos' es VISIBLE
console.log(objetoLiteral.propertyIsEnumerable('dos'));
// true

/* Object.keys() y Object.getOwnPropertyNames()
convuerten a array [] las propiedades del objetoLiteral {}

Object.keys() devuelve SOLAMENTE las propiedades enumerables */
console.log(Object.keys(objetoLiteral));
// ['dos']

/* En cambio, Object.getOwnPropertyNames() devuelve
las propiedades enumerables y no enumerables */
console.log(Object.getOwnPropertyNames(objetoLiteral));
// (2) ['uno', 'dos']

/* --------------------------------------------------------------- */

// Ejemplo 2 - Valor value del Objeto Literal
