const saludar = 'hola mundo';   // '' string

const array = [1, 2, 3];        // [] array

const obj = {                   // {} objero literal
  uno: 1,
  dos: 2,
  tres: 3,
};

const restar = (a, b) => a - b; // funcion flecha
function sumar(a, b) {          // funcion regular
  return a + b;
}

module.exports = {
  saludar,
  array,
  obj,

  sumar,
  restar,
};
