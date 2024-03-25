/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
... Diferencias y Similitudes Entre Parametros Rest (Rest Parameters) y Sintaxis Extendida (Operador Spread, Spread Operator)

Tutorial...
- Midudev:
https://youtube.com/shorts/aOH4b3JViYA?si=ET_j4TVA59MLwCtT

- Jon Mircha:
https://youtu.be/yGJdRAXHCPM?si=5Hp2D-jHDWhjAVVT

- freeCodeCamp Español:
https://youtube.com/shorts/Rk7dCahmTCU?si=nsgYFzpcc3pMOA1I

- Nicolas Schurmann:
https://youtu.be/-Jt_86kUKuk

Documentación Oficial...
- Sintaxis Extendida (Operador Spread, Spread Operator):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

- Iterables:
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators#iterables

- Parametros Rest (Rest Parameters):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

- JavaScript Info - Diferencia Entre Parametros Rest y Sintaxis Extendida:
https://javascript.info/rest-parameters-spread

                                             |--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
                                             | Parametros Rest                                                                                                    | Sintaxis Extendida                                                                                                  |
                                             | (Rest Parameters)                                                                                                  | (Operador Spread, Spread Operator)                                                                                  |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| ¿Que es?                                   | Es el RESTO ...rest de los elementos del array []                                                                  | ESPARCE un objeto, crea una COPIA ITERABLE de un objeto                                                             |
|                                            |                                                                                                                    |                                                                                                                     |
|                                            |                                                                                                                    | Cuando se modifica la copia obj2,                                                                                   |
|                                            |                                                                                                                    | NO se modifica el objeto original obj1 (inmutabilidad)                                                              |
|------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| ¿Se puede usar con...? | '' string         | X                                                                                                                  | ✔️                                                                                                                   |
|                        |-------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|                        | {} objeto literal | ✔️                                                                                                                  | ✔️                                                                                                                   |
|                        |                   | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals |
|                        |-------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|                        | [] array          | ✔️                                                                                                                  | ✔️                                                                                                                   |
|                        |                   | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals  |
|                        |-------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|                        | Funciones         | ✔️                                                                                                                  | ✔️                                                                                                                   |
|                        |                   |                                                                                                                    | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls  |
|                        |                   |                                                                                                                    | https://en.wikipedia.org/wiki/Variadic_function                                                                     |
|------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Sintaxis                                   | function miFuncion(a, b, ...theArgs) {                                                                             | miFuncion(a, ...iterableObj, b)                                                                                     |
|                                            | // ...                                                                                                             | [1, ...iterableObj, '4', 'five', 6]                                                                                 |
|                                            | }                                                                                                                  | { ...obj, key: 'value' }                                                                                            |
|                                            |                                                                                                                    |                                                                                                                     |
|                                            | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#syntax                 | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#syntax                    |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|

Sintaxis:

- Sintaxis Extendida:
miFuncion(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }

- Parametros Rest:
function miFuncion(a, b, ...theArgs) {
  // …
}

Donde...
- ... Es la sintaxis extendida o parametros ...rest

- ...iterableObj y ...obj objeto iterable

- miFuncion
Nombre de una funcion

- a, b
Son los dos primeros argumentos de la funcion

- ...theArgs
Es el "resto" de los argumentos de la funcion
q estan DESPUES de a y b */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia 1 Entre ...rest y spread
Tienen la misma sintaxis
pero ...rest es el RESTO, en cambio spread es ESPARCIR
https://youtube.com/shorts/aOH4b3JViYA?si=1lmGQ0iP4QTwp1Jd

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#description */

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/*
▄▄▄▄▄▄▄▄▄▄▄
█ ...rest █
▀▀▀▀▀▀▀▀▀▀▀

Para "EXTRAER datos" (ANTES del igual),
usar ...rest para tener el "resto"
de elementos extraídos
cuando buscas datos específicos de una colección (desestructuracion).

uno y dos son los numeros (elementos) 1 y 2

...rest es el resto (los otros) numeros del [] array 3, 4, 5 */
const [uno, dos, ...rest] = numeros; // Desestructuracion
console.log(uno);     // 1
console.log(dos);     // 2

