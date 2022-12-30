/* eslint-disable max-len */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-plusplus */
/* eslint-disable no-sparse-arrays */
// @ts-nocheck

/* Documentacion Oficial - .forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

.forEach() Recorrer (Iterar) Array y Ejecutar una Función para Cada Elemento

La funcion se ejecuta una sola vez para cada elemento del array

.forEach() puede crear una nueva copia del array original (existente),
pero para esto debería usarse los otros métodos de array que son:

Recordatorio:
Ver:
" 9.4.3.1) Resumen: Diferencia Entre .forEach() .map() .filter() .reduce() .find()s "

.forEach() NO tiene valor de retorno return,
siempre retorna undefined

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#description

Su sintaxis es:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#syntax */

// Funcion Flecha (Arrow Function):
// .forEach((element, index, array) => { /* … */ })

// Función Retrollamada (Callback Function):
// .forEach(callbackFn, thisArg)

// Función Retrollamada en una Sola Línea (Inline Callback Function):
// .forEach(function (element, index, array) { /* … */ }, thisArg)

/*
Donde...
- .forEach()
Es el nombre del metodo

- callbackFn
* Es una funcion que se ejecuta una sola vez
  para cada uno de los elementos del array

* NO tiene valor de retorno return

La funcion .forEach() tiene los siguientes argumentos:

- element
Es el elemento actual del array
q cambia dependiendo de la posicion del array

- index
* Numero de posicion (indice) actual del array

* Empieza en 0 y termina en la ultima posicion del array
q la puedo obtener con la propiedad array.length - 1

- array
Es el array para el que se ejecuta el metodo (funcion) .forEach()

- thisArg
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

* Es opcional

* Es un valor para usar como this al ejecutar la funcion callbackFn */

/*
DIFERENCIAS Y SIMILITUDES ENTRE .forEach() Y for () {}

SIMILITUDES:
- Ambos .forEach() y for () {}
  sirven para recorrer (iterar) arrays

- Con ambos .forEach() y for () {}
  puedo ejecutar codigo
  para cada uno de los elementos del array

- Con ambos .forEach() y for () {}
  puedo obtener el mismo resultado, ver:
  " Ejemplo 5 - for () {} y .forEach() "

DIFERENCIAS:
- .forEach() es un METODO de array,
  en cambio for () {} es un BUCLE (ciclo, estructura de control)

- .forEach() SOLAMENTE sirve iterar array,
  en cambio for () {} se puede usar con CUALQUIER tipo de dato

- .forEach() se ejecuta para TODOS los elementos del array
  y NO se puede detener su iteracion,
  si necesito detener la iteracion entonces usar:
  * for () {}
  * for of
  * for in
  * every()
  * some()
  * find()
  * findIndex()

  en cambio  NO necesariamente,
  porque se puede detener su  con

- forEach() NO sirve con la palabra clave await,
  en cambio for () {} SI */

//  - Su sintaxis es diferente:
//  . forEach((element, index, array) => { /* … */ })
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#syntax

// for (initialization; condition; afterthought) {
// statement
// }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#syntax

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Modificar el array original (existente) usando .forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#modifying_the_array_during_iteration

Puedo hacer que .forEach() MODIFIQUE (mute) el array original (existente),
dependiendo de lo que escriba dentro del par de parentesis () del metodo */

/* El array original (existente)
tiene 2 elementos que son circulo '●' */
const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* .forEach() iterar array

POR CADA circulo '●' q haya en el array
eliminar el PRIMER elemento del array,
como en el array hay un solo circulo '●'
entonces se elimina una sola vez
el PRIMER elemento del array */
figuras.forEach((elemento) => {
  if (elemento === '●') {
    console.log(`se ha eliminado el elemento '${figuras[0]}'`);
    figuras.shift();
  }
});
// se ha eliminado el elemento '▲'

// Array modificado
console.log(figuras);
// (3) ['●', '✖', '■']

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Recorrer (iterar) array usando el metodo .forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#try_it */

const figuras2 = ['▲', '●', '✖', '■'];
console.table(figuras2);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  '▲'   │
│    1    │  '●'   │
│    2    │  '✖'   │
│    3    │  '■'   │
└─────────┴────────┘
Array(4)
*/

