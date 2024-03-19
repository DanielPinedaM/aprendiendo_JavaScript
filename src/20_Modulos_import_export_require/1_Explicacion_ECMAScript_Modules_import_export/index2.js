/* eslint-disable indent */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Dentro del par de llaves {} esta el nombre de lo q se exporta (funciones, variables, etc)

import { nombreModulo } from 'rutaRelativa'

En Vanilla JavaScript cuando NO se escribe la extension .js da error
❌ GET http://127.0.0.1:5501/src/20_Modulos_import_export_require/1_Explicacion_ECMAScript_Modules_import_export/math net::ERR_ABORTED 404 (Not Found)

import { } from './math';

Resolve Extensions:
En cambio, en frameworks y librerias
(NodeJS, NestJS, Angular, React, Vue, etc.)
si se puede importar sin nombre de extension

- situar cursor dentro de par de llaves {}
- presionar control + barra espaciadora
- se auto-completan los export del archivo './math.js'

 Al importar la variable se soluciona el error
❌ Uncaught ReferenceError: secretNumber is not defined */

import {
    dividir,
    multiplicar,
    restar,
    secretNumber2,
    sumar,
} from './math.js';

console.log(secretNumber2);
// 40

console.log(
  sumar(1, 1),
);
// 1+1 = 2

console.log(
  restar(10, 5),
);
// 10-5 = 5

console.log(
  multiplicar(2, 2),
);
// 2*2 = 4

console.log(
  dividir(20, 2),
);
// 20/2 = 10
