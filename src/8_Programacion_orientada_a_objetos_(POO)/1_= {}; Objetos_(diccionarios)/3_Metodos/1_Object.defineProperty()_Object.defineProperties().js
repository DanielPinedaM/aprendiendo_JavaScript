/* eslint-disable array-callback-return */

/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
// @ts-nocheck

/*
Diferencias y Similitudes Entre Object.defineProperty() y Object.defineProperties() - Agregar Propiedades de Objeto...

Documentación Oficial...
- Clasificación de las Propiedades de los Objetos:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

- Object.defineProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

- Object.defineProperties()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

                                      |----------------------------------------------------------------------------|-----------------------------------------------------------|
                                      | Object.defineProperty()                                                    | Object.defineProperties()                                 |
|-------------------------------------|----------------------------------------------------------------------------|-----------------------------------------------------------|
| ¿Cuántos pares de propiedad: valor, | 1                                                                          | >= 1                                                      |
| puedo agregar al objeto literal?    |                                                                            | (1, 2, 3...)                                              |
|-------------------------------------|----------------------------------------------------------------------------|-----------------------------------------------------------|
| ¿Qué propiedades permite            |                                                                          value:                                                        |
| agregar al objeto literal?          |                                                                          writable:                                                     |
|                                     |                                                                          enumerable:                                                   |
|                                     |                                                                          configurable:                                                 |
|-------------------------------------|----------------------------------------------------------------------------|-----------------------------------------------------------|
| Sintaxis                            | Object.defineProperty(nombreObjeto, nombrePropiedad, descripcionPropiedad) | Object.defineProperties(nombreObjeto, nombresPropiedades) |
|-------------------------------------|----------------------------------------------------------------------------|-----------------------------------------------------------|

Ambos Object.defineProperty() y Object.defineProperties()
sirven para agregar nuevas propiedades o modificar las propiedades existentes en un objeto literal

La UNICA diferencia q tienen es q Object.defineProperty() agrega UNA SOLA propiedad,
en cambio Object.defineProperties() agrega una o mas de una propiedad a la vez

La sintaxis de Object.defineProperty() es:
Object.defineProperty(nombreObjeto, nombrePropiedad, descripcionPropiedad)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#syntax

La sintaxis de Object.defineProperties() es:
Object.defineProperties(nombreObjeto, nombresPropiedades)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#syntax

Donde...
- Object.defineProperty() y Object.defineProperties()
Es el nombre del metodo

- nombreObjeto
Es el objeto existente al q se le agrega o modifica la propiedad

- nombrePropiedad
Es la propiedad que se va agregar o modificar al objeto

Las propiedades que se pueden editar son:
* value:
Su valor por defecto es undefined

Valor de la propiedad del objeto,
es cualquier tipo de dato (número, objeto, función, etc.)

propiedad: valor,

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
su valor por defecto es undefined

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#parameters

                |------------------------------------------------|------------------------------------------------|
                | true                                           | false                                          |
|---------------|------------------------------------------------|------------------------------------------------|
| writable:     | La propiedad: valor, es MUtable                | Valor por defecto                              |
|               |                                                |                                                |
|               | SI se puede modificar                          | La propiedad: valor, es INmutable              |
|               |                                                |                                                |
|               |                                                | NO se puede modificar                          |
|---------------|------------------------------------------------|------------------------------------------------|
| enumerable:   | La propiedad: valor, es visible                | Valor por defecto                              |
|               | al imprimirla con console.log(nombreObjeto);   |                                                |
|               |                                                | La propiedad: valor, esta oculta,              |
|               | Es una propiedad enumerable                    | NO se puede ver con console.log(nombreObjeto); |
|               |                                                |                                                |
|               |                                                | Para ver la propiedad usar                     |
|               |                                                | Object.getOwnPropertyNames(nombreObjeto)       |
|               |                                                |                                                |
|               |                                                | Es una propiedad NO enumerable                 |
|---------------|------------------------------------------------|------------------------------------------------|
| configurable: | SI permite usar value: writable: y enumerable: | Valor por defecto                              |
|               |                                                |                                                |
|               |                                                | NO permite usar value: writable: y enumerable: |
|---------------|------------------------------------------------|------------------------------------------------|

A continuacion explicare con ejemplos
cada una de las propiedades que se pueden agregar
con Object.defineProperty() y Object.defineProperties() */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Valor value: del Objeto Literal
Es el valor al q le corresponde la propiedad,
es la propiedad: valor,

Su valor por defecto es undefined

Puede ser cualquier tipo de dato (número, objeto, función, etc.) */

// En un principio el objeto literal esta vacio {}
const objetoLiteral = {};
console.log(objetoLiteral);
// {}

// Pero despues le agrego una propiedad: valor, usando Object.defineProperties()
Object.defineProperties(objetoLiteral, {
  uno: {               // Propiedad del objeto
    enumerable: true,  // Permitir ver el objeto por consola console.log()
    value: 1,          // Valor del objeto
  },
});

// Objeto literal {} despues de agregarle la propiedad: valor,
console.log(objetoLiteral);
/*
{
  uno: 1
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 - La propiedad: valor, es writable: true, MUtable o writable: false, INmutable

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#modifying_a_property */

// Objeto mutable
const mutable = {};
console.log(mutable);
// {}

Object.defineProperties(mutable, {
  uno: {                // propiedad del objeto
    enumerable: true,   // hacer visible el objeto
    value: 1,           // valor del objeto
    writable: true,     // MUtable -> permite MODIFICAR la propiedad: valor,
    configurable: true, // Permitir editar el valor de enumerable: y writable:
  },
});
console.log(mutable);
/*
{
  uno: 1
}
*/

// Puedo modificar el valor de la propiedad porq writable: true,
mutable.uno = 'nuevo valor';
console.log(mutable);
/*
{
  uno: 'nuevo valor'
}
*/

// Objeto inmutable
const inmutable = {};
console.log(inmutable);
// {}

Object.defineProperties(inmutable, {
  uno: {
    enumerable: true,
    value: 1,
    writable: false,    // INmutable -> NO permite modificar la propiedad: valor,
    configurable: true,
  },
});
console.log(inmutable);
/*
{
  uno: 1
}
*/

// NO puedo modificar el valor de la propiedad porq writable: false,
inmutable.uno = 'nuevo valor';
console.log(inmutable);
/*
{
  uno: 1
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3 - ¿Que son las propiedades enumerable: true enumerables (visible) y enumerable: false no enumerables (oculta)?

Samantha Ming:
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/#what-are-enumerables

https://2ality.com/2015/10/enumerability-es6.html

Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable#direct_vs._inherited_properties

Recordatorio:
|------------------------------|-------------------------|
| La propiedad: valor, esta... | .propertyIsEnumerable() |
|------------------------------|-------------------------|
| visible                      | enumerable: true,       |
|------------------------------|-------------------------|
| oculta                       | enumerable: false,      |
|------------------------------|-------------------------|

Al crear objeto con notación literal de objeto el valor por defecto es enumerable: true,

Normalmente los objetos literales {} se definen con la notación literal de objeto */

let objetoLiteral2 = { // notación literal de objeto
// propiedad: valor,
  uno: 1,
};
console.log(objetoLiteral2);
/*
{
  uno: 1,
}
*/

/* .propertyIsEnumerable()
true = la propiedad: valor, es enumerable = la propiedad: valor, es visible */
console.log(objetoLiteral2.propertyIsEnumerable('uno'));
// true

// Vaciar objeto literal
objetoLiteral2 = {};
console.log(objetoLiteral2);
// {}

/* Tambien puedo usar Object.defineProperty() y Object.defineProperties()
para editar la propiedad enumerable

Al crear objeto con Object.defineProperty() y Object.defineProperties()
el valor por defecto es enumerable: false,
esto significa q las propiedad: valor, del objetoLiteral estan ocultas
y por eso a continuacion se imprime un objeto vacio {} */

Object.defineProperty(objetoLiteral2, 'uno', {
  value: 1,

  /* Como enumerable: false, es el valor por defecto,
  no importa si lo escribo o no,
  el resultado es el mismo */
  // enumerable: false,
});
console.log(objetoLiteral2);
// {}

Object.defineProperty(objetoLiteral2, 'dos', {
  value: 2,
  enumerable: true, // hacer visible la propiedad: valor,
});
console.log(objetoLiteral2);
/*
{
  dos: 2
}
*/

/* ¿ .propertyIsEnumerable() las propiedades 'uno' y 'dos' son enumerables?

false significa q NO es enumerable y q la propiedad 'uno' esta OCULTA */
console.log(objetoLiteral2.propertyIsEnumerable('uno'));
// false

// true significa q SI es enumerable y q la propiedad 'dos' es VISIBLE
console.log(objetoLiteral2.propertyIsEnumerable('dos'));
// true

/* Convertir a array [] las propiedades del objetoLiteral {}

Object.keys() devuelve SOLAMENTE las propiedades enumerables */
console.log(Object.keys(objetoLiteral2));
// ['dos']

// Lo mismo sucede con Object.entries() q devuelve las [propiedad, valor] enumerables
console.log(Object.entries(objetoLiteral2));
// [ [ 'dos', 2 ] ]

// Object.values() devuelve los VALORES del objeto q tienen propiedades enumerables
console.log(Object.values(objetoLiteral2));
// [ 2 ]

/* En cambio, Object.getOwnPropertyNames() devuelve
las propiedades enumerables y no enumerables */
console.log(Object.getOwnPropertyNames(objetoLiteral2));
// (2) ['uno', 'dos']

/* --------------------------------------------------------------- */

// Ejemplo 4 - configurable: - ¿Puedo cambiar el valor de las propiedades value: writable: y enumerable: ?

const objetoLiteral3 = {};
console.log(objetoLiteral3);
// {}

/* Agregar una nueva propiedad: valor, al objetoLiteral3
como no escribo un valor entonces
se le asigna su valor por defecto q es undefined */
Object.defineProperty(objetoLiteral3, 'b', {
  enumerable: true, // Permitir ver el objeto por consola console.log()
  writable: true,   // MUtable -> permite MODIFICAR la propiedad: valor,
  configurable: false,
});
console.log(objetoLiteral3);
/*
{
  b: undefined
}
*/

/* Aunque configurable: false,
puedo modificar el valor del objeto
porque la propiedad: valor,
es MUtable writable: true, */
Object.defineProperty(objetoLiteral3, 'b', {
  value: 1,
});
console.log(objetoLiteral3);
/*
{
  b: 1
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Diferencia Entre Object.defineProperty() y Object.defineProperties()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#adding_properties_and_default_values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties#using_object.defineproperties */

// Crear objetoLiteral4 vacio {}
let objetoLiteral4 = {};
console.log(objetoLiteral4);
// {}

/* Esta es la UNICA diferencia q hay entre
Object.defineProperty() y Object.defineProperties()

Object.defineProperty() permite agregar UNA SOLA propiedad: valor, */
Object.defineProperty(objetoLiteral4, 'uno', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});
console.log(objetoLiteral4);
/*
{
  uno: 1
}
*/

// Vaciar objetoLiteral4 {}
objetoLiteral4 = {};
console.log(objetoLiteral4);
// {}

/* En cambio, Object.defineProperties()
permite agregar una o mas pares de propiedad: valor, */
Object.defineProperties(objetoLiteral4, {
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
console.log(objetoLiteral4);
/*
{
  uno: 1,
  dos: 2
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 6 Basico de set() y get():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#creating_a_property

Otros ejemplos mas avanzados de set() y get() q no los escribi:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#custom_setters_and_getters

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#inheritance_of_properties */

// Crear un objeto literal vacio {}
const objetoLiteral5 = {};
console.log(objetoLiteral5);
// {}

// variable q guarda el valor del objeto literal {}
let saludar = 'hola mundo';
console.log(saludar);
// 'hola mundo'

Object.defineProperty(objetoLiteral5, 'b', {
  get() {             // Funcion q se ejecuta al ACCEDER a una propiedad
    return saludar;
  },
  set(nuevoValor) {     // Funcion q se ejecuta cuando se ASIGNA un valor a una propiedad
    saludar = nuevoValor;
  },
  enumerable: true,   // Hacer visible la propiedad: valor,
  configurable: true, // Permitir editar el valor de enumerable:
});

// Si imprimo el objeto {} veo las funciones get() y set()
console.log(objetoLiteral5);
/*
{
  b: [Getter/Setter]
}
*/

/* Si recorro (itero) el objeto puedo ver todas las propiedades y valores del objeto {}

El valor del objeto es el de la variable saludar

La propiedad: valor, es b: 'hola mundo', */
Object.keys(objetoLiteral5).map((propiedad) => {
  const valor = objetoLiteral5[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
// 'b ➜ hola mundo'

// Re-asignar el valor de la propiedad objetoLiteral5.b
objetoLiteral5.b = 'hola mundo 2';

// Recorrer (iterar) objeto literal {}
Object.keys(objetoLiteral5).map((propiedad) => {
  const valor = objetoLiteral5[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
// 'b ➜ hola mundo 2'

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Agregar nueva propiedad: valor, al objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#adding_properties_and_default_values */

// Crear objeto literal vacio {}
let objetoLiteral6 = {};
console.log(objetoLiteral6);
// {}

// Esto:
objetoLiteral6.uno = '1';
console.log(objetoLiteral6);
/*
{
  uno: '1'
}
*/

// Vaciar objeto {}
objetoLiteral6 = {};
console.log(objetoLiteral6);
// {}

// Es lo mismo q esto...
Object.defineProperty(objetoLiteral6, 'uno', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});
console.log(objetoLiteral6);
/*
{
  uno: '1'
}
*/

// Vaciar objeto {}
objetoLiteral6 = {};
console.log(objetoLiteral6);
// {}

// Y esto otro:
Object.defineProperty(objetoLiteral6, 'uno', { value: 1 });

// Recorrer (iterar) propiedades enumerables y no enumerables
Object.getOwnPropertyNames(objetoLiteral6).map((propiedad) => {
  const valor = objetoLiteral6[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
// uno ➜ 1

objetoLiteral6 = {};
console.log(objetoLiteral6);
// {}

// Es lo mismo q esto:
Object.defineProperty(objetoLiteral6, 'uno', {
  value: 1,

  // false es el valor por defecto de writable: configurable: y enumerable:
  writable: false,
  configurable: false,
  enumerable: false,
});

Object.getOwnPropertyNames(objetoLiteral6).map((propiedad) => {
  const valor = objetoLiteral6[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
// uno ➜ 1
