/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Documentación Oficial...
- switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

- break;
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

Tutorial de Jon Mircha:
https://www.youtube.com/watch?v=9h5hyh_wDjo&t=1557s

Evalua uno o mas condicionales para una misma variable

"En caso de que la variable sea igual a ... entonces ejecutar este codigo ..."

Los case se ejecutan uno por uno
en el orden en q estan escritos

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#syntax

switch (expression) {
  case value1:
    statements
    break;
  case value2:
    statements
    break;
  // …
  case valueN:
    statements
    break;

  default:
    statements
    break;
}

- switch () {}
Indica donde empieza y termina el switch switche

- valueN
* Es el condicional

* Posibles valores q puede tener la variable expression

* De forma predeterminada es expression === valueN,
pero tambien puede ser cualquier otra condicional >, <, in, etc

Recordatorio:
Ver:
" Ejemplo 8 - ¿Qué es switch(true) {}? "

- expression
Por defecto, es la VARIABLE expression para evaluar si es igual a valueN,
es decir expression === valueN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality

- case
Indica q en ese mismo renglon se va a copiar el POSIBLE valor valueN de la variable expression

- statements
Codigo a ejecutar SI se cumple el condicional

- break;
Cuando SI se copia break; y se encuentra el PRIMER valor valueN q cumple con el condicional:
1) Se ejecuta el codigo statement

2) NO se siguen evaluando las otras condiciones case
   (el interprete se sale del switch)

3) Se sigue ejecutando las lineas de codigo DESPUES del cierre del switch () {}

en cambio, cuando NO se copia break;
1) se evaluan TODOS los condicionales case

2) Se ejecutan TODOS los codigos statements
   SIN importar si se cumple o no la condicion

Recordatorio:
Ver:
" Ejemplo 3 - ¿Qué pasa cuando en un switch NO copio break;? "

- default:
    statements
    break;
* Es opcional escribirlo

* Se ejecuta cuando NO se cumple NINGUNA condicion case despues de haberlas evaluado TODAS,
es lo mismo que el else {}

* Se copia UNA SOLA vez,
si lo copio mas de una entonces da SyntaxError
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Dia de la semana:
https://www.youtube.com/watch?v=9h5hyh_wDjo&t=1557s

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#try_it

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#using_switch

Imprimir el dia de la semana dependiendo del numero de dia

|-----------|--------|
| Día       | Número |
|-----------|--------|
| Domingo   | 0      |
| Lunes     | 1      |
| Martes    | 2      |
| Miercoles | 3      |
| Jueves    | 4      |
| Viernes   | 5      |
| Sabado    | 6      |
|-----------|--------|

Como dia === 0 y estoy copiando break; entonces
la ejecucion del swtich se detiene exactamente en:

case 0:                   // dia === 0
  console.log('Domingo'); // codigo a ejecutar SI se cumple la condicion
  break;

y NO se siguen evaluando los otros case */

const dia = 0;
console.log(dia);
// 0

switch (dia) {              // variable a evaluar
  case 0:                   // dia === 0
    console.log('Domingo'); // codigo a ejecutar SI se cumple la condicion
    break;

    /* 'Domingo' */

  case 1:                   // dia === 1
    console.log('Lunes');
    break;
  case 2:                   // dia === 2
    console.log('Martes');
    break;
  case 3:                   // dia === 3
    console.log('Miercoles');
    break;
  case 4:                   // dia === 4
    console.log('Jueves');
    break;
  case 5:                   // dia === 5
    console.log('Viernes');
    break;
  case 6:                   // dia === 6
    console.log('Sabado');
    break;

  default:                  // dia es DIFERENTE DE 0, 1, 2, 3, 4, 5 y 6
    console.log('dia INCORRECTO');
    break;
}

/* Despues de q se ejecuta el case,
se ejecutan las siguientes lineas de codigo

Se imprime 'hola mundo' despues de ejecutar el case */
console.log('hola mundo');
// 'hola mundo'

/* --------------------------------------------------------------- */