console.log(rest);    // (3) [3, 4, 5]
console.log(...rest); // 3 4 5

/*
▄▄▄▄▄▄▄▄▄▄
█ spread █
▀▀▀▀▀▀▀▀▀▀

Recordatorio:
Ver:
" 9.4.3.3.10) Agregar Nuevo Elemento al .unshift() PRINCIPIO y .push() FINAL del Array y Devolver la Nueva Longitud .length del Array "

Para "AÑADIR nuevos datos" (DESPUES del igual),
y deseas añadir elementos a un {} objeto o [] array,
en lugar de hacer array.push(1) array.push(2) usar spread operator

Sintaxis Extendida: crear COPIA del array [] numeros y concatenarlo con array [] masNumeros

-1, 0 son del array masNumeros
y 1, 2, 3, 4, 5 son del array numeros */
const masNumeros = [-1, 0, ...numeros];
console.log(masNumeros); // (7) [-1, 0, 1, 2, 3, 4, 5]
console.log(numeros);    // (5) [1, 2, 3, 4, 5]

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Diferencia 2 ...rest y spread
https://youtube.com/shorts/Rk7dCahmTCU?si=eRYQ9rw1kf1ZqB2M

Recordatorio:
Ver:
" 12.2) Resumen: Partes (Sintaxis) de una Función "

▄▄▄▄▄▄▄▄▄▄▄
█ ...rest █
▀▀▀▀▀▀▀▀▀▀▀

con ...rest una funcion puede tener CUALQUIER numero de argumentos args */

const miFuncion = (...args) => {
  console.log(...args); // 1 2 3
  console.log(args);    // (3) [1, 2, 3]

  return args;
};

const rest2 = miFuncion(1, 2, 3); // argumentos 1, 2, 3
console.log(rest2);
// (3) [1, 2, 3]

/*
▄▄▄▄▄▄▄▄▄▄
█ spread █
▀▀▀▀▀▀▀▀▀▀

En cambio, spread asgina un numero en ESPECIFICO de argumentos.

A los parametros (a, b, c) asignarle los argumentos [4, 5, 6],
son 3 parametros y argumentos */
const array = [4, 5, 6];
console.log(array);
// (3) [4, 5, 6]

const miFuncion2 = (a, b, c) => { // (a, b, c) parametros
  console.log(a); // 4
  console.log(b); // 5
  console.log(c); // 6
};

console.log(...array);
// 4 5 6

miFuncion2(...array);             // ...array argumentos
/*
4
5
6
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3 - usando spread concatenar (unir) ARRAY []
La ... sintaxis extendida es una alternativa a:
- .concat()
- .unshift()
- .push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals

https://youtu.be/yGJdRAXHCPM?si=pxSW7F9Rwzvl69fv */

const array1 = [1, 2, 3];
console.log(array1);
// (3) [1, 2, 3]

const array2 = [4, 5, 6];
console.log(array2);
// (3) [4, 5, 6]

/* cuando NO uso la ... sintaxis extendida
el resultado es un [[]] array anidado */
let concatenar = [array1, array2];
console.log(concatenar);
// (2) [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

/* En cambio, cuando SI uso la ... sintaxis extendida
el resultado es un [] array uni-dimensional */
concatenar = [...array1, ...array2];
console.log(concatenar);
// (6) [1, 2, 3, 4, 5, 6]

/* Puedo usar la ... sintaxis extendida
cualquier numero de veces
y en cualquier parte del [] array concatenar */
concatenar = [0, ...array1, 4, 5, 6];
console.log(concatenar);
// (6) [0, 1, 2, 3, 4, 5, 6]

/* --------------------------------------------------------------- */

// Ejemplo 4 - usando ...rest concatenar (unir) "" STRING 

const concatenarStr = (...strings) => {
  console.log(...strings);  // 'hola' 'mundo' 'en' 'JavaScript'
  console.log(strings);     // (4) [ 'hola', 'mundo', 'en', 'JavaScript' ]

  return strings.join(' '); // 'hola mundo en JavaScript'
};

