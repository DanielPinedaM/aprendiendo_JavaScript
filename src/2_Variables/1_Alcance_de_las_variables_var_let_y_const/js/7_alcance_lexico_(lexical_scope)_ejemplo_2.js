/*
Ejemplo 2 - Alcance de Funcion que Llama a Otra Funcion:
https://dmitripavlutin.com/simple-explanation-of-javascript-closures/#4-the-closure
*/

function funcionExterna() { /* Funcion anidada */
  const variableExterna = 'variable definida en funcion EXTERNA';
  console.log(variableExterna);
  /* variable definida en funcion EXTERNA */

  function funcionInterna() {
    console.log(variableExterna);
    /* variable definida en funcion EXTERNA */
  }

  return funcionInterna;
}

function funcionEjecutar() { /* Funcion que Llama a Otra Funcion */
  const llamarFuncionAnidada = funcionExterna();
  llamarFuncionAnidada();

  /* ERROR - variableExterna SOLAMENTE
  se puede usar DENTRO del par de llaves de la funcionExterna() {...} */
  /*  console.log(variableExterna); */
}
funcionEjecutar();

/* console.log(variableExterna); */
