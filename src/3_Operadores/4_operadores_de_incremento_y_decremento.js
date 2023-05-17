/* eslint-disable no-plusplus */
// @ts-nocheck
/* eslint-disable operator-assignment */

/* --------------------------------------------------------------- */

/*
Tutorial de Jon Mircha de operadores de incremento y decremento
https://www.youtube.com/watch?v=_8Z5AeGVIXE&t=822s

Documentacion Oficial...
Operadores de incremento y decremento
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#increment_and_decrement

++ Incremento
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

-- Decremento
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement

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
