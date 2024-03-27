/* eslint-disable import/extensions */

/* --------------------------------------------------- */

/*
DenoJS - CommonJS
https://deno.com/blog/commonjs-is-hurting-javascript 

BunJS - CommonJS
https://bun.sh/blog/commonjs-is-not-going-away 

Tutorial - Midudev
https://www.youtube.com/watch?app=desktop&v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=1&t=1794s

https://www.youtube.com/watch?app=desktop&v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=1&t=2131s
*/

/* --------------------------------------------------- */

// importar CON desestructuracion
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
