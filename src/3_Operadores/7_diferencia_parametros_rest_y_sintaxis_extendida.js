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

                                             |----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
                                             | Parametros Rest                                                                                    | Sintaxis Extendida                                                                                                  |
                                             | (Rest Parameters)                                                                                  | (Operador Spread, Spread Operator)                                                                                  |
|--------------------------------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| ¿Que es?                                   | Es el resto ...rest de los elementos del array []                                                  | Crea una COPIA ITERABLE de un objeto                                                                                |
|                                            |                                                                                                    |                                                                                                                     |
|                                            |                                                                                                    | Cuando se modifica la copia obj2,                                                                                   |
|                                            |                                                                                                    | NO se modifica el objeto original obj1 (inmutabilidad)                                                              |
|------------------------|-------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| ¿Se puede usar con...? | '' string         |                                                                                                    | ✓                                                                                                                   |
|------------------------|-------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|                        | {} objeto literal |                                                                                                    | ✓                                                                                                                   |
|                        |                   |                                                                                                    | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals |
|------------------------|-------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|                        | [] array          | ✓                                                                                                  | ✓                                                                                                                   |
|                        |                   |                                                                                                    | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals  |
|------------------------|-------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|                        | Funciones         | ✓                                                                                                  | ✓                                                                                                                   |
|                        |                   |                                                                                                    | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls  |
|------------------------|-------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Sintaxis                                   | function miFuncion(a, b, ...theArgs) {                                                             | miFuncion(a, ...iterableObj, b)                                                                                     |
|                                            | // ...                                                                                             | [1, ...iterableObj, '4', 'five', 6]                                                                                 |
|                                            | }                                                                                                  | { ...obj, key: 'value' }                                                                                            |
|                                            |                                                                                                    |                                                                                                                     |
|                                            | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#syntax | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#syntax                    |
|--------------------------------------------|----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|

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
- ... Es la sintaxis extendida o parametros rest

- ...iterableObj y ...obj objeto iterable

- miFuncion
Nombre de una funcion

- ...theArgs */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - ... Diferencia 1 Entre Parametros Rest (Rest Parameters) y Sintaxis Extendida (Operador Spread, Spread Operator)
Tienen la misma sintaxis
pero ...rest es el RESTO, en cambio spread es ESPARCIR
https://youtube.com/shorts/aOH4b3JViYA?si=1lmGQ0iP4QTwp1Jd */

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* Para "EXTRAER datos" (ANTES del igual), 
usar ..rest para tener el "resto"
de elementos extraídos 
cuando buscas datos específicos de una colección (desestructuracion).

uno y dos son los numeros (elementos) 1 y 2

...rest es el resto (los otros) numeros del array [] 3, 4, 5 */
const [uno, dos, ...rest] = numeros; // Desestructuracion
console.log(uno);  // 1
console.log(dos);  // 2
console.log(rest); // (3) [3, 4, 5]

/* Recordatorio:
Ver:
" 9.4.3.3.10) Agregar Nuevo Elemento al .unshift() PRINCIPIO y .push() FINAL del Array y Devolver la Nueva Longitud .length del Array "

Para "AÑADIR nuevos datos" (DESPUES del igual), 
y deseas añadir elementos a un {} objeto o [] array, 
en lugar de hacer array.push(1) array.push(2) usar spread operator

Sintaxis Extendida crear COPIA del array [] numeros y concatenarlo con array [] masNumeros

-1, 0 son del array masNumeros
y 1, 2, 3, 4, 5 son del array numeros */
const masNumeros = [-1, 0, ...numeros];
console.log(masNumeros); // (7) [-1, 0, 1, 2, 3, 4, 5]
console.log(numeros);    // (5) [1, 2, 3, 4, 5]

/* --------------------------------------------------------------- */

/* Ejemplo 2 - ... Diferencia 2 Entre Parametros Rest (Rest Parameters) y Sintaxis Extendida (Operador Spread, Spread Operator)
https://youtube.com/shorts/Rk7dCahmTCU?si=eRYQ9rw1kf1ZqB2M 

Recordatorio:
Ver:
" 12.2) Resumen: Partes (Sintaxis) de una Función "

con rest una funcion puede tener CUALQUIER numero de argumentos args */

const miFuncion = (...args) => args;

const rest2 = miFuncion(1, 2, 3); // argumentos 1, 2, 3
console.log(rest2);
// (3) [1, 2, 3]

/* En cambio, spread asgina un numero en ESPECIFICO de argumentos.

A los parametros (a, b, c) asignarle los argumentos [4, 5, 6],
son 3 parametros y argumentos */
const array = [4, 5, 6];
console.log(array);
// (3) [4, 5, 6]

const miFuncion2 = (a, b, c) => { // (a, b, c) parametros
  console.log(a); // 4
  console.log(b); // 5 
  console.log(c); // 6
}

console.log(...array);
// 4 5 6

miFuncion2(...array);             // ...array argumentos
/*
4
5
6
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3 - ... Diferencia 3 Entre Parametros Rest (Rest Parameters) y Sintaxis Extendida (Operador Spread, Spread Operator)
https://youtu.be/yGJdRAXHCPM?si=dtgFrE1FXsLS2stm

rest sumar N numeros */



/* --------------------------------------------------------------- */

/* Ejemplo X - ... Sintaxis Extendida (Spread Operator) e Inmutabilidad (OBJETO LITERAL)
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

/* Ejemplo X - ... Sintaxis Extendida (Spread Operator) e Inmutabilidad (ARRAY)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals */

// Array original
const original = [1, 2, 3];
console.log(original);
// (3) [1, 2, 3]

