/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
/* eslint-disable import/first */
// @ts-nocheck

/* --------------------------------------------------- */

/*
Midudev
¿En NodeJS Cómo Usar ES Modules import export y CommonJS require?
Extensiones de CommonJS .cjs, ES Modules .mjs y JavaScript .js
https://www.youtube.com/watch?v=yB4n_K7dZV8&t=1968s
*/

/* --------------------------------------------------- */

/* Comandos para ejecutar este archivo:
cd .../CommonJS
node index.cjs */

// En versiones antiguas de NodeJS (backend) se usaba CommonJS require
const http = require("http");
console.log(http);

const sumar = require("./math.js");
console.log(
  sumar(1, 1),
);
// 1+1 = 2
