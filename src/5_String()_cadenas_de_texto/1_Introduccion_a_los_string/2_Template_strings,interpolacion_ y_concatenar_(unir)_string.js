/* eslint-disable no-multi-str */
// @ts-nocheck

/*
Tutorial Jon Mircha - Template literals (Template strings):
https://youtu.be/arOXcy7K4XQ

|------------------------------------------------------------------------|
| Cadena de Texto              | Literal de cadena | Plantilla de cadena |
|                              | (string literals, | (template literal,  |
|                              | regular string)   | template string )   |
|------------------------------|-------------------|---------------------|
| Tipo de Comillas             |  Simples ' '      |  Invertidas ` `     |
|                              |  Dobles " "       |                     |
|------------------------------|-------------------|---------------------|
| ¿Ocupa un solo o             |  Uno              |  Varias             |
| varias líneas (renglones)    |                   |                     |
| de código?                   |                   |                     |
|------------------------------|-------------------|---------------------|
| ¿Permite concatenar (unir)?  |  ✓                |  ✓                  |
| +                            |                   |                     |
| +=                           |                   |                     |
| ,                            |                   |                     |
|------------------------------|-------------------|---------------------|
| ¿Permite interpolar?         |  X                |  ✓                  |
| ${}                          |                   |                     |
|------------------------------------------------------------------------|

La extensión de VS Code llamada
Template String Converter meganrogge
inserta automáticamente
las comillas invertidas ``
cuando escribes ${} a una variable:
https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter
*/

const nombre = 'Daniel';
console.log(nombre);
/* Daniel */

const apellido = 'Pineda';
console.log(apellido);
/* Pineda */

/* cConcatenar es unir uno o más string. */
const saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo2);
/* Hola mi nombre es Daniel Pineda */

console.log(`Hola mi nombre es ${nombre} ${apellido}`);
/* Hola mi nombre es Daniel Pineda */

let saludo = 'Hola mi nombre es';
console.log('prueba');
console.log(saludo, nombre, apellido);

/* Interpolacion es meter una variable dentro de un string */
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

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#long_literal_strings */
ul = '<ul>'
  + '<li>Primavera</li>'
  + '<li>Verano</li>'
  + '<li>Otoño</li>'
  + '<li>Invierno</li>'
  + '</ul>';
console.log(ul);
/* <ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul> */

/* Cada barra invertida \ es un salto de linea (renglon) */
ul = '<ul> \
  <li>Primavera</li> \
  <li>Verano</li> \
  <li>Otoño</li> \
  <li>Invierno</li> \
  </ul>';
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
