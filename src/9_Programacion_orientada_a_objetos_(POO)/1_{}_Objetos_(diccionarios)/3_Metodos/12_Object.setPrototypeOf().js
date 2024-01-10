/* eslint-disable func-names */
/* eslint-disable max-classes-per-file */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Object.setPrototypeOf() ESTABLECER el Valor del Prototipo __proto__  de un objeto1 a otro objeto2 o null

Documentación Oficial...
- Object.setPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

- Object.prototype.__proto__ (obsoleto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

- Reflect.getPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf

- Reflect.setPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf

ADVERTENCIA: ⚠️
Segun la MDN a la fecha Mayo 2023
modificar el valor de la propiedad [[Prototype]] de un objeto
usando el metodo Object.setPrototypeOf()
es muy lento en todos los navegadores y motores de JS (NodeJS)
porque no están optimizados para esto

Una alternativa es q
en vez de modificar el valor de [[Prototype]] con Object.setPrototypeOf()
cree un nuevo prototipo del objeto usando Object.create()

En este link hay mas informacion de esto:
https://mathiasbynens.be/notes/prototypes

Object.prototype.__proto__ esta obsoleto y ha sido reemplazado por:
- Object.getPrototypeOf() / Reflect.getPrototypeOf()
- Object.setPrototypeOf() / Reflect.setPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description

ESTABLECER el Valor del Prototipo de un objeto1 a otro objeto2. Cuando no se establece es null

El valor del prototipo esta en la propiedad interna [[Prototype]]

Sintaxis:
Object.setPrototypeOf(obj, prototype)

Donde...
- Object.setPrototypeOf()
Nombre del método

- obj
Objeto hijo en el q se establece (define) el prototipo

- prototype
Objeto padre, es el prototipo de obj

Es un objeto o null

El objeto hijo obj hereda las
propiedades y metodos del objeto padre prototype */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre Object.getPrototypeOf() y Object.setPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#try_it */

// Crear obj objeto HIJO vacio {}
const obj = {};
console.log(obj);
// {}

/* Crear prototype objeto PADRE

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
console.log(Object.getPrototypeOf(obj));       // { uno: 1 }                   -> objeto hijo
console.log(Object.getPrototypeOf(prototype)); // [Object: null prototype] {}  -> "    " padre

/* Imprimir propiedad: valor, de los objetos

El objeto hijo obj { __proto__: { uno: 1 } }
hereda las propiedades y metodos del objeto padre prototype { uno: 1 } */
console.log(prototype); // { uno: 1 }
console.log(obj);       // { __proto__: { uno: 1 } }

/* Object.entries() recorrer (iterar) objeto literal {}
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

/* --------------------------------------------------------------- */

/* Ejemplo 2 - ¿Cuando da error Object.setPrototypeOf()?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#exceptions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible

https://developer.mozilla.org/en-US/docs/Web/API/Window

https://tc39.es/ecma262/#sec-immutable-prototype-exotic-objects

Object.setPrototypeOf(obj, prototype) da TypeError
cuando se cumple ALGUNO de los siguientes casos:

1) obj es null ó undefined */
// Object.setPrototypeOf(undefined, {}) // TypeError: Object.setPrototypeOf called on null or undefined
//                          ↑

// Object.setPrototypeOf(null, {});     // TypeError: Object.setPrototypeOf called on null or undefined
//                        ↑

/* 2) prototype es un dato primitivo
(NO es un objeto) y es DIFERENTE DE null */

// String()
// Object.setPrototypeOf({}, '');         // TypeError: Object.setPrototypeOf called on null or undefined

// Number()
// Object.setPrototypeOf({}, 123);        // TypeError: Object.setPrototypeOf called on null or undefined

// BigInt()
// Object.setPrototypeOf({}, BigInt(99)); // TypeError: Object.setPrototypeOf called on null or undefined

// Boolean()
// Object.setPrototypeOf({}, true);       // TypeError: Object.setPrototypeOf called on null or undefined
// Object.setPrototypeOf({}, false);      // TypeError: Object.setPrototypeOf called on null or undefined

// Symbol()
// Object.setPrototypeOf({}, Symbol(1));  // TypeError: Object.setPrototypeOf called on null or undefined

// undefined y NaN
// Object.setPrototypeOf({}, undefined);  // TypeError: Object.setPrototypeOf called on null or undefined
// Object.setPrototypeOf({}, NaN);        // TypeError: Object prototype may only be an Object or null: NaN

/* null

Cuando prototype es un dato primitivo,
null es el UNICO q NO da error */
console.log(Object.setPrototypeOf({}, null)); // [Object: null prototype] {}
//                                     ↑

// 3) obj es null ó undefined
// Object.setPrototypeOf(undefined, {}); // TypeError: Object.setPrototypeOf called on null or undefined
//                          ↑

// Object.setPrototypeOf(null, {});      // TypeError: Object.setPrototypeOf called on null or undefined
//                        ↑

/* 4) obj NO es extensible Object.isExtensible(),
es decir q a obj NO le puedo agregar nuevas propiedad: valor,

nombreObjeto.nombreNuevaPropiedad = "nuevo valor";

CASO ESPECIAL (EXCEPCION):
Sin embargo, NO da error si
el prototipo prototype tiene el
mismo valor q el prototipo de obj,
esto ocasiona q se devuelva obj.
Incluso cuando obj tiene un prototipo inmutable. */

const obj2 = Object.preventExtensions({}); // obj NO es extensible
console.log(obj2);
// {}

// Object.isExtensible() ¿puedo AGREGAR nuevas propiedad: valor, al objeto obj2?
console.log(Object.isExtensible(obj2));
// false -> NO

const parent2 = { uno: 1 };
console.log(parent2);
// { uno: 1 }

// Object.setPrototypeOf() Da error porq obj2 NO es extensible
// console.log(Object.setPrototypeOf(obj2, parent2));
// TypeError: #<Object> is not extensible

/* 5) obj es un prototipo de objeto exótico inmutable (immutable prototype exotic object)
como por ejemplo
- window
- Object.prototype */
// console.log(Object.setPrototypeOf(Object.prototype, {})); // TypeError: Immutable prototype object '#<Object>' cannot have their prototype set
// console.log(Object.setPrototypeOf(window, {}));           // TypeError: Immutable prototype object '#<Window>' cannot have their prototype set

/* --------------------------------------------------------------- */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description

https://github.com/tc39/ecma262/issues/272 */

/* Object.prototype SI es extensible Object.isExtensible(),
es decir, q SI permite agregar nuevas propiedad: valor, */
Object.isExtensible(Object.prototype);
// true

// Object.setPrototypeOf(Object.prototype, {});
// TypeError: El objeto de prototipo inmutable '#<Object>' no puede tener su conjunto de prototipos

// No da error porq el prototipo de Object.prototype ya es null
console.log(Object.setPrototypeOf(Object.prototype, null));
// [Object: null prototype] {}

// console.log(Object.setPrototypeOf(Object.prototype, undefined));
/*                                                         ↑
TypeError:
El prototipo del objeto solo puede ser
un objeto o null
y su valor es undefined */

/* --------------------------------------------------------------- */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description

Cuando se cumplen estas condiciones:
1) obj es un dato primitivo (NO es un objeto)

