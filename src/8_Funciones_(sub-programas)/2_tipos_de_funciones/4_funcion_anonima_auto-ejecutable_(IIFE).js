/* eslint-disable consistent-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable wrap-iife */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
// @ts-nocheck
/* eslint-disable max-len */
/* eslint-disable func-names */

/* --------------------------------------------------------------- */

/*
(() => { })(); Función Auto-ejecutable
(IIFE, Immediately Invoked Function Expression, Self-Executing Anonymous Function, Self-Executing Invoking Function)

Recordatorio:
Ver:
" 12.4.1) Diferencia Entre Declaración de Funcion (Function Declaration) y Expresión de Función (Function Expression) "

Tutorial...
- Midudev:
https://youtu.be/yK_vE6ghox8

- Jon Mircha:
https://youtu.be/gbHr5qJjLRg

Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

https://developer.mozilla.org/en-US/docs/Glossary/Self-Executing_Anonymous_Function

Es una funcion q se ejecuta a si misma,
inmediatamente que el interprete lee esa linea de codigo,
NO se tiene q invocar para poder ejecutarse

En ReactJS se usa para el Hook useEffect()
https://youtu.be/TBxpAhpQqYk

https://react.dev/reference/react/useEffect

Sintaxis:
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

Declaracion de Funcion Auto-ejecutable
(function () {
  // …
  return 'opcional, valor de retorno'
})();

((function () {
  // …
  return 'opcional, valor de retorno'
})());

Funcion flecha auto-ejecutable
(() => {
  // …
  return 'opcional, valor de retorno'
})();
*/

// Funcion flecha en una sola linea y auto-ejecutable
// (() => /* ... */ )();

/*
Unaria
+function () {
  // ...
}();

Facebook (Meta)
!function () {
  // ...
}();

Funcion flecha y asincrona auto-ejecutable
(async () => {
  // …
  return 'opcional, valor de retorno'
})();
*/

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Sintaxis - Declaracion de Funcion Auto-ejecutable
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function () {
  // …
  return 'opcional, valor de retorno'
})(); */

(function () {
  console.log('hola mundo');
  // 'hola mundo'
}());

alert(
  (function (nombre) {
    console.log('hola mundo'); // 'hola mundo'
    return `hola ${nombre}`;   // 'hola Daniel'
  }('daniel')),
);

/*
((function () {
  // …
  return 'opcional, valor de retorno'
})()); */

((function () {
  console.log('hola mundo');
  // 'hola mundo'
})());

alert(
  ((function (nombre) {
    console.log('hola mundo'); // 'hola mundo'
    return `hola ${nombre}`;   // 'hola Daniel'
  })('daniel')),
);

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Sintaxis - Funcion unaria auto-ejecutable
https://youtu.be/gbHr5qJjLRg?si=fWgnIvgil8LGwPIJ

+function () {
  // ...
}(); */

+function () {
  console.log('hola mundo');
  // 'hola mundo'
}();

/* --------------------------------------------------------------- */

/* Ejemplo 3 - Sintaxis de Facebook (Meta) de funcion auto-ejecutable
https://youtu.be/gbHr5qJjLRg?si=fWgnIvgil8LGwPIJ

!function () {
  // ...
}(); */

!function () {
  console.log('hola mundo');
  // 'hola mundo'
}();

/* --------------------------------------------------------------- */

/* Ejemplo 4 - Sintaxis - Funcion flecha auto-ejecutable
(() => {
  // …
  return 'opcional, valor de retorno'
})(); */

(() => {
  console.log('hola mundo'); // 'hola mundo'
})();

alert(
  ((nombre) => {
    console.log('hola mundo'); // 'hola mundo'
    return `hola ${nombre}`;   // 'hola Daniel'
  })('daniel'),
);

/* --------------------------------------------------------------- */

// Ejemplo 5 - Sintaxis - Funcion flecha en una sola linea y auto-ejecutable
// (() => /* ... */ )();

alert(
  ((nombre) => `hola ${nombre}`)('daniel'), // 'hola Daniel'
);

/* --------------------------------------------------------------- */

/* Ejemplo 6
https://developer.mozilla.org/en-US/docs/Glossary/IIFE#execute_an_async_function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await

https://youtu.be/E62-MLR0OlE?si=WdiYA2sO1ouJgtu8

¿Para q usar funcion auto-ejecutable?
1) top-level await:
En versiones antiguas de navegadores y NodeJS
async await da eror cuando NO se usa con funciones */

const response = await fetch('https://pokeapi.co/api/v2/ability/?limit=2');
const data = await response.json();
console.log(data);
// ❌ SyntaxError: await solo es válido en funciones asíncronas y los cuerpos de nivel superior de los módulos
// Sugerencia: puede habilitar la espera de nivel superior desde la configuración avanzada

