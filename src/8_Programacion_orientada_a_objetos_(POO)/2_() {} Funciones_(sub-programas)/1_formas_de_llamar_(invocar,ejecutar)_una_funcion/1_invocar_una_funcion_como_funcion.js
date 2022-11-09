// @ts-nocheck

/* ----------------------------------------------- */

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

/* ----------------------------------------------- */

/* funcion SIN parametros */

function funcionSaludar1() {
  console.log('hola mundo');
}

funcionSaludar1();
// hola mundo

/* ----------------------------------------------- */

/* funcion con parametros y argumentos */

function funcionSaludar2(nombre, edad) {
  console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`);
}

const nombre = 'Daniel';
const edad = 99;

funcionSaludar2(nombre, edad);
/* hola mi nombre es Daniel y tengo 99 años */

funcionSaludar2();
/* hola mi nombre es undefined y tengo undefined años */

/* ----------------------------------------------- */

/* Asignarle valores por defecto (argumentos) a los parámetros de la función:

Parametros: nombre2
            edad2

Argumentos: 'Daniel'
            99 */
function funcionSaludar3(nombre2 = 'Daniel', edad2 = 99) {
  console.log(`hola mi nombre es ${nombre2} y tengo ${edad2} años`);
}

funcionSaludar3();
// hola mi nombre es Daniel y tengo 99 años

/* ----------------------------------------------- */

/* Dentro de la funcion  () {}
todo lo que este escrito antes del return se ejecuta (por eso tiene que ir de ultimo)
y lo que este después del return se ignora (no se ejecuta) */

/* FORMA INCORRECTA */
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
los numeros 3 y 4
q estan despues del return */
numeros();
/*
1
2
*/
