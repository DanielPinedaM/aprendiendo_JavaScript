/* eslint-disable no-else-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
if () {} else {} Si SiNo

Convertir de Operador Condicional Ternario a if () {} else {}
https://converter.website-dev.eu/

Documentacion Oficial...
- if () {} else {} Si SiNo
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

- Bloque de codigo {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block

Sirve para tomar decisiones dependiendo de si se cumple o no una condición

if() {} Cuando SI se cumple la condicion ejecutar ESTE bloque de codigo,
else {} SINO se cumple la condicion entonces ejecutar este OTRO bloque codigo

if() {} Ejecuta UN bloque de codigo {} si la condicion es truthy (verdadera),
else {} puedo elegir si se ejecuta o no OTRO bloque de codigo {}
cuando la condicion es falsy (falso)

La asignacion = en un if else es un ERROR:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition

if (x = y) {
  // ejecutar este bloque de codigo
}

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#syntax

UN SOLO BLOQUE DE CODIGO:
if (condition) {
  statement1
}


DOS BLOQUES DE CODIGO:
if (condition) {
  statement1
}
  else {
    statement2
  }


if else ANIDADO:
if (condition1) {
  statement1
}
  else if (condition2) {
    statement2
  }
    else if (condition3) {
      statement3
    }
      //...
        else {
          statementN
        }


if (condition1) {
  statement1
}
  else {
       if (condition2) {
         statement2
       }
        else {
          if (condition3) {
            statement3
          }
        }
         // …
  }

Donde...
- condition1, condition2 ... conditionN
Condicional que se evalua para saber ¿que bloque de codigo statementN se ejecuta?

- statement1, statement2 ... statementN
Es el bloque de codigo q se ejecuta cuando se cumple el condicional,
esta entre un par de llaves {}

- if () {}
Se ejecuta cuando el condicional es truthy (verdadero)

- else {}
Se ejecuta cuando el condicional es falsy (falso)

- {}
* Par de llaves {} q contienen el codigo

* Es opcional escribirlas

* Cada par de llaves {} forma un scope

Recordatorio:
Ver:
- " Ejemplo 5 - Numero positivo, negativo o cero "

- " 4.2.1.2) Alcance de Bloque (Variable Local) (Block Scope) " */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Validar Cuando una Variable es null, undefined, NaN, "" Carácter Vacío, " " Espacio en Blanco, 0, false

Este Ejemplo 1 esta en Stack Overflow pero lo modifiq para mejorarlo:
https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in

https://stackoverflow.com/questions/35476948/remove-empty-or-whitespace-strings-from-array-javascript */

const validar = (variable) => {
  // truthy
  if (Array.isArray(variable)) {                           // en JS los array [] son truthy
    return true;
  } else if (variable && String(variable).trim() !== '') { // validar truthy en JS y espacio en blanco " "
    return true;
  } else { // falsy
    return false;
  }
};

/* La funcion validar() devuelve true porq la variable es TRUTHY

La variable NO es NINGUNO de los siguientes tipos de datos:
- null
- undefined
- NaN
- '' Carácter Vacío
- ' ' Espacio en Blanco
- 0
- false */
validar('hola mundo'); // el string NO esta vacio
validar(1);            // 1 es true en booleano
validar('1');          // el string NO esta vacio
validar(true);         // booleano verdadero
validar('true');       // el string NO esta vacio
validar('0');          // el string NO esta vacio
validar('false');      // el string NO esta vacio
validar(Infinity);     // al convertir Infinity a booleano es true
validar(999);          // al convetir a booleano cualquier # diferente de 0 es true
validar({});           // al convertir de objeto literal {} a booleano es true
validar([]);           // al convertir de array [] a booleano es true

/* La funcion validar() devuelve false porq la variable es FALSY

validar(undefined); y validar(); son lo mismo
porque ambos significan que la variable no esta definida

La variable SI es ALGUNO de los siguientes tipos de datos:
- null
- undefined
- NaN
- '' Carácter Vacío
- ' ' Espacio en Blanco
- 0
- false */
validar(null);      // una variable q si esta definida pero con un valor null es falsy
validar(undefined); // una variable NO definida es falsy
validar();          // una variable NO definida es falsy
validar(NaN);       // al convertir NaN (no es un numero) a booleano es falsy
validar('');        // por defecto en JS "" es falsy, para esto uso la condicion variable
validar(' ');       // para esto uso condicion String(variable).trim() !== ''
validar(0);         // 0 es false en booleano
validar(false);     // booleano falso

/* Esta es otra forma de validar,
pero tiene el problema de q NO valida " " espacio en blanco
porque imprime 'falsy' cuando la variable es un espacio en blanco */

let variable2 = 'hola mundo';
if (variable2) {
  console.log('truthy');
} else {
  console.log('falsy');
}
// 'truthy'

variable2 = '';
if (variable2) {
  console.log('truthy');
} else {
  console.log('falsy');
}
// 'falsy'

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
} else {      // truthy !== true
  console.log('ELSE');
}
// 'IF'

// ES LO MISMO Q ESTO:
if (truthy === true) { // truthy
  console.log('IF');
} else {               // falsy
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
} else {     // false !== true
  console.log('ELSE');
}
// 'ELSE'

/* Se imprime 'IF' porq
al negar ! un valor q es falsy el resultado es true
(lo opuesto de false es true) */

console.log(!falsy); // true

