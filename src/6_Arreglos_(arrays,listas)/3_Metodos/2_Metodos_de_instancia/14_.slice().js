/* eslint-disable indent */
/* eslint-disable no-sparse-arrays */
/* eslint-disable prefer-rest-params */
/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
// @ts-nocheck

/* Documentacion Oficial - .slice() en Array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Recordatorio:
.slice() tambien sirve para STRING, ver:
...\aprendiendo_JS\src\5_String()_cadenas_de_texto\3_Metodos\2_Metodos_de_instancia\16_Diferencia_.slice()_y_.substring().js */

/* ------------------------------------------------------------------ */

// Ejemplo 1:

// array A PARTIR de la segunda posicion 1
  ['▲', '●', '✖', '■'].slice(1);      // (3) ['●', '✖', '■']
//  0    1    2    3
//       ↑    ↑    ↑

// array A PARTIR de la PE-nultima posicion -2
  ['▲', '●', '✖', '■'].slice(-2);     // (2) ['✖', '■']
//  -4   -3   -2   -1
//            ↑    ↑

/* array DESDE la posicion 0 HASTA 2,
NO se incluye la posicion 3 */
  ['▲', '●', '✖', '■'].slice(0, 3);   // (3) ['▲', '●', '✖']
//  0    1    2    3
//  ↑    ↑    ↑

/* posiciones -2 y -3 del array,
NO se incluye la posicion -1 */
  ['▲', '●', '✖', '■'].slice(-3, -1); // (2) ['●', '✖']
// -4   -3   -2    -1
//       ↑    ↑

/* ------------------------------------------------------------------ */

/* Ejemplo 2:
Esto lo explicare con un ejemplo. Tengo dos variables, una con un ARRAY: */
const array = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'];

// Y otra con el número de ELEMENTOS .length
const numeroElementos = array.length;
console.log(`# total de ELEMENTOS contando desde 1: ${numeroElementos}`);
// # total de ELEMENTOS contando desde 1: 10

/* .slice() extraer una parte de un ARRAY de acuerdo a sus posiciones (indices)

.slice() devuelve un nuevo array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#return_value

.slice(start, end) extrae una parte de un array
q va DESDE esta posicion (indice) start
HASTA esta otra posicion end,
NO se incluye el ELEMENTO de la ULTIMA posición end,
el array va hasta UNA POSICION ANTES de end

En la posición (índice) 3 está el ELEMENTO ['a']

(1, 3) del ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
imprimir los ELEMENTOS que están en las posiciones 1 hasta 2,
NO se imprime la posición 3
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#return_a_portion_of_an_existing_array */
console.log(array.slice(1, 3));
/* (2) ['o', 'l']
0: "o"
1: "l"
length: 2
[[Prototype]]: Array(0) */

/* Cuando se copia un solo número
dentro del par de paréntesis start
se devuelven los ELEMENTOS
iniciando en la posición (índice)
indicada hasta el final del ARRAY.

.slice(1) Imprimir el ARRAY A PARTIR
del segundo ELEMENTO que esta en la posición 1

SI se incluye el ELEMENTO de la posición 1
y NO se incluye el ELEMENTO de la posición 0 */
console.log(array.slice(1));
/* (9) ['o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
0: "o"
1: "l"
2: "a"
3: ""
4: "m"
5: "u"
6: "n"
7: "d"
8: "o"
length: 9
[[Prototype]]: Array(0) */

/* .slice() devuelve una PARTE de un ARRAY
y NO modifica el array original

el array ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
NO se ha modificado */
console.log(array);
/* (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
0: "h"
1: "o"
2: "l"
3: "a"
4: ""
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"
length: 10
[[Prototype]]: Array(0) */

/* Su sintaxis es
.slice(start, end)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#syntax

Donde...
- .slice()
Es el nombre del metodo

- start
Numero de posición (índice)
del PRIMER ELEMENTO que se extrae de un ARRAY,
el array extraido empieza A PARTIR de esta posición,
es obligatorio.

- end
ULTIMO número de posición (índice)
donde TERMINA el array extraido,
el array extraido termina HASTA esta posición,
es opcional.

.slice() devuelve un ARRAY VACIO [] cuando...
1) start = end

Ambos números son IGUALES

(999, 999) */
console.log(array.slice(999, 999)); // []

// (1, 1)
console.log(array.slice(1, 1));     // []

