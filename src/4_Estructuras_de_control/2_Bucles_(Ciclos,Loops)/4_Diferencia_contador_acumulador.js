/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Contador:
- Numero de veces que ocurre un condicional
- Numero de veces q se ejecuta un bucle
- Se suele representar con la variable i
- Puede ser en incrementos (de menor a mayor, ascendente) i++ o decrementos i-- (de mayor a menor, descendente)
- Se incrementa o decrementa al finalizar el bucle
- Normalmente es una suma que va de uno en uno (0, 1, 2...)

Acumulador:
- Suma (total) de cantidades numericas mientras que se itera */

/* --------------------------------------------------------------- */

// Ejemplo 1:

const numeros = [10, 20, 30];
console.log(numeros);
// (3) [10, 20, 30]

let i = 0;
console.log(i);
// 0

let acumulador = 0;
console.log(acumulador);
// 0

while (i < numeros.length) {
  console.log(`${acumulador} + ${numeros[i]} = ${acumulador + numeros[i]}`);
  acumulador += numeros[i]; // acumulador = acumulador + numeros[i]

  i++;
}
/*
'0+10  = 10'
'10+20 = 30'
'30+30 = 60'
*/

console.log(acumulador);
// 60

/* --------------------------------------------------------------- */

/* Ejemplo 2:
1) Imprimir los numeros pares desde 0 hasta i
2) Incrementar i de dos en dos i += 2 */

const par = (numero) => {
  for (let i = 0; i <= numero; i += 2) {
    console.log(i);
  }
};

par(5);
/*
0
2
4
*/

par(10);
/*
0
2
4
6
8
10
*/
