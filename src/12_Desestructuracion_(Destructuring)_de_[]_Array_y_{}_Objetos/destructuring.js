/* eslint-disable one-var-declaration-per-line */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
/* eslint-disable indent */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Tutorial...
- Jon Mircha:
https://youtu.be/YTtZ9TUQ48E

- Fazt:
https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1820s

Desestructuración...
- Documentacion Oficial
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

- ESLint Airbnb:
https://airbnb.io/javascript/#destructuring

- JavaScript Info:
https://javascript.info/destructuring-assignment

Permite q cada una de las variables acceda a cada uno de:
- Los valores de un {} objeto literal

- Elementos del [] array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#description

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#syntax

|----------------------|---------------------------------------------------------------------------------------------------|
|        Tipo de       |                               Desestructuración de...                                             |
|  Desestructuración   |------------------------------------------|--------------------------------------------------------|
|                      |                array []                  |                       objeto {}                        |
|----------------------|------------------------------------------|--------------------------------------------------------|
| Patrón de Enlace     | const [a, b] = array;                    | const { a, b } = obj;                                  |
| (Binding Pattern)    | const [a, , b] = array;                  | const { a: a1, b: b1 } = obj;                          |
|                      | const [a = aDefault, b] = array;         | const { a: a1 = aDefault, b = bDefault } = obj;        |
|                      | const [a, b, ...rest] = array;           | const { a, b, ...rest } = obj;                         |
|                      | const [a, , b, ...rest] = array;         | const { a: a1, b: b1, ...rest } = obj;                 |
|                      | const [a, b, ...{ pop, push }] = array;  | const { [key]: a } = obj;                              |
|                      | const [a, b, ...[c, d]] = array;         |                                                        |
|----------------------|------------------------------------------|--------------------------------------------------------|
| Patrón de Asignación | let a, b, a1, b1, c, d, rest, pop, push; | ({ a, b } = obj);           // se requieren paréntesis |
| (Assignment Pattern) | [a, b] = array;                          | ({ a, b } = { a: 1, b: 2 }) // se requieren paréntesis |
|                      | [a, , b] = array;                        |                                                        |
|                      | [a = aDefault, b] = array;               | ({ a: a1, b: b1 } = obj);                              |
|                      | [a, b, ...rest] = array;                 | ({ a: a1 = aDefault, b = bDefault } = obj);            |
|                      | [a, , b, ...rest] = array;               | ({ a, b, ...rest } = obj);                             |
|                      | [a, b, ...{ pop, push }] = array;        | ({ a: a1, b: b1, ...rest } = obj);                     |
|                      | [a, b, ...[c, d]] = array;               |                                                        |
|----------------------|------------------------------------------|--------------------------------------------------------| */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Tipo de Desestructuración: Patrón de Enlace (Binding Pattern)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#binding_and_assignment

https://developer.mozilla.org/en-US/docs/Glossary/Binding

Sintaxis:
1) Empieza por la palabra reservada var, let o const para definir variables.

2) Propiedad o elemento individual al que se asocia cada una de las variables (desestructuración)

Se puede usar en:
- La variable de los bucles for...in for...of, for await...of
- Parámetros de función 
- catch

Recordatorio:
Ver:
" Ejemplo 8 - Diferencia entre catch y throw new TypeError() + Desestructuración en catch " */

const objetoLiteral = { 
  a: 1, 
  b: { c: 2 } 
};
console.log(objetoLiteral);
/*
{ 
  a: 1, 
  b: { c: 2 } 
}
*/

/* Desestructuracion:
Asociar variables a y d 
a valores del {} objetoLiteral */
const {
  a,
  b: { c: d },
} = objetoLiteral; // Sintaxis: const { a, b } = obj;

console.log(a); // 1
console.log(d); // 2

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Tipo de Desestructuración: Patrón de Asignación (Assignment Pattern)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#binding_and_assignment

Sintaxis:
1) NO empieza por la palabra reservada var, let o const para definir variables.

2) Cada propiedad desestructurada se asigna a un objetivo de asignación 
que anteriormente puede ser definido con var o let, 
o ser una propiedad de otro objeto,
en general, cualquier cosa que pueda aparecer 
en el lado izquierdo de una expresión de asignación. */

