/* eslint-disable no-prototype-builtins */
/* eslint-disable dot-notation */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-new-wrappers */
// @ts-nocheck

/* --------------------------------------------------- */

/* Tutorial Jon Mircha
= {}; Objetos (Diccionarios)
https://youtu.be/4xig5UPRC00 */

const objetoLiteral = {
  nombre: 'Daniel',
  edad: 99,
};

console.log(objetoLiteral);
/*
{
  nombre: 'Daniel',
  edad: 99
}
*/

/* --------------------------------------- */

const saludar = new String('hola mundo');
console.log(typeof saludar);
// object

/* --------------------------------------- */
// objeto vacio {}

console.log({});
// {}

console.log(typeof {});
// object

/* --------------------------------------- */
// new Object() Objeto Constructor (Mala Práctica)

const prototipo = new Object();
console.log(prototipo);
// {}

/* --------------------------------------- */
/* = {}; Notación Literal de Objeto (Object Literal Notation) (Buena Practica)

Un objeto es una lista de datos
compuestos por pares de propiedad: valor
en los que se puede definir un estado y comportamiento.

Un objeto puede tener como valor CUALQUIER tipo de dato

dentro de un objeto
a las variables se le llama atributos (propiedades)
y a las funciones se les llama metodos

SIEMPRE usar const para definir objetos */

const objetoLiteral2 = {
  nombre: 'Daniel', // objecto q contiene tipo string
  apellido: 'Mora',
  edad: 99, // objeto q contiene tipo number
  soltero: false, // objeto q contiene tipo boolean

  nombreCompleto: function () { // objeto q contiene una funcion (metodo)
    const miNombre = `mi nombre es ${this.nombre} ${this.apellido} y mi correo es ${this.contacto.correo}`;
    console.log(miNombre);

    return 'valor de retorno de la funcion';
  },

  contacto: { // objeto anidado: objeto q contiene otro objeto
    correo: 'hola_mundo@gmail.com',
    celular: 12345,
  },

  pasatiempos: ['calistenia', 'programar', 'dormir'], // objeto q contiene array
};

console.log(objetoLiteral2);
/* {nombre: 'Daniel', apellido: 'Mora', edad: 99, soltero: false, nombreCompleto: ƒ, ...}
{
  nombre: 'Daniel',
  apellido: 'Mora',
  edad: 99,
  soltero: false,
  nombreCompleto: [Function: nombreCompleto],
  contacto: { correo: 'hola_mundo@gmail.com', celular: 12345 },
  pasatiempos: [ 'calistenia', 'programar', 'dormir' ]
}
*/

// ejecutar funcion (metodo) q esta dentro del objetoLiteral
const valorReturn = objetoLiteral2.nombreCompleto();
// mi nombre es Daniel Mora y mi correo es hola_mundo@gmail.com

/* guardar en una variable
el valor del return
de la funcion (metodo)
q esta dentro del objeto */
console.log(valorReturn);
// valor de retorno de la funcion

/* para imprimir el valor de una propiedad
puedo usar corchetes [] ó punto .
con ambos obtengo el mismo resultado,
pero la forma mas usada es con el punto .
https://eslint.org/docs/latest/rules/dot-notation

imprimir el valor de la propiedad (clave) llamada nombre */
console.log(objetoLiteral2['nombre']);
// Daniel

console.log(objetoLiteral2.nombre);
// Daniel

// imprimir el valor de la propiedad (clave) soltero
console.log(objetoLiteral2.soltero);
// false

// imprimir metodo (funcion) q esta dentro del objetoLiteral
console.log(objetoLiteral2.nombreCompleto);
// [Function: nombreCompleto]

// imprimir objeto (contacto) q esta dentro del objetoLiteral (objeto anidado)
console.log(objetoLiteral2.contacto);
/*
{
  correo: 'hola_mundo@gmail.com',
  celular: 12345
}
*/

/* imprimir el valor de un objeto anidado

objetoLiteral nombre objeto padre
el objeto hijo es la propiedad contacto del objetoLiteral
contacto nombre objeto hijo (propiedad contacto del objetoLiteral)
correo valor de objeto hijo (contacto) */
console.log(objetoLiteral2.contacto.correo);
// 'hola_mundo@gmail.com',

// imprimir array pasatiempos q esta dentro del objetoLiteral
console.log(objetoLiteral2.pasatiempos);
/* (3) [ 'calistenia', 'programar', 'dormir' ]
0: "calistenia"
1: "programar"
2: "dormir" */

/* imprimir una posicion en especifico de un array q esta dentro de un objeto
nombreObjeto.nombreArray[numero Posicion] */
console.log(objetoLiteral2.pasatiempos[1]);
// programar

/* Object.keys() devuelve un array []
en el q las posiciones son numeros q empiezan desde cero
y los elementos son los nombres de las PROPIEDADES (CLAVES) del objeto {} */
const propiedades = Object.keys(objetoLiteral2);
console.log(propiedades);
/* (7) ['nombre', 'apellido', 'edad', 'soltero', 'nombreCompleto', 'contacto', 'pasatiempos']
0: "nombre"
1: "apellido"
2: "edad"
3: "soltero"
4: "nombreCompleto"
5: "contacto"
6: "pasatiempos"
length: 7
[[Prototype]]: Array(0) */

console.log(typeof propiedades);
// object

/* Actualizar (sobrescribir) un valor existente del objetoLiteral

antes estaba nombre: 'Daniel',
y ahora lo he actualizado a nombre: 'valor actualizado'

nombreObjeto.nombrePropiedad = 'nuevo valor' */
objetoLiteral2.nombre = 'valor actualizado';
console.log(objetoLiteral2);
/*
{
  nombre: 'valor actualizado',
  apellido: 'Mora',
  edad: 99,
  soltero: false,
  nombreCompleto: [Function: nombreCompleto],
  contacto: { correo: 'hola_mundo@gmail.com', celular: 12345 },
  pasatiempos: [ 'calistenia', 'programar', 'dormir' ]
}
*/

/* Object.values() devuelve un array []
en el q las posiciones son numeros q empiezan desde cero
y los elementos son los VALORES del objeto {} */
const valores = Object.values(objetoLiteral2);
console.log(valores);
/* (7) ['valor actualizado', 'Mora', 99, false, ƒ, {…}, Array(3)]
0: "valor actualizado"
1: "Mora"
2: 99
3: false
4: ƒ ()
5: {correo: 'hola_mundo@gmail.com', celular: 12345}
6: (3) ['calistenia', 'programar', 'dormir']
length: 7
[[Prototype]]: Array(0) */

/* .hasOwnProperty() Devuelve un boolean
para saber si existe o no la propiedad de un objeto

¿en el objetoLiteral existe la propiedad 'nombre'? -> true */
console.log(objetoLiteral2.hasOwnProperty('nombre'));
// true

// en el objetoLiteral NO existe la propiedadInexistente -> false
console.log(objetoLiteral2.hasOwnProperty('propiedadInexistente'));
// false
