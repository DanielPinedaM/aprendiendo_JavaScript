/* eslint-disable prefer-rest-params */
/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Tutorial Jon Mircha
https://www.youtube.com/watch?v=AapgtR0Rwk0&t=1079s

Stack Overflow - Diferencia entre for in y for of
https://stackoverflow.com/questions/29285897/difference-between-for-in-and-for-of-statements

Documentacion Oficial...
- for in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

- for of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

                                  |-----------------------------|-----------------------------------------------|
                                  | for in                      | for of                                        |
|---------------------------------|-----------------------------|-----------------------------------------------|
| Sirve para recorrer (iterar)... | Propiedades enumerables     | Iterable:                                     |
|                                 | de un {} objeto literal     | - "" String                                   |
|                                 |                             | - [] Array                                    |
|                                 |                             | - Map                                         |
|                                 |                             | - Set                                         |
|                                 |                             | - Segments                                    |
|                                 |                             | - arguments Parámetros de una función         |
|                                 |                             | - NodeList Elementos (etiquetas) HTML del DOM |
|                                 |                             | - ReadableStream                              |
|---------------------------------|-----------------------------|-----------------------------------------------|
| Sintaxis                        | for (propiedad in objeto) { | for (variable of iterable) {                  |
|                                 |   // statement              |    // statement                               |
|                                 | }                           | }                                             |
|---------------------------------|-----------------------------|-----------------------------------------------|

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#syntax

- propiedad
Obtiene el nombre de la propiedad en el objeto literal {}

- objeto
Nombre objeto literal {} a iterar

- variable
Obtiene el:
* carácter en string “”
* elemento en array []
* Entry propiedad: valor, en objeto literal {}

Se tiene que definir con const o let

- iterable
* Es el nombre del iterable

- statement
Bloque de código {} que se ejecuta en cada iteración */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre for in y for of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in

 ▄▄▄▄▄▄▄▄▄▄
 █ for in █
 ▀▀▀▀▀▀▀▀▀▀
Recorrer (iterar) objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#using_for...in */

const persona = {
// propiedad: valor,
  nombre: 'Daniel',
  apellido: 'Pineda',
  edad: 18,
};
console.log(persona);
/*
{
  nombre: 'Daniel',
  apellido: 'Pineda',
  edad: 18
}
*/

for (const propiedad in persona) {
  const valor = persona[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
}
/*
nombre   ➜ Daniel
apellido ➜ Pineda
edad     ➜ 18
*/

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ for of █
 ▀▀▀▀▀▀▀▀▀▀
Recorrer (iterar)...
1) "" String
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_string */

const string = 'hola mundo';
console.log(string);
// 'hola mundo'

for (const caracter of string) {
  console.log(caracter);
}
/*
'h'
'o'
'l'
'a'
''
'm'
'u'
'n'
'd'
'o'
*/

/* 2) [] array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_an_array */

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

for (const elemento of array) {
  console.log(elemento);
}
/*
'▲'
'●'
'✖'
'■'
*/

/* 3) Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_map */

const map = new Map([
  ['uno', 1],
  ['dos', 2],
  ['tres', 3],
]);
console.log(map);
/*
Map(3) {
         'uno'  => 1,
         'dos'  => 2,
         'tres' => 3
       }
*/

for (const entry of map) {
  console.log(entry);
}
/*
[ 'uno', 1 ]
[ 'dos', 2 ]
[ 'tres', 3 ]
*/

for (const entry of map) {
  const [propiedad, valor] = entry; // desestructuracion
  console.log(`${propiedad} ➜ ${valor}`);
}
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

for (const [propiedad, valor] of map) {
  console.log(`${propiedad} ➜ ${valor}`);
}
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

/* 4) Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_set */

const set = new Set(['▲', '●', '✖', '■']);
console.log(set);
// Set(4) {'▲', '●', '✖', '■'}

for (const elemento of set) {
  console.log(elemento);
}
/*
'▲'
'●'
'✖'
'■'
*/

/*
Recordatorio:
Ver:
" 12.2) Resumen: Partes (Sintaxis) de una Función "

5) arguments
Recorrer (iterar) los parametros de una funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_the_arguments_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments */

