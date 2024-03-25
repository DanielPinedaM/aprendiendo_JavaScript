/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
/* eslint-disable import/first */
// @ts-nocheck

/* --------------------------------------------------- */

/* Comandos para ejecutar este archivo:
cd .../modulos/como_usar_ES_Modules_en_NodeJS
node index.js */

// En versiones antiguas de NodeJS (backend) se usaba CommonJS require
// const http = require("http");
// console.log(http);

/* para usar ECMAScript modules (import export):
- Crear package.json ejecutando npm init -y
- Al package.json agregar "type": "module",

Cuando NO hago lo anterior da este error:
// ❌ SyntaxError: Cannot use import statement outside a module */
import http from "http";
console.log(http);

import { add } from "./math.js";
console.log(add(1, 1));
// 1+1 = 2