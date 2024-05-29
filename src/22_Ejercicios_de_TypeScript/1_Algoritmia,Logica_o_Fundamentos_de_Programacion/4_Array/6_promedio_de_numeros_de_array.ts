/* 
Programa una función que 
dado un arreglo de números 
obtenga el promedio

Ejemplo:
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) devolverá 4.5
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce()                                           █
 █ Solucion de Jon Mircha                              █
 █ https://www.youtube.com/watch?v=n2ACoGsRQHY&t=1287s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

 const promedio = (arr: number[]): number | null => {
  if (!Array.isArray(arr)) return null;
  if (!arr.length) return null;

  for (let elemento of arr) {
    if (typeof elemento !== "number") return null;
    if (Number.isNaN(elemento)) return null;
  }

  return arr.reduce((acumulador: number, elemento: number) => acumulador + elemento) / arr.length;
};

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]); // 4.5

promedio([1,  NaN]);                      // null
promedio([1,  "hola mundo"]);             // null
