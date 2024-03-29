// @ts-nocheck
// @ts-ignore
/* eslint-disable no-new-wrappers */

/* --------------------------------------------------- */

/*
Tutorial Jon Mircha - String() Cadenas de Texto:
https://youtu.be/s-C8OpALC6E

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
| ¿Permite concatenar (unir)?  |  ✔️                |  ✔️                  |
| +                            |                   |                     |
| +=                           |                   |                     |
| ,                            |                   |                     |
|------------------------------|-------------------|---------------------|
| ¿Permite interpolar?         |  X                |  ✔️                  |
| ${}                          |                   |                     |
|------------------------------------------------------------------------|

*/

/* ----------------------------------------------------------------------- */

const nombre = 'Daniel';
const apellido = 'Pineda';
console.log('\nMi nombre es:', nombre, apellido); /* Mi nombre es: Daniel Pineda */

console.log('nombre en MAYUSCULA:', nombre.toUpperCase()); /* nombre en MAYUSCULA: DANIEL */
console.log('apellido en minuscula:', apellido.toLowerCase()); /* apellido en minuscula: pineda */

/* ------------------------------------ */

/* new crea un nuevo objeto
String() de tipo cadena de texto */
const saludo3 = new String('hola mundo');
console.log('\n', saludo3);
/* [String: 'hola mundo'] */

/* el resultado es false porq new String() es un objeto
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String#string_constructor_and_string_function */
console.log(saludo3 === 'hola mundo');
/* false */

/* Recorrer (iterar) un objeto: https://youtu.be/Mz9HSiXSSVU */
Object.keys(saludo3).map((key) => {
  const value = saludo3[key];
  return console.log(key, ':', value);
});
/*
0: "h"
1: "o"
2: "l"
3: "a"
4: " "
5: "m"
6: "u"
7: "n"
8: "d"
9: "o"

length: 10
[[Prototype]]: String
[[PrimitiveValue]]: "hola mundo"
*/

console.log('\n.length Numeros de caracteres');
console.log(nombre, nombre.length); /* Daniel 6 */
console.log(apellido, apellido.length); /* Pineda 6 */
console.log(saludo3, saludo3.length); /* [String: 'hola mundo'] 10 */

/* ------------------------------------ */

const lorem = '  lorem ipsum dolor  ';
console.log('\nTexto ORIGINAL:', lorem);
/* Texto ORIGINAL:   lorem ipsum dolor
eliminar espacios en blanco al principio y al final lorem ipsum dolor */

console.log('eliminar espacios en blanco al principio y al final', lorem.trim());
/* eliminar espacios en blanco al principio y al final:lorem ipsum dolor */

const buscarPalabra1 = 'lorem ipsum';
const buscarPalabra2 = 'Daniel';
console.log('¿Existe la palabra?...');
console.log(buscarPalabra1, lorem.includes(buscarPalabra1)); /* lorem ipsum true */
console.log(buscarPalabra2, lorem.includes(buscarPalabra2)); /* Daniel false */

console.log('.split Convertir de string a array', lorem.split(''));
/*
.split Convertir de string a array
 [
  ' ', ' ', 'l', 'o', 'r',
  'e', 'm', ' ', 'i', 'p',
  's', 'u', 'm', ' ', 'd',
  'o', 'l', 'o', 'r', ' ',
  ' '
]
*/