2) obj es DIFERENTE de null y undefined

entonces Object.setPrototypeOf() devuelve el dato primitivo de obj */

// String()
console.log(Object.setPrototypeOf('', {}));         // ''
//                                ↑

// Number()
console.log(Object.setPrototypeOf(123, {}));        // 123
//                                ↑

// BigInt()
console.log(Object.setPrototypeOf(BigInt(99), {})); // 99n
//                                   ↑

// Boolean()
console.log(Object.setPrototypeOf(true, {}));       // true
console.log(Object.setPrototypeOf(false, {}));      // false
//                                 ↑

// Symbol()
console.log(Object.setPrototypeOf(Symbol('ID'), {}));  // Symbol(ID)
//                                   ↑

// NaN
console.log(Object.setPrototypeOf(NaN, {}));        // NaN
//                                ↑

/* --------------------------------------------------------------- */

/* Ejemplo 5:
Cuando no se escribe nada
dentro del par de parentesis de Object.setPrototypeOf() da error */

// console.log(Object.setPrototypeOf());
// TypeError: Object.setPrototypeOf invocado en null o undefined

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Herencia de Pseudo-clases usando Object.setPrototypeOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#pseudoclassical_inheritance_using_object.setprototypeof

Este articulo de la MDN
llamado cadenas de herencia habla de
la herencia clásica (con clases)
y la herencia de pseudo-clases (con la propiedad prototype de los constructores):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains

Debido a q la propiedad prototype de los constructores new de funciones
se puede modificar, entonces se puede re-asignar a un nuevo objeto {} creado con Object.create()
para lograr la misma cadena de herencia.

