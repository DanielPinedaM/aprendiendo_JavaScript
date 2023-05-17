/* eslint-disable indent */
/* eslint-disable no-sparse-arrays */
/* eslint-disable max-len */

// @ts-nocheck

/* Tutorial:
https://youtube.com/shorts/UNIR2RU8mXA?feature=share

Documentacion Oficial - .copyWithin()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin

Recordatorio:
Primero tienes que entender
como funciona .slice() y despues .copyWithin()
porque aunque NO son lo mismo
.copyWithin() tiene conceptos similares a .slice(), ver:
...aprendiendo_JS\src\6_Arreglos_(arrays,listas)\3_Metodos\2_Metodos_de_instancia\4_.slice().js

.copyWithin() hace lo siguiente:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#description

1) COPIA una parte de un array
   que va DESDE una posicion (indice) start
   HASTA UNA POSICION ANTES de end,
   NO se incluye el elemento q esta en la posicion end

2) PEGA los elementos seleccionados
   en la posicion indicada target
   dentro del mismo array

3) Los elementos pegados son REEMPLAZADOS

4) Devuelve un nuevo array
   que NO modifica el array original

5) NO modifica el numero de elementos .length del array

   Si target es posicionado después de start,
   la secuencia copiada se recortará para que encaje
   con el numero de elementos del array .length
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods

Su sintaxis es:
.copyWithin(target, start, end)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#syntax

Donde...
1) .copyWithin()
   Es el nombre del metodo

2) target
2.1) target es obligatorio

2.2) target es el numero de posicion (indice)
     en donde se empieza a PEGAR (insertar) el array copiado

3) start
3.1) Es opcional

3.2) Es el numero de posicion (indice)
     en DONDE se EMPIEZA a COPIAR el array

4) end
4.1) Es opcional

4.2) Es el numero de posicion (indice)
     en DONDE se TERMINA de COPIAR el array

4.3) El array copiado va hasta (termina)
     UNA POSICION ANTES de end,
     NO se incluye end

4.4) Cuando NO se escribe end
     entonces se copian todos los elementos
     desde start hasta el final (ultima posicion) del array */

/* -------------------------------------------------------------- */

/* Ejemplo 1:

Copiar posicion (indice) 2,
NO se incluye la posicion 3
y pegar ['✖'] en posicion 0 */
['▲', '●', '✖', '■'].copyWithin(0, 2, 3); // (4) ['✖', '●', '✖', '■']
//  0    1    2    3

/* Copiar A PARTIR de la posicion 2 ['✖', '■']
y pegarlo en posicion 0 */
  ['▲', '●', '✖', '■'].copyWithin(0, 2);    // (4) ['✖', '■', '✖', '■']
//  0    1    2    3

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la posicion 1
ELIMINAR elemento de la ULTIMA posicion ['■'] */
  ['▲', '●', '✖', '■'].copyWithin(1);       // (4) ['▲', '▲', '●', '✖']
//  0    1    2    3

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la posicion 2
ELIMINAR elementos ['✖', '■'] */
  ['▲', '●', '✖', '■'].copyWithin(2); // (4) ['▲', '●', '▲', '●']
//  0    1    2    3

/* COPIAR posicion (indice) -2
NO se incluye la posicion -1
PEGAR ['✖'] en posicion -3
REEMPLAZAR ['●'] por ['✖']
ELIMINAR elemento ['■'] de la ultima posicion */
  ['▲', '●', '✖', '■'].copyWithin(-3, -2, -1); // (4) ['▲', '✖', '✖', '■']
// -4   -3   -2    -1

/* Copiar A PARTIR de la posicion -2 ['✖', '■']
y pegarlo en posicion -3 */
  ['▲', '●', '✖', '■'].copyWithin(-3, -2); // (4) ['▲', '✖', '■', '■']
// -4   -3   -2    -1

/* COPIAR el primer elemento ['▲']
PEGARLO en la ultima posicion -1
REEMPLAZAR ['■'] por ['▲'] */
  ['▲', '●', '✖', '■'].copyWithin(-1); // (4) ['▲', '●', '✖', '▲']
// -4   -3   -2    -1

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la PE-nultima posicion -2
REEMPLAZAR ['✖', '■'] por ['▲', '●'] */
  ['▲', '●', '✖', '■'].copyWithin(-2); // (4) ['▲', '●', '▲', '●']
// -4   -3   -2    -1

/* COPIAR los 2 primeros elementos ['▲', '●']
PEGARLOS en la ANTE-penultima posicion -3
REEMPLAZAR ['●', '✖'] por ['▲', '●']
ELIMINAR el ultimo elemento ['■'] */
  ['▲', '●', '✖', '■'].copyWithin(-3); // (4) ['▲', '▲', '●', '✖']
