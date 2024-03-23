// @ts-nocheck

/* --------------------------------------------------- */

// Importar JSON https://examples.deno.land/importing-json 

import archivo from "./data.json" with { type: "json" };
console.log(archivo);
/*
{
  completado: false,
  id: 1,
  titulo: "hola mundo"
}
*/

console.log(archivo.completado);           // false
console.log(archivo.id);                   // 1
console.log(archivo.titulo);               // "hola mundo"
console.log(archivo.propiedadInexistente); // undefined

const module = await import("./data.json", {
    with: { type: "json" },
  });
  console.log(module);
