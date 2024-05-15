/* 
Programa una función que 
valide que un texto sea un email válido.
Ejemplo: miFuncion("jonmircha@gmail.com") devuelve true.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                              █
 █ https://www.youtube.com/watch?v=9BavKzWBr3c&t=1128s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const validarCorreo = (texto: string): boolean => {
  if (typeof texto !== 'string') return false;
  if (texto.trim() === '') return false;
  if (!(texto.includes('@'))) return false;

  return
};

validarCorreo('jonmircha@gmail.com'); // true
