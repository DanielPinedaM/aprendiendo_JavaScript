/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Diferencias y Similitudes Entre Object.groupBy() y Map.groupBy()
- AGRUPAR [] Array Dependiendo de la Condición de la Función

IMPORTANTE: ⚠️
A la fecha que escribo esto Octubre 2023 Object.groupBy() y Map.groupBy()
NO son compatibles con todos los navegadores,
pero en un futuro esto cambiará y si serán compatibles

Can I Use...
- Object.groupBy()
https://caniuse.com/mdn-javascript_builtins_object_groupby

- Map.groupBy()
https://caniuse.com/mdn-javascript_builtins_map_groupby

Tutorial - Object.groupBy() y Map.groupBy()
https://youtu.be/pduSpSe-V-o?si=6fUVOM8rW8TDT5XR

Documentacion Oficial...
- Object.groupBy()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy

- Map.groupBy()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy

W3 Schools - SQL GROUP BY:
https://www.w3schools.com/sql/sql_groupby.asp

TC 39 - Object.groupBy() y Map.groupBy()
https://github.com/tc39/proposal-array-grouping

CoreJS - Object.groupBy() y Map.groupBy()
https://github.com/zloirock/core-js#array-grouping

https://github.com/zloirock/core-js#array-grouping

Las diferencias tienen fondo amarillo:

                                                              |----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
                                                              | Object.groupBy()                                                                                               | Map.groupBy()                                                                        |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿AGRUPA los elementos del array []                          | ✓                                                                                                              | ✓                                                                                    |
| DEPENDIENDO del valor de retorno return                     |                                                                                                                |                                                                                      |
| de la CONDICION de la FUNCION callbackFn ?                  |                                                                                                                |                                                                                      |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Cuándo usar?                                               | NO cambien,                                                                                                    | SI cambien,                                                                          |
|                                                             | siempre sean los MISMOS nombres de propiedades                                                                 | cuando necesite MODIFICAR los nombres de las propiedades                             |
| Usar cuando después de AGRUPAR el array []                  |                                                                                                                | despues de haber ejecutado Map.groupBy()                                             |
| los nombres de las propiedades (claves)...                  |                                                                                                                |                                                                                      |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Recorre (itera) el array [] ?                              | ✓                                                                                                              | ✓                                                                                    |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿MODIFICA el array1 original?                               | INmutable                                                                                                      | INmutable                                                                            |
|                                                             | X                                                                                                              | X                                                                                    |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Crea una nueva COPIA                                       | ✓                                                                                                              | ✓                                                                                    |
| del array1 original (existente)?                            |                                                                                                                |                                                                                      |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Sirve para array anidado [ [] ]                            | X                                                                                                              | X                                                                                    |
| (copia profunda, deep copies)?                              |                                                                                                                |                                                                                      |
| https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Las ranuras vacías                                         | ✓                                                                                                              | ✓                                                                                    |
| de los array dispersos [,]                                  |                                                                                                                |                                                                                      |
| se iteran como si fueran undefined?                         |                                                                                                                |                                                                                      |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Valor de retorno return                                     | Objeto literal {}                                                                                              | Objeto Map                                                                           |
|                                                             | Objeto prototipo null                                                                                          | => Map                                                                               |
|                                                             | [Object: null prototype]                                                                                       |                                                                                      |
|                                                             | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| La propiedad (clave)...                                     | tiene que ser de tipo String() "" ó Symbol()                                                                   | puede ser CUALQUIER tipo de dato                                                     |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿El valor es un [] array?                                   | ✓                                                                                                              | ✓                                                                                    |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Ejemplo:                                                    | 1) Retorna return un objeto literal {}                                                                         | En cambio, Map.groupBy()                                                             |
| AGRUPAR array []                                            |                                                                                                                | 1) retorna return un objeto Map                                                      |
| dependiendo de la condición de la función                   |                                                                                                                |                                                                                      |
|                                                             | 2) Las CONDICIONES de tipo String()                                                                            | 2) Las VARIABLES circulo y otraFigura                                                |
| AGRUPAR (juntar)                                            | son 'circulo' y 'otraFigura',                                                                                  | q pueden ser CUALQUIER tipo de dato,                                                 |
| los círculos '●' y las otras figuras                        | es decir, son los nombres de las propiedades                                                                   | son los nombres de las propiedades                                                   |
| q NO son circulo, es decir, '▲' y '✖'                       | Tambien pueden ser tipo Symbol()                                                                               |                                                                                      |
|                                                             |                                                                                                                | const circulo = { circulo: true };                                                   |
|                                                             | Object.groupBy(['▲', '●', '✖', '●'], (x) => (x === '●' ? 'circulo' : 'otraFigura'))                            | const otraFigura = { otraFigura: true };                                             |
|                                                             | //                    ↑         ↑                                                                              |                                                                                      |
|                                                             |                                                                                                                | console.log(circulo);    // { circulo: true }                                        |
|                                                             | // {                                                                                                           | console.log(otraFigura); // { otraFigura: true }                                     |
|                                                             | //   circulo:    ['●', '●'],                                                                                   |                                                                                      |
|                                                             | //   otraFigura: ['▲', '✖']                                                                                    | Map.groupBy(['▲', '●', '✖', '●'], (x) => (x === '●' ? circulo : otraFigura));       |
|                                                             | // }                                                                                                           | //                 ↑          ↑                                                      |
|                                                             |                                                                                                                |                                                                                      |
|                                                             |                                                                                                                | // => Map {                                                                          |
|                                                             |                                                                                                                | //          { otraFigura: true }: [ '▲', '✖' ],                                      |
|                                                             |                                                                                                                | //          { circulo: true }:    [ '●', '●' ]                                       |
|                                                             |                                                                                                                | //        }                                                                          |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Sintaxis                                                    |                                                                                                  Función Flecha (Arrow Function)                                                                      |
|                                                             |----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
|                                                             | Object.groupBy(array, (element, index) => { })                                                                 | Map.groupBy(array, (element, index) => { })                                          |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy#syntax */

