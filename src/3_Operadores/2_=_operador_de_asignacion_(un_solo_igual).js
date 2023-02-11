// @ts-nocheck
/* eslint-disable no-multi-spaces */

/* --------------------------------------------------------------- */

/*
= Operador de asignación (un solo igual)
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