const resultado = concatenarStr('hola', 'mundo', 'en', 'JavaScript');
console.log(resultado);
// 'hola mundo en JavaScript'

/* --------------------------------------------------------------- */

/* Ejemplo 5 - ...rest en funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#using_rest_parameters

a=1 y b=2 son los dos primeros argumentos,
...rest3 es el "resto" de los otros argumentos faltantes [3, 4, 5] */

const miFuncion4 = (a, b, ...rest3) => { // (a, b, ...rest3) parametros
  console.log(a);       // 1
  console.log(b);       // 2

  console.log(rest3);    // (3) [3, 4, 5]
  console.log(...rest3); // 3 4 5
};

miFuncion4(1, 2, 3, 4, 5); // (1, 2, 3, 4, 5) argumentos

/* a=1 y b=2 son los dos primeros argumentos,
el ultimo argumento q es UNO SOLO es un array de un indice (1) [3] */

const miFuncion5 = (a, b, ...rest3) => {
  console.log(a);       // 1
  console.log(b);       // 2

  console.log(rest3);    // [3]
  console.log(...rest3); // 3
};

miFuncion5(1, 2, 3);

/* a=1 y b=2 son los dos primeros argumentos,
el ultimo argumento ...rest es un array vacio [] 
porque NO hay un tercer argumento */

const miFuncion6 = (a, b, ...rest3) => {
  console.log(a);       // 1
  console.log(b);       // 2

  console.log(rest3);    // []
  console.log(...rest3); // en esta linea de codigo NO se imprime nada
};

miFuncion6(1, 2);

/* a=1 porque hay UN SOLO argumento

b=undefined porque b es el segundo argumento y NO hay un segundo argumento

El ultimo argumento q es ...rest es un array vacio [] porque NO hay un tercer argumento */

const miFuncion7 = (a, b, ...rest3) => {
  console.log(a);       // 1
  console.log(b);       // undefined

  console.log(rest3);    // []
  console.log(...rest3); // en esta linea de codigo NO se imprime nada
};

miFuncion7(1);

/* Al llamar una funcion SIN argumentos:
1) los dos primeros argumentos a y b son undefined porque no se les asigna nungun valor

2) ...rest es un array vacio [] porque NO hay mas de dos argumentos,
no existe el "resto" de los argumentos */

const miFuncion8 = (a, b, ...rest3) => {
  console.log(a);       // undefined
  console.log(b);       // undefined

  console.log(rest3);    // []
  console.log(...rest3); // en esta linea de codigo NO se imprime nada
};

miFuncion8();

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Errores de ...rest en Funciones:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#description

ERROR:
1) ...rest se tiene q usar en UN SOLO parametro */

const funcion1 = (...rest1, ...rest2) => { }
// ❌ Uncaught SyntaxError: Rest parameter must be last formal parameter

// 2) ...rest tiene q ser el ULTIMO parametro
const funcion2 = (...rest, arg2, arg3) => { }
// ❌ Uncaught SyntaxError: Rest parameter must be last formal parameter

/* --------------------------------------------------------------- */

/* Ejemplo 7 - ...rest en funcion:
https://youtu.be/yGJdRAXHCPM?si=dtgFrE1FXsLS2stm

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#try_it

https://en.wikipedia.org/wiki/Variadic_function

Usando ...rest sumar N numeros

Sumar es una función variadica porque puede tener cualquier numero de  argumentos args */

const sumar = (...args) => {
  const rest5 = [...args];
  const reduce = rest5.reduce((acumulador, elemento) => acumulador + elemento);

  return reduce;
};

sumar(1);          // 1
sumar(1, 2);       // 1+2     = 3
sumar(1, 2, 3);    // 1+2+3   = 6
sumar(1, 2, 3, 4); // 1+2+3+4 = 10

/* --------------------------------------------------------------- */

/* Ejemplo 8 - spread en funcion:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls */

// funcion para sumar 3 numeros
const sumar2 = (x, y, z) => x + y + z;
console.log(sumar2);
// [Function: sumar2]

