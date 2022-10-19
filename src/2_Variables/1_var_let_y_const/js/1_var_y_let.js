/*
Tutorial Jon Mircha - var y let:
https://youtu.be/tmRa0_EvMoc
https://jonmircha.com/ecmascript#variables-y-constantes

RESUMEN:
1) NUNCA usar var
2) Usar let cuando necesite cambiar (reasignar) el valor de la variable.
3) Usar const cuando el valor de la variable NO cambie (inmutabilidad / reasignar).

var es mala practica, NUNCA usarlo porq:
1) En proyectos grandes es dificil saber cual es el valor de una variable global
2) No se deben crear nuevas variables en los OBJETOS de JS usando var
   -----------------------------------------------------------------------
   | las variables definidas                    |  el objeto             |
   | con var se guardan en...                   |  se puede ver asi...   |
   ---------------------------------------------------------------------
   | - objeto window en el navegador (frontend) |  console.log(window);  |
   | - objeto global en NodeJS (backend)        |  console.log(global);  |
   -----------------------------------------------------------------------

let y const tienen un alcance (scope) de BLOQ
en el cual se encuentra definida la variable y no la función,
en cambio var es GLOBAL

Alcance de las Variables (Scope)
  1) Global: var tiene el mismo valor en TODO el archivo .js
  2) Modulo:
  3) Función: El valor de la variable solo esta disponible DENTRO de la FUNCION
  4) Bloque: Cada par de llaves {...} define un valor (alcance) de la variable

Elevación (Hoisting)
Hace q las variables se definan al principio del codigo,
sacando la variable de su par de llaves {...}
esto hace q las variables sean globales
*/

console.log('****** 1_var_y_let.js ******');

/* var a = 3; */
var holaMundo = 'hola mundo';
let helloWorld = 'hello world';

console.log(holaMundo);
console.log(helloWorld);

console.log(window);
console.log(window.holaMundo); /* las variables definidas con var se agregan al objeto window */
console.log(window.hello);

/* AMBITO EN BLOQ */
/* var */
console.log('\n', '\n', 'var');

/*
if (true) {
    var a = 3;
}
*/

var musica = 'Rock';
console.log('\nvariable VAR musica ANTES del bloq {/*...*/}', musica);
/* Rock */
var musica = 'Reggaeton'; /* elevacion (hoisting) */
{ /* esto es un bloq {...} */
  /* var musica = 'Reggaeton'; */
  console.log('variable VAR musica DENTRO del bloq {/*...*/}', musica);
  /* Reggaeton */
}
console.log('variable VAR musica DESPUES del bloq {/*...*/}', musica);
/* Reggaeton */

/* let */
console.log('\n', '\n', 'let');
let musica2 = 'Rock';
console.log('\nvariable LET musica2 ANTES del bloq {/*...*/}', musica2);
/* Rock */
{
  let musica2 = 'Reggaeton';
  console.log('variable LET musica2 DENTRO del bloq {/*...*/}', musica2);
  /* Reggaeton */
}
console.log('variable LET musica2 DESPUES del bloq {/*...*/}', musica2);
/* Rock */

/* Mas ejemplos de ambito en bloq */
/*
if (condition) {

} else {

}

switch (expression) {
    case 'value':

        break;
    default:
        break;
}

for (let index = 0; index < array.length; index++) {

}

while (condition) {

}

function name(params) {

}
*/
