/* eslint-disable no-multi-spaces */
/* eslint-disable no-plusplus */
// @ts-nocheck
/* eslint-disable operator-assignment */

/* --------------------------------------------------------------- */

/*
Tutorial de Jon Mircha de operadores de incremento y decremento
https://www.youtube.com/watch?v=_8Z5AeGVIXE&t=822s

Los operadores de incremento aumentan una cantidad numerica
y los de decremento disminuyen una cantidad numerica */

// Originalmente i=1
let i = 1;
console.log(i);
// 1

/*
SUMA:
aumentar i en 2
Esto... */
i = i + 2;
console.log(i);
// 1+2= 3

// Hacer otra vez q i=1
i = 1;
console.log(i);
// 1

// Es lo mismo q esto (abreviacion de operador de asignacion):
i += 2;
console.log(i);
// 1+2= 3

// RESTA:
i -= 3;
console.log(i);
// 3-3 = 0

// Hacer otra vez q i=1
i = 1;
console.log(i);
// 1

// MULTIPLICACION:
i *= 3;
console.log(i);
// 1*3 = 3

// DIVISION:
i /= 3;
console.log(i);
// 3/3 = 1

/* OPERADOR UNARIO
Stack Overflow - Diferencia entre i++ y ++i
https://stackoverflow.com/questions/6378646/whats-the-difference-between-i-and-i-in-javascript

Es un contador al que
se le i++ suma o i-- resta 1 a la variable,
normalmente la variable se le llama i, j, k

++i devuelve el valor de i DESPUES de incrementar (pre-incremento)  (mala practica)
i++ devuelve el valor de i ANTES de incrementar   (post-incremento) (buena practica) */

// Hacer q i = 0
i = 0;
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
