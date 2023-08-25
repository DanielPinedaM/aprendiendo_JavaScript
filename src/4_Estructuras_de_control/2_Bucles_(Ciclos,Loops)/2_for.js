// @ts-nocheck

/* --------------------------------------------------------------- */

/*
for Para i=0 Hasta N con Incrementos o Decrementos de Uno en Uno

Midudev - ¿Que es mas rapido .forEach() o for?
https://midu.dev/foreach-mas-rapido-for/

Tutorial Jon Mircha:
https://www.youtube.com/watch?v=AapgtR0Rwk0&t=687s

Documentacion Oficial - for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

Sintaxis:
for (inicializacion de variable; condicion; incremento o decremento) {
    // sentencia (codigo) q se ejecuta i veces
}
*/

/* --------------------------------------------------------------- */

// Ejemplo 1 - Incremento i++

for (let i = 0; i < 10; i++) {
  console.log(i);
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

/* --------------------------------------------------------------- */

// Ejemplo 2 - Decremento i--

for (let i = 9; i >= 0; i--) {
  console.log(i);
}
/*
9
8
7
6
5
4
3
2
1
0
*/

/* --------------------------------------------------------------- */

// Ejemplo 3 - Recorrer (iterar) array usando for

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(numeros);
// (9) [10, 20, 30, 40, 50, 60, 70, 80, 90]

for (let i = 0; i < numeros.length; i++) {
  const elemento = numeros[i];
  console.log(elemento);
}
/*
10
20
30
40
50
60
70
80
90
*/