/*
✔️ SOLUCION:

Sintaxis de funcion flecha y asincrona auto-ejecutable
(async () => {
  // …
  return 'opcional, valor de retorno'
})(); */

(async () => {
  try {
    const url = 'https://pokeapi.co/api/v2/ability/?limit=2';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return data;
  /*
  {
    count: 367,
    next: 'https://pokeapi.co/api/v2/ability/?offset=2&limit=2',
    previous: null,
    results: [
      {
        name: 'stench',
        url: 'https://pokeapi.co/api/v2/ability/1/'
      },
      {
        name: 'drizzle',
        url: 'https://pokeapi.co/api/v2/ability/2/'
      }
    ]
  }
  */
  } catch (error) {
    console.error(error);
  }
})();

/* --------------------------------------------------------------- */

/* Ejemplo 7
https://youtu.be/yK_vE6ghox8

¿Para q usar funcion auto-ejecutable?
2) Por rendimiento,
solo debes crear funciones flecha o funciones regulares para re-utilizar codigo,
no tiene sentido crear una funcion y llamarla instantaneamente

Esto ayuda a no bloquear el hilo de ejecucion (Call Stack) de JS

Recordatorio:
Ver:
- " 1.11.6) Pila de Contextos de Ejecución (Execution Context Stack / Call Stack) "

❌ MALA PRACTICA
NO es una función auto-ejecutable
porque se tiene que invocar (llamar) para ejecutarse */

const saludar = () => { // definir funcion
  console.log('hola mundo');
};
saludar(); // ejecutar funcion
// 'hola mundo'

/* ✔️ BUENA PRACTICA

Sintaxis - Funcion Flecha Auto-ejecutable
(() => {
  // ...
  return “opcional, valor de retorno”
})(); */

(() => {
  console.log('hola mundo');
  // 'hola mundo'
})();

/* --------------------------------------------------------------- */

/* Ejemplo 8
https://youtu.be/yK_vE6ghox8

https://developer.mozilla.org/en-US/docs/Glossary/IIFE#avoid_polluting_the_global_namespace

Recordatorio:
Ver:
" 4.2.1.2) Alcance de Bloque (Variable Local) (Block Scope) "

¿Para q usar funcion auto-ejecutable?
3) Para crear un nuevo scope (alcance) */

// Puedo tener dos variables numero con el mismo nombre
// porque con el par de llaves {/*...*/}
// de la funcion auto-ejecutable creo un nuevo scope (alcance)

const numero = 1;
console.log(numero);
// 1

(() => {
  const numero = 2;
  console.log(numero);
  // 2
})();

/* --------------------------------------------------------------- */

/* Ejemplo 9
https://developer.mozilla.org/en-US/docs/Glossary/IIFE#the_module_pattern

¿Para q usar funcion auto-ejecutable?
4) Para crear variables y métodos públicos y privados

Elevar un numero por si mismo. Ejemplo: 2^2 */

const potenciacion = (num1) =>
  ((num2) => {
    console.log(num1);
    // 2
    // 10

    console.log(num2);
    // 2
    // 10

    const resultado = num1 * num2;
    console.log(resultado);
    // 4
    // 10

    const saludar = () => {
      console.log('hola mundo');
    };
    saludar();

    const string = `${num1}^${num2} = ${num1}*${num2} = ${resultado} →`;

    return {
      getResult() {
        if (resultado > 5) {
          return `${string} > 5 → mayor a 5`;
        }

        return `${string} <= 5 → menor o igual a 5`;
      },
    };
  })(num1);

const primerNumero = potenciacion(2);
console.log(primerNumero);
// { getResult: ƒ getResult() }

console.log(primerNumero.getResult());
/*
'hola mundo'
'2^2 = 2*2 = 4 → <= 5 → menor o igual a 5' */


const segundoNumero = potenciacion(10);
console.log(segundoNumero);
// { getResult: ƒ getResult() }
console.log(segundoNumero.getResult());
// '10^10 = 10*10 = 100 → > 5 → mayor a 5'

/* --------------------------------------------------------------- */

// Ejemplo 10 - scope de funcion auto-ejecutable
// https://youtu.be/yK_vE6ghox8

(() => {
  const numero3 = 2;
  console.log(numero3);
  // 2
})();

/* ❌ ERROR
numero3 solamente se puede usar donde esta definido
dentro del par de llaves {} de la funcion auto-ejecutable */
console.log(numero3);
// ReferenceError: numero2 is not defined

/* --------------------------------------------------------------- */

/* Ejemplo 11
https://youtu.be/yK_vE6ghox8 */

// Definir variable numero3 FUERA del scope {/*...*/} de la funcion auto-ejecutable
const numero4 = 1;
console.log(numero4);
// 1

