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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.groupBy()                                   █
 █ https://youtu.be/pduSpSe-V-o?si=Qa-YzxFT_PH0X0NY   █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar = (arr: number[]): IParImpar => {
  let resultado: IParImpar = {
    par: [],
    impar: [],
  };

  if (!Array.isArray(arr)) return resultado;
  if (!arr.length) return resultado;

  resultado = Object.groupBy(arr, (number: number) => (number % 2 === 0 ? 'par' : 'impar'));

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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter()                                           █
 █ Solucion de Jon Mircha                              █
 █ https://www.youtube.com/watch?v=6ZkiOGU4uaA&t=1139s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar2 = (arr: number[]): IParImpar => {
  const resultado: IParImpar = {
    par: [],
    impar: [],
  };

  if (!Array.isArray(arr)) return resultado;
  if (!arr.length) return resultado;

  resultado.par = arr.filter((elemento: number) => elemento % 2 === 0);
  resultado.impar = arr.filter((elemento: number) => elemento % 2 === 1);

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
 ▄▄▄▄▄▄▄▄▄▄▄
 █ for i++ █
 ▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar3 = (arr: number[]): IParImpar => {
  const resultado: IParImpar = {
    par: [],
    impar: [],
  };

  if (!Array.isArray(arr)) return resultado;
  if (!arr.length) return resultado;

  for (let i = 0; i < arr.length; i++) {
    const elemento: number = arr[i];

    elemento % 2 === 0 ? resultado.par.push(elemento) : resultado.impar.push(elemento);
  }

  return resultado;
};

parImpar3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// {
//   par:   [ 2, 4, 6, 8, 0 ],
//   impar: [ 1, 3, 5, 7, 9 ]
// }

parImpar3({}); // { par: [], impar: [] }
parImpar3([]); // { par: [], impar: [] }

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduce() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar4 = (arr: number[]): IParImpar => {
  if (!Array.isArray(arr)) return { par: [], impar: [] };
  if (!arr.length) return { par: [], impar: [] };

  return arr.reduce<IParImpar>(
    (acc: IParImpar, elemento: number) => {
      (elemento % 2 === 0 ? acc.par : acc.impar).push(elemento);
      return acc;
    },
    { par: [], impar: [] }
  );
};

parImpar4([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// {
//   par:   [ 2, 4, 6, 8, 0 ],
//   impar: [ 1, 3, 5, 7, 9 ]
// }

parImpar4({}); // { par: [], impar: [] }
parImpar4([]); // { par: [], impar: [] }

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const parImpar5 = (arr: number[]): IParImpar => {
  const resultado: IParImpar = {
    par: [],
    impar: [],
  };

  if (!Array.isArray(arr)) return resultado;
  if (!arr.length) return resultado;

  arr.forEach((number: number) => {
    let key: string = 'par';
    if (number % 2 !== 0) {
      key = 'impar';
    }
    resultado[key].push(number);
  });

  return resultado;
};

parImpar5([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// {
//   par:   [ 2, 4, 6, 8, 0 ],
//   impar: [ 1, 3, 5, 7, 9 ]
// }

parImpar5({}); // { par: [], impar: [] }
parImpar5([]); // { par: [], impar: [] }