// Funcion Flecha (Arrow Function)
// Object.groupBy(array, (element, index) => { /*...*/ })
// Map.groupBy(array, (element, index) => { /*...*/ })

/*
Donde...
- Object.groupBy() y Map.groupBy()
Nombre del método de array []

- array
Nombre variable del [] array que quiero AGRUPAR (categorizar) */

// - (element, index) => { /*...*/ }
/* * Es una funcion callback callbackFn

* Es una funcion que se ejecuta
para cada uno de los elementos del array []

* SI tiene valor de retorno return

* El valor de retorno return es:
- El nombre de la propiedad
- La categoria por la cual se AGRUPAN los elementos del array []

* En Object.groupBy() el valor de retorno (nombre de la propiedad)
es un String() ó Symbol(), en cambio,
en Map.groupBy() puede ser CUALQUIER tipo de dato (objeto o primitivo)

* callbackFn guarda la longitud .length del array []
ANTES de la PRIMERA iteracion, por lo tanto:
1) NO se itera ninguno elemento nuevo
agregado despues de la longitud .length inicial del array
en el momento en q se empezo a iterar

2) Los cambios en los índices ya visitados
no provocan que callbackFn se vuelva a invocar en ellos.

3) Si un elemento existente en el [] array,
aún no se ha iterado,
se cambia por callbackFn,
su valor pasado a callbackFn
será el valor en el momento en que se visita ese elemento.

4) Los elementos eliminados delete se visitan como si lo fueran undefined.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

Hacer lo q dice en los puntos anteriores es MALA PRACTICA

Los metodos (funciones) Object.groupBy() y Map.groupBy()
tienen los siguientes argumentos:

- element
Es el elemento actual del array []
q cambia dependiendo de la posicion del array []

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1 */

/* --------------------------------------------------- */

/* Ejemplo 1 Básico de Diferencia Entre Object.groupBy() y Map.groupBy()
AGRUPAR (juntar) los circulos '●'
y las otras figuras q NO son circulo, es decir, '▲' y '✖'
https://youtu.be/pduSpSe-V-o?si=8Cxi7iFddx-d_fOh */

const figuras = ['▲', '●', '✖', '●'];
//                     ↑         ↑

console.log(figuras);
// (4) ['▲', '●', '✖', '●']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
1) Retorna return un objeto literal {}

2) Las CONDICIONES string 'circulo' y 'otraFigura' son los nombres de las propiedades */

const groupBy = Object.groupBy(figuras, (figura) => (figura === '●' ? 'circulo' : 'otraFigura'));
console.log(groupBy);
/*
{
  otraFigura: [ '▲', '✖' ],
  circulo:    [ '●', '●' ]
}
*/

/*  nombreObjetoLiteral.nombrePropiedad
Acceder a los valores del objeto literal {} */
console.log(groupBy.circulo);    // (2) ['●', '●']
console.log(groupBy.otraFigura); // (2) ['▲', '✖']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Map.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀  */
const circulo = { circulo: true };
const otraFigura = { otraFigura: true };