const numeros = [];
console.log(numeros);
// []

const objetoLiteral2 = { 
// propiedad: valor,
  a: 1, 
  b: 2 
};
console.log(objetoLiteral2);
/*
{ 
  a: 1, 
  b: 2 
};
*/

/* Desestructuración:
El VALOR de las propiedades a y b del {} objetoLiteral2
se asigna a los ELEMENTOS del [] array numeros */

let indiceCero = numeros[0];
console.log(indiceCero); // undefined

let indiceUno = numeros[1];
console.log(indiceUno); // undefined

// Sintaxis: ({ a: a1, b: b1 } = obj);
(
  { 
    a: indiceCero, 
    b: indiceUno,
  } = objetoLiteral2
);

console.log(numeros);
// (2) [ 1, 2 ]

// Con Object.values() obtengo el mismo resultado
const values = Object.values(objetoLiteral2)
console.log(values);
// (2) [ 1, 2 ]

/* ERROR: la variable numbers es definida 2 veces
la forma correcta es ({ a, b } = { a: 1, b: 2 }) */
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;
// Uncaught SyntaxError: Identifier 'numbers' has already been declared

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Desestructuración de [] Array:
https://youtu.be/YTtZ9TUQ48E

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring 

Guardar en cada variable, cada uno de los ELEMENTOS del ARRAY [] */

const letras = ['a', 'b', 'c'];
//               0    1    2    -> POSICIONES (INDICES)
//             zero  one  two   -> Desestructuración

console.log(letras);
// (3) ['a', 'b', 'c']

// SIN desestructuración (mala practica):
let cero = letras[0],
    uno = letras[1],
    dos = letras[2];

console.log(cero);      // 'a'
console.log(letras[0]); // 'a'

console.log(uno);       // 'b'
console.log(letras[1]); // 'b'

console.log(dos);       // 'c'
console.log(letras[2]); // 'c'

/* Desestructuración (buena practica):
Asignar a cada ELEMENTO del array [] un nombre de variable */
const [zero, one, two] = letras; // Sintaxis: const [a, b] = array;
//      0     1    2   -> POSICIONES (INDICES)

console.log(zero); // 'a'
console.log(one);  // 'b'
console.log(two);  // 'c'

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Desestructuración de {} Objeto Literal:
Guardar en cada variable, cada uno de los VALORES de las propiedades del {} OBJETO LITERAL
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring */

const persona = {
// propiedad: valor,
  miNombre: 'Daniel',
  apellido: 'Pineda',
  edad: 99,
};
console.log(persona);
/*
{
  nombre: "Daniel",
  apellido: "Pineda",
  edad: 99,
}
*/

/* Desestructuración:
Asignar a cada VALOR del objeto literal {} un nombre de variable

El orden de las variables puede ser diferente al de las propiedades */

let {                              // Sintaxis: const { a, b } = obj;
  apellido,
  miNombre,
  propiedadInexistente,            // Esta propiedad NO existe en el objeto literal {} persona
  edad,
} = persona;

console.log(miNombre);             // 'Daniel'
console.log(apellido);             // 'Pineda'
console.log(edad);                 // 99

/* Imprime undefined porq la propiedad llamada propiedadInexistente
NO existe en el objeto literal {} persona

Para q la desestructuracion funcione en los objetos literales {}
las propiedades y variables se tienen q llamar exactamente igual */
console.log(propiedadInexistente); // undefined

/* --------------------------------------------------------------- */

// Ejemplo 5:

// [] Array
const palabras = ['midu', 'conf', 'se', 'acerca'];
//                  0       1      2       3      -> POSICIONES (INDICES)

console.log(palabras);
// (4) ['midu', 'conf', 'se', 'acerca']

/* Desestructuración:
El numero q hay en la propiedad del objeto literal {}
hace referencia al indice del array [] */
const {
// propiedad: valor,
  0: nombre,
  1: evento,
  2: conector,
  3: ultimaPalabra,
  5: noExiste, // el array tiene 3 indices, NO 5
} = palabras;  // const { a: a1, b: b1 } = obj;

// Acceder a cada elemento del array [] con el nombre del valor del objeto literal {}
console.log(nombre);        // 'midu'
console.log(evento);        // 'conf'
console.log(conector);      // 'se'
console.log(ultimaPalabra); // 'acerca'

