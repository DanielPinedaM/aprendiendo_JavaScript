/*
Punto y coma en JS
Es buena practica usar el punto y coma en JS para evitar errores.
Aqui hay un ejemplo:

Airbnb: https://airbnb.io/javascript/#semicolons

ERROR
Uncaught TypeError: "prueba 1" is not a function
at <anonymous>:2:1 */
/*
const reaction = 'prueba 1'
(async function meanwhileOnTheFalcon() {
  console.log('prueba 2')
}());
console.log(reaction)
*/

/* CORRECTO */
const reaction = 'prueba 1';
(async function meanwhileOnTheFalcon() {
  console.log('prueba 2');
}());
console.log(reaction);
