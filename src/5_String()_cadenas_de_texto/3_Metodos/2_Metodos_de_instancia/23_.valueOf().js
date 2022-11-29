/* eslint-disable no-multi-spaces */
/* eslint-disable max-len */
// @ts-nocheck

/* Documentacion Oficial - .valueOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf

.valueOf() Convertir de Tipo Objeto new String() a Dato Primitivo String

Ejemplo:
Crear un string
con el constructor new String('') (mala practica)
y despues convertirlo a dato primitivo string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf#examples

ESLint - no-new-wrappers:
https://eslint.org/docs/latest/rules/no-new-wrappers */

const stringObjeto = new String('hola mundo'); // MALA PRACTICA new String()
console.log(stringObjeto);                     // String {'hola mundo'}
console.log(typeof stringObjeto);              // object

const string1 = stringObjeto.valueOf();
console.log(string1);                          // 'hola mundo'
console.log(typeof string1);                   // string

const string2 = String(stringObjeto);          // BUENA PRACTICA
console.log(string2);                          // 'hola mundo'
console.log(typeof string2);                   // string

/* Con ambos String() y .valueOf()
obtengo el mismo resultado,
puedo convertir de Tipo Objeto new String()
a Dato Primitivo String

¿el string que converti con String()
es lo mismo que el que converti con .valueOf()? */
console.log(string1 === string2);              // true

/* ------------------------------------------- */

/* .valueOf() NO es mala practica,
aunque como explique en
...aprendiendo_JS\src\2_Variables\4_Convertir_tipos_de_datos_(convertir_de_un_tipo_de_dato_a_otro)\tipado_dinamico,coercion.js
es mejor siempre usar String() y NO .valueOf()

veamos porque:

creo una variable const de tipo number */
const numero = 1;
console.log(numero);                  // 1
console.log(typeof numero);           // number

// .valueOf() NO esta convirtiendo el numero 1 a string
console.log(numero.valueOf());        // 1 -> es numero porq NO esta entre comillas ''
console.log(typeof numero.valueOf()); // number

// en cambio String() SI
console.log(String(numero));          // '1' -> las comillas '' significan que es string
console.log(typeof String(numero));  // string
