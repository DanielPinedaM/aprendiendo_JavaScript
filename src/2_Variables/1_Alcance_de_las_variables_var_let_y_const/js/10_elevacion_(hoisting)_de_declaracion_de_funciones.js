/*
Tutorial La Cocina del Codigo - Elevación (Hoisting)
https://youtu.be/uI6o97A4IrI
*/

/* Ejemplo 4 - Elevación de DECLARACION de Función: */

/* MALA PRACTICA */
declaracionDeFuncion1(); /* primero llamo la DECLARACION de Funcion */
function declaracionDeFuncion1() { /* y despues la defino */
  console.log('hola mundo 1');
}
/* hola mundo 1 */

/* FORMA CORRECTA */
function declaracionDeFuncion2() { /* Primero DEFINO la DECLARACION de Funcion */
  console.log('hola mundo 2');
}
declaracionDeFuncion2(); /* y DESPUES LLAMO la funcion */

/* ---------------------------------- */

/* Ejemplo 5 - La EXPRESION de Función NO Tiene Elevación: */
expresionDeFuncion();
var expresionDeFuncion = function() {
  console.log('hola mundo 3');
}

/* 
ERROR - No se puede llamar una EXPRESION de funcion antes de definirla

VM13:1 Uncaught TypeError: expresionDeFuncion is not a function
    at <anonymous>:1:1
(anónimas) @ VM13:1
*/
