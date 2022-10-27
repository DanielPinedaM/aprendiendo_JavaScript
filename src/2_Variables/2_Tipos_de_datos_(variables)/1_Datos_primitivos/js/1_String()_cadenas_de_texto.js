/*
Tutorial Jon Mircha - String() Cadenas de Texto:
https://youtu.be/s-C8OpALC6E
*/

/* eslint-disable no-new-wrappers */
// @ts-ignore

const nombre = 'Daniel';
const apellido = 'Pineda';
console.log('\nMi nombre es:', nombre, apellido); /* Mi nombre es: Daniel Pineda */

console.log('nombre en MAYUSCULA:', nombre.toUpperCase()); /* nombre en MAYUSCULA: DANIEL */
console.log('apellido en minuscula:', apellido.toLowerCase()); /* apellido en minuscula: pineda */

/* ------------------------------------ */

/* new crea un nuevo objeto
String() de tipo cadena de texto */
const saludo2 = new String('hola mundo');
console.log('\n', saludo2);
/* [String: 'hola mundo'] */

/* Recorrer (iterar) un objeto: https://youtu.be/Mz9HSiXSSVU */
Object.keys(saludo2).map((key) => {
  const value = saludo2[key];
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
console.log(saludo2, saludo2.length); /* [String: 'hola mundo'] 10 */

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
