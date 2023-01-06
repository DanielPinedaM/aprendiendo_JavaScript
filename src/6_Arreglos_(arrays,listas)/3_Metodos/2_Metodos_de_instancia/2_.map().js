/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
// @ts-nocheck

/*
Recordatorio:

- Puedo convertir de string a array usando .map() ver
“ 8.5.3.10.2) .map() Método de Array ”
https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/

- Resumen: Diferencia Entre .forEach() .map() .filter() .reduce() .find()

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

Tutorial:
https://youtu.be/FMubfnVET74

Documentacion Oficial - .map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

.map() DEVOLVER un nuevo array
con el RESULTADO de ejecutar una funcion
a CADA UNO de los elementos
de un array existente (MAPEAR Array)

.map () hace lo siguiente:
1) Itera (recorre) el array.
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

2) MODIFICA los elementos del array2 copiado
   con el resultado de aplicar
   la función .map() a cada uno de los elementos
   del array1 original (existente)

3) Devuelve una copia de un nuevo array2
   a partir de uno existente array1
   y NO modifica el array1 original
   https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

4) array1.length = array2.length
   El numero de elementos .length del array1 original
   y su copia array2 es IGUAL

Su sintaxis es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#syntax */

// Funcion Flecha (Arrow Function):
// .map((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function):
// .map(callbackFn, thisArg)

// Función Retrollamada en una Sola Línea (Inline Callback Function):
// .map(function (element, index, array) { /* … */ }, thisArg)

/* Donde...
- .map()
Es el nombre del metodo

- callbackFn
Retorna una copia array2 del array1 original (mapear array)
con el resultado de ejecutar una funcion .map()
para cada uno de los elementos del array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#return_value

La funcion .map() tiene los siguientes argumentos:

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1

- array
Es el array para el que se evalua la condicion de la funcion

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/* ------------------------------------------------------------ */

/* Ejemplo 1 - .map() y Concatenar:
En el array1 original (existente) hay 4 cuadrados ['■', '■', '■', '■']
pero .map() devuelve una copia array2 en el q se
MODIFICA CADA UNO de los elementos del array1 original
concatenando los cuadrados con un triangulo '■▲' */

// array1 original (existente)
const array1 = ['■', '■', '■', '■'];
console.log(array1);
// (4) ['■', '■', '■', '■']

/* array2 es una copia modificada del array1

En el array2 agregar un triangulo '▲' a cada uno de los elementos del array1 */
const array2 = array1.map((elemento) => `${elemento}▲`);
console.log(array2);
// (4) [ '■▲', '■▲', '■▲', '■▲' ]

/* ------------------------------------------------------------ */

// Ejemplo 2 - Metodos .map() y .replace()

const array3 = ['■', '■', '■', '▲'];
console.log(array3);
// (4) ['■', '■', '■', '▲']

// Reemplazar todos los cuadrados '■' del array3 por circulos '●'
const array4 = array3.map((elemento) => elemento.replace('■', '●'));
console.log(array4);
// (4) ['●', '●', '●', '▲']

/* ------------------------------------------------------------ */

// Ejemplo 3 - Recorrer (Iterar) Array Usando .map()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras.map((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* .map() devuelve el elemento actual
  q cambia dependiendo de la posicion (indice) q se esta iterando,
  al terminar de iterar se copia el array llamado figuras
  en otro array llamado iterar */
  return elemento;
});
/*
i = 0 | elemento = '▲'
i = 1 | elemento = '●'
i = 2 | elemento = '✖'
i = 3 | elemento = '■'
*/

console.log(iterar); // (4) ['▲', '●', '✖', '■']

/* ------------------------------------------------------------ */

/* Ejemplo 4 - Array Disperso (Sparse Array) [,] y Método .map()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

/* .map() Multiplicar por dos
cada uno de los numeros (elementos) del arrayDisperso */
const map = arrayDisperso.map((elemento, i) => {
  console.log(`i=${i} | ${elemento}*2=${elemento * 2}`);

  return elemento * 2;
});

/* .map() NO evalua la condicion de la funcion
en las ranuras vacias (empty item) [,] porque estas son ignoradas

Esto lo compruebo porq la posicion 1
q tiene la ranura vacia (empty item) [,] ...
- NO se multiplica por 2
- NO se imprime (itera) la ranura vacia [,] */

/*
i=0 | 1*2=2
i=2 | 3*2=6
*/

console.log(map); // (3) [ 2, <1 empty item>, 6 ]

