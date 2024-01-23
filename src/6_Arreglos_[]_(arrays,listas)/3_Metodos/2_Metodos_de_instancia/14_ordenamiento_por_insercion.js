/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Wikipedia...
- Algoritmos de Ordenamiento:
https://en.wikipedia.org/wiki/Sorting_algorithm

https://en.wikipedia.org/wiki/Category:Sorting_algorithms

- Ordenamiento por Insercion:
https://en.wikipedia.org/wiki/Insertion_sort

Tutorial:
https://youtu.be/lYNyL0HuWSg

Pasos del algoritmo de ordenamiento por insercion:
https://www.edureka.co/blog/insertion-sort-in-c/

1) Si el elemento es el primero i=0, ya esta ordenado

2) Pasar al siguiente elemento

3) Guardar en una variable el indice anterior i-1

4) temporal = arr[i]
   Guardar en una variable temporal el numero actual

5) (numero izquierda) > (numero actual)
   SI el numero q esta a la izquierda
   es mayor q el numero actual (temporal) entonces intercambiar numeros,
   repetir este paso 5) hasta que NO se cumpla mas esta condicion

6) Continuar iteracion en el elemento actual i

7) Repetir pasos 1) hasta 6) hasta q todos los numeros esten ordenados

8) Después de los pasos anteriores el array se ordena de menor a mayor (ascendente). */

/* ----------------------------------------------------------- */

const ordenamientoInsercion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const temporal = arr[i];

    while ((j >= 0) && (arr[j] > temporal)) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temporal;
  }

  return arr;
};

const numeros = [2, 3, 1];
console.log(numeros);                                           // (3) [2, 3, 1]

console.log('array ordenado:', ordenamientoInsercion(numeros)); // array ordenado: (3) [1, 2, 3]
