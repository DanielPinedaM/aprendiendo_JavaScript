/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-self-compare */
// @ts-nocheck

/*
Diferencias y Similitudes Entre
Object.freeze() Object.seal() y Object.preventExtensions()
Objeto Inmutable (que NO se Puede Modificar)

Jayanth Babu - Diferencia Entre Object.freeze() Object.seal() y Object.preventExtensions()...
https://javascript.plainenglish.io/object-freeze-vs-object-seal-vs-object-preventextensions-e78ef3a24201

Documentacion Oficial...
- Object.freeze()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

- Object.seal()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

- Object.preventExtensions()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

                                                         |-----------------------------|---------------------------|----------------------------------------|
                                                         | Object.freeze()             | Object.seal()             | Object.preventExtensions()             |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Hace que el objeto literal {}                         | ✓                           | ✓                         | ✓                                      |
| sea inmutable (que NO se pueda modificar)              |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Permite MODIFICAR                                     | X                           | ✓                         | ✓                                      |
| el valor de la propiedad?                              |                             |                           |                                        |
|                                                        |                             |                           |                                        |
| nombreObjeto.nombrePropiedadExistente = 'nuevo valor'; |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Permite ELIMINAR                                      | X                           | X                         | ✓                                      |
| propiedad: valor, ?                                    |                             |                           |                                        |
|                                                        |                             |                           |                                        |
| delete nombreObjeto.nombrePropiedadExistente;          |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| ¿Permite AGREGAR                                       | X                           | X                         | X                                      |
| una nueva propiedad: valor, ?                          |                             |                           |                                        |
|                                                        |                             |                           |                                        |
| nombreObjeto.nombreNuevaPropiedad = 'nuevo valor';     |                             |                           |                                        |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|
| Sintaxis                                               | Object.freeze(nombreObjeto) | Object.seal(nombreObjeto) | Object.preventExtensions(nombreObjeto) |
|--------------------------------------------------------|-----------------------------|---------------------------|----------------------------------------|

Recordatorio:
Ver:
" 4.2.6) Re-asignar, Mutable e Inmutable "

La sintaxis de Object.freeze() es:
Object.freeze(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#syntax

La sintaxis de Object.seal() es:
Object.seal(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal#syntax

La sintaxis de Object.preventExtensions() es:
Object.preventExtensions(nombreObjeto)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions#syntax

Donde...
- Object.freeze() Object.seal() y Object.preventExtensions()
Es el nombre del metodo

- nombreObjeto
Es el nombre de la variable del objeto literal {} */

/* --------------------------------------------------------------- */

// Ejemplo 1 - Diferencia Entre Object.freeze() Object.seal() y Object.preventExtensions()

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.freeze() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
let inmutable = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

// Congelar objeto literal {}
Object.freeze(inmutable);

// MODIFICAR valor 1 de la propiedad 'uno'
inmutable.uno = 'nuevo valor'; // NO hace nada, el valor sigue siendo 1

// ELIMINAR propiedad: valor,
delete inmutable.dos;          // NO hace nada, la propiedad: valor, dos: 2, sigue existiendo

// AGREGAR una nueva propiedad: valor,
inmutable.cuatro = 4;          // NO hace nada, NO agrega cuatro: 4, al objeto literal

console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.seal() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
inmutable = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

Object.seal(inmutable);

inmutable.uno = 'nuevo valor'; // el valor se MODIFICA a uno: 'nuevo valor',
delete inmutable.dos;          // NO hace nada, la propiedad: valor, dos: 2, sigue existiendo
inmutable.cuatro = 4;          // NO hace nada, NO agrega cuatro: 4, al objeto literal

console.log(inmutable);
/*
{
  uno: 'nuevo valor',
  dos: 2,
  tres: 3
}
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Object.preventExtensions() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */
inmutable = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(inmutable);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

Object.preventExtensions(inmutable);

inmutable.uno = 'nuevo valor'; // el valor se MODIFICA a uno: 'nuevo valor',
delete inmutable.dos;          // se ELIMINA dos: 2,
inmutable.cuatro = 4;          // NO hace nada, NO agrega cuatro: 4, al objeto literal

console.log(inmutable);
/*
{
  uno: 'nuevo valor',
  tres: 3
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Crear Array Inmutable Usando Object.freeze()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#freezing_arrays */

const array = [1, 2, 3];
console.log(array);
// (3) [1, 2, 3]

/* Object.freeze() congela el array,
hace q el array sea inmutable

Hacer una copia de array en variable inmutable2
y agregarle un nuevo elemento 4 */
const inmutable2 = Object.freeze([...array, 4]);
console.log(inmutable2);
// (4) [1, 2, 3, 4]