/* El [] array palabras tiene 3 indices,
un indice inexistente 5: noExiste, imprime undefined

Para q la desestructuracion funcione
los nombres (numeros) de las propiedades
tienen q ser los mismos q los indices del [] array */
console.log(noExiste);      // undefined

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Cambiar nombre de las propiedades del {} objeto literal en la desestructuracion:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring */

const obj = {
// propiedad: valor,
  direccion: 'calle 456',
  telefono: 123,
};
console.log(obj);
/*
{
  direccion: "calle 456",
  telefono: 123,
}
*/

const {                 // Sintaxis: const { a: a1, b: b1 } = obj;
  direccion,
  telefono: phone,      // re-nombrar propiedad telefono por phone
} = obj;
console.log(direccion); // 'calle 456'
console.log(phone);     // 123

/* ERROR: la variable telefono NO existe
porq le cambie el nombre a phone */
console.log(telefono);  // ❌ ReferenceError: telefono is not defined

/* --------------------------------------------------------------- */

// Ejemplo 7 - Recorrer (iterar) {} objeto literal usando desestructuracion:

const objetoLiteral3 = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
};
console.log(objetoLiteral3);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/

const entries = Object.entries(objetoLiteral3).map((entry) => {
  const [propiedad, valor] = entry; // Sintaxis: const [a, b] = array;
  console.log(`${propiedad} ➜ ${valor}`);

  return [propiedad, valor];
});
/*
'uno  ➜ 1'
'dos  ➜ 2'
'tres ➜ 3'
*/

console.log(entries);
/*
(3) [
      [ 'uno', 1 ],
      [ 'dos', 2 ],
      [ 'tres', 3 ]
    ]
*/

/* --------------------------------------------------------------- */

/* Ejemplo 8:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#try_it */

let a, b, rest;
[a, b] = [10, 20]; // Sintaxis: const [a, b] = array;
console.log(a);    // 10
console.log(b);    // 20

// a es 10, b es 20 y ...rest son los otros numeros restantes [30, 40, 50]
[a, b, ...rest] = [10, 20, 30, 40, 50]; // Sintaxis: const [a, b, ...rest] = array;
// (5) [ 10, 20, 30, 40, 50 ]

console.log(rest);
// (3) [30, 40, 50]

/* --------------------------------------------------------------- */

/* Ejemplo 9:
x   array []
y   primer  elemento del array []
x   segundo "                  "
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#description */

const x = [1, 2, 3, 4, 5];
const [y, z] = x; // Sintaxis: const [a, b] = array;

console.log(x);   // (5) [1, 2, 3, 4, 5]
console.log(y);   // 1
console.log(z);   // 2

/* --------------------------------------------------------------- */

/* Ejemplo 10:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#description */

const objeto = { c: 1, d: 2 };
console.log(objeto);     // { c: 1, d: 2 }

// ESTO (buena practica):
const { c, d } = objeto; // Sintaxis: const { a, b } = obj;
console.log(c);          // 1
console.log(d);          // 2

/*
ES LO MISMO Q ESTO (mala practica):
const c = obj.c;
const d = obj.d; */

/* --------------------------------------------------------------- */

/* Ejemplo 11 - Re-asignar (MUtar) variables usando desestructuración
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#binding_and_assignment

Recordatorio:
Ver:
" 4.2) Resumen: Definir Variables - ¿Diferencia y Cual Usar Entre var let y const? " */

const objetoLiteral4 = {
  A: 1,
  B: { C: 2 },
};
console.log(objetoLiteral4);
/*
{
  A: 1,
  B: { C: 2 }
}
*/

// ERROR: A es una constante const (INmutable) por lo q NO se puede re-asignar
const { A } = objetoLiteral4;
console.log(A);
// 1

A = 'hola mundo';
console.log(A);
// ❌ Uncaught TypeError: Assignment to constant variable

// D es re-asignable (MUtable) porque lo defini con let
let {
  B: { C: D },
} = objetoLiteral4;

console.log(D);   // 2
D = 'hola mundo';
console.log(D);   // 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 12 - Desestructuracion y valor por defecto:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

