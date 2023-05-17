/* eslint-disable max-classes-per-file */
/* eslint-disable no-prototype-builtins */

/* eslint-disable max-len */
// @ts-nocheck

/*
Documentacion Oficial...
- .isPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf

- instanceof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

Stack Overflow - Diferencia Entre .isPrototypeOf() y instanceof
https://stackoverflow.com/questions/2464426/whats-the-difference-between-isprototypeof-and-instanceof-in-javascript

.isPrototypeOf() ¿El objeto1 si está o no en la Cadena de Prototipos de Otro objeto2?

Su sintaxis es:
nombreObjeto1.isPrototypeOf(nombreObjeto2)

Object.prototype.isPrototypeOf(nombreObjeto)

Donde...
- .isPrototypeOf()
Nombre del metodo de objeto

- nombreObjeto1 y nombreObjeto2
Nombres de objetos q quiero saber si son o no prototipos

Comprobar si nombreObjeto1 es prototipo de nombreObjeto2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#return_value

Comprueba cada vínculo en la cadena del prototipado

- Object.prototype
objeto prototipo base en JS

- nombreObjeto
Objeto que quiero saber si es o no un prototipo */

/* --------------------------------------------------------------- */

// Ejemplo 1 - ¿Que es Cadena de Prototipos?

/*
Recordatorio:
Ver:
" 12.1.5.2.10.1) Object.create() Crear un Nuevo Objeto que Hereda las Propiedades y Métodos de un Objeto Existente (Prototipo) " */

const objetoLiteral1 = Object.create(Object.prototype);
console.log(objetoLiteral1); // {}

const objetoLiteral2 = Object.create(objetoLiteral1); // Crear objetoLiteral2 con el objetoLiteral1 como prototipo
console.log(objetoLiteral2); // {}

const objetoLiteral3 = Object.create(objetoLiteral2); // Crear un objetoLiteral3 con el objetoLiteral2 como prototipo
console.log(objetoLiteral3); // {}

// Agregar nuevas propiedad: valor, a los objetos literales {}
objetoLiteral1.uno = 1; // nombreObjeto.nuevaPropiedad = nuevoValor
objetoLiteral2.dos = 2;
objetoLiteral3.tres = 3;

/* En este ejemplo __proto__ (prototipo)
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

// .isPrototypeOf() ¿El objeto1 si está o no en la Cadena de Prototipos de Otro objeto2?
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
" .hasOwnProperty() ¿Si Existe o no la Propiedad en el Objeto? "

.hasOwnProperty() devuelve true en las propiedades del objeto q NO son prototipos */
console.log(objetoLiteral1.hasOwnProperty('uno')); // true

// .hasOwnProperty() devuelve false en las propiedades del objeto q SI son prototipos
console.log(objetoLiteral2.hasOwnProperty('uno')); // false

console.log(objetoLiteral3.hasOwnProperty('uno')); // false
console.log(objetoLiteral3.hasOwnProperty('dos')); // false

/* --------------------------------------------------------------- */

/* Ejemplo 2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#try_it */

// Funciones q no hacen nada porq no tienen parametros ni cuerpo
function Funcion1() {}
function Funcion2() {}

/*
Se establece el prototipo de Funcion2
como un nuevo objeto creado a partir de Funcion1

Los objetos creados con Funcion2
tendrán acceso a los mismos métodos y propiedades
que los objetos creados con Funcion1 */
Funcion2.prototype = Object.create(Funcion1.prototype);
/*
Funcion1 {
    __proto__: { constructor: ƒ Funcion1() }
}
*/

// Guardar en variable2 una nueva instancia de Funcion2()
const variable2 = new Funcion2();
console.log(variable2);
// Funcion1 {}

// .isPrototypeOf()
console.log(Funcion1.prototype.isPrototypeOf(variable2)); // true
console.log(Funcion2.prototype.isPrototypeOf(variable2)); // true

/* --------------------------------------------------------------- */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

TODOS los objetos que heredan de Object.prototype
heredan el método .isPrototypeOf() */

const objNoNull = Object.create({});
console.log(objNoNull); // {}

console.log(Object.prototype.isPrototypeOf(objNoNull)); // true

// EXCEPTO los objetos null prototipo
const objNull1 = Object.create(null);
console.log(objNull1); // [Object: null prototype] {}

const objNull2 = { __proto__: null };
console.log(objNull2); // [Object: null prototype] {}

console.log(Object.prototype.isPrototypeOf(objNull1)); // false
console.log(Object.prototype.isPrototypeOf(objNull2)); // false

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Cadenas de prototipos:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#using_isprototypeof */

/* Todos Baz, Bar y Foo
tienen acceso a todos los
métodos y propiedades de Object

Clase Foo

foo: Foo --> Object */
class Foo {}

/* Clase Bar que se hereda extends de la clase Foo

Bar tiene acceso a todos los métodos y propiedades de Foo

bar: Bar --> Foo --> Object */
class Bar extends Foo {}

