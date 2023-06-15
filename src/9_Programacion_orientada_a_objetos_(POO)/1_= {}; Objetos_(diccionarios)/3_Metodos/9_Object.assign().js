/* eslint-disable array-callback-return */

/* eslint-disable prefer-object-spread */
/* eslint-disable max-len */
// @ts-nocheck

/*
Object.assign() Concatenar (unir) objeto literal {}

Documentacion Oficial - Object.assign()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

Object.assign() concatena (une) un solo o mas objetos literales {}

Recordatorio:
Ver:
" Ejemplo 3 - ¿Que son las propiedades enumerable: true enumerables (visible)
y enumerable: false no enumerables (oculta)? "

Object.assign() COPIA las propiedad: valor,
de un objetoLiteral1 (origen, source)
y las PEGA en otro objetoLiteral2 (destino, target)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable

Object.assign() copia y pega las siguientes propiedades:
- Propiedades enumerables
- Propiedades de tipo texto String()
- Propiedades de tipo identificador unico (ID) Symbol()

Object.assign() modifica (muta) el objetoLiteral2 (destino, target)

Object.assign() usa getters en el objeto origen y setters en el objeto destino
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

Sintaxis:
Object.assign(target, ...sources)
Object.assign(destino, ...origenes)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#syntax

Donde...
- Object.assign()
Es el nombre del metodo

- objeto literal {} origen (sources):
* Son las propiedad: valor, q voy a COPIAR

* Puede ser un solo objeto literal {} o mas

- objeto literal {} destino (target):
* Objeto donde voy a PEGAR las propiedad: valor,

* Es UN SOLO objeto literal {}

* target se MODIFICA (muta) despues de ejecutar Object.assign() */

/* --------------------------------------------------------------- */

/* Ejemplo 1:

Recordatorio:
Puedo usar Object.assign() para convertir de string a array, ver:
" 8.5.3.10.5) Object.assign() Método de Objeto " */

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Copiar un objetoLiteral1 (origen) y pegarlo en otro objetoLiteral2 (destino):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#try_it */

