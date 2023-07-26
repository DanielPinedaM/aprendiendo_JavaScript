/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Diferencias y Similitudes Entre Object.getOwnPropertyDescriptor() y Object.getOwnPropertyDescriptors()
Descripción del Objeto:
value:
writable:
enumerable:
configurable:
get
setgit

Documentacion Oficial...
- Object.getOwnPropertyDescriptor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

- Object.getOwnPropertyDescriptors()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

                                      |----------------------------------------------------------------|------------------------------------------------|
                                      | Object.getOwnPropertyDescriptor()                              | Object.getOwnPropertyDescriptors()             |
|-------------------------------------|----------------------------------------------------------------|------------------------------------------------|
| ¿Sirve para obtener las propiedades | ✓                                                              | ✓                                              |
| (descripción) del objeto literal    |                                                                |                                                |
| value:                              |                                                                |                                                |
| writable:                           |                                                                |                                                |
| enumerable:                         |                                                                |                                                |
| configurable:                       |                                                                |                                                |
| get                                 |                                                                |                                                |
| set ?                               |                                                                |                                                |
|-------------------------------------|----------------------------------------------------------------|------------------------------------------------|
| Valor de retorno                    | Obtener la descripción de UNA SOLA                             | Obtener TODAS las descripciones                |
|                                     | propiedad en específico del objeto literal                     | de las propiedades del objeto literal          |
|-------------------------------------|----------------------------------------------------------------|------------------------------------------------|
| Sintaxis                            | Object.getOwnPropertyDescriptor(nombreObjeto, nombrePropiedad) | Object.getOwnPropertyDescriptors(nombreObjeto) |
|-------------------------------------|----------------------------------------------------------------|------------------------------------------------|

La sintaxis de Object.getOwnPropertyDescriptor() es:
Object.getOwnPropertyDescriptor(nombreObjeto, nombrePropiedad)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor#syntax

En cambio, la sintaxis de Object.getOwnPropertyDescriptors() es:
Object.getOwnPropertyDescriptors(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors#syntax

Donde...
- Object.getOwnPropertyDescriptor() y Object.getOwnPropertyDescriptors()
Nombre del método

- nombreObjeto
Nombre de la variable que contiene el objeto literal {}

- nombrePropiedad
Nombre de la propiedad a la que se accede en especifico a su descripcion */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Diferencia Entre Object.getOwnPropertyDescriptor() y Object.getOwnPropertyDescriptors()

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

/* --------------------------------------------------------------- */

/* Ejemplo 2:
Object.getOwnPropertyDescriptors() devuelve un objeto vacio {}
cuando NO hay propiedades en el objeto

El objeto {} NO tiene propiedades
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors#return_value */
console.log(Object.getOwnPropertyDescriptors({}));
// {}

/* En cambio, Object.getOwnPropertyDescriptor() devuelve undefined
cuando la propiedad NO existe en el objeto literal

En el objeto {} NO existe la 'propiedad inexistente' */
console.log(Object.getOwnPropertyDescriptor({}, 'propiedad inexistente'));
// undefined

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Object.defineProperties() y Object.getOwnPropertyDescriptors()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor#using_object.getownpropertydescriptor */

const objetoLiteral2 = {};
console.log(objetoLiteral2);
// {}

/*
Recordatorio:
Las propiedades (descripcion)
value:
writable:
enumerable:
configurable:
get
set
las puedo editar con Object.defineProperty() y Object.defineProperties(), ver:
" 12.1.5.2.1) Diferencias y Similitudes Entre Object.defineProperty() y Object.defineProperties() - Agregar Propiedades de Objeto... " */
Object.defineProperties(objetoLiteral2, {
  uno: {                // propiedad del objeto
    enumerable: true,   // hacer visible el objeto
    value: 1,           // valor del objeto
    writable: true,     // MUtable -> permite MODIFICAR la propiedad: valor,
    configurable: true, // Permitir editar el valor de enumerable: y writable:
  },
});
console.log(objetoLiteral2);
/*
{
  uno: 1
}
*/

// Object.getOwnPropertyDescriptors() Descripcion del objeto literal
const getOwnPropertyDescriptors2 = Object.getOwnPropertyDescriptors(objetoLiteral2);
console.log(getOwnPropertyDescriptors2);
/*
{
  uno: {
         value: 1,
         writable: true,
         enumerable: true,
         configurable: true
       }
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 4

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors#creating_a_shallow_copy

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create */

const objetoLiteral3 = {
// propiedad: valor,
  uno: 1,
  dos: 2,
};
console.log(objetoLiteral3);
/*
{
  uno: 1,
  dos: 2
}
*/

/* Copia superficial del objeto literal:
https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy */
const copia = Object.create(
  Object.getPrototypeOf(objetoLiteral3),
  Object.getOwnPropertyDescriptors(objetoLiteral3),
);
console.log(copia);
/*
{
  uno: 1,
  dos: 2
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 5:
Los ejemplos anteriores son los mas IMPORTANTE ⚠️s,
en MDN hay mas ejemplos:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor#non-object_coercion

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors#creating_a_subclass */
