/*
Tutorial - Jon Mircha
https://youtu.be/3o5d-tdVscU?si=wv28RhWylyKRZhEw

Convertir de string '' a array []
Programa una función que
dada una String te devuelva un Array de textos separados por cierto caracter.
Ejemplo: miFuncion('hola que tal', ' ') devolverá (3) ['hola', 'que', 'tal']
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ .split() █
 ▀▀▀▀▀▀▀▀▀▀▀▀ */

console.log(
  'hola que tal'.split(' ')
);
// (3) ['hola', 'que', 'tal']

/* --- */


const stringArray1 = (string: string | any, separador: string): string[] | null => {
  if (typeof string === 'string' || string instanceof String) {
    const array: string[] = [];
    let concatenar: string = '';

   for (let i = 0; i < string.length; i++) {
     if (string[i] !== separador) {
         concatenar = concatenar + string[i];
     } else {
       array.push(concatenar);
       concatenar = '';
     }
   }

   // Agregar al array la ultima palabra
   array.push(concatenar);

   return array;
  } else {
    return null;
  }
}
stringArray1('hola que tal', ' ');
