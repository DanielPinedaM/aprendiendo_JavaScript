/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Diferencias y Similitudes Entre .group() y .groupToMap()
- AGRUPAR Array Dependiendo de la Condición de la Función

Tutorial de Midudev - .group() y .groupToMap()
https://youtu.be/LnqjvuwA83s

https://twitter.com/midudev/status/1475126397601517570?cxt=HHwWhMC4_ZPp2fgoAAAA

Documentacion Oficial...
- .group()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group

- .groupToMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap

CoreJS - .group() y .groupToMap()
https://github.com/zloirock/core-js#array-grouping

https://github.com/zloirock/core-js#array-grouping

Las diferencias tienen fondo amarillo:

                                             |----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
                                             | .group()                                                                   | .groupToMap()                                                                        |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿AGRUPA los elementos del array []         | ✓                                                                          | ✓                                                                                    |
| DEPENDIENDO del valor de retorno return    |                                                                            |                                                                                      |
| de la CONDICION de la FUNCION callbackFn ? |                                                                            |                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Cuándo usar?                              | NO cambien,                                                                | SI cambien,                                                                          |
|                                            | siempre sean los MISMOS nombres de propiedades                             | cuando necesite MODIFICAR los nombres de las propiedades                             |
| Usar cuando después de AGRUPAR el array [] |                                                                            | despues de haber ejecutado .groupToMap()                                             |
| los nombres de las propiedades (claves)... |                                                                            |                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Recorre (itera) el array [] ?             | ✓                                                                          | ✓                                                                                    |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿MODIFICA el array1 original?              | INmutable                                                                  | INmutable                                                                            |
|                                            | X                                                                          | X                                                                                    |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Crea una nueva COPIA                      | ✓                                                                          | ✓                                                                                    |
| del array1 original (existente)?           |                                                                            |                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Sirve para array anidado [ [] ]           | X                                                                          | X                                                                                    |
| (copia profunda, deep copies)?             |                                                                            |                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| ¿Las ranuras vacías                        | ✓                                                                          | ✓                                                                                    |
| de los array dispersos [,]                 |                                                                            |                                                                                      |
| se iteran como si fueran undefined?        |                                                                            |                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Valor de retorno return                    | Objeto literal {}                                                          | Objeto Map                                                                           |
|                                            | Objeto prototipo null                                                      |                                                                                      |
|                                            | [Object: null prototype]                                                   |                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| La propiedad (clave)...                    | tiene que ser de tipo String() "" ó Symbol()                               | puede ser CUALQUIER tipo de dato                                                     |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Ejemplo:                                   | 1) Retorna return un objeto literal {}                                     | En cambio, .groupToMap()                                                             |
| AGRUPAR array []                           |    Objeto prototipo null                                                   | 1) retorna return un objeto Map                                                      |
| dependiendo de la condición de la función  |    [Object: null prototype]                                                | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map |
|                                            |                                                                            |                                                                                      |
| AGRUPAR (juntar)                           | 2) Las CONDICIONES de tipo String()                                        | 2) Las VARIABLES circulo y otraFigura                                                |
| los círculos '●' y las otras figuras       |    son 'circulo' y 'otraFigura',                                           | q pueden ser CUALQUIER tipo de dato,                                                 |
| q NO son circulo, es decir, '▲' y '✖'      |    es decir, son los nombres de las propiedades                            | son los nombres de las propiedades                                                   |
|                                            |                                                                            |                                                                                      |
|                                            |    Tambien pueden ser tipo Symbol()                                        |                                                                                      |
|                                            |                                                                            |                                                                                      |
|                                            | ['▲', '●', '✖', '●'].group((x) => (x === '●' ? 'circulo' : 'otraFigura')); | const circulo = { circulo: true };                                                   |
|                                            |        ↑         ↑                                                         | const otraFigura = { otraFigura: true };                                             |
|                                            |                                                                            |                                                                                      |
|                                            | [Object: null prototype] {                                                 | console.log(circulo);    // { circulo: true }                                        |
|                                            |  otraFigura: [ '▲', '✖' ],                                                 | console.log(otraFigura); // { otraFigura: true }                                     |
|                                            |  circulo:     [ '●', '●' ]                                                 |                                                                                      |
|                                            | }                                                                          | ['▲', '●', '✖', '●'].groupToMap((x) => (x === '●' ? circulo : otraFigura));          |
|                                            |                                                                            |        ↑         ↑                                                                   |
|                                            |                                                                            |                                                                                      |
|                                            |                                                                            | => Map {                                                                             |
|                                            |                                                                            |         { otraFigura: true }: [ '▲', '✖' ],                                          |
|                                            |                                                                            |         { circulo: true }:    [ '●', '●' ]                                           |
|                                            |                                                                            |        }                                                                             |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| Sintaxis                                   |                                                                Funcion Flecha (Arrow Function)                                                                    |
|                                            |----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
|                                            | array.group((element, index, array) => {  …  })                            | array.groupMap((element, index, array) => { … })                                     |
|                                            |----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
|                                            |                                                            Función Retrollamada (Callback Function)                                                               |
|                                            |----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
|                                            | array.group(callbackFn)                                                    | array.groupToMap(callbackFn)                                                         |
|                                            |                                                                            |                                                                                      |
|                                            | array.group(callbackFn, thisArg)                                           | array.groupToMap(callbackFn, thisArg)                                                |
|--------------------------------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap#syntax */

