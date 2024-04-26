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
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .split()               █
 █ Solucion de Jon Mircha █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://www.youtube.com/watch?v=Xh8p7aZBiaw&t=1243s */

const cadena_a_arreglo = (cadena: string = "", separador?: string | undefined) => (!cadena)
                                                             ? console.warn("No ingresaste cadeta de texto")
                                                               : (!separador)
                                                               ? console.warn("No ingresaste el caracter separador")
                                                                 : console.info(cadena.split(separador))


cadena_a_arreglo();                    // "No ingresaste cadeta de texto"
cadena_a_arreglo('hola que tal');      // "No ingresaste el caracter separador"
cadena_a_arreglo('hola que tal', ' '); // (3) ['hola', 'que', 'tal']


'hola que tal'.split('');  // (12) ['h', 'o', 'l', 'a', ' ', 'q', 'u', 'e', ' ', 't', 'a', 'l']
'hola que tal'.split(' '); // (3) ['hola', 'que', 'tal']
'hola que tal'.split();    // (1) [ 'hola que tal' ]
'hola que tal'.split(','); // (1) [ 'hola que tal' ]

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