Hay advertencias a tener en cuenta
cuando se utiliza create(),
como recordar volver a agregar la propiedad del Object.prototype.constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor */

/* Clase class Human

Documentación Oficial - Clases:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes */

class Human {} // clase

/* Clase class SuperHero que se extiende (hereda de) la clase class Human

Documentación Oficial - extends
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends */

class SuperHero extends Human {} // sub-clase

/* Documentación Oficial - operador new
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new */

const superMan = new SuperHero();
console.log(superMan);
/*
SuperHero {
  __proto__: { constructor: ƒ SuperHero() }
}
*/

/* Funciones para crear sub-clases sin usar class

Documentación Oficial - this
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this */

function Human2(nombre, nivel) { // clase
  this.nombre = nombre;
  this.nivel = nivel;
}

/* En funcion SuperHero2()
ejecutar funcion Human2 usando call
para asignar las propiedades nombre y nivel

Documentación Oficial - call()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call */

function SuperHero2(nombre, nivel) { // sub-clase
  Human2.call(this, nombre, nivel);
}

console.log(Human2.prototype);     // {}
console.log(SuperHero2.prototype); // {}

// Object.setPrototypeOf()
console.log(Object.setPrototypeOf(SuperHero2.prototype, Human2.prototype));
// Human2 {}

/* Establecer el valor del prototipo [[Prototype]] de SuperHero2.prototype a Human2.prototype
para establecer la herencia prototípica

Herencia Prototípica...
- Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

- JavaScript Info:
https://javascript.info/prototype-inheritance */

// Clase Human2 q tiene metodo .hablar
Human2.prototype.hablar = function () {
  return `${this.nombre} puede decir hola`; // "Human2 puede decir hola"
};

// Sub-clase SuperHero2 q tiene metodo .volar
SuperHero2.prototype.volar = function () {
  return `${this.nombre} puede volar `;     // "SuperHero2 puede volar"
};

/* Asignar (dar) valores a las clases
y guardarlos en variable superMan2 */
const superMan2 = new SuperHero2('Daniel', '1'); // SuperHero2(nombre, nivel)
console.log(superMan2);
/*
SuperHero2 {
  nombre: 'Daniel',
  nivel: '1',
  __proto__: {
    volar: ƒ (),
    hablar: ƒ (),
    constructor: ƒ SuperHero2()
  }
}
*/

// Acceder a los valores de las propiedades de las clases
console.log(superMan2.nombre);   // "Daniel"
console.log(superMan2.nivel);    // 1

// Ejecutar los metodos .hablar() y .volar() q estan en las clases
console.log(superMan2.hablar()); // "Daniel puede decir hola"
console.log(superMan2.volar());  // "Daniel puede volar"

/* Object.getPrototypeOf()
Acceder al valor de la propiedad __proto__ de la variable superMan2 */
console.log(Object.getPrototypeOf(superMan2));
// Human2 { volar: [Function (anonymous)] }

/* --------------------------------------------------------------- */

/* Ejemplo 7:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#pseudoclassical_inheritance_using_object.setprototypeof

En este actual Ejemplo 7 al igual q el anterior Ejemplo 6 tambien
se hereda la clase Human sin usar extends usando Object.setPrototypeOf()

Aunque hacer esto es MALA practica
porq tiene problemas de rendimiento y codigo limpio.
Lo correcto es usar extends

En este articulo de la MDN
hay mas informacion de
subclasificación sin extends
https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/ */

class Human3 {}
class SuperHero3 {}

console.log(SuperHero3.prototype); // {}
console.log(Human3.prototype);     // {}

/* Object.setPrototypeOf()
Establecer las propiedades de la instancia */
console.log(
  Object.setPrototypeOf(SuperHero3.prototype, Human3.prototype),
);
/*
Human3 {constructor: ƒ}
    constructor: class SuperHero3
    [[Prototype]]: Object
*/

/* Object.setPrototypeOf()
Conectar las propiedades estáticas */
console.log(
  Object.setPrototypeOf(SuperHero3, Human3),
);
// class SuperHero3 {}

const superMan3 = new SuperHero3();
console.log(superMan3);
/*
SuperHero3 {
  __proto__: { constructor: ƒ SuperHero3() }
}
*/

/* Object.getPrototypeOf()
Acceder al valor de la propiedad __proto__ de la variable superMan3 */
console.log(Object.getPrototypeOf(superMan3));
/*
Human3 {constructor: ƒ}
  constructor: class SuperHero3
  [[Prototype]]: Object
*/
