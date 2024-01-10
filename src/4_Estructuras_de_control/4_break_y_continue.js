/* eslint-disable no-restricted-syntax */
/* eslint-disable no-labels */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-continue */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
break; Detener y continue; Omitir la Iteración

Tutorial Jon Mircha:
https://youtu.be/iv-f163m78A

Documentación Oficial...
- break;
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

- continue;
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue

Recordatorio:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#break_in_switch_statements
Ejemplos de break; en switch Switche. Ver:
- Ejemplo 3 - ¿Qué pasa cuando en un switch NO copio break;?

- Ejemplo 4 - ¿Cuándo es Correcto NO copiar break;?

break; ROMPE el ciclo (bucle), hace q se salga del bucle,
en cambio, continue; se SALTA a la siguiente iteracion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#description

break; y continue; controlan el flujo de ejecucion de los bucles

break; y continue; NO se puede usar en metodos de array .forEach, .map(), etc.,
solamente se puede usar en estructuras de control
while, do while, for, for in, for of

Ejemplos:
- En la repeticion i detener la iteracion

- Si se cumple una condicion detener la iteracion

- Saltar (omitir) determinadas iteraciones

- Imprimir solamente los numeros pares o impares de un array

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#syntax

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#syntax

break;
continue;

break label;
continue label;

Donde...
- label
* Identificador asociado con la etiqueta de la sentencia.

* Es opcional escribirlo, con esta excepcion:
Si break; no está anidado dentro de un bucle o switch, 
entonces se tiene q escribir el identificador de etiqueta. */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - break;
https://youtu.be/iv-f163m78A */

const letras = ['A', 'B', 'C', 'D', 'E'];
//               0    1    2    3    4   -> POSICIONES (INDICES)
//                              ↑

// Imprimir todo el array
console.log(letras);
// (5) ['A', 'B', 'C', 'D', 'E']

/*
   Imprimir cuarta iteracion

   i=0  primero
   i=1  segundo
   i=2  tercero
-> i=3  cuarto <-
   i=4  quinto */

console.log(`i=${3} | elemento=${letras.at(3)}`);
// 'i=3 | elemento=D'

for (let i = 0; i < letras.length; i++) {
  if (i === 3) break; // DETENER la iteracion la CUARTA vez q se itere

  const elemento = letras[i];
  console.log(`i=${i} | elemento=${elemento}`);
}
/*
'i=0 | elemento=A'
'i=1 | elemento=B'
'i=2 | elemento=C'
*/

/* --------------------------------------------------------------- */

/* Ejemplo 2 - continue;
https://youtu.be/iv-f163m78A */

console.log(letras);
// (5) ['A', 'B', 'C', 'D', 'E']

for (let j = 0; j < letras.length; j++) {
  // OMITIR (SALTAR) la CUARTA iteracion
  if (j === 3) {
    console.log('...');
    continue;
  }

  const elemento = letras[j];
  console.log(`i=${j} | elemento=${elemento}`);
}
/*
'i=0 | elemento=A'
'i=1 | elemento=B'
'i=2 | elemento=C'
'...'
'i=4 | elemento=E'
*/

/* --------------------------------------------------------------- */

/* Ejemplo 3:
Segun ESLint Airbnb continue; es mala practica:
https://eslint.org/docs/latest/rules/no-continue */

// ❌ MALA PRACTICA:
let acumulador = 0;
console.log(acumulador);
// 0

for (let i = 0; i < 10; i++) { // Para i=0 hasta 9 con incrementos de uno en uno (desde 0 hasta 9)
  if (i >= 5) {                // Las iteraciones se OMITEN (SALTAN) a partir de la 5 iteracion
    continue;
  }

  // acumulador = acumulador + i;
  acumulador += i;             // sumar los indices desde 0 hasta 4
  console.log(`${acumulador - i}+${i} = ${acumulador}`);
}
/*
'0+0 = 0'
'0+1 = 1'
'1+2 = 3'
'3+3 = 6'
'6+4 = 10'
*/

console.log(acumulador);
// 10

// ✔️ BUENA PRACTICA:
let acumulador2 = 0;
console.log(acumulador2);
// 0

