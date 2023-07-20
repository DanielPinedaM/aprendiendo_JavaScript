// @ts-nocheck

/* --------------------------------------------------- */

/*
Aquí solo escribí las formas de iterar un array bidimensional,
en el siguiente link hay mas información:

Free Code Camp - [ [] ] Array Bidimensional (Anidado):
https://www.freecodecamp.org/news/javascript-2d-arrays/
*/

/* --------------------------------------------------- */

const arrayBidimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrayBidimensional);
/*
(3) [Array(3), Array(3), Array(3)]
0: (3) [1, 2, 3]
1: (3) [4, 5, 6]
2: (3) [7, 8, 9]
*/

/*
 ▄▄▄▄▄▄▄
 █ for █
 ▀▀▀▀▀▀▀
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

for itera 2 veces para obtener las filas ↔ y columnas ↕ */

for (let i = 0; i < arrayBidimensional.length; i++) { // fila ↔
  const fila = arrayBidimensional[i];

  for (let j = 0; j < fila.length; j++) {             // columna  ↕
    console.log(`indice [${i}][${j}] = ${fila[j]}`);
  }
}
/*
indice [0][0] = 1
indice [0][1] = 2
indice [0][2] = 3
indice [1][0] = 4
indice [1][1] = 5
indice [1][2] = 6
indice [2][0] = 7
indice [2][1] = 8
indice [2][2] = 9
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .forEach() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://midu.dev/foreach-mas-rapido-for/

Recorrer (Iterar) Array y ejecutar una función para cada elemento

.forEach() itera 2 veces para obtener las filas ↔ y columnas ↕ */

arrayBidimensional.forEach((fila, i) => { // fila ↔
  fila.forEach((columna, j) => {          // columna  ↕
    console.log(`indice [${i}][${j}] = ${columna}`);
  });
});
/*
indice [0][0] = 1
indice [0][1] = 2
indice [0][2] = 3
indice [1][0] = 4
indice [1][1] = 5
indice [1][2] = 6
indice [2][0] = 7
indice [2][1] = 8
indice [2][2] = 9
*/

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ .flat(Infinity).map() █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
https://youtu.be/em_Vh7ZGrnw

https://youtu.be/FMubfnVET74

.flat(Infinity) Aplana array con cualquier numero de dimensiones (array de N dimensiones)

.map() itera el array y al juntarlo con .flat(Infinity) devuelve el array unidimensional []

.flat(Infinity).map() itera una sola vez */

const aplanarMapear = arrayBidimensional.flat(Infinity).map((elemento, i) => {
  console.log(`i=${i} ➜ elemento='${elemento}'`);

  return elemento;
});
/*
i=0 ➜ elemento='1'
i=1 ➜ elemento='2'
i=2 ➜ elemento='3'
i=3 ➜ elemento='4'
i=4 ➜ elemento='5'
i=5 ➜ elemento='6'
i=6 ➜ elemento='7'
i=7 ➜ elemento='8'
i=8 ➜ elemento='9'
*/

console.log(aplanarMapear);
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
