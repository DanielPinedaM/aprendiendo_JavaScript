/*
Tutorial - Jon Mircha
https://youtu.be/3o5d-tdVscU?si=wv28RhWylyKRZhEw

Programa una función que
te devuelva el texto recortado (sub-string) según el número de caracteres indicados.
Ejemplo: miFuncion('Hola Mundo', 4) devolverá 'Hola'
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .slice() █
 ▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice */

const substring1 = (string: string, numeroCaracteres: number) => string.slice(0, numeroCaracteres);

substring1('Hola Mundo', 4);  // 'Hola'
substring1('Hola Mundo', 5);  // 'Hola '
substring1('Hola Mundo', -1); // 'Hola Mund'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .substring() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring */

const substring2 = (string: string, numeroCaracteres: number) => string.substring(0, numeroCaracteres);

substring2('Hola Mundo', 4);  // 'Hola'
substring2('Hola Mundo', 5);  // 'Hola '
substring2('Hola Mundo', -1); // ''

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ while () {} █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while */

const substring3 = (string: string, numeroCaracteres: number): string => {
  let i: number = 0;
  let concatenar: string = '';

  while (i < string.length && i !== numeroCaracteres) {
    concatenar = concatenar + string[i];
    i += 1;
  }

  return concatenar;
}
substring3('Hola Mundo', 4);