// -4   -3   -2    -1

/* -------------------------------------------------------------- */

/* Ejemplo 2:
Lo siguiente lo explicare con un ejemplo,
para ello tengo dos variables:
una con un array */
const array = [1, 2, 3, 4, 5];
console.log(array);
// (5) [1, 2, 3, 4, 5]

// y otra con la longitud .length del array
const numeroElementos = array.length;
console.log(numeroElementos);
// 5

/* .copyWithin()
devuelve exactamente el mismo array
SIN copiarlo NI pegarlo cuando...

1) target <= -array.length
   target es MENOR O IGUAL QUE
   el numero de elementos del array .length pero NEGATIVO

[1, 2, 3, 4, 5].length imprime 5 (positivo),
entonces -5 (negativo) o un numero menor a -5 (negativo)
imprime el mismo array (5) [1, 2, 3, 4, 5]
SIN copiarlo NI pegarlo */

// target es igual a un numero de elementos -length NEGATIVO
console.log(array.copyWithin(-numeroElementos)); // (5) [1, 2, 3, 4, 5]

// target es igual a un NUMERO MENOR a -length NEGATIVO
console.log(array.copyWithin(-999));             // (5) [1, 2, 3, 4, 5]

/* 2) target = 0
      hay un cero dentro del par de parentesis de .copyWithin(0) */

console.log(array.copyWithin(0)); // (5) [1, 2, 3, 4, 5]

// 3) NO escribo nada dentro del par de parentesis de .copyWithin()

console.log(array.copyWithin());  // (5) [1, 2, 3, 4, 5]

/* 4) Dentro del par de paréntesis ()
      hay algo que NO se puede convertir a tipo Number(), es decir NaN */

console.log(array.copyWithin(NaN));                                               // (5) [1, 2, 3, 4, 5]
console.log(array.copyWithin('este string NO se puede convertir a tipo number')); // (5) [1, 2, 3, 4, 5]

/* 5) target >= array.length
      target es MAYOR O IGUAL QUE
      el numero de elementos del array .length */

// target = numeroElementos = array.length = 5
console.log(array.copyWithin(numeroElementos)); // (5) [1, 2, 3, 4, 5]

// (999 target) > (5 numeroElementos)
console.log(array.copyWithin(999));             // (5) [1, 2, 3, 4, 5]

/* 6) start <= -array.length
      start es MENOR O IGUAL QUE
      el numero de elementos del array .length pero NEGATIVO */

// start es igual a un numero de elementos -length NEGATIVO
console.log(array.copyWithin(0, -numeroElementos, 1)); // (5) [1, 2, 3, 4, 5]

// start es un NUMERO MENOR al numero de elementos -length NEGATIVO
console.log(array.copyWithin(0, -999, 1));             // (5) [1, 2, 3, 4, 5]

/* 7) start >= array.length
      start es MAYOR O IGUAL QUE
      el numero de elementos del array .length */

// start = numeroElementos = array.length = 5
console.log(array.copyWithin(0, numeroElementos, 1)); // (5) [1, 2, 3, 4, 5]

// (999 start) > (5 numeroElementos)
console.log(array.copyWithin(0, 999, 1));             // (5) [1, 2, 3, 4, 5]

/* 8) end <= -array.length
      end es MENOR O IGUAL QUE
      el numero de elementos del array .length pero NEGATIVO */

// end es igual a un numero de elementos -length NEGATIVO
console.log(array.copyWithin(0, 1, -numeroElementos)); // (5) [1, 2, 3, 4, 5]

// end es un NUMERO MENOR al numero de elementos -length NEGATIVO
console.log(array.copyWithin(0, 1, -999));             // (5) [1, 2, 3, 4, 5]

/* -------------------------------------------------------------- */

/* Ejemplo 3:
En estos links hay una imagen q explica el codigo:

https://www.codeblocq.com/img/array-copywithin-es6-explanation.png

https://www.codeblocq.com/2016/02/Copy-an-Array-into-itself-in-JavaScript-ES6-2015/ */

const numeros = [0, 1, 2, 3, 4, 5];
console.log(numeros);
// (6) [0, 1, 2, 3, 4, 5]

//                 .copyWithin(target, start, end)
console.log(numeros.copyWithin(4, 1, 3));
// (6) [0, 1, 2, 3, 1, 2]

/* Dentro de este metodo .copyWithin(4, 1, 3) esta start 1 y end 3,
entonces con .slice(1, 3) puedo ver
¿cuales son los elementos COPIADOS del array?,
que son los números [1, 2]
que están en un cuadro verde en la imagen anterior */

console.log(numeros.slice(1, 3));
// (2) [1, 2]

/* -------------------------------------------------------------- */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#using_copywithin */

// imprimir array original
console.log(array);
// (5) [1, 2, 3, 4, 5]

