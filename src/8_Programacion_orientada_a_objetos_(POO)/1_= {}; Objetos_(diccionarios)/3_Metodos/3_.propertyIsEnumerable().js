/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
/* eslint-disable array-callback-return */
// @ts-nocheck

/*
.propertyIsEnumerable() ¿La propiedad: valor, si es o no Enumerable?

Documentacion Oficial - .propertyIsEnumerable()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable

La propiedad enumerable: de los objetos literales {}
la puedo editar con Object.defineProperty() y Object.defineProperties()

|------------------------------|-------------------------|
| La propiedad: valor, esta... | .propertyIsEnumerable() |
|------------------------------|-------------------------|
| visible                      | enumerable: true,       |
|------------------------------|-------------------------|
| oculta                       | enumerable: false,      |
|------------------------------|-------------------------|

Con .propertyIsEnumerable() puedo saber si puedo ver o no
la propiedad: valor, de un objeto literal {} al imprimirla por consola console.log()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

.propertyIsEnumerable() devuelve un booleano true ó false

Sintaxis:
nombreObjeto.propertyIsEnumerable(nombrePropiedad)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable#syntax

Donde...
- nombreObjeto
Nombre de la variable que contiene el objeto literal {}

- .propertyIsEnumerable()
Es el nombre del metodo

- nombrePropiedad
* Nombre de la propiedad del objeto literal {}
q quiero saber si es o no enumerable

* Puede ser de tipo texto String() ó Symbol() */

/* --------------------------------------------------------------- */

/* Ejemplo 1:

Recordatorio:
Este Ejemplo 1 lo escribi en otra seccion, ver:
" Ejemplo 3 - ¿Que son las propiedades enumerable: true enumerables (visible) y enumerable: false no enumerables (oculta)? " */

/* --------------------------------------------------------------- */

/* Ejemplo 2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable#using_propertyisenumerable */

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

/* .propertyIsEnumerable() devuelve true
porq SI  puedo ver la propiedad (clave) 'uno' por consola console.log() */
console.log(objetoLiteral.propertyIsEnumerable('uno'));
// true

/* .propertyIsEnumerable() devuelve false
cuando la propiedad NO existe en el objeto literal {} */
console.log(objetoLiteral.propertyIsEnumerable('PROPIEDAD INEXISTENTE'));
// false

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Metodo de objeto {} .propertyIsEnumerable() en array []

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable#using_propertyisenumerable

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable#user-defined_vs._built-in_objects */

const array = ['es enumerable'];

// Imprimir todo el array []
console.log(array);
// ['es enumerable']

// Imprimir elemento q esta en la posicion (indice) 0 del array []
console.log(array[0]);
// 'es enumerable'

// true porq en el array SI existe la posicion 0 en el array []
console.log(array.propertyIsEnumerable(0));
// true

// false porq NO existe la posicion 1 en el array []
console.log(array.propertyIsEnumerable(1));
// false

// false porq .propertyIsEnumerable() en array funciona con numeros de posicion
console.log(array.propertyIsEnumerable('es enumerable'));
// false

/* --------------------------------------------------------------- */

/* Ejemplo 4 - .propertyIsEnumerable() en objeto literal {} con propiedad (clave) de tipo Symbol()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable#testing_symbol_properties

Agregar al objeto literal {} dos propiedades de tipo Symbol() */
const enumerable = Symbol('SI soy enumerable');
console.log(enumerable);
// Symbol(SI soy enumerable)

const noEnumerable = Symbol('NO soy enumerable');
console.log(noEnumerable);
// Symbol(NO soy enumerable)

// 1) una q SI es enumerable (es VISIBLE por consola)
const objetoLiteral2 = {
  [enumerable]: 'SI soy enumerable',
};

// 2) Y otra q NO es enumerable (esta OCULTA por consola)
Object.defineProperty(objetoLiteral2, noEnumerable, {
  value: 'NO soy enumerable',
  enumerable: false,
});

/* Al imprimir por consola el objetoLiteral2
solamente puedo ver la propiedad: valor, q es visible (enumerable) */
console.log(objetoLiteral2);
/*
{
  [Symbol(SI soy enumerable)]: 'SI soy enumerable'
}
*/

/* .propertyIsEnumerable() ¿las propiedad: valor, son enumerables?

true significa q SI es enumerable y q la propiedad es VISIBLE por consola */
console.log(objetoLiteral2.propertyIsEnumerable(enumerable));
// true

// false significa q NO es enumerable y q la propiedad esta OCULTA por consola
console.log(objetoLiteral2.propertyIsEnumerable(noEnumerable));
// false