(() => {
  // y acceder a la variable DENTRO de la funcion auto-ejecutable
  console.log(numero4);
  // 1
})();

/* --------------------------------------------------------------- */

// Ejemplo 12

(() => {
  const a = 1;
  const b = 1;

  if (a === b) {
    console.log('numeros iguales');
    // 'numeros iguales'

    return; // return detiene la ejecucion de la función
  }

  console.log('esto NO se ejecuta');
})();

/* --------------------------------------------------------------- */

/* Ejemplo 13
Las Funciones Auto-ejecutables son anonimas porque
NO tienen un nombre de funcion

❌ ERROR:
A una funcion auto-ejecutable:
1) NO se le puede dar un nombre */

(function nombreFuncion() {
  console.log('hola mundo');
}());

// 2) NO se puede acceder al nombre de la funcion
nombreFuncion();
// ❌ Uncaught ReferenceError: nombreFuncion is not defined

/* --------------------------------------------------------------- */

/* Ejemplo 14
❌ ERROR
La funcion NO se ejecuta
cuando NO escribo al final ();
https://eslint.org/docs/latest/rules/no-unused-expressions */

(() => {
  console.log('IIFE');
});

/* --------------------------------------------------------------- */

/* Ejemplo 15
https://youtu.be/E62-MLR0OlE?si=WdiYA2sO1ouJgtu8

https://developer.mozilla.org/en-US/docs/Web/API/Window

https://developer.mozilla.org/en-US/docs/Web/API/Document

https://developer.mozilla.org/en-US/docs/Web/API/console

Guardar los objetos del navegador en los parametros de una funcion auto-ejecutable

Esto lo usa JQuery */

((w, d, c) => {
  console.log(c); // console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, ...}

  c.log(w);       // Window {window: Window, self: Window, document: document, name: '', location: Location, ...}
  c.log(d);       // #document (about:blank)
})(window, document, console);

/* --------------------------------------------------------------- */

/* Ejemplo 16 - Parametros de funcion auto-ejecutable
https://youtu.be/E62-MLR0OlE?si=WdiYA2sO1ouJgtu8 */

((arrayVacio, array, objetoLiteral, string, numero, nulo, indefinido, noEsUnNumero) => {
  console.log(arrayVacio);    // []
  console.log(array);         // (3) [ 1, 2, 3 ]
  console.log(objetoLiteral); // { uno: 1 }
  console.log(string);        // 'hola mundo'
  console.log(numero);        // 9999
  console.log(nulo);          // null
  console.log(indefinido);    // undefined
  console.log(noEsUnNumero);  // NaN
})([], [1, 2, 3], { uno: 1 }, 'hola mundo', 9999, null, undefined, NaN);

/* --------------------------------------------------------------- */

/* Ejemplo 17 - ...rest operator en funcion auto-ejecutable
https://youtu.be/E62-MLR0OlE?si=WdiYA2sO1ouJgtu8

Recordatorio:
Ver:
"  5.7.1) ... Diferencias y Similitudes Entre Parametros Rest (Rest Parameters) y Sintaxis Extendida (Operador Spread, Spread Operator) " */

((...rest) => {
  console.log(rest);
  /*
  [
     [],
     [ 1, 2, 3 ],
     { uno: 1 },
     'hola mundo',
     9999,
     null,
     undefined,
     NaN
  ]
  */
})([], [1, 2, 3], { uno: 1 }, 'hola mundo', 9999, null, undefined, NaN);

/* --------------------------------------------------------------- */

/* Ejemplo 18 - Re-asignar parametro de funcion auto-ejecutable
https://eslint.org/docs/latest/rules/no-param-reassign */

((numero) => {
  console.log(numero); // 1

  numero = 2;

  console.log(numero); // 2
})(1);

/* --------------------------------------------------------------- */

/* Ejemplo 19 - .push() en funcion auto-ejecutable
Recordatorio:
Ver:
" 9.4.3.3.10) Agregar Nuevo Elemento al .unshift() PRINCIPIO y .push() FINAL del Array y Devolver la Nueva Longitud .length del Array " */

((array) => {
  console.log(array);
  // []

  for (let i = 1; i < 4; i++) {
    array.push(i);
    console.log(array);
    // [ 1 ]
    // (2) [ 1, 2 ]
    // (3) [ 1, 2, 3 ]
  }

  console.log(array);
  // (3) [ 1, 2, 3 ]
})([]);

/* --------------------------------------------------------------- */

/* Ejemplo 20
https://youtu.be/E62-MLR0OlE?si=WdiYA2sO1ouJgtu8

https://eslint.org/docs/latest/rules/func-call-spacing */

const saludar2 = () => {
  console.log('hola mundo');
};
saludar2() // ❌ ERROR: aqui falta punto y coma ;

(() => {
  console.log('IIFE');
})();
