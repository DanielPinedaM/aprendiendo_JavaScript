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
miFuncion([2, '4', 3, 1, 'b', 'd', 'c', 'a', true, false, {}, '0']) 
devolverá 
{ 
  ascendente:  [1, 2, 3, 4, 'a', 'b', 'c', 'd', true, false, {}, '0'],
  descendente: [4, 3, 2, 1, 'd', 'c', 'b', 'a', true, false, {}, '0']
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


