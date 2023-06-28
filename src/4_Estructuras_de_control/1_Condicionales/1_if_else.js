/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Documentacion Oficial...
- if

- if else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

Sintaxis:
*/

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Validar Cuando una Variable es null, undefined, NaN, "" Carácter Vacío, " " Espacio en Blanco, 0, false

Este Ejemplo 1  esta en Stack Overflow pero lo modifiq para mejorarlo:
https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in */

const validar = (variable) => {
  if (variable && (String(variable).trim() !== '')) { // truthy
    console.log(`
    La variable NO es NINGUNO de los siguientes tipos de datos:
    - null
    - undefined
    - NaN
    - '' Carácter Vacío
    - ' ' Espacio en Blanco
    - 0
    - false
    `);
  } else { // falsy
    console.log(`
    La variable SI es ALGUNO de los siguientes tipos de datos:
    - null
    - undefined
    - NaN
    - '' Carácter Vacío
    - ' ' Espacio en Blanco
    - 0
    - false
    `);
  }
};

/* Se ejecuta el if () {} porq la variable es truthy
"La variable NO es NINGUNO de los siguientes tipos de datos:
- null
- undefined
- NaN
- '' Carácter Vacío
- ' ' Espacio en Blanco
- 0
- false" */
validar('hola mundo');
validar(1);
validar(true);

/* Se ejecuta el else {} porq la variable es falsy

validar(undefined); y validar(); son lo mismo

" La variable SI es ALGUNO de los siguientes tipos de datos:
- null
- undefined
- NaN
- '' Carácter Vacío
- ' ' Espacio en Blanco
- 0
- false " */
validar(null);
validar(undefined);
validar();
validar(NaN);
validar('');
validar(' ');
validar(0);
validar(false);

/* --------------------------------------------------------------- */

/* Ejemplo 2 - if () {} else {} truthy y falsy

Recordatorio:
Ver:
- " 4.3.1.3) Boolean() - true y false "

- " 4.3.1.3.1) Truthy (Verdadero) "

- " 4.3.1.3.2) Falsy (Falso) "

- " 4.3.1.3.3) Tabla de Verdad "

- " 5.3.2) Comparación de Igualdad - Diferencia Entre == Operador de Igualdad (Doble Igual), === Operador Estricto de Identidad (Triple Igual) y Object.is() Método de Objeto "

- " 5.6.4) ! NOT (Negación) "

truthy es cualquier valor q al convertirlo a booleano sea true.
Ejemplo:
Boolean("hola mundo") imprime true

falsy es cualquier valor q al convertirlo a booleano sea false
Ejemplo:
Boolean("") imprime false */

const truthy = true;
const falsy = false;

console.log(truthy); // true
console.log(falsy);  // false

/* El if() {} se ejecuta cuando la condicion es truthy
y el else {} cuando la condicion es falsy,
el resultado es el mismo,
no importa si escribo o no
el operador de igualdad estricta (triple igual) ===

ESTO: */
if (truthy) { // truthy === true
  console.log('IF');
} else { // truthy !== true
  console.log('ELSE');
}
// 'IF'

// ES LO MISMO Q ESTO:
if (truthy === true) { // truthy
  console.log('IF');
} else { // falsy
  console.log('ELSE');
}
// 'IF'

/* Se imprime 'ELSE' porq
al negar ! un valor q es truthy el resultado es false
(lo opuesto de true es false) */

console.log(!truthy); // false

if (!truthy) {        // false === true
  console.log('IF');
} else {              // false !== true
  console.log('ELSE');
}
// 'ELSE'

if (falsy) { // false === true
  console.log('IF');
} else { // false !== true
  console.log('ELSE');
}
// 'ELSE'

/* Se imprime 'IF' porq
al negar ! un valor q es falsy el resultado es true
(lo opuesto de false es true) */
if (!falsy) { // true === true
  console.log('IF');
} else { // true !== true
  console.log('ELSE');
}
// 'IF'

/* --------------------------------------------------------------- */

/* Ejemplo 3 */