/* ------------------------------------------------------------ */

/* Ejemplo 5 - Elevar al cuadrado cada uno de los numeros (elementos) de un array

https://youtu.be/FMubfnVET74

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#mapping_an_array_of_numbers_to_an_array_of_square_roots

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#mapping_an_array_of_numbers_using_a_function_containing_an_argument */

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

const potenciacion = numeros.map((elemento) => {
  const cuadrado = elemento * elemento;
  console.log(`${elemento}^2 = ${cuadrado}`);

  return cuadrado;
});
/*
1^2 = 1
2^2 = 4
3^2 = 9
4^2 = 16
5^2 = 25
*/

console.log(potenciacion); // (5) [1, 4, 9, 16, 25]

/* ------------------------------------------------------------ */

/* Ejemplo 6:
https://youtu.be/FMubfnVET74 */

// Crear un array con numeros
console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* Repetir cada uno de los numeros
   del array anterior dentro de un array anidado */
const arrayAnidado = numeros.map((elemento) => [elemento, elemento]);
console.log(arrayAnidado);
/*
(5) [
      [ 1, 1 ],
      [ 2, 2 ],
      [ 3, 3 ],
      [ 4, 4 ],
      [ 5, 5 ]
    ]
*/

/* ------------------------------------------------------------ */

/* Ejemplo 7 - Edad promedio de las mascotas [{}]
https://youtu.be/FMubfnVET74 */

const mascotas = [ // Array q contiene objeto literal [{}]
  { nombre: 'Puchini', edad: 12 },
  { nombre: 'Chanchito feliz', edad: 3 },
  { nombre: 'Pulga', edad: 10 },
  { nombre: 'Pelusa', edad: 12 },
];
console.log(mascotas);
/*
[
  { nombre: 'Puchini', edad: 12 },
  { nombre: 'Chanchito feliz', edad: 3 },
  { nombre: 'Pulga', edad: 10 },
  { nombre: 'Pelusa', edad: 12 }
]
*/

/* .map() Transformar array q contiene objeto literal [{}]
en array [] con los numeros de las edades */
const arrayEdad = mascotas.map((elemento) => elemento.edad);
console.log(arrayEdad);
// (4) [12, 3, 10, 12]

// .length numero total de ELEMENTOS del array contando desde 1
const numeroElementos = arrayEdad.length;
console.log(numeroElementos);
// 4

/* .reduce() Edad promedio de las mascotas
   (12 + 3 + 10 + 12) / 4 = 9.25 */
const promedio = arrayEdad.reduce((acumulador, elemento) => acumulador + elemento) / numeroElementos;
console.log(promedio);
// 9.25

/* ------------------------------------------------------------ */

/* Ejemplo 8 - Formatear Array de Objetos [{}]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_to_reformat_objects_in_an_array */

/* Cada objeto literal {} tiene dos propiedades
que son propiedad1 y propiedad2 */
const array = [ // Array q contiene objeto literal [{}]
//  propiedad: valor,
  { propiedad1: 1, propiedad2: 10 },
  { propiedad1: 2, propiedad2: 20 },
  { propiedad1: 3, propiedad2: 30 },
];
console.log(array);
/*
(3) [
      { propiedad1: 1, propiedad2: 10 },
      { propiedad1: 2, propiedad2: 20 },
      { propiedad1: 3, propiedad2: 30 }
    ]
*/

/* El nombre de la PROPIEDAD
es el valor de la propiedad propiedad1 del objeto original,
y el VALOR de la propiedad
es el valor de la propiedad propiedad2 del objeto original

Ejemplo:
El primer elemento del array es el objeto literal
{ propiedad1: 1, propiedad2: 10 }
y despues de ejecutar .map() se convierte en { 1: 10 }
y asi sucesivamente para el resto de los objetos */
const formatearArray = array.map(({ propiedad1, propiedad2 }) => ({ [propiedad1]: propiedad2 }));
console.log(formatearArray);
// (3) [ { 1: 10 }, { 2: 20 }, { 3: 30 } ]

/* ------------------------------------------------------------ */

/* Ejemplo 9 - Método de Array .map() en Objeto Literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#calling_map_on_non-array_objects */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* Object.keys() devuelve un array []
q contiene las propiedades del objetoLiteral {} */
console.log(Object.keys(objetoLiteral));
// (3) ['uno', 'dos', 'tres']

