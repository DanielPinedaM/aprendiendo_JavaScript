/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Diferencias y Similitudes Entre Object.isFrozen() Object.isSealed() y Object.isExtensible() - ¿El Objeto es INmutable o MUtable?

Documentación Oficial...
- Object.isFrozen()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen

- Object.isSealed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed

- Object.isExtensible()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible

- Reflect.isExtensible()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible

Recordatorio:
NO te compliques leyendo esta seccion actual,
si lees estas otras 2 siguientes secciones lo entenderas mejor, ver:
- " 4.2.6) Re-asignar, Mutable e Inmutable "

- " 12.1.5.2.13) Diferencias y Similitudes Entre Object.freeze() Object.seal() y Object.preventExtensions() - Objeto Inmutable (que NO se Puede Modificar) "

                        |-----------------------------------|---------------------------------|-----------------------------|---------------------------|----------------------------------------|
                        | Sintaxis                          | Valor por defecto               | Object.freeze()             | Object.seal()             | Object.preventExtensions()             |
                        |                                   | {}                              |                             |                           |                                        |
|-----------------------|-----------------------------------|---------------------------------|-----------------------------|---------------------------|----------------------------------------|
| Object.isFrozen()     | Object.isFrozen(nombreObjeto)     | Object.isFrozen({})             | Object.isFrozen(            | Object.isFrozen(          | Object.isFrozen(                       |
|                       |                                   | // false                        |   Object.freeze({})         |   Object.seal({})         |   Object.preventExtensions({})         |
|                       |                                   |                                 | );                          | );                        | );                                     |
|                       |                                   |                                 | // true                     | // true                   | // true                                |
|                       |                                   |                                 |                             |                           |                                        |
|                       |                                   | Object.isFrozen({ uno: 1 })     | Object.isFrozen(            | Object.isFrozen(          | Object.isFrozen(                       |
|                       |                                   | // false                        |   Object.freeze({ uno: 1 }) |   Object.seal({ uno: 1 }) |   Object.preventExtensions({ uno: 1 }) |
|                       |                                   |                                 | );                          | );                        | );                                     |
|                       |                                   |                                 | // true                     | // false                  | // false                               |
|-----------------------|-----------------------------------|---------------------------------|-----------------------------|---------------------------|----------------------------------------|
| Object.isSealed()     | Object.isSealed(nombreObjeto)     | Object.isSealed({})             | Object.isSealed(            | Object.isSealed(          | Object.isSealed(                       |
|                       |                                   | // false                        |   Object.freeze({})         |    Object.seal({})        |   Object.preventExtensions({})         |
|                       |                                   |                                 | );                          | );                        | );                                     |
|                       |                                   |                                 | // true                     | // true                   | // true                                |
|                       |                                   |                                 |                             |                           |                                        |
|                       |                                   | Object.isSealed({ uno: 1 })     | Object.isSealed(            | Object.isSealed(          | Object.isSealed(                       |
|                       |                                   | // false                        |   Object.freeze({ uno: 1 }) |   Object.seal({ uno: 1 }) |   Object.preventExtensions({ uno: 1 }) |
|                       |                                   |                                 | );                          | );                        | );                                     |
|                       |                                   |                                 | // true                     | // true                   | // false                               |
|-----------------------|-----------------------------------|---------------------------------|-----------------------------|---------------------------|----------------------------------------|
| Object.isExtensible() | Object.isExtensible(nombreObjeto) | Object.isExtensible({})         | Object.isExtensible(        | Object.isExtensible(      | Object.isExtensible(                   |
|                       |                                   | // true                         |   Object.freeze({})         |    Object.seal({})        |   Object.preventExtensions({})         |
|                       |                                   |                                 | );                          | );                        | );                                     |
|                       |                                   |                                 | // false                    | // false                  | // false                               |
|                       |                                   |                                 |                             |                           |                                        |
|                       |                                   | Object.isExtensible({ uno: 1 }) | Object.isExtensible(        | Object.isExtensible(      | Object.isExtensible(                   |
|                       |                                   | // true                         |   Object.freeze({ uno: 1 }) |   Object.seal({ uno: 1 }) |   Object.preventExtensions({ uno: 1 }) |
|                       |                                   |                                 | );                          | );                        | );                                     |
|                       |                                   |                                 | // false                    | // false                  | // false                               |
|-----------------------|-----------------------------------|---------------------------------|-----------------------------|---------------------------|----------------------------------------|

Todos estos metodos de objetos
Object.isFrozen() Object.isSealed() y Object.isExtensible()
determinan si el objeto es INmutable o MUtable,
pero lo hacen de diferentes formas

