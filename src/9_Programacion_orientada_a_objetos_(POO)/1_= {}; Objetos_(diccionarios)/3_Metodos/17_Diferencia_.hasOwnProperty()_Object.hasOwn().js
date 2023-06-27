/* eslint-disable array-callback-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Diferencias y Similitudes Entre
.hasOwnProperty() (Mala Práctica)
y Object.hasOwn() (Buena Práctica)
- ¿Si Existe o no la Propiedad Propia (NO Heredada) en el Objeto?

Documentacion Oficial...
- .hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

- Object.hasOwn()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn

ECMAScript Proposals - Object.hasOwn()
https://www.proposals.es/proposals/Accessible%20Object.prototype.hasOwnProperty

https://github.com/tc39/proposal-accessible-object-hasownproperty

Stack Overflow - Diferencia Entre .hasOwnProperty() y Object.hasOwn()
https://stackoverflow.com/questions/69561596/object-hasown-vs-object-prototype-hasownproperty

ESLint - no-prototype-builtins
https://eslint.org/docs/latest/rules/no-prototype-builtins

IMPORTANTE:
No te compliques estudiando todo esto,
SIEMPRE que necesites saber
si existe o no una propiedad en un objeto {}
usa Object.hasOwn() y NO .hasOwnProperty().

.hasOwnProperty() está obsoleto
y ha sido reemplazado por Object.hasOwn()

Para la explicación de esto
ver las UNICAS diferencias
entre estos métodos que son:
- “ Ejemplo 3 - Object.create(null), .hasOwnProperty() y Object.hasOwn() ”

- “ Ejemplo 4 - Objeto con Nombre Propiedad hasOwnProperty ”

Alternativas a .hasOwnProperty() y Object.hasOwn()
para saber si existe o no la propiedad en el objeto:

1) Librerias de NPM:
https://www.npmjs.com/package/object.hasown

https://www.npmjs.com/package/has

https://www.npmjs.com/package/lodash.has

https://www.npmjs.com/package/just-has

2) Object.prototype.hasOwnProperty.call() aunque esto es MALA PRACTICA
porq hay q escribir mucho codigo

                                            |-------------------------------------------------------------------|-----------------------------------------------------------|
                                            | .hasOwnProperty()                                                 | Object.hasOwn()                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| ¿Está obsoleto?                           | ✓                                                                 | X                                                         |
|                                           | Mala Práctica                                                     | Buena Práctica                                            |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| .hasOwnProperty() tiene más               | https://caniuse.com/mdn-javascript_builtins_object_hasownproperty | https://caniuse.com/mdn-javascript_builtins_object_hasown |
| compatibilidad que Object.hasOwn()        |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| Sirve para saber ¿si existe o no          | ✓                                                                 | ✓                                                         |
| la propiedad en el objeto?                |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| ¿Busca una propiedad en el objeto?        |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| Ver:                                      |                                                                   |                                                           |
| “ Ejemplo 1 - ¿Si existe o no             |                                                                   |                                                           |
| la propiedad en el objeto? ”              |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| ¿Busca propiedades heredadas (prototipos) | X                                                                 | X                                                         |
| que se crean con Object.create()          |                                                                   |                                                           |
|  y están en la propiedad  __proto__?      |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| Ver:                                      |                                                                   |                                                           |
| “ Ejemplo 2 - Object.create()             |                                                                   |                                                           |
| Propiedades heredadas (prototipo)         |                                                                   |                                                           |
| en .hasOwnProperty() y Object.hasOwn() ”  |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| Devuelve un booleano                      | ✓                                                                 | ✓                                                         |
|                                           |                                                                   |                                                           |
| Boolean()                                 |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| true                                      |                                                                   |                                                           |
| ó                                         |                                                                   |                                                           |
| false                                     |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| Devuelve true cuando se cumplen           | ✓                                                                 | ✓                                                         |
| TODAS las siguientes condiciones:         |                                                                   |                                                           |
| - La propiedad buscada                    |                                                                   |                                                           |
| SI existe en el objeto literal            |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| - La propiedad buscada                    |                                                                   |                                                           |
| NO es un prototipo __proto__              |                                                                   |                                                           |
| (es una propiedad propia)                 |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| Devuelve false cuando se cumple           | ✓                                                                 | ✓                                                         |
| ALGUNA de las siguientes condiciones:     |                                                                   |                                                           |
| - La propiedad buscada                    |                                                                   |                                                           |
| NO existe en el objeto literal            |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| - La propiedad buscada                    |                                                                   |                                                           |
| SI es un prototipo __proto__              |                                                                   |                                                           |
| (es una propiedad heredada)               |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| ¿Se puede usar con Object.create(null) ?  | X                                                                 | ✓                                                         |
|                                           |                                                                   |                                                           |
| Ver:                                      |                                                                   |                                                           |
| “ Ejemplo 3 - Object.create(null),        |                                                                   |                                                           |
| .hasOwnProperty() y Object.hasOwn() ”     |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| ¿La propiedad del objeto                  | X                                                                 | ✓                                                         |
| se puede llamar hasOwnProperty ?          |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| Ver:                                      |                                                                   |                                                           |
| “ Ejemplo 4 - Objeto con                  |                                                                   |                                                           |
| Nombre Propiedad hasOwnProperty ”         |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| ¿Se puede usar para saber                 | ✓                                                                 | ✓                                                         |
| si existe o no el número de               |                                                                   |                                                           |
| posición (índice) en el array [] ?        |                                                                   |                                                           |
|                                           |                                                                   |                                                           |
| Ver:                                      |                                                                   |                                                           |
“ Ejemplo 5 - Object.hasOwn()               |                                                                   |                                                           |
| y .hasOwnProperty() en array [] ”         |                                                                   |                                                           |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|
| Sintaxis                                  | nombreObjeto.hasOwnProperty(nombrePropiedad)                      | Object.hasOwn(nombreObjeto, nombrePropiedad)              |
|-------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------|

Sintaxis:
nombreObjeto.hasOwnProperty(nombrePropiedad)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#syntax

Object.hasOwn(nombreObjeto, nombrePropiedad)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#syntax

Donde...
- .hasOwnProperty() y Object.hasOwn()
Nombre del método

- nombreObjeto
Nombre del objeto en el cual
quiero buscar la propiedad nombrePropiedad

- nombrePropiedad
Es la propiedad que estoy
buscando en el objeto literal nombreObjeto
para saber ¿si existe o no? */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - ¿Si existe o no la propiedad en el objeto?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#using_hasownproperty_to_test_for_an_own_propertys_existence

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#using_hasown_to_test_for_a_propertys_existence */

