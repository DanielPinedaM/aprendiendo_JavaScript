// @ts-nocheck

/* --------------------------------------------------- */

// Importar JSON https://examples.deno.land/importing-json 

import data from "./data.json" with { type: "json" };
console.log(data);
/*
{
  completado: false,
  id: 1,
  titulo: "hola mundo"
}
*/

console.log(data.completado);           // false
console.log(data.id);                   // 1
console.log(data.titulo);               // "hola mundo"
console.log(data.propiedadInexistente); // undefined