function foo() {
  for (const value of arguments) {
    console.log(value);
  }
}

foo(1, 2, 3);
/*
1
2
3
*/

/* Recordatorio:
Del resumen de CSS 3 ver:
" 6.1.2.3) Elemento Hijo Directo selector1 > selector2 "

6) NodeList
Iterar elemetos (etiquetas) HTML de DOM

Agregar clase leer a los parrafos que son hijos directos de <article>

<article>
  <p class="leer"></p>
  <p class="leer"></p>
  <p class="leer"></p>
</article>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_nodelist */

const parrafosDelArticulo = document.querySelectorAll('article > p');

for (const parrafo of parrafosDelArticulo) {
  parrafo.classList.add('leer');
}

/* 7) Mas casos en los que puedo iterar con for of:
- @@iterator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_user-defined_iterable

- function* Funcion generadora
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#iterating_over_a_generator */

/* --------------------------------------------------------------- */

/* Ejemplo 2 - for in - Recorrer (iterar) las propiedades propias (NO heredadas) de un objeto literal

Recordatorio:
Ver:
" 13.1.5.2.14) Diferencias y Similitudes Entre .hasOwnProperty() (Mala Práctica) y Object.hasOwn() (Buena Práctica) - ¿Si Existe o no la Propiedad Propia (NO Heredada) en el Objeto? "

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#iterating_own_properties */

const triangulo = { a: 1, b: 2, c: 3 };
console.log(triangulo);
// { a: 1, b: 2, c: 3 }

function ColorTriangulo() {
  this.color = 'rojo';
}

console.log(ColorTriangulo.prototype);
// {}

ColorTriangulo.prototype = triangulo;
console.log(triangulo);
// { a: 1, b: 2, c: 3 }

console.log(ColorTriangulo.prototype);
// { a: 1, b: 2, c: 3 }

// El obj tiene como prototipo __proto__ al objeto triangulo
const obj = new ColorTriangulo();
console.log(obj);
/*
{
  color: 'rojo',
  __proto__: { a: 1, b: 2, c: 3 }
}
*/