/* 2) start >= .length
Escribo un solo número start
dentro del par de paréntesis ()
que sea MAYOR O IGUAL QUE
la longitud del ARRAY .length

['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'].length imprime 10,
entonces se imprime un array vacio []
cuando dentro del par de paréntesis
escribo (10) ó un número mayor a 10

numeroElementos = ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'].length = 10 */
console.log(array.slice(numeroElementos)); // []

// 999 > 10
console.log(array.slice(999));             // []

/* .slice() devuelve el ARRAY COMPLETO cuando...

1) start <= -.length
El numero dentro del par de paréntesis start
es MENOR O IGUAL al numero de caracteres .length pero NEGATIVO.

Ejemplo:
['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'].length imprime 10 (positivo),
entonces -10 (negativo) ó un número menor a -10 (negativo)
imprime el array completo ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']

2) Escribo (0) dentro del par de paréntesis

3) NO escribo nada dentro del par de paréntesis ()

4) Dentro del par de paréntesis ()
hay algo que NO se puede convertir a tipo Number(), es decir NaN */

console.log(array.slice(-numeroElementos));                                      // (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] -> numero de elementos .length NEGATIVO
console.log(array.slice(-999));                                                  // (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] -> numero MENOR a .length NEGATIVO
console.log(array.slice(0));                                                     // (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] -> .slice(0)
console.log(array.slice());                                                      // (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] -> .slice()
console.log(array.slice('este string NO se puede convertir a tipo number'));     // (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
console.log(array.slice(NaN));                                                   // (10) ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o'] -> .slice(NaN)

/* .slice() aproxima los números DECIMALES
al MENOR entero más cercano,
aunque copiar números decimales
dentro del par de paréntesis ()
de .slice() es mala practica */
console.log(array.slice(2.9)); // (8) ['l', 'a', '', 'm', 'u', 'n', 'd', 'o'] -> 2.9 se aproxima a 2
console.log(array.slice(2));   // (8) ['l', 'a', '', 'm', 'u', 'n', 'd', 'o']

console.log(array.slice(5.1)); // (5) ['m', 'u', 'n', 'd', 'o']               -> 5.1 se aproxima a 5
console.log(array.slice(5));   // (5) ['m', 'u', 'n', 'd', 'o']

/* Si es posible, .slice()
convierte a tipo Number()
lo que esta escrito dentro del par de paréntesis () */

// tipo string '2' se convierte a number 2
console.log(array.slice('2')); // (8) ['l', 'a', '', 'm', 'u', 'n', 'd', 'o']

// .slice() en array vacio []
console.log([].slice());              // []
console.log([].slice(0));             // []
console.log([].slice(-1));            // []
console.log([].slice(-999));          // []
console.log([].slice(999));           // []
console.log([].slice([].length));     // []
console.log([].slice([].length - 1)); // []

/* .slice() EN ARRAY CON NUMEROS NEGATIVOS
Los numeros enteros NEGATIVOS cuentan al reves de derecha a izquierda empezando desde -1

-1 es la ULTIMA posicion (indice)

Las posiciones (índices)
negativas de ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
son desde -1 hasta -10

Imprimir los dos -2
últimos ELEMENTOS
de ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
que son ['d', 'o'] */
console.log(array.slice(-2));
/* (2) ['d', 'o']
0: "d"
1: "o"
length: 2
[[Prototype]]: Array(0) */

/* (-5, -2)
De ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
imprimir las posiciones -5 hasta -3,
NO se imprime la posición -2 */
console.log(array.slice(-5, -2));
/* (3) ['m', 'u', 'n']
0: "m"
1: "u"
2: "n"
length: 3
[[Prototype]]: Array(0) */

/* usando el metodo .slice()
obtener (acceder) al ULTIMO elemento -1

el ultimo elemento del ARRAY ['h', 'o', 'l', 'a', '', 'm', 'u', 'n', 'd', 'o']
es la ['o'] */
console.log(array.slice(numeroElementos - 1)); // ['o'] -> array.slice(array.length - 1)
console.log(array.slice(-1));                  // ['o']

/* SI start > end
entonces .slice() devuelve un array vacio [] */
console.log(array.slice(0, 1)); // ['h'] -> imprimir desde la posicion (indice) 0 hasta 1
console.log(array.slice(1, 0)); // []    -> como 0 (start) > 1 (end) entonces .slice() imprime array vacio

