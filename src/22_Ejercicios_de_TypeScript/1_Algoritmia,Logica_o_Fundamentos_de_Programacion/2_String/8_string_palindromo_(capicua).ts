/* 
Programa una función que valide si una palabra o frase dada, es un palindromo (capicúa)
(que se lee igual en un sentido que en otro),
Ejemplo: mifuncion("Salas") devolverá true.
*/

/* --------------------------------------------------- */

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .split("").toReversed().join("") █
 █ Solucion de Jon Mircha           █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#difference_between_reduce_and_reduceright

https://www.youtube.com/watch?v=U4buFGcd_eg&t=1003s */

const palindromo2 = (string: string): boolean => {
  if (typeof string !== 'string') return false;

  string = string.trim().toLowerCase();
  
  const invertirString: string = string.split("").reverse().join("");

  return invertirString === string;
};

palindromo2('Salas');
// true
