/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
// @ts-nocheck

/*
Object.fromEntries() Convertir de Array Anidado que Contiene [propiedad, valor] a Objeto Literal {}

Documentacion Oficial - Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

Su sintaxis es:
Object.fromEntries(iterable)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#syntax

Object.fromEntries() retorna un objeto literal
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#description

Donde...
-
Es el nombre del metodo

- iterable
* Es un objeto iterable

* Es un array anidado que contiene [propiedad, valor] de un objeto literal {}

* Puede ser un array [] ó Map()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Diferencia Entre Object.entries() y Object.fromEntries()

Recordatorio:
Ver:
" 12.1.5.2.5) Object.entries() Convertir a Array Anidado que Contiene [propiedad, valor] Enumerables del Objeto {} "

Object.fromEntries() hace lo opuesto de Object.entries() */

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

// Object.entries() obtener array anidado con [propiedad, valor] del objetoLiteral
const entries = Object.entries(objetoLiteral);
console.log(entries);
/*
(3) [
      [ 'uno', 1 ],
      [ 'dos', 2 ],
      [ 'tres', 3 ]
    ]
*/

// Object.fromEntries() convertir de array anidado con [propiedad, valor] a objeto literal
const fromEntries = Object.fromEntries(entries);
console.log(fromEntries);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Convertir de new Map() a Objeto Literal:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#converting_a_map_to_an_object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object */

const entries2 = new Map([
// propiedad: valor,
  ['uno', 1],
  ['dos', 2],
  ['tres', 3],
]);
console.log(entries2);
/*
Map(3) {
         'uno' => 1,
         'dos' => 2,
         'tres' => 3
       }
*/

const objetoLiteral2 = Object.fromEntries(entries2);
console.log(objetoLiteral2);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Convertir de array anidado [ [] ] a objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#converting_an_array_to_an_object */

const entries3 = [
// propiedad: valor,
  ['uno', 1],
  ['dos', 2],
  ['tres', 3],
];
console.log(entries3);
/*
(3) [
      [ 'uno', 1 ],
      [ 'dos', 2 ],
      [ 'tres', 3 ]
    ]
*/

const objetoLiteral3 = Object.fromEntries(entries3);
console.log(objetoLiteral3);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Multiplicar por 2 los valores del objeto literal {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries#object_transformations */

const objetoLiteral4 = {
// propiedad: valor,
  uno: 1,  // 1*2 = 2
  dos: 2,  // 2*2 = 4
  tres: 3, // 3*2 = 6
};
console.log(objetoLiteral4);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

const porDos = Object.fromEntries(
  Object.entries(objetoLiteral4).map(([propiedad, valor]) => [propiedad, valor * 2]),
);
console.log(porDos);
/*
{
  uno: 2,
  dos: 4,
  tres: 6
}
*/
