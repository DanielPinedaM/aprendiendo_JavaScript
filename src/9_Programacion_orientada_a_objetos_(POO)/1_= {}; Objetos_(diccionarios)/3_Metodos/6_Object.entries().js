/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
// @ts-nocheck

/*
Object.entries() Convertir a Array Anidado que Contiene [propiedad, valor] Enumerables del Objeto {}

Documentacion Oficial - Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

Alternativas a Object.entries()

|--------------------------------|------------------------------------------------------------|
| Object.keys()                  | Convertir a array [] las propiedades (claves)              |
|                                | enumerables del objeto {}                                  |
|--------------------------------|------------------------------------------------------------|
| Object.getOwnPropertyNames()   | Convertir a array [] las propiedades (claves)              |
|                                | enumerables y no enumerables del objeto {}                 |
|--------------------------------|------------------------------------------------------------|
| Object.getOwnPropertySymbols() | Convertir a array [] las propiedades                       |
|                                | que son de tipo Symbol()                                   |
|--------------------------------|------------------------------------------------------------|
| Object.values()                | Convertir a array [] los valores enumerables del objeto {} |
|--------------------------------|------------------------------------------------------------|

Sintaxis:
Object.entries(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#syntax

Donde...
- Object.entries()
Es el nombre del metodo

- nombreObjeto
Nombre de la variable que contiene el objeto literal {} */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Recorrer (iterar) objetoLiteral usando Object.entries()

https://youtu.be/Mz9HSiXSSVU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#iterating_through_an_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* Object.entries()
Contiene un array anidado con pares de [propiedad, valor] del objeto literal {} */
const entries = Object.entries(objetoLiteral);
console.log(entries);
// (3) [ [ 'uno', 1 ], [ 'dos', 2 ], [ 'tres', 3 ] ]

/* Object.entries() Convertir el objetoLiteral {} a array []

.map()              Devolver un nuevo array con el resultado de ejecutar una función
                    a cada uno de los elementos de un array existente (mapear array) */
Object.entries(objetoLiteral).map((entry) => {
  const [propiedad, valor] = entry;
  console.log(`${propiedad} ➜ ${valor}`);

  // return
});
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/

/* Otra forma es usar Object.entries() y for of,
la diferencia es que .map() SI tiene valor de retorno return,
en cambio for of NO
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#try_it */

for (const [propiedad, valor] of Object.entries(objetoLiteral)) {
  console.log(`${propiedad} ➜ ${valor}`);
}
/*
uno  ➜ 1
dos  ➜ 2
tres ➜ 3
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#using_object.entries */

// Originalmente este es el orden de las propiedad: valor,
const objetoLiteral2 = {
// propiedad: valor,
  100: 'a',
  2: 'b',
  7: 'c',
};

/* Al imprimir el objeto las propiedades (claves)
estan ordenadas de menor a mayor (ascendente) */
console.log(objetoLiteral2);
/*
{
  '2': 'b',
  '7': 'c',
  '100': 'a'
}
*/

/* Object.entries() cambia el orden de los objetos {}
q tienen propiedades (claves) de tipo numero Number()

Object.entries() devuelve las [propiedad, valor] del objeto {}
despues de ordenar las propiedades (claves) q son numeros
de menor a mayor (ascendente) */
Object.entries(objetoLiteral2).map((entry) => {
  const [propiedad, valor] = entry;
  console.log(`${propiedad} ➜ ${valor}`);

  // return
});
/*
2   ➜ b
7   ➜ c
100 ➜ a
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Object.entries() en datos primitivos
Object.entries() convierte a objeto {} los datos q NO son objetos (datos primitivos):

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#using_object.entries_on_primitives

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion */

console.log(Object.entries('hola mundo'));
/*
(10) [
       [ '0', 'h' ], [ '1', 'o' ],
       [ '2', 'l' ], [ '3', 'a' ],
       [ '4', ' ' ], [ '5', 'm' ],
       [ '6', 'u' ], [ '7', 'n' ],
       [ '8', 'd' ], [ '9', 'o' ]
     ]
*/

// Caracter vacio ''
console.log(Object.entries(''));        // []

// Number() numero
console.log(Object.entries(123));       // []

// BigInt() numero grande
console.log(Object.entries(BigInt(1))); // []

// Boolean() booleano
console.log(Object.entries(true));      // []
console.log(Object.entries(false));     // []

// Symbol() ID, identificador unico
console.log(Object.entries(Symbol(2))); // []

// null Nulo
console.log(Object.entries(null));      // ERROR: NO se puede convertir de undefined o null a objeto {}
// undefined Indefinido
console.log(Object.entries(undefined)); // ERROR: NO se puede convertir de undefined o null a objeto {}
// NaN No es un numero
console.log(Object.entries(NaN));       // []

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Convertir de objeto a constructor Map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries#converting_an_object_to_a_map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map */

console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

const map = new Map(Object.entries(objetoLiteral));
console.log(map);
/*
Map(3) {
         'uno' => 1,
         'dos' => 2,
         'tres' => 3
       }
*/
