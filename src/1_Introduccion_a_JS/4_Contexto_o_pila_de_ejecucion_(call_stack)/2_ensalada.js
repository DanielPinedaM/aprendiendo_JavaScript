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

  console.log("cortar " + ingrediente);
};

function mezclar_ingrediente(n) { /*  */
  if (n <= 0) return; /* ejecutar n=5 veces la funcion mezclar_ingrediente(n) */

  console.log("mezclar # " + n);
  mezclar_ingrediente(n - 1);

  /* ERROR: la funcion mezclar_ingrediente(n) 
  se queda en bucle infinito
  porq siempre n=5 */
  /* mezclar_ingrediente(n); */
}

function comer() {
  console.log("comer ");
}

/* Funcion q llama a otras funciones */
function hacer_ensalada() {
  cortar("tomate");
  cortar("lechuga");
  cortar("cebolla");
  mezclar_ingrediente(5);
  comer();
}

console.log("\n");
hacer_ensalada();

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