/* Clase Baz que se hereda extends de la clase Bar

Como Bar se extiende de Foo,
entonces Baz tiene acceso
a todos los métodos y propiedades de Bar y Foo

baz: Baz --> Bar --> Foo --> Object */
class Baz extends Bar {}

// Instancias de las clases Baz, Bar y Foo
const foo = new Foo();
const bar = new Bar();
const baz = new Baz();

console.log(foo); // Foo { __proto__: { constructor: ƒ Foo() } }
console.log(bar); // Bar { __proto__: { constructor: ƒ Bar() } }
console.log(baz); // Baz { __proto__: { constructor: ƒ Baz() } }

// .isPrototypeOf()
console.log(Foo.prototype.isPrototypeOf(baz));    // true
console.log(Foo.prototype.isPrototypeOf(bar));    // true

console.log(Bar.prototype.isPrototypeOf(baz));    // true
console.log(Bar.prototype.isPrototypeOf(foo));    // false

console.log(Baz.prototype.isPrototypeOf(baz));    // true
console.log(Baz.prototype.isPrototypeOf(bar));    // false
console.log(Baz.prototype.isPrototypeOf(foo));    // false

console.log(Object.prototype.isPrototypeOf(foo)); // true
console.log(Object.prototype.isPrototypeOf(bar)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true

console.log(Object.prototype.isPrototypeOf(Foo)); // true
console.log(Object.prototype.isPrototypeOf(Bar)); // true
console.log(Object.prototype.isPrototypeOf(Baz)); // true

/* .isPrototypeOf() y instanceof
sirven cuando se tiene un codigo que solamente puede funcionar
cuando se trata de objetos que descienden de una cadena de prototipo específica.
Ejemplo: Para garantizar que ciertos métodos o propiedades estarán presentes en ese objeto

Necesito ejecutar codigo si el objeto baz es prototipo de Foo.prototype

baz: Baz --> Bar --> Foo --> Object */

if (Foo.prototype.isPrototypeOf(baz)) {
  console.log('Foo SI es prototipo de baz');
} else {
  console.log('Foo NO es prototipo de baz');
}
// 'Foo SI es prototipo de baz'

/*
Sin embargo, la existencia de Foo.prototype en la cadena de prototipos de baz
no implica que baz haya sido creado usando Foo como su constructor.
Ejemplo: baz podría ser asignado directamente con Foo.prototype como su prototipo.
En este caso, si tu código lee la propiedad privada de clase (private class fields) de Foo desde baz, seguiría fallando:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields */

class Foo2 {
  #value = 'foo2'; // # significa q es una propiedad privada de clase

  static getValue(x) {
    return x.#value;
  }
}
console.log(Foo2);
// [class Foo2]

const baz2 = { __proto__: Foo2.prototype };
console.log(baz2);
// Foo2 { __proto__: { constructor: ƒ Foo2() } }

if (Foo2.prototype.isPrototypeOf(baz2)) {
  // TypeError: no se puede leer el #value del miembro privado de un objeto cuya clase no lo declaró
  // console.log(Foo.getValue(baz2));
}

/* Lo mismo sucede con instanceof.
Si necesita leer de forma segura
propiedad privada de clase (private class fields)
entonces use el operador in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in */

class Foo3 {
  #value = 'foo3';

  static getValue(x) {
    return x.#value;
  }

  static isFoo(x) {
    return #value in x; // operador in
  }
}
console.log(Foo3);
// [class Foo3]

const baz3 = { __proto__: Foo3.prototype };
console.log(baz3);
// Foo3 { __proto__: { constructor: ƒ Foo3() } }

// No se ejecuta, porque "baz" no es un "Foo"
if (Foo3.isFoo(baz3)) {
  console.log(Foo3.getValue(baz3));
}

/* --------------------------------------------------------------- */

/* Ejemplo 5:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#errors_thrown

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion

Si lo q esta dentro del par de parentesis de .isPrototypeOf()
es un tipo de dato primitivo (NO es un objeto)
entonces se devuelve false */

// String()
console.log({}.isPrototypeOf(''));           // false

// Number()
console.log({}.isPrototypeOf(1));            // false

// BigInt()
console.log({}.isPrototypeOf(BigInt(99)));   // false

// Boolean()
console.log({}.isPrototypeOf(true));         // false
console.log({}.isPrototypeOf(false));        // false

// Symbol()
console.log({}.isPrototypeOf(Symbol('ID'))); // false

// null - undefined
console.log({}.isPrototypeOf(null));         // false
console.log({}.isPrototypeOf(undefined));    // false

// NaN
console.log({}.isPrototypeOf(NaN));          // false
console.log(NaN.isPrototypeOf({}));          // NaN

// Ambos, null y undefined devuelven error si estan escritos ANTES del punto de .isPrototypeOf()
console.log(null.isPrototypeOf({}));
//           ↑
// TypeError: Cannot read properties of null (reading 'isPrototypeOf')

console.log(undefined.isPrototypeOf({}));
//             ↑
// TypeError: Cannot read properties of undefined (reading 'isPrototypeOf')
