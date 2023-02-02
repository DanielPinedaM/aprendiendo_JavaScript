/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
// @ts-nocheck

/* Documentacion Oficial - Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

Object.values() Convertir a array [] los valores enumerables del objeto {}

Su sintaxis es:
Object.values(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values#syntax

Alternativas a Object.values():

|--------------------------------|-----------------------------------------------------------|
| Object.keys()                  | Convertir a array [] las propiedades (claves)             |
|                                | enumerables del objeto {}                                 |
|--------------------------------|-----------------------------------------------------------|
| Object.getOwnPropertyNames()   | Convertir a array [] las propiedades (claves)             |
|                                | enumerables y no enumerables del objeto {}                |
|--------------------------------|-----------------------------------------------------------|
| Object.entries()               | Convertir a array anidado que contiene [propiedad, valor] |
|                                | enumerables del objeto {}                                 |
|--------------------------------|-----------------------------------------------------------|
| Object.getOwnPropertySymbols() | Convertir a array [] las propiedades                      |
|                                | que son de tipo Symbol()                                  |
|--------------------------------|-----------------------------------------------------------|

Donde...
- Object.values()
Es el nombre del metodo

- nombreObjeto
Nombre de la variable que contiene el objeto literal {} */

/* --------------------------------------------------------------- */

/* Ejemplo 1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values#using_object.values */

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

// Object.values() Convertir a array los valores del objetoLiteral {}
const array = Object.values(objetoLiteral);
console.log(array);
// (3) [1, 2, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Recorrer (iterar) los valores de un objetoLiteral {} usando Object.values()
https://youtu.be/Mz9HSiXSSVU  */

console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* .map() Devolver un Nuevo Array con el Resultado de Ejecutar una Función
a Cada Uno de los Elementos de un Array Existente (Mapear Array) */

Object.values(objetoLiteral).map((valor) => {
  console.log(valor);
});
/*
1
2
3
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values#using_object.values */

// Originalmente el orden de los valores del objeto {} es 'a', 'b', 'c'
const objetoLiteral2 = {
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

/* Object.values() cambia el orden de los objetos {}
q tiene propiedades (claves) de tipo numero Number()

Object.values() devuelve los valores del objeto {}
despues de ordenar las propiedades (claves) q son numeros
de menor a mayor (ascendente)  */
const array2 = Object.values(objetoLiteral2);
console.log(array2);
// (3) ['b', 'c', 'a']

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Object.values() en datos primitivos
Object.values() convierte a objeto los datos q NO son objetos (datos primitivos):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values#using_object.values_on_primitives

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion */

/* texto String() es el UNICO tipo de dato primitivo
q cuando lo uso con Object.values() devuelve un array
q en cada uno de los elementos del array contiene un caracter del string */
console.log(Object.values('hola mundo'));
// (10) ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

// Number() numero
console.log(Object.values(123));       // []

// BigInt() numero grande
console.log(Object.values(BigInt(1))); // []

// Boolean() booleano
console.log(Object.values(true));      // []
console.log(Object.values(false));     // []

// Symbol() ID
console.log(Object.values(Symbol(2))); // []

// null Nulo
console.log(Object.values(null));      // ERROR: NO se puede convertir de undefined o null a objeto
// undefined Indefinido
console.log(Object.values(undefined)); // ERROR: NO se puede convertir de undefined o null a objeto
// NaN No es un numero
console.log(Object.values(NaN));       // []