// Funcion Flecha (Arrow Function):
// array.group((element, index, array) => { /* … */ })
// array.groupMap((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function):
// array.group(callbackFn)
// array.groupToMap(callbackFn)

// array.group(callbackFn, thisArg)
// array.groupToMap(callbackFn, thisArg)

/*
Donde...
- .group() y .groupToMap()
Nombre del método de array

- array
Nombre variable del array que quiero AGRUPAR (categorizar)

- callbackFn
* Es una funcion que se ejecuta
para cada uno de los elementos del array

* SI tiene valor de retorno return

* El valor de retorno return es:
- El nombre de la propiedad
- La categoria por la cual se AGRUPAN los elementos del array []

* En .group() el valor de retorno (nombre de la propiedad)
es un String() ó Symbol(), en cambio,
en .groupToMap() puede ser CUALQUIER tipo de dato (objeto o primitivo)

* callbackFn guarda la longitud .length del array
ANTES de la PRIMERA iteracion, por lo tanto:
1) NO se itera ninguno elemento nuevo
agregado despues de la longitud .length inicial del array
en el momento en q se empezo a iterar

2) Los cambios en los índices ya visitados
no provocan que callbackFn se vuelva a invocar en ellos.

3) Si un elemento existente en el array,
aún no se ha iterado,
se cambia por callbackFn,
su valor pasado a callbackFn
será el valor en el momento en que se visita ese elemento.

4) Los elementos eliminados delete se visitan como si lo fueran undefined.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

Hacer lo q dice en los puntos anteriores es MALA PRACTICA

Los metodos (funciones) .group() y .groupToMap()
tienen los siguientes argumentos:

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1

- array
Es el array para el que se evalua la condicion de la funcion

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/* --------------------------------------------------- */

/*
IMPORTANTE: ⚠️
A la fecha que escribo esto Junio 2023 .group() y .groupToMap()
NO son compatibles con todos los navegadores,
pero en un futuro esto cambiará y si serán compatibles

Cuando sean compatibles NO sera necesario
instalar librerias para usar .group() y .groupToMap()

Can I Use...
- .group()
https://caniuse.com/mdn-javascript_builtins_array_group

- .groupToMap()
https://caniuse.com/mdn-javascript_builtins_array_grouptomaps

GitHub - Instalar libreria de metodo .group()
https://github.com/es-shims/Array.prototype.group

https://github.com/tc39/proposal-array-grouping

npm install -D array.prototype.group

Lodash - groupBy
https://lodash.com/docs/4.17.15#groupBy */

// Importar libreria .group()
const assert = require('assert');
const group = require('array.prototype.group');

// when Array#group is present
const shimmed = group.shim();
assert.equal(shimmed, Array.prototype.group);

/* --------------------------------------------------- */

/* Ejemplo 1 Básico de Diferencia Entre .group() y .groupToMap()
AGRUPAR (juntar) los circulos '●'
y las otras figuras q NO son circulo, es decir, '▲' y '✖' */

const figuras = ['▲', '●', '✖', '●'];
//                     ↑         ↑

console.log(figuras);
// (4) ['▲', '●', '✖', '●']

/* .group()
1) Retorna return un objeto literal {}
[Object: null prototype]

2) Las CONDICIONES string 'circulo' y 'otraFigura' son los nombres de las propiedades */

figuras.group((x) => (x === '●' ? 'circulo' : 'otraFigura'));
/*
[Object: null prototype] {
  otraFigura: [ '▲', '✖' ],
  circulo:     [ '●', '●' ]
}
*/

const circulo = { circulo: true };
const otraFigura = { otraFigura: true };

console.log(circulo);    // { circulo: true }
console.log(otraFigura); // { otraFigura: true }

/* En cambio, .groupToMap()
1) retorna return un objeto Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

2) Las VARIABLES circulo y otraFigura
q pueden ser CUALQUIER tipo de dato,
son los nombres de las propiedades */