console.log(circulo);    // { circulo: true }
console.log(otraFigura); // { otraFigura: true }

/* En cambio, Map.groupBy()
1) retorna return un objeto Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

2) Las VARIABLES circulo y otraFigura
q pueden ser CUALQUIER tipo de dato,
son los nombres de las propiedades */

const MapGroupBy = Map.groupBy(figuras, (figura) => (figura === '●' ? circulo : otraFigura));
console.log(MapGroupBy);
/*
=> Map {
        { otraFigura: true }: [ '▲', '✖' ],
        { circulo: true }:    [ '●', '●' ]
       }
*/

/* .get() Acceder a los valores del objeto Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get */
console.log(MapGroupBy.get(circulo));    // (2) ['●', '●']
console.log(MapGroupBy.get(otraFigura)); // (2) ['▲', '✖']

/* Ambos Object.groupBy() y Map.groupBy():
1) NO modifican el [] array original (existente)

2) Crean una nueva COPIA del array1 original (existente)

El array [] figuras sigue teniendo
exactamente los mismos elementos despues de
ejecutar Object.groupBy() y Map.groupBy() */

console.log(figuras);
// (4) ['▲', '●', '✖', '●']

/* --------------------------------------------------- */

/* Ejemplo 2 mas Extenso de Diferencia Entre Object.groupBy() y Map.groupBy()
https://youtu.be/LnqjvuwA83s

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy#using_map.groupby */

// array1 con numeros par e impar
const array1 = [0, 1, 2, 3, 4, 5, 6.1];
console.log(array1);
// (7) [0, 1, 2, 3, 4, 5, 6.1]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
Object.groupBy() Crear un objeto literal {}
en el q se SEPARE (AGRUPE)
los numeros par e impar del array1

(condition ? ifTrue : ifFalse) operador condicional ternario
SI x % 2 === 0 el elemento actual (numero) es par,
SINO es impar */
const objetoLiteralGroup = Object.groupBy(array1, (x) => (x % 2 === 0 ? 'par' : 'impar'));
console.log(objetoLiteralGroup);
/*
{
  par:   [0, 2, 4],
  impar: [1, 3, 5, 6.1]
}
*/

/*
Recordatorio:
Para iterar {} objetoLiteral, ver:
" 14.3) {} Objeto Literal "

Acceder a los valores de las propiedades par e impar de objetoLiteralGroup */

console.log(objetoLiteralGroup.par);   // (3) [0, 2, 4]
console.log(objetoLiteralGroup.impar); // (4) [1, 3, 5, 6.1]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Map.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const par = { par: true };
const impar = { impar: true };

console.log(par);   // { par: true }
console.log(impar); // { impar: true }

/* Map.groupBy() retorna return un objeto Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map */

const objetoMap = Map.groupBy(array1, (x) => (x % 2 === 0 ? par : impar));
console.log(objetoMap);
/*
=> Map {
         { par: true }:   [0, 2, 4],
         { impar: true }: [1, 3, 5, 6.1]
       }
*/

/* .get() Acceder a los valores del objeto Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get */
console.log(objetoMap.get(par));   // (2) ['●', '●']
console.log(objetoMap.get(impar)); // (2) ['▲', '✖']

/* Ambos Object.groupBy() y Map.groupBy() NO modifican el array1 (son INmutables)
porque despues de ejecutarlos
se conservan los mismos elementos del array1 */
console.log(array1);
// (7) [0, 1, 2, 3, 4, 5, 6.1]

/* Despues de ejecutar Map.groupBy()
SI permite modificar los nombres de las propiedades (claves),
en cambio Object.groupBy() NO

La propiedad (clave) se modifica en
const par = { par: true }; y en el objetoMap */

par.par = 'nuevo valor'; // la propiedad originalmente es: const par = { par: true };
console.log(par);
// { par: 'nuevo valor' }

console.log(objetoMap); // la p
/*
=> Map {
         { par: 'nuevo valor' }: [0, 2, 4],
         { impar: true }:        [1, 3, 5, 6.1]
       }
*/

// Acceder a propiedad (clave) par del objeto Map
console.log(objetoMap.get(par));
// (3) [0, 2, 4]

