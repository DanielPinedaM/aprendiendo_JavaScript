/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
/* eslint-disable no-sparse-arrays */
/* eslint-disable array-callback-return */
/* eslint-disable indent */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
// @ts-nocheck

/* --------------------------------------------------- */

/* 
Recordatorio:

Resumen: Diferencia Entre .forEach() .map() .filter() .reduce() .find()

             |------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
             | ¿Recorre (itera) | ¿Crea una nueva copia           | ¿Modifica el array original?  | Valor de retorno return                          | Comparación entre el             | Ejemplo                                                                            |
             | el array?        | del array original (existente)? | (mutable / inmutable)         |                                                  | número de elementos .length      |                                                                                    |
             |                  |                                 |                               |                                                  | del array1 original              |                                                                                    |
             |                  |                                 |                               |                                                  | y su copia array2                |                                                                                    |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .forEach() | ✓                | X                               | ✓                             | X                                                | X                                | ['▲', '●', '✖', '■'].forEach((elemento, i) => {                                   |
|            |                  | Si es posible,                  | Dependiendo de lo que escriba | NO tiene valor de retorno                        |                                  |   console.log(`i=${i} | elemento='${elemento}'`);                                  |
|            |                  | pero para esto debería usarse   | en la función .forEach()      | Siempre retorna undefined                        |                                  |                                                                                    |
|            |                  | los otros métodos de array      | puedo escoger si editar o no  | Ejecuta una función para cada uno                |                                  |   // Aqui se escribe el codigo q se ejecuta                                        |
|            |                  |                                 | el array original             | de los elementos del array,                      |                                  |   // para cada uno de los elementos del array,                                     |
|            |                  |                                 |                               | es similar al bucle for () {}                    |                                  |   // .forEach() NO retorna return ningun valor                                     |
|            |                  |                                 |                               |                                                  |                                  | });                                                                                |
|            |                  |                                 |                               |                                                  |                                  |                                                                                    |
|            |                  |                                 |                               |                                                  |                                  | // i=0 | elemento='▲'                                                              |
|            |                  |                                 |                               |                                                  |                                  | // i=1 | elemento='●'                                                              |
|            |                  |                                 |                               |                                                  |                                  | // i=2 | elemento='✖'                                                             |
|            |                  |                                 |                               |                                                  |                                  | // i=3 | elemento='■'                                                              |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .map()     | ✓                | ✓                               | X                             | ✓                                                | array1.length                    | En el array1 original (existente)                                                  |
|            |                  |                                 |                               | Un nuevo array2 que MODIFICA                     | =                                | hay 4 cuadrados (4) ['■', '■', '■', '■']                                           |
|            |                  |                                 |                               | cada uno de los elementos                        | array2.length                    | pero .map() devuelve una copia array2                                              |
|            |                  |                                 |                               | del array1 original (existente)                  |                                  | en el q se MODIFICA CADA UNO de los elementos del array1 original                  |
|            |                  |                                 |                               | (MAPEAR array)                                   |                                  | concatenando (uniendo) los cuadrados con un triángulo '■▲'                         |
|            |                  |                                 |                               |                                                  |                                  |                                                                                    |
|            |                  |                                 |                               |                                                  |                                  | ['■', '■', '■', '■'].map((elemento) => `${elemento}▲`);                            |
|            |                  |                                 |                               |                                                  |                                  | // (4) ['■▲', '■▲', '■▲', '■▲']                                                    |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .filter()  | ✓                | ✓                               | X                             | ✓                                                | array1.length                    | En el array1 original (existente)                                                  |
|            |                  |                                 |                               | Un nuevo array2 en el que                        | <=                               | hay 3 cuadrados y un círculo (4) ['■', '■', '■', '●']                              |
|            |                  |                                 |                               | se ELIMINAN los elementos del array1 original    | array2.length                    | pero después de ejecutar .filter() se crea un nuevo array2                         |
|            |                  |                                 |                               | que NO cumplen con la condición de la función    |                                  | q solamente copia los cuadrados '■' del array1                                     |
|            |                  |                                 |                               | (FILTRAR array)                                  |                                  | y ELIMINA las otras figuras q NO son cuadrados                                     |
|            |                  |                                 |                               |                                                  |                                  |                                                                                    |
|            |                  |                                 |                               |                                                  |                                  | ['■', '■', '■', '●'].filter((elemento) => elemento === '■');                       |
|            |                  |                                 |                               |                                                  |                                  | // (3) ['■', '■', '■']                                                             |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .reduce()  | ✓                | X                               | X                             | ✓                                                | UN SOLO VALOR                    | Concatenar (unir)                                                                  |
| (mala      |                  |                                 |                               | Devuelve UN SOLO dato,                           | que puede ser de cualquier tipo: | cada uno de los elementos del array                                                |
| práctica)  |                  |                                 |                               | q es el resultado de ACUMULAR (sumar)            | '' string,                       | (4) ['▲', '●', '✖', '■']                                                           |
|            |                  |                                 |                               | todos los elementos del array                    | number,                          | en un solo string '▲●✖■'                                                           |
|            |                  |                                 |                               | (REDUCIR array)                                  | [] array,                        | (REDUCIR array)                                                                    |
|            |                  |                                 |                               |                                                  | {} object,                       |                                                                                    |
|            |                  |                                 |                               |                                                  | etc...                           | ['▲', '●', '✖', '■'].reduce((acumulador, elemento) => acumulador + elemento, '');  |
|            |                  |                                 |                               |                                                  |                                  | // '▲●✖■' -> .reduce() itera de Izquierda a Derecha                                |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|
| .find()    | ✓                | X                               | X                             | ✓                                                | X                                | Devolver el PRIMER elemento q sea un círculo '●'                                   |
|            |                  |                                 |                               | Devuelve el PRIMER ELEMENTO                      |                                  | ['■', '●', '■', '●'].find((elemento) => elemento === '●'); // '●'                  |
|            |                  |                                 |                               | que cumple con la condición de la función return |                                  | //     ↑                                                                           |
|            |                  |                                 |                               | y cuando NO encuentre el elemento buscado        |                                  |                                                                                    |
|            |                  |                                 |                               | devuelve undefined                               |                                  | Devuelve undefined porque el elemento triangulo '▲' NO existe en el array          |
|            |                  |                                 |                               |                                                  |                                  | ['■', '●', '■', '●'].find((elemento) => elemento === '▲');                         |
|            |                  |                                 |                               |                                                  |                                  | // undefined                                                                       |
|------------|------------------|---------------------------------|-------------------------------|--------------------------------------------------|----------------------------------|------------------------------------------------------------------------------------|

Documentacion Oficial...
- .reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

- .reduceRight()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight

Tutorial 1 - Nicolas Schurmann Explica .reduce()
https://youtu.be/0y5lXGYMEw0

ADVERTENCIA:

Tutorial 2 - Programadores de Google Explican ¿Porque NO Usar .reduce() ?
https://youtu.be/qaGjS7-qWzg

https://surma.github.io/underdash/

.reduce() es MALA PRACTICA
y es MUY extraño usarlo porque:
https://www.youtube.com/watch?v=qaGjS7-qWzg&t=265s
- Tiene mal rendimiento (es lento).
- Es código espagueti (no es codigo legible).

¿Cuando usar o no .reduce() ?:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce

1) Usar .reduce() para sumar todos los numeros de un array,
   ver: " Ejemplo 3 - Sumar todos los numeros (elementos) de un array "

2) Cuando necesite devolver UN SOLO dato a partir de un array existente (original),
   usar juntos .filter() y .map() y NO .reduce(),
   ver: " Ejemplo 10 - Usar Juntos .filter() y .map() y NUNCA Usar .reduce() "

   En otras palabras:
   .reduce() = .filter() + .map()

3) Usar .reduce() para REDUCIR un array, 
   NO como si fuera un bucle (for, while, etc.) para iterar un array

ACUMULAR los elementos de un array para devolver un solo dato iterando de (REDUCIR array)...
- .reduce()                de izquierda a derecha   (desde el PRIMER 0 elemento hacia el ULTIMO -1 elemento)
- .reduceRight() al reves, de derecha   a izquierda (desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento)

.reduce() y .reduceRight() hacen lo siguiente:
1) Itera (recorre) el array.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

2) Ejecuta una funcion para... 
   - Cada uno de los elementos del array
   - El acumulador 

3) Devuelve UN SOLO dato,
   q es el resultado de
   ACUMULAR (sumar) todos los elementos del array

4) Puede devolver cualquier tipo de dato:
   '' string, number, [] array, {} object, etc...

5) El UNICO valor devuelto NO modifica el array original (existente)

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#syntax */