/* Ejemplo 2:

Recordatorio:
Ver:
" 5.3.2) Comparación de Igualdad - Diferencia Entre == Operador de Igualdad (Doble Igual), === Operador Estricto de Identidad (Triple Igual) y Object.is() Método de Objeto "

switch usa el === operador estricto de identidad (triple igual)
para saber el valor de la variable

switch imprime 'variable es DIFERENTE DE 1'
porque '1' tipo texto String() es DIFERENTE DE 1 tipo numero Number() */

console.log('1' === 1);  // false -> '1' y 1 son tipos de datos diferentes
console.log(typeof '1'); // 'string'
console.log(typeof 1);   // 'number'

const variable = '1';
console.log(variable);   // '1'

switch (variable) {
  case 1:
    console.log('variable es 1 tipo NUMERO Number()');
    break;

  default:
    console.log('variable es DIFERENTE DE 1');
    break;
// 'variable es DIFERENTE DE 1'
}

/* --------------------------------------------------------------- */

/* Ejemplo 3 - ¿Qué pasa cuando en un switch NO copio break;?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#breaking_and_fall-through

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch#%C2%BFqu%C3%A9_pasa_si_olvido_un_break

ESLint - no-fallthrough
https://eslint.org/docs/latest/rules/no-fallthrough

IMPORTANTE: ⚠️

Breaking and fall-through (Ruptura y Caída):
NO copiar break; en un switch puede causar errores
porq se ejecutara TODOS los codigos statements
SIN importar si la variable es igual o no al valor valueN

A pesar de q la variable dia2 es 0
se estan imprimiendo por consola
TODOS los dias porq NO copie break; */

const dia2 = 0;
console.log(dia2);
// 0

switch (dia2) {
  case 0: console.log('Domingo');         // 'Domingo'
  case 1: console.log('Lunes');           // 'Lunes'
  case 2: console.log('Martes');          // 'Martes'
  case 3: console.log('Miercoles');       // 'Miercoles'
  case 4: console.log('Jueves');          // 'Jueves'
  case 5: console.log('Viernes');         // 'Viernes'
  case 6: console.log('Sabado');          // 'Sabado'
  default: console.log('dia INCORRECTO'); // 'dia INCORRECTO'
}

/* --------------------------------------------------------------- */

/* Ejemplo 4 - ¿Cuándo es Correcto NO copiar break;?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#taking_advantage_of_fall-through

En la mayoria de los casos
como viste en "Ejemplo 1 - Dia de la semana:" necesitaré copiar break;
para detener la ejecucion del switch
cuando encuentre que la variable es igual al value1,
es decir, expression === valueN
(igual que un if () else {})

Este Ejemplo 4 es un caso donde es correcto NO copiar break; (fallthrough)

Dependiendo del numero digitado se imprime una frase diferente:

|--------------------------------|----------------------------------------------|
| Valor de variable numero4      | Frase: Valor de variable imprimir            |
|--------------------------------|----------------------------------------------|
| DIFERENTE DE 0, 1, 2, 3, 4 y 5 | 'numero4 tiene q ser un numero de 0 hasta 5' |
|--------------------------------|----------------------------------------------|
| 0                              | 'So What Is Your Name?'                      |
|--------------------------------|----------------------------------------------|
| 1                              | 'What Is Your Name?'                         |
|--------------------------------|----------------------------------------------|
| 2                              | 'Your Name?'                                 |
|--------------------------------|----------------------------------------------|
| 3                              | 'Name?'                                      |
|--------------------------------|----------------------------------------------|
| 4                              | '?'                                          |
|--------------------------------|----------------------------------------------|
| 5                              | '!'                                          |
|--------------------------------|----------------------------------------------| */

const numero4 = 1;
console.log(numero4);
// 1

/* ACUMULADOR:
Cada vez q se ejecuto un case se agregara una nueva palabra */
let imprimir = '';
console.log(imprimir);
// ''