A cada propiedad del objeto literal {} 
o elemento del array []
se le puede asignar un valor por defecto
en la desestructuracion */

//         ↓
const [a = 1] = []; 
console.log(a); // 1

//          ↓
const { b = 2 } = { b: undefined }; 
console.log(b); // 2

//                      ↓
const { c = 3 } = { c: null };
console.log(c); // null

//                                             ↓
const { d = console.log("hola mundo") } = { d: 4 };
console.log(d); // 4

//          ↓
const { e = [] } = {};
console.log(e); // []

//                          ↓          ↓
const { a: aa = 10, b: bb = 5 } = { a: 3 };
console.log(aa); // 3
console.log(bb); // 5

/* --------------------------------------------------------------- */

/* Ejemplo 13 - Desestructuracion y Parametro  ...rest
https://youtube.com/shorts/aOH4b3JViYA?feature=share

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property

Parametro  ...rest se escribe al final,
en la ultima {} propiedad o [] elemento
y guarda el "resto" (ultimos) 
propiedad: valor, en {} objeto literal
o elementos en [] array */

const { a, ...otros } = { a: 1, b: 2, c: 3 };
console.log(a);     // 1
console.log(otros); // { b: 2, c: 3 }

const [uno, ...otros2] = [1, 2, 3];
console.log(uno);    // 1
console.log(otros2); // [2, 3]

/* --------------------------------------------------------------- */

/* Ejemplo 14:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#rest_property

La forma correcta es:
const [a, b, ...c] = [1, 2, 3];

ERROR: la propiedad ...rest tiene q escribirse de ultimo y no debe tener una coma al final */

const [a, ...b, c] = [1, 2, 3]; // ❌ Uncaught SyntaxError: Rest element must be last element
const [a, ...b,] = [1, 2, 3];   // ❌ Uncaught SyntaxError: Rest element must be last element

/* --------------------------------------------------------------- */

/* Ejemplo 15:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring */

const foo = ["one", "two", "three"];
console.log(foo);
// (3) ['one', 'two', 'three']

const [red, yellow, green] = foo;
console.log(red);    // "one"
console.log(yellow); // "two"
console.log(green);  // "three"

/* --------------------------------------------------------------- */

/* Ejemplo 16:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring

Como la parte izquierda  [red, yellow, green, blue] tiene mas elementos
q la parte derecha ["one", "two"]
entonces solamente se puede acceder a los 2 primeros elementos ["one", "two"]
y los otros elementos green, blue son undefined */

const foo = ["one", "two"];
console.log(foo);
// (2) ['one', 'two']

const [red, yellow, green, blue] = foo;
console.log(red);    // "one"
console.log(yellow); // "two"

console.log(green);  // undefined
console.log(blue);   // undefined

/* --------------------------------------------------------------- */

/* Ejemplo 17:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring 

https://en.wikipedia.org/wiki/XOR_swap_algorithm

Con la desestructuracion puedo 
intercambiar el valor de 2 variables 
y elementos de un [] array. Otras alternativas 
a esto SIN desestructuracion son 
usar una variable temporal o el algoritmo de intercambio XOR */

let a = 1;
let b = 3;
console.log(a); // 1
console.log(b); // 3

// Intercambiar variables
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// Intercambiar elementos del [] array
const arr = [1, 2, 3];
console.log(arr); // (3) [1, 2, 3]
//                           ↑  ↑

console.log(arr[1]); // 2
console.log(arr[2]); // 3

// [3, 2] = [2, 3]
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // (3) [1, 3, 2]
//                           ↑  ↑

/* --------------------------------------------------------------- */

/* Ejemplo 18:
Desestructurar los elementos de un array
devueltos return por una funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring */

const funcion = () => [1, 2]

const array = funcion()
console.log(array); // (2) [1, 2]

const [a, b] = funcion();
console.log(a);     // 1
console.log(b);     // 2

/* --------------------------------------------------------------- */

/* Ejemplo 19:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring */

const funcion2 = () => [1, 2]

const array2 = funcion2()
console.log(array2); // (2) [1, 2]

// [,] Array disperso (Sparse Arrays) : Ignorar valor devuelto b
const [a, , b] = funcion2();
console.log(a); // 1
console.log(b); // undefined

