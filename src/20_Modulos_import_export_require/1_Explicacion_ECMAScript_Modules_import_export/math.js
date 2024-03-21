/* eslint-disable class-methods-use-this */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable semi */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/prefer-default-export */

/* --------------------------------------------------- */

// const secretNumber1 = 30;

export const secretNumber2 = 40;   // const
export let nombre = 'modulo math'; // let
// Solamente se puede exportar por defecto UNA SOLA constante, funcion, clase, etc.
export default nombre;

// exportar varias variables
export let x = 30, y = 100;

// funcion flecha
export const restar = (a, b) => a - b;
export const sumar = (a, b) => a + b;

// funcion regular
export function multiplicar(a, b) {
  return a * b;
}
export function dividir(a, b) {
  return a / b;
}

// clases
export class Math {
  double(number) {
    return number * number
  }
}
