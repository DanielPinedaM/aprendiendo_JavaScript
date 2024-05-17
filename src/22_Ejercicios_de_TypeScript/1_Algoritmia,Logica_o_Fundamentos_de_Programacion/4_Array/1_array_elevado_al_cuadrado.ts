/* 
Programa una función que 
dado un array numérico 
devuelve otro array con los números elevados al cuadrado

Ejemplo: mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄
 █ .map() █
 ▀▀▀▀▀▀▀▀▀▀ */
 
const arrayElevadoAlCuadrado = (array: number[]): number[] => Array.isArray(array) && array?.length ? array.map((elemento) => elemento * elemento) : [];

arrayElevadoAlCuadrado([1, 4, 5]); // (3) [ 1, 16, 25 ]
 
arrayElevadoAlCuadrado([]);        // []
arrayElevadoAlCuadrado({});        // []

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i++ █
 ▀▀▀▀▀▀▀▀▀▀▀ */

const arrayElevadoAlCuadrado2 = (array: number[]): number[] => {
  if (!(Array.isArray(array))) return [];
  if (!(array.length)) return [];

  const arrayElevadoAlCuadrado: number[] = [];

  for (let i = 0; i < array.length; i++) {
    arrayElevadoAlCuadrado.push(array[i] * array[i]);
  }

  return arrayElevadoAlCuadrado;
};

arrayElevadoAlCuadrado2([1, 4, 5]); // (3) [ 1, 16, 25 ]

arrayElevadoAlCuadrado2({});        // []
arrayElevadoAlCuadrado2([]);        // []

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                            █
 █ for of                                            █
 █ https://www.youtube.com/watch?v=6ZkiOGU4uaA&t=85s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const arrayElevadoAlCuadrado3 = (array: number[]): number[] => {
  if (!(Array.isArray(array))) return [];
  if (!(array.length)) return [];

  const arrayElevadoAlCuadrado: number[] = [];

  for (let elemento of array) {
    arrayElevadoAlCuadrado.push(elemento * elemento);
  }

  return arrayElevadoAlCuadrado;
};

arrayElevadoAlCuadrado3([1, 4, 5]); // (3) [ 1, 16, 25 ]

arrayElevadoAlCuadrado3({});        // []
arrayElevadoAlCuadrado3([]);        // []
