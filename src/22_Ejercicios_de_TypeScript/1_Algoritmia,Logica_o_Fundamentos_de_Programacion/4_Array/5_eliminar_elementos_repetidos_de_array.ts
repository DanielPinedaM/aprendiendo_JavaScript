/* 
Programa una función que 
dado un arreglo de elementos, 
elimine los repetidos

Ejemplo:
miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá [ 'x', 10, 2, '10', true ]

https://builtin.com/software-engineering-perspectives/remove-duplicates-from-array-javascript

*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ new Set() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀ */

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

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce()  █
 █ .push()    █ 
 █ .indexOf() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const eliminarRepetido3 = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return [];
  if (!arr.length) return [];

  return arr.reduce((a, b) => {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []);
};

eliminarRepetido3(['x', 10, 'x', 2, '10', 10, true, true]);
// (5) [ 'x', 10, 2, '10', true ]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce()   █
 █ .includes() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const eliminarRepetido4 = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return [];
  if (!arr.length) return [];

  return arr.reduce(
    (acumulador, elemento) =>
      acumulador.includes(elemento) ? acumulador : [...acumulador, elemento],
    []
  );
};

eliminarRepetido4(['x', 10, 'x', 2, '10', 10, true, true]);
// (5) [ 'x', 10, 2, '10', true ]

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach()  █
 █ .includes() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const eliminarRepetido5 = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return [];
  if (!arr.length) return [];

  const unico: any[] = [];
  arr.forEach((elemento: any) => {
    if (!unico.includes(elemento)) {
      unico.push(elemento);
    }
  });
  return unico;
};

eliminarRepetido5(['x', 10, 'x', 2, '10', 10, true, true]);
// (5) [ 'x', 10, 2, '10', true ]