// Funcion Flecha (Arrow Function):
// [].reduce((acumulador, elementoActual, indice, array) => { /* ... */ }, valorInicialDelAcumulador)
// [].reduceRight((acumulador, elementoActual, indice, array) => { /* … */ }, valorInicialDelAcumulador)

// Función Retrollamada (Callback Function)
// [].reduce(funcionRetrollamada, valorInicialDelAcumulador)
// [].reduceRight(funcionRetrollamada, valorInicialDelAcumulador)

// Función Reductora y Retrollamada (Callback reducer function)
// [].reduce(funcionReductoraRetrollamada (acumulador, elementoActual, indice, array) { /* … */ }, valorInicialDelAcumulador)
// [].reduceRight(funcionReductoraRetrollamada (acumulador, elementoActual, indice, array) { /* … */ }, valorInicialDelAcumulador)

/* 
Donde...
- []
Es un array

- .reduce() y .reduceRight()
Nombre del método

- funcionRetrollamada
* Es una funcion que se ejecuta
para cada uno de los elementos del array

* Devuelve el resultado de acumular 
todos los elementos del array

Las funciones (metodos) .reduce() y .reduceRight() 
tienen los siguientes argumentos:

- acumulador
Es una variable que inicia con un valor,
suma cada uno de los elementos del array
y se va actualizando con el resultado de cada operación
a medida que la funcion se (itera) 
ejecuta para cada elemento del array

- elementoActual
Es el valor del elemento actual 
que va cambiando dependiendo 
del numero de posicion (indice) 
que se este iterando (recorriendo)

- indice
* Es el numero actual de posicion (indice) 
que se esta iterando (recorriendo)

- array
Es el nombre del array para el que se ejecuta la funcion .reduce()

- valorInicialDelAcumulador
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#how_reduceright_works_without_an_initial_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#how_reduceright_works_with_an_initial_value

* Es opcional

* Es el primer valor en el que inicia el acumulador
  en la primera iteracion

* Cuando NO se escribe entonces 
  se establece en el primer elemento del array
  en la primera iteracion

* El valorInicialDelAcumulador 
  afecta al acumulador, elementoActual e indice, ver:
  " Ejemplo 5 - Valor Inicial del ÍNDICE "
  " Ejemplo 6 - Valor Inicial del ELEMENTO ACTUAL "
  " Ejemplo 7 - valorInicialDelAcumulador "

                             |---------------------------|
                             | valor inicial del...      |
|----------------------------|--------|------------------|
| ¿Escribo el                | indice | elementoActual   |
| valorInicialDelAcumulador? |        |                  |
|----------------------------|--------|------------------|
| ✓                          | 0      | Primera posicion |
|                            |        | indice 0         |
|                            |        | array[0]         |
|----------------------------|--------|------------------|
| X                          | 1      | Segunda posicion |
|                            |        | indice 1         |
|                            |        | array[1]         |
|----------------------------|--------|------------------|

* El valorInicialDelAcumulador tiene un valor diferente dependiendo
de los tipos de datos (elementos) q contenga el array

Ejemplo 1:
Esto puede cambiar porque es solo UN EJEMPLO:

|------------------------|---------------------------|-----------------------------------------------------------------------------------|
| Tipo de dato del array | valorInicialDelAcumulador | Ejemplo                                                                           |
|------------------------|---------------------------|-----------------------------------------------------------------------------------|
| Numero                 | 0                         | [1, 2, 3, 4, 5].reduce((acumulador, elemento) => acumulador + elemento, 0);       |
| Number()               |                           | // 15                                                                             |
|------------------------|---------------------------|-----------------------------------------------------------------------------------|
| Texto                  | ''                        | ['▲', '●', '✖', '■'].reduce((acumulador, elemento) => acumulador + elemento, ''); |
| String()               |                           | // '▲●✖■'                                                                         |
|------------------------|---------------------------|-----------------------------------------------------------------------------------|
*/