// objetoLiteral q contiene la propiedad uno
const objetoLiteral = { uno: 1 };
console.log(objetoLiteral);
// { uno: 1 }

/* Ambos .hasOwnProperty() y Object.hasOwn()
devuelven true porq la propiedad 'uno' SI esta en el objetoLiteral */
console.log(objetoLiteral.hasOwnProperty('uno')); // true
console.log(Object.hasOwn(objetoLiteral, 'uno')); // true

/* Ambos .hasOwnProperty() y Object.hasOwn()
devuelven false porq la propiedad
'propiedadInexistente' NO esta en el objetoLiteral */
console.log(objetoLiteral.hasOwnProperty('propiedadInexistente')); // false
console.log(Object.hasOwn(objetoLiteral, 'propiedadInexistente')); // false

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Object.create() Propiedades heredadas (prototipo) en .hasOwnProperty() y Object.hasOwn()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#direct_vs._inherited_properties

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#direct_vs._inherited_properties

Ambos .hasOwnProperty() y Object.hasOwn()
NO buscan propiedades heredadas (prototipo)
creadas con Object.create(),
en cambio el operador in SI */

// Objeto padre q contiene sus PROPIAS propiedad: valor, (propiedades NO heredadas)
const prototipo = { uno: 1 };
console.log(prototipo);
// { uno: 1 }