/* ------------------------------------------------------------------ */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#using_slice

1) Crear un objetoLiteral {}
   q contenga la
   propiedad: valor,
   color: 'rojo',

2) Crear un array1 q contenga en sus elementos...
   2.1) En la posicion (indice) 0 al objetoLiteral [ {} ] del punto 1)
   2.2) Nuevos elementos diferentes al objetoLiteral {},
        DESPUES de la posicion 0

3) Crear array2 q contenga en sus elementos...
   3.1) Usando el metodo .slice()
        copiar del array1 al array2
        la posicion (indice) 0 (objetoLiteral {})
        y 1 (elemento DIFERENTE al objetoLiteral {})

4) Los array1 y array2
   deben tener la
   propiedad: valor,
   color: 'rojo',
   del objetoLiteral {}

5) Modificar
   color: 'rojo', por
   color: 'purpura', en...
   - objetoLiteral {}
   - array1
   - array2 */

// 1) objetoLiteral {}
const objetoLiteral = {
// propiedad: valor,
  color: 'rojo',
};

console.log(objetoLiteral);
/*
{
  color: 'rojo',
}
*/

/* 2) array1 [] q contiene al objetoLiteral {}
y otros elementos DIFERENTES al objetoLiteral {} */
const array1 = [objetoLiteral, 1, 2, 3];
console.log(array1);
/*
[
  {
    color: 'rojo',
  },
  1,
  2,
  3
]
*/

/* 3) array2 [] q contiene
los elementos q estan en las posiciones (indices) 0 y 1
del array1 [objetoLiteral, 1] */
const array2 = array1.slice(0, 2);
console.log(array2);
/*
[
  {
    color: 'rojo',
  },
  1
]
*/

/* 4) los array1 y array2 []
tienen dentro un objetoLiteral {}
con la propiedad: valor,
color: 'rojo', */

console.log(array1[0].color);                     // 'rojo'
console.log(array2[0].color);                     // 'rojo'
console.log(array1[0].color === array2[0].color); // true

/* 5) modificar el color en...
- objetoLiteral {}
- array1
- array2 */
objetoLiteral.color = 'purpura';

// verificar q el color se haya modificado en...
console.log(objetoLiteral.color); // 'purpura' -> objetoLiteral
console.log(array1[0].color);     // 'purpura' -> array1
console.log(array2[0].color);     // 'purpura' -> array2

/* ------------------------------------------------------------------ */

/* Ejemplo 4 - .slice() en Objeto Literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#calling_slice_on_non-array_objects

El metodo .slice() lee la propiedad length de this.
Despues lee las propiedades con clave entera de start a end
y las define en un array recien creado. */

const objetoLiteral2 = {
  length: 3, /* Array.prototype.slice.call()
                NO funciona cuando NO copio length: 3,  */
  0: 'cero',
  1: 'uno',
  2: 'dos',
};
console.log(objetoLiteral2);
/*
{
  '0': 'cero',
  '1': 'uno',
  '2': 'dos',
  length: 3
}
*/

console.log(Array.prototype.slice.call(objetoLiteral2, 1, 3));
// [ 'uno', 'dos' ]

/* ------------------------------------------------------------------ */

/* Ejemplo 5:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#using_slice_to_convert_array-like_objects_to_arrays

Convertir objetos {} similares a un array en un array [] usando...
- .slice()

- .bind()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

- .call()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call */

// .slice() se llama con this pasado como primer argumento

const slice = Function.prototype.call.bind(Array.prototype.slice);
console.log(slice);
// [Function: bound call]

function list() {
  return slice(arguments);
}

const array3 = list(1, 2, 3);
console.log(array3);
/* (3) [1, 2, 3]
0: 1
1: 2
2: 3
length: 3
[[Prototype]]: Array(0) */

/* ------------------------------------------------------------------ */

/* Ejemplo 6 - Array Disperso (Sparse Array) y Metodo .slice()
1) Crear un array disperso [,,]

2) Usando el metodo .slice()
imprimir las "ranuras vacías" (empty items)
del array disperso [,,]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#using_slice_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// 1) array disperso [,,]
const arrayDisperso = [1, 2, , 4, 5];
console.log(arrayDisperso);
// [ 1, 2, <1 empty item>, 4, 5 ]

// 2) "ranuras vacías" (empty items)
console.log(arrayDisperso.slice(1, 4));
// [ 2, <1 empty item>, 4 ]
