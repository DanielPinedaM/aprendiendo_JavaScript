/*
Programa una función que
repita un texto X veces.
Ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.youtube.com/watch?v=Xh8p7aZBiaw&t=1600s */

const repetirTexto = (texto: string = "", veces: number = 0): void => {
  if (!texto || !String(texto).trim().length) return console.warn("ingrese texto");
  if (!veces || veces<=0) return console.warn("ingrese numero de veces a repetir el texto");

  for (let i = 1; i<=veces;i++) console.info(`${texto} ➜ ${i}`)
}

repetirTexto("  ", 2);          // "ingrese texto"
repetirTexto("hola mundo", -1); // "ingrese numero de veces a repetir el texto"

repetirTexto('Hola Mundo', 3);
// 'Hola Mundo ➜ 1'
// 'Hola Mundo ➜ 2'
// 'Hola Mundo ➜ 3'

/* --- */

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
