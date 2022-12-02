/* eslint-disable no-multi-spaces */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */
// @ts-nocheck

/* Documentacion Oficial - .indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

Recordatorio:
.indexOf() también sirve para STRING, ver:
...\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia\7_.indexOf().js

.indexOf() devuelve el PRIMER número de posición (índice)
donde se encuentra el ELEMENTO
que se está buscando,
en caso de que NO se encuentre el elemento
entonces devuelve -1

.indexOf() empieza a contar las posiciones (índices)
desde 0 de izquierda a derecha

0 es la PRIMERA   posición (índice)
1 “     ” SEGUNDA “               ”

Su sintaxis es:
.indexOf(searchElement, fromIndex)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#syntax

Donde...
- .indexOf()
Es el nombre del metodo

- searchElement
Es el ELEMENTO que estoy buscando en el array,
es OBLIGATORIO escribirlo

- fromIndex
* Es un número

* Es OPCIONAL escribirlo

* Cuando NO se escribe fromIndex
entonces su valor por defecto es 0
y .indexOf() busca el carácter searchElement en TODO el array,
en cambio cuando SI se escribe fromIndex,
.indexOf() devuelve el numero de
la PRIMERA aparición del ELEMENTO especificado
en un INDICE MAYOR O IGUAL QUE el número especificado fromIndex

* SI fromIndex < 0
Si fromIndex es negativo,
entonces los números negativos
cuentan al revés de atrás (ultima)
hacia adelante (primera) posición

* SI fromIndex >= array.length
Si fromIndex
es mayor o igual que la longitud del array
entonces se devuelve -1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#return_value */

/* ---------------------------------------------------------------- */

/* Ejemplo 1:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#using_indexof

Creo un nuevo array */
const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];

/* Obtener la posicion (indice)
de la PRIMERA aparicion del ELEMENTO ['o']

en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
hay dos ELEMENTOS ['o']
pero .indexOf() SOLAMENTE imprime la posicion (indice) del PRIMER elemento ['o'] */

let buscar = 'o';
const indicePrimeraAparicion = array.indexOf(buscar);
console.log(`el PRIMER elemento ['${buscar}'] esta en la posicion (indice) ${indicePrimeraAparicion}`);
// el PRIMER elemento ['o'] esta en la posicion (indice) 1

/* obtener la posicion (indice)
de la SEGUNDA aparicion del ELEMENTO ['o']

indicePrimeraAparicion + 1 =
= 1 + 1
= 2 */

const indiceSegundaAparicion = array.indexOf(buscar, (indicePrimeraAparicion + 1)); //
console.log(`el SEGUNDO elemento ['${buscar}'] esta en la posicion (indice) ${indiceSegundaAparicion}`);
// el SEGUNDO elemento ['o'] esta en la posicion (indice) 9

/* ---- */

/* la PRIMERA posicion (indice) es el 0
en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
el PRIMER ELEMENTO es ['h'] */

buscar = 'h';
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.indexOf(buscar)}`);
// el ELEMENTO ['h'] esta en la posicion (indice): 0

/* ---- */

// ELEMENTO en blanco ''

buscar = '';
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.indexOf(buscar)}`);
// el ELEMENTO [''] esta en la posicion (indice): 4

/* el valor por defecto de fromIndex es 0
que significa buscar el ELEMENTO en todo el string,
obtengo el mismo resultado */
console.log(`el ELEMENTO ['${buscar}'] esta en la posicion (indice): ${array.indexOf(buscar, 0)}`);
// el ELEMENTO [''] esta en la posicion (indice): 4

/* ---- */

/* Cuando el ELEMENTO buscado NO existe en el ARRAY
entonces se imprime -1

se imprime -1 porque
en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
NO existe el ELEMENTO ['W'] */

buscar = 'W';
console.log(`el ELEMENTO ['${buscar}'] NO existe en el ARRAY [${array}]: ${array.indexOf(buscar)}`);
// el ELEMENTO ['W'] NO existe en el ARRAY [h,o,l,a,,m,u,n,d,o]: -1

/* ---- */

/* array.indexOf() SIN escribir nada
dentro del par de parentesis () de .indexOf() imprime -1 */

console.log(array.indexOf()); // -1
console.log([].indexOf());    // -1

/* ---- */

/* [undefined].indexOf() SIN escribir nada
dentro de los parentesis () de .indexOf() imprime 0 */

console.log([undefined].indexOf()); // 0

/* ---- */

/* cuando la posicion (indice)
es MAYOR al numero de ELEMENTOS del ARRAY
se imprime -1

array.indexOf(buscar, 999) imprime -1 porque
el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
tiene 10 ELEMENTOS .length y 999 es MAYOR QUE 10 */

buscar = 'h';

console.log(`el array [${array}] tiene ${array.length} ELEMENTOS`);
// el array [h,o,l,a,,m,u,n,d,o] tiene 10 ELEMENTOS

console.log(`fromIndex MAYOR: ${array.indexOf(buscar, 999)}`);
// fromIndex MAYOR: -1

/* ---- */

/* cuando la posicion (indice) fromIndex
es MENOR (NEGATIVO) al numero de caracteres del ARRAY
se imprime 0

array.indexOf(buscar, -999) imprime 0 porque
el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
tiene 10 ELEMENTOS y -999 es MENOR QUE 10 */

console.log(`fromIndex MENOR: ${array.indexOf(buscar, -999)}`);
// fromIndex MENOR: 0

/* ---- */

