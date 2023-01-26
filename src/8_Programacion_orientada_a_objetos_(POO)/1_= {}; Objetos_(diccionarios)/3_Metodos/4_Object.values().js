/* eslint-disable array-callback-return */
// @ts-nocheck

/* Documentacion Oficial - .values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

.values()

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

/* --------------------------------------------------------------- */

// Ejemplo 1

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
