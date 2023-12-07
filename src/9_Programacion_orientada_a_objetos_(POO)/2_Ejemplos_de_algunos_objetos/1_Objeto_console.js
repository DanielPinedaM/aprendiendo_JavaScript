/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Objeto console para imprimir mensajes en consola del navegador

Tutorial - Jon Mircha:
https://youtu.be/qM9Rsv3LCWc

Documentacion Oficial...
- Lista de Todos los Objetos en JS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

- Objeto console
https://developer.mozilla.org/en-US/docs/Web/API/console */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - console.log(); Imprimir en consola
En el objeto console
los nombres de las propiedades son los metodos que puedo usar:
console.log()    -> log: ƒ (),
console.error()  -> error: ƒ (),
console.warn()   -> warn: ƒ (),
console.info()   -> info: ƒ (),
console.clear()  -> clear: ƒ (),
console.dir()    -> dir: ƒ dir(),
console.group()  -> group: ƒ group(),
console.table()  -> table: ƒ (),
console.time()   -> time: ƒ (),
console.count()  -> count: ƒ count(),
console.assert() -> assert: ƒ (),

etc ...
https://youtu.be/qM9Rsv3LCWc

https://developer.mozilla.org/en-US/docs/Web/API/console/log_static */

// Imprimir el objeto console
const objetoConsole = console;
console.log(objetoConsole);
/*
Object [console] {
  debug: ƒ (),
  error: ƒ (),
  info: ƒ (),
  log: ƒ (),
  warn: ƒ (),
  dir: ƒ dir(),
  dirxml: ƒ dirxml(),
  table: ƒ (),
  trace: ƒ trace(),
  group: ƒ group(),
  groupCollapsed: ƒ groupCollapsed(),
  groupEnd: ƒ groupEnd(),
  clear: ƒ (),
  count: ƒ count(),
  countReset: ƒ countReset(),
  assert: ƒ (),
  profile: ƒ profile(),
  profileEnd: ƒ profileEnd(),
  time: ƒ (),
  timeLog: ƒ (),
  timeEnd: ƒ (),
  timeStamp: ƒ timeStamp(),
  context: ƒ context(),
  createTask: ƒ createTask(),
  memory: Object [MemoryInfo] {
    __proto__: {
      totalJSHeapSize: 42100000,
      usedJSHeapSize: 37300000,
      jsHeapSizeLimit: 2190000000
    }
  }
}
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Formas de imprimir varias variables
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=440s

https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=515s

Recordatorio:
Ver:
" 8.2) .concat() + += \ , Concatenar (Unir) String " */

// Con varios console log
const nombre = 'Daniel';
console.log(nombre);
// 'Daniel'

const apellido = 'Pineda';
console.log(apellido);
// 'Pineda'

const edad = 99;
console.log(edad);
// 99

// , Separar por comas
console.log('nombre', nombre, 'apellido', apellido, 'edad', edad);
// 'nombre' 'Daniel' 'apellido' 'Pineda' 'edad' 99

// Template String (plantillas de cadena):
console.log(`nombre ${nombre} apellido ${apellido} edad ${edad}`);
// 'nombre Daniel apellido Pineda edad 99'

// .concat()
console.log(''.concat('', 'nombre ', nombre, ' apellido ', apellido, ' edad ', edad));
// 'nombre Daniel apellido Pineda edad 99'

// +
console.log('nombre' + ' ' + nombre + ' ' + 'apellido' + ' ' + apellido + ' ' + 'edad', edad);
// 'nombre Daniel apellido Pineda edad' 99

// JSON.stringify()
const JSONstringify = { nombre, apellido, edad };
console.log(JSONstringify);

/*
%s      -> String()
%d ó %i -> Number()
%f      -> flotante (decimal)
%o      -> objeto
%j      -> JSON
https://stackoverflow.com/questions/42406146/javascript-s-or-d-represents-string */

console.log('Hola mi nombre es %s %s y tengo %d años', nombre, apellido, edad);
// 'Hola mi nombre es Daniel Pineda y tengo 99 años'