/* Ambos .hasOwnProperty() y Object.hasOwn()
devuelven true porq en el objeto llamado prototipo:
- La propiedad 'uno' SI existe

- { uno: 1 }
NO use Object.create() para agregar la propiedad 'uno'

'uno' es una propiedad PROPIA (NO heredada) de objeto prototipo */
console.log(prototipo.hasOwnProperty('uno')); // true
console.log(Object.hasOwn(prototipo, 'uno')); // true

/* Object.create()
Hacer q objetoHijo herede las propiedades y metodos de prototipo

prototipo tiene la propiedad: valor, { uno: 1 }

en objetoHijo { __proto__: { uno: 1 } }
se crea una nueva propiedad llamada __proto__
q tiene como valor { uno: 1 } */
const objetoHijo = Object.create(prototipo);
console.log(objetoHijo);
// { __proto__: { uno: 1 } }

/* Ambos .hasOwnProperty() y Object.hasOwn()
devuelven false porq en el objeto llamado
objetoHijo { __proto__: { uno: 1 } }
SI use Object.create() para agregar la propiedad 'uno'

'uno' es una propiedad HEREDADA de objeto prototipo */
console.log(objetoHijo.hasOwnProperty('uno')); // false
console.log(Object.hasOwn(objetoHijo, 'uno')); // false

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Object.create(null), .hasOwnProperty() y Object.hasOwn()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#using_hasownproperty_as_a_property_name

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#objects_created_with_object.createnull

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#problematic_cases_for_hasownproperty */

const objPrototipoNull = Object.create(null);
console.log(objPrototipoNull);
// [Object: null prototype] {}

// .hasOwnProperty() da error cuando se usa con Object.create(null)
// console.log(objPrototipoNull.hasOwnProperty(null));
// TypeError: objPrototipoNull.hasOwnProperty no es una función

/* console.log(
  Object.prototype.hasOwnProperty(objPrototipoNull),
); */
// TypeError: no se puede convertir el objeto en un valor primitivo

// En cambio, Object.hasOwn() NO da error
console.log(Object.hasOwn(objPrototipoNull, null));
// false

/* Otra alternativa es Object.prototype.hasOwnProperty.call()
aunq esto es MALA PRACTICA porq hay q escribir mucho codigo */
console.log(
  Object.prototype.hasOwnProperty.call(objPrototipoNull, null),
);
// false

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Objeto con Nombre Propiedad hasOwnProperty

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#using_hasownproperty_as_a_property_name

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#using_hasownproperty_as_a_property_name

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#problematic_cases_for_hasownproperty */

/* Cuando un objeto tiene el
nombre de la propiedad llamado hasOwnProperty */
const objetoLiteral3 = {
  hasOwnProperty: () => false, // propiedad hasOwnProperty
  bar: 'hola mundo',
};
console.log(objetoLiteral3);
/*
{
  hasOwnProperty: [Function: hasOwnProperty],
  bar: 'hola mundo'
}
*/

/* Y uso .hasOwnProperty() entonces da error

El metodo de objeto .hasOwnProperty() esta devolviendo false
a pesar de que la propiedad bar SI existe en el objetoLiteral3,
lo correcto es q .hasOwnProperty()
devuelva true porq la propiedad SI existe */
console.log(objetoLiteral3.hasOwnProperty('bar')); // .hasOwnProperty() MALA PRACTICA
// false

/* En cambio, con Object.hasOwn()
da el resultado correcto */
console.log(Object.hasOwn(objetoLiteral3, 'bar')); // Object.hasOwn() BUENA PRACTICA
// true

