/*
Tutorial - Jon Mircha
https://youtu.be/3o5d-tdVscU?si=wv28RhWylyKRZhEw

Programa una función que
repita un texto X veces.
Ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
*/

/* --------------------------------------------------- */

const repetirString1 = (string: string, numeroRepeticiones: number): string => {
    let concatenar: string = '';

    for (let i = 0; i < numeroRepeticiones; i++) {
      concatenar = concatenar + string + ' ';
    }

    return concatenar.trimEnd();
}
repetirString1('Hola Mundo', 3);
// 'Hola Mundo Hola Mundo Hola Mundo'

/* --- */

const repetirString2 = (string: string, numeroRepeticiones: number): string => Array(numeroRepeticiones).fill(string).join(' ');
repetirString2('Hola Mundo', 3);
// 'Hola Mundo Hola Mundo Hola Mundo'

/* --- */

const repetirString3 = (string: string, numeroRepeticiones: number): string => {
  const array: string[] = [string];
  const concatenar: string[] = [];
  const separador: string = ' ';

  for (let i = 0; i < numeroRepeticiones; i++) {
    concatenar.push(...array);
  }

  concatenar.push(separador);

  return concatenar.join(separador).trimEnd();
}
repetirString3('Hola Mundo', 3);
// 'Hola Mundo Hola Mundo Hola Mundo'