/* ------------------------------------------------------------ */

// Ejemplo 2:

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']

/* .reduce() concatenar (unir) cada uno de los elementos del array (4) ['▲', '●', '✖', '■']
   en un solo string '▲●✖■' (REDUCIR array) */
const reducir1 = array.reduce((acumulador, elemento) => acumulador + elemento, '');
console.log(reducir1); // '▲●✖■' -> .reduce() itera de Izquierda a Derecha

/* .reduceRight() hace lo mismo q .reduce(),
   la unica diferencia es el orden de iteracion */
const reducir2 = array.reduceRight((acumulador, elemento) => acumulador + elemento, '');
console.log(reducir2); // '■✖●▲' -> .reduceRight() itera Derecha a Izquierda

/* ------------------------------------------------------------ */

/* Ejemplo 3 - Diferencia Entre .reduce() y .reduceRight()
La UNICA diferencia entre .reduce() y .reduceRight()
es la DIRECCION hacia la cual se recorren (iteran) los elementos

https://www.javascripttutorial.net/javascript-array-reduce/

https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-array-reduce.svg

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#difference_between_reduce_and_reduceright */

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Recorrer (iterar) arrays con .reduce() y .reduceRight() es MALA PRACTICA
   https://www.youtube.com/watch?v=qaGjS7-qWzg&t=265s */
