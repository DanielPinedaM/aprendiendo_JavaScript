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
 █ Solucion de Jon Mircha                              █
 █  █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const promedio = (arr: number[]): number | null => {
  if (!Array.isArray(arr)) return null;
  if (!arr.length) return null;

  return arr.reduce((acumulador: number, elemento: number) => acumulador + elemento) / arr.length;
};

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
// 4.5
