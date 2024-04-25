// @ts-nocheck
/* eslint-disable import/named */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable import/extensions */

/* --------------------------------------------------- */

// Importar import { export1 } from "module-name";  y Exportar export expression;

// export se importa CON {}
import {
    array,
    dos,
    id,
    Math,
    multiplicar,
    nombre,
    numeroGrande,
    obj,
    secretNumber,
    sumar,
    tres,
    uno,
    x,
    y,
} from './math.js';

console.log(secretNumber);      // 40
console.log(nombre);            // 'modulo math'
console.log(x);                 // 30
console.log(y);                 // 100

console.log(numeroGrande);      // 999n

console.log(id);                // Symbol(id)

console.log(sumar(1, 1));       // 1+1 = 2
console.log(multiplicar(5, 2)); // 5*2 = 10

console.log(array);             // (3) [1, 2, 3]
console.log(uno);               // 1
console.log(dos);               // 2
console.log(tres);              // 3

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

// Instanciar clase
const math = new Math();
console.log(math);
// Math {}
//   [[Prototype]]: Object
//       constructor: class Math
//       double:   ƒ double(number)
//       [[Prototype]]: Object

// Ejecutar metodo (funcion) double()
console.log(
    math.double(2),
);
// 2*2 = 4
