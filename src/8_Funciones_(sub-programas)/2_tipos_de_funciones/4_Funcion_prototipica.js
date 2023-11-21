/* eslint-disable func-names */
/* eslint-disable max-len */

/* --------------------------------------------------- */

/* Ejemplo:
En JS las clases de compilan a una función prototípica,
como a continuacion: */

const animal = {
  // propiedad: valor,
  nombre: 'Snoopy',
  saludar() {
    return 'hola mundo';
  },
};
console.log(animal);
/*
{
  nombre: 'Snoopy',
  saludar: ƒ saludar()
}
*/

console.log(animal.nombre);    // 'Snoopy'
console.log(animal.saludar()); // 'hola mundo'

/* Definir los metodos DENTRO de la funcion es MALA PRACTICA ⚠️
porq hace q el metodo sea el mismo para todos los objetos */
function Animal2(nombre, genero) { // Funcion constructora:
  // Atributos
  this.nombre = nombre;
  this.genero = genero;

  /* Metodos:
     El metodo saludar es el mismo para TODOS los objetos */
  this.saludar = function () {
    return 'hola mundo';
  };

  this.comer = function () {
    return 'estoy comiendo';
  };
}

/* crear una nueva instancia (objeto) del tipo especificado,
   crear un nuevo objeto */
const snoopy = new Animal2('Snoopy', 'macho');
console.log(snoopy);
/*
Animal2 {
  nombre: 'Snoopy',
  genero: 'macho',
  saludar: ƒ (),
  comer: ƒ (),
  __proto__: { constructor: ƒ Animal2() }
}
*/

console.log(snoopy.saludar()); // 'hola mundo'
console.log(snoopy.comer());   // 'estoy comiendo'

const lolaBunny = new Animal2('Lola Bunny', 'hembra');
console.log(lolaBunny);
/*
Animal2 {
  nombre: 'Lola Bunny',
  genero: 'hembra',
  saludar: ƒ (),
  comer: ƒ (),
  __proto__: { constructor: ƒ Animal2() }
}
*/

console.log(lolaBunny.saludar()); // 'hola mundo'
console.log(lolaBunny.comer());   // 'estoy comiendo'

/* UENA PRACTICA:
   Funcion constructora donde asignamos
   los metodos al prototipo y NO la funcion como tal  */
function Animal3(nombre, genero) { // Funcion constructora
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

/* etodos agregados al ptototipo de la funcion constructora
   Para q los metodos sean DIFERENTES para cada uno de los objetos,
   se tienen que definir FUERA de la funcion

nombreFuncion.prototype.nombreMetodo */
Animal3.prototype.saludar = function () { // metodo
  return 'hola mundo';
};

Animal3.prototype.comer = function () { // metodo
  return 'estoy comiendo';
};

const snoopy2 = new Animal3('Snoopy', 'Macho');
console.log(snoopy2);
/*
Animal3 {
  nombre: 'Snoopy',
  genero: 'Macho',
  __proto__: {
    saludar: ƒ (),
    comer: ƒ (),
    constructor: ƒ Animal3()
  }
}
*/

console.log(snoopy2.saludar()); // 'hola mundo'
console.log(snoopy2.comer());   // 'estoy comiendo'

const lolaBunny2 = new Animal3('Lola Bunny', 'hembra');
console.log(lolaBunny2);
/*
Animal3 {
  nombre: 'Lola Bunny',
  genero: 'hembra',
  __proto__: {
    saludar: ƒ (),
    comer: ƒ (),
    constructor: ƒ Animal3()
  }
}
*/

console.log(lolaBunny2.saludar()); // 'hola mundo'
console.log(lolaBunny2.comer());   // 'estoy comiendo'
