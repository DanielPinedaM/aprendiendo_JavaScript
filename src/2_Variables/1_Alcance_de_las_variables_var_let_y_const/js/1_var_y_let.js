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

Elevación (Hoisting)
Hace q las variables se definan al principio del codigo,
sacando la variable de su par de llaves {...}
esto hace q las variables sean globales
*/

console.log('****** 1_var_y_let.js ******');

/* var a = 3; */
var holaMundo = 'hola mundo';
let helloWorld = 'hello world';

console.log(holaMundo);  /* hola mundo */
console.log(helloWorld); /* hello world */

console.log(window);
console.log(window.holaMundo); /* las variables definidas con var se agregan al objeto window */
console.log(window.helloWorld);

/* ALCANCE EN BLOQ (block scope) */
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
{ /* esto es un Bloque de Código Independiente {...} */
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
FUNCIONES
function name(params) {

}

ESTRUCTURAS DE CONTROL
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
*/

// Sin bloques
function f() { return 1; }
console.log( f() ); // 1

function f() { return 2; }
console.log( f() ); // 1

// Con bloques
function f() { return 1; }
console.log( f() ); // 1

{
  console.log( f() ); // 2
  function f() { return 2; }
  console.log( f() ); // 2
}

console.log( f() ); // 2
