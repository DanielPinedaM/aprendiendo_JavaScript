// @ts-nocheck

/*
delete Eliminar propiedad: valor, de Objeto Literal {} y Elemento de Array [] 

Documentación Oficial - Operador delete Eliminar:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

El operador delete elimina lo siguiente:
- propiedad: valor, de un objeto literal {}

- Elemento de un array [] q se encuentra en una posicion (indice) en especifico

Si el valor de la propiedad es un objeto
y no hay más referencias al objeto, 
el objeto de esa propiedad finalmente se libera automáticamente.

Recordatorio:
Ver:
- " Ejemplo 4 - configurable: - ¿Puedo cambiar el valor de las propiedades value: writable: y enumerable: ? "

- " 12.1.5.2.14) Diferencias y Similitudes Entre .hasOwnProperty() (Mala Práctica) y Object.hasOwn() (Buena Práctica) - ¿Si Existe o no la Propiedad Propia (NO Heredada) en el Objeto "

SIEMPRE q delete devuelva false 
significa q NO se elimino la propiedad del objeto o elemento del array,
hay casos en los q delete devuelve true pero en realidad NO se elimina, ver:
" Ejemplo 1 - Eliminar propiedad: valor, de objetoLiteral NO anidado "
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#using_delete

delete NO elimina las propiedades privadas:
delete identifier;
delete object.#propiedadPrivada;

delete en JS NO libera directamente la memoria,
para mas informacion ver:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management

https://docs.microsoft.com/cpp/cpp/delete-operator-cpp?view=msvc-170

delete devuelve false  
y NO elimina la propiedad: valor, del objeto literal 
o elemento del array
cuando se cumplen todos estos casos:
1) .hasOwn() la propiedad del objeto literal es una propiedad propia (NO heredada)

2) configurable: false la propiedad del objeto literal NO es configurable
Ver:
" Ejemplo 7 - configurable: false, y delete "

3) JS esta en modo NO estricto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#return_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#configurable_attribute

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

delete da error cuando:
- JS esta en modo estricto "use strict";

- la propiedad es una propiedad directa 

- configurable: false la propiedad del objeto literal NO es configurable 

- la propiedad del objeto literal es propia, es decir,
el objeto NO fue creado con Object.create() 

- Se usa la palabra reservada super en el nombreObjeto 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#exceptions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

Sintaxis:
delete nombreObjeto.nombrePropiedad
delete nombreObjeto[nombrePropiedad]

nombreArray[numeroIndice]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#syntax

Donde...
- nombreObjeto
Nombre del objeto literal al q le quiero eliminar la propiedad: valor,

- nombrePropiedad
Nombre propiedad q contiene la propiedad: valor q se elimina en el objeto literal

- nombreArray
Nombre del array al q le quiero eliminar el elemento

- numeroIndice
Numero de posicion (indice) donde se encuentra el elemento a eliminar en el array
*/

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Eliminar propiedad: valor, de objetoLiteral NO anidado
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#try_it */