const iterar = figuras2.forEach((elemento, i) => {
  console.log(`i=${i} | elemento='${elemento}'`);

  /* Aqui se escribe el codigo q se ejecuta una sola vez
  para cada uno de los elementos del array */
});
/*
i=0 | elemento='▲'
i=1 | elemento='●'
i=2 | elemento='✖'
i=3 | elemento='■'
*/

/* La variable iterar es undefined
porque el metodo .forEach()
NO devuelve ningún valor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#return_value */
console.log(iterar);
// undefined

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Array Disperso (Sparse Array) [,] y Método .forEach()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#using_foreach_on_sparse_arrays

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#printing_the_contents_of_an_array */

// La posicion (indice) 1 tiene una ranura vacia (empty item) [,]
const arrayDisperso = [1, , 3];
console.log(arrayDisperso);
// (3) [ 1, <1 empty item>, 3 ]

// Recorrer (iterar) array usando .forEach()
arrayDisperso.forEach((elemento, i) => {
  console.log(`i=${i} | elemento=${elemento}`);
});

/* .forEach() NO itera las ranuras vacias de los array dispersos [,],
en otras palabras: .forEach() ignora las ranuras vacias

Esto lo compruebo porq
NO se esta imprimiendo la posicion 1
q tiene la ranura vacia: */

/*
i=0 | elemento=1
i=2 | elemento=3
*/

/* --------------------------------------------------------------- */

/* Ejemplo 4 - .forEach() NO funciona con promesas NI funciones asíncronas

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#composition */

// Array con numeros del 1 al 3:
const numeros = [1, 2, 3];
console.table(numeros);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
└─────────┴────────┘
Array(3)
*/

/* Variable q contiene el resultado
de sumar los elementos del array anterior */
let acumuladorSuma = 0;
console.log(acumuladorSuma);
// 0

// Funcion asincrona async para sumar el array
const sumFunction = async (a, b) => a + b;
console.log(sumFunction);
// [AsyncFunction: sumFunction]

// .forEach()
numeros.forEach(async (elemento) => {
  acumuladorSuma = await sumFunction(acumuladorSuma, elemento);
});

/* El resultado correcto es 1+2+3 = 6,
pero se obtiene 0 porq
.forEach() NO funciona con promesas NI funciones asíncronas */
console.log(acumuladorSuma);
// 0

/* --------------------------------------------------------------- */

/* Ejemplo 5 - for () {} y .forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#converting_a_for_loop_to_foreach */

// Array original (existente)
console.log(numeros);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
└─────────┴────────┘
Array(3)
*/

// Array vacio []
let copiarArray = [];
console.log(copiarArray);
// []

/* Usando for () {} copiar los elementos
   del array llamado numeros a copiarArray */
for (let i = 0; i < numeros.length; i++) {
  copiarArray.push(numeros[i]);
}

/* Ahora los array numeros y copiarArray
   tienen los mismos elementos: */
console.log(copiarArray);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
└─────────┴────────┘
Array(3)
*/

// Vaciar array []
copiarArray = [];
console.log(copiarArray);
// []

// Hacer lo mismo pero con .forEach()
numeros.forEach((elemento) => copiarArray.push(elemento));
console.log(copiarArray);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
└─────────┴────────┘
Array(3)
*/

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Sumar los numeros (elementos) de un array en una clase class {} con el metodo .forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#using_thisarg */

// class {} clase Counter
class Counter {
  // constructor con propiedades sumar y contador
  constructor() {
    this.sumar = 0;
    this.contador = 0;
  }

  // Metodo add() q recibe como argumento un array
  add(array) {
    /* Solo las expresiones de función function () {}
    tendrán su propio enlace this

   .forEach() itera el array y ejecuta la funcion countEntry()
    para todos los elementos del array */
    array.forEach(function countEntry(elemento) {
      /* Dentro de la funcion countEntry()
      this hace referencia a la instancia de la clase Counter

      acumulador: Sumar los numeros (elementos) de un array */
      this.sumar += elemento;

      // contador: Numero de veces q se ejecuta el .forEach()
      ++this.contador;
    }, this);
  }
}

