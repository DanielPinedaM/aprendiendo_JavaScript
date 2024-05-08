/* 
Programa una función que determine 
si un número es par o impar.
Ejemplo: miFuncion(29) devolverá Impar.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=qMjGhYhmrFc&t=730s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

// num % 2 === 0 -> num es par
const numEsPar = (num: number): boolean => num % 2 === 0;
numEsPar(29); // false
numEsPar(2);  // true


// num % 2 !== 0 -> num es impar
const numEsImpar = (num: number): boolean => num % 2 !== 0;
numEsImpar(29); // true
numEsImpar(2);  // false