switch (numero4) {
  case 0:
    imprimir += 'So ';
  case 1:
    imprimir += 'What ';
    imprimir += 'Is ';
  case 2:
    imprimir += 'Your ';
  case 3:
    imprimir += 'Name';
  case 4:
    imprimir += '?';
    break;
  case 5:
    imprimir += '!';
    break;
  default:
    imprimir = 'numero4 tiene q ser un numero de 0 hasta 5';
}
console.log(imprimir);
// 'What Is Your Name?'

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Alcance (Scope) de switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#lexical_scoping

Recordatorio:
Ver:
" 4.2.1.2) Alcance de Bloque (Variable Local) (Block Scope) "

IMPORTANTE: ⚠️
Cada par de llaves {} de switch crea un alcance (scope),
es decir, si creo una variable dentro de un switch,
SOLAMENTE la puedo usar dentro de ese mismo switch */

const numero = 2;
console.log(numero);
// 0

switch (numero) {
  case 1:
    console.log('uno');
    break;

  case 2:
    const imprimir2 = 'dos';
    console.log(imprimir2); // 'dos'
    break;

  case 3:
    console.log('tres');
    break;

  default:
    console.log('otro numero (valor)');
    break;
}

/* ERROR: variable imprimir NO definida,
NO puedo usar la variable imprimir
FUERA del par de llaves del switch () {} */
// console.log(imprimir);
// ReferenceError: imprimir is not defined

/*
ESLint - no-case-declarations
https://eslint.org/docs/latest/rules/no-case-declarations

IMPORTANTE: ⚠️
Segun ESLint cada vez q se definan variables DENTRO de un switch
se tiene q copiar un par de llaves despues de cada case {}
para crear un nuevo alcance (scope) dentro de cada statements */

switch (numero) {
  case 1: {             // par de llaves despues de cada case {}
    console.log('uno'); // statements
    break;
  }

  /* Puedo definir 2 veces el mismo nombre de variable
  porq todos los case estan dentro de pares de llaves {},
  es decir, las variables const imprimir = 'dos'; y const imprimir = 'tres'; son DIFERENTES
  a pesar de q tienen el mismo nombre imprimir */
  case 2: {
    const imprimir3 = 'dos';
    console.log(imprimir3); // 'dos'
    break;
  }

  case 3: {
    const imprimir3 = 'tres';
    console.log(imprimir3);
    break;
  }

  default: {
    console.log('otro numero (valor)');
    break;
  }
}

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Se tiene q escribir default: de ULTIMO
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#putting_the_default_clause_between_two_case_clauses

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch#%C2%BFpuedo_usar_un_default_entre_condiciones

Segun ESLint SIEMPRE se tiene q copiar
  default:
    statements
    break;
de ULTIMO antes del cierre del switch

ESLint - default-case-last
https://eslint.org/docs/latest/rules/default-case-last

Cuando:
1) NO copio de ULTIMO
   default:
     statements

2) NO copie break; despues del default:

3) La variable expression NO ES DIFERENTE DE valueN

Entonces el switch ejecutara
TODOS los codigos statements A PARTIR DE
default:
  statements */

// La variable numero2 ES DIFERENTE DE 1, 2 y 3
const numero2 = 99;
console.log(numero2);
// 99

switch (numero2) {
  case 1:
    console.log(1);
    break; //

    /* default: NO esta de ultimo
y se esta imprimiendo TODO A PARTIR de default:
- 'default'
- 2
- 3 */

  default:
    console.log('default'); // 'default'
    // fall-through           -> NO copie break;

  case 2:
    console.log(2);         // 2
    // fall-through

  case 3:
    console.log(3);         // 3
    // fall-through
}

/* --------------------------------------------------------------- */

/* Ejemplo 7:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#taking_advantage_of_fall-through

Imprimir por consola si la variable numero3
es IGUAL ó DIFERENTE a alguno de los numeros 1, 2, 3 ó 4,
esto funciona igual que un OR ||

Recordatorio:
El siguiente codigo se puede refactorizar asi, ver:
" 6.1.5) Refactorizar if () {} else {} y switch Usando Objeto Literal {} " */