/* Llamar clase Counter
y asignarle la variable objeto (instanciar clase) */
const objeto = new Counter();
console.log(objeto);
// Counter { sumar: 0, contador: 0 }

/* sumar = 2+5+9 = 16 -> sumar elementos (numeros) del array en una clase
   contador = 3 porq el array tiene 3 elementos */
objeto.add([2, 5, 9]);
console.log(objeto);
// Counter { sumar: 16, contador: 3 }

// Imprimir los valores del objeto {}
console.log(objeto.contador); // 3
console.log(objeto.sumar);    // 16

/* --------------------------------------------------------------- */

/* Ejemplo 7 - Copiar un objetoLiteral1 {} a otro objetoLiteral2 {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#an_object_copy_function */

// Funcion q hace una copia de un objeto {}
const funcionCopiarObjeto = (obj) => {
  /* Object.create() crear objeto vacio usando obj como prototipo
  Object.getPrototypeOf() prototipo del obj -> propiedad interna [[Prototype]] */
  const copy = Object.create(Object.getPrototypeOf(obj));
  console.log(copy);
  // {}

  // Array [] con las propiedades del objeto {}
  const propNames = Object.getOwnPropertyNames(obj);
  console.log(propNames);
  // [ 'a', 'b' ]

  // .forEach() Iterar las propiedades del  objeto original (existente)
  propNames.forEach((name) => {
    // Descripcion de las propiedades del objeto
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    console.log(desc);
    /*
    { value: 1, writable: true, enumerable: true, configurable: true }
    { value: 2, writable: true, enumerable: true, configurable: true }
    */

    // Definir o modificar una propiedad del objeto {}
    Object.defineProperty(copy, name, desc);
  });

  // Devolvemos el objeto vacío que hemos rellenado con las propiedades del objeto original
  return copy;
};

// Copiar objetoLiteral1 en objetoLiteral2
const objetoLiteral1 = { a: 1, b: 2 };
// console.log(objetoLiteral1);
/*
{
  a: 1,
  b: 2
}
*/

// Ejecutar funcionCopiarObjeto()
const objetoLiteral2 = funcionCopiarObjeto(objetoLiteral1);
console.log(objetoLiteral2);
/*
{
  a: 1,
  b: 2
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 8 - Aplanar array usando .forEach() (Mala Practica)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#flatten_an_array

Este ejemplo es solo por aprender,
la forma correcta (buena practica) de aplanar un array
es con el metodo .flat() */

// Funcion flecha para aplanar array
const flat = (array) => {
  // Variable donde guardo el array aplanado
  const resultado = [];

  // .forEach() iterar array
  array.forEach((elemento) => {
    // SI el elemento actual es un array
    if (Array.isArray(elemento)) {
      /* entonces, usando el spread operator (...)
      añadir TODOS los elementos de un array
      al final de otro array */
      resultado.push(...flat(elemento));
    } else { // cuando el elemento actual NO es un array
      /* entonces,
      añadir UN SOLO elemento al final de un array */
      resultado.push(elemento);
    }
  });

  // Retornar array aplanado
  return resultado;
};

// Ejecutar funcion flat()
const arrayAnidado = [1, [2, 3], 4];
console.log(arrayAnidado);
// (3) [ 1, [ 2, 3 ], 4 ]

const arrayAplanado = flat(arrayAnidado);
console.log(arrayAplanado);
// (4) [1, 2, 3, 4]

/* --------------------------------------------------------------- */

/* Ejemplo 9 - Metodo de array .forEach() en objetoLiteral {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#calling_foreach_on_non-array_objects */

const objetoLiteral = {
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

/* Object.keys() convertir a array [] las propiedades (claves) del objetoLiteral {}

.forEach() Recorrer (iterar) objetoLiteral {} */
Object.keys(objetoLiteral).forEach((propiedad) => {
  const valor = objetoLiteral[propiedad];
  console.log(`${propiedad} : ${valor}`);
});
/*
uno : 1
dos : 2
tres : 3
*/