/* Las siguientes lineas de codigo dan ERROR
porq el array inmutable2 NO se puede modificar (es INMUTABLE) */
// console.log(inmutable2.unshift(0)); // agregar un nuevo elemento (numero) 0 al PRINCIPIO del array
// console.log(inmutable2.push(5));    // agregar un nuevo elemento (numero) 5 al FINAL del array
// console.log(inmutable2.shift());    // eliminar el PRIMER elemento del array
// console.log(inmutable2.pop());      // eliminar el ULTIMO elemento del array
// console.log(inmutable2.reverse());  // invertir (voltear) el orden de los elementos del array

console.log(inmutable2);
// (4) [1, 2, 3, 4]

/* El array llamado inmutable2 NO se puede modificar,
la unica forma de modificarlo es crear una copia del array
y modificar la copia del array */
const mutable = [...inmutable2, 5];
console.log(mutable);
// (5) [1, 2, 3, 4, 5]

/* ----------------------------------------------------------------- */

/* Ejemplo 3 - Comparar objeto literal {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#freezing_objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal#using_object.seal

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions#using_object.preventextensions */

const inmutable3 = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(inmutable3);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

/* El objeto inmutable3 es exactamente el mismo === que se crea con
Object.freeze() Object.seal() y Object.preventExtensions() */

// Object.freeze()
const freeze = Object.freeze(inmutable3);
console.log(inmutable3 === freeze);
// true

// Object.seal()
const seal = Object.seal(inmutable3);
console.log(inmutable3 === seal);
// true

// Object.preventExtensions()
const preventExtensions = Object.preventExtensions(inmutable3);
console.log(inmutable3 === preventExtensions);
// true

/* ----------------------------------------------------------------- */

/* Ejemplo 4 - Hacer inmutable objeto literal anidado { {} } (congelacion profunda)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#freezing_arrays

https://en.wikipedia.org/wiki/Cycle_(graph_theory) */

// Originalmente estas son las propiedad: valor, del objetoAnidado
let objetoAnidado = {
// propiedad: valor,
  a: { b: 'c' },
};
console.log(objetoAnidado);
/*
{
  a: { b: 'c' }
}
*/

/* Object.freeze() tiene un problema:
NO hace inmutables los objetos literales anidados { {} } */
Object.freeze(objetoAnidado);

/* Esto lo compruebo porq
puedo agregar una nueva propiedad: valor, d: 'e'
dentro del objeto literal anidado { {} } */
objetoAnidado.a.d = 'e';
console.log(objetoAnidado);
/*
{
  a: {
       b: 'c',
       d: 'e'
     }
}
*/

// Hacer q objetoAnidado tenga las propiedad: valor, originales
objetoAnidado = {
// propiedad: valor,
  a: { b: 'c' },
};
console.log(objetoAnidado);
/*
{
  a: { b: 'c' }
}
*/

// Funcion para objetoAnidado inmutable
const congelacionProfunda = (object) => {
  // Obtener los nombres de las propiedades del objeto {}
  const propNames = Reflect.ownKeys(object);

  // Congelar propiedades antes de auto-congelarse
  for (const name of propNames) {
    const value = object[name];

    if ((value && typeof value === 'object') || typeof value === 'function') {
      congelacionProfunda(value);
    }
  }

  return Object.freeze(object);
};

/* Despues de ejecutar (invocar, llamar)
la funcion congelacionProfunda()
NO puedo modificar el objetoAnidado */
congelacionProfunda(objetoAnidado);

objetoAnidado.a = 'nuevo valor'; // NO hace nada, el valor sigue siendo { b: 'c' }
delete objetoAnidado.a;          // NO hace nada, la propiedad: valor, a: { b: 'c' } sigue existiendo
objetoAnidado.a.d = 'e';         // NO hace nada, NO agrega d: 'e' al objeto literal

console.log(objetoAnidado);
/*
{
  a: { b: 'c' }
}
*/

/* ----------------------------------------------------------------- */

/* Ejemplo 5 - Object.freeze() Object.seal() y Object.preventExtensions() en tipo de dato primitivo (q NO es objeto)

Recordatorio:
Ver:
" 4.2) Resumen: Definir Variables - ¿Diferencia y Cual Usar Entre var let y const?  "

Usar estos metodos en datos primitivos NO tiene sentido,
si quiero q un dato primitivo sea inmutable entonces defino la variable con const

Saber esto no es importante pero lo escribire para aprender:
La version de JS q usa NodeJS y todos los navegadores modernos es >= ES 6 (2015)

>= ES 6 (2015)
A PARTIR de ES 6 (2015) todos estos metodos devuelven el mismo dato primitivo

< ES 6 (2015)
ANTES al usar estos metodos con datos primitivos daba error

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal#non-object_argument

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions#non-object_argument */

const number = 123;
console.log(number);                           // 123
console.log(Object.freeze(number));            // 123
console.log(Object.seal(number));              // 123
console.log(Object.preventExtensions(number)); // 123
