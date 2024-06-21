/* 
Programa una función que 
dado un array []
devuelva un objeto con tres array:
1) array original
2) array con elementos ordenados en forma ASCENDENTE  (menor a mayor) 
3) array con elementos ordenados en forma DESCENDENTE (mayor a menor)


tener en cuenta q .toSorted() se escribe diferente dependiendo del tipo de dato:

Number()
[3, 0, 1, 5, 2, 4].toSorted((a, b) => a - b);                                   // (6) [ 0, 1, 2, 3, 4, 5 ]

String()
["c", "a", "f", "b", "d", "e"].toSorted((a, b) => a.localeCompare(b, 'es-ES')); // (6) [ 'a', 'b', 'c', 'd', 'e', 'f' ] */

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ valor de retorno de la funcion █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

interface IOrdenarArray {
  array: any[];

  // menor a mayor
  ascendente: any[];

  // mayor a menor
  descendente: any[];
}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Funciones para determinar el tipo de dato █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

// solamente tipo NUMERO, NO admite NaN. Ejemplo: 99
const esNumero2 = (item: number): boolean => typeof item === 'number' && Number.isNaN(item) === false;

// string que contenga numero. Ejemplo: '99'
const esStringNumero2 = (item: string): boolean => typeof item === 'string' && /^-?\d+(\.\d+)?$/.test(item.trim());

// 1) solamente tipo STRING
// 2) SI admite mayusculas y minusculas 
// 3) SI admite vocales con tilde
// 4) SI admite ñ minuscula y Ñ MAYUSCULA
// 5) NO admite NaN. 
// 6) el texto NO puede contener numeros, esLetra2('hola 1 mundo') devuelve false
// 7) Ejemplo: 'HolÁ mundó Ñ'
const esLetra2 = (item: string): boolean => typeof item === 'string' && /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/.test(item.trim());

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ Solamente ordenar array de numeros                 █
 █ https://www.youtube.com/watch?v=n2ACoGsRQHY&t=218s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
const ordenarArray = (array: number[]): IOrdenarArray => {
  const resultado: IOrdenarArray = {
    array,
    ascendente: [],
    descendente: [],
  };

  if (!Array.isArray(array)) return resultado;
  if (!array.length) return resultado;

  for (let item of array) {
    if (!esNumero2(item)) return resultado;
  }

  resultado.ascendente = array.toSorted((a, b) => a - b);
  resultado.descendente = resultado.ascendente.toReversed();

  return resultado;
};

// array de numeros
ordenarArray([2, 4, 3, 1]);
//{
//  array:       (4) [ 2, 4, 3, 1 ],
//  ascendente:  (4) [ 1, 2, 3, 4 ],
//  descendente: (4) [ 4, 3, 2, 1 ]
//}

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Ordenar array de la siguiente forma: █
 █ 1) Numeros                           █
 █ 2) letras                            █
 █ 3) Otros tipos de datos              █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ 

 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .filter()      █
 █ .map()         █
 █ .toSorted()    █
 █ .toReversed()  █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const ordenarArray2 = (array: any[]): IOrdenarArray => {
  const resultado: IOrdenarArray = {
    array,
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
    .filter((item: any) => esNumero2(item) || esStringNumero2(item))
    .map((item: string | number) => Number(item))
    .toSorted((a: number, b: number) => a - b);
  console.log(numeros);
  // (5) [ 0, 1, 2, 3, 4 ]

  const letras: string[] = [...array]
    .filter((item: any) => esLetra2(item))
    .toSorted((a: string, b: string) => a.localeCompare(b, 'es-ES'));
  console.log(letras);
  // (4) [ 'a', 'b', 'c', 'd' ]

  const otrosTiposDeDatos: any[] = array.filter(
    (item: any) => !(esNumero2(item) || esStringNumero2(item) || esLetra2(item))
  );
  console.log(otrosTiposDeDatos);
  // (7) [ true, false, [], {}, null, undefined, NaN ]

  resultado.ascendente = [...numeros, ...letras, ...otrosTiposDeDatos];
  resultado.descendente = [...numeros.toReversed(), ...letras.toReversed(), ...otrosTiposDeDatos];
  return resultado;
};

// array de números, letras, etc 
ordenarArray2([2, 4, '0', 3, 1, 'b', 'd', 'c', 'a', true, false, [], {}, null, undefined, NaN]);
// {
//   array:       (16) [ 2, 4, '0', 3, 1, 'b', 'd', 'c', 'a', true, false, [], {}, null, undefined, NaN ]
//   ascendente:  (16) [ 0, 1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false, [], {}, null, undefined, NaN ],
//   descendente: (16) [ 4, 3, 2, 1, 0, 'd', 'c', 'b', 'a', true, false, [], {}, null, undefined, NaN ]
// }

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .Object.groupBy() █
 █ .map()            █
 █ .toSorted()       █
 █ .toReversed()     █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

 const ordenarArray3 = (array: any[]): IOrdenarArray => {
  let resultado: IOrdenarArray = {
    array,
    ascendente: [],
    descendente: [],
  };

  if (!Array.isArray(array)) return resultado;
  if (!array.length) return resultado;

  // Object.groupBy() separar array segun su tipo de dato en numeros, letras y otrosTiposDeDatos
  const groupBy = Object.groupBy(array, (item: any) => {
    if (esNumero2(item) || esStringNumero2(item)) return "numeros";
    
    if (esLetra2(item)) return "letras";
    
    return "otrosTiposDeDatos"
  })
  console.log(groupBy);
  // {
  //   numeros:           (5) [ 2, 4, '0', 3, 1 ],
  //   letras:            (4) [ 'b', 'd', 'c', 'a' ],
  //   otrosTiposDeDatos: (7) [ true, false, [], {}, null, undefined, NaN ]
  // }
  
  // .map()      convertir a tipo numero Number() [2, 4, 0, 3, 1]
  // .toSorted() ordenar ascendente (de menor a mayor)
  groupBy.numeros = groupBy.numeros.map((item: string | number) => Number(item)).toSorted((a: number, b: number) => a - b);
  
  groupBy.letras = groupBy.letras.toSorted((a: string, b: string) => a.localeCompare(b, 'es-ES'));
  
  console.log(groupBy);
  // {
  //   numeros:           (5) [ 0, 1, 2, 3, 4 ],
  //   letras:            (4) [ 'a', 'b', 'c', 'd' ],
  //   otrosTiposDeDatos: (7) [ true, false, [], {}, null, undefined, NaN ]
  // }
  
  resultado.ascendente = [...groupBy.numeros, ...groupBy.letras, ...groupBy.otrosTiposDeDatos];
  resultado.descendente = [...groupBy.numeros.toReversed(), ...groupBy.letras.toReversed(), ...groupBy.otrosTiposDeDatos];
  return resultado;
}

ordenarArray3([2, 4, '0', 3, 1, 'b', 'd', 'c', 'a', true, false, [], {}, null, undefined, NaN]);
// {
//   array:       (16) [ 2, 4, '0', 3, 1, 'b', 'd', 'c', 'a', true, false, [], {}, null, undefined, NaN ]
//   ascendente:  (16) [ 0, 1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false, [], {}, null, undefined, NaN ],
//   descendente: (16) [ 4, 3, 2, 1, 0, 'd', 'c', 'b', 'a', true, false, [], {}, null, undefined, NaN ]
// }