/* quiero sumar los 3 numeros de este array,
este array numeros2 contiene los argumentos de la funcion sumar */
const numeros2 = [1, 2, 3];
console.log(numeros2);
// (3) [1, 2, 3]

/* cuando NO uso la ... sintaxis extendida,
entonces NO se suman los numeros */
let resultado3 = sumar2(numeros2);
console.log(resultado3);
// '1,2,3undefinedundefined'

/* En cambio, cuando SI uso la ... sintaxis extendida
SI se suman los numeros */
resultado3 = sumar2(...numeros2); // 1+2+3 = 6
console.log(resultado3);
// 6

/* .apply() es una alternativa a la ... sintaxis extendida

Segun ESLint Airbnb usar .apply() es mala practica
https://eslint.org/docs/latest/rules/prefer-spread

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply */

resultado3 = sumar2.apply(null, numeros2); // .apply()
console.log(resultado3);
// 6

/* --------------------------------------------------------------- */

/* Ejemplo 9 - spread en funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls */

const miFuncion3 = (a, b, c, d, e) => a + b + c + d + e;
console.log(miFuncion3);
// [Function: miFuncion3]

const argumentos = [2, 3];
console.log(argumentos);    // (2) [2, 3]
console.log(...argumentos); // 2 3

/* Cualquier argumento puede usar la sintaxis extendida
y la ... sintaxis extendida se puede usar varias veces */
console.log(...[5]); // 5
console.log([5]);    // (1) [5]

const resultado2 = miFuncion3(1, ...argumentos, 4, ...[5]); // 1+2+3+4+5 = 15
console.log(resultado2);
// 15

/* --------------------------------------------------------------- */

/* Ejemplo 10 - spread e Inmutabilidad en {} OBJETO LITERAL
https://youtu.be/-Jt_86kUKuk */

const obj1 = { nombre: 'obj1' };
console.log(obj1);
// { nombre: 'obj1' }

/* ... Sintaxis Extendida (Spread Operator)
significa COPIAR obj1 en obj2
y las llaves {} significan q la copia se hace en un objeto literal */
let obj2 = { ...obj1 };
console.log(obj2);
// { nombre: 'obj1' }

/* Modificar valor de la propiedad nombre del obj2,
NO se modifica el obj1 */
obj2.nombre = 'nuevo nombre 2';
console.log(obj2);
// { nombre: 'nuevo nombre 2' }

/* obj3 es un array de objetos [{}]
q contiene obj1 y obj2 */
let obj3 = [obj1, obj2];
console.log(obj3);
/*
[
  { nombre: 'obj1' },
  { nombre: 'nuevo nombre 2' }
]
*/

// En cambio, cuando NO uso la ... sintaxis extendida (spread operator)
obj2 = obj1;
console.log(obj1); // { nombre: 'obj1' }
console.log(obj2); // { nombre: 'obj1' }

// y modifico el obj2
obj2.nombre = 'nuevo nombre 2';

// Se modifican ambos objetos obj1 y obj2
obj3 = [obj1, obj2];
console.log(obj3);
/*
[
  { nombre: 'nuevo nombre 2' },
  { nombre: 'nuevo nombre 2' }
]
*/

/* --------------------------------------------------------------- */

/* Ejemplo 11 - spread e Inmutabilidad en [] ARRAY
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals */

// Array original
const original = [1, 2, 3];
console.log(original);
// (3) [1, 2, 3]

// ... Hacer copia de array original
const copia = [...original];
console.log(copia);
// (3) [1, 2, 3]

/* .push() Agregar nuevo elemento al FINAL del array
Al modificar el array copia NO se modifica array original */
copia.push(4);
console.log(original); // (3) [1, 2, 3]
console.log(copia);    // (4) [1, 2, 3, 4]

/* IMPORTANTE: ⚠️
La ... sintaxis extendida NO hace inmutables los array anidados (multidimensional).
structuredClone() es una solucion a esto
https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types

Crear array anidado (multidimensional) [ [] ] */
const anidado = [[1], [2], [3]];
console.log(anidado);
// (3) [ [ 1 ], [ 2 ], [ 3 ] ]

