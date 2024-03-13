/* eslint-disable arrow-body-style */
// @ts-nocheck

/* --------------------------------------------------------------- */

/* () => Función Flecha en una Sola Linea (Inline Arrow Function)

Samantha ming - return Implícito y Explicito:
https://www.samanthaming.com/tidbits/47-arrow-functions-cheatsheet/

return implicito:
Devuelve un valor SIN escribir la palabra reservada return,
NI las llaves {} */
const funcionFlechaEnUnaSolaLinea = () => 'hola mundo';
funcionFlechaEnUnaSolaLinea();
// 'hola mundo'

// concatenar array: elemento actual + '▲'
['■', '■', '■', '■'].map((elemento) => `${elemento}▲`);
// (4) ['■▲', '■▲', '■▲', '■▲']

/* return explicito:
En cambio, en otros tipos de funciones SI se necesita escribir return y las llaves {} */
function declaracionDeFuncion() {
  // ...
  return 'hola mundo';
}
declaracionDeFuncion();
// 'hola mundo'

const funcionFlecha = () => {
  // ...
  return 'hola mundo';
};
funcionFlecha();
// 'hola mundo'