const reduce = figuras.reduce((acumulador, elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return elemento; // '■'
}, 0);
/*
.reduce() ...
1) Itera de IZQUIERDA A DERECHA
   (desde el PRIMER 0 elemento hacia el ULTIMO -1 elemento)

2) El contador i empieza en la PRIMERA posicion q es i=0

i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

// 3) Esta retornando el cuadrado '■' q es el ULTIMO -1 elemento
console.log(reduce); // '■'

/*
en cambio, reduceRight() ...
1) Itera al reves, de DERECHA A IZQUIERDA
   (desde el ULTIMO -1 elemento hacia el PRIMER 0 elemento)

2) El contador i empieza en la ULTIMA posicion q es i=3
*/
const reduceRight = figuras.reduceRight((acumulador, elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  return elemento; // '▲'
}, 0);
/*
i=3 | elemento='■'
i=2 | elemento='✖'
i=1 | elemento='●'
i=0 | elemento='▲'
*/

// 3) Esta retornando el triangulo '▲' q es el PRIMER 0 elemento
console.log(reduceRight); // '▲'

/* ------------------------------------------------------------ */

/* Ejemplo 4 - Sumar todos los numeros (elementos) de un array

https://youtu.be/0y5lXGYMEw0
   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#sum_up_all_values_within_an_array */

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

// Esto funciona pero es MALA PRACTICA
let sumar = (elemento) => {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += elemento[i];
  }
 
  return acumulador;
};

// 1 + 2 + 3 + 4 + 5 = 15
const resultado1 = sumar(numeros);
console.log(resultado1);
// 15

/* Refactorizar codigo - BUENA PRACTICA:
.reduce() Recorre (itera) cada uno de los elementos del array,
agregando en cada iteracion el elementoActual 
del array al resultado del paso anterior
hasta que no haya mas elementos que agregar,
lo que da como resultado 
la suma acumulada de todos los elementos (numeros) del array */
sumar = numeros.reduce((acumulador, elemento) => {
  console.log(`${acumulador} + ${elemento} = ${acumulador + elemento}`);
  /* 
  acumulador + elemento
  0  + 1 = 1
  1  + 2 = 3
  3  + 3 = 6
  6  + 4 = 10
  10 + 5 = 15
  */

  return acumulador + elemento;
}, 0);
console.log(sumar); // 15

/* ------------------------------------------------------------ */

/* Ejemplo 5 - Valor Inicial del ÍNDICE:
https://stackoverflow.com/questions/55958051/why-array-reduce-starts-from-index-1 */

console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* Cuando SI se escribe el valorInicialDelAcumulador 
entonces el indice empieza en 0 */
sumar = numeros.reduce((acumulador, elemento, i) => {
  console.log(`indice actual = ${i}`);
  /* 
  indice actual = 0 -> El indice empieza en 0 (PRIMER elemento)
  indice actual = 1
  indice actual = 2
  indice actual = 3
  indice actual = 4
  */

  return acumulador + elemento;
}, 0); // 0 -> SI escribi el valorInicialDelAcumulador

/* en cambio, cuando NO se escribe el valorInicialDelAcumulador 
el indice empieza en 1 */
sumar = numeros.reduce((acumulador, elemento, i) => {
  console.log(`indice actual = ${i}`);
  /*                -> Se OMITE el indice 0   (PRIMER elemento)
  indice actual = 1 -> El indice empieza en 1 (SEGUNDO elemento)
  indice actual = 2
  indice actual = 3
  indice actual = 4
  */

  return acumulador + elemento;
}); // NO escribi el valorInicialDelAcumulador

/* ------------------------------------------------------------ */

/* Ejemplo 6 - Valor Inicial del ELEMENTO ACTUAL: 
He creado un array2 en el q puedes diferenciar
los indices del primer y segundo elemento: */
const array2 = ['PRIMER elemento (indice 0)', 'SEGUNDO elemento (indice 1)', 'hola', 'mundo'];
console.log(array2);
// (4) ['PRIMER elemento (indice 0)', 'SEGUNDO elemento (indice 1)', 'hola', 'mundo']