// ... crear copia de array anidado [ [] ]
const copia2 = [...anidado];
console.log(copia2);
// (3) [ [ 1 ], [ 2 ], [ 3 ] ]

/* .shift() Eliminar PRIMER Elemento del Array

ERROR:
Cuando modifico el array copia2 tambien se modifica el array original anidado */
copia2.shift().shift();
console.log(copia2);  // (2) [ [ 2 ], [ 3 ] ]
console.log(anidado); // (3) [ [], [ 2 ], [ 3 ] ]

/* --------------------------------------------------------------- */

// Ejemplo 12 - usando spread concatenar (unir) {} OBJETO LITERAL

const objeto1 = {
  uno: 1,
  dos: 2,
};
console.log(objeto1);
/*
{
  uno: 1,
  dos: 2,
}
*/

const objeto2 = {
  uno: 1,
  tres: 3,
};
console.log(objeto2);
/*
{
  uno: 1,
  tres: 3,
}
*/

/* Cuando uso la ... sintaxis extendida para concatenar objetos literales,
las propiedad: valor, que son exactamente iguales
y se repiten en los objetos que estoy concatenando,
se copian UNA SOLA VEZ

Ambos objetos objeto1 y objeto2
tienen repetidos la misma propiedad: valor, uno: 1,
y al concatenarlo se copia UNA SOLA VEZ */
const concatenar2 = { ...objeto1, ...objeto2 };
console.log(concatenar2);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 13 - usando spread crear funcion concatenar
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

Los objetos literales object1 y object2
tienen repetida la propiedad uno */

const object1 = { uno: 'uno object1', dos: 'dos object1' };
const object2 = { uno: 'uno object2', tres: 'tres object2' };
//                 ↑

let funcionConcatenar = (...objects) => ({ ...objects });

/* Explicare 2 formas de crear una funcion para concatenar
1) Se conservan TODOS los objetos

En la propiedad esta 0, 1, 2...
y en el valor estan los objetos anidados */
let ejecutarFuncion = funcionConcatenar({}, object1, object2);
console.log(ejecutarFuncion);
/*
{
  '0': {},
  '1': { uno: 1, dos: 2 },
  '2': { tres: 3, cuatro: 4 }
}
*/

/* 2) Esta funcion .reduce() es similar a Object.assign(),
excepto q no activa setters ni muta ningún objeto

Unir la propiedad q se repite uno

NO hay objeto anidado */
funcionConcatenar = (...objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur }));
ejecutarFuncion = funcionConcatenar({}, object1, object2);
console.log(ejecutarFuncion);
/*
{
  uno: 'uno object2',
  dos: 'dos object1',
  tres: 'tres object2'
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 14 - Diferencia Entre spread y Object.assign()
- Stack Overflow:
https://stackoverflow.com/questions/32925460/object-spread-vs-object-assign

https://stackoverflow.com/questions/38462000/difference-between-object-assign-and-object-spread

- Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

Cuando uso la ... sintaxis extendida,
si modifico la copia concatenar2,
entonces NO se modifica los objetos originales objeto1 y objeto2 */

// o1 y o2 son los objetos {} ORIGINALES
const o1 = { uno: 1 }; // assign
const o2 = { uno: 1 }; // spread

// Tengo 2 objetos con las mismas propiedad: valor,
console.log(o1); // { uno: 1 }
console.log(o2); // { uno: 1 }

/* Creo una copia de los objetos
con Object.assign() y la ... sintaxis extendida */
const assign = Object.assign(o1); // o1
const spread = { ...o2 };         // o2

// Hasta el momento las copias assign y spread son iguales
console.log(assign); // { uno: 1 }
console.log(spread); // { uno: 1 }

/* Modificar valor de la propiedad uno
de los objetos q son COPIA (assign y spread) */
assign.uno = 'nuevo valor'; // o1
spread.uno = 'nuevo valor'; // o2

// Se modifica el valor en ambos objetos copia (assign y spread)
console.log(assign); // { uno: 'nuevo valor' }
console.log(spread); // { uno: 'nuevo valor' }

