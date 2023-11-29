/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */
/* eslint-disable max-classes-per-file */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
13.5) class {} Clases, Herencia y extend Subclases

Recordatorio:
Antes de entender las clases hay q ver estos videos:
- " 13.3) Función Prototípica https://youtu.be/nS5FmAx4u_0 "

- " 13.4) Herencia Prototípica   https://youtu.be/1-m7xtwvH1E "

Tutorial...
- Jon Mircha:
https://youtu.be/C86JvqET61A

- La Cocina del Código:
https://youtu.be/R1LmvJ1_4QM

https://youtu.be/Do81bfct_bk

Documentacion Oficial...
* Clases:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

* Declaracion de Clase:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class

* Palabra Reservada class:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class

* extends
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends

* super
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

- Samantha Ming:
https://www.samanthaming.com/tidbits/39-es6-classes/

- JavaScript Info - Clases:
https://javascript.info/classes

- ESLint Airbnb - Clases:
https://airbnb.io/javascript/#classes--constructors */

/* --------------------------------------------------------------- */

/* Ejemplo:
https://youtu.be/C86JvqET61A */

// ESTO...
function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;

  // Metodos
  this.sonar = function () {
    return 'hago sonidos por que estoy vivo';
  };

  this.saludar = function () {
    return `hola me llamo ${this.nombre}`;
  };
}

//                    Animal(nombre, genero)
const lolaBunny = new Animal('Lola Bunny', 'Hembra'); // Instanciar clase
console.log(lolaBunny);
/*
Animal {
  nombre: 'Lola Bunny',
  genero: 'Hembra',
  sonar: ƒ (),
  saludar: ƒ (),
  __proto__: { constructor: ƒ Animal() }
}
*/

// ES LO MISMO Q ESTO:
class Animal2 {
  // El constructor es un metodo especial q se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
  }

  // Metodos
  sonar() { // Los metodos SI pueden recibir parametros
    return 'hago sonidos por que estoy vivo';
  }

  saludar() {
    return `hola me llamo ${this.nombre}`;
  }
}

/* Herencia:
La sub-clase Perro hereda de la clase Animal2

Crearle a scooby su clase Perro */
class Perro extends Animal2 {
  constructor(nombre, genero, tamanio) {
  // Con el metodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  sonar() {
    return 'Soy un perro y mi sonido es un ladrido';
  }

  ladrar() {
    return 'Guauuu Guauuu !!!!';
  }
}

// Los metodos sonar y saludar estan en el prototipo __proto__
//          constructor (nombre, genero)
const mimi = new Animal2('Mimi', 'Hembra'); // Instanciar clase
console.log(mimi);
/*
Animal2 {
  nombre: 'Mimi',
  genero: 'Hembra',
  __proto__: {
    constructor: ƒ Animal2(),
    sonar: ƒ sonar(),
    saludar: ƒ saludar()
  }
}
*/

//           constructor(nombre, genero, tamanio)
const scooby = new Perro('Scooby', 'Macho', 'Gigante'); // Instanciar clase
console.log(scooby);
/*
Perro {
  nombre: 'Scooby',
  genero: 'Macho',
  tamanio: 'Gigante',
  __proto__: {
    constructor: ƒ Perro(),
    sonar: ƒ sonar(),
    ladrar: ƒ ladrar()
  }
}
*/

// Ejecutar metodos
mimi.sonar();     // 'hago sonidos por que estoy vivo'
mimi.saludar();   // 'hola me llamo Mimi'

scooby.sonar();   // 'Soy un perro y mi sonido es un ladrido'
scooby.ladrar();  // 'Guauuu Guauuu !!!!'
scooby.saludar(); // 'hola me llamo Scooby'