let resultado = '';
resultado += 'nombre ';    // 'nombre '
resultado += nombre;       // 'nombre Daniel'
resultado += ' apellido '; // 'nombre Daniel apellido '
resultado += apellido;     // 'nombre Daniel apellido Pineda'
resultado += ' edad ';     // 'nombre Daniel apellido Pineda edad '
resultado += edad;         // 'nombre Daniel apellido Pineda edad 99'

/* --------------------------------------------------------------- */

// Ejemplo 3 - \n Imprimir salto de línea (renglón)

console.log('hola\nmundo');
/*
'hola
mundo'
*/

console.log('hola\n\nmundo');
/*
'hola

mundo'
*/

/* --------------------------------------------------------------- */

/* Ejemplo 4 - console.error(); Imprimir mensaje de ERROR ❌
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=200s

https://developer.mozilla.org/en-US/docs/Web/API/console/error_static */

fetch('https://www.NombreDominio.com')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(`Mensaje de error ${error}`));
/*
Promise { <pending> }
❌ 'Mensaje de error TypeError: Failed to fetch'
*/

/* --- */

console.error('Esto es un error');
// ❌ 'Esto es un error

/* --------------------------------------------------------------- */

/* Ejemplo 5 - console.warn(); Imprimir mensaje de ADVERTENCIA ⚠️
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=245s

https://developer.mozilla.org/en-US/docs/Web/API/console/warn_static */

console.warn('Esto es una advertencia');
// ⚠️ 'Esto es una advertencia'

/* --------------------------------------------------------------- */

/* Ejemplo 6 - console.info(); Imprimir mensaje INFORMATIVO
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=325s

https://developer.mozilla.org/en-US/docs/Web/API/console/info_static

Ambos console.info() y console.log() se ven iguales en consola,
la diferencia es: */

console.info('console.info() Esto es un mensaje informativo');
// 'console.info() Esto es un mensaje informativo'

console.log('console.log() es un registro de lo que ha sucedido en la aplicacion usado para hacer debugging');
// 'console.log() es un registro de lo que ha sucedido en la aplicacion usado para hacer debugging'

/* --------------------------------------------------------------- */

/* Ejemplo 7 - console.clear(); borrar todos los mensajes de la consola (LIMPIAR CONSOLA)
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=655s

https://developer.mozilla.org/en-US/docs/Web/API/console/clear_static */

console.log(1); // 1
console.log(2); // 2
console.log(3); // 3

/* --- */

console.log(1);
console.log(2);
console.log(3);

console.clear();
// Se han borrado los datos de la consola

/* --------------------------------------------------------------- */

/* Ejemplo 8 - console.dir(); Imprimir las propiedad: valor de un objeto
Objeto document contiene las propiedades del DOM
que permiten manipular el frontend:
etiquetas HTML, estilos CSS condicionales, ejecutar eventos, asincronia, etc.
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=810

https://developer.mozilla.org/en-US/docs/Web/API/console/dir_static

https://developer.mozilla.org/en-US/docs/Web/API/Document

https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */

console.log(document);
/*
#document
   <html>
      <head></head>
      <body></body>
   </html>
*/

console.dir(document);
/*
location:  Location {ancestorOrigins: DOMStringList, href: 'about:blank', origin: 'null', protocol: 'about:', host: '', ...}
URL: "about:blank"
activeElement: body
adoptedStyleSheets: Proxy(Array) {}
alinkColor: ""
all: HTMLAllCollection(3) [html, head, body]

etc...
[[Prototype]]: HTMLDocument
*/

/*
objeto Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object */

console.log(Object);
// Object() { [native code] }

/*
Recordatorio:
console.dir(Object); imprime esto, ver:
" 13.1.5) Resumen: Propiedades y Métodos del Objeto Literal " */

