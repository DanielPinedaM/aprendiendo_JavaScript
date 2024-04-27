/* 
Programa una función que invierta las palabras de una cadena de texto, 
Ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
 */

 /* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .toString().replaceAll(',', '') █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll */

const invertirString1 = (string: string): string | null => {
  if (typeof string !== 'string') return null;

  const array: string[] = string.split('').reverse();

  return array.toString().replaceAll(',', '');
};

invertirString1('Hola Mundo');
// 'odnuM aloH'

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ for (let i = string.length - 1; i >= 0; i--) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for */

const invertirString2 = (string: string): string | null => {
  if (typeof string !== 'string') return null;

  let resultado = '';

  // iterar al reves, de derecha a izquierda
  // (desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento)
  for (let i = string.length - 1; i >= 0; i--) {
    resultado += string[i];
  }

  return resultado;
};

invertirString2('Hola Mundo');
// 'odnuM aloH'

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#difference_between_reduce_and_reduceright */

const invertirString3 = (string: string): string | null => {
  if (typeof string !== 'string') return null;

  const array: string[] = string.split('');

  // iterar al reves, de derecha a izquierda
  // (desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento)
  return array.reduceRight((acumulador, elemento) => acumulador + elemento, '');
};

invertirString3('Hola Mundo');
// 'odnuM aloH'