for (let i = 0; i < 10; i++) {
  if (i < 5) { // sumar los indices desde 0 hasta 4
    acumulador2 += i;
    console.log(`${acumulador2 - i}+${i} = ${acumulador2}`);
  }

  // las otras iteraciones 5 hasta 9 SI se ejecutan
  console.log('iteracion=', i);
}
/*
'0+0 = 0'
'iteracion=' 0

'0+1 = 1'
'iteracion=' 1

'1+2 = 3'
'iteracion=' 2

'3+3 = 6'
'iteracion=' 3

'6+4 = 10'
'iteracion=' 4

'iteracion=' 5
'iteracion=' 6
'iteracion=' 7
'iteracion=' 8
'iteracion=' 9
*/

console.log(acumulador2);
// 10

/* --------------------------------------------------------------- */

/* Ejemplo 4:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#description

Recordatorio:
Ver:
" Ejemplo 1 - Diferencia Entre for in y for of "

continue; da el mismo resultado en todos los bucles:
- while 
- do...while

- for
- for...in
- for...of
- for await...of

continue; se SALTA a la siguiente iteracion */

/* 
 ▄▄▄▄▄▄▄▄▄
 █ while █
 ▀▀▀▀▀▀▀▀▀ 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#using_continue_with_while */

let concatenar = '';
console.log(concatenar);
// ''
 
let i = 0;
console.log(i);
// 0
 
while (i < 6) {
  i++;
  if (i === 3) continue; // SALTAR (OMITIR) la iteracion 3, NO concatenar el numero 3
  console.log(i);
  /*
  1
  2
  4
  5
  6
  */

  // ESTO...
  // concatenar = concatenar + i;
  
  // ES LO MISMO Q ESO:
  concatenar = concatenar.concat(i);
}

console.log(concatenar);
// '01245'

/* 
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ do...while █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

concatenar = '';
console.log(concatenar);
// ''

i = 0;
console.log(i);
// 0

do {
  i++;

  if (i === 3) continue; 
  console.log(i);
  /*
  1
  2
  4
  5
  6
  */
  
  concatenar = concatenar.concat(i);
} while (i < 6);

console.log(concatenar);
// '01245'

/* 
 ▄▄▄▄▄▄▄
 █ for █
 ▀▀▀▀▀▀▀ */

concatenar = '';
console.log(concatenar);
// ''

for (let i = 0; i < 6; i++) {
  if (i === 3) continue;
  console.log(i);
  /*
  0
  1
  2
  4
  5
  */

  concatenar = concatenar.concat(i);
}

console.log(concatenar);
// '01245'

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ for...in █
 ▀▀▀▀▀▀▀▀▀▀▀▀ */

const objetoLiteral = {
// propiedad: valor,
  uno: 1,
  dos: 2,
  tres: 3,
}
console.log(objetoLiteral);
/*
{
  uno: 1,
  dos: 2,
  tres: 3,
}
*/

for (const propiedad in objetoLiteral) {
  const valor = objetoLiteral[propiedad];

  if (propiedad === "dos") continue; // NO imprimir la propiedad: valor, 'dos ➜ 2'
 
  console.log(`${propiedad} ➜ ${valor}`);
}
/*
'uno  ➜ 1'
'tres ➜ 3'
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄
 █ for...of █
 ▀▀▀▀▀▀▀▀▀▀▀▀ */

concatenar = '';
console.log(concatenar);
// ''

const array = ['▲', '●', '✖', '■'];
console.log(array);
// (4) ['▲', '●', '✖', '■']
//            ↑

for (const elemento of array) {
  if (elemento === '●') continue; // SALTAR (OMITIR) iteracion cuando el elemento actual sea un circulo '●'
  
  concatenar = concatenar.concat(elemento);

  console.log(elemento);
  /*
  '▲'
  '✖'
  '■'
  */
}

console.log(concatenar);
// '▲✖■'

/* --------------------------------------------------------------- */

/* Ejemplo 5 - continue; en bucle anidado
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#using_continue_with_a_label */

i = 0;        // contador padre
console.log(i);
// 0

let j = 6;    // contador hijo
console.log(j);
// 6

