// @ts-nocheck

/* Documentacion Oficial - .some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

.some()

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

https://www.instagram.com/reel/CmHSK2dMM03/?utm_source=ig_web_copy_link */

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
