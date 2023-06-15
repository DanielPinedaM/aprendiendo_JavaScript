// @ts-nocheck
/* eslint-disable new-cap */

/*
El problema de hacer esto es que
si se puede ejecutar la función
pero no puedes guardar
el valor de retorno return
de la función en un constructor,
porque como puedes ver en la línea 34
se está imprimiendo sumar {}
que es el nombre del constructor
y NO se esta imprimiendo
el valor del return que es 2 (porque 1 + 1 = 2).
*/

/**
 * @param {number} n1
 * @param {number} n2
 */

function sumar(n1, n2) {
  const resultado = n1 + n2;
  console.log(`${n1} + ${n2} = ${resultado}`);

  return resultado; // 2
}

// new crea un nuevo constructor (objeto)
const llamarFuncion = new sumar(1, 1);
// 1 + 1 = 2

console.log(llamarFuncion);
// sumar {}

console.log(typeof llamarFuncion);
// object
