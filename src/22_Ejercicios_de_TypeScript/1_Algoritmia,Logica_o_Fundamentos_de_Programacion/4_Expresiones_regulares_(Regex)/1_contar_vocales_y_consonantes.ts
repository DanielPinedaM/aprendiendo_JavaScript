/* 
Programa una función que 
dada una cadena de texto 
cuente el número de vocales y consonantes.
Ejemplo: ("Hola Mundo") devuelve { vocales: 4, consonantes: 5 }
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                             █
 █ https://www.youtube.com/watch?v=9BavKzWBr3c&t=129s █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

interface INumeroVocalesConsonantes {
  texto: string;
  vocales: number;
  consonantes: number;
}

const contarVocalesConsonantes = (texto: string): INumeroVocalesConsonantes => {
  let vocales: number = 0;
  let consonantes: number = 0;

  if (typeof texto !== 'string')
    return {
      texto,
      vocales,
      consonantes,
    };
  if (!(texto.trim().length))
    return {
      texto,
      vocales,
      consonantes,
    };

  texto = texto.trim().toLowerCase();

  for (let letra of texto) {
    if (/[aeiouáéíóú]/.test(letra)) {
      vocales++;
    }

    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) {
      consonantes++;
    }
  }

  return {
    texto,
    vocales,
    consonantes,
  };
};

contarVocalesConsonantes('Hola Mundo'); // { texto: 'Hola Mundo', vocales: 4, consonantes: 5 }
contarVocalesConsonantes();             // { texto: undefined, vocales: 0, consonantes: 0 }