/* En el objeto Map NO se puede utilizar otro objeto que tenga el mismo nombre y propiedades

Si antes ya habia definido const par = { par: true };
entonces NO puedo volver a usar par como nombre de propiedad const par2 = { par: true };

En otras palabras: Los nombres de las propiedades (claves) son UNICOS */
const par2 = { par: true };
console.log(objetoMap.get(par2)); // undefined

/* --------------------------------------------------- */

// Ejemplo 3 - Recorrer (Iterar) Array [] Usando Object.groupBy() y Map.groupBy()

const figuras2 = ['▲', '●', '✖', '■'];
console.log(figuras2);
// (4) ['▲', '●', '✖', '■']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const iterar = Object.groupBy(figuras2, (elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* Object.groupBy() AGRUPA en un objeto literal DEPENDIENDO
  del valor de retorno return de la funcion */
  return elemento;
});
/*
i=0 | elemento = '▲'
i=1 | elemento = '●'
i=2 | elemento = '✖'
i=3 | elemento = '■'
*/

/* return elemento retorna un objeto literal {}
q contiene en las propiedades y valores el array figuras2
porq NO hay un condicional, solo se devuelve el elemento actual */
console.log(iterar);
/*
 {
  '▲': [ '▲' ],
  '●': [ '●' ],
  '✖': [ '✖' ],
  '■': [ '■' ]
}
*/

/* Con Object.keys() puedo acceder a
las propiedades de variable iterar q es el mismo array figuras2 */
const ObjectKeys = Object.keys(iterar);
console.log(ObjectKeys);
// (4) ['▲', '●', '✖', '■']

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Map.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const iterar2 = Map.groupBy(figuras2, (elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return elemento;
});
/*
i=0 | elemento = '▲'
i=1 | elemento = '●'
i=2 | elemento = '✖'
i=3 | elemento = '■'
*/

console.log(iterar2);
/*
=> Map {
         '▲': [ '▲' ],
         '●': [ '●' ],
         '✖': [ '✖' ],
         '■': [ '■' ]
       }
*/

/* --------------------------------------------------- */

/* Ejemplo 4 - Recorrer (Iterar) Array de Objetos [ {} ] Usando Object.groupBy()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group#using_group */

const arrayDeObjetos = [
  {
    uno: 'tres',
    dos: 'cuatro',
  },
  {
    uno: 'cinco',
    dos: 'seis',
  },
];
console.log(arrayDeObjetos);
/*
[
  { uno: 'tres', dos: 'cuatro' },
  { uno: 'cinco', dos: 'seis' }
]
*/

/* Object.groupBy() Iterar array de objetos [ {} ]
SI conozco los nombres de las propiedades

Con la desestructuracion { uno, dos }
puedo acceder a cada uno de los valores de la propiedad del objeto {}
q estan dentro del array de objetos [ {} ] */

const agrupar = Object.groupBy(arrayDeObjetos, ({ uno, dos }, i) => {
  console.log(`i=${i} → uno → ${uno}`);
  console.log(`i=${i} → dos → ${dos}`);
  console.log('---');

  return 'nombrePropiedad';
});
/*
i=0 → uno → tres
i=0 → dos → cuatro
---
i=1 → uno → cinco
i=1 → dos → seis
---
*/

console.log(agrupar.nombrePropiedad);
/*
[
  { uno: 'tres', dos: 'cuatro' },
  { uno: 'cinco', dos: 'seis' }
]
*/

/* --------------------------------------------------- */

/* Ejemplo 5 - Agrupar array de objetos [ {} ]
https://youtu.be/LnqjvuwA83s */

const arrayDeObjetos2 = [
  { nombre: 'Daniel' },    // nombre q contiene 'e'
  { nombre: 'Alejandro' }, // nombre q contiene 'e'

  { nombre: 'Luis' },
  { nombre: 'Juan' },
];
console.log(arrayDeObjetos2);
/*
[
  { nombre: 'Daniel' },
  { nombre: 'Alejandro' },
  { nombre: 'Luis' },
  { nombre: 'Juan' },
];
*/

/* Object.groupBy() AGRUPAR los nombres
q en .includes('e') CUALQUIER PARTE contengan la letra 'e'

.toLowerCase() convertir string a minúscula */

const agrupar2 = Object.groupBy(arrayDeObjetos2, (usuario) => (usuario?.nombre?.toLowerCase()?.includes('e') ? 'CON_e' : 'SIN_e'));
console.log(agrupar2);
/*
{
  CON_e: [
           { nombre: 'Daniel' },
           { nombre: 'Alejandro' }
         ],
  SIN_e: [
           { nombre: 'Luis' },
           { nombre: 'Juan' }
         ]
}
*/

