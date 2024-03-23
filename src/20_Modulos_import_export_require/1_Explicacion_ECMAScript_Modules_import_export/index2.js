/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-duplicates */
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
  sumar as add, // export necesita alias (as) para cambiar nombre de funcion importada
  array2,
  dividir,
  dos,
  Math,
  multiplicar,
  nombre,
  obj,
  restar,
  secretNumber2,
  tres,
  uno,
  x, y,
} from './math.js';

import exportDefaultObjetoLiteral from './1_export_default/objeto_literal.js';
import exportDefaultCualquierVariable, { array } from './1_export_default/objeto_q_exporta_cualquier_variable.js';

/* export default se importa SIN {},
NO necesita as para cambiar nombre de importacion */
import moduloMath from './math.js'; // 40

import * as todo from './3_importar_y_exportar_todo/math.js';
console.log(moduloMath);    // 'modulo math'

/* export se importa CON {} */
console.log(nombre);        // 'modulo math'

console.log(secretNumber2);

/* ERROR: no se puede importar y definir el mismo nombre de funcion,
la solucion a esto es un alias
const restar = (a, b) => a - b;
❌ Uncaught SyntaxError: Identifier 'restar' has already been declared */
console.log(
  restar(10, 5),
);
// 10-5 = 5

/* La funcion q defino en index2.js
const sumar = (a, b) => `'${a} ${b}'`;
y q exporto en math.js
export const sumar = (a, b) => a + b;
tienen el mismo nombre: sumar

add:             importado de math.js, en math.js la funcion se llama sumar
const sumar ...: funcion q defino en index2.js */
console.log(add(1, 1));   // 1+1 = 2
/* console.log(sumar(1, 1));
❌ Uncaught ReferenceError: sumar is not defined */
const sumar = (a, b) => `'${a} ${b}'`;
console.log(sumar(1, 1)); // '1 1'

console.log(
  multiplicar(2, 2),
);
// 2*2 = 4

console.log(
  dividir(20, 2),
);
// 20/2 = 10

console.log(x); // 30
console.log(y); // 100

// Instanciar clase
const math = new Math();
console.log(math);
// Math {}
//   [[Prototype]]: Object
//     constructor: class Math
//     double: ƒ double(number)
//     [[Prototype]]: Object

// ejecutar metodo (funcion) double()
console.log(math.double(2));
// 2*2 = 4

console.log(obj);
/*
{
  uno: 1,
  dos: 2,
  tres: 3
}
*/
console.log(obj.uno);    // 1
console.log(obj.dos);    // 2
console.log(obj.tres);   // 3
console.log(obj.cuatro); // undefined

console.log(exportDefaultCualquierVariable);
/*
{
  numero: 99,
  obj: { saludar: 'hola mundo' },
  restar: (a, b) => a - b,
  sumar: ƒ sumar(a, b)
}
*/
console.log(exportDefaultCualquierVariable.restar(10, 5)); // 10-5 = 5

console.log(exportDefaultObjetoLiteral);        // { nombre: 'Daniel' }
console.log(exportDefaultObjetoLiteral.nombre); // 'Daniel'

console.log(array); // (3) [1, 2, 3]

console.log(array2);             // (3) [1, 2, 3]
console.log(uno);               // 1
console.log(dos);               // 2
console.log(tres);              // 3

console.log(todo);
/*
Module {
         Symbol(Symbol.toStringTag): 'Module',
         uno: 1,
         get uno: ƒ ()
         set uno: ƒ (),

         dos: 2,
         get dos: ƒ (),
         set dos: ƒ ()
       }
*/
console.log(todo.uno); // 1
console.log(todo.dos); // 2
