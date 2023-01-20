/* eslint-disable no-plusplus */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-param-reassign */
// @ts-nocheck

/* Wikipedia...
- Algoritmos de Ordenamiento:
https://en.wikipedia.org/wiki/Sorting_algorithm

https://en.wikipedia.org/wiki/Category:Sorting_algorithms

- Ordenamiento de Burbuja:
https://en.wikipedia.org/wiki/Bubble_sort

Pasos del algoritmo de ordenamiento burbuja:
https://2.bp.blogspot.com/-gucziLSAYBg/W6QqupWX-ZI/AAAAAAAAB7s/aX7CLPbL1ZUSWwqDA9NwqFIzHE4RlLXZwCLcBGAs/s1600/metodo_de_la_burbuja%2B%25281%2529.png

1) Guardar en una variable n el numero de elementos (longitud) del arrayay .length

2) Iterar el arrayay desde el primer hasta el penultimo elemento mientras q n sea mayor q 1

3) Se compara el elemento anterior i con el siguiente i+1

4) (elemento i) > (elemento i+1)
   Intercambiar los elementos si el elemento anterior i es mayor q el siguiente i+1

5) Guardar en una variable newn el ultimo indice del elemento intercambiado

6) Asignar a newn como el nuevo valor de n

7) Repetir pasos 2) hasta 6) hasta q n sea menor o igual a 1

8) Detener la iteracion cuando n sea menor o igual q 1

9) Despues de los pasos anteriores el arrayay se ordena de menor a mayor (ascendente) */

/* ----------------------------------------------------------- */

/* Algoritmo de ordenamiento burbuja optimizado:
https://learn.coderslang.com/0037-javascript-optimized-bubble-sort.-coctail-sort */

const ordenamientoBurbuja = (arr) => {
  /* Booleano q determina si
  hubo al menos un intercambio
  de elementos en la iteracion actual */
  let haIntercambiado = false;

  // Número de iteraciones realizadas por el bucle externo
  let numeroIteracionesForExterno = 0;

  /* for externo se repite desde indice 0
  hasta la ultima arr.length posicion del array */
  for (let i = 0; i < arr.length; i++) {
    /* for interno se repite desde
    indice 0 hasta la penultima arr.length - i posicion del array */
    for (let j = 0; j < arr.length - i; j++) {
      /* SI el numero anterior arr[j] es mayor q
      el siguiente arr[j + 1] entonces... */
      if (arr[j] > arr[j + 1]) {
        // Cambiar valor del booleano a true porq
        haIntercambiado = true;

        // Se han intercambiado los elementos
        const temporal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporal;
      }
    }
    /* Al terminar for interno
    cuando no hay intercambio significa q
    el array esta ordenado
    y puede detenerse la iteracion  */
    if (!haIntercambiado) return numeroIteracionesForExterno;

    // Cambiar valor a false para la siguiente iteracion del for externo
    haIntercambiado = false;

    /* Contar el numero de iteraciones
    q se hizo para ordenar el array */
    numeroIteracionesForExterno++;
  }

  return numeroIteracionesForExterno;
};

const numeros = [2, 3, 1];
console.log(numeros);                                     // (3) [2, 3, 1]

const numeroIteraciones = ordenamientoBurbuja(numeros);
console.log('array ordenado:', numeros);                  // array ordenado: (3) [1, 2, 3]
console.log('numero de iteraciones:', numeroIteraciones); // numero de iteraciones: 2
