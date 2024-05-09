/* 
Programa una función para 
convertir números de base binaria a decimal y viceversa.
Ejemplo: miFuncion(100, 2) devolverá 4 base 10.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=WbJzfthCFrM&t=91s  █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const baseBinariaDecimal = (numero: number, base: 2 | 10): string => {
  if (typeof numero !== 'number') return '';
  if (base !== 2 && base !== 10) return '';

  // parseInt(numero.toString(), base) -> convertir de base binaria a base decimal
  if (base === 2) {
    return `${numero} base ${base} = ${parseInt(numero.toString(), base)} base 10`;

    // numero.toString(2)                -> convertir de base decimal a base binaria
  } else {
    return `${numero} base ${base} = ${numero.toString(2)} base 2`;
  }
};

baseBinariaDecimal(100, 2);  // '100 base 2  = 4 base 10'
baseBinariaDecimal(4, 10);   // '4 base 10   = 100 base 2'
baseBinariaDecimal(114, 10); // '114 base 10 = 1110010 base 2'
