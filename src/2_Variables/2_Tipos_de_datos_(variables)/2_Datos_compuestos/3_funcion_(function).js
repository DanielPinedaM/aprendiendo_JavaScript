/* eslint-disable func-names */
// @ts-nocheck

/* Tutorial Jon Mircha
() {} Funciones (Sub-programas):
https://youtu.be/H6U1Pm7x60E

¿Qué es una Función?
() {} Funciones y sub-programas es lo mismo.

Una función es una parte de código que se repite
porque lo necesito usar en varias partes de mi programa,
entonces en ves de copiar y pegar muchas veces el mismo código,
es mejor crear una función
que haga esa tarea que necesito
y después usar esa función
las veces que necesite
en cualquier parte de mi programa,
así no tengo que estar copiando y pegando,
sino que con la función
puedo hacer una tarea las veces que necesite.
Por eso es que a la función también se le llama sub-programa,
porque las funciones son una parte del programa.

En JS las () {} funciones también son = {}; objetos

Cada función crea un alcance (scope).

Cada nombre de función es único,
NO pueden existir dos funciones con el mismo nombre

Es opcional que las funciones tengan return y parametros

Las funciones son de primera clase
porque puede asignarse a un valor,
pueden pasarse como argumentos
y usarse como un valor de retorno return */

/* ------------------------------------------------------------ */
/* Declaracion de funcion */

// definir funcion
function declaracionDeFuncion() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log('');
}

/* Las funciones se pueden llamar (invocar, ejecutar)
cualquier número de veces
en cualquier parte del código
después de definirlas */
declaracionDeFuncion();
declaracionDeFuncion();
declaracionDeFuncion();
/*
1
2
3

1
2
3

1
2
3
*/

/* *** */
/* RECUPERAR EL VALOR DEL return */

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
console.log(valorDeRetorno); // la funcion ha retornado una cadena de texto
/*
1
2
3

la funcion ha retornado una cadena de texto
*/

/* *** */

/* Dentro de la funcion  () {}
todo lo que este escrito antes del return se ejecuta (por eso tiene que ir de ultimo)
y lo que este después del return se ignora (no se ejecuta) */

function numeros() {
  const saludar = 'hola mundo';
  console.log(saludar);

  console.log(1);
  console.log(2);
  /* ERROR: el return siempre se tiene q escribir
  antes de cerrar las llaves } de la funcion */
  return saludar;
  console.log(3);
  console.log(4);
}

/* No se estan imprimiendo
los nuemros 3 y 4
q estan despues del return */
numeros();
/*
1
2
*/

/* *** */
// funcion con parametros

function saludar(nombre, edad) {
  console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`);
}

const nombre = 'Daniel';
const edad = 99;

saludar(nombre, edad);
/* hola mi nombre es Daniel y tengo 99 años */

saludar();
/* hola mi nombre es undefined y tengo undefined años */

/* *** */

/* Asignarle valores por defecto a los parametros de la funcion */
function saludar2(nombre2 = 'Daniel', edad2 = 99) {
  console.log(`hola mi nombre es ${nombre2} y tengo ${edad2} años`);
}

saludar2();

/* ------------------------------------------------------------ */
// elevacion (hoisting) de declaracion de funcion

funcionDeclarada();

function funcionDeclarada() {
  console.log(`esto es una funcion declarada,
  puede invocarse en cualquier parte del codigo,
  incluso antes de q la funcion sea declarada (definida)`);
  console.log('');
}

funcionDeclarada();

/*
esto es una funcion declarada,
puede invocarse en cualquier parte del codigo,
incluso antes de q la funcion sea declarada (definida)

esto es una funcion declarada,
puede invocarse en cualquier parte del codigo,
incluso antes de q la funcion sea declarada (definida)
*/

/* funcion anonima (Expresion de funcion):
- Es una funcion q no tiene nombre
- Al valor de la variable se le asigna la funcion
- Las expresion de funcion NO tienen elevacion (hoisting) */

funcionExpresada(); // ERROR (Reference Error)

const funcionExpresada = function () {
  console.log('hola mundo 1');
};

funcionExpresada();

/* ------------------------------------------------------------ */

/* = () => {}; arrow function

Las arrow function NO tienen elevacion (hoisting) */

funcionFlecha(); // ERROR (Reference Error)

const funcionFlecha = () => {
  console.log('hola mundo 2');
};

funcionFlecha();
/* hola mundo 2 */
