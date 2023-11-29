// @ts-nocheck

/* --------------------------------------------------------------- */

/*
static Métodos estáticos

Tutorial - Jon Mircha:
https://youtu.be/TEzu31q9MVA

Documentación Oficial - static
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks */

/* --------------------------------------------------------------- */

/* Ejemplo:
https://youtu.be/TEzu31q9MVA */

class Perro {
  constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
  }

  saludar() {
    return `hola me llamo ${this.nombre} y mi genero es ${this.genero}`;
  }

  // metodo estatico
  static queEres() {
    return 'somos animales mamíferos, caninos y los mejores amigos del hombre';
  }
}

// Llamar metodo saludar() instanciando la clase Perro
//        constructor (nombre, genero)
const mimi = new Perro('Scooby', 'macho'); // instanciar clase
mimi.saludar();
// 'hola me llamo Scooby y mi genero es macho'

/*
Un metodo estatico se puede ejecutar directamente
sin necesidad de instanciar la clase */
//                     NombreClase.NombreMetodoEstatico
const metodoEstatico = Perro.queEres();
console.log(metodoEstatico);
// 'somos animales mamíferos, caninos y los mejores amigos del hombre'