/*  Cuando SI se escribe el valorInicialDelAcumulador 
entonces el ELEMENTO ACTUAL empieza en la 
primera posicion → indice 0 → array[0] */
array2.reduce((_, elementoActual) => { // El guion bajo _ es para ignorar la variable acumulador
  console.log(`elementoActual = '${elementoActual}'`);
}, 0); // -> SI escribi el valorInicialDelAcumulador
/* 
elementoActual = 'PRIMER elemento  (indice 0)' -> El elementoActual empieza en la PRIMERA posicion (indice 0)
elementoActual = 'SEGUNDO elemento (indice 1)' 
elementoActual = 'hola'
elementoActual = 'mundo'
*/

/* en cambio, cuando NO se escribe el valorInicialDelAcumulador 
el ELEMENTO ACTUAL empieza en la 
segunda posicion → indice 1 → array[1] */
array2.reduce((_, elementoActual) => {
  console.log(`elementoActual = '${elementoActual}'`);
}); // NO escribi el valorInicialDelAcumulador
/*                                             -> Se OMITE el indice 0 (PRIMER elemento)
elementoActual = 'SEGUNDO elemento (indice 1)' -> El elementoActual empieza en la SEGUNDA posicion (indice 1)
elementoActual = 'hola'
elementoActual = 'mundo'
*/

/* ------------------------------------------------------------ */

// Ejemplo 7 - valorInicialDelAcumulador

console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* Cuando SI escribo el valorInicialDelAcumulador
entonces el acumulador empieza en el valor especificado
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#how_reduce_works_with_an_initial_value */
figuras.reduce((acumulador, elemento) => {
  console.log(acumulador);

  return acumulador + elemento;
}, ''); // '' SI escribi el valorInicialDelAcumulador
/* 
'' -> El valorInicialDelAcumulador emieza en un caracter vacio ''
'▲'
'▲●'
'▲●✖■'
'▲●✖'
*/

/* En cambio cuando NO escribo el valorInicialDelAcumulador,
el acumulador inicia en el primer valor del array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#how_reduce_works_without_an_initial_value */
figuras.reduce((acumulador, elemento) => {
  console.log(acumulador);

  return acumulador + elemento;
}); // NO escribi el valorInicialDelAcumulador
/* 
'▲' -> El acumulador empieza en el triangulo '▲' q es el primer elemento del array
'▲●'
'▲●✖■'
'▲●✖'
*/

/* ------------------------------------------------------------ */

/* Ejemplo 8 - Array vacio [] y .reduce()
https://youtu.be/0y5lXGYMEw0

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#exceptions

.reduce() NO se ejecuta porq el array vacio [] no tiene elementos,
por lo tanto devuelve el valorInicialDelAcumulador q es 0 */

const reducir3 = [].reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(reducir3);
// 0

/* ------------------------------------------------------------ */

/* Ejemplo 9 - Indexar array q contiene objeto literal [{}]
https://youtu.be/0y5lXGYMEw0 */

const mascotas = [ // Array de objetos [{}]
//  propiedad: valor,
  { nombre: 'Pelusa', tipo: 'gato' },
  { nombre: 'Puchini', tipo: 'perro' },
  { nombre: 'Pulga', tipo: 'perro' },
  { nombre: 'Chanchito feliz', tipo: 'perro' },
];
console.log(mascotas);
/* 
[
  { nombre: 'Pelusa', tipo: 'gato' },
  { nombre: 'Puchini', tipo: 'perro' },
  { nombre: 'Pulga', tipo: 'perro' },
  { nombre: 'Chanchito feliz', tipo: 'perro' }
]
*/

/* .reduce() crear un nuevo objeto literal {}
q en su propiedad (clave) tiene los nombres de las mascotas
y como valor los objetos del array mascotas */
const indexar = mascotas.reduce((acumulador, elemento) => ({
  ...acumulador,

  [elemento.nombre]: elemento,
}), {});
console.log(indexar);
/* 
{
  Pelusa: { nombre: 'Pelusa', tipo: 'gato' },
  Puchini: { nombre: 'Puchini', tipo: 'perro' },
  Pulga: { nombre: 'Pulga', tipo: 'perro' },
  'Chanchito feliz': { nombre: 'Chanchito feliz', tipo: 'perro' }
}
*/

/* Del objeto literal llamado indexar {}
imprimir solamente los valores de Pelusa */
console.log(indexar.Pelusa);
/* 
{ 
  nombre: 'Pelusa', 
  tipo: 'gato' 
}
*/

/* ------------------------------------------------------------ */

/* Ejemplo 10 - Aplanar Array Usando los Metodos .reduce() y .flat()

https://www.youtube.com/watch?v=qaGjS7-qWzg&t=723s

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#flatten_an_array_of_arrays */