const [c] = funcion2();
console.log(c); // 1

// Ignorar TODOS los valores devueltos
[, ,] = funcion2();

/* --------------------------------------------------------------- */

/* Ejemplo 20 - Usar un patrón de enlace como propiedad de descanso
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring 

La propiedad ...restante de la asignación de desestructuración de [] matrices
puede ser otra [] matriz o patrón de enlace de objetos.
La desestructuración interna se desestructura de la [] matriz creada
después de recopilar los elementos restantes,
por lo que no puede acceder a ninguna propiedad presente en el iterable original de esta manera. */

const [a, b, ...{ length }] = [1, 2, 3];
console.log(a);      // 1
console.log(b);      // 2
console.log(length); // 1

const [a, b, ...[c, d]] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4

/* Estos patrones de enlace pueden incluso [[]] anidarse, 
siempre que cada propiedad de descanso sea la última de la lista */

const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
console.log(f); // 6

/* Por otro lado, la desestructuración de {} objetos 
solo puede tener un identificador como propiedad del ...resto */

const { a, ...{ b } } = { a: 1, b: 2 };
// ❌ Error de sintaxis no detectado: `...` debe ir seguido de un identificador en contextos de declaración

let a, b;
({ a, ...{ b } } = { a: 1, b: 2 });
// ❌ Error de sintaxis no detectado: `...` debe ir seguido de una referencia asignable en contextos de asignación

/* --------------------------------------------------------------- */

/* Ejemplo 21 - Obtener cada una de las partes de una URL:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec 

Desempaquetar valores de una coincidencia de expresión regular

Cuando el método exec() de expresión regular encuentra una coincidencia, 
devuelve una [] matriz que contiene primero toda la parte coincidente de la "" cadena 
y luego las partes de la "" cadena que coinciden con cada grupo entre paréntesis en la expresión regular. 
La asignación de desestructuración le permite descomprimir las partes de esta [] matriz fácilmente, 
ignorando la coincidencia completa si no es necesaria. */

const extraerPartesDeUrl = (url) => {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) return false;

  console.log(parsedURL);
  /*
  [ 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 
    'https', 'developer.mozilla.org', 'en-US/docs/Web/JavaScript', 
    index: 0, input: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', groups: undefined ]
  */

  const [, protocol, fullhost, fullpath] = parsedURL;
  console.log(protocol); // 'https'
  console.log(fullhost); // 'developer.mozilla.org'
  console.log(fullpath); // 'en-US/docs/Web/JavaScript'
  
  return [protocol, fullhost, fullpath];
}

const url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
console.log(url);                     // 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'

const [protocol, fullhost, fullpath] = extraerPartesDeUrl(url);
console.log(extraerPartesDeUrl(url)); // [ 'https', 'developer.mozilla.org', 'en-US/docs/Web/JavaScript' ]
console.log(protocol);                // 'https'
console.log(fullhost);                // 'developer.mozilla.org'
console.log(fullpath);                // 'en-US/docs/Web/JavaScript'

/* --------------------------------------------------------------- */

/* Ejemplo 22:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

Cualquier iterable se puede desestructurar

Desestructurar objeto map */

const [a, b] = new Map([
  [1, 2],
  [3, 4],
]);
console.log(a);    // (2) [1, 2]
console.log(a[0]); // 1
console.log(a[1]); // 2

console.log(b);    // (2) [3, 4]
console.log(b[0]); // 3
console.log(b[1]); // 4

// Los elementos NO iterables NO se pueden desestructurar
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// ❌ TypeError: obj is not iterable

/* --------------------------------------------------------------- */

/* Ejemplo 23:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring */

const obj = {
  *[Symbol.iterator]() {
    for (const elemento of [0, 1, 2, 3]) {
      console.log(elemento);
      /*
      0
      1
      */

      yield elemento;
    }
  },
};
console.log(obj);
/*
{
  [Symbol(Symbol.iterator)]: ƒ* [Symbol.iterator]()
}
*/

/* A pesar de q el array es [0, 1, 2, 3]
solamente se obtienen los 2 primeros elementos a=0 y b=1 */
const [a, b] = obj; 
console.log(a); // 0
console.log(b); // 1

