/*
Dmitri Pavlutin - Aislamiento de Variables (Variables Isolation):
https://dmitripavlutin.com/javascript-scope/#8-variables-isolation
*/

/* eslint-disable no-constant-condition */

/* Puedo AISLAR las variables
para q tengan el MISMO NOMBRE en
DIFERENTES PARES DE LLAVES */

/* cada par de llaves {} define un alcance en bloq (block scope) */
{
  /* la variable tiene el mismoNombre
  porq esta en PARES DE LLAVES DIFERENTES */
  const mismoNombre = 1;
  console.log(mismoNombre);
  /* 1 */
}

{
  const mismoNombre = 2;
  console.log(mismoNombre);
  /* 2 */
}

if (true) {
  const mismoNombre = 3;
  console.log(mismoNombre);
  /* 3 */
}

function prueba1() {
  const mismoNombre = 4;
  console.log(mismoNombre);
  /* 4 */
}

function prueba2() {
  const mismoNombre = 5;
  console.log(mismoNombre);
  /* 5 */
}

/* llamar funciones */
prueba1();
prueba2();
