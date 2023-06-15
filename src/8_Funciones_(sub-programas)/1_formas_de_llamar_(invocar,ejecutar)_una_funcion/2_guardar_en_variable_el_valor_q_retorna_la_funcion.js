// @ts-nocheck

/* Guardar en una variable el valor q retorna return la funcion
(recuperar el valor de retorno de una funcion)
https://stackoverflow.com/questions/54259782/js-storing-a-function-as-a-variable

A esto también se le llama “recuperar (obtener) el valor de retorno de la función” */

function funcionQueRetorna() {
  const texto = 'la funcion ha retornado una cadena de texto';
  console.log(1);
  console.log(2);
  console.log(3);
  console.log('');

  return texto; // devolver (retornar)
}

/* Una variable puede tener como valor el return de una función

valorDeRetorno es lo q retorna la funcion,
q es la variable const texto */
const valorDeRetorno = funcionQueRetorna();
/*
1
2
3
*/

console.log(valorDeRetorno);
// la funcion ha retornado una cadena de texto

console.log(typeof valorDeRetorno);
// string