// Para acceder al "resto" de los elementos uso ...rest
const obj = {
  *[Symbol.iterator]() {
    for (const v of [0, 1, 2, 3]) {
      console.log(v);
      /*
      0
      1
      2
      3
      */
      
      yield v;
    }
  },
};
console.log(obj);
/*
{
  [Symbol(Symbol.iterator)]: ƒ* [Symbol.iterator]()
}
*/

const [a, b, ...rest] = obj;
console.log(a);     // 0
console.log(b);     // 1
console.log(rest); // (2) [2, 3] 

/* --------------------------------------------------------------- */

/* Ejemplo 24 - Acceder (desestructurar) a cada uno de los valores de un {} objeto literal q son parametros de una funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

En una funcion puedo desestructurar sus parametros que sean un {} objeto literal
para acceder a cada uno de los valores del objeto literal (parametros) en variables
dentro del par de llaves {} de la funcion (scope, alcance)

La desestructuracion permite:
1) Q la variable  tenga un nombre igual o diferente 
al de la propiedad del {} objeto literal

2) Asignar valores por defecto a los valores del {} objeto literal */

const usuario = {
// propiedad: valor,
  id: 42,
  displayName: "Daniel",
  fullName: {
    firstName: "Pineda",
    lastName: "Mora",
  },
};
console.log(usuario);
/*
{
  id: 42,
  displayName: "Daniel",
  fullName: {
    firstName: "Pineda",
    lastName: "Mora",
  },
};
*/

// Extraer del {} objeto literal usuario el valor de la propiedad id
const idUsuario = ({ id }) => id
console.log(idUsuario(usuario));
// 42

/* En el {} objeto literal usuario 
re-nombrar la propiedad displayName por nuevoNombre */

function renombrarPropiedadObj({ displayName: nuevoNombre }) {
  return nuevoNombre;
}
console.log(renombrarPropiedadObj(usuario));
// 'Daniel'

/* Cambiar nombre de propiedad anidada q se recibe como parametro de funcion

En el {} objeto literal usuario re-nombrar la propiedad fullname.firstName por fullname.name */

function quienSoy({ displayName, fullName: { firstName: name } }) {
  return `${displayName} ${name}`;
}

console.log(quienSoy(usuario)); 
// 'Daniel Pineda'

/* --------------------------------------------------------------- */

/* Ejemplo 25 - Desestructuracion y valor por defecto del parametro de una funcion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters#destructured_parameter_with_default_value_assignment

El valor predeterminado se asigna con un =
y se usarán como valores de variable 
si una propiedad especificada no existe en el objeto pasado.

En los parametros de la funcion drawChart, 
el lado izquierdo desestructurado 
tiene un valor predeterminado de un objeto vacío = {}

También podrías haber escrito la función sin ese valor predeterminado. 
Sin embargo, si omite ese valor predeterminado, 
la función buscará que se proporcione al menos un argumento cuando se invoque, 
mientras que en su forma actual, puede llamar drawChart()
sin proporcionar ningún parámetro. De lo contrario,
deberá proporcionar al menos un {} objeto literal vacio */

function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size);   // 'big'
  console.log(coords); // { x: 18, y: 30 }
  console.log(radius); // 30
}

/* Cambiar valores de coords y radius,
se conserva el valor por defecto size = "big", */
drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});

/* --------------------------------------------------------------- */

/* Ejemplo 26 - Desestructuracion de (JSON) {} Objetos Literales y [] Arrays Anidados
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring */

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      title: "JavaScript-Umgebung",
    },
  ],
};

