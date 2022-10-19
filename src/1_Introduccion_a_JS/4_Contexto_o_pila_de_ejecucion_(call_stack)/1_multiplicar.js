/*  Tutorial: https://www.youtube.com/watch?v=ygA5U7Wgsg8&t=88s */

/**
 * @param {number} numero1
 * @param {number} numero2
 */
function mutiplicar(numero1, numero2) {
  return numero1 * numero2;
}

/**
 * @param {number} numero
 */
/* funcion doble() q llama a otra funcion mutiplicar() */
function doble(numero) {
  return mutiplicar(numero, 2); /* numero * 2 */
}

const resultado = doble(7); /* llamar funcion doble() */
console.log(`\nEl doble de 7 es ${resultado}`); /* 7 * 2 = 14 */

/*
Las funciones se apilan (call stack) asi:

let resultado = doble(7); llamar a funcion doble()
doble() se ubica en la parte mas abajo de la pila

|         |
|         |
| doble() |
|_________|
    PILA

console.log("El doble de 7 es " + resultado); llamar funcion multiplicar()
multiplicar() se ubica de ultimo, despues de doble()

|               |
| multiplicar() |
| doble()       |
|_______________|
      PILA

Lo q esta mas arriba de la pila es lo primero q se ejecuta,
en este caso primero se ejecuta multiplicar()
por eso es q "el último en entrar es el primero en salir (last in first out)"

Despues de que se ejecuta multiplicar()
se saca de la pila y ahora solo queda doble()

|         |
|         |
| doble() |
|_________|
    PILA

Si se ejecuta doble()
la pila queda vacia
y la ejecucion del codigo termina
|         |
|         |
|         |
|_________|
    PILA
*/
