/*
Tutorial Jon Mircha - Symbol()
https://youtu.be/XVBkTsj99so

Símbolo Symbol() es un identificador único (ID), es decir,
es un dato que NO se puede repetir.

Todos los Symbol() son diferentes,
NO existen dos Symbol() iguales:

Symbol() es un dato primitivo.

En los objetos el valor de Symbol()
es privado y para uso interno,
están “ocultas” (encapsulamiento):
https://developer.mozilla.org/en-US/docs/Glossary/Encapsulation

Su uso más común es para
crear nuevas claves de propiedad (características) únicas a los objetos.

Forma Incorrecta:
NO se puede crear un objeto con Symbol()
Al intentar crear un símbolo con el constructor new Symbol da error TypeError
const id = new Symbol('id');

Forma Correcta:
Es buena práctica:
- Definir Symbol() como una constante const
- Dentro de los paréntesis de Symbol() escribir una descripción que es un number o string
https://eslint.org/docs/latest/rules/symbol-description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#description

const id = Symbol('id');
*/

/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable guard-for-in */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */

/* eslint-disable symbol-description */
// @ts-nocheck

console.log(Symbol());
/* Symbol() */

console.log(typeof Symbol());
/* symbol */

/* -------------------------------------------- */
/* typeof Symbol()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#using_the_typeof_operator_with_symbols */

console.log(typeof Symbol() === 'symbol');        /* true */
console.log(typeof Symbol('id') === 'symbol');    /* true */
console.log(typeof Symbol.iterator === 'symbol'); /* true */

console.log(typeof Symbol());                     /* symbol */
console.log(typeof Symbol('id'));                 /* symbol */
console.log(typeof Symbol.iterator);              /* symbol */

/* -------------------------------------------- */
/* Cualquier tipo string puede ser el mismo (igual),
pero todos los Symbol() son DIFERENTES (unicos): */
const hola1 = 'hola mundo';
const hola2 = 'hola mundo';

console.log(hola1 === hola2); /* true */

/*
const id1 = Symbol();
const id2 = Symbol();
console.log(id1 === id2);
*/
/* false */

const id1 = Symbol('id1');
console.log(id1);            /* Symbol(id1) */
console.log(Symbol('id1'));  /* Symbol(id1) */

const id2 = Symbol('id2');
console.log(id2);            /* Symbol(id2) */
console.log(Symbol('id2'));  /* Symbol(id2) */

console.log(id1 === id2);    /* false */

/* -------------------------------------------- */
/* JSON.stringify() ignora las claves que sean de tipo Symbol()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbols_and_json.stringify */

console.log(JSON.stringify({ [Symbol('clave')]: 'valor' }));
/* '{}' */

/* -------------------------------------------- */
/* Convertir de tipo Symbol() a string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String#using_string_to_stringify_a_symbol */

const id = Symbol('id');
console.log(typeof id);     /* symbol */
console.log(id);            /* Symbol(id) */

let texto = String(id);
console.log(typeof texto);  /* string */
console.log(texto);         /* 'Symbol(id)' */

/* -------------------------------------------- */

/* USAR Symbol() EN OBJETOS

dentro de los parentesis de Symbol()
hay q escribir un string o number
para saber el nombre de la variable */
const nombre = Symbol('nombre');
const saludar = Symbol('saludar');

/* = {} objeto */
const objetoPersona = {
  [nombre]: 'Daniel',
  edad: 35,
};

console.log(objetoPersona);
/*
{ edad: 35,
  [Symbol(nombre)]: 'Daniel'
}
*/

/* En el objetoPersona
ya tengo una propiedad tipo Symbol()
que se llama [nombre]

Sin embargo, puedo agregar otra nueva propiedad
que se llame igual, es decir,
que también se llame nombre
y se conservaran los dos nombre,
el que si es de tipo Symbol() y el que no:
nombre: 'Daniel Pineda',      NO es de tipo Symbol()
[Symbol(nombre)]: 'Daniel'    SI es de tipo Symbol()

Esto sucede porque Symbol() es un dato UNICO

Agregar nueva propiedad:valor al objetoPersona */
objetoPersona.nombre = 'Daniel Pineda'; /* nombreObjeto.nombreNuevaPropiedad = 'nuevo valor'; */
console.log(objetoPersona);
/*
{
  edad: 35,
  nombre: 'Daniel Pineda',
  [Symbol(nombre)]: 'Daniel'
}
*/

/* Llamar el valor de la propiedad nombre del objetoPersona
Usar punto .
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbol_wrapper_objects_as_property_keys */
let valorNombre = objetoPersona.nombre; /* let variable = nombreObjeto.nombreValor; */
console.log(valorNombre);
/* Daniel Pineda */

/* Llamar al tipo Symbol() q esta dentro del objetoPersona
Usar llaves [] */
let symbolNombre = objetoPersona[nombre]; /* let variable = nombreObjeto[nombreValor]; */
console.log(symbolNombre);
/* Daniel */

/* En el objetoPersona
agregar una nueva propiedad de tipo Symbol()
con el valor de una funcion funcionSimbolo()

nombreObjeto[nombreSymbol] = function nombreFuncion () {} */
objetoPersona[saludar] = function funcionSimbolo() {
  console.log('hola mundo');
};
console.log(objetoPersona);
/*
{
  edad: 35,
  nombre: 'Daniel Pineda',
  [Symbol(nombre)]: 'Daniel',
  [Symbol(saludar)]: [Function: funcionSimbolo]
}
*/

/* Ejecutar la funcionSimbolo()
q esta dentro del objetoPersona */
objetoPersona[saludar](); /* nombreObjeto[nombreSymbol](); */
/* hola mundo */

/* recorrer objetoPersona

for...in SOLAMENTE esta imprimiendo las propiedad: valor q NO son de tipo Symbol()
porq en los objetos el valor de Symbol()
“es privado y para uso interno, está oculto (encapsulamiento)”:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbols_and_for...in_iteration */

for (let propiedad in objetoPersona) { /* for (let nombreVariable in nombreObjeto) {} */
  /* propiedad: valor */
  console.log(propiedad, ':', objetoPersona[propiedad]);
}
/*
edad : 35
nombre : Daniel Pineda
*/

/* Object.getOwnPropertySymbols()
imprime SOLAMENTE
las PROPIEDADES del objetoPersona
q sean de tipo Symbol() (atributos privados)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbols_and_for...in_iteration */

// let nombreVariable = Object.getOwnPropertySymbols(nombreObjeto);
let propiedadSymbol = Object.getOwnPropertySymbols(objetoPersona);
console.log(typeof propiedadSymbol); /* object */
console.log(propiedadSymbol);        /* [ Symbol(nombre), Symbol(saludar) ] */

console.log('------');

/* Object.getOwnPropertyNames()
imprime las PROPIEDADES del objetoPersona
q NO sean de tipo Symbol() */

// let nombreVariable = Object.getOwnPropertyNames(nombreObjeto);
let propiedad = Object.getOwnPropertyNames(objetoPersona);
console.log(typeof propiedad); /* object */
console.log(propiedad);        /* [ 'edad', 'nombre' ] */
