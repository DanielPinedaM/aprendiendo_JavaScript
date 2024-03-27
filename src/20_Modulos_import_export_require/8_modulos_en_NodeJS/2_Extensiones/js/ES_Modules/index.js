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

/*
Comandos para ejecutar este archivo:
cd .../ES_Modules
node index.js

para usar ECMAScript modules (import export):
- Crear package.json ejecutando npm init -y
- Al package.json agregar "type": "module",

Cuando NO hago lo anterior da este error:
// ❌ SyntaxError: Cannot use import statement outside a module */
import http from "http";
console.log(http);

import { sumar } from "./math.js";
console.log(sumar(1, 1));
// 1+1 = 2
