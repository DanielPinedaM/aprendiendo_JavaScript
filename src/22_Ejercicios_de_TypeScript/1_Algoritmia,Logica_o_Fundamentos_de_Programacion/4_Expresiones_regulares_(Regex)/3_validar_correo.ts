/* 
Programa una función que 
valide que un texto sea un email válido.

admitir letras ñ minuscula y Ñ mayuscula

Ejemplo: miFuncion("jonmircha@gmail.com") devuelve true.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                              █
 █ https://www.youtube.com/watch?v=9BavKzWBr3c&t=1128s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const validarCorreo = (texto: string): boolean => {
  if (typeof texto !== 'string') return false;

  return /^[a-zA-Z0-9_.+-ñÑ]+@[a-zA-Z0-9-ñÑ]+\.[a-zA-Z0-9-.]+$/.test(texto.trim())
};

validarCorreo('jonmircha@gmail.com');        // true 
validarCorreo('españa@ñgmail.com');          // true
validarCorreo('usuario@dominio.c');          // true

validarCorreo('usuario_incorrecto@dominio'); // false
validarCorreo([1, 2, 3]);                    // false
validarCorreo({ uno: 1 });                   // false
validarCorreo(0);                            // false
validarCorreo(null);                         // false
validarCorreo(undefined);                    // false
validarCorreo(NaN);                          // false
validarCorreo(true);                         // false
validarCorreo(false);                        // false 
validarCorreo('');                           // false
validarCorreo(' ');                          // false