while (i<2) { // while padre
  i++;
  console.log(i);
  /*
  1
  2
  */

  while (j>3) { // while hijo
    j--;
    
    /* omitir (saltar) iteracion cuando en el while hijo j === 4
    esto NO afecta la iteracion del while padre */
    if (j === 4) continue; // 
    console.log(j);
    /*
    5
    3
    */
  }
}

console.log(i); // 2
console.log(j); // 3

/* --------------------------------------------------------------- */

/* Ejemplo 6:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#unsyntactic_continue_statements

❌ ERROR:
continue; NO se puede usar en una funcion q esta dentro de un bucle */

for (let i = 0; i < 10; i++) { // bucle
  (() => {                     // IIFE: funcion auto-ejecutable
    // SyntaxError: Illegal continue statement: no surrounding iteration statement
    continue;
  })();
}

/* --------------------------------------------------------------- */

/* Ejemplo 7:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#unsyntactic_continue_statements 

❌ ERROR:
Al hacer referencia a una etiqueta, la declaración etiquetada debe contener la continue; declaración. */

label: for (let i = 0; i < 4; i++) {
  console.log(i);
  /* 
  0
  1
  2
  3
  */
}

for (let i = 0; i < 10; i++) {
//continue label;
  continue label; // SyntaxError: Undefined label 'label'
}

/* --------------------------------------------------------------- */

/* Ejemplo 8:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#unsyntactic_continue_statements 

❌ ERROR:
La declaración etiquetada debe ser un bucle. */

label: {
  for (let i = 0; i < 10; i++) {
    continue label; // SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement
  }
}

/* --------------------------------------------------------------- */

/* Ejemplo 9:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#try_it */

i = 0;
console.log(i);
// 0

while (i < 6) {       // iterar desde 1 hasta 6
  if (i === 3) break; // pero break; hace q el bucle se termine en iteracion 3

  i += 1;             // aumentar contador
  console.log(i);
  /*
  1
  2
  3
  */
}

console.log(i);
// 3

/* --------------------------------------------------------------- */

/* Ejemplo 10:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#break_in_while_loop */

// ✔️ FORMA CORRECTA
const multiplicarAcumulador = (x) => {
  let i = 0;
  console.log(i);
  // 0

  while (i < 6) {       // iterar desde 1 hasta 6
    if (i === 3) break; // pero break; hace q el bucle se termine en iteracion 3

    i += 1;             // aumentar contador
    console.log(i);
    /*
    1
    2
    3
    */
  }

  // Retornar (contador i)*(parametro x)
  console.log(`i*x = ${i}*${x} = ${i * x}`);
  // 'i*x = 3*6 = 18'

  // el valor
  return i * x; // 3 * x
};

multiplicarAcumulador(6);
// 18

/* Los siguientes casos muestran q
break; da error al usarlo en una funcion q esta dentro de un bucle o declaracion de bloque {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#unsyntactic_break_statements */

// ❌ ERROR
const testBreak = (x) => { 
  let i = 0;

  while (i < 6) {  // bucle
    if (i === 3) {
      
      (() => {     // IIFE: funcion auto-ejecutable
        break;     // SyntaxError: Illegal break statement
      })();
    }
    i += 1;
  }

  return i * x;
}

testBreak(1); 

// ❌ ERROR
block1: {         // Declaracion de bloque {}
  console.log(1);
  (() => {        // IIFE: funcion auto-ejecutable
    break block1; // SyntaxError: Undefined label 'block1'
  })();
}

/* --------------------------------------------------------------- */

/* Ejemplo 11 - break; en declaracion de bloque {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#break_in_labeled_blocks */

// ✔️ FORMA CORRECTA

bloqueExterno: {
  {
    console.log(1);      // 1
    break bloqueExterno; // Finalizar ejecucion (romper) de la declaracion de bloque interna y externa
    console.log(2);      // NO se ejecuta
  }
  console.log(3);        // NO se ejecuta
}

/* ❌ ERROR
Para usar break block2 tiene q estar anidado dentro de block1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#unsyntactic_break_statements */

block1: {
  console.log(1);
  break block2; // SyntaxError: label not found
}

block2: {
  console.log(2);
}
