/* 
A un numero restarle un porcentaje

Programa una función que 
devuelva el monto final después de aplicar un descuento a una cantidad dada.

Ejemplo: miFuncion(1000, 20) devolverá 800.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=WbJzfthCFrM&t=726s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const descuento = (cantidad: number, porcentaje: number = 0): string => {
  if (typeof cantidad !== 'number') return '';
  if (typeof porcentaje !== 'number') return '';
  // cantidad NO puede ser negativa
  if (Math.sign(cantidad) === -1) return '';

  return `${cantidad} - ${porcentaje}% = ${cantidad - (cantidad * porcentaje) / 100}`;
};

descuento(1000, 20); // '1000 - 20% = 800'

descuento(1000);     // '1000 - 0% = 1000'
descuento(-1, 10);   // ''
