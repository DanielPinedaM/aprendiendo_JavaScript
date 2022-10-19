/*  Tutorial:
https://www.youtube.com/watch?v=ygA5U7Wgsg8&t=88s
https://www.lacocinadelcodigo.com/static/ensalada_mixta.js */

const cortar = (ingrediente) => {
  /* detener ejecucion del codigo cuando el ingrediente sea lechuga */

  /*
  if (ingrediente === "lechuga") {
    throw new Error("NO se puede cortar la lechuga");
  }
*/

  console.log(`cortar ${ingrediente}`);
};

/**
 * @param {number} n
 */
function mezclarIngrediente(n) { /*  */
  if (n <= 0) return; /* ejecutar n=5 veces la funcion mezclarIngrediente(n) */

  console.log(`mezclar # ${n}`);
  mezclarIngrediente(n - 1);

  /* ERROR: la funcion mezclarIngrediente(n)
  se queda en bucle infinito
  porq siempre n=5 */
  /* mezclarIngrediente(n); */
}

function comer() {
  console.log('comer ');
}

/* Funcion q llama a otras funciones */
function hacerEnsalada() {
  cortar('tomate');
  cortar('lechuga');
  cortar('cebolla');
  mezclarIngrediente(5);
  comer();
}

console.log('\n');
hacerEnsalada();

/*
cortar tomate
cortar lechuga
cortar cebolla
mezclar # 5
mezclar # 4
mezclar # 3
mezclar # 2
mezclar # 1
comer
*/
