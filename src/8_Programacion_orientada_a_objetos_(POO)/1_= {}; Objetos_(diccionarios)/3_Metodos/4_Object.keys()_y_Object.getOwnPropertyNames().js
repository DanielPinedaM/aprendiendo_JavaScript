/* eslint-disable max-len */

/* eslint-disable array-callback-return */
// @ts-nocheck

/*
Diferencias y Similitudes Entre Object.keys() y Object.getOwnPropertyNames()
Convertir a Array [] las Propiedades (Claves) del Objeto {}

Samantha Ming - Diferencia Entre Object.keys() y Object.getOwnPropertyNames()
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/

Documentacion Oficial...
- Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

- Object.getOwnPropertyNames()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames

                                      |-----------------------------|------------------------------------------|
                                      | Object.keys()               | Object.getOwnPropertyNames()             |
|-------------------------------------|-----------------------------|------------------------------------------|
| ¿Convierte a array []               | ✓                           | ✓                                        |
| las propiedades (claves)            |                             |                                          |
| del objeto literal {} ?             |                             |                                          |
|-------------------------------------|-----------------------------|------------------------------------------|
| Tipo de dato                        | Texto String()              | Texto String()                           |
| de los elementos del array          |                             |                                          |
|-------------------------------------|-----------------------------|------------------------------------------|
| ¿Qué propiedades (claves) devuelve? | SOLAMENTE                   | Propiedades enumerables                  |
|                                     | las propiedades enumerables | y no enumerables                         |
|-------------------------------------|-----------------------------|------------------------------------------|
| ¿Devuelve propiedades               | X                           | X                                        |
| de tipo Symbol()?                   |                             |                                          |
|-------------------------------------|-----------------------------|------------------------------------------|
| ¿Al usar el método de objeto {}     | X                           | ✓                                        |
| en array [] el string 'length'      |                             |                                          |
| se agrega en el último elemento?    |                             |                                          |
|-------------------------------------|-----------------------------|------------------------------------------|
| Sintaxis                            | Object.keys(nombreObjeto)   | Object.getOwnPropertyNames(nombreObjeto) |
|-------------------------------------|-----------------------------|------------------------------------------|

Alternativas a Object.keys() y Object.getOwnPropertyNames()
- Object.values()                Convertir a array [] los valores enumerables del objeto {}
- Object.entries()               Convertir a array anidado que contiene [propiedad, valor] enumerables del objeto {}
- Object.getOwnPropertySymbols() Convertir a array [] las propiedades que son de tipo Symbol()

La sintaxis de Object.keys() es:
Object.keys(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#syntax

La sintaxis de Object.getOwnPropertyNames() es:
Object.getOwnPropertyNames(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames#syntax

Donde...
- Object.keys() y Object.getOwnPropertyNames()
Es el nombre del metodo

- nombreObjeto
Es el nombre de la variable del objeto literal {} */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre Object.keys() y Object.getOwnPropertyNames()
https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length/ */

// Crear objetoLiteral vacio {}
const objetoLiteral = {};
console.log(objetoLiteral);
// {}

// Agregar nuevas propiedades al objetoLiteral {} usando Object.defineProperties()
Object.defineProperties(objetoLiteral, {
  uno: { enumerable: true, value: 1 },  // propiedad: valor, VISIBLE y enumerable
  dos: { enumerable: false, value: 2 }, // "               " OCULTO  y NO enumerable
});
console.log(objetoLiteral);
/*
{
  uno: 1
}
*/

/* 1) Object.keys() convierte a array []
SOLAMENTE las propiedades enumerables del objeto literal {} */
const keys = Object.keys(objetoLiteral);
console.log(keys);                              // ['uno']

/* en cambio, Object.getOwnPropertyNames()
convierte las propiedades enumerables y no enumerables
del objeto literal {} */
const getOwnPropertyNames = Object.getOwnPropertyNames(objetoLiteral);
console.log(getOwnPropertyNames);               // (2) ['uno', 'dos']

// 2) Otra diferencia al usar los metodos de objetos en array es que...
const array = ['uno', 'dos', 'tres'];
console.log(array);                             // (3) ['uno', 'dos', 'tres']

// Object.keys() devuelve SOLAMENTE los indices del array
console.log(Object.keys(array));                // (3) ['0', '1', '2']

// en cambio, Object.getOwnPropertyNames() agrega al final del array el elemento 'length'
console.log(Object.getOwnPropertyNames(array)); // (4) ['0', '1', '2', 'length']

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Longitud de Objeto Literal:
La longitud de un objeto literal {} es el numero de propiedades (claves) del objeto literal {}

https://www.samanthaming.com/tidbits/56-how-to-get-an-object-length */

// Variable 'fantasma' q es un ID UNICO:
const fantasma = Symbol('fantasma');
console.log(fantasma);
// Symbol(fantasma)

// Crear objeto literal con propiedad (clave) de tipo Symbol()
const objetoLiteral2 = {
// propiedad: valor,
  [fantasma]: '👻', // Symbol()
  tortuga: '🐢',
};
console.log(objetoLiteral2);
/*
{
  tortuga: '🐢',
  Symbol(fantasma): '👻'
}
*/

/* Si intento obtener en un array [] la propiedad Symbol() del objeto literal {},
Object.keys() y Object.getOwnPropertyNames() NO funcionan */
console.log(Object.keys(objetoLiteral2));                // ['tortuga']
console.log(Object.getOwnPropertyNames(objetoLiteral2)); // ['tortuga']

/* Object.getOwnPropertySymbols()
convierte a array [] las propiedades del objeto literal {}
que son de tipo Symbol() */
console.log(Object.getOwnPropertySymbols(objetoLiteral2));
// [ Symbol(fantasma) ]

