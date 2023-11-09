/* eslint-disable object-shorthand */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Diferencias y Similitudes Entre function() {} Función Regular (Regular Function) y () => {} Función Flecha (Arrow Function)

- Midudev:
https://twitter.com/midudev/status/1658459474749796352

- Jon Mircha:
https://youtu.be/WuCw9agV3Rc

- ESLint Airbnb:
https://airbnb.io/javascript/#arrow-functions

- JavaScript Info:
https://javascript.info/function-expressions

https://javascript.info/arrow-functions-basics

https://javascript.info/arrow-functions

- Documentacion Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#the_arrow_function_expression

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Las diferencias tienen fondo amarillo: */

//                                                                                                       |-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
//                                                                                                       | Función Flecha                                                                                      | Función Regular                                                        |
//                                                                                                       | (Arrow Function)                                                                                    | (Regular Function)                                                     |
// |-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
// | return implícito:                                                                                   | ✓                                                                                                   | X                                                                      |
// | ¿Se puede retornar un valor                                                                         |                                                                                                     |                                                                        |
// | SIN escribir return?                                                                                | const sumar = (...rest) => rest.reduce((acumulador, elemento) => acumulador + elemento);            | function sumar (...rest) {                                             |
// |                                                                                                     |                                                                                                     |   return rest.reduce((acumulador, elemento) => acumulador + elemento); |
// |                                                                                                     | const valorDeRetorno = sumar(1, 2, 3); // 1+2+3 = 6                                                 | }                                                                      |
// |                                                                                                     | console.log(valorDeRetorno);                                                                        |                                                                        |
// |                                                                                                     | // 6                                                                                                | sumar(1, 2, 3); // 1+2+3 = 6                                           |
// |                                                                                                     |                                                                                                     | // 6                                                                   |
// |-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
// | ¿Sirve para crear objetos?                                                                          | X                                                                                                   | ✓                                                                      |
// |                                                                                                     |                                                                                                     |                                                                        |
// |                                                                                                     | const persona = (nombre) => { /* */ };                                                              | function persona(nombre) {                                             |
// |                                                                                                     | const midu = new persona('midudev');                                                                |  this.nombre = nombre;                                                 |
// |                                                                                                     | // ❌ TypeError: persona is not a constructor                                                       |                                                                        |
// |                                                                                                     |                                                                                                     |  console.log(this);                                                    |
// |                                                                                                     |                                                                                                     |  /*                                                                    |
// |                                                                                                     |                                                                                                     |   persona {                                                            |
// |                                                                                                     |                                                                                                     |     nombre: 'midudev',                                                 |
// |                                                                                                     |                                                                                                     |     __proto__: { constructor: ƒ persona() }                            |
// |                                                                                                     |                                                                                                     |   }                                                                    |
// |                                                                                                     |                                                                                                     |  */                                                                    |
// |                                                                                                     |                                                                                                     |  console.log(this.nombre); // 'midudev'                                |
// |                                                                                                     |                                                                                                     |  console.log(nombre);      // 'midudev'                                |
// |                                                                                                     |                                                                                                     | }                                                                      |
// |                                                                                                     |                                                                                                     |                                                                        |
// |                                                                                                     |                                                                                                     | const midu = new persona('midudev');                                   |
// |                                                                                                     |                                                                                                     | console.log(midu);                                                     |
// |                                                                                                     |                                                                                                     | /*                                                                     |
// |                                                                                                     |                                                                                                     | persona {                                                              |
// |                                                                                                     |                                                                                                     |    nombre: 'midudev',                                                  |
// |                                                                                                     |                                                                                                     |    __proto__: { constructor: ƒ persona() }                             |
// |                                                                                                     |                                                                                                     | }                                                                      |
// |                                                                                                     |                                                                                                     | */                                                                     |
// |                                                                                                     |                                                                                                     |                                                                        |
// |                                                                                                     |                                                                                                     | console.log(midu.nombre);                                              |
// |                                                                                                     |                                                                                                     | // 'midudev'                                                           |
// |-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
// | ¿Tiene acceso a los                                                                                 | X                                                                                                  | ✓                                                                       |
// | argumentos arguments de la funcion?                                                                 |                                                                                                    |                                                                         |
// | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments | const funcionFlecha = (a, b, c) => {                                                               | function funcionRegular (a, b, c) {                                     |
// | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments               |   console.log(arguments);                                                                          |   for (let i = 0; i < funcionRegular.length; i++) {                     |
// |                                                                                                     | };                                                                                                 |     console.log(arguments[i]);                                          |
// |                                                                                                     |                                                                                                    |     /*                                                                  |
// |                                                                                                     | funcionFlecha('uno', 'dos', 'tres');                                                               |     'uno'                                                               |
// |                                                                                                     | // ❌ Uncaught ReferenceError: arguments is not defined                                            |     'dos'                                                               |
// |                                                                                                     |                                                                                                    |     'tres'                                                              |
// |                                                                                                     |                                                                                                    |     */                                                                  |
// |                                                                                                     |                                                                                                    |   }                                                                     |
// |                                                                                                     |                                                                                                    |                                                                         |
// |                                                                                                     |                                                                                                    |   console.log(arguments);                                               |
// |                                                                                                     |                                                                                                    |   /*                                                                    |
// |                                                                                                     |                                                                                                    |     {                                                                   |
// |                                                                                                     |                                                                                                    |       '0': 'uno',                                                       |
// |                                                                                                     |                                                                                                    |       '1': 'dos',                                                       |
// |                                                                                                     |                                                                                                    |       '2': 'tres',                                                      |
// |                                                                                                     |                                                                                                    |       length: 3,                                                        |
// |                                                                                                     |                                                                                                    |       callee: ƒ funcionRegular(),                                       |
// |                                                                                                     |                                                                                                    |       __proto__: {                                                      |
// |                                                                                                     |                                                                                                    |         constructor: ƒ Object(),                                        |
// |                                                                                                     |                                                                                                    |         __defineGetter__: ƒ __defineGetter__(),                         |
// |                                                                                                     |                                                                                                    |         __defineSetter__: ƒ __defineSetter__(),                         |
// |                                                                                                     |                                                                                                    |         hasOwnProperty: ƒ hasOwnProperty(),                             |
// |                                                                                                     |                                                                                                    |         __lookupGetter__: ƒ __lookupGetter__(),                         |
// |                                                                                                     |                                                                                                    |         __lookupSetter__: ƒ __lookupSetter__(),                         |
// |                                                                                                     |                                                                                                    |         isPrototypeOf: ƒ isPrototypeOf(),                               |
// |                                                                                                     |                                                                                                    |         propertyIsEnumerable: ƒ propertyIsEnumerable(),                 |
// |                                                                                                     |                                                                                                    |         toString: ƒ toString(),                                         |
// |                                                                                                     |                                                                                                    |         valueOf: ƒ valueOf(),                                           |
// |                                                                                                     |                                                                                                    |         toLocaleString: ƒ toLocaleString()                              |
// |                                                                                                     |                                                                                                    |       }                                                                 |
// |                                                                                                     |                                                                                                    |     }                                                                   |
// |                                                                                                     |                                                                                                    |   */                                                                    |
// |                                                                                                     |                                                                                                    | }                                                                       |
// |                                                                                                     |                                                                                                    |                                                                         |
// |                                                                                                     |                                                                                                    | funcionRegular('uno', 'dos', 'tres');                                   |
// |-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
// | ¿Captura el objeto this del contexto en que se encuentra?                                           | X                                                                                                  | ✓                                                                       |
// | https://youtu.be/byirHCoSPFY                                                                        | La funcion flecha NO enlaza el valor de this                                                       |                                                                         |
// | https://eslint.org/docs/latest/rules/object-shorthand                                               | y por lo tanto será el valor heredado en el scope                                                  |                                                                         |
// |                                                                                                     |----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
// |                                                                                                     |                                                                            const objetoLiteral = {                                                                           |
// |                                                                                                     |                                                                              nombre: 'midu',                                                                                 |
// |                                                                                                     |                                                                                                                                                                              |
// |                                                                                                     |                                                                              funcionRegular1: function() {                                                                   |
// |                                                                                                     |                                                                                console.log(`Hola ${this.nombre}`); // 'Hola midu'                                            |
// |                                                                                                     |                                                                             },                                                                                               |
// |                                                                                                     |                                                                             funcionRegular2() {                                                                              |
// |                                                                                                     |                                                                               console.log(`Hola ${this.nombre}`); // 'Hola midu'                                             |
// |                                                                                                     |                                                                             },                                                                                               |
// |                                                                                                     |                                                                                                                                                                              |
// |                                                                                                     |                                                                             funcionFlecha: () => {                                                                           |
// |                                                                                                     |                                                                               console.log(`Hola ${this.nombre}`); // 'Hola undefined'                                        |
// |                                                                                                     |                                                                             }                                                                                                |
// |                                                                                                     |                                                                            }                                                                                                 |
// |                                                                                                     |                                                                            console.log(objetoLiteral);                                                                       |
// |                                                                                                     |                                                                            /*                                                                                                |
// |                                                                                                     |                                                                             {                                                                                                |
// |                                                                                                     |                                                                               nombre: 'midu',                                                                                |
// |                                                                                                     |                                                                               funcionRegular1: ƒ funcionRegular1(),                                                          |
// |                                                                                                     |                                                                               funcionRegular2: ƒ funcionRegular2(),                                                          |
// |                                                                                                     |                                                                               funcionFlecha: ƒ funcionFlecha()                                                               |
// |                                                                                                     |                                                                             }                                                                                                |
// |                                                                                                     |                                                                            */                                                                                                |
// |                                                                                                     |                                                                                                                                                                              |
// |                                                                                                     |                                                                            objetoLiteral.funcionRegular1(); // 'Hola midu'                                                   |
// |                                                                                                     |                                                                            objetoLiteral.funcionRegular2(); // 'Hola midu'                                                   |
// |                                                                                                     |                                                                                                                                                                              |
// |                                                                                                     |                                                                            objetoLiteral.funcionFlecha();   // 'Hola undefined'                                              |
// |-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
// | Elevacion (hoisting) (MALA PRACTICA):                                                               | X                                                                                                   | ✓                                                                      |
// | ¿La funcion se puede ejecutar ANTES de inicializarse?                                               |                                                                                                     |                                                                        |
// |                                                                                                     | funcionFlecha();                          // ejecutar funcion                                       | declaracionDeFuncion();                                                |
// | Recordatorio:                                                                                       |                                                                                                     | // 'hola mundo'                                                        |
// | Ver:                                                                                                | const funcionFlecha = () => 'hola mundo'; // inicializar funcion                                    |                                                                        |
// | " 4.2.3.2) Elevación de Declaración de Función "                                                    | // ❌ Uncaught ReferenceError: funcionFlecha is not defined                                         | function declaracionDeFuncion () {                                     |
// |                                                                                                     |                                                                                                     |    return 'hola mundo';                                                |
// |                                                                                                     |                                                                                                     | }                                                                      |
// |-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
// | Sintaxis en metodos de [] array:                                                                    | const letras = ['A', 'B', 'C'];                                                                     | // Palabra reservada function                                          |
// | .map() .filter() .reduce() .toSorted(), etc.                                                        | console.log(letras);                                                                                | letras.forEach(function (elemento, i) { // MALA PRACTICA               |
// | https://eslint.org/docs/latest/rules/prefer-arrow-callback                                          | // (3) [ 'A', 'B', 'C' ]                                                                            |   console.log(`i=${i} ➜ elemento='${elemento}'`);                      |
// |                                                                                                     |                                                                                                     | });                                                                    |
// |                                                                                                     | // Funcion flecha (arrow function)                                                                  | /*                                                                     |
// |                                                                                                     | letras.forEach((elemento, i) => { // BUENA PRACTICA                                                 |  "i=0 ➜ elemento='A'"                                                 |
// |                                                                                                     |  console.log(`i=${i} ➜ elemento='${elemento}'`);                                                    |  "i=1 ➜ elemento='B'"                                                 |
// |                                                                                                     | });                                                                                                 |  "i=2 ➜ elemento='C'"                                                 |
// |                                                                                                     | /*                                                                                                  | */                                                                     |
// |                                                                                                     | "i=0 ➜ elemento='A'"                                                                                |                                                                       |
// |                                                                                                     | "i=1 ➜ elemento='B'"                                                                                |                                                                       |
// |                                                                                                     | "i=2 ➜ elemento='C'"                                                                                |                                                                       |
// |                                                                                                     | */                                                                                                  |                                                                       |
// |                                                                                                     |                                                                                                     |                                                                       |
// |                                                                                                     | // Funcion flecha en una sola linea (inline arrow function)                                         |                                                                       |
// |                                                                                                     | letras.forEach((elemento, i) => console.log(`i=${i} ➜ elemento='${elemento}'`)); // BUENA PRACTICA  |                                                                       |
// |                                                                                                     | /*                                                                                                  |                                                                       |
// |                                                                                                     | "i=0 ➜ elemento='A'"                                                                                |                                                                       |
// |                                                                                                     | "i=1 ➜ elemento='B'"                                                                                |                                                                       |
// |                                                                                                     | "i=2 ➜ elemento='C'"                                                                                |                                                                       |
// |                                                                                                     | */                                                                                                  |                                                                        |
// |-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
// | ¿Sirve con async await?                                                                             | ✓                                                                                                   | ✓                                                                      |
// |                                                                                                     |                                                                                                     |                                                                        |
// |                                                                                                     | const funcionFlecha = async () => {                                                                 | async function funcionRegular () {                                     |
// |                                                                                                     |  try {                                                                                              |  try {                                                                 |
// |                                                                                                     |    const url = 'https://jsonplaceholder.typicode.com/todos/1';                                      |    const url = 'https://jsonplaceholder.typicode.com/todos/1';         |
// |                                                                                                     |    const response = await fetch(url);                                                               |    const response = await fetch(url);                                  |
// |                                                                                                     |                                                                                                     |                                                                        |
// |                                                                                                     |    const data = await response.json();                                                              |    const data = await response.json();                                 |
// |                                                                                                     |    console.log(data);                                                                               |    console.log(data);                                                  |
// |                                                                                                     |  } catch (error) {                                                                                  |  } catch (error) {                                                     |
// |                                                                                                     |    console.error(`error en fetch ➜ ${error}`);                                                     |    console.error(`error en fetch ➜ ${error}`);                         |
// |                                                                                                     |  }                                                                                                  |  }                                                                     |
// |                                                                                                     | }                                                                                                   | }                                                                      |
// |                                                                                                     |                                                                                                     |                                                                        |
// |                                                                                                     | funcionFlecha();                                                                                    | funcionRegular();                                                      |
// |                                                                                                     | /*                                                                                                  | /*                                                                     |
// |                                                                                                     |   Promise {<pending>}                                                                               | Promise { <pending> }                                                  |
// |                                                                                                     |                                                                                                     |                                                                        |
// |                                                                                                     |  {                                                                                                  | {                                                                      |
// |                                                                                                     |   userId: 1,                                                                                        |   userId: 1,                                                           |
// |                                                                                                     |   id: 1,                                                                                            |   id: 1,                                                               |
// |                                                                                                     |   title: 'delectus aut autem',                                                                      |   title: 'delectus aut autem',                                         |
// |                                                                                                     |   completed: false                                                                                  |   completed: false                                                     |
// |                                                                                                     |  }                                                                                                  | }                                                                      |
// |                                                                                                     | */                                                                                                  | */                                                                     |
// |-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
// | Sintaxis                                                                                            | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#syntax  |
// |                                                                                                     |                                                                                                     |
// |                                                                                                     | () => expression                                                                                    |
// |                                                                                                     |                                                                                                     |
// |                                                                                                     | param => expression                                                                                 |
// |                                                                                                     |                                                                                                     |
// |                                                                                                     | (param) => expression                                                                               |
// |                                                                                                     |                                                                                                     |
// |                                                                                                     | (param1, paramN) => expression                                                                      |
// |                                                                                                     |                                                                                                     |
// |                                                                                                     | () => {                                                                                             |
// |                                                                                                     |   // statements                                                                                     |
// |                                                                                                     | }                                                                                                   |
// |                                                                                                     |                                                                                                     |
// |                                                                                                     | param => {                                                                                          |
// |                                                                                                     |  // statements                                                                                      |
// |                                                                                                     | }                                                                                                   |
// |                                                                                                     |                                                                                                     |
// |                                                                                                     | (param1, paramN) => {                                                                               |
// |                                                                                                     |  // statements                                                                                      |
// |                                                                                                     | }                                                                                                   |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |
// |                                                                                                     |

