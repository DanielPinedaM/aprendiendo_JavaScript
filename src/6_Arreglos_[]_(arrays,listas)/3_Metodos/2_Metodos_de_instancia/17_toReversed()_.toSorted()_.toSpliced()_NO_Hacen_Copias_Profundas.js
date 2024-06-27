// @ts-nocheck

/* --------------------------------------------------- */

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ IMPORTANTE ⚠️                                                            █
 █ Probema: toReversed() .toSorted() .toSpliced() NO Hacen Copias Profundas █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/

// Estos metodos de array SOLAMENTE sirven para copiar arrays de UNA SOLA dimension []
const numeros = [1, 2, 3];
const copiaNumeros = numeros.toReversed();

// ✔️ solamente se modifica la copia del array copiaNumeros
copiaNumeros[0] = 'NUEVO VALOR';
console.log(copiaNumeros);
// [ 'NUEVO VALOR', 2, 1 ]

console.log(numeros);
// [ 1, 2, 3 ]

// [ { {} } ] Array de objetos con objetos anidados
const usuarios = [
  { id: 1, fav: { food: '🍔' } },
  { id: 2, fav: { food: '🍦' } },
  { id: 3, fav: { food: '🍗' } },
];

// El array se inverte correctamente
const invertirUsuarios = usuarios.toReversed();
console.log(invertirUsuarios);
// [
//   { id: 3, fav: { food: '🍗' } },
//   { id: 2, fav: { food: '🍦' } },
//   { id: 1, fav: { food: '🍔' } }
// ]

// ❌ El problema es q si modifico el array invertirUsuarios tambien se modifica el array original usuarios
invertirUsuarios[0].fav.food = 'NUEVO VALOR';
console.log(invertirUsuarios);
//[
//  { id: 3, fav: { food: 'NUEVO VALOR' } },
//  { id: 2, fav: { food: '🍦' } },
//  { id: 1, fav: { food: '🍔' } }
//]

console.log(usuarios);
//[
//  { id: 1, fav: { food: '🍔' } },
//  { id: 2, fav: { food: '🍦' } },
//  { id: 3, fav: { food: 'NUEVO VALOR' } }
//]

// Lo mismo sucede con un array de objetos [ {} ]
const original = [
  { id: 1, food: '🍔' },
  { id: 2, food: '🍦' },
  { id: 3, food: '🍗' },
];

const copia = original.toReversed();
copia[0].food = 'NUEVO VALOR';
console.log(copia);
// [
//   { id: 3, food: 'NUEVO VALOR' },
//   { id: 2, food: '🍦' },
//   { id: 1, food: '🍔' }
// ]

console.log(original);
// [
//   { id: 1, food: '🍔' },
//   { id: 2, food: '🍦' },
//   { id: 3, food: 'NUEVO VALOR' }
// ]

/* 
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ Solución: structuredClone() █
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
*/

// ✔️ La solucion es usar juntos structuredClone() y toReversed() q crea una copia profunda del array
const original2 = [
  { id: 1, food: '🍔' },
  { id: 2, food: '🍦' },
  { id: 3, food: '🍗' },
];

// SOLAMENTE se modifica la copia2 del array
const copia2 = structuredClone(original2.toReversed());
copia2[0].food = 'NUEVO VALOR';
console.log(copia2);
// [
//   { id: 3, food: 'NUEVO VALOR' },
//   { id: 2, food: '🍦' },
//   { id: 1, food: '🍔' }
// ]

// El array original2 NO se ha modificado (invertido)
console.log(original2);
// [
//   { id: 1, food: '🍔' },
//   { id: 2, food: '🍦' },
//   { id: 3, food: '🍗' }
// ]
