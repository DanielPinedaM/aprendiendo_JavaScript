/* 
Programa una función que 
dado un array de números 
devuelva un objeto con 2 arreglos 
en el primero almacena los números pares 
y en el segundo los impares

Ejemplo;
miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá 
{ 
  par:   [2,4,6,8,0],
  impar: [1,3,5,7,9] 
}
*/

/* --------------------------------------------------- */

interface IParImpar {
  par: number[];
  impar: number[];
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter()                                           █
 █ Solucion de Jon Mircha                              █
 █ https://www.youtube.com/watch?v=6ZkiOGU4uaA&t=1139s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar = (array: number[]): IParImpar => {
  const resultado: IParImpar = {
    par: [],
    impar: [],
  };

  if (!Array.isArray(array)) return resultado;
  if (!array.length) return resultado;

  resultado.par = array.filter((elemento: number) => elemento % 2 === 0);
  resultado.impar = array.filter((elemento: number) => elemento % 2 === 1);

  return resultado;
};

parImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// {
//   par:   [ 2, 4, 6, 8, 0 ],
//   impar: [ 1, 3, 5, 7, 9 ]
// }

parImpar({}); // { par: [], impar: [] }
parImpar([]); // { par: [], impar: [] }

/*
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i++ █
 ▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar2 = (array: number[]): IParImpar => {
  const resultado: IParImpar = {
    par: [],
    impar: [],
  };

  if (!Array.isArray(array)) return resultado;
  if (!array.length) return resultado;

  for (let i = 0; i < array.length; i++) {
    const elemento: number = array[i];

    elemento % 2 === 0 ? resultado.par.push(elemento) : resultado.impar.push(elemento);
  }

  return resultado;
};

parImpar2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// {
//   par:   [ 2, 4, 6, 8, 0 ],
//   impar: [ 1, 3, 5, 7, 9 ]
// }

parImpar2({}); // { par: [], impar: [] }
parImpar2([]); // { par: [], impar: [] }

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar3 = (array: number[]): IParImpar => {
  if (!Array.isArray(array)) return { par: [], impar: [] };
  if (!array.length) return { par: [], impar: [] };

  return array.reduce<IParImpar>(
    (acc: IParImpar, elemento: number) => {
      (elemento % 2 === 0 ? acc.par : acc.impar).push(elemento);
      return acc;
    },
    { par: [], impar: [] }
  );
};

parImpar3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// {
//   par:   [ 2, 4, 6, 8, 0 ],
//   impar: [ 1, 3, 5, 7, 9 ]
// }

parImpar3({}); // { par: [], impar: [] }
parImpar3([]); // { par: [], impar: [] }
