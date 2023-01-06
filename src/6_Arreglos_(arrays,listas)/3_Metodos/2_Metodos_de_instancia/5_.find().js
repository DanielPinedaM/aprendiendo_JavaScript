/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable indent */
// @ts-nocheck

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

Tutorial:
https://youtu.be/en5f0sYFJZE

Documentacion Oficial - .find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

.find() PRIMER ELEMENTO que Coincide con la Condicion de la Función

.find() devuelve el PRIMER ELEMENTO
que cumple con la condicion de la funcion return,
en caso de que NO se encuentre el elemento buscado
entonces devuelve undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#return_value

.find() NO modifica el array original (existente)

Alternativas al metodo .find():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#try_it

- Usar .findLast() para encontrar el ULTIMO ELEMENTO
  q coincida con la condicion de la funcion

- Usar .indexOf() ó .findIndex()
  para encontrar el PRIMER NUMERO
  de POSICION (INDICE)
  del elemento buscado en un array

- Usar .lastIndexOf() ó .findLastIndex()
  para encontrar el ULTIMO NUMERO
  de POSICION (INDICE)
  del elemento buscado en un array

- Usar .includes() para saber
  cuando un elemento
  si existe o no en un array

- Usar .every()  para saber si
  ¿TODOS los
  elementos del array
  cumplen con la condición de la función?

- Usar .some() para saber si
  ¿AL MENOS UN SOLO
  elemento del array
  cumple con la condición de la función?

Su sintaxis es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#syntax */

// Función Flecha (Arrow Function):
// .find((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function):
// .find(callbackFn, thisArg)

// Función Retrollamada en una Sola Linea (Inline Callback Function):
// .find(function (element, index, array) { /* … */ }, thisArg)

/*
Donde...
- .find()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta
para cada uno de los elementos del array

* Devuelve el PRIMER elemento
q cumple con la condicion de la funcion return

* Devuelve undefined
cuando NINGUN elemento
cumple con la condicion de la funcion return

La funcion .find() tiene los siguientes argumentos:

- element
* Es el elemento actual del array

* El elemento element cambia porque el metodo .find() recorre (itera) el array

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

/* Ejemplo 1:

PRIMER elemento q es un circulo '●' */
['■', '●', '■', '●'].find((elemento) => elemento === '●'); // '●'
//     ↑

// Devuelve undefined porq el elemento triangulo '▲' NO existe en el array
['■', '●', '■', '●'].find((elemento) => elemento === '▲'); // undefined

/* ------------------------------------------------------------ */

// Ejemplo 2 - Recorrer (iterar) array usando el metodo .find()

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

const iterar = figuras.find((elemento, i) => {
    console.log(`i=${i} | elemento='${elemento}'`);
});
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

/* .find() devuelve undefined
porq la funcion (metodo)
NO tiene un valor de retorno return */
console.log(iterar);
// undefined

/* ------------------------------------------------------------ */

/* Ejemplo 3 - Array Disperso (Sparse Array) [,] y Método .find()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#using_find_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
//                     0 1  2
//                       ↑

console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

// Recorrer (iterar) array usando .find()
const find = arrayDisperso.find((elemento, i) => { // Funcion flecha () => {}
  console.log(`i = ${i} | elemento = ${elemento}`);
});

/* .find() Evalua la condicion de la funcion return
en las ranuras vacias de los array dispersos [,]
como si fueran undefined

Esto lo compruebo porq
al iterar el arrayDisperso
se imprime undefined en la posicion (indice) 1
q es donde esta la ranura vacia [,] */

/*
i = 0 | elemento = 1
i = 1 | elemento = undefined
i = 2 | elemento = 3
*/

/* .find() devuelve undefined
porq la funcion (metodo)
NO tiene un valor de retorno return */
console.log(find);
// undefined

/* ------------------------------------------------------------ */

/* Ejemplo 4:

https://youtu.be/en5f0sYFJZE

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#try_it */

// Array con numeros
const numeros = [1, 2, 3, 10, 11, 12];
//                        ↑
console.log(numeros);
// (6) [1, 2, 3, 10, 11, 12]

// .find() imprimir el PRIMER ELEMENTO del array numeros q es mayor a 3
const find2 = numeros.find((elemento) => elemento > 3);
console.log(find2);
// 10

/* ------------------------------------------------------------ */

/* Ejemplo 5 - Buscar una propiedad de un objeto en un array de objetos [{}]

https://youtu.be/en5f0sYFJZE

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#find_an_object_in_an_array_by_one_of_its_properties */

const personas = [ // Array de objetos [{}]
 { edad: 10, nombre: 'Pedro' },
 { edad: 20, nombre: 'Daniel' },
 { edad: 30, nombre: 'Juan' },
];
console.log(personas);
/*
[
  { edad: 10, nombre: 'Pedro' },
  { edad: 20, nombre: 'Daniel' },
  { edad: 30, nombre: 'Juan' }
]
*/