/* DIFERENCIAS:
1) Cuando se crea una copia de un objeto literal
y modifico la copia del objeto,
Object.assign() (MUtable) SI modifica el objeto original,
en cambio la ... sintaxis extendida (INmutable) NO modifica el objeto original

o1 SI se modifico, en cambio o2 NO */
console.log(o1); // { uno: 'nuevo valor' }  -> assign
console.log(o2); // { uno: 1 }              -> spread

/* 2) Object.assign() desencadena setters en el objeto de destino,
en cambio en la ... sintaxis extendida el setter NO se ejecuta */

const assign2 = Object.assign(
  {
    set foo(val) {
      //  Object.assign() imprime 1
      console.log(val);
      // 1
    },
  },
  { foo: 1 },
);

/* el valor de la propiedad assign2.foo
sigue siendo el SETTER original */
console.log(assign2);
/*
{
  foo: [Setter]
}
*/

const spread2 = {
  set foo(val) {
    // la ... sintaxis extendida NO imprime nada
    console.log(val);
  },
  ...{ foo: 1 },
};

// El valor de la propiedad spread.foo es 1
console.log(spread2);
/*
{
  foo: 1
}
*/

/* --------------------------------------------------------------- */

// Ejemplo 15 - spread en funcion

// funcion flecha q retorna 'hola mundo'
const funcion = () => 'hola mundo';
console.log(funcion);
// [Function: funcion]

// guardar valor de retorno de funcion
const retorno = funcion();
console.log(retorno);
// 'hola mundo'

// convertir de "" string a [] array usando spread
const spreadOperator = [...retorno];
console.log(spreadOperator);        // (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
console.log(typeof spreadOperator); // 'object'

/* --------------------------------------------------------------- */

/* Ejemplo 16 - spread SOLAMENTE funciona en iterables
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#description */

const objetoLiteral = { uno: 1 };
console.log(objetoLiteral);
// { uno: 1 }

/* Para q un objeto sea iterable se tiene que cumplir estas condiciones:
1) Se puede recorrer (iterar) uno a uno
2) Tiene el metodo Symbol.iterator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

La siguiente linea de codigo da ERROR
porq [...objetoLiteral] NO es iterable */

const array = [...objetoLiteral];
console.log(array);
/* TypeError: objetoLiteral is not iterable
   at Object.<anonymous> */

/* --------------------------------------------------------------- */

/* Ejemplo 17 - Usando spread convertir de "" string a [] array

Recordatorio:
Ver:
" 8.5.3.10.7) [...string]; Sintaxis Extendida (Spread Syntax) "
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/ */

/* --------------------------------------------------------------- */

/* Ejemplo 18 - ...rest y desestructuracion en {} objeto literal y [] array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property

a es el primero valor del {} objeto literal
y ...rest3 es el "resto", la otra parte faltante del {} objeto literal { b: 2, c: 3 } */

const { a, ...rest3 } = { a: 1, b: 2, c: 3 };
console.log(a);     // 1
console.log(rest3); // { b: 2, c: 3 }

/* primero es el primero elemento del array
y ...rest4 es el "resto" de los elementos faltantes del array [2, 3] */
const [primero, ...rest4] = [1, 2, 3];
console.log(primero); // 1
console.log(rest4);   // (2) [2, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 19 - Usando spread convertir de array [] a objeto literal {}
Las propiedades son numeros 0, 1, 2...
y los valores del objeto {} son los elementos del array []
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#traversing_object_properties */

const array3 = ['cero', 'uno', 'dos'];
console.log(array3);
// (3) ['cero', 'uno', 'dos']

const objetoLiteral2 = { ...array3 };
console.log(objetoLiteral2);
/*
{
  0: 'cero',
  1: 'uno',
  2: 'dos'
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 20 - spread y apply()
Con apply() NO se puede usar directamente juntos un array y el constructor new,
en cambio con la ... sintaxis extendida SI se puede
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply */

