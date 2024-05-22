/* 
Programa una función que 
dado un arreglo de elementos, 
elimine los repetidos

Ejemplo:
miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá [ 'x', 10, 2, '10', true ]

https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                              █
 █  █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ new Set()                                                                            █
 █ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const eliminarRepetido = (array: any[]): any[] => {
  if (!Array.isArray(array)) return [];
  if (!array.length) return [];

  return [...new Set(array)];
};

eliminarRepetido(['x', 10, 'x', 2, '10', 10, true, true]);
// (5) [ 'x', 10, 2, '10', true ]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter()  █
 █ .indexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const eliminarRepetido2 = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return [];
  if (!arr.length) return [];

  return arr.filter((value: any, index: number, array: any[]) => array.indexOf(value) === index);
};

eliminarRepetido2(['x', 10, 'x', 2, '10', 10, true, true]);
// (5) [ 'x', 10, 2, '10', true ]