// Acceder a los nombres CON y SIN letra 'e'
console.log(agrupar2.CON_e); // [ { nombre: 'Daniel' }, { nombre: 'Alejandro' } ]
console.log(agrupar2.SIN_e); // [ { nombre: 'Luis' }, { nombre: 'Juan' } ]

/* Agrupar los siguientes nombres:
1) Q solamente tienen 'e'

2) Q solamente tienen 'i'

3) Q NO tienen letra 'e' NI 'i' */

const agrupar3 = Object.groupBy(arrayDeObjetos2, (usuario) => {
  if (usuario?.nombre?.toLowerCase()?.includes('e')) return 'CON_e';
  if (usuario?.nombre?.toLowerCase()?.includes('i')) return 'CON_i';
  return 'SIN_e_ni_i';
});
console.log(agrupar3);
/*
{
  CON_e: [
           { nombre: 'Daniel' },
           { nombre: 'Alejandro' }
         ],
  CON_i: [ { nombre: 'Luis' } ],
  SIN_e_ni_i: [ { nombre: 'Juan' } ]
}
*/

/* --------------------------------------------------- */

/* Ejemplo 6:

https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy#description

Ambos Object.groupBy() y Map.groupBy()
NO sirven para array anidado [ [] ] (copia profunda, deep copies) */

const arrayAnidado = [[0, 2, 4], [1, 3, 5, 6.1]];
console.log(arrayAnidado);
// (2) [[0, 2, 4], [1, 3, 5, 6.1]]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
En ambos, Object.groupBy() y Map.groupBy()
el resultado es INCORRECTO,
los numeros se estan agrupando mal */
const objetoLiteralGroup2 = Object.groupBy(arrayAnidado, (x) => (x % 2 === 0 ? 'par' : 'impar'));
console.log(objetoLiteralGroup2);
/*
{
  impar: [
           [ 0, 2, 4 ],
           [ 1, 3, 5, 6.1 ]
         ]
}
*/

/*
El resultado correcto es:

{
  par:   [0, 2, 4],
  impar: [1, 3, 5, 6.1]
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Map.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const par3 = { par: true };
const impar3 = { impar: true };

console.log(par3);   // { par: true }
console.log(impar3); // { impar: true }

const objetoMap2 = Map.groupBy(arrayAnidado, (x) => (x % 2 === 0 ? par3 : impar3));
console.log(objetoMap2);
/*
=> Map {
         { impar: true }: [
                            [ 0, 2, 4 ],
                            [ 1, 3, 5, 6.1 ]
                          ]
}
*/

/* --------------------------------------------------- */

/* Ejemplo 7 - Object.groupBy() en Array de objetos [ {} ]
https://youtu.be/NIy3v-LRTzo

https://twitter.com/midudev/status/1702332469553611235

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group#using_group

https://philna.sh/blog/2023/09/14/javascript-array-grouping-methods/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy#using_object.groupby

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy#using_map.groupby */