const arrayAnidado = [1, [2, 3], 4, [5]];
console.log(arrayAnidado);
// (4) [ 1, [ 2, 3 ], 4, [ 5 ] ]

/* .reduce() MALA PRACTICA:
El valorInicialDelAcumulador
empieza en un array vacio []
pero conforme .reduce() itera, 
va acumulando cada uno de los elementos del arrayAnidado

.concat() concatena (une) los elementos del arrayAnidado */
let aplanarArray = arrayAnidado.reduce((acumulador, elemento) => {
  const resultado = acumulador.concat(elemento);
  console.log(resultado);
  /* 
  [ 1 ]
  (3) [1, 2, 3]
  (4) [1, 2, 3, 4]
  (5) [1, 2, 3, 4, 5]
  */

  return resultado;
}, []);
console.log(aplanarArray);
// (5) [1, 2, 3, 4, 5]

/* BUENA PRACTICA:
Con .flat() obtengo el mismo resultado
escribiendo menos codigo (codigo limpio) */
aplanarArray = arrayAnidado.flat();
console.log(aplanarArray);
// (5) [1, 2, 3, 4, 5]

/* ------------------------------------------------------------ */

/* Ejemplo 11 - Numero mayor de un array
https://www.youtube.com/watch?v=qaGjS7-qWzg&t=397s */

console.log(numeros);
// (5) [1, 2, 3, 4, 5]

// .reduce() MALA PRACTICA:
let mayor = numeros.reduce((acumulador, elemento) => {
  if (acumulador < elemento) {
    return elemento;
  }

  return acumulador; // else { /* ... */ }
}, []);

/* Del array (5) [1, 2, 3, 4, 5] 
el numero mayor es el 5 */
console.log(mayor); // 5

/* Documentacion Oficial - Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

BUENA PRACTICA:
Con Math.max() obtengo el mismo resultado
escribiendo menos codigo (codigo limpio) */
mayor = Math.max(...numeros);
console.log(mayor); // 5

/* ------------------------------------------------------------ */

/* Ejemplo 12 - Diferencia Entre .reduceRight() y .reverse() 
   para Invertir (Voltear) Array */

// numeros es el array original (existente)
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* .reduceRight() itera al reves, de DERECHA A IZQUIERDA
(desde el ULTIMO -1 elemento hacia el PRIMERO 0 elemento)

valorInicialDelAcumulador es un array vacio []
para poder agregar con .push() los elementos invertidos del array */
let invertir = numeros.reduceRight((acumulador, elemento) => {
  acumulador.push(elemento);

  return acumulador;
}, []);
console.log(invertir); // (5) [5, 4, 3, 2, 1]

/* .reduceRight() devuelve una nueva copia del array original (existente)
   SIN modificarlo */
console.log(numeros); // (5) [1, 2, 3, 4, 5]

// .reverse()
invertir = numeros.reverse();
console.log(invertir); // (5) [5, 4, 3, 2, 1]

// en cambio, .reverse() MODIFICA el array original
console.log(numeros);      // (5) [5, 4, 3, 2, 1]

numeros = [1, 2, 3, 4, 5];
console.log(numeros);      // (5) [1, 2, 3, 4, 5]

/* ------------------------------------------------------------ */

/* Ejemplo 13 - Usar Juntos .filter() y .map() y NUNCA Usar .reduce() 

https://www.youtube.com/watch?v=S1ZXSoAxEBg&t=461s

https://www.youtube.com/watch?v=qaGjS7-qWzg&t=602s

https://www.youtube.com/watch?v=qaGjS7-qWzg&t=1106s

https://www.youtube.com/watch?v=qaGjS7-qWzg&t=1214s

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#replace_.filter.map_with_.reduce */

// Crear un array q contenga numeros
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* Del array anterior,
devolver un nuevo array 
con los numeros pares 
y multiplicarlos por 2

.reduce() MALA PRACTICA: */
let parMultiplicar = numeros.reduce((acumulador, elemento) => {
  if (elemento % 2 === 0) {
    return [...acumulador, elemento * 2];
  }

  return acumulador;
}, []);

/* Los numeros pares del array (5) [1, 2, 3, 4, 5] son 2 y 4,
y despues de multiplicarlos por dos obtengo (2) [4, 8] */
console.log(parMultiplicar);
// (2) [4, 8]

