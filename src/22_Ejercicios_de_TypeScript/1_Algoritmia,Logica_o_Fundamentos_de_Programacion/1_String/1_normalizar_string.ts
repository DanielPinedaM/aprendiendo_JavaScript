/*
Crear funcion para normalizar string, es decir:
1) Eliminar espacio en blanco ' ' al principio y final.
   Ejemplo: reemplazar ' hola   ' por 'hola'

2) Convertir a minuscula.
   Ejemplo: reemplazar 'HOLa' por 'hola'

3) Reemplazar vocales con tilde por la misma vocal pero sin tilde.
   Ejemplo: reemplazar 'ó' por 'o'

4) Reemplazar 'ñ' por 'n'

5) Retornar el mismo parametro cuando NO sea tipo string.
   Ejemplo:
   (3) [1, 2, 3] retorna (3) [1, 2, 3]
   false retorna false

https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
*/

/* --------------------------------------------------- */

const normalizeStr = (string: string | any): string | any => {
   if (typeof string === 'string' || string instanceof String) {
     return string.trim()
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '');
   }

   return string;
 };

normalizeStr(' COMunicaciÓN    ');  // 'comunicacion'
normalizeStr(' àáâãäå ');           // 'aaaaaa'
normalizeStr(' Ñ ');                // n
normalizeStr('  ');                 // ''

normalizeStr(undefined);            // undefined
normalizeStr(false);                // false
normalizeStr(0);                    // 0
normalizeStr(000);                  // 0
normalizeStr(' 000 ');              // '000'
normalizeStr(' 0 ');                // '0'

normalizeStr([1, 2, 3]);            // (3) [ 1, 2, 3 ]
normalizeStr({ uno: 1 });           // { uno: 1 }
