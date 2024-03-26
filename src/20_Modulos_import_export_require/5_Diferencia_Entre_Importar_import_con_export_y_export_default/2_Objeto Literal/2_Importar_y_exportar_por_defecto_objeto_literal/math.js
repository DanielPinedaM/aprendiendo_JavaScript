const numero = 99;

const array = [1, 2, 3];

const restar = (a, b) => a - b;
function sumar(a, b) {
  return a + b;
}

const obj = {
  nombre: 'Daniel',
  edad: 99,
  humano: true,
};

/* Exportar por defecto
en un objeto literal {}
las variables definidas en este archivo math.js */

export default {
  numero,
  array,

  restar,
  sumar,

  obj,
};
