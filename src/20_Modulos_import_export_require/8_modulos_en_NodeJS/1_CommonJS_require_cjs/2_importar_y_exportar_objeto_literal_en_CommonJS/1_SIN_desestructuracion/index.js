/* eslint-disable import/extensions */

/* --------------------------------------------------- */

// importar SIN desestructuracion
const math = require('./math.js');

console.log(math.saludar); // 'hola mundo'

console.log(math.array);   // (3) [1, 2, 3]

console.log(math.obj);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/
console.log(math.obj.uno);                  // 1
console.log(math.obj.dos);                  // 2
console.log(math.obj.tres);                 // 3
console.log(math.obj.propiedadInexistente); // undefined

console.log(
  math.restar(10, 1),
);
// 10-1 = 9

console.log(
  math.sumar(1, 1),
);
// 1+1 = 2
