// @ts-nocheck
/* eslint-disable no-plusplus */
/* eslint-disable no-multi-spaces */

/* --------------------------------------------------------------- */

/*
Tutorial de Jon Mircha de operadores de incremento y decremento
https://www.youtube.com/watch?v=_8Z5AeGVIXE&t=822s

OPERADOR UNARIO
Stack Overflow - Diferencia entre i++ y ++i
https://stackoverflow.com/questions/6378646/whats-the-difference-between-i-and-i-in-javascript

Es un contador al que
se le i++ suma o i-- resta 1 a la variable,
normalmente la variable se le llama i, j, k

++i devuelve el valor de i DESPUES de incrementar (pre-incremento)  (mala practica)
i++ devuelve el valor de i ANTES de incrementar   (post-incremento) (buena practica) */

// Hacer q i = 0
let i = 0;
console.log(i);
// 0

console.log(++i); // 0+1 = 1 -> incrementa valor en 1 INMEDIATAMENTE
console.log(i);   // 1

// Hacer q i = 0
i = 0;
console.log(i);
// 0

console.log(i++); // 0 -> en esta linea ahun NO se ha incrementado i
console.log(i);   // 0+1 = 1