const inventarios = [
  { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
  { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 },

  { nombre: 'res', tipo: 'carne', cantidad: 4 },
  { nombre: 'cerdo', tipo: 'carne', cantidad: 5 },

  { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 },
];
console.log(inventarios);
/*
[
  { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
  { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 },
  { nombre: 'res', tipo: 'carne', cantidad: 4 },
  { nombre: 'cerdo', tipo: 'carne', cantidad: 5 },
  { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
]
*/

/* AGRUPAR los alimentos de acuerdo a su TIPO: 'fruta', 'carne', 'vegetal'

Hay 2 formas de hacerlo:
1) .forEach() Mala practica:
Crear {} objeto literal.
El nombre de la propiedad es el tipo de fruta
y el valor un array vacio [] */

const objetoTipo = {
// propiedad: valor,
  fruta: [],
  carne: [],
  vegetal: [],
};
console.log(objetoTipo);
/*
{
  fruta: [],
  carne: [],
  vegetal: []
}
*/

inventarios.forEach((inventario) => {
  objetoTipo[inventario.tipo].push(inventario);
});
console.log(objetoTipo);
/*
{
  fruta: [
    { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
    { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 }
  ],
  carne: [
    { nombre: 'res', tipo: 'carne', cantidad: 4 },
    { nombre: 'cerdo', tipo: 'carne', cantidad: 5 }
  ],
  vegetal: [
    { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
  ]
}
*/

/* Object.groupBy() Buena practica
   ESTO... */
const tipoAlimento = Object.groupBy(inventarios, ({ tipo }) => tipo);
console.log(tipoAlimento);
/*
{
   fruta: [
     { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
     { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 }
   ],
   carne: [
     { nombre: 'res', tipo: 'carne', cantidad: 4 },
     { nombre: 'cerdo', tipo: 'carne', cantidad: 5 }
   ],
   vegetal: [
     { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
   ]
}
*/

// ES LO MISMO Q ESTO:
const tipoAlimento2 = Object.groupBy(inventarios, (inventario) => {
  return inventario?.tipo;
});
console.log(tipoAlimento2);
/*
{
   fruta: [
     { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
     { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 }
   ],
   carne: [
     { nombre: 'res', tipo: 'carne', cantidad: 4 },
     { nombre: 'cerdo', tipo: 'carne', cantidad: 5 }
   ],
   vegetal: [
     { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
   ]
}
*/

// Acceder a los valores de las propiedades con los tipos de alimentos
console.log(tipoAlimento2.fruta);
/*
[
  { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
  { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 }
]
*/

console.log(tipoAlimento2.carne);
/*
[
  { nombre: 'res', tipo: 'carne', cantidad: 4 },
  { nombre: 'cerdo', tipo: 'carne', cantidad: 5 }
]
*/

console.log(tipoAlimento2.vegetal);
/*
[
   { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
]
*/

/* Object.groupBy() AGRUPAR los alimentos por su CANTIDAD:
Si la cantidad es > 5 (6, 7, 8...)
ó cantidad <= 5 (5, 4, 3...) */

const agruparCantidad = Object.groupBy(inventarios, ({ cantidad }) =>  (cantidad > 5 ? 'cantidad > 5 ?' : 'cantidad <= 5'));
console.log(agruparCantidad);
/*
{
  'cantidad <= 5':  [
                      { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
                      { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 },
                      { nombre: 'res', tipo: 'carne', cantidad: 4 },
                      { nombre: 'cerdo', tipo: 'carne', cantidad: 5 }
                    ],
  'cantidad > 5 ?': [
                      { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
                    ]
}
*/

// Object.groupBy() Agrupar por agotado, poca o demasiada cantidad
const agruparCantidad2 = Object.groupBy(inventarios, ({ cantidad }) => {
  if (cantidad === 0) return 'agotado';
  if (cantidad >= 1 && cantidad <= 3) return 'poca cantidad';
  return 'demasiada cantidad'; // cantidad >= 4
});
console.log(agruparCantidad2);
/*
{
  agotado: [ {nombre: 'bananas', tipo: 'fruta', cantidad: 0} ],
  demasiada cantidad: [
                        {nombre: 'res', tipo: 'carne', cantidad: 4},
                        {nombre: 'cerdo', tipo: 'carne', cantidad: 5},
                        {nombre: 'lechuga', tipo: 'vegetal', cantidad: 6}
                      ],
  poca cantidad: [ {nombre: 'cerezas', tipo: 'fruta', cantidad: 3} ]
}
*/

// Object.groupBy() Agrupar alimentos por su letra inicial
const inicial = Object.groupBy(inventarios, ({ nombre }) => nombre[0]);
console.log(inicial);
/*
{
  b: [ {nombre: 'bananas', tipo: 'fruta', cantidad: 0} ],
  c: [
       { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 },
       { nombre: 'cerdo', tipo: 'carne', cantidad: 5 }
     ],
  l: [  { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 } ],
  r: [ { nombre: 'res', tipo: 'carne', cantidad: 4 } ]
}
*/

/* --------------------------------------------------- */

/* Ejemplo 8 - Array Disperso (Sparse Array) [,] en Métodos Object.groupBy() y Map.groupBy()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

En ambos Object.groupBy() y Map.groupBy()
las ranuras vacias de los array dispersos [,]
se iteran como si fueran undefined

La posicion (indice) 1 tiene una ranura vacia (empty item) [,] */

const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const groupBy2 = Object.groupBy(arrayDisperso, (elemento) => {
  console.log(elemento);
});
/*
1
undefined
3
*/

console.log(groupBy2);
/*
{
  undefined: [1, undefined, 3]
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Map.groupBy() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const MapgroupBy = Map.groupBy(arrayDisperso, (elemento) => {
  console.log(elemento);
});
/*
1
undefined
3
*/

console.log(MapgroupBy);
/*
=> Map {
         undefined: [1, undefined, 3]
       }
*/