/* .map() devuelve un array []
con los valores del objetoLiteral {}
elevados al cuadrado */
const valoresElevadosAlCuadrado = Object.keys(objetoLiteral).map((propiedad) => {
  // Elevar al cuadrado cada uno de los valores del objetoLiteral {}
  const potenciacion2 = objetoLiteral[propiedad] ** 2;
  // Valores del objetoLiteral {}
  const valor = objetoLiteral[propiedad];
  console.log(`${valor}^2 = ${potenciacion2}`);

  return potenciacion2;
});
/*
1^2 = 1
2^2 = 4
3^2 = 9
*/

console.log(valoresElevadosAlCuadrado); // (3) [1, 4, 9]

/* ------------------------------------------------------------ */

/* Ejemplo 10:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_map_generically_on_a_nodelist

Guardar en una variable
los valores de las opciones <option>
q han sido seleccionadas de la etiquetas (elementos) HTML <select>

El resultado es un NodeList []
q es similar (NO es lo mismo) a un array */
const etiqueta = document.querySelectorAll('select option:checked');
console.log(etiqueta);
// NodeList []

/* Documentación Oficial - NodeList
https://developer.mozilla.org/en-US/docs/Web/API/NodeList

Convertir de NodeList [] a array [] */
const values = Array.prototype.map.call(etiqueta, ({ value }) => value);
console.log(values);
// []

/* ------------------------------------------------------------ */

/* Ejemplo 11 - .map() y undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#mapped_array_contains_undefined

1) Crear un array1 con 5 posiciones (indices)

2) Crear una copia array2 del array1

3) Recortar el array2 para q contenga
   los elementos de las posiciones 0 y 1 del array1

Ejemplo:
Si el array1 es (5) [1, 2, 3, 4, 5]
entonces el array2 debe ser (2) [1, 2] */

console.log(numeros);
// (5) [1, 2, 3, 4, 5]

/* Forma INCORRECTA:
Esto NO se puede hacer con .map()
porque .map() va a rellenar
los elementos no asignados con undefined
para q el array original numeros y la copia recortarArray
tengan el mismo numero de elementos .length */
let recortarArray = numeros.map((elemento, i) => {
  if (i < 2) { // Guardar elementos (numeros) de posiciones 0 y 1
    return elemento;
  }
});
console.log(recortarArray);
// (5) [1, 2, undefined, undefined, undefined]

/* Forma CORRECTA:
En cambio,
va a funcionar si hago lo mismo pero con .filter() */
recortarArray = numeros.filter((elemento, i) => {
  if (i < 2) {
    return elemento;
  }
});
console.log(recortarArray);
// (2) [1, 2]

/* La MEJOR forma es usar .slice() porque:
- Es mas rapido porq no itera el array
- Escribo menos codigo (codigo limpio) */
recortarArray = numeros.slice(0, 2);
console.log(recortarArray);
// (2) [1, 2]

/* ------------------------------------------------------------ */

/* Ejemplo 12 - Convertir los elementos de un array de tipo texto a numero
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#using_parseint_with_map

https://wirfs-brock.com/allen/posts/166

Recordatorio:
La mejor forma para convertir a tipo numero
es usar el metodo Number(), ver:
" 4.5) Convertir Tipos de Datos (Convertir de un Tipo de Dato a Otro, Tipado Dinámico, Coerción) "

Stack Overflow - Diferencia Entre Number() y parseFloat()
https://stackoverflow.com/questions/12227594/what-is-the-difference-between-unary-plus-numberx-and-parsefloatx */

// parseFloat()
const retornarNumero = (elemento) => parseFloat(elemento, 10);

console.log(retornarNumero);        // [Function: retornarNumero]
console.log(retornarNumero('1'));   // 1
console.log(retornarNumero('1.1')); // 1.1

// .map() y parseFloat
console.log(['1.1', '2', '3'].map(retornarNumero));                         // (3) [1.1, 2, 3]
console.log(['1.1', '2', '3'].map(parseFloat));                             // (3) [1.1, 2, 3]
console.log(['1.1', '2.2e2', '3e300'].map((string) => parseFloat(string))); // (3) [1.1, 220, 3e+300]
console.log(['1.1', '2', '3'].map((string) => parseFloat(string)));         // (3) [1.1, 2, 3]

// .map() y Number()
console.log(['1.1', '2', '3'].map(Number));                                 // (3) [1.1, 2, 3]
console.log(['1.1', '2.2e2', '3e300'].map(Number));                         // (3) [1.1, 220, 3e+300]