/* .indexOf() distingue entre MAYUSCULAS y minusculas,
cuando NO se encuentra el ELEMENTO en el ARRAY se imprime -1

como el ELEMENTO ['H'] MAYUSCULA
no esta en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
que tiene ['h'] minuscula entonces se imprime -1 */

buscar = 'H';
console.log(`en el ARRAY [${array}] NO existe el ELEMENTO ['${buscar}']: ${array.indexOf(buscar)}`);
// en el ARRAY [h,o,l,a,,m,u,n,d,o] NO existe el ELEMENTO ['H']: -1

/* ---------------------------------------------------------------- */

/* Ejemplo 2:
Saber si un ELEMENTO existe o no en un ARRAY

saber si en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
existe el ELEMENTO ['o'] */

const array1 = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];
const buscar1 = 'o';

if (array1.indexOf(buscar1) !== -1) {
  console.log('en el ARRAY', array1, `SI existe el ELEMENTO [${buscar1}]`);
} else { // === 1
  console.log('en el ARRAY', array1, `NO existe el ELEMENTO [${buscar1}]`);
}
// en el ARRAY (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] SI existe el ELEMENTO [o]

/* ---------------------------------------------------------------- */

/* Ejemplo 3:
Contar el numero de veces q aparece un ELEMENTO en un ARRAY

contar el numero de veces
q esta el ELEMENTO ['o']
en el ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] */

const array2 = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];
const buscar2 = 'o';
let contador = 0;
let posicion = array2.indexOf(buscar2);

while (posicion !== -1) {
  contador++;
  posicion = array2.indexOf(buscar2, (posicion + 1));
}

console.log(`el ELEMENTO ['${buscar2}'] se repite ${contador} veces en el ARRAY`, array2);
// el ELEMENTO ['o'] se repite 2 veces en el ARRAY (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']

/* ---------------------------------------------------------------- */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#finding_all_the_occurrences_of_an_element

1) Crear un array 1

2) Guardar en un array 2
los numeros de posicion (indice)
repetidos de un elemento */

const array3 = ['a', 'b', 'a', 'c', 'a', 'd'];
const buscar3 = 'a';
const indices = [];
let idx = array3.indexOf(buscar3);

while (idx !== -1) {
  indices.push(idx);
  idx = array3.indexOf(buscar3, (idx + 1));
}

console.log(`el ELEMENTO ['${buscar3}'] se repite en las posiciones (indices):`, indices);
/* el ELEMENTO ['a'] se repite en las posiciones (indices): (3) [0, 2, 4]
0: 0
1: 2
2: 4
length: 3
[[Prototype]]: Array(0) */

/* ---------------------------------------------------------------- */

/* Ejemplo 5:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#finding_if_an_element_exists_in_the_array_or_not_and_updating_the_array

1) Crear una funcion para lo siguiente...

2) Buscar un elemento en un array

3) En caso de q el elemento NO exista en el array,
entonces agregar un nuevo elemento al array
e imprimir mensaje 'nuevo elemento agregado al array'

4) Si el elemento ya existe entonces imprimir mensaje
'el elemento NO se puede agregar al array porq ya existe' */

function actualizarArray(array4, nuevoElemento) {
  if (array4.indexOf(nuevoElemento) === -1) { // === -1 el elemento buscado NO existe en el array
    array4.push(nuevoElemento);
    console.log(`nuevo elemento ${nuevoElemento} agregado al array:`, array4);
  } else { // !== -1 el elemento buscado SI existe en el array
    console.log(`el elemento ${nuevoElemento} NO se puede agregar al array porq ya existe`);
  }
}

const array4 = ['potato', 'tomato', 'chillies', 'green-pepper'];

actualizarArray(array4, 'spinach');
/* nuevo elemento spinach agregado al array:
(5) ['potato', 'tomato', 'chillies', 'green-pepper', 'spinach']
0: "potato"
1: "tomato"
2: "chillies"
3: "green-pepper"
4: "spinach"
length: 5
[[Prototype]]: Array(0) */

actualizarArray(array4, 'spinach');
// el elemento spinach NO se puede agregar al array porq ya existe

/* ---------------------------------------------------------------- */

/* Ejemplo 6 - Array Disperso (Sparse Array):
.indexOf() NO busca "ranuras vacías" (empty items) en los array dispersos

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#using_indexof_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// esto , , es una "ranura vacia" (empty items)
console.log([1, , 3].indexOf(undefined)); // -1
console.log([1, , 3].indexOf(''));        // -1

/* ---------------------------------------------------------------- */

/* Ejemplo 7 - .indexOf() en Objeto Literal {}
el metodo .indexOf() lee la propiedad length de this
y luego accede a cada indice entero.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#calling_indexof_on_non-array_objects */

const objetoLiteral = {
  length: 3,
  0: 'cero',
  1: 'uno',
  2: 'dos',
};

console.log(objetoLiteral);
/*
{
  0: 'cero',
  1: 'uno',
  2: 'dos',
  length: 3
}
*/

/* devuelve la posicion (indice)
donde estan los valores del objetoLiteral
'cero', 'uno' y 'dos' */
console.log(Array.prototype.indexOf.call(objetoLiteral, 'cero')); // 0
console.log(Array.prototype.indexOf.call(objetoLiteral, 'uno'));  // 1
console.log(Array.prototype.indexOf.call(objetoLiteral, 'dos'));  // 2

// devuelve -1 porq 2 y 3 NO son un valor del objetoLiteral
console.log(Array.prototype.indexOf.call(objetoLiteral, 2));      // -1
console.log(Array.prototype.indexOf.call(objetoLiteral, 3));      // -1