/* Del array anterior
imprimir el objeto literal {}
de la persona q tiene 20 años,
y en caso de que no exista
ninguna persona q tenga 20 años
entonces imprimir 'NO existen personas con 20 años'

Stack Overflow - Validar si una variable es o no undefined en JS:
https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript */

const find3 = personas.find((elemento) => elemento.edad === 20);

if (find3 === undefined) {
    console.log('NO existen personas con 20 años');
} else /* (find3 !== undefined) */ {
    console.log('La persona con 20 años es: \n', find2);
}
/*
La persona con 20 años es:
{
  edad: 20,
  nombre: 'Daniel'
}
*/

/* ------------------------------------------------------------ */

/* Ejemplo 6 - Usando .find() encontrar el PRIMER número primo de un array:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#find_a_prime_number_in_an_array

Recordatorio:
Hay otros ejemplos similares a este, ver:
- " Ejemplo 7 - Usando .filter() encontrar TODOS los números primos q están en un array: "

- " Ejemplo 12 - Usando .findIndex() encontrar la PRIMERA posicion (indice) del numero primo de un array: "

- " Ejemplo 10 - Usando .findLastIndex() encontrar la ULTIMA posicion (indice) del numero primo de un array: "

- " Ejemplo 6 - Usando .findLast() encontrar el ULTIMO número primo de un array: "

Explicacion:

Un numero primo...
1) Es un numero ENTERO MAYOR Q 1,
   por lo tanto el 0, 1, los numeros negativos y decimales NO son primos

2) Es divisible solamente por 1 y por si mismo

Ejemplo:
2 es un numero primo porque:
2 > 1     -> 2 es MAYOR Q 1
2 / 1 = 2 -> 2 es divisible por 1
2 / 2 = 1 -> 2 "              " si mismo

Problema:
Usando .find() encontrar el PRIMER numero primo de un array,
en caso de que en el array no existan numeros primos entonces devolver undefined

Solucion:

Stack Overflow - Funcion para saber cuando un numero si es o no primo:
https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript

esPrimo() funcion flecha para saber cuando un numero si es o no primo
numero    es el numero q quiero saber si es o no primo */
const esPrimo = (numero) => {
  // NO son primos los numeros q NO son enteros (1.1 'hola mundo' ...)
  if (!Number.isInteger(numero)) return false;

  // Iterar desde 2 hasta la raíz cuadrada del número
  for (let i = 2, s = Math.sqrt(numero); i <= s; i++) {
    // El numero NO es primo cuando el indice i es divisible por el numero
    if (numero % i === 0) return false;
  }

  // NO son primos los numeros MENORES a 2 (1, 0, -1, -2 ...)
  return numero > 1; // else { return num > 1; }
};

// .find() Devuelve undefined porq NO hay numeros primos en el array
console.log([-1, 0, 1, 2.1].find(esPrimo));
// undefined

/* 0 NO es primo,
el resto de los numeros 2, 3, 5 SI son primos

.find() 2 Es el PRIMER numero primo de izquierda a derecha en el array */
console.log([0, 2, 3, 5].find(esPrimo)); // 2
//              ↑

// Esta es otra forma de llamar la () => {} funcion flecha esPrimo()
console.log(esPrimo(0)); // false -> 0 NO es primo
console.log(esPrimo(2)); // true  -> 2 SI es primo

/* ------------------------------------------------------------ */

/* Ejemplo 7 - Metodo de Array .find() en objetoLiteral {}
El método .find() lee la propiedad length de this
y luego accede a cada índice entero.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#calling_find_on_non-array_objects */

// objetoLiteral {} con numeros decimales en sus valores
const objetoLiteral = {
// propiedad: valor,
  0: 4,
  1: 5.3, // 5.3 PRIMER valor del objetoLiteral {} que NO es un numero entero
  2: 6,
  3: 7.1, // 7.1 NO porq es el segundo
};
console.log(objetoLiteral);
/*
{
  0: 4,
  1: 5.3,
  2: 6,
  3: 7.1
}
*/

/* Object.keys() convertir a array las propiedades (claves) del objetoLiteral {}
   .length Numero de propiedades (claves) del objetoLiteral {}
   https://stackoverflow.com/questions/4690520/javascript-object-literal-length-undefined */
const longitud = Object.keys(objetoLiteral).length;
console.log(longitud);
// 4

// Añadir una nueva propiedad: valor, al objetoLiteral {}
objetoLiteral.length = longitud;
console.log(objetoLiteral);
/*
{
  '0': 4,
  '1': 5.3,
  '2': 6,
  '3': 7.1,
  length: 4
}
*/

// .find() Buscar el PRIMER valor del objetoLiteral {} que NO es un numero entero
const noEntero = Array.prototype.find.call(objetoLiteral, (valorObjeto) => !Number.isInteger(valorObjeto));
console.log(noEntero);
// 5.3
