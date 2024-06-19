/* 
Programa una función que determine 
si un número es primo 

Un numero primo:
- Es un número natural

- Es mayor q 1

- Únicamente tiene dos divisores positivos distintos: él mismo y el 1

Ejemplo: miFuncion(7) devolverá true.

https://en.wikipedia.org/wiki/Prime_number

https://en.wikipedia.org/wiki/List_of_prime_numbers
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Stack Overflow                                                                █
 █ https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const primo = (num: number): boolean => {
  // let i = 2 porque 1/1 = 1
  // Math.sqrt(num) raíz cuadrada de num
  // i <= s mientras q el contador i sea menor a la raíz cuadrada de num
  // i++ aumentar contador
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    // % modulo ¿la division es exacta?
    if (num % i === 0) return false;
  }

  return num > 1;
};

primo(7); // true
primo(4); // false
