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
 */

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .reduceRight() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#difference_between_reduce_and_reduceright */

const palindromo = (string: string): boolean => {
  if (typeof string !== 'string') return false;

  string = string.trim().toLowerCase();

  const array: string[] = string.split('');

  // iterar al reves, de derecha a izquierda
  // (desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento)
  const invertirString: string = array.reduceRight(
    (acumulador, elemento) => acumulador + elemento,
    ''
  );

  return invertirString === string;
};

palindromo('Salas');
// true
