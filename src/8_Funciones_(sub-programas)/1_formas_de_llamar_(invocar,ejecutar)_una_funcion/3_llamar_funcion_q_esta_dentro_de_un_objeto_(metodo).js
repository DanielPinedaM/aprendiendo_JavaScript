// @ts-nocheck

/* -------------------------------------------------- */
// Ejemplo 1 - Creando una nueva función directamente dentro del objeto:

const objetoNombre = {
  nombre: 'Daniel',
  apellido: 'Pineda',

  nombreCompleto: function funcionNombreCompleto() {
    const miNombre = `mi nombre es ${objetoNombre.nombre} ${objetoNombre.apellido}`;
    console.log(miNombre);

    return miNombre;
  },
};

// Imprimir el objetoNombre
console.log(objetoNombre);
/*
{
  nombre: 'Daniel',
  apellido: 'Pineda',
  nombreCompleto: [Function: funcionNombreCompleto]
}
*/

// Ejecutar la funcionNombreCompleto() {}
objetoNombre.nombreCompleto();
// mi nombre es Daniel Pineda

/* -------------------------------------------------- */
// Ejemplo 2 - agregando una nueva propiedad (clave) de tipo Symbol() con el valor de una funcion

const saludar = Symbol('saludar');

// = {} objeto
const objetoPersona = {
  nombre: 'Daniel',
};

console.log(objetoPersona);
// { nombre: 'Daniel' }

/* En el objetoPersona
agregar una nueva propiedad de tipo Symbol()
con el valor de una funcion funcionSimbolo()

nombreObjeto[nombreSymbol] = function nombreFuncion () {} */
objetoPersona[saludar] = function funcionSimbolo() {
  console.log('hola mundo');
};

console.log(objetoPersona);
/*
{
  nombre: 'Daniel',
  [Symbol(saludar)]: [Function: funcionSimbolo]
}
*/

/* Ejecutar la funcionSimbolo()
q esta dentro del objetoPersona */
objetoPersona[saludar](); // nombreObjeto[nombreSymbol]();
// hola mundo