// .filter() y .map() - BUENA PRACTICA:
parMultiplicar = numeros
                        .filter((elemento) => elemento % 2 === 0) // .filter() guarda los numeros pares
                        .map((elemento) => elemento * 2);         // .map() multiplica cada uno de los numeros pares por 2

console.log(parMultiplicar);
// (2) [4, 8] 

/* ------------------------------------------------------------ */

/* Ejemplo 14 - Array Disperso (Sparse Array) [,] y Métodos .reduce() y .reduceRight()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#using_reduce_with_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#using_reduceright_with_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

const reduce2 = arrayDisperso.reduce((acumulador, elemento, i) => {
  // imprimir el indice, acumulador y elemento actual
  console.log(`i=${i} | acumulador = ${acumulador} | elemento = ${elemento}`);

  // sumar todos los numeros del array
  return acumulador + elemento;
}, 0);
/* .reduce() y .reduceRight() ignoran las ranuras vacias (empty item) [,] 

Esto lo compruebo porq
al iterar el arrayDisperso con .reduce()
NO se imprime la ranura vacia [,]
NI la posicion 1

i=0 | acumulador = 0 | elemento = 1
i=2 | acumulador = 1 | elemento = 3
*/

console.log(reduce2); // 1+3 = 4

/* ------------------------------------------------------------ */

/* Ejemplo 15 - Contar el número de veces que se repite cada uno de los elementos del array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#counting_instances_of_values_in_an_object */

const repetido = ['hola mundo', 'daniel', 'lorem ipsum', 'daniel', 'daniel'];
console.log(repetido);
// (5) ['hola mundo', 'daniel', 'lorem ipsum', 'daniel', 'daniel']

const objetoContar = repetido.reduce((acumulador, elemento) => {
  /* contar el numero de veces 
  q se encuentra cada uno 
  de los elementos en el array */
  const contador = acumulador[elemento] ?? 0;

  return {
    ...acumulador,
    [elemento]: contador + 1,
  };
}, {});

/*
|---------------|-----------------------------------------|
| Elemento      | Numero de veces q se repite en el array |
|---------------|-----------------------------------------|
| 'hola mundo'  | 1                                       |
|---------------|-----------------------------------------|
| 'daniel'      | 3                                       |
|---------------|-----------------------------------------|
| 'lorem ipsum' | 1                                       |
|---------------|-----------------------------------------| 

El resultado es un objeto literal {} */
console.log(objetoContar);
/* 
{ 
  hola mundo: 1, 
  daniel: 3, 
  lorem ipsum: 1 
}
*/

/* ------------------------------------------------------------ */

/* Ejemplo 16 - Agrupar objeto literal {} por una propiedad (clave):
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#grouping_objects_by_a_property */

const personas = [ // Array de objetos [{}]
//  propiedad: valor,
  { nombre: 'Alice', edad: 21 },
  { nombre: 'Max', edad: 20 },
  { nombre: 'Jane', edad: 20 },
];
console.log(personas);
/* 
[
  { nombre: 'Alice', edad: 21 },  
  { nombre: 'Max', edad: 20 },  
  { nombre: 'Jane', edad: 20 }  
]
*/

/*
VARIABLES Y FUNCIONES

agrupar()   = Funcion q contiene otra funcion (metodo) .reduce()
arrayObjeto = Array de objetos [{}] a agrupar
.reduce()   = Funcion (metodo) q agrupa el array de objetos [{}]
property    = Propiedad por la q se agrupan los objetos
acumulador  = Valor acumulado (sumado)  a medida q se itera el array de objetos [{}]
objeto      = Objeto actual q se esta iterando del array de objetos [{}]
key         = Valor del objeto literal, son las edades de las personas: 21, 20 y 20
curGroup    = Valor del objeto actual en el acumulador (si existe) */
function agrupar(arrayObjeto, property) {
  return arrayObjeto.reduce((acumulador, objeto) => {
    const key = objeto[property];
    const curGroup = acumulador[key] ?? [];

    return { 
      ...acumulador, [key]: [...curGroup, objeto], 
    };
  }, {});
}

// Agrupar personas de acuerdo a la propiedad edad
const resultado = agrupar(personas, 'edad');
console.log(resultado);
/* 
{
  '20': [ 
          { nombre: 'Max', edad: 20 }, 
          { nombre: 'Jane', edad: 20 } 
        ],

  '21': [ 
          { nombre: 'Alice', edad: 21 } 
        ]
}
*/

/* ------------------------------------------------------------ */

/* Ejemplo 17:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#concatenating_arrays_contained_in_an_array_of_objects_using_the_spread_syntax_and_initialvalue */