/* --------------------------------------------------------------- */

/* Ejemplo 1:
La expresion de funcion se escribe similar a la funcion flecha pero SIN la palabra reservada function
https://youtu.be/WuCw9agV3Rc */

const expresionDeFuncion = function (nombre) {
  return `hola ${nombre}`;
};
const valorRetorno = expresionDeFuncion('Daniel');
console.log(valorRetorno);
// 'hola daniel'

// Funcion flecha CON parametros
const arrowFunction = (nombre) => {
  return `hola ${nombre}`;
};
const valorRetorno2 = arrowFunction('Daniel');
console.log(valorRetorno2);
// 'hola Daniel'

// Funcion flecha SIN parametros
const arrowFunction2 = () => {
  console.log('hola mundo');
};
arrowFunction2();
// 'hola mundo'

/* --------------------------------------------------------------- */

/*  Ejemplo 2 - Funcion Flecha en una Sola Linea (Inline Arrow Function)
Cuando dentro del par de llaves {} (scope) de la funcion flecha hay una sola linea de codigo,
entonces se puede escribir en una sola linea SIN la palabra reservada return
https://eslint.org/docs/latest/rules/arrow-body-style

https://youtu.be/WuCw9agV3Rc */

// Funcion flecha en una sola linea CON parametros
const inlineArrowFunction = (nombre) => `hola ${nombre}`;