console.dir(Object);
/*
ƒ Object()
assign: ƒ assign()
create: ƒ create()
defineProperties: ƒ defineProperties()
defineProperty: ƒ defineProperty()
entries: ƒ entries()
freeze: ƒ freeze()
fromEntries: ƒ fromEntries()
getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()
getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()
getOwnPropertyNames: ƒ getOwnPropertyNames()
getOwnPropertySymbols: ƒ getOwnPropertySymbols()
getPrototypeOf: ƒ getPrototypeOf()
groupBy: ƒ groupBy()
hasOwn: ƒ hasOwn()
is: ƒ is()
isExtensible: ƒ isExtensible()
isFrozen: ƒ isFrozen()
isSealed: ƒ isSealed()
keys: ƒ keys()
length: 1
name: "Object"
preventExtensions: ƒ preventExtensions()
prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
seal: ƒ seal()
setPrototypeOf: ƒ setPrototypeOf()
values: ƒ values()
arguments: (...)
caller: (...)
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[0]
*/

/* En un {} objeto literal la unica diferencia es que
console.log() NO imprime el tipo de objeto,
en cambio console.dir() SI */
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

console.dir(objetoLiteral);
/*
Object
  {
    uno: 1,
    dos: 2,
    tres: 3
  }
*/

/* --------------------------------------------------------------- */

/* Ejemplo 9 - console.group(); y console.groupEnd(); AGRUPAN los console.log() mensajes de consola 🔻
Puedo agrupar los console.log() en viñetas desplegables 🔻

Recordatorio:
Del resumen de HTML 5, ver
" 7.4.10) <details> y <summary> - Cuadro de Texto o Viñeta Desplegable (Leer más) (Widget de Divulgación o Expansor) "

https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=935s

https://developer.mozilla.org/en-US/docs/Web/API/console/group_static

https://developer.mozilla.org/en-US/docs/Web/API/console/groupend_static

https://developer.mozilla.org/en-US/docs/Web/API/console/groupcollapsed_static */

const array = ['A', 'B', 'C'];

console.group('elementos del array');

array.forEach((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);
});
console.groupEnd();
/*
🔻 elementos del array
    ⭕ i=0 ➜ elemento='A'
    ⭕ i=1 ➜ elemento='B'
    ⭕ i=2 ➜ elemento='C'
*/

/* --- */

console.group('Cursos de @jonmircha en YouTube'); // Iniciar agrupacion
  console.log('Curso de HTML');                   // lista de console.log() a agrupar
  console.log('Curso de CSS');
  console.log('Curso de JS');
  console.groupEnd();                             // terminar agrupacion console.groupEnd() para poder empezar otra agrupacion console.group()
/*
🔻 Cursos de @jonmircha en YouTube
    ⭕ Curso de HTML
    ⭕ Curso de CSS
    ⭕ Curso de JS
*/

/* --- */

console.group('Cursos de @jonmircha en YouTube');
  console.group('Curso de HTML');
    console.group('Curso de CSS');
      console.group('Curso de JS');
        console.groupEnd();
/*
🔻 Cursos de @jonmircha en YouTube
    🔻 Curso de HTML
        🔻 Curso de CSS
            🔻 Curso de JS
*/

/* --------------------------------------------------------------- */

/* Ejemplo 10 - console.table(); Imprime en TABLA las posiciones (índices) y elementos de un [] array, y también imprime las propiedad: valor de un {} objeto literal
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=1190s

https://developer.mozilla.org/en-US/docs/Web/API/console/table_static */

const array2 = ['A', 'B', 'C'];
console.table(array2);
/*
| (índice) | Valor |
--------------------
|    0    |  'A'   |
|    1    |  'B'   |
|    2    |  'C'   |

Array(3)
*/

/* --- */

const objetoLiteral2 = {
// propiedad: valor,
  uno: 'primero',
  dos: 'segundo',
  tres: 'tercero',
};
const entries = Object.entries(objetoLiteral2);

console.log(entries);
/*
(3) [
      [ 'uno', 'primero' ],
      [ 'dos', 'segundo' ],
      [ 'tres', 'tercero' ]
    ]
*/

