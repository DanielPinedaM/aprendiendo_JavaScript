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