La sintaxis de todos estos metodos de objetos es muy similar:
Object.isFrozen(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen#syntax

Object.isSealed(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#syntax

Object.isExtensible(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible#syntax

Donde...
- Object.isFrozen()
Object.isSealed()
Object.isExtensible()
Nombre del método

- nombreObjeto
Nombre del objeto
del que quiero saber
si es inmutable o mutable
*/

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Valor por defecto {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen#using_object.isfrozen

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#using_object.issealed

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible#using_object.isextensible

Un objeto literal {} es MUtable de forma predeterminada
al crearlo SIN usar los metodos
Object.freeze() Object.seal() NI Object.preventExtensions() */

const objetoLiteral = {};
console.log(objetoLiteral);
// {}

/* Object.isFrozen() y Object.isSealed()
devuelven false porq objetoLiteral es MUtable */
console.log(Object.isFrozen(objetoLiteral)); // false -> El objetoLiteral {} NO esta congelado
console.log(Object.isSealed(objetoLiteral)); // false -> "                         " sellado

// Object.isExtensible() devuelve true
console.log(Object.isExtensible(objetoLiteral)); // true -> El objetoLiteral {} SI es extensible (MUtable)

// porq SI le puedo agregar nuevas propiedad: valor,
objetoLiteral.uno = 1;      // nombreObjeto.nombreNuevaPropiedad = 'nuevo valor';
console.log(objetoLiteral); // { uno: 1, }

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Object.freeze() */

/* Object.freeze() Congelar (freeze) objeto,
esto NO permite modificar, eliminar NI agregar propiedad: valor, al objeto */
const freeze = Object.freeze({});
console.log(freeze); // {}

// Object.isFrozen() devuelve true porq NO se puede MODIFICAR el objeto
console.log(Object.isFrozen(freeze)); // true

/* Object.isSealed() devuelve true porq
NO se puede AGREGAR O ELIMINAR propiedad: valor, al objeto objeto  */
console.log(Object.isSealed(freeze)); // true

/* Object.isExtensible() devuelve false

Segun lo anterior, un objeto congelado Object.freeze()
1) NO es extensible  Object.isExtensible()
2) SI esta sellado   Object.isSealed() */
console.log(Object.isExtensible(freeze)); // false -> El objetoLiteral {} NO es extensible

/* porq despues de ejecutar Object.freeze()
NO puedo agregar nuevas propiedad: valor, al objeto literal */
freeze.uno = 1;      // nombreObjeto.nombreNuevaPropiedad = 'nuevo valor';
console.log(freeze); // {}

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Object.seal()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#using_object.issealed */

/* Sellar (seal) objeto,
Object.seal() NO permite eliminar NI agregar propiedad: valor, al objeto
y SI permite modificar propiedad: valor, existentes del objeto */
const seal = Object.seal({});
console.log(seal); // {}

// Object.isFrozen() devuelve true porq NO se puede MODIFICAR el OBJETO VACIO {}
console.log(Object.isFrozen(seal)); // true

// Object.isSealed() devuelve true porq NO se puede AGREGAR O ELIMINAR propiedad: valor, al objeto objeto
console.log(Object.isSealed(seal)); // true

// Object.isExtensible() devuelve false
console.log(Object.isExtensible(seal)); // false -> El objetoLiteral {} NO es extensible

/* porq despues de ejecutar Object.seal()
NO puedo agregar nuevas propiedad: valor, al objeto literal

O en otras palabras:
Un objeto sellado Object.seal()
NO es extensible Object.isExtensible() */
seal.uno = 1;
console.log(seal); // {}

/* -- */

/* Object.seal() SI permite modificar
el valor de una propiedad existente */
const seal2 = Object.seal({ uno: 1 });
console.log(seal2);
// { uno: 1 }

/* Object.isFrozen() devuelve false porq
SI se puede MODIFICAR el valor de la propiedad uno del objeto q tiene datos */
console.log(Object.isFrozen(seal2));
// false

seal2.uno = 'nuevo valor';
console.log(seal2);
// { uno: 'nuevo valor' }

/* -- */

const seal3 = Object.seal({
  get p() {
    return 0;
  },
});
console.log(seal3);
// { p: [Getter] }

// solo la configurabilidad importa para las propiedades del acceso
console.log(Object.isFrozen(seal3));
// true

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Object.preventExtensions() */

// Objeto NO extensible (preventExtensions)
const preventExtensions = Object.preventExtensions({});
console.log(preventExtensions); // {}

/* Object.isFrozen() y Object.isSealed()
devuelven true porq al ejecutar anteriormente Object.preventExtensions()
hace q el objeto NO sea extensible */
console.log(Object.isFrozen(preventExtensions)); // true -> El objetoLiteral {} SI esta congelado
console.log(Object.isSealed(preventExtensions)); // true -> "                         " sellado

// Object.isExtensible() devuelve false
console.log(Object.isExtensible(preventExtensions)); // false -> El objetoLiteral {} NO es extensible

/* porq despues de ejecutar Object.preventExtensions()
NO puedo agregar nuevas propiedad: valor, al objeto literal */
preventExtensions.uno = 1;
console.log(preventExtensions); // {}

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Object.isFrozen() Object.isSealed() y Object.isExtensible()
en objeto literal vacio {} y con datos { uno: 1 } */

// Object.freeze()
const vacioFreeze = Object.freeze({});
const datosFreeze = Object.freeze({ uno: 1 });

console.log(Object.isFrozen(vacioFreeze));     // true
console.log(Object.isFrozen(datosFreeze));     // true

console.log(Object.isSealed(vacioFreeze));     // true
console.log(Object.isSealed(datosFreeze));     // true

console.log(Object.isExtensible(vacioFreeze)); // false
console.log(Object.isExtensible(datosFreeze)); // false

/* --- */

// Object.seal()
const vacioSeal = Object.seal({});
const datosSeal = Object.seal({ uno: 1 });

console.log(Object.isFrozen(vacioSeal));     // true
console.log(Object.isFrozen(datosSeal));     // false

console.log(Object.isSealed(vacioSeal));     // true
console.log(Object.isSealed(datosSeal));     // true

console.log(Object.isExtensible(vacioSeal)); // false
console.log(Object.isExtensible(datosSeal)); // false

/* --- */

// Object.preventExtensions()
const vacioPreventExtensions = Object.preventExtensions({});
const datosPreventExtensions = Object.preventExtensions({ uno: 1 });

console.log(Object.isFrozen(vacioPreventExtensions));     // true
console.log(Object.isFrozen(datosPreventExtensions));     // false

console.log(Object.isSealed(vacioPreventExtensions));     // true
console.log(Object.isSealed(datosPreventExtensions));     // false

console.log(Object.isExtensible(vacioPreventExtensions)); // false
console.log(Object.isExtensible(datosPreventExtensions)); // false

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Object.defineProperty()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#using_object.issealed

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen#using_object.isfrozen */

const noEscribible = { uno: 1 };

/* Objeto q...
1) Object.preventExtensions() NO le puedo AGREGAR nuevas propiedad: valor, (NO extensible)
pero SI puedo ELIMINAR y MODIFICAR propiedad: valor, */
Object.preventExtensions(noEscribible);

console.log(Object.isFrozen(noEscribible));     // false
console.log(Object.isSealed(noEscribible));     // false
console.log(Object.isExtensible(noEscribible)); // false

// 2) writable: false, NO puedo MODIFICAR el valor de la propiedad
Object.defineProperty(noEscribible, 'uno', {
  writable: false, // INmutable
});

console.log(Object.isSealed(noEscribible));     // false
console.log(Object.isFrozen(noEscribible));     // false
console.log(Object.isExtensible(noEscribible)); // false

/* 3) configurable: false, NO permite usar value: writable: y enumerable:

configurable: false, hace q se congele el objeto
o en otras palabras
hace q devuelvan true Object.isSealed() y Object.isFrozen()  */

Object.defineProperty(noEscribible, 'uno', {
  configurable: false, // NO configurable
});

console.log(Object.isFrozen(noEscribible));     // true
console.log(Object.isSealed(noEscribible));     // true
console.log(Object.isExtensible(noEscribible)); // false

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Object.defineProperty()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#using_object.issealed

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen#using_object.isfrozen */

const noConfigurable = { uno: 1 };

/* Un objeto:
1) Object.preventExtensions() NO extensible
2) configurable: false,       NO configurable
pero la propiedad escribible AHUN NO ESTA congelada

Object.isFrozen() devuelve false */
Object.preventExtensions(noConfigurable);

console.log(Object.isFrozen(noConfigurable));     // false
console.log(Object.isSealed(noConfigurable));     // false
console.log(Object.isExtensible(noConfigurable)); // false

Object.defineProperty(noConfigurable, 'uno', {
  configurable: false,
});

console.log(Object.isFrozen(noConfigurable));     // false
console.log(Object.isSealed(noConfigurable));     // true
console.log(Object.isExtensible(noConfigurable)); // false

/* Al cambiar la propiedad a NO escribible  writable: false, se congela el objeto

Object.isFrozen() devuelve true */
Object.defineProperty(noConfigurable, 'uno', {
  writable: false,
});

console.log(Object.isFrozen(noConfigurable));     // true
console.log(Object.isSealed(noConfigurable));     // true
console.log(Object.isExtensible(noConfigurable)); // false

/* --------------------------------------------------------------- */

/* Ejemplo 8 - Object.defineProperty()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#using_object.issealed

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen#using_object.isfrozen */

/* Un objeto NO se congela cuando
(Object.isFrozen() devuelve false):
1) Object.preventExtensions() NO es extensible
2) configurable: true,        SI es configurable */
const accessor = {
  get food() {
    return 'hola mundo';
  },
};
console.log(accessor);
// { food: [Getter] }

Object.defineProperty(accessor, 'food', {
  configurable: true,
});

Object.preventExtensions(accessor);

console.log(Object.isFrozen(accessor));     // false
console.log(Object.isSealed(accessor));     // false
console.log(Object.isExtensible(accessor)); // false

/* configurable: false, y Object.preventExtensions() congelan el objeto
(Object.isFrozen() devuelve true) */
Object.defineProperty(accessor, 'food', {
  configurable: false,
});

console.log(Object.isFrozen(accessor));     // true
console.log(Object.isSealed(accessor));     // true
console.log(Object.isExtensible(accessor)); // false

/* --------------------------------------------------------------- */

/* Ejemplo 9 - Object.isFrozen() Object.isSealed() y Object.isExtensible() en datos primitivos (q NO son objetos)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen#non-object_argument

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed#non-object_argument

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible#non-object_argument

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError */

/* ANTES en ES5 daba TypeError
al usar Object.isFrozen() Object.isSealed() y Object.isExtensible()
con datos primitivos (q NO son objetos) */
console.log(Object.isFrozen(1));     // TypeError: 1 is not an object -> (ES5 code)
console.log(Object.isSealed(1));     // TypeError: 1 is not an object -> (ES5 code)
console.log(Object.isExtensible(1)); // TypeError: 1 is not an object -> (ES5 code)

/* ACTUALMENTE despues de ES6 (2015) devuelven un booleano,
Object.isFrozen() y Object.isSealed() devuelven true,
en cambio Object.isExtensible() devuelve false */

// Number()
console.log(Object.isFrozen(1));     // true  -> (ES6 code)
console.log(Object.isSealed(1));     // true  -> (ES6 code)
console.log(Object.isExtensible(1)); // false -> (ES6 code)

// String()
console.log(Object.isFrozen(''));     // true  -> (ES6 code)
console.log(Object.isSealed(''));     // true  -> (ES6 code)
console.log(Object.isExtensible('')); // false -> (ES6 code)

// BigInt()
console.log(Object.isFrozen(BigInt(1)));     // true  -> (ES6 code)
console.log(Object.isSealed(BigInt(1)));     // true  -> (ES6 code)
console.log(Object.isExtensible(BigInt(1))); // false -> (ES6 code)

// Boolean()
console.log(Object.isFrozen(true));  // true  -> (ES6 code)
console.log(Object.isFrozen(false)); // true  -> (ES6 code)

console.log(Object.isSealed(true));  // true  -> (ES6 code)
console.log(Object.isSealed(false)); // true  -> (ES6 code)

console.log(Object.isExtensible(true));  // false -> (ES6 code)
console.log(Object.isExtensible(false)); // false -> (ES6 code)

// Symbol()
console.log(Object.isFrozen(Symbol('ID_1')));     // true  -> (ES6 code)
console.log(Object.isSealed(Symbol('ID_2')));     // true  -> (ES6 code)
console.log(Object.isExtensible(Symbol('ID_3'))); // false -> (ES6 code)

// null
console.log(Object.isFrozen(null));     // true -> (ES6 code)
console.log(Object.isSealed(null));     // true -> (ES6 code)
console.log(Object.isExtensible(null)); // false -> (ES6 code)

// undefined
console.log(Object.isFrozen(undefined));     // true -> (ES6 code)
console.log(Object.isSealed(undefined));     // true -> (ES6 code)
console.log(Object.isExtensible(undefined)); // false -> (ES6 code)

// NaN
console.log(Object.isFrozen(NaN));     // true -> (ES6 code)
console.log(Object.isSealed(NaN));     // true -> (ES6 code)
console.log(Object.isExtensible(NaN)); // false -> (ES6 code)

/* --------------------------------------------------------------- */

/* Ejemplo 10:
Ambos Object.isFrozen() y Object.isSealed()
al ejecutar solo el metodo del objeto
SIN el nombreObjeto devuelven true */
console.log(Object.isFrozen()); // true
console.log(Object.isSealed()); // true

// En cambio, Object.isExtensible() devuelve false
console.log(Object.isExtensible()); // false
