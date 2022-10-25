/*
Tutorial Jon Mircha - Template Strings:
https://youtu.be/arOXcy7K4XQ
*/

// @ts-nocheck
const nombre = 'Daniel';
console.log(nombre);
/* Daniel */

const apellido = 'Pineda';
console.log(apellido);
/* Pineda */

/* Para concatenar puedo usar
+
+=
,
*/
const saludo2 = 'Hola mi nombre es ' + nombre + ' ' + apellido;
console.log(saludo2);
/* Hola mi nombre es Daniel Pineda */

console.log('Hola mi nombre es ' + nombre + ' ' + apellido);
/* Hola mi nombre es Daniel Pineda */

let saludo = 'Hola mi nombre es';
console.log('prueba');
console.log(saludo, nombre, apellido);

/* Interpolacion es meter una variable dentro de un string

Para interpolar hay q usar ${}

Los Template String se escriben con comillas invertidas `` 
y sirven para escribir texto en VARIAS lineas (renglones),
en cambio las comills simples '' sirven para escribir texto en UNA SOLA linea (renglon) */
saludo = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo);
/* Hola mi nombre es Daniel Pineda */

let ul = '<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>';
console.log(ul);
/* <ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul> */

ul = `
<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
`;
console.log(ul);
/* 
<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
*/

ul =
  '<ul>' +
  '<li>Primavera</li>' +
  '<li>Verano</li>' +
  '<li>Otoño</li>' +
  '<li>Invierno</li>' +
  '</ul>';
console.log(ul);
/* <ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul> */

ul = '<ul>';
console.log(ul); /* <ul> */
/* operador += agrega nuevos string */
ul += '<li>Primavera</li>';
ul += '<li>Verano</li>';
ul += '<li>Otoño</li>';
ul += '<li>Invierno</li>';
ul += '</ul>';
console.log(ul);
/* <ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul> */
