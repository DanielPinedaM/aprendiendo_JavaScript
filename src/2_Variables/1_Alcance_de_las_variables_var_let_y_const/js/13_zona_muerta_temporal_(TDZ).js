/*
Tutorial La Cocina del Codigo - Zona Muerta Temporal (Temporal Dead Zone, TDZ)
https://youtu.be/cTfGyVFrLxQ

Zona Muerta Temporal
Es una parte del código JS
donde la variable no se puede acceder porq
la ejecución del programa todavía no ha pasado por esa línea de código
donde está declarada (definida).
*/

// @ts-nocheck

let edad = getEdad();

/* ERROR: variable edad no definida,
la variable edad esta en su zona muerta temporal */
const edad = 99;

function getEdad() {
    return edad;
}

/* --------------------------- */

/* Código corregido: */
function getEdad() {
    const edad2 = 99;   /* primero se define la variable */
    return edad2;
}

let edad2 = getEdad();  /* y despues se llama la funcion */
console.log(edad2);     /* 99 */
