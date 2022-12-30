/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-sparse-arrays */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable indent */
// @ts-nocheck

/* Tutorial:
https://youtu.be/en5f0sYFJZE

Documentacion Oficial - .find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

.find() Primer Elemento que Coincide con la Condicion de la Función

.find() devuelve el PRIMER ELEMENTO
que cumple con la condicion de la funcion return,
en caso de que NO se encuentre el elemento buscado
entonces devuelve undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#return_value

.find() NO modifica el array original (existente)

Alternativas al metodo .find():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#try_it
- Usar .indexOf ó .findIndex()
  para encontrar el PRIMER NUMERO
  de POSICION (INDICE)
  del elemento buscado en un array

- Usar .includes() para saber
  cuando un elemento
  si existe o no en un array

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

La funcion tiene los siguientes argumentos:

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

/* Ejemplo 5 - Buscar por propiedad un objeto literal {} que esta dentro de un array de objetos [{}]

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

Usando .find() encontrar el PRIMER numero primo de un array,
en caso de que en el array no existan numeros primos entonces devolver undefined

Recordatorio:
Ver:
" Ejemplo 7 - Usando .filter() encontrar TODOS los números primos q están en un array: "
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#find_all_prime_numbers_in_an_array

Un numero primo...
1) Es un numero ENTERO MAYOR Q 1,
   por lo tanto el 0, 1, los numeros negativos y decimales NO son primos

2) Es divisible solamente por 1 y por si mismo

Ejemplo:
2 es un numero primo porque:
2 > 1     -> 2 es MAYOR Q 1
2 / 1 = 2 -> 2 es divisible por 1
2 / 2 = 1 -> 2 "              " si mismo */

const numeroPrimo = (elemento, i, array) => {
  // Los numeros decimales NO son primos
  if (!Number.isInteger(elemento)) {
    return false;
  }

  /* empezar es un contador (i),
  empezar = 2 porq los numeros primos
  son un numero ENTERO MAYOR Q 1 */
  let empezar = 2;
  /* Iterar array mientras q
  la variable empezar
  sea menor o igual q
  la raiz cuadrada Math.sqrt() del elemento actual */
  while (empezar <= Math.sqrt(elemento)) {
    /* El numero (elemento) NO es primo cuando
    es divisible por el contador empezar */
    if (elemento % empezar++ < 1) {
      return false;
    }
  }

  /* Los numeros primos se encuentran
  despues de iterar el array con while () {} */
  return elemento > 1; // else { return true }
};

/* 1) Llamar funcion numeroPrimo() usando el metodo .find()

Devuelve undefined porq NO hay numeros primos en el array */
console.log([-1, 0, 1, 1.1].find(numeroPrimo)); // undefined

/* 0 NO es primo,
el resto de los numeros 2, 3, 5 SI son primos

2 Es el PRIMER numero primo de izquierda a derecha en el array */
console.log([0, 2, 3, 5].find(numeroPrimo)); // 2
//              ↑

// 2) Otra forma de llamar la () => {} funcion flecha numeroPrimo() es:
console.log(numeroPrimo(0)); // false -> 0 NO es un numero primo
console.log(numeroPrimo(2)); // true  -> 2 SI "                "

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
  3: 7.1,
}
*/

/* Object.keys() convertir a array las propiedades (claves) del objetoLiteral {}
   .length Numero de propiedades (claves) del objetoLiteral {} */
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