/* NUMEROS POSITIVOS:
Cuentan de IZQUIERDA A DERECHA empezando desde 0

0 es el PRIMER elemento que esta mas a la izquierda

Del array (5) [1, 2, 3, 4, 5]
COPIAR [4] q es la posicion (indice) 3,
NO se incluye la posicion 4

PEGAR el elemento [4] en la posicion 0 del array (5) [1, 2, 3, 4, 5]

El elemento [1] se REEMPLAZA por [4] */

console.log(array.copyWithin(0, 3, 4));
// (5) [4, 2, 3, 4, 5]

/* COPIAR [4, 5] q esta a partir de la posicion 3
HASTA el final (ultimo elemento) del array

PEGAR [4, 5] en la posicion 0 del array (5) [1, 2, 3, 4, 5]

Los elementos [1, 2] se REEMPLAZAN por [4, 5] respectivamente */

console.log(array.copyWithin(0, 3));
// (5) [4, 5, 3, 4, 5]

/* Del array original (5) [1, 2, 3, 4, 5]
COPIAR los dos primeros elementos q son [1, 2]

PEGAR [1, 2] en la posicion 1 del array (5) [1, 2, 3, 4, 5]

Los elementos [2, 3] se REEMPLAZAN por [1, 2] respectivamente

Se ELIMINA el ULTIMO elemento [5] */

console.log(array.copyWithin(1)); // (5) [1, 1, 2, 3, 4]

/* Con array.copyWithin(2) y array.copyWithin(-3)
obtengo el mismo resultado (5) [1, 2, 1, 2, 3] */

console.log(array.copyWithin(2)); // (5) [1, 2, 1, 2, 3]

/* Con array.copyWithin(3) y array.copyWithin(-2)
obtengo el mismo resultado (5) [1, 2, 3, 1, 2] */

console.log(array.copyWithin(3)); // (5) [1, 2, 3, 1, 2]

/* NUMEROS NEGATIVOS:
Cuentan al reves de DERECHA A IZQUIERDA empezando desde -1

-1 es el ULTIMO elemento q esta mas a la derecha

Obtengo el mismo resultado con
.copyWithin(-2, -3, -1) y .copyWithin(-2, -3)

Del array (5) [1, 2, 3, 4, 5]
COPIAR [3, 4] q son las posiciones (indices) -2 y -3,
NO se incluye la posicion -1

PEGAR los elementos [3, 4] en la PE-nultima posicion -2 del array (5) [1, 2, 3, 4, 5]

Los elementos [4, 5] se REEMPLAZAN por [3, 4] respectivamente */

console.log(array.copyWithin(-2, -3, -1)); // (5) [1, 2, 3, 3, 4]
console.log(array.copyWithin(-2, -3));     // (5) [1, 2, 3, 3, 4]

/* Del array original (5) [1, 2, 3, 4, 5]
COPIAR el primer elemento q es el [1]

PEGAR el elemento [1] en la ULTIMA posicion -1 del array (5) [1, 2, 3, 4, 5]

El elemento [5] se REEMPLAZA por [1] */

console.log(array.copyWithin(-1)); // (5) [1, 2, 3, 4, 1]

console.log(array.copyWithin(-2)); // (5) [1, 2, 3, 1, 2]

console.log(array.copyWithin(-3)); // (5) [1, 2, 1, 2, 3]

/* -------------------------------------------------------------- */

/* Ejemplo 5 - Array Disperso (Sparse Array) y Metodo .copyWithin()
.copyWithin() propagará las "ranuras vacías" (empty items) del array disperso [,,]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#using_copywithin_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

const arrayDisperso = [1, , 3];
console.log(arrayDisperso);                     // [ 1, <1 empty item>, 3 ]
console.log(arrayDisperso.copyWithin(2, 1, 2)); // [ 1, <2 empty items> ]

/* -------------------------------------------------------------- */

/* Ejemplo 6 - .copyWithin() en Objeto Literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#calling_copywithin_on_non-array_objects

.copyWithin() lee la propiedad length de this
y luego manipula los índices enteros involucrados. */

// En el objetoLiteral {} esta la propiedad '3'

const objetoLiteral = {
// propiedad: valor,
  length: 5,
  3: 1,
};
console.log(objetoLiteral);
/*
{
  '3': 1,
  length: 5
}
*/

console.log(Array.prototype.copyWithin.call(objetoLiteral, 0, 3));
/*
{
  '0': 1,
  '3': 1,
  length: 5
}
*/

/* La propiedad '3' del objetoLiteral {}
se elimina porque la fuente copiada es una ranura vacía */

console.log(Array.prototype.copyWithin.call(objetoLiteral, 3, 1));
/*
{
  '0': 1,
  length: 5
}
*/
