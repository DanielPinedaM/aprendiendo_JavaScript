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

// CommonJS require module
const sumar = require('./math.js');

console.log(
  sumar(1, 1),
);
// 1+1 = 2
