/* eslint-disable func-names */
// @ts-nocheck

/* --------------------------------------------------------------- */

// Herencia Prototipica

/* --------------------------------------------------------------- */

/* Ejemplo:

ADVERTENCIA: ⚠️
Para q entiendas es mejor ver el video
porque este tema es complejo

Tutorial - Jon Mircha:
https://youtu.be/1-m7xtwvH1E

Lo siguiente tambien se puede hacer con clases.
En JS las clases se convierten a funciones igual que la siguiente forma */

function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
  return 'Hago sonidos por que estoy vivo';
};

Animal.prototype.saludar = function () {
  return `Hola me llamo ${this.nombre}`;
};

/* HERENCIA PROTOTIPICA:
Los parametros nombre y genero son de la funcion padre Animal()
y el parametro tamanio es de la funcion hija Perro() */

function Perro(nombre, genero, tamanio) { // funcion HIJA y funcion constructora
  // Ejecutar constructor Animal
  this.super = Animal; // variable_super = prototipo;

  // Herencia: Llamar al constructor de la funcion padre Animal
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

/*
- Perro es una instancia de Animal
- Perro esta heredando de Animal */
Perro.prototype = new Animal();

/*
- Crear constructor de funcion Perro.
- Perro hereda de Animal.
- Perro puede usar los metodos de Animal que son sonar y saludar. */
Perro.prototype.constructor = Perro;

/*
- La funcion hija Perro puede sobreescribir
los metodos (sonar y saludar) de la funcion padre Animal.

- Sobreescribir metodos del prototipo padre en el hijo */

Perro.prototype.sonar = function () {
  return 'Soy un perro y mi sonido es un ladrido';
};

// Crear un nuevo metodo SOLAMENTE para la funcion hija Perro
Perro.prototype.ladrar = function () {
  return 'Guauuu Guauuu !!!!';
};

/* snoopy hereda de Animal el metodo sonar
y de Perro hereda el metodo ladrar */

//                 Perro(nombre, genero, tamano)
const snoopy = new Perro('Snoopy', 'Macho', 'Mediano');

//                    Animal(nombre, genero)
const lolaBunny = new Animal('Lola Bunny', 'Hembra');

/* El prototipo de snoopy es Animal

Esto
 __proto__: {
    nombre: undefined,
    genero: undefined,
   // ...
}
es undefined porque se han sobrescrito y estan en el elemento hijo Perro

El metodo ladrar solamente esta en Perro,
NO en Animal */
console.log(snoopy);
/*
Perro {
  super: ƒ Animal(),
  nombre: 'Snoopy',
  genero: 'Macho',
  tamanio: 'Mediano',

  [[Prototype]]: Animal
  __proto__: {
    nombre: undefined,
    genero: undefined,
    constructor: ƒ Perro(),
    sonar: ƒ (),
    ladrar: ƒ (),
    saludar: ƒ ()
  }
}
*/

console.log(lolaBunny);
/*
Animal {
  nombre: 'Lola Bunny',
  genero: 'Hembra',

  [[Prototype]]: Object
  __proto__: {
    sonar: ƒ (),
    saludar: ƒ (),
    constructor: ƒ Animal()
  }
}
*/

/*
- Como snoopy.sonar(); fue sobrescrito
entonces el valor de retorno es diferente al de lolaBunny.sonar();

- Ambos metodos snoopy.saludar(); y lolaBunny.saludar();
devuelven 'Hola me llamo...' porque NO los sobrescribi

- Solamente a snoopy le he agregado un nuevo metodo .ladrar(),
por eso NO puedo invocar lolaBunny.ladrar(); y SI snoopy.ladrar(); */

snoopy.sonar();      // 'Soy un perro y mi sonido es un ladrido' -> Perro.prototype.sonar
snoopy.saludar();    // 'Hola me llamo Snoopy'                   -> Animal.prototype.saludar
snoopy.ladrar();     // 'Guauuu Guauuu !!!!'                     -> Perro.prototype.ladrar

lolaBunny.sonar();   // 'Hago sonidos por que estoy vivo'        -> Animal.prototype.sonar
lolaBunny.saludar(); // 'Hola me llamo Lola Bunny'               -> Animal.prototype.saludar