/* for in itera las propiedades propias,
NO esta imprimiendo el prototipo __proto__ */
for (const prop in obj) {
  if (Object.hasOwn(obj, prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
// "obj.color = rojo"

/* --------------------------------------------------------------- */

/* Ejemplo 3:
for in itera las propiedades enumerables enumerable: true de un objeto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#concurrent_modification

Recordatorio:
Ver:
" Ejemplo 3 - ¿Que son las propiedades enumerable: true enumerables (visible) y enumerable: false no enumerables (oculta)? " */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
}
*/

// Agregar propiedad NO enumerable (oculta)
Object.defineProperty(objetoLiteral, 'dos', {
  value: 2,
  // valor por defecto
  // enumerable: false,
});

/* uno: 1, es una propiedad: valor enumerable,
lo q significa que SI se puede ver cuando se imprime por consola,
en cambio dos: 2, es NO enumerable,
por lo que esta oculta */
console.log(objetoLiteral);
// { uno: 1 }

for (const propiedad in objetoLiteral) {
  console.log(propiedad); // imprimir propiedad uno enumerable (visible)
}
// uno

/* --------------------------------------------------------------- */

/* Ejemplo 4:
for in ignora las propiedades de tipo Symbol()

Recordatorio:
Ver:
" Ejemplo 1 - Recorrer (iterar) propiedad: valor, de tipo Symbol() en un objeto literal {} " */

const fantasma = Symbol('fantasma');
console.log(fantasma);
// Symbol(fantasma)

const objSymbol = {
  // propiedad: valor,
  [fantasma]: '👻', // Symbol()
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objSymbol);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
  [Symbol(fantasma)]: '👻'
}
*/

for (const propiedad in objSymbol) {
  console.log(propiedad); // imprimir propiedades q NO son tipo Symbol()
}
/*
uno
dos
tres
*/

/* --------------------------------------------------------------- */

/* Ejemplo 5:
for in ignora las propiedad: valor, agregadas durante la iteracion

El siguiente codigo es MALA PRACTICA, lo escribo para aprender
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#concurrent_modification */

const objetoLiteral2 = {
// propiedad: valor,
  uno: 1,
  dos: 2,
};
console.log(objetoLiteral2);
/*
{
  uno: 1,
  dos: 2
}
*/

// for in NO imprime tres: 3 porq se agrego durante la iteracion
for (const propiedad in objetoLiteral2) {
  const valor = objetoLiteral2[propiedad];
  console.log(`${propiedad} → ${valor}`);

  // agregar nueva propiedad: valor
  objetoLiteral2.tres = 3; // nombreObjetoLiteral.nuevaPropiedad = "nuevo valor"
}
/*
uno → 1
dos → 2
*/

console.log(objetoLiteral2);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 6:
for in ignora los prototipos __proto__ agregados durante la iteracion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#concurrent_modification

Recordatorio:
Ver:
" Ejemplo 1 - Diferencia Entre Object.getPrototypeOf() y Object.setPrototypeOf() " */

const obj2 = { a: 1, b: 2 };
console.log(obj2);
/*
{
  a: 1,
  b: 2
}
*/

// for in NO imprime { c: 3 } porque se agrego como prototipo durante la iteracion
for (const propiedad in obj2) {
  const valor = obj2[propiedad];
  console.log(`${propiedad} → ${valor}`);

  // Object.setPrototypeOf() agregar el valor { c: 3 } a la propiedad __proto__
  Object.setPrototypeOf(obj2, { c: 3 });
}
/*
a → 1
b → 2
*/

console.log(obj2);
/*
{
  a: 1,
  b: 2,
  __proto__: { c: 3 }
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 7 - for in - Eliminar propiedad: valor durante la iteracion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#concurrent_modification */

let obj3 = {
// propiedad: valor,
  a: 1,
  b: 2,
  c: 3,
};
console.log(obj3);
/*
{
  a: 1,
  b: 2,
  c: 3
}
*/

/* delete obj3.c; Eliminar propiedad: valor ANTES de q se itere
NO se imprime la propiedad: valor c: 3 eliminada
true significa q SI se elimino c: 3 */
for (const propiedad in obj3) {
  const valor = obj3[propiedad];
  console.log(`${propiedad} → ${valor}`);

  delete obj3.c;
}
/*
a → 1
b → 2
true
*/

// Restablecer las propiedad: valor, originales del obj3
obj3 = { a: 1, b: 2, c: 3 };
console.log(obj3);
// { a: 1, b: 2, c: 3 }

/* delete obj3.a; Eliminar propiedad: valor DESPUES de q se itere
SI se imprime a → 1 a pesar de q se elimino
true significa q SI se elimino a: 1 */
for (const propiedad in obj3) {
  const valor = obj3[propiedad];
  console.log(`${propiedad} → ${valor}`);

  delete obj3.a;
}
/*
a → 1
b → 2
c → 3
true
*/

console.log(obj3);
// { b: 2, c: 3 }

/* --------------------------------------------------------------- */

/* Ejemplo 8 - for in ignora los prototipo __proto__ modificados durante la iteracion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#concurrent_modification */

// originalmente el prototipo __proto__ esta vacio {}
const proto = {};
console.log(proto);
// {}

// obj4 al q le voy agregar prototipo __proto__
const obj4 = { __proto__: proto, a: 1, b: 2 };
console.log(obj4);
// { a: 1, b: 2 }

/* for in NO imprime __proto__: { c: 3 }
porque se modifico durante la iteracion */
for (const propiedad in obj4) {
  const valor = obj4[propiedad];
  console.log(`${propiedad} → ${valor}`);

  // Modificar el valor del prototipo __proto__ durante la iteracion
  proto.c = 3; // nombreObjeto.nuevaPropiedad = "nuevo valor"
}
/*
a → 1
b → 2
*/

/* Se modifico proto y se agrego al obj4

El obj4 es un prototipo de proto
porque el obj4 contiene las propiedad: valor de proto */
console.log(proto); // { c: 3 }
console.log(obj4);  // { a: 1, b: 2, __proto__: { c: 3 } }

/* --------------------------------------------------------------- */

/* Ejemplo 9:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#concurrent_modification

Recordatorio:
Ver:
" Ejemplo 3 - ¿Que son las propiedades enumerable: true enumerables (visible) y enumerable: false no enumerables (oculta)? " */

// En un principio la propiedad: valor c: 3 SI es visible enumerable: true
const obj5 = { a: 1, b: 2, c: 3 };
console.log(obj5);
// { a: 1, b: 2, c: 3 }

/* for in SI itera las propiedades
cambiadas a NO enumerables enumerable: false DURANTE la iteracion

A pesar de q estoy ocultando c: 3 for in SI imprime por consola la propiedad: valor */
for (const propiedad in obj5) {
  const valor = obj5[propiedad];
  console.log(`${propiedad} → ${valor}`);

  // ocultar propiedad: valor c: 3 DURANTE la iteracion
  Object.defineProperty(obj5, 'c', { enumerable: false });
}
/*
a → 1
b → 2
c → 3
*/

/* enumerable: false significa q la propiedad: valor, c: 3
esta oculta por lo q NO se puede ver cuando se imprime */
console.log(obj5);
// { a: 1, b: 2 }

/* Al iterar otra vez,
NO puedo ver c → 3 porq NO lo estoy ocultando dentro de la iteracion */
for (const propiedad in obj5) {
  const valor = obj5[propiedad];
  console.log(`${propiedad} → ${valor}`);
}
/*
a → 1
b → 2
*/

/* --------------------------------------------------------------- */

/* Ejemplo 10 - for of - Sumarle 1 a cada uno de los numeros de un array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#description */

const numeros = [10, 20, 30];
console.log(numeros);
// (3) [10, 20, 30]

const summarUno = [];
console.log(summarUno);
// []

/* Re-asignar la variable dentro de la iteracion
NO afecta el elemento del array */
for (let elemento of numeros) {
  elemento += 1;
  summarUno.push(elemento);
  console.log(elemento);
}
/*
11
21
31
*/

console.log(summarUno);
// (3) [ 11, 21, 31 ]

/* --------------------------------------------------------------- */

/* Ejemplo 11:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#description

En for of NO se puede usar async en el nombre de la variable,
esto es un error:

let async;
for (async of [1, 2, 3]); // Error de sintaxis: es posible que el lado izquierdo de un bucle for-of no sea "asíncrono".

Lo correcto es usar for await...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of */

/* --------------------------------------------------------------- */

/* Ejemplo 12 - for of y break;
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#early_exiting

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break */

const numeros2 = [1, 2, 3];
console.log(numeros2);
// (3) [1, 2, 3]

const iterador = numeros2[Symbol.iterator]();
console.log(iterador);
/*
Object [Array Iterator] {
  __proto__: { next: ƒ next() }
}
*/

/* break; Detener for of en la primera la iteracion,
cuando el elemento actual sea 1 */
for (const elemento of iterador) {
  console.log(elemento);
  if (elemento === 1) {
    break;
  }

  console.log('Esa linea NO se ejecuta');
}
// 1

/* Al iterar el mismo iterador en otro for of
la ejecucion continua donde se detuvo break; */
for (const elemento of iterador) {
  console.log(elemento);
}
/*
2
3
*/

/* El ultimo for of NO imprime nada
porq ya se iteraron todos los elementos */
for (const elemento of iterador) {
  console.log(elemento);
}

/* --------------------------------------------------------------- */

/* Ejemplo 13 - for of y funcion generadora function*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#early_exiting

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return

Las funciones generadores function* implementan el metodo return()
lo que hace q la funcion generadora regrese antes de tiempo cuando se sale del bucle.
Esto hace q NO se pueda re-utilizar las funciones generadoras entre bucles */

function* source() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = source();
console.log(generator);
// Object [Generator] {}

for (const value of generator) {
  console.log(value);
  if (value === 1) {
    break;
  }

  console.log('Esa linea NO se ejecuta');
}
// 1

// for of NO imprime nada porque generator esta agotado
for (const value of generator) {
  console.log(value);
}
