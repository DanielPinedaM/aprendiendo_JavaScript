// @ts-nocheck
/* eslint-disable no-plusplus */

/* --------------------------------------------------------------- */

/*
Tutorial Jon Mircha:
https://youtu.be/AapgtR0Rwk0

Documentacion Oficial...
- while
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

- do while
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

ESLint Airbnb - Iteradores y Generadores:
https://airbnb.io/javascript/#iterators-and-generators

La diferencia es el orden en q se evalúa la condición:
while
1) Evalua la condicion

2) Itera hasta que termine de cumplirse la condicion

do while
1) Ejecuta las instrucciones del bucle al menos una vez

2) Evalua la condicion

3) Itera hasta que termine de cumplirse la condicion
*/

/* --------------------------------------------------------------- */

// Ejemplo 1 - Diferencia entre while y do while

let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}
/*
0
1
2
3
4
5
6
7
8
9
*/

console.log(contador);
// 10

do {
  console.log(contador);
  contador++;
} while (contador < 10); // 10 < 10
/*
10
*/