if (!falsy) {        // true === true
  console.log('IF');
} else {             // true !== true
  console.log('ELSE');
}
// 'IF'

/* --------------------------------------------------------------- */

/* Ejemplo 3 - if () {} else {} - ¿Mayor o Menor de Edad?:
https://youtu.be/9h5hyh_wDjo

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#a_simple_example

Recordatorio:
Hay una forma mas abreviada de solucionar esto, ver:
" Ejemplo 2 - operador condicional ternario - ¿Mayor o Menor de Edad?: " */

const edad = 18;
console.log(edad);   // 18

const nombre = 'Daniel';
console.log(nombre); //  'Daniel'

// 1) ESTO >= mayor o igual que 18...
if (edad >= 18) { //           -> 18, 19, 20 ...
  console.log(`${nombre} es MAYOR de edad`);
} else {          // edad < 18 -> 17, 16, 15 ...
  console.log(`${nombre} es MENOR de edad`);
}
// 'Daniel es MAYOR de edad'

// ES LO MISMO Q ESTO > mayor que 17:
if (edad > 17) { //             -> 18, 19, 20 ...
  console.log(`${nombre} es MAYOR de edad`);
} else {          // edad <= 17 -> 17, 16, 15 ...
  console.log(`${nombre} es MENOR de edad`);
}
// 'Daniel es MAYOR de edad'

// 2) Y ESTO OTRO <= menor o igual que 17 ...
if (edad <= 17) { //           -> 17, 16, 15 ...
  console.log(`${nombre} es MENOR de edad`);
} else {          // edad > 17 -> 18, 19, 20 ...
  console.log(`${nombre} es MAYOR de edad`);
}
// 'Daniel es MAYOR de edad'

// ES LO MISMO Q ESTO OTRO < menor q 18
if (edad < 18) { //             -> 17, 16, 15 ...
  console.log(`${nombre} es MENOR de edad`);
} else {          // edad >= 18 -> 18, 19, 20 ...
  console.log(`${nombre} es MAYOR de edad`);
}
// 'Daniel es MAYOR de edad'

/* --------------------------------------------------------------- */

/* Ejemplo 4 - if () {} else if () {} else {} - Saludar Dependiendo de la Hora:
https://www.youtube.com/watch?v=9h5hyh_wDjo&t=583s

|------------------|--------------------------|---------------|
| Saludar          | Hora Regular             | Hora Militar  |
|------------------|--------------------------|---------------|
| Dejame dormir 💤 | 12 media noche - 5:00 AM | 00:00 - 5:00  |
|------------------|--------------------------|---------------|
| Buenos dias   ☀️ | 6:00 AM - 11:00 AM       | 6:00 - 11:00  |
|------------------|--------------------------|---------------|
| Buenas tardes ⛅ | 12 medio dia - 6pm       | 12:00 - 18:00 |
|------------------|--------------------------|---------------|
| Buenas noches 🌑 | 7pm - 12 media noche     | 19:00 - 24:00 |
|------------------|--------------------------|---------------| */

const hora = 5;    // 5:00 AM
console.log(hora); // 5

// ESTO -> >= y <=
if (hora >= 0 && hora <= 5) {          // 0, 1, 2, 3, 4, 5
  console.log('Dejame dormir 💤');
} else if (hora >= 6 && hora <= 11) {  // 6, 7, 8, 9, 10, 11
  console.log('Buenos dias ☀️');
} else if (hora >= 12 && hora <= 18) { // 12, 13, 14, 15, 16, 17, 18
  console.log('Buenas tardes ⛅');
} else if (hora >= 19 && hora <= 24) { // 19, 20, 21, 22, 23, 24
  console.log('Buenas noches 🌑');
} else {                              // ... -3 -2 -1, 25, 26, 27 ...
  console.log('hora incorrecta, tiene q ser un # entero desde 0 hasta 24');
}
// 'Dejame dormir 💤'

// ES LO MISMO Q ESTO -> > y <
if (hora > -1 && hora < 6) {          // 0, 1, 2, 3, 4, 5
  console.log('Dejame dormir 💤');
} else if (hora > 5 && hora < 12) {  // 6, 7, 8, 9, 10, 11
  console.log('Buenos dias ☀️');
} else if (hora > 11 && hora < 19) { // 12, 13, 14, 15, 16, 17, 18
  console.log('Buenas tardes ⛅');
} else if (hora > 18 && hora < 25) { // 19, 20, 21, 22, 23, 24
  console.log('Buenas noches 🌑');
} else {                              // ... -3 -2 -1, 25, 26, 27 ...
  console.log('hora incorrecta, tiene q ser un # entero desde 0 hasta 24');
}
// 'Dejame dormir 💤'

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Numero positivo, negativo o cero
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#try_it

SENTENCIA VACIA:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty

https://en.wikipedia.org/wiki/Dangling_else

El código statementN del if else
se puede escribir en un solo renglón
SIN llaves {} como a continuación: */

const negativoCeroPositivo = (numero) => {
  let resultado;

  // sentencia vacia
  if (numero > 0) resultado = 'numero POSITIVO';
  else if (numero === 0) resultado = 'numero CERO';
  else /* numero < 0 */ resultado = 'numero NEGATIVO';

  return resultado;
};

console.log(negativoCeroPositivo(-1)); // 'numero NEGATIVO'
console.log(negativoCeroPositivo(0));  // 'numero CERO'
console.log(negativoCeroPositivo(1));  // 'numero POSITIVO'
