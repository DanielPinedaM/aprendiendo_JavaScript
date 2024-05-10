/* 
Programa una función que 
dada una cadena de texto 
cuente el número de vocales y consonantes.
Ejemplo: ("Hola Mundo") devuelve Vocales: 4, Consonantes: 5.
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=9BavKzWBr3c&t=129s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

interface INumeroVocalesConsonantes {
  vocales: number;
  consonantes: number;
}

const contarVocalesConsonantes = (texto: string): INumeroVocalesConsonantes => {
  let resultado: INumeroVocalesConsonantes = {
    vocales: 0,
    consonantes: 0,
  };

  if (typeof texto !== 'string') return resultado;
  if (!(texto.trim().length)) return resultado;

};

contarVocalesConsonantes('Hola Mundo');
