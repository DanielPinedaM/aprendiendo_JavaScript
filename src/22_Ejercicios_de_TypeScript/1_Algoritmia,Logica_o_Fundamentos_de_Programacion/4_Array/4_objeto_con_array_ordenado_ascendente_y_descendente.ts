/* 
Programa una función que 
dado un arreglo de números, letras, etc 
devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente (menor a mayor)
y el segundo de forma descendente (mayor a menor)

tener en cuenta q .toSorted() se escribe diferente dependiendo del tipo de dato:
numeros.toSorted((a, b) => a - b);
letras.toSorted((a, b) => a.localeCompare(b, 'es-ES'));

Ejemplo: 
miFuncion([2, 4, '0', 3, 1, 'b', 'd', 'c', 'a', true, false, [], {}, null, undefined, NaN]) 
devolverá 
{ 
  ascendente:  [0, 1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false, [], {}, null, undefined, NaN],
  descendente: [4, 3, 2, 1, 0, 'd', 'c', 'b', 'a', true, false, [], {}, null, undefined, NaN]
}
*/

/* --------------------------------------------------- */

interface IOrdenarArray {
  // menor a mayor
  ascendente: number[];

  // mayor a menor
  descendente: number[];
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                              █
 █  █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .toSorted()   █
 █ .toReversed() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const esNumero = (item: any): boolean => typeof item === 'number' && Number.isNaN(item) === false;

const esStringNumero = (item: any): boolean => typeof item === 'string' && /^\d+$/.test(item.trim());

const esLetra = (item: any): boolean => typeof item === 'string' && /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/.test(item.trim());

const ordenarArray = (array: any[]): IOrdenarArray => {
  const resultado: IOrdenarArray = {
    ascendente: [],
    descendente: [],
  };

  if (!Array.isArray(array)) return resultado;
  if (!array.length) return resultado;

  // [...array]  spread operator NO modifcar el array original
  // .filter()   filtrar los numeros [2, 4, '0', 3, 1]
  // .map()      convertir a tipo numero Number() [2, 4, 0, 3, 1]
  // .toSorted() ordenar ascendente (de menor a mayor)
  const numeros: number[] = [...array]
    .filter((item: any) => esNumero(item) || esStringNumero(item))
    .map((item: string | number) => Number(item))
    .toSorted((a: number, b: number) => a - b);
  console.log(numeros);
  // (5) [ 0, 1, 2, 3, 4 ]

  const letras: string[] = [...array]
    .filter((item: any) => esLetra(item))
    .toSorted((a: string, b: string) => a.localeCompare(b, 'es-ES'));
  console.log(letras);
  // (4) [ 'a', 'b', 'c', 'd' ]

  const otrosTiposDeDatos: any[] = array.filter(
    (item: any) => !(esNumero(item) || esStringNumero(item) || esLetra(item))
  );
  console.log(otrosTiposDeDatos);
  // (7) [ true, false, [], {}, null, undefined, NaN ]

  resultado.ascendente = [...numeros, ...letras, ...otrosTiposDeDatos];
  resultado.descendente = [...numeros.toReversed(), ...letras.toReversed(), ...otrosTiposDeDatos];

  return resultado;
};

ordenarArray([2, 4, '0', 3, 1, 'b', 'd', 'c', 'a', true, false, [], {}, null, undefined, NaN]);
// {
//   ascendente:  [ 0, 1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false, [], {}, null, undefined, NaN ],
//   descendente: [ 4, 3, 2, 1, 0, 'd', 'c', 'b', 'a', true, false, [], {}, null, undefined, NaN ]
// }
