/*
Depurar (Debugging) Código JS en VS Code...

- Tutorial:
https://youtu.be/YpFR8Q2lVDU

- Documentación Oficial de Microsoft:
https://code.visualstudio.com/docs/editor/debugging
*/

/**
 * @param {number} a
 * @param {number} b
 */

function sumar(a, b) {
  return Number(a) + Number(b);
}

const a = 1;
const b = 2;

const llamar_funcion = sumar(a, b);

console.log(a, '+', b, '=', llamar_funcion);
/* 1 + 2 = 3 */