console.table(entries);
/*
| (índice) |   0    |     1     |
--------------------------------
|    0    | 'uno'  | 'primero' |
|    1    | 'dos'  | 'segundo' |
|    2    | 'tres' | 'tercero' |

Array(3)
*/

console.table(objetoLiteral2);
/*
| (índice) |  Valor   |
-----------------------
|   uno   | 'primero' |
|   dos   | 'segundo' |
|  tres   | 'tercero' |
*/

/* --------------------------------------------------------------- */

/* Ejemplo 11 - console.time(); y console.timeEnd(); imprimir tiempo que DEMORA ejecutar un código
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=1594s

https://developer.mozilla.org/en-US/docs/Web/API/console/time_static

https://developer.mozilla.org/en-US/docs/Web/API/console/timeend_static

https://developer.mozilla.org/en-US/docs/Web/API/console#timers

console.time() y console.timeEnd() imprimen el tiempo en milisegundos (ms) */

// Crear array [] con numeros del 0 al 999
const iterar = () => {
  const array3 = Array.from({ length: 1000 }, (_, i) => i);

  array3.forEach((elemento, i) => {
    console.log(`i=${i} ➜ elemento='${elemento}'`);
  });
  /*
  "i=0 ➜ elemento='0'"
  "i=1 ➜ elemento='1'"
  "i=2 ➜ elemento='2'"
  ...
  "i=999 ➜ elemento='999'"
  */
};

/*
IMPORTANTE ⚠️
Los mensajes de console.time(''); y console.timeEnd('');
tienen q ser LOS MISMOS para q se imprima mensaje en consola  */
console.time('tiempo en iterar 1000 elementos');
iterar();
console.timeEnd('tiempo en iterar 1000 elementos');
// tiempo en iterar 1000 elementos: 170.047119140625 ms

/* se imprime default: cuando NO se escribe ningun mensaje
dentro de console.time(); console.timeEnd(); */
console.time();
iterar();
console.timeEnd();
// default: 142.6650390625 ms

/* --------------------------------------------------------------- */

/* Ejemplo 12 - console.count(); número de VECES que se ejecuta un código
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=1880s

https://developer.mozilla.org/en-US/docs/Web/API/console/count_static */

const iterar2 = (mensaje) => {
  const array3 = Array.from({ length: 3 }, (_, i) => i);

  array3.forEach((elemento, i) => {
    console.log(`i=${i} ➜ elemento='${elemento}'`);
    console.count(mensaje);
  });
};

// console.count("") con un mensaje
iterar2('numero de veces q se ejecuta .forEach()');
/*
"i=0 ➜ elemento='0'"
numero de veces q se ejecuta .forEach(): 1

"i=1 ➜ elemento='1'"
numero de veces q se ejecuta .forEach(): 2

"i=2 ➜ elemento='2'"
numero de veces q se ejecuta .forEach(): 3
*/

/* se imprime default: cuando NO se escribe
ningun mensaje dentro de console.count() */
iterar2();
/*
"i=0 ➜ elemento='0'"
default: 1

"i=1 ➜ elemento='1'"
default: 2

"i=2 ➜ elemento='2'"
default: 3
*/

/* --------------------------------------------------------------- */

/* Ejemplo 13 - console.assert(); imprimir el resultado de un condicional
https://www.youtube.com/watch?v=qM9Rsv3LCWc&t=2040s

https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static

console.assert() se usa en pruebas unitarias (testing)

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/API/console/assert_static#syntax */

// console.assert(condicional, {variable1, /* …, */ , variableN, stringConMensaje})

const x = 1;
const y = 2;
const pruebaXY = 'se espera q X siempre sea menor q Y';

// Esto NO imprime nada porque el condicional x < y es true (1 SI es menor q 2)
console.assert(x < y, { x, y, pruebaXY });

// SI imprime un mensaje de error porque x > y es false (1 NO es mayor q 2)
console.assert(x > y, { x, y, pruebaXY });
// ❌ Error en la aserción: {x: 1, y: 2, pruebaXY: 'se espera q X siempre sea menor q Y'}
