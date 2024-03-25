/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable no-undef */
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */

/* --------------------------------------------------- */

export const secretNumber = 40;          // const
export let nombre = 'modulo math';       // let
export let x = 30, y = 100;              // exportar varias variables

export const numeroGrande = BigInt(999); // BigInt() numero grande

export const id = Symbol('id');          // Symbol() ID

export const sumar = (a, b) => a + b;    // Funcion flecha
export function multiplicar(a, b) {      // Funcion regular
  return a * b;
}

export const array = [1, 2, 3];          // array []
export const [uno, dos, tres] = array;   // desestructuracion de array []

// Objeto literal {}
export const obj = {
  uno: 1,
  dos: 2,
  tres: 3,
};

export class Math { // clase
  double(number) {  // metodo: funcion dentro de clase
    return number * number;
  }
}