const fecha = [2023, 0, 30]; // 2023/enero/30
console.log(fecha);          // (3) [2023, 0, 30]

/* Al usar ... sintaxis extendida con el constructor new
el array [2023, 0, 30] imprime la fecha 30 Enero 2023 */
const constructorDate = new Date(...fecha);
console.log(constructorDate);
// 2023-01-30T05:00:00.000Z

/* --------------------------------------------------------------- */

/* Ejemplo 21 - ...rest y .length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#argument_length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#description 

1) Cuando en la funcion se escribe UN SOLO parametro (...rest)
para q rest.length funcione se tiene q escribir DENTRO de la funcion */

function miFuncion1(...rest) { // parametro ...rest
  console.log(rest.length);    // DENTRO de la funcion
}

// Imprimir el numero de argumentos de la funcion
miFuncion1();              // 0
miFuncion1("A");           // 1
miFuncion1("A", "B");      // 2
miFuncion1("A", "B", "C"); // 3

/* cuando hay UN SOLO parametro ...rest 
nombreFuncion.length imprime 0 */
console.log(miFuncion1.length); 
// 0

/* --- */

/* 2) Cuando escribo 1 o mas parametros a, b, c 
y despues ...rest (a, b, c, ...rest)
rest.length imprime 0 DENTRO de la funcion */

function miFuncion2(a, b, c, ...rest) { // parametros
  console.log(rest.length);             // DENTRO de la funcion
}

miFuncion2();              // 0
miFuncion2("A", "B", "C"); // 0

/*
cuando escribo 1 o mas parametros a, b, c 
y despues ...rest (a, b, c, ...rest)
nombreFuncion.length NO tiene en cuenta el parametro ...rest
para contar el numero de parametros

a, b, c, ...rest son 4 parametros pero se imprime 3 */

console.log(miFuncion2.length);
// 3

/* --------------------------------------------------------------- */

/* Ejemplo 22 - Diferencia 4 Entre ...rest y objeto arguments
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#the_difference_between_rest_parameters_and_the_arguments_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

arguments es un OBJETO {} con propiedad: valor,
q contiene TODOS los argumentos */

function funcionArguments() {
  console.log(arguments);
  /*
  {
    '0': 'A',
    '1': 'B',
    '2': 'C',
    length: 3,
    callee: ƒ funcionArguments(),
    __proto__: {
      constructor: ƒ Object(),
      __defineGetter__: ƒ __defineGetter__(),
      __defineSetter__: ƒ __defineSetter__(),
      hasOwnProperty: ƒ hasOwnProperty(),
      __lookupGetter__: ƒ __lookupGetter__(),
      __lookupSetter__: ƒ __lookupSetter__(),
      isPrototypeOf: ƒ isPrototypeOf(),
      propertyIsEnumerable: ƒ propertyIsEnumerable(),
      toString: ƒ toString(),
      valueOf: ƒ valueOf(),
      toLocaleString: ƒ toLocaleString()
    }
  }
  */
  
  console.log(arguments[0]); // "A"
  console.log(arguments[1]); // "B"
  console.log(arguments[2]); // "C"
}

// "A", "B", "C" son los argumentos
funcionArguments("A", "B", "C");

/* En cambio, ...rest es un ARRAY []
q contiene el RESTO de los argumentos faltantes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#using_rest_parameters */

const funcionRest = (primero, segundo, ...rest) => {
  // argumentos primero y segundo 
  console.log(primero); // 'A'
  console.log(segundo); // 'B'
  
  // RESTO de los argumentos faltantes
  console.log(...rest);    // 'C' 'D' 'E'
  console.log(rest);       // (3) [ 'C', 'D', 'E' ]

  console.log(rest.at(0)); // 'C'
  console.log(rest.at(1)); // 'D'
  console.log(rest.at(2)); // 'E'
  
}

funcionRest("A", "B", "C", "D", "E");

/* --------------------------------------------------------------- */

