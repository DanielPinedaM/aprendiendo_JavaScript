/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-new-object */
// @ts-nocheck
/* eslint-disable max-len */

/*
Object.prototype.constructor Constructor del Objeto

Documentacion Oficial...
- Object.prototype.constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

- Object() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object

- constructor en clases:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

Es una propiedad del constructor de la instancia objeto Object()

Devuelve una referencia a la función constructora que creó el objeto de la instancia
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor#value

El valor de esta propiedad es una referencia a la función en sí,
NO un string que contiene el nombre de la función.

Se crea de forma predeterminada en la propiedad prototype de cada funcion de constructor
y la heredan todos los objetos creados por ese constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

Todos los objetos excepto los objetos q tiene null como prototipo
Object.create(null) tienen la propiedad constructor en su prototipo [[Prototype]]

Los objetos literales tambien tienen la propiedad constructor
q apunta al tipo de constructor para ese objeto

Ejemplo:
- Arrays

- Objetos literales
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor#description

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

Recordatorio:
Ver:
" 12.1.5.2.1) Diferencias y Similitudes Entre Object.defineProperty() y Object.defineProperties() - Agregar Propiedades de Objeto... "

|---------------------------------------------------------------------------|
|                               Atributo                                    |
|--------------------------------------------------|------------------------|
| MUtable                                          | ✓  writable: true,     |
|--------------------------------------------------|------------------------|
| Visible                                          | X  enumerable: false,  |
|--------------------------------------------------|------------------------|
| ¿Puedo cambiar el valor de                       | ✓  configurable: true, |
| las propiedades value: writable: y enumerable: ? |                        |
|--------------------------------------------------|------------------------|

En este resumen NO estan todos los ejemplos,
abre el siguiente link de la MDN para ver todos los ejemplos:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor#examples */

/* --------------------------------------------------------------- */

// Ejemplo 1

console.log(Object.prototype.constructor);
// [Function: Object]
// ƒ Object() { [native code] }

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Ejemplo basico de Object.prototype.constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor#displaying_the_constructor_of_an_object */

/* crea un constructor Tree
y un objeto de ese tipo theTree */
function Tree(nombre) {
  this.nombre = nombre;
}

/* Imprimir theTree.constructor
la propiedad constructor del objeto theTree */
const theTree = new Tree('hola mundo');

console.log(theTree);
// Tree { nombre: 'hola mundo' }

console.log(`${theTree.constructor}`);
/*
'function Tree(nombre) {
    this.nombre = nombre;
}'
*/
