/* 
Programa una función que calcule el factorial de un número 

El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n

El factorial de 0 es 1

Ejemplo: 
- factorial de 5 = 1*2*3*4*5 = 120

- miFuncion(5) devolverá 120.

https://en.wikipedia.org/wiki/Factorial
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=MRmvOTkd7CE&t=857s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const factorial = (numero: number): number | null => {
  if (typeof numero !== 'number') {
    console.warn('Digite un numero');
    return null;
  }

  if (numero < 0) {
    console.warn('Digite un numero mayor o igual a 0, NO negativo');
    return null;
  }

  if (numero === 0) return 1;

  let factorial: number = 1;

  // iterar al reves, de derecha a izquierda
  // (desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento)
  for (let i = numero; i > 1; i--) {
    console.log(`${factorial} * ${i} = ${factorial * i}`, '\n');

    // ESTO...
    //factorial = factorial * i;
    // ES LO MISMO Q ESTO:
    factorial *= i;
  }

  return factorial;
};

factorial(-1);
// 'Digite un numero mayor o igual a 0, NO negativo'
// null

factorial(0);
// 1

factorial();
// 'Digite un numero'
// null

factorial(5);
/*
'1 * 5 = 5'
'5 * 4 = 20'
'20 * 3 = 60' 
'60 * 2 = 120' 
*/