/* Object.prototype.hasOwnProperty.call() tambien funciona
pero es MALA PRACTICA porq hay q escribir mucho codigo */
console.log(
  Object.prototype.hasOwnProperty.call(objetoLiteral3, 'bar'), // MALA PRACTICA
);
// true

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Object.hasOwn() y .hasOwnProperty() en array []
Ambos Object.hasOwn() y .hasOwnProperty()
Se pueden usar en array []
para saber si existe o no
el número de posicion (índice) en el array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#checking_if_an_array_index_exists */

const array = ['cero', 'uno', 'dos'];
//               0       1      2   -> POSICIONES (INDICES)
console.log(array);
// (3) ['cero', 'uno', 'dos']       -> ELEMENTOS

/* Object.hasOwn() y .hasOwnProperty()
¿existe el indice en el array [] ?

Devuelve true porq el indice 0 SI existe en el array [] */
console.log(array.hasOwnProperty(0)); // true
console.log(Object.hasOwn(array, 0)); // true

// Devuelve false porq el indice 99 NO existe en el array []
console.log(array.hasOwnProperty(99)); // false
console.log(Object.hasOwn(array, 99)); // false

/* --------------------------------------------------------------- */

// Ejemplo 6 - .hasOwnProperty() y Object.hasOwn() en objetoLiteral {} y array vacios []

/* Ambos Object.hasOwn() y .hasOwnProperty()
devuelven false al usarlo con objetoLiteral {} y array vacio [] */

// .hasOwnProperty()
console.log({}.hasOwnProperty());          // false
console.log({}.hasOwnProperty(null));      // false
console.log({}.hasOwnProperty(undefined)); // false

console.log([].hasOwnProperty());          // false
console.log([].hasOwnProperty(null));      // false
console.log([].hasOwnProperty(undefined)); // false

// Object.hasOwn()
console.log(Object.hasOwn({}));            // false
console.log(Object.hasOwn({}, null));      // false
console.log(Object.hasOwn({}, undefined)); // false

console.log(Object.hasOwn([]));            // false
console.log(Object.hasOwn([], null));      // false
console.log(Object.hasOwn([], undefined)); // false

/* --------------------------------------------------------------- */

/* Ejemplo 7:
Object.hasOwn() da error al usarlo
sin escribir nada dentro del par de parentesis () */

// console.log(Object.hasOwn());
// TypeError no capturado: no se puede convertir undefined o null en objeto

/* --------------------------------------------------------------- */

// Ejemplo 8 - Object.prototype, .hasOwnProperty() y Object.hasOwn()

console.log(Object.prototype);                           // [Object: null prototype] {}

// .hasOwnProperty()
console.log(Object.prototype.hasOwnProperty(null));      // false
console.log(Object.prototype.hasOwnProperty(undefined)); // false
console.log(Object.prototype.hasOwnProperty());          // false

// Object.hasOwn()
console.log(Object.hasOwn(Object.prototype, null));      // false
console.log(Object.hasOwn(Object.prototype, undefined)); // false
console.log(Object.hasOwn(Object.prototype));            // false

/* --------------------------------------------------------------- */

/* Ejemplo 9:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#iterating_over_the_properties_of_an_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn#iterating_over_the_properties_of_an_object */

const objetoLiteral2 = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral2);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
}
*/

/*
Recordatorio:
Ver:
- " Ejemplo 3 - ¿Que son las propiedades enumerable: true enumerables (visible) y enumerable: false no enumerables (oculta)?  "

- 12.1.5.2.10.1) Object.create() Crear un Nuevo Objeto que Hereda las Propiedades y Métodos de un Objeto Existente (Prototipo)

Recorrer (iterar) de un objeto
las propiedad: valor, q son:
- enumerable: true Enumerables

- NO heredadas (propias): La propiedad NO se creo con Object.create() */

Object.entries(objetoLiteral2).map((entry) => {            // Object.entries() enumerable
  const [propiedad, valor] = entry;
  const hasOwn = Object.hasOwn(objetoLiteral2, propiedad); // Object.hasOwn() NO heredadas (propias)

  if (hasOwn) console.log(`${propiedad} ➜ ${valor}`);
});
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/