/* Ejemplo 23 - Diferencia 1 Entre ...rest y objeto arguments
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#the_difference_between_rest_parameters_and_the_arguments_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#from_arguments_to_an_array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Recordatorio:
Ver:
" 9.4.2.1) Array.from() Convertir a Array y Ejecutar una Función .map() para Cada Elemento "

El objeto arguments NO es un array,
por lo que arguments NO se pueden usar con los metodos de array []
como .map() .toSorted() .filter(), etc.

Para q arguments se pueda usar con metodos de array []
hay q convertirlo a array [] con Array.from() */

function sumarArguments() {
  console.log(Array.from(arguments));
  // (3) [1, 2, 3]
  
  return Array.from(arguments).reduce((acumulador, elemento) => acumulador + elemento); 
}

sumarArguments(1, 2, 3); // 1+2+3 = 6
// 6

/* En cambio, en ...rest SI devuelve un array []
y SI se puede usar metodos de array [] */

const sumarRest = (...rest) => {
  console.log(rest);    // (3) [ 1, 2, 3 ]
  console.log(...rest); // 1 2 3
  
  return rest.reduce((acumulador, elemento) => acumulador + elemento);
}

sumarRest(1, 2, 3); // 1+2+3 = 6
// 6

/* --------------------------------------------------------------- */

/* Diferencia 2 Entre ...rest y objeto arguments
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#the_difference_between_rest_parameters_and_the_arguments_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee 

El objeto arguments tiene la propiedad callee q esta OBSOLETA  */

/* --------------------------------------------------------------- */

/* Ejemplo 24 - Diferencia 3 Entre ...rest y objeto arguments
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#the_difference_between_rest_parameters_and_the_arguments_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices

El objeto arguments SI permite re-asignar los parametros de la funcion */

function reasignarArguments(a, b) {
  console.log(arguments[0]); // 1 -> valor parametro a q esta en indice 0
  console.log(arguments[1]); // 2 -> "             " b "              " 1

  console.log(a); // 1
  a = 10;         // Re-asignar a
  console.log(a); // 10

  /* Imprimir valor re-asignado de parametro a
  q esta en el indice 0 */
  console.log(arguments[0]); // 10
}

reasignarArguments(1, 2);

// En cambio, ...rest NO 

function ejemploRest(a, b, ...rest) {
  // Imprimir el "resto" de los parametros
  console.log(rest); // (3) [ 3, 4, 5 ]

  console.log(a);    // 1
  a = 10;            // Re-asignar a
  console.log(a);    // 10

  // ...rest sigue siendo el mismo array []
  console.log(rest); // (3) [ 3, 4, 5 ]
}

ejemploRest(1, 2, 3, 4, 5);

/* --------------------------------------------------------------- */

/* Ejemplo 25 - Multiplicar el primer numero 2 del array [] por cada uno de los siguientes elementos 4, 6, 8 del array []
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#using_rest_parameters_in_combination_with_ordinary_parameters */

const multiplicar = (a, ...rest) => {
  console.log(a);       // 2
  console.log(...rest); // 4 6 8
  console.log(rest);    // (3) [ 4, 6, 8 ]
  
  const resultado = rest.map((elemento) => {
    console.log(`${a}*${elemento} = ${a * elemento}`);
    /*
   '2*4 = 8'
   '2*6 = 12'
   '2*8 = 16'
    */
    
    return a * elemento
  } )

  console.log(resultado);
  // (3) [ 8, 12, 16 ]
  
  return resultado;
}

const array = multiplicar(2, 4, 6, 8);
console.log(array);
// (3) [ 8, 12, 16 ]

/* --------------------------------------------------------------- */

// Ejemplo 26 - Ordenar array de numeros de menor a mayor (ascendente)

/* usando ...rest
Para este ejemplo en especifico NO es necesario usar ...rest */
const ordenar = (...rest) => rest.toSorted((a, b) => a - b)
console.log(
  ordenar(2, 1, 3, 4)
);
// (4) [ 1, 2, 3, 4 ]

/* SIN ...rest
Esta es la forma correcta */
const ordenar2 = (array) => array.toSorted((a, b) => a - b);
console.log(
  ordenar2([2, 1, 3, 4])
  );
// (4) [ 1, 2, 3, 4 ]
