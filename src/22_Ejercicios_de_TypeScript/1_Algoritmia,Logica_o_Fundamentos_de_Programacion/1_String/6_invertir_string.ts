/* 
Programa una función que invierta las palabras de una cadena de texto, 
Ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                            █
 █ .split("").reverse().join("")                     █
 █ https://www.youtube.com/watch?v=U4buFGcd_eg&t=92s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
 */

const invertirString1 = (string: string): string | null => (!string)
                                                            ? (console.warn('no ingresaste una cadena'), null)
                                                               : string.split('').reverse().join('')

invertirString1('Hola Mundo');
// 'odnuM aloH'

invertirString1('');
// 'no ingresaste una cadena'
// null

 /* 

 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .split('').reverse()            █
 █ .toString().replaceAll(',', '') █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll */

const invertirString2 = (string: string): string | null => {
  if (typeof string !== 'string') return null;

  const array: string[] = string.split('').reverse();

  return array.toString().replaceAll(',', '');
};

invertirString2('Hola Mundo');
// 'odnuM aloH'

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ for (let i = string.length - 1; i >= 0; i--) █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for */

const invertirString3 = (string: string): string | null => {
  if (typeof string !== 'string') return null;

  let resultado = '';

  // iterar al reves, de derecha a izquierda
  // (desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento)
  for (let i = string.length - 1; i >= 0; i--) {
    resultado += string[i];
  }

  return resultado;
};

invertirString3('Hola Mundo');
// 'odnuM aloH'

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#difference_between_reduce_and_reduceright */

const invertirString4 = (string: string): string | null => {
  if (typeof string !== 'string') return null;

  const array: string[] = string.split('');

  // iterar al reves, de derecha a izquierda
  // (desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento)
  return array.reduceRight((acumulador, elemento) => acumulador + elemento, '');
};

invertirString4('Hola Mundo');
// 'odnuM aloH'