const personas2 = [ // Array de objetos [{}]
//  propiedad: valor,
  { nombre: 'Anna', libros: [1, 2] },
  { nombre: 'Bob', libros: [3, 4] },
  { nombre: 'Alice', libros: [5, 6] },
];
console.log(personas2);
/* 
[
  { nombre: 'Anna', libros: [ 1, 2 ] },
  { nombre: 'Bob', libros: [ 3, 4 ] },
  { nombre: 'Alice', libros: [ 5, 6 ] }
]
*/

/* Usando el metodo .reduce()
   concatenar (unir) en un nuevo array [] lo siguiente:
   - Los valores de los libros 
     que se encuentra en 
     el array de objetos anterior [{}]
     que son los numeros 1, 2, 3, 4, 5, 6

   - Un 'NUEVO VALOR', que puede ser cualquier dato */
const concatenar = personas2.reduce(
  (acumulador, elemento) => [...acumulador, ...elemento.libros], // return
  ['NUEVO VALOR'],                                               // valorInicialDelAcumulador
);
console.log(concatenar);
// (7) ['NUEVO VALOR', 1, 2, 3, 4, 5, 6]

/* ------------------------------------------------------------ */

/* Ejemplo 18 - Eliminar elementos repetidos del array: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#remove_duplicate_items_in_an_array */

// Array con elementos repetidos:
console.log(repetido);
// (5) ['hola mundo', 'daniel', 'lorem ipsum', 'daniel', 'daniel']

// .reduce() MALA PRACTICA:
let arraySinRepetidos = repetido.reduce((acumulador, elemento) => {
  /* Añadir a la variable acumulador 
  los elementos del array que NO se repitan */
  if (!acumulador.includes(elemento)) {
    return [...acumulador, elemento];
  }

  /* NO añadir elementos repetidos 
  a la variable acumulador */
  return acumulador; // else { /*...*/ }
}, []); // Acumular los elementos en un array []

/* Imprimir del array repetido los elementos
pero UNICOS, SIN repetirse */
console.log(arraySinRepetidos);
// (3) ['hola mundo', 'daniel', 'lorem ipsum']

/* BUENA PRACTICA:
Set() Guarda los valores UNICOS del array

Array.from() Convierte el resultado a array

Con el objeto Set() y el metodo Array.from() 
obtengo el mismo resultado
escribiendo menos codigo (codigo limpio) */
arraySinRepetidos = Array.from(new Set(repetido));
console.log(arraySinRepetidos);
// (3) ['hola mundo', 'daniel', 'lorem ipsum']

/* ------------------------------------------------------------ */

/* Ejemplo 19:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#function_composition_enabling_piping

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#defining_composable_functions*/

// Multiplicar un numero por 2, 3 y 4
const doble = (x) => x * 2;     // [Function: doble]
const triple = (x) =>  x * 3;   // [Function: triple]
const cuatruple = (x) => x * 4; // [Function: cuatruple]

// .reduce() Composicion de funciones 
const funcionPipe = (...functions) => 
                    (valorInicial) => 
                    functions.reduce((acumulador, funcionActual) => 
                    funcionActual(acumulador), valorInicial); // [Function: funcionPipe]

// Ejecutar funciones
const multiply6 = funcionPipe(doble, triple);
console.log(multiply6(6));   // 6*2*3 = 36

const multiply9 = funcionPipe(triple, triple);
console.log(multiply9(9));   // 9*3*3 = 81

const multiply16 = funcionPipe(cuatruple, cuatruple);
console.log(multiply16(16)); // 16*4*4 = 256

const multiply24 = funcionPipe(doble, triple, cuatruple);
console.log(multiply24(24)); // 24*2*3*4 = 576

/* ------------------------------------------------------------ */

/* Ejemplo 20 - Metodo de array .reduce() en objetoLiteral {}

https://stackoverflow.com/questions/16449295/how-to-sum-the-values-of-a-javascript-object

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#calling_reduce_on_non-array_objects 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#calling_reduceright_on_non-array_objects */

const objetoLiteral = {
// propiedad: valor,
  uno: 2,
  dos: 3,
  tres: 4,
};
console.log(objetoLiteral);
/* 
{ 
  uno: 2,
  dos: 3,
  tres: 4
}
*/

/* Object.values() Array con los valores del objetoLiteral {} que son 2, 3, 4

.reduce() Sumar los valores del objetoLiteral {} */
const sumarValores = (objetoLiteral) => Object.values(objetoLiteral).reduce((a, b) => a + b, 0);
console.log(sumarValores(objetoLiteral));
// 2+3+4 = 9