const numero3 = 4;
console.log(numero3);
// 4

// ESTO...
switch (numero3) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('variable numero3 es ALGUNO de estos numeros: 1, 2, 3 ó 4');
    break;
    // 'variable numero3 es ALGUNO de estos numeros: 1, 2, 3 ó 4'

  default:
    console.log('variable numero3 es DIFERENTE DE 1, 2, 3 y 4');
}

// ES LO MISMO Q ESTO:
if (numero3 === 1 || numero3 === 2 || numero3 === 3 || numero3 === 4) {
  console.log('variable numero3 es ALGUNO de estos numeros: 1, 2, 3 ó 4');
} else {
  console.log('variable numero3 es DIFERENTE DE 1, 2, 3 y 4');
}
// 'variable numero3 es ALGUNO de estos numeros: 1, 2, 3 ó 4'

/* --------------------------------------------------------------- */

/* Ejemplo 8 - ¿Qué es switch(true) {}?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#an_alternative_to_if...else_chains

Recordatorio:
Ver:
" Ejemplo 1 - Dia de la semana: "
De forma predeterminada cuando NO escribo switch(true) {}
se evalua expression === valueN
con el operador de igualdad estricta (triple igual) ===

Recordatorio:
Ver:
" 5) Expresiones y Operadores "
switch(true) {} al igual que if () {} else {}
permite evaluar CUALQUIER CONDICIONAL, es decir, permite usar:
1) Operadores:
&& AND, || OR, ! NOT Negación, > mayor que, < menor que, etc.

2) Metodos de "" string, [] array, {} objeto literal, etc

3) Funciones

4) etc.

EJEMPLOS:
1) Saber si un numero es negativo, cero o positivo

No es necesario copiar break;
porq cuando se cumple la condicion
el return hace q se termine de ejecutar la funcion
https://eslint.org/docs/latest/rules/no-unreachable */

const negativoPositivoCero = (numero5) => {
  switch (true) {
    case numero5 === 0:
      return 'numero CERO';

    case numero5 > 0:
      return 'numero POSITIVO';

    default:
      return 'numero NEGATIVO';

    // 'numero NEGATIVO'
  }
};

negativoPositivoCero(-1); // 'numero NEGATIVO'
negativoPositivoCero(0);  // 'numero CERO'
negativoPositivoCero(1);  // 'numero POSITIVO'

// 2) Buscar una palabra (caracteres) en especifico en una frase
const saludar = 'hola mundo';
console.log(saludar);
// "hola mundo"

/* .includes() Buscar Caracteres en Cualquier Parte de un String

.includes() imprime 'estas saludando'
porque en el string saludar esta la palabra "mundo" */

switch (true) {
  case String(saludar).includes('mundo'):
    console.log('estas saludando');
    break;
    // 'estas saludando'

  default:
    console.log('¿porque no me saludas?');
    break;
}

// 3) Ejecutar una funcion en un switch(true) {}

const numero6 = 0;
console.log(numero6);
// 0

const funcion = () =>  {
  // copiar aqui codigo de la funcion y retornar un valor

  return 0;
};

funcion();
// 0

/* Imprime 'numero CERO' porq el valor de retorno de la funcion()
y la variable numero6 son los mismos */
switch (true) {
  case numero6 === funcion(): // ¿la variable numero6 es === igual a la funcion() ?
    console.log('numero CERO');
    break;
    // 'numero CERO'

  default:
    console.log('valor DIFERENTE DE 0');
    break;
}

/* 4) Dependiendo de la compatibilidad,
ejecutar una de las formas de hacer peticiones HTTP: */

switch (true) {
  case 'fetch' in globalThis:
    console.log('ejecutar API Fetch');
    break;
  case 'XMLHttpRequest' in globalThis:
    console.log('ejecutar XMLHttpRequest');
    break;
  default:
    console.log('ejecutar AJAX');
    break;
}