const {
  title: englishTitle,     // re-nombrar propiedad, cambiar nombre title por englishTitle
  translations: [
    {
      title: localeTitle,  // re-nombrar propiedad, cambiar nombre title por localeTitle
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

console.log(metadata);
/*
{
  title: 'Scratchpad',
  translations: [ { title: 'JavaScript-Umgebung' } ]
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 27 - Desestructurar [{}] Array de Objetos (JSON)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#destructuring_primitive_values */

const arrayDeObjetos = [
  { id: 1, nombre: "uno" },
  { id: 2, nombre: "dos" },
  { id: 3, nombre: "tres" },
];
console.log(arrayDeObjetos);
/*
[
  { id: 1, nombre: 'uno' },
  { id: 2, nombre: 'dos' },
  { id: 3, nombre: 'tres' }
]
*/

/* [,] Array Disperso (Sparse Array)
Acceder al valor de la tercera propiedad nombre del [{}] arrayDeObjetos */
const [, , { nombre }] = arrayDeObjetos;
console.log(nombre); 
// 'tres'

const [a, b, c] = arrayDeObjetos;
console.log(a); // { id: 1, nombre: 'uno' }
console.log(b); // { id: 2, nombre: 'dos' }
console.log(c); // { id: 3, nombre: 'tres' }

/* --------------------------------------------------------------- */

/* Ejemplo 28 - Iteración y Desestructuración
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring */

const people = [
  {
    name: "Mike Smith",
    family: {
      father: "Harry Smith",
    },
  },
  {
    name: "Tom Jones",
    family: {
      father: "Richard Jones",
    },
  },
];
console.log(people);
/*
[
  {
    name: 'Mike Smith',
    family: { father: 'Harry Smith' }
  },
  {
    name: 'Tom Jones',
    family: { father: 'Richard Jones' }
  }
]
*/

/* Recorrer (iterar) {} objeto literal people,
re-nombrar propiedad name por n
y family.father por f */
for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}
// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

/* --------------------------------------------------------------- */

/* Ejemplo 29:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names

Puedo desestructurar los object literals [key] 
q se refiere a las propiedades del {} objeto literal */

const key = "z";
console.log(key);
// 'z'

//        ↓
const { [key]: foo } = { z: 'bar' };
console.log(foo); 
// 'bar'

/* --------------------------------------------------------------- */

/* Ejemplo 30 - Identificador de JS no válido como nombre de propiedad
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

https://developer.mozilla.org/en-US/docs/Glossary/Identifier 

Identificador es el nombre de una variable, funcion o propiedad de un {} objeto literal

La desestructuración se puede utilizar con 
nombres de propiedades que no son identificadores de JS válidos 
proporcionando un identificador alternativo que sea válido.

dos es el valor de un objeto literal,
lo cual NO es un identificador,
pero como lo estoy usando con desestructuracion
entonces se convierte en un identificador (variable) */

const objetoLiteral = { "uno": true };
console.log(objetoLiteral);
// { uno: true }

const { "uno": dos } = objetoLiteral;
console.log(dos); 
// true

/* --------------------------------------------------------------- */

/* Ejemplo 31 - Desestructurar tipos de datos primitivos
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#destructuring_primitive_values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

La desestructuración de objetos es casi equivalente al acceso a propiedades. 
Esto significa que si intenta desestructurar un valor primitivo, 
el valor se incluirá en el objeto contenedor correspondiente 
y se accederá a la propiedad en el objeto contenedor */

const { a, toFixed } = 1;
console.log(a);       // undefined
console.log(toFixed); // ƒ toFixed() { [native code] }

/* --------------------------------------------------------------- */

/* Ejemplo 32 - Desestructurar null y undefined da error TypeError
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#destructuring_primitive_values

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError */

const { a } = undefined; // ❌ TypeError no detectado: no se puede desestructurar la propiedad 'a' de 'undefined' porque no está definida
const {} = undefined;    // ❌ TypeError no detectado: no se puede desestructurar 'indefinido' porque no está definido

const { b } = null;      // ❌ TypeError: No se puede desestructurar la propiedad 'b' de 'null' ya que es nula
const {} = null;         // ❌ TypeError no detectado: no se puede desestructurar 'null' porque es nulo

/* --------------------------------------------------------------- */

/* Ejemplo 33 - Desestructuracion y Prototipo:
La cadena __proto__ prototipo se busca cuando se desestructura el {} objeto.

Al desestructurar un {} objeto, 
si no se accede a una propiedad en sí misma, 
continuará buscando a lo largo de la cadena del __proto__ prototipo */

const obj = {
  foo: "123",
  __proto__: {
    prototipo: "456",
  },
};
console.log(obj);
/*
{ 
  foo: '123', 
  __proto__: { prototipo: '456' } 
}
*/

console.log(obj.__proto__);
// { prototipo: '456' }

const { foo, prototipo } = obj;
console.log(foo);       // '123'
console.log(prototipo); // '456'
