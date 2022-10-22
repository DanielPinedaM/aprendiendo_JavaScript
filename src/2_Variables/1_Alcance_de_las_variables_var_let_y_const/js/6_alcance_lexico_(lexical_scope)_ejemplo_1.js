/*
Alcance Léxico (Lexical Scope)
El alcance de la función interna
puede acceder a las variables de la función externa.

En otras palabras:
Si defino unas variables dentro de la función externa
puedo acceder a esas variables
dentro de cualquier par de llaves {...}
q estén dentro de la función externa
*/

/* eslint-disable no-constant-condition */

console.log('\n****** 6_alcance_lexico_(lexical_scope).js ******');

/*
Ejemplo 1 - Funciones Anidadas:

Dmitri Pavlutin - Alcance de Funciones Anidadas:
https://dmitripavlutin.com/javascript-scope/#7-lexical-scope
*/

function funcionExterna() { /* alcance EXTERNO */
  const variableExterna = 'variable definida en funcion EXTERNA';
  console.log(variableExterna);
  /* variable definida en funcion EXTERNA */

  function funcionInterna() { /* alcance INTERNO (funcion anidada) */
    console.log(variableExterna);
    /* variable definida en funcion EXTERNA */
  }

  if (true) {
    console.log(variableExterna);
    /* variable definida en funcion EXTERNA */
  }

  return funcionInterna;
}

/* ERROR - variableExterna SOLAMENTE
se puede usar DENTRO del par de llaves de la funcionExterna() {...} */
/* console.log(variableExterna); */

const llamarFuncionAnidada = funcionExterna();
llamarFuncionAnidada();
