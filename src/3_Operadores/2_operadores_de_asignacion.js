/* eslint-disable no-param-reassign */
/* eslint-disable no-const-assign */
// @ts-nocheck
/* eslint-disable no-multi-spaces */

/* --------------------------------------------------------------- */

/*
Documentacion Oficial...
Operadores de asignacion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators

??= Asignación Coalescente Nula (Nullish Coalescing Assignment)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment

Abreviación de Operadores de Asignación
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators

= UN SOLO IGUAL
Usar para darle (asignar) un valor a una variable

El valor que esta a la derecha (despues de =)
se le asigna al nombre de la variable que esta a la izquierda (antes de =)

Ejemplo:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment#simple_assignment_and_chaining */

let uno = 1;
let dos = 2;
console.log(uno); // 1
console.log(dos); // 2

const tres = 3;
dos = tres;

console.log(dos);  // 3
console.log(tres); // 3

/* Segun ESLint Airbnb la asignacion multiple es un error:
https://eslint.org/docs/latest/rules/no-multi-assign */
uno = dos = tres;

console.log(uno);  // 3
console.log(dos);  // 3
console.log(tres); // 3

/* -- */

/* ??= ASIGNACION COALESCENTE NULA
(NULLISH COALESCING ASSIGMENT)

Esto x ??= y
es lo mismo q esto x ?? (x = y);
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#short-circuiting

Su sintaxis es:
operandoIzquierdo ??= operandoDerecho
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment#syntax

Ejemplo 1 - explicacion del operador ??=
Si operandoIzquierdo es null o undefined */
let asignar;
console.log(asignar);
// undefined

// Se asigna el valor de operandoDerecho a operandoIzquierdo
asignar ??= 1;
console.log(asignar);
// 1

asignar = null;
console.log(asignar);
// null

asignar ??= 1;
console.log(asignar);
// 1

/* cuando operandoIzquierdo NO es null NI undefined
se conserva el valor original de operandoIzquierdo
(NO se asigna ninguno valor a operandoIzquierdo) */
asignar ??= 2;
console.log(asignar);
// 1

/* Ejemplo 2:
El valor de la variable x siempre es 1
porque el ??= operador de asignacion coalesente nula
SOLAMENTE asigna el valor de la variable x si es null ó undefined
y el valor de x es 1, NO null NI undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment#description */
let x = 1;
console.log(x); // 1

x ??= 2;
console.log(x); // 1

/* Ejemplo 3:
En este ejemplo 3 sucede exactamente lo mismo que en el ejemplo 2 anterior,
la unica diferencia es que aqui estoy usando un objetoLiteral {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment#description */
const objetoLiteral = {
  get value() {
    return 1;
  },

  set value(v) {
    console.log('setter ejecutado');
  },
};

console.log(objetoLiteral.value); // 1

/* el valor de objetoLiteral.value es 1
antes y despues del ??= operador de asignacion coalesente nula */
objetoLiteral.value ??= 2;

console.log(objetoLiteral.value); // 1

// Ejemplo 4 - En que momento se detiene la ejecucion del operador ??=
let operandoIzquierdo = null;
console.log(operandoIzquierdo);
// null

/* 1) Como operandoIzquierdo es null
entonces se le asigna el valor de 'operandoDerecho ejecutado'

2) Se estan evaluando ambos operandos operandoIzquierdo y operandoDerecho */
operandoIzquierdo ??= 'operandoDerecho ejecutado';
console.log(operandoIzquierdo);
// 'operandoDerecho ejecutado'

/* 1) NO se evalua el operandoDerecho porque
operandoIzquierdo NO es null NI undefined

2) SOLAMENTE se evalua operandoIzquierdo */
operandoIzquierdo = 2;
operandoIzquierdo ??= 'operandoDerecho ejecutado';
console.log(operandoIzquierdo);
// 2

/* Ejemplo 4 - Operador ??= en objetoLiteral {}
Puedo usar el operador ??= para asignar valores por defecto a un objetoLiteral {}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment#using_nullish_coalescing_assignment

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value */

const prueba = (parametro) => {
  parametro.uno ??= 1;
  parametro.dos ??= 2;

  return parametro;
};

// Funcion q retorna un objeto literal {}
console.log(prueba);
// [Function: prueba]

/*  modificar el valor de la propiedad uno
y el valor de propiedad dos se conserva */
let objetoLiteral2 = prueba({ uno: 999 });
console.log(objetoLiteral2);
/*
{
  uno: 999,
  dos: 2
}
*/

objetoLiteral2 = prueba({});
console.log(objetoLiteral2);
/*
{
  uno: 1,
  dos: 2
}
*/

/* El operador ??= NO permite cambiar
el valor por defecto de sus propiedades
a null NI undefined

Como estoy intentando cambiar el valor del objeto a uno: null,
entonces se conserva su valor por defecto q es uno: 1, */
objetoLiteral2 = prueba({ uno: null });
console.log(objetoLiteral2);
/*
{
  uno: 1,
  dos: 2
}
*/
