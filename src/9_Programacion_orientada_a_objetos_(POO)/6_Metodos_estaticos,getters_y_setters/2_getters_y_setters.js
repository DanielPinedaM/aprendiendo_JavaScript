/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
get Obtener (getter) y set Establecer (setter) Valores de los Atributos en la Clase

Tutorial - Jon Mircha:
https://youtu.be/TEzu31q9MVA

JavaScript Info - get Getters y set Setters
https://javascript.info/property-accessors

Documentación Oficial...
- get
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

- set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

Ambos, get y set son metodos

get OBTIENE los valores de los atributos en la clase
en cambio,
set ESTABLECE (asigna) los valores de los atributos en la clase */

/* --------------------------------------------------------------- */

/* Ejemplo:
https://youtu.be/TEzu31q9MVA */

class Perro {
  constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
    this.raza = null;
  }

  // get OBTENER la raza
  get getRaza() {
    return this.raza;
  }

  /* set ESTABLECER la raza
     se tiene q escribir el atributo (raza) a establecer */
  set setRaza(raza) {
    this.raza = raza;
  }
}

const scooby = new Perro('Scooby', 'Macho');
/*
En un principio la raza es null porque no la he seteado:
raza: null
getRaza: null */
console.log(scooby);
/*
Perro {
  nombre: 'Scooby',
  genero: 'Macho',
  raza: null,
  __proto__: {
    constructor: ƒ Perro(),
    getRaza: null,
    setRaza: undefined
  }
}
*/

/*
ERROR:
La forma correcta de ejecutar get y set es SIN parentesis () */
// scooby.getRaza();
// ❌ TypeError: scooby.getRaza is not a function

// scooby.setRaza('Gran Danes');
// ❌ TypeError: scooby.setRaza is not a function

/*
FORMA CORRECTA:
Como no he seteado (set) el valor de la raza
entonces tiene su valor por defecto que es this.raza = null; */
console.log(scooby.getRaza);
// null

// set Setear (asignar, guardar) en la raza el valor "Gran Danes"
scooby.setRaza = 'Gran Danes';

// get Obtener el valor de la raza
console.log(scooby.getRaza);
// 'Gran Danes'

/*
El valor de raza ha cambiado despues de setearlo
raza: 'Gran Danes'
getRaza: 'Gran Danes' */
console.log(scooby);
/*
Perro {
  nombre: 'Scooby',
  genero: 'Macho',
  raza: 'Gran Danes',
  __proto__: {
    constructor: ƒ Perro(),
    getRaza: 'Gran Danes',
    setRaza: undefined
  }
}
*/