const valorRetorno3 = inlineArrowFunction('Daniel');
console.log(valorRetorno3);
// 'hola Daniel'

// Funcion flecha en una sola linea SIN parametros
const inlineArrowFunction2 = () => 'hola mundo';
const valorRetorno4 = inlineArrowFunction2();
console.log(valorRetorno4);
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 3:
Cuando hay UN SOLO parametro
la funcion flecha se puede escribir
con o sin parentesis ()
aunque esto segun ESLint Airbnb es MALA PRACTICA
https://eslint.org/docs/latest/rules/arrow-parens

https://youtu.be/WuCw9agV3Rc */

const arrowFunction3 = nombre => { // parametro nombre
  return `hola ${nombre}`;
};
console.log(
  arrowFunction3('Daniel'),
);
// 'hola Daniel'

const inlineArrowFunction3 = nombre => `hola ${nombre}`;
console.log(
  inlineArrowFunction3('Daniel'),
);
// 'hola Daniel'

/* --------------------------------------------------------------- */

/* Ejemplo 4:
https://youtu.be/WuCw9agV3Rc */

const funcionFlechaDeVariasLineas = () => {
  console.log(1);
  console.log(2);
  console.log(3);
};

funcionFlechaDeVariasLineas();
/*
1
2
3
*/

/* --------------------------------------------------------------- */

/* Ejemplo 5:
https://youtu.be/WuCw9agV3Rc */

function thisFuncionRegular() {
  console.log(this);
}
thisFuncionRegular();
// Window {window: Window, self: Window, document: document, name: '', location: Location, ...}

const thisFuncionFlecha = () => {
  console.log(this);
};
thisFuncionFlecha();
// Window {window: Window, self: Window, document: document, name: '', location: Location, ...}
