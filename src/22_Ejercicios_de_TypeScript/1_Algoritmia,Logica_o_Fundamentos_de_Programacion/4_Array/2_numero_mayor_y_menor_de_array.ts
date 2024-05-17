/* 
Programa una función que 
dado un array devuelva el número mas alto
y el más bajo de dicho array

Ejemplo:
miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
 
Tutorial - Jon Mircha
https://www.youtube.com/watch?v=6ZkiOGU4uaA&t=673s 

Documentación Oficial...
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min 

Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max */

const numero_menor_y_mayor_de_array = (array: number[]): number[] => Array.isArray(array) && array?.length ? [Math.max(...array), Math.min(...array)] : [];

numero_menor_y_mayor_de_array([1, 4, 5, 99, -60]); // (2) [ 99, -60 ]
//                                      ↑    ↑

numero_menor_y_mayor_de_array([]);                 // []
numero_menor_y_mayor_de_array({});                 // []
 
/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .toSorted() █
 █ .at()       █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const numero_menor_y_mayor_de_array2 = (array: number[]): number[] => Array.isArray(array) && array?.length ? [array.toSorted().at(-1), array.toSorted().at(0)] : [];

numero_menor_y_mayor_de_array2([1, 4, 5, 99, -60]); // (2) [ 99, -60 ]
//                                      ↑    ↑

numero_menor_y_mayor_de_array2([]);                 // []
numero_menor_y_mayor_de_array2({});                 // []
