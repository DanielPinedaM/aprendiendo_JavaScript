// @ts-nocheck

/* Tutorial - Diferencia Entre .every() y .some()
https://youtu.be/sVO65BeJjq8

Documentacion Oficial - .some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

.some() ¿AL MENOS UN SOLO elemento del array cumple con la condición de la función?

.some() recorre (itera) cada uno de los elementos del array
y detiene la iteración en la posicion (indice)
en donde encuentra el primer elemento que SI cumple con la condición.

Su sintaxis es:

Donde...
-
Es el nombre del metodo

- */

const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];

console.log(array);

/* ------------------------------------------------------------ */

const array2 = ['■', '■', '●', '■'];
console.log(array2);
//

/* ------------------------------------------------------------ */

/* Ejemplo:
Buscar si un array q contiene un objeto [{}] cumple una condicion

https://youtube.com/shorts/Q8SX7gaA-wI?feature=share */

// Array q contiene un objeto [{}]
const personas = [
  { nombre: 'Midudev', edad: 17 },
  { nombre: 'Daniel', edad: 18 },
  { nombre: 'Fazt', edad: 19 },
];
console.log(personas);
/*
  [
    { nombre: 'Midudev', edad: 17},
    { nombre: 'Daniel', edad: 18 },
    { nombre: 'Fazt', edad: 19 }
  ]
*/

// ¿Hay personas mayores de edad (con 18 o mas años)?
const condicion = personas.some((persona) => persona.edad >= 18);

// .some() devuelve true al encontrar el primer elemento q cumple con la condicion
console.log(condicion);
// true