figuras.groupToMap((x) => (x === '●' ? circulo : otraFigura));
/*
=> Map {
        { otraFigura: true }: [ '▲', '✖' ],
        { circulo: true }:    [ '●', '●' ]
       }
*/

/* Ambos .group() y .groupToMap():
1) NO modifican el array original (existente)

2) Crean una nueva COPIA del array1 original (existente)

El array [] figuras sigue teniendo
exactamente los mismos elementos despues de
ejecutar .group() y .groupToMap(): */

console.log(figuras);
// (4) ['▲', '●', '✖', '●']

/* --------------------------------------------------- */

/* Ejemplo 2 mas Extenso de Diferencia Entre .group() y .groupToMap()
https://youtu.be/LnqjvuwA83s

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map */

// array1 con numeros par e impar
const array1 = [0, 1, 2, 3, 4, 5, 6.1];
console.log(array1);
// (7) [0, 1, 2, 3, 4, 5, 6.1]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .group() █
 ▀▀▀▀▀▀▀▀▀▀▀▀

.group() Crear un objeto literal {}
en el q se SEPARE (AGRUPE)
los numeros par e impar del array1

(condition ? ifTrue : ifFalse) operador condicional ternario
SI x % 2 === 0 el elemento actual (numero) es par,
SINO es impar */
const objetoLiteralGroup = array1.group((x) => (x % 2 === 0 ? 'par' : 'impar'));
console.log(objetoLiteralGroup);
/*
[Object: null prototype] {
  par:   [0, 2, 4],
  impar: [1, 3, 5, 6.1]
}
*/

/*
Recordatorio:
Para iterar objetoLiteral, ver:
" 14.3) {} Objeto Literal "

Acceder a los valores de las propiedades par e impar de objetoLiteralGroup */

console.log(objetoLiteralGroup.par);   // (3) [0, 2, 4]
console.log(objetoLiteralGroup.impar); // (4) [1, 3, 5, 6.1]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .groupToMap() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const par = { par: true };
const impar = { impar: true };

console.log(par);   // { par: true }
console.log(impar); // { impar: true }

/* .groupToMap() retorna return un objeto Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map */

const objetoMap = array1.groupToMap((x) => (x % 2 === 0 ? par : impar));
console.log(objetoMap);
/*
=> Map {
         { par: true }:   [0, 2, 4]
         { impar: true }: [1, 3, 5, 6.1]
       }
*/

/* Ambos .group() y .groupToMap() NO modifican el array1 (son INmutables)
porque despues de ejecutar .group() y .groupToMap()
se conservan los mismos elementos del array1 */
console.log(array1);
// (7) [0, 1, 2, 3, 4, 5, 6.1]

/* --------------------------------------------------- */

// Ejemplo 3 - Recorrer (Iterar) Array [] Usando .group()

