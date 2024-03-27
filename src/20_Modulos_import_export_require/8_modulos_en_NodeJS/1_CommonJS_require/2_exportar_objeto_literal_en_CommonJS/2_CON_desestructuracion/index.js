/* eslint-disable import/extensions */

/* --------------------------------------------------- */

const {
  saludar, array, obj, restar, sumar,
} = require('./math.js');

console.log(saludar); // 'hola mundo'

console.log(array);   // (3) [1, 2, 3]

console.log(obj);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/
console.log(obj.uno);                  // 1
console.log(obj.dos);                  // 2
console.log(obj.tres);                 // 3
console.log(obj.propiedadInexistente); // undefined

console.log(
  restar(10, 1),
);
// 10-1 = 9

console.log(
  sumar(1, 1),
);
// 1+1 = 2