const objetoLiteral = {
// propiedad: valor,
  uno: 1, // propiedad: valor, a eliminar delete
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

// Acceder al valor de la propiedad uno
console.log(objetoLiteral.uno);
// 1

// delete del objetoLiteral eliminar uno: 1,
console.log(delete objetoLiteral.uno);
// true

// Se ha modificado el objetoLiteral
console.log(objetoLiteral);
/*
{
  dos: 2,
  tres: 3
}
*/

// undefined porq la propiedad uno NO existe en el objetoLiteral
console.log(objetoLiteral.uno);
// undefined

/* NO se elimina ninguna propiedad: valor, porq
la propiedadInexistente NO existe en el objetoLiteral
y delete devuelve true */
console.log(delete objetoLiteral.propiedadInexistente);
// true

console.log(objetoLiteral);
/*
{
  dos: 2,
  tres: 3
}
*/

/* --------------------------------------------------------------- */

// Ejemplo 2 - Eliminar propiedad: valor, de objeto literal anidado

// Objeto q contiene objetos
const objetoAnidado = {
  impar: { // propiedad: valor, a eliminar delete
    uno: 1,
    tres: 3,
  },
  par: {
    dos: 2,
    cuatro: 4,
  },
};
console.log(objetoAnidado);
/*
{
  impar: {
    uno: 1,
    tres: 3,
  },
  par: {
    dos: 2,
    cuatro: 4,
}
*/

// Acceder al valor de la propiedad impar
console.log(objetoAnidado.impar);
/*
{
  uno: 1,
  tres: 3
}
*/

// delete del objetoAnidado eliminar la propiedad impar y sus valores
console.log(delete objetoAnidado.impar);
// true

console.log(objetoAnidado);
/*
{
  par: {
    dos: 2,
    cuatro: 4,
  }
}
*/

// undefined porq la propiedad impar NO existe en el objetoAnidado
console.log(objetoAnidado.impar);
// undefined

/* --------------------------------------------------------------- */

/* Ejemplo 3:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#deleting_array_elements

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays

Al eliminar con delete elementos del array:
1) La longitud .length del array NO cambia

2) Los elementos eliminados son reemplazados por un elemento disperso [,]

Eliminar el elemento "uno" q esta en la posicion (indice) 0 */

const array = ["uno", "dos", "tres"];
//              0       1       2 -> POSICION (INDICE)
//              ↑
console.log(array);
// (3) ['uno', 'dos', 'tres']     -> ELEMENTO

// Originalmente la longitud .length es 3
console.log(array.length);
// 3

/* 
Recordatorio:
Ver:
" 8.5.3.4) Resumen: Diferencia Entre [] .at() .charAt() - Acceder a una Posición (Índice) de un Carácter (String) / Elemento (Array) en Especifico " 

Acceder al elemento q esta en la posicion (indice) 0 */
console.log(array.at(0)) // 'uno'
console.log(array[0])    // 'uno'

/* delete NO elimina ningun elemento 
del array porq estoy usando .at() */
console.log(delete array.at(0)) // true -> .at()
console.log(array);             // (3) ['uno', 'dos', 'tres']

/* para q delete funcione se tiene q usar la notacion de corchetes []

El elemento eliminado se reemplaza 
por un elemento disperso [,] <1 empty item> */
console.log(delete array[0]) // true -> notacion de corchetes []
console.log(array);          // (3) [ <1 empty item>, 'dos', 'tres' ]

/* es por esto q la longitud .length del array NO cambia,
sigue siendo 3 */
console.log(array.length);
// 3

/* 
Stack Overflow - Eliminar elementos vacios de array []
https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript

Recordatorio:
Ver:
" 4.3.1.3.2) Falsy (Falso) "

Boolean elimina los elementos q son false */

const eliminarVacio = array.filter(Boolean)
console.log(eliminarVacio);
// (2) ['dos', 'tres']

/* despues de .filter() SI cambia la longitud .length
porq elimine los elementos dispersos [,] <empty item> */
console.log(eliminarVacio.length);
// 2

/* --------------------------------------------------------------- */

/* Ejemplo 4:
delete NO elimina:
- Las variables definidas con var, let y const q son datos primitivos

- Parametros de funciones

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#using_delete

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#deleting_non-configurable_properties */

let variable = "hola mundo";

/* Error de análisis: 
eliminación de la variable local en modo estricto

delete devuelve false lo q significa q NO se elimino la variable */
console.log(delete variable); // false
console.log(variable);        // "hola mundo"

variable = Math.PI;
console.log(delete variable); // false
console.log(variable);        // 3.141592653589793

function funcion(n) {
  const variable = n;

  // delete NO elimina las variables locales
  console.log(delete n) //false
  console.log(n);       // 1
}
funcion(1) // ejecutar funcion

/* --------------------------------------------------------------- */

/* Ejemplo 5:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#description */

// delete Imprime 1 y true pero NO se esta eliminando nada
delete console.log(1);
// 1
// true

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Operador delete en Propiedades Heredadas Creadas con Object.create()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#delete_and_the_prototype_chain */

/* obj1 objeto original con 
propiedades propias (NO heredadas) */
const obj1 = { 
  uno: 1, 
  dos: 2 
}
console.log(obj1);
/*
{ 
  uno: 1,
  dos: 2 
}
*/

/* Object.create() obj2 q hereda las propiedades y metodos de obj1

CADENA DE PROTOTIPOS: 
obj1 -> obj2 */
const obj2 = Object.create(obj1)
console.log(obj2)
/* 
{ 
  __proto__: { 
               uno: 1, 
               dos: 2 
             } 
}
*/

/* delete NO elimina las propiedades heredadas creadas con Object.create()

La propiedad: valor, obj2.uno NO se elimina del obj2 porq es heredada */
delete obj2.uno   // true
console.log(obj2) // { __proto__: { uno: 1, dos: 2 } }

/* delete SI elimina las propiedades 
propias (NO heredadas) q NO son creadas con Object.create()

Al eliminar obj1.uno tambien se elimina obj2.uno

eliminar obj1.uno del prototipo */
delete obj1.uno   // true
console.log(obj1) // { dos: 2 }
console.log(obj2) // { __proto__: { dos: 2 } }

/* --------------------------------------------------------------- */

/* Ejemplo 7 - configurable: false, y delete
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#deleting_non-configurable_properties

Recordatorio:
Ver:
" Ejemplo 4 - configurable: - ¿Puedo cambiar el valor de las propiedades value: writable: y enumerable: ? " */

// crear objetoLiteral vacio {}
const objetoLiteral2 = {};
console.log(objetoLiteral2);
// {}

Object.defineProperty(
  objetoLiteral2, "name", 
  { 
    configurable: false, // configurable: false, propiedad name NO configurable
    enumerable: true     // enumerable: true,    permitie ver propiedad: valor, al imprimirla por consola
  }
);
console.log(objetoLiteral2);
// { name: undefined }

/* La propiedad objetoLiteral2.name NO se elimina
porq el operador delete NO elimina propiedad: valor
q NO son configurable configurable: false, */
console.log(delete objetoLiteral2.name);  // false
console.log(objetoLiteral2);              // { name: undefined }

/* --------------------------------------------------------------- */

/* Ejemplo 8 - globalThis y delete 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete#deleting_global_properties

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

Si una propiedad global es configurable 

Ejemplo:
A través de la asignación directa de propiedades

Se puede eliminar y las referencias posteriores a ellas 
como variables globales producirán un error ReferenceError */

globalThis.globalVar = 1;
console.log(globalVar); 
// 1

/* En modo NO estricto "use strict"; 
también puede usar `delete globalVar` */
console.log(delete globalThis.globalVar); // true
console.log(delete globalVar)             // true

console.log(globalVar);                   // ReferenceError: globalVar no esta definido
