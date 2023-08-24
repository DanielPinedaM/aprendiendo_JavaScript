// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Sucesión de Fibonacci en JS con y sin Recursividad

Fibonacci...
- Tutorial Midudev:
https://youtu.be/6ji-oYS6EgM

https://youtube.com/shorts/_ej3jv8sZTU?feature=share

- Wikipedia:
https://en.wikipedia.org/wiki/Fibonacci_sequence

https://simple.wikipedia.org/wiki/Fibonacci_number

El primer numero es 0,
el segundo es 1
y cada número después
es igual a sumar los dos números justo antes.
y asi sucesivamente la secuencia continua infinitamente:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

Formula:
Fₙ = Fₙ₋₁ + Fₙ₋₂

F₀ = 0
F₁ = 1

0+1   = 1
1+1   = 2
1+2   = 3
3+2   = 5
5+3   = 8
8+5   = 13
13+8  = 21
21+13 = 34
34+21 = 55
55+34 = 89
89+55 = 144 */

/* --------------------------------------------------------------- */

/* Fibonacci SIN recursividad
Complejidad algoritmica: Big O -> n
https://youtube.com/shorts/_ej3jv8sZTU?feature=share */

const fibonacci = (numero) => {
  const fib = [0, 1];

  for (let i = 2; i <= numero; i++) {
    // acumular valores para usarlos en la siguiente iteracion
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib[i]);
  }

  return fib[numero];
};

fibonacci(0);    // 0
fibonacci(1);    // 1

fibonacci(3);    // 2
fibonacci(1000); // 4.346655768693743e+208

/* --------------------------------------------------------------- */

/* Fibonacci CON recursividad
Complejidad algoritmica: Big O -> 2^n */

const fibonacci2 = (numero2) => {
  if (numero2 < 2) return numero2;

  return fibonacci2(numero2 - 2) + fibonacci2(numero2 - 1);
};

fibonacci2(0);  // 0
fibonacci2(1);  // 1

fibonacci2(2);  // 1
fibonacci2(3);  // 2
fibonacci2(4);  // 3
fibonacci2(5);  // 5
fibonacci2(10); // 55
fibonacci2(18); // 2584
