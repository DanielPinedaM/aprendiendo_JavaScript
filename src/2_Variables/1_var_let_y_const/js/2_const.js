/*
Tutorial Jon Mircha - const:
https://youtu.be/PIHZRj99nHU
https://jonmircha.com/ecmascript#variables-y-constantes

const...
- Es una constante

- Tiene un comportamiento DIFERENTE en datos primitivos y compuestos
  * En datos PRIMITIVOS: NO se puede cambiar (inmutabilidad / reasignar) el valor de la variable.
  * "      " COMPUESTOS: SI "                                                                   "

- Son referencias inmutables,
pero sus valores no necesariamente

- Es de SOLO LECTURA

- Su scope (alcance) es de bloque

- Se tiene q definir su valor inicial
*/

console.log('\n', '\n', '****** 2_const.js ******');

/* DATOS PRIMITIVOS */
const pi = 3.1416;
console.log('pi = ', pi);
/* 3.1416 */
/* pi = 3.15; */ /* No se puede asignar a "pi" porq es una constante. ts(2588)
                    Uncaught TypeError: Assignment to constant variable. */

/* const nueve; */ /* Las declaraciones "const" deben inicializarse. ts(1155)
                      Uncaught SyntaxError: Missing initializer in const declaration
                      https://stackoverflow.com/questions/64443301/initializing-an-object-variable-error-const-declarations-must-be-initializ */

let nombrePerro; /* variable SIN inicializar */
nombrePerro = 'kenai';
console.log(nombrePerro);
/* kenai */

/* DATOS COMPUESTOS */
/* OBJETO: Es un conjunto de datos con clave: valor, */
const objetoMisDatos = {
  nombre: 'Daniel',
  edad: '99',
};
console.log('\nOBJETO ORIGINAL', objetoMisDatos);
/*
objeto ORIGINAL
{nombre: 'Daniel', edad: '99'}
edad:"99"
nombre:"Daniel"
[[Prototype]]: Object
*/
/* Agregar nueva clave: valor al objeto */
objetoMisDatos.correo = 'nuevo_dato@gmail.com';
console.log('agregando NUEVOS datos al OBJETO', objetoMisDatos);
/* agregando NUEVOS datos al objeto
{nombre: 'Daniel', edad: '99', correo: 'nuevo_dato@gmail.com'} */

/* LISTAS O ARREGLOS (ARRAYS): Es una coleccion de datos */
const arrayColores = ['blanco', 'negro', 'azul'];
console.log('\nARRAY ORIGINAL', arrayColores);
/* ARRAY ORIGINAL
(3) ['blanco', 'negro', 'azul'] */

/* Agregar nuevo elemento */
arrayColores.push('naranja');
console.log('\nAgregando NUEVO elemento al ARRAY', arrayColores);
/* Agregando NUEVO elemento al ARRAY
(4) ['blanco', 'negro', 'azul', 'naranja'] */