/* objetoLiteral1 {} (origen, source):
Son las propiedad: valor, q voy a COPIAR */
const source = {
// propiedad: valor,
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
// propiedad: valor,
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

// los objetos concatenar y destino (target) son iguales
console.log(concatenar === target);
// true

/* Se ha modificado el objeto destino (target)
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

/* --------------------------------------------------------------- */

// Ejemplo 3 - Objetos origen (source) y destino (target) con la misma propiedad (clave)

/* Los objetos literales {} origen y destino
tienen el mismo nombre de propiedad (clave) llamado mismaPropiedad:
lo que cambia es el valor de mismaPropiedad de acuerdo al nombre del objeto */
const origen = {
// propiedad: valor,
  mismaPropiedad: 'origen',
  dos: 2,
};
console.log(origen);
/*
{
  mismaPropiedad: 'origen',
  dos: 2
}
*/

const destino = {
// propiedad: valor,
  mismaPropiedad: 'destino',
  tres: 3,
};
console.log(destino);
/*
{
  mismaPropiedad: 'destino',
  tres: 3
}
*/

// Object.assign() COPIAR propiedad: valor, de origen y PEGARLO en destino
Object.assign(destino, origen);

/* Si el objeto origen (source) y destino (target)
tienen el mismo nombre de propiedad (clave),
entonces las propiedad: valor del objeto destino
se sobrescriben con las propiedades de los objetos origen

El objeto origen tiene mismaPropiedad: 'origen',
y el destino tiene mismaPropiedad: 'destino',
cuando Object.assign() COPIO objeto origen y lo PEGO en destino
se pega SOLAMENTE la mismaPropiedad: 'origen', en el objeto destino
porque la propiedad (clave) tiene los mismos nombres en objetos origen y destino

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#merging_objects_with_same_properties */
console.log(destino);
/*
{
  mismaPropiedad: 'origen',
  tres: 3,
  dos: 2
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Clonacion profunda de objeto literal {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#cloning_an_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#warning_for_deep_clone

https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

                               |---------------------------------------------|----------------------|
                               | ¿Al modificar valores del objeto origen2    | origen2 === destino2 |
                               | también se modifican en el objeto destino2? |                      |
|------------------------------|---------------------------------------------|----------------------|
| = operador de asignación     | ✓                                           | true                 |
|------------------------------|---------------------------------------------|----------------------|
| Object.assign()              | X                                           | false                |
|------------------------------|---------------------------------------------|----------------------|
| JSON.parse(JSON.stringify()) | X                                           | false                |
|------------------------------|---------------------------------------------|----------------------| */

// Hacer q dos objetos literales {} tengan las mismas propiedad: valor,
let origen2 = { uno: 1 };
console.log(origen2);
// { uno: 1 }

// Forma 1: operador de asignacion =
let destino2 = origen2;
console.log(destino2);
// { uno: 1 }

/* Al usar el operador de asignacion =
los objetos origen2 y destino2 son exactamente iguales */
console.log(origen2 === destino2);
// true

/* Al usar el operador de asignacion =
SI modifico valores del objeto origen2
también se modifican en el objeto destino2 */
origen2.uno = 'NUEVO VALOR';
console.log(origen2);  // { uno: 'NUEVO VALOR' }
console.log(destino2); // { uno: 'NUEVO VALOR' }

// Hacer q objeto origen2 vuelva a tener uno: 1,
origen2 = { uno: 1 };
console.log(origen2);
// { uno: 1 }

// vaciar objeto destino2
destino2 = {};
console.log(destino2);
// {}

// Forma 2: Object.assign()
destino2 = Object.assign({}, origen2);
console.log(destino2);
// { uno: 1 }

/* Al usar Object.assign()
a pesar de q origen2 y destino2 tienen los mismos propiedad: valor,
cuando los comparo devuelve false */
console.log(origen2 === destino2);
// false

/* Al usar Object.assign()
el valor SOLAMENTE se modifica en el objeto origen2 */
origen2.uno = 'NUEVO VALOR';
console.log(origen2);  // { uno: 'NUEVO VALOR' }
console.log(destino2); // { uno: 1 }

// Hacer q objeto origen2 vuelva a tener uno: 1,
origen2 = { uno: 1 };
console.log(origen2);
// { uno: 1 }

// vaciar objeto destino2
destino2 = {};
console.log(destino2);
// {}

/* Forma 3: JSON.parse(JSON.stringify())

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify */
destino2 = JSON.parse(JSON.stringify(origen2));
console.log(destino2);
// { uno: 1 }

/* Al usar JSON.parse(JSON.stringify())
a pesar de q origen2 y destino2 tienen los mismos propiedad: valor,
cuando los comparo devuelve false */
console.log(origen2 === destino2);
// false

/* Al usar JSON.parse(JSON.stringify())
el valor SOLAMENTE se modifica en el objeto origen2 */
origen2.uno = 'NUEVO VALOR';
console.log(origen2);  // { uno: 'NUEVO VALOR' }
console.log(destino2); // { uno: 1 }

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Concatenar (unir) varios objetos literales {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#merging_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#merging_objects_with_same_properties */

// Tengo 3 objetos literales q quiero concatenar (unir)
let objetoLiteral1 = { uno: 1 };
console.log(objetoLiteral1);
// { uno: 1 }

const objetoLiteral2 = { dos: 2 };
console.log(objetoLiteral2);
// { dos: 2 }

const objetoLiteral3 = { tres: 3 };
console.log(objetoLiteral3);
// { tres: 3 }

let concatenar2 = Object.assign(objetoLiteral1, objetoLiteral2, objetoLiteral3);

// Object.assign() modifica el objeto destino (target) q es el objetoLiteral1
console.log(concatenar2);    // { uno: 1, dos: 2, tres: 3 }
console.log(objetoLiteral1); // { uno: 1, dos: 2, tres: 3 }

// Los otros objetos (origen, source) NO se modifican
console.log(objetoLiteral2); // { dos: 2 }
console.log(objetoLiteral3); // { tres: 3 }

// Vaciar objeto concatenar2 {}
concatenar2 = {};
console.log(concatenar2);
// {}

// Hacer q objetoLiteral1 tenga otra vez uno: 1
objetoLiteral1 = { uno: 1 };
console.log(objetoLiteral1);
// { uno: 1 }

/* Para concatenar (unir) uno o mas objetos literales
y q NO se modifique ningun objeto literal
- Guardar Object.assign() en una variable
- Copiar {} en el destino (target)

De la siguiente forma: */
concatenar2 = Object.assign({}, objetoLiteral1, objetoLiteral2, objetoLiteral3);
console.log(concatenar2);    // { uno: 1, dos: 2, tres: 3 }

console.log(objetoLiteral1); // { uno: 1 }
console.log(objetoLiteral2); // { dos: 2 }
console.log(objetoLiteral3); // { tres: 3 }

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Concatenar (unir) objetos literales con propiedades (claves) de tipo Symbol()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copying_symbol-typed_properties */

const fantasma = Symbol('fantasma');
console.log(fantasma);
// Symbol(fantasma)

const objSymbol = {
// propiedad: valor,
  [fantasma]: '👻', // Symbol()
  uno: 1,
};
console.log(objSymbol);
/*
{
  uno: 1,
  [Symbol(fantasma)]: '👻'
}
*/

const obj = { dos: 2 };
console.log(obj);
// { dos: 2 }

const concatenar3 = Object.assign({}, objSymbol, obj);
console.log(concatenar3);
/*
{
  uno: 1,
  dos: 2,
  [Symbol(fantasma)]: '👻'
}
*/

console.log(objSymbol); // { uno: 1, [Symbol(fantasma)]: '👻' }
console.log(obj);       // { dos: 2 }

/* --------------------------------------------------------------- */

/* Ejemplo 7:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#properties_on_the_prototype_chain_and_non-enumerable_properties_cannot_be_copied */

// En un principio el objetoLiteral esta vacio {}
const objetoLiteral = {};
console.log(objetoLiteral);
// {}

// Pero despues le agrego dos nuevas propiedad: valor, usando Object.defineProperties()
Object.defineProperties(objetoLiteral, {
  1: {                          // Propiedad del objeto
    enumerable: true,           // hacer VISIBLE la propiedad: valor, por consola console.log()
    value: 'SI soy enumerable', // Valor del objeto
  },

  2: {
    enumerable: false,          // OCULTAR propiedad: valor, por consola console.log()
    value: 'NO soy enumerable',
  },
});

/* Por consola console.log()
solo puedo ver las propiedad: valor,
q son enumerables enumerable: true, */
console.log(objetoLiteral);
// { '1': 'SI soy enumerable' }

/* Object.getOwnPropertyNames()
Recorrer (iterar) propiedad: valor, enumerables
y NO enumerables del objetoLiteral */
Object.getOwnPropertyNames(objetoLiteral).map((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);

  // return
});
/*
1 ➜ SI soy enumerable
2 ➜ NO soy enumerable
*/

/* Object.assign() SOLAMENTE copia las propiedades enumerables

Del objetoLiteral se copia la propiedad: valor, enumerable q es 1 ➜ SI soy enumerable */
const concatenar4 = Object.assign({}, objetoLiteral);
console.log(concatenar4);
// 1 ➜ SI soy enumerable

Object.getOwnPropertyNames(concatenar4).map((propiedad) => {
  const valor = concatenar4[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
// 1 ➜ SI soy enumerable

/* --------------------------------------------------------------- */

/* Ejemplo 8 - Metodo de objeto Object.assign() en datos primitivos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#primitives_will_be_wrapped_to_objects */

// Guardo en variables TODOS los tipos de datos primitivos
const string = 'hola mundo';
const number = 123;
const bigInt = BigInt(1n);
const verdadero = true;
const falso = false;
const symbol = Symbol('symbol');
const nulo = null;
const indefinido = undefined;
const noEsUnNumero = NaN;

/* Object.assign() devuelve un objeto vacio {}
con todos los tipos de datos primitivos
EXCEPTO el tipo texto String(),
que devuelve un objeto con { indice: caracter } */
let concatenar5 = Object.assign({}, number, bigInt, verdadero, falso, symbol, nulo, indefinido, noEsUnNumero);
console.log(concatenar5);
// {}

concatenar5 = Object.assign({}, string);
console.log(concatenar5);
/*
{
  '0': 'h',
  '1': 'o',
  '2': 'l',
  '3': 'a',
  '4': ' ',
  '5': 'm',
  '6': 'u',
  '7': 'n',
  '8': 'd',
  '9': 'o'
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 9
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#exceptions_will_interrupt_the_ongoing_copying_task */

const objeto = Object.defineProperty({}, 'mismaPropiedad', {
  value: 1,         // valor del objeto
  writable: false,  // propiedad: valor, q NO se puede modificar (INmutable)
  enumerable: true, // hacer VISIBLE la propiedad: valor, por consola console.log()
});
console.log(objeto);
// { mismaPropiedad: 1 }

const objeto2 = { mismaPropiedad: 2 };
console.log(objeto2);
// { mismaPropiedad: 2 }

/* El error es porq:
1) objeto y objeto2 tienen el mismo
nombre de propiedad (clave) q es 'mismaPropiedad'

2) objeto es INmutable */
Object.assign(objeto, objeto2);
/* Uncaught TypeError: Cannot assign to read only property 'mismaPropiedad' of object '#<Object>'
    at Function.assign (<anonymous>)
    at <anonymous>:12:8 */