const figuras2 = ['▲', '●', '✖', '■'];
console.log(figuras2);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras2.group((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* .group() AGRUPA en un objeto literal DEPENDIENDO
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
[Object: null prototype] {
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

/* --------------------------------------------------- */

/* Ejemplo 4 - Recorrer (Iterar) Array de Objetos [ {} ] Usando .group()

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

/* .group() Iterar array de objetos [ {} ]
SI conozco los nombres de las propiedades

Con la desestructuracion { uno, dos }
puedo acceder a cada uno de los valores de la propiedad del objeto {}
q estan dentro del array de objetos [ {} ] */

const agrupar = arrayDeObjetos.group(({ uno, dos }, i) => {
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

/* Ejemplo 5
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

/* .group() AGRUPAR los nombres
q en .includes('e') CUALQUIER PARTE contengan la letra 'e'

.toLowerCase() convertir string a minúscula */

let agrupar2 = arrayDeObjetos2.group((usuario) => (usuario.nombre.toLowerCase().includes('e') ? 'CON_e' : 'SIN_e'));
console.log(agrupar2);
/*
[Object: null prototype] {
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

agrupar2 = arrayDeObjetos2.group((usuario) => {
  if (usuario.nombre.toLowerCase().includes('e')) return 'CON_e';
  if (usuario.nombre.toLowerCase().includes('i')) return 'CON_i';
  return 'SIN_e_ni_i';
});
console.log(agrupar2);
/*
[Object: null prototype] {
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

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap#description

Ambos .group() y .groupToMap()
NO sirven para array anidado [ [] ] (copia profunda, deep copies) */

const arrayAnidado = [[0, 2, 4], [1, 3, 5, 6.1]];
console.log(arrayAnidado);
// (2) [[0, 2, 4], [1, 3, 5, 6.1]]

/* El resultado es INCORRECTO,
los numeros se estan agrupando mal */
const objetoLiteralGroup2 = arrayAnidado.group((x) => (x % 2 === 0 ? 'par' : 'impar'));
console.log(objetoLiteralGroup2);
/*
[Object: null prototype] {
  impar: [
           [ 0, 2, 4 ],
           [ 1, 3, 5, 6.1 ]
         ]
}
*/

/* El resultado correcto es:

[Object: null prototype] {
  par:   [0, 2, 4],
  impar: [1, 3, 5, 6.1]
}
*/

/* --------------------------------------------------- */

/* Ejemplo 7 - .group() - Array de objetos [ {} ] con un inventario de comidas
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group#using_group */

const inventario = [
  { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
  { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 },

  { nombre: 'res', tipo: 'carne', cantidad: 4 },
  { nombre: 'cerdo', tipo: 'carne', cantidad: 5 },

  { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 },
];
console.log(inventario);
/*
[
  { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
  { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 },
  { nombre: 'res', tipo: 'carne', cantidad: 4 },
  { nombre: 'cerdo', tipo: 'carne', cantidad: 5 },
  { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
]
*/

/* .group() AGRUPAR los alimentos de acuerdo a su TIPO:
'fruta', 'carne', 'vegetal' */
const tipoAlimento = inventario.group(({ tipo }) => tipo);
console.log(tipoAlimento);
/*
[Object: null prototype] {
  fruta:   [
             { nombre: 'bananas', tipo: 'fruta', cantidad: 0 },
             { nombre: 'cerezas', tipo: 'fruta', cantidad: 3 }
           ],
  carne:   [
             { nombre: 'res', tipo: 'carne', cantidad: 4 },
             { nombre: 'cerdo', tipo: 'carne', cantidad: 5 }
           ],
  vegetal: [
             { nombre: 'lechuga', tipo: 'vegetal', cantidad: 6 }
           ]
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .group() █
 ▀▀▀▀▀▀▀▀▀▀▀▀

AGRUPAR los alimentos de acuerdo a su CANTIDAD:
Si la cantidad es > 5 (6, 7, 8...)
o cantidad <= 5 (5, 4, 3...) */

const callbackFn = ({ cantidad }) => (cantidad > 5 ? 'cantidad > 5 ?' : 'cantidad <= 5');
console.log(callbackFn);
// [Function: callbackFn]

const agruparCantidad = inventario.group(callbackFn);
console.log(agruparCantidad);
/*
[Object: null prototype] {
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

/* --------------------------------------------------- */

/* Ejemplo 8 - .groupToMap() - Array de objetos [ {} ] con un inventario de comidas
Es IMPORTANTE ⚠️ leer este ejemplo porq aqui se explica:
- ¿como modificar el nombre de la propiedad despues de ejecutar .groupToMap()?

- .get() ¿Como acceder a los valores de .groupToMap()?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap#using_grouptomap */

/* --------------------------------------------------- */

/* Ejemplo 9 - Array Disperso (Sparse Array) [,] en Métodos .group() y .groupToMap()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group#using_group_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap#using_grouptomap_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

En ambos .group() y .groupToMap()
las ranuras vacias de los array dispersos [,]
se iteran como si fueran undefined

La posicion (indice) 1 tiene una ranura vacia (empty item) [,] */

const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

// .group()
console.log(arrayDisperso.group((elemento) => elemento));      // { 1: [1], undefined: [undefined], 3: [3] }

// .groupToMap()
console.log(arrayDisperso.groupToMap((elemento) => elemento)); // => Map { 1 => [1], undefined => [undefined], 3 => [3] }

/* --------------------------------------------------- */

/* Ejemplo 10 - .group() y .groupToMap() en objetoLiteral {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group#calling_group_on_non-array_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupToMap#calling_grouptomap_on_non-array_objects

Ambos metodos .group() y .groupToMap()
leen la propiedad .length de this
y luego acceden a cada índice entero */

// Crear un nuevo objetoLiteral {}
const objetoLiteral = {
// propiedad: valor,
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(objetoLiteral);
/*
{
  '0': 2,
  '1': 3,
  '2': 4,
  length: 3
}
*/

// .group()
const group2 = Array.prototype.group.call(objetoLiteral, (elemento) => elemento % 2);
console.log(group2);
// { 0: [2, 4], 1: [3] }

// .groupToMap()
const groupToMap = Array.prototype.groupToMap.call(objetoLiteral, (elemento) => elemento % 2);
console.log(groupToMap);
// => Map { 0 => [2, 4], 1 => [3] }