/* Para obtener la longitud total contando:
- Propiedades enumerables
- Propiedades de tipo Symbol()

Uso juntos Object.keys(), Object.getOwnPropertySymbols() y .length

Si tambien quisiera contar la longitud de las propiedades
NO enumerables entonces usaria Object.getOwnPropertyNames()
en vez de Object.keys()

Recordatorio:
Ver:
“ Ejemplo 3 - ¿Que son las propiedades enumerable: true enumerables (visible) y enumerable: false no enumerables (oculta)? ” */

//                                propiedades enumerables + propiedades de tipo Symbol()
const longitudObjeto = Object.keys(objetoLiteral2).length + Object.getOwnPropertySymbols(objetoLiteral2).length;
console.log(longitudObjeto);
// 2

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Recorrer (iterar) array usando Object.keys() y Object.getOwnPropertyNames()
https://youtu.be/Mz9HSiXSSVU */

const objetoLiteral3 = {
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral3);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* .map() Devolver un Nuevo Array con el Resultado de Ejecutar una Función
a Cada Uno de los Elementos de un Array Existente (Mapear Array) */

Object.keys(objetoLiteral3).map((propiedad) => {
  // con la propiedad puedo obtener el valor del objetoLiteral {}
  const valor = objetoLiteral3[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/

Object.getOwnPropertyNames(objetoLiteral3).map((propiedad) => {
  const valor = objetoLiteral3[propiedad];
  console.log(`${propiedad} ➜ ${valor}`);
});
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Object.keys() en array []
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#using_object.keys */

const letras = ['a', 'b', 'c'];
//               0    1    2 -> Indices de array

console.log(letras);
// (3) ['a', 'b', 'c']

/* Al usar Object.keys() en array, devuelve un nuevo array con los indices

.map() convertir a numero Number() los elementos (indices) del array
https://stackoverflow.com/questions/4437916/how-to-convert-all-elements-in-an-array-to-integer-in-javascript */
const indices = Object.keys(letras).map((elemento) => Number(elemento));
console.log(indices);
// (3) [0, 1, 2]

/* --------------------------------------------------------------- */

/* Ejemplo 5:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#using_object.keys

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames#using_object.getownpropertynames */

const objetoLiteral4 = Object.create(
  [],
  {},
  {
    getFoo: {
      value() {
        return 'hola mundo';
      },
    },
  },
);

console.log(objetoLiteral4);
// Array {}

/* Object.keys() Object.getOwnPropertyNames() y Object.entries()
imprimen un objeto vacio [] porque en el objetoLiteral4 no defini propiedad: valor, */
console.log(Object.keys(objetoLiteral4));                // []
console.log(Object.getOwnPropertyNames(objetoLiteral4)); // []
console.log(Object.entries(objetoLiteral4));             // []

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Object.keys() y Object.getOwnPropertyNames() en datos q NO son objetoLiteral {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys#using_object.keys_on_primitives

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion

Object.keys() convierte los datos a objetos */

// Array con indices del string 'hola mundo'
console.log(Object.keys('hola mundo'));                // (10) ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(Object.getOwnPropertyNames('hola mundo')); // (11) ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'length']

// TypeError: NO se puede convertir a objeto undefined NI null
console.log(Object.keys());
console.log(Object.getOwnPropertyNames());
console.log(Object.keys(undefined));
console.log(Object.getOwnPropertyNames(undefined));
console.log(Object.keys(null));
console.log(Object.getOwnPropertyNames(null));

// NaN No es un Numero
console.log(Object.keys(NaN));                       // []
console.log(Object.getOwnPropertyNames(NaN));        // []

// Array vacio []
console.log(Object.keys([]));                        // []
console.log(Object.getOwnPropertyNames([]));         // ['length']

// Number() Numero
console.log(Object.keys(123));                       // []
console.log(Object.getOwnPropertyNames(123));        // []

// Boolean() Booleano
console.log(Object.keys(true));                      // []
console.log(Object.keys(false));                     // []

console.log(Object.getOwnPropertyNames(true));       // []
console.log(Object.getOwnPropertyNames(false));      // []

// Symbol(), Identificador unico, ID
console.log(Object.keys(Symbol(1)));                 // []
console.log(Object.getOwnPropertyNames(Symbol(2)));  // []

// BigInt() Numero grande
console.log(Object.keys(BigInt(1n)));                // []
console.log(Object.getOwnPropertyNames(BigInt(1n))); // []

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Obtener SOLAMANTE las propiedades (claves) NO enumerables de un objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames#get_non-enumerable_properties_only */

// Crear objetoLiteral vacio {}
const objetoLiteral5 = {};
console.log(objetoLiteral5);
// {}

// Agregar nuevas propiedades al objetoLiteral {} usando Object.defineProperties()
Object.defineProperties(objetoLiteral5, {
  uno: { enumerable: true, value: 1 },  // propiedad: valor, VISIBLE y enumerable
  dos: { enumerable: false, value: 2 }, // "               " OCULTO  y NO enumerable
});
console.log(objetoLiteral5);
/*
{
  uno: 1
}
*/

/* Object.getOwnPropertyNames()
Propiedades enumerables y NO enumerables */
const enumerableNoEnumerable = Object.getOwnPropertyNames(objetoLiteral5);
console.log(enumerableNoEnumerable);
// (2) ['uno', 'dos']

/* Object.keys() Propiedades enumerables
   new Set ()    Extrae las propiedades SIN repetirse */
const enumerable = new Set(Object.keys(objetoLiteral5));
console.log(enumerable);
// Set(1) { 'uno' }

// Propiedades NO enumerables
const noEnumerable = enumerableNoEnumerable.filter((propiedad) => !enumerable.has(propiedad));
console.log(noEnumerable);
// ['dos']
