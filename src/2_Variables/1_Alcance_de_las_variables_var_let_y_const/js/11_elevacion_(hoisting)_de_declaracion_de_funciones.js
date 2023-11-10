/*
Tutorial La Cocina del Codigo - Elevación (Hoisting)
https://youtu.be/uI6o97A4IrI

En JS puedo llamar las funciones
antes de definirlas
(esto se llama flotar / elevación / hoisting)

Dependiendo del tipo de función
esta tiene o no elevación (hoisting):
Las declaración de función SI tienen elevación (hoisting),
en cambio
la expresión de función NO tiene elevación (hoisting).

La sintaxis de la declaración de función y expresión de función es diferente.
*/

/* Ejemplo 4 - Elevación de DECLARACION de Función: */

/* MALA PRACTICA */
declaracionDeFuncion1(); /* primero llamo la DECLARACION de Funcion */

function declaracionDeFuncion1() { /* y despues la defino */
  console.log(`esto es una funcion declarada,
               puede invocarse en cualquier parte del codigo,
               incluso antes de q la funcion sea declarada (definida)`);
}

declaracionDeFuncion1();

/*
esto es una funcion declarada,
puede invocarse en cualquier parte del codigo,
incluso antes de q la funcion sea declarada (definida)

esto es una funcion declarada,
puede invocarse en cualquier parte del codigo,
incluso antes de q la funcion sea declarada (definida)
*/

/* *** */

/* FORMA CORRECTA */
function declaracionDeFuncion2() { /* Primero DEFINO la DECLARACION de Funcion */
  console.log('hola mundo 2');
}
declaracionDeFuncion2(); /* y DESPUES LLAMO la funcion */
/* hola mundo 2 */

/* ---------------------------------- */

/* Ejemplo 5 - La EXPRESION de Función NO Tiene Elevación: */

expresionDeFuncion();                  /* llamar funcion */

var expresionDeFuncion = function () { /* definir EXPRESION de funcion */
  console.log('hola mundo 3');
};
/*
ERROR - No se puede llamar una EXPRESION de funcion antes de definirla

VM13:1 Uncaught TypeError: expresionDeFuncion is not a function
    at <anonymous>:1:1
(anónimas) @ VM13:1
*/

/* ---------------------------------- */

/* = () => {}; arrow function

Las arrow function NO tienen elevacion (hoisting) */

funcionFlecha(); // ERROR (Reference Error)

const funcionFlecha = () => {
  console.log('hola mundo 2');
};

funcionFlecha();
/* hola mundo 2 */
