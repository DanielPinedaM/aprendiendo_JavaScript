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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ new Set()                                          █
 █ https://www.youtube.com/watch?v=n2ACoGsRQHY&t=987s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const eliminarRepetido = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return [];
  if (arr.length<2) return arr;

  return [...new Set(arr)];
};

eliminarRepetido(['x', 10, 'x', 2, '10', 10, true, true]); // (5) [ 'x', 10, 2, '10', true ]

eliminarRepetido([]);                 // []
eliminarRepetido(['a']);              // (1) [ 'a' ]
eliminarRepetido(['x', 'x']);         // (1) [ 'x' ]

// el parametro NO es un array []
eliminarRepetido(123);                // []
eliminarRepetido('123');              // []
eliminarRepetido('hola mundo');       // []
eliminarRepetido(Symbol('id'));       // []
eliminarRepetido(undefined);          // []
eliminarRepetido(null);               // []
eliminarRepetido(NaN);                // []
eliminarRepetido(BigInt(999));        // []
eliminarRepetido(true);               // []
eliminarRepetido(false);              // []
eliminarRepetido({});                 // []

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ .filter()                                          █
 █ .indexOf()                                         █
 █ https://www.youtube.com/watch?v=n2ACoGsRQHY&t=581s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const eliminarRepetido2 = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) return [];
  if (arr.length<2) return arr;

  return arr.filter((elemento: any, index: number, array: any[]) => array.indexOf(elemento) === index);
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
  if (arr.length<2) return arr;

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
  if (arr.length<2) return arr;

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
  if (arr.length<2) return arr;

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