// ... Hacer copia de array original
const copia = [...original];
console.log(copia);
// (3) [1, 2, 3]

/* .push() Agregar nuevo elemento al FINAL del Array
Al modificar el array copia NO se modifica array original */
copia.push(4);
console.log(original); // (3) [1, 2, 3]
console.log(copia); // (4) [1, 2, 3, 4]

/* IMPORTANTE: ⚠️
La ... sintaxis extendida NO hace inmutables los array anidados (multidimensional).
Una posible solucion es structuredClone()
https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types

Crear array anidado (multidimensional) */
const anidado = [[1], [2], [3]];
console.log(anidado);
// (3) [ [ 1 ], [ 2 ], [ 3 ] ]

// ... crear copia de array anidado
const copia2 = [...anidado];
console.log(copia2);
// (3) [ [ 1 ], [ 2 ], [ 3 ] ]

/* .shift() Eliminar PRIMER Elemento del Array

Hay un error:
Cuando modifico el array copia2 tambien se modifica el array original anidado */
copia2.shift().shift();
console.log(copia2); // (2) [ [ 2 ], [ 3 ] ]
console.log(anidado); // (3) [ [], [ 2 ], [ 3 ] ]

/* --------------------------------------------------------------- */

/* Ejemplo X - Concatenar (unir) ARRAY usando la ... sintaxis extendida (spread operator)
La ... sintaxis extendida es una alternativa a:
- .concat()
- .unshift()
- .push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals */

const array1 = [1, 2, 3];
console.log(array1);
// (3) [1, 2, 3]

const array2 = [4, 5, 6];
console.log(array2);
// (3) [4, 5, 6]

let concatenar = [...array1, ...array2];
console.log(concatenar);
// (6) [1, 2, 3, 4, 5, 6]

/* En la siguiente linea de codigo
puedo usar la ... sintaxis extendida
cualquier numero de veces y en cualquier parte */
concatenar = [0, ...array1, 4, 5, 6];
console.log(concatenar);
// (6) [0, 1, 2, 3, 4, 5, 6]

/* --------------------------------------------------------------- */

// Ejemplo X - Concatenar (unir) OBJETO LITERAL usando la ... sintaxis extendida (spread operator)

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

/* Ejemplo X - Crear funcion concatenar con ... sintaxis extendida (spread operator)
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

/* Ejemplo X - Diferencia Entre ... Sintaxis Extendida y Object.assign()
- Stack Overflow:
https://stackoverflow.com/questions/32925460/object-spread-vs-object-assign

https://stackoverflow.com/questions/38462000/difference-between-object-assign-and-object-spread

- Documentacion Oficial:
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
con Object.assign(); y la ... sintaxis extendida */
const assign = Object.assign(o1); // o1
const spread = { ...o2 }; // o2

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

// Ejemplo X - ... Sintaxis Extendida (Spread Operator) en funcion

// funcion flecha q retorna 'hola mundo'
const funcion = () => 'hola mundo';
console.log(funcion);
// [Function: funcion]

// guardar valor de retorno de funcion
const retorno = funcion();
console.log(retorno);
// 'hola mundo'

/* convertir de string a array
usando ... Sintaxis Extendida (Spread Operator) */
const spreadOperator = [...retorno];
console.log(spreadOperator); // (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
console.log(typeof spreadOperator); // 'object'

/* --------------------------------------------------------------- */

/* Ejemplo X - ... Sintaxis Extendida (Spread Operator) en funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls */

// funcion para sumar 3 numeros
const sumar = (x, y, z) => x + y + z;
console.log(sumar);
// [Function: sumar]

/* quiero sumar los 3 numeros de este array,
este array numeros contiene los argumentos de la funcion sumar */
const numeros = [1, 2, 3];
console.log(numeros);
// (3) [1, 2, 3]

/* cuando NO uso la ... sintaxis extendida,
entonces NO se suman los numeros */
let resultado = sumar(numeros);
console.log(resultado);
// '1,2,3undefinedundefined'

/* En cambio, cuando SI uso la ... sintaxis extendida
SI se suman los numeros 1+2+3 = 6 */
resultado = sumar(...numeros);
console.log(resultado);
// 6

/* .apply() es una alternativa a la ... sintaxis extendida

Segun ESLint Airbnb usar .apply() es mala practica
https://eslint.org/docs/latest/rules/prefer-spread

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply */

resultado = sumar.apply(null, numeros); // .apply()
console.log(resultado);
// 6

/* --------------------------------------------------------------- */

/* Ejemplo X - ... Sintaxis Extendida (Spread Operator) en funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls */

const miFuncion = (a, b, c, d, e) => a + b + c + d + e;
console.log(miFuncion);
// [Function: miFuncion]

const argumentos = [2, 3];
console.log(argumentos);
// (2) [2, 3]

/* Cualquer argumento puede usar la sintaxis extendida
y la ... sintaxis extendida se puede usar varias veces

1+2+3+4+5 = 15 */
const resultado2 = miFuncion(1, ...argumentos, 4, ...[5]);
console.log(resultado2);
// 15

/* --------------------------------------------------------------- */

/* Ejemplo X - La ... sintaxis extendida (spread operator) SOLAMENTE funciona en iterables
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

// const array = [...objetoLiteral];
// console.log(array);
/* TypeError: objetoLiteral is not iterable
   at Object.<anonymous> */

/* --------------------------------------------------------------- */

/* Ejemplo X - Usando ... sintaxis extendida (spread operator) convertir de array [] a objeto literal {}
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

/* Ejemplo X - apply() y ... sintaxis extendida (spread operator)
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
