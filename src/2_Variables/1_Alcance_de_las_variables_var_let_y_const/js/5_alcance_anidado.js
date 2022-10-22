/*
Alcance Anidado (Nested Scope):
https://dmitripavlutin.com/javascript-scope/#5-scopes-can-be-nested
*/

/* eslint-disable no-constant-condition */

console.log('\n****** 5_alcance_anidado.js ******');

function alcanceAnidado() { /* este par de llaves de la FUNCION define UN alcance */
  const mensajeFuncion = 'DENTRO de la FUNCION';
  console.log(mensajeFuncion);
  /* DENTRO de la FUNCION */

  if (true) { /* este otro par de llaves del condicional SI define OTRO alcance */
    const mensajeIf = 'DENTRO del IF';
    console.log(mensajeIf);
    /* DENTRO del IF */

    console.log(mensajeFuncion, 'y DENTRO del IF');
    /* DENTRO de la FUNCION y DENTRO del IF */
  }

  /* ERROR - mensajeIf SOLAMENTE se puede usar DENTRO del if() {} */
  /* console.log(mensajeIf); */
}

alcanceAnidado();
