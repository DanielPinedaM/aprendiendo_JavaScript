/* 
Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro),
Ejemplo: mifuncion("Salas") devolverá true.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.youtube.com/watch?v=U4buFGcd_eg&t=1003s */

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .split("").toReversed().join("") █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#difference_between_reduce_and_reduceright */

const palindromo = (string: string): boolean => {
  if (typeof string !== 'string') return false;

  string = string.trim().toLowerCase();
  
  const invertirString: string = string.split("").toReversed().join("");

  return invertirString === string;
};

palindromo('Salas');
// true
