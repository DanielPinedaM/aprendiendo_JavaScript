/* eslint-disable no-param-reassign */

// @ts-nocheck

/* Wikipedia...
- Algoritmos de Ordenamiento:
https://en.wikipedia.org/wiki/Sorting_algorithm

https://en.wikipedia.org/wiki/Category:Sorting_algorithms

- Ordenamiento por Seleccion:
https://en.wikipedia.org/wiki/Selection_sort

Tutorial:
https://youtu.be/HVa2_UtXkCI

Pasos del algoritmo de ordenamiento por seleccion:
1) Buscar el menor numero del array

2) Intercambiar con el primer elemento

3) Buscar el minimo del resto del array

4) Intercambiar con el segundo

5) Y asi sucesivamente

6) Después de los pasos anteriores el array se ordena de menor a mayor (ascendente). */

/* ----------------------------------------------------------- */

// https://stackabuse.com/selection-sort-in-javascript/

const ordenamientoSeleccion = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Encontrar indice del numero menor del array
    let numeroMenor = i;

    for (let j = i + 1; j < arr.length; j++) {
      /* arr[j]           -> numero actual del array
         arr[numeroMenor] -> siguiente numero menor del array
         numeroMenor = j  -> nuevo indice del siguiente numero menor */
      if (arr[j] < arr[numeroMenor]) { numeroMenor = j; }
    }

    /* SI el indice del numeroMenor actual
    es DIFERENTE al indice i del for externo entonces... */
    if (numeroMenor !== i) {
      // Intercambiar posicion del numero menor
      const temporal = arr[i];
      arr[i] = arr[numeroMenor];
      arr[numeroMenor] = temporal;
    }
  }

  return arr;
};

const numeros = [2, 3, 1];
console.log(numeros);                                            // (3) [2, 3, 1]
console.log('array ordenado: ', ordenamientoSeleccion(numeros)); // array ordenado: (3) [1, 2, 3]
