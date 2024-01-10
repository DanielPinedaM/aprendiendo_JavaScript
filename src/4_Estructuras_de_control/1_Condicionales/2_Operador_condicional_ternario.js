/* eslint-disable no-else-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
(condition ? ifTrue : ifFalse)
Operador Condicional Ternario
para Abreviar if () {} else {}
(Conditional Ternary Operator)

Recordatorio:
Ver:
- " 4.3.1.3.1) Truthy (Verdadero) "

- " 4.3.1.3.2) Falsy (Falso) "

Convertir de Operador Condicional Ternario a if () {} else {}
https://converter.website-dev.eu/

Tutorial...
- Midudev:
https://youtu.be/8jooZieM48E

https://youtu.be/YFES8Nm6uF4

- Jon Mircha:
https://www.youtube.com/watch?v=9h5hyh_wDjo&t=1234s

Documentación Oficial - Operador Condicional Ternario
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

El operador condicional ternario
hace exactamente lo mismo que if () {} else {}
pero en una sola linea de codigo

Es el unico operador de JS q tiene 3 operandos:
condition, ifTrue y ifFalse

Sintaxis:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#syntax

(condition ? ifTrue : ifFalse)

Donde...
- condition
Condicional que se evalua para saber ¿que bloque de codigo se ejecuta?

- ifTrue
Codigo que se ejecuta cuando el condicional es truthy (verdadero)

- ifFalse
Codigo que se ejecuta cuando el condicional es falsy (falso) */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Validar Cuando una Variable es null, undefined, NaN, "" Carácter Vacío, " " Espacio en Blanco, 0, false
https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in */

// ESTO ...
const validar = (variable) => (
  variable && String(variable).trim() !== ''
    ? 'valor Truthy (verdadero)'
    : 'valor Falsy (falso)'
);

console.log(validar(1));
// 'valor Truthy (verdadero)'

// ES LO MISMO Q ESTO:
const validar2 = (variable2) => {
  if (variable2 && String(variable2).trim() !== '') {
    return 'valor Truthy (verdadero)';
  }
  return 'valor Falsy (falso)'; // puedo escribir o no el else {}
};

console.log(validar2('hola mundo'));
// 'valor Truthy (verdadero)'

/* --------------------------------------------------------------- */

/* Ejemplo 2 - Operador Condicional Ternario - ¿Mayor o Menor de Edad?:
https://www.youtube.com/watch?v=9h5hyh_wDjo&t=1234s

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#a_simple_example

Recordatorio:
Ver:
" Ejemplo 3 - if () {} else {} - ¿Mayor o Menor de Edad?: "

SI la edad es MAYOR O IGUAL Q 18 entonces es MAYOR de edad,
SINO es MENOR Q 18 entonces es MENOR de edad

El operador condicional ternario
se puede usar como valor de retorno de una funcion
como a continuacion: */

const mayorMenorDeEdad = (edad) => (edad >= 18 ? 'MAYOR de edad' : 'MENOR de edad');

console.log(mayorMenorDeEdad(18)); // 'MAYOR de edad'
console.log(mayorMenorDeEdad(17)); // 'MENOR de edad'

/* --------------------------------------------------------------- */

/* Ejemplo 3 - ¿El numero es 0?
https://youtu.be/YFES8Nm6uF4 */

const numero = 0;
console.log(numero);
// 0

const esCero = (numero === 0)
  ? 'numero CERO'               // devuelve si es true
  : 'numero DIFERENTE de cero'; // "            " false

console.log(esCero);
// 'numero CERO'

/* --------------------------------------------------------------- */

/* Ejemplo 4
https://www.youtube.com/watch?v=YFES8Nm6uF4&t=79s

Ejecutar funcion en un operador condicional ternario

Cuando sean las 7am se ejecuta la funcion saludar() */

const saludar = () => 'buenos dias';
console.log(saludar());
// 'buenos dias'

const hora = '7am';
console.log(hora);
// '7am'

const condicionalTernario = hora === '7am' ? saludar() : 'NO dar los buenos dias';
console.log(condicionalTernario);
// 'buenos dias'

/* --------------------------------------------------------------- */

/* Ejemplo 5 - Operador Condicional Ternario Anidado

Tutorial de Midudev:
https://youtu.be/8jooZieM48E

https://twitter.com/midudev/status/1475422236043530242?lang=es

Documentación Oficial:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#conditional_chains

ESLint - no-nested-ternary - NO permitir operador condicional ternario anidado
https://eslint.org/docs/latest/rules/no-nested-ternary

El operador condicional ternario
se puede anidar pero esto es MALA PRACTICA
porq es código espagueti,
lo correcto es usarlo SIN anidar,
si necesito anidar entonces usar if () {} else {} */

// MALA PRACTICA:
const tiempo = (segundos) => {
  return (
    segundos <= 60    ? 'segundos' :
    segundos <= 3600  ? 'minutos'  :
    segundos <= 86400 ? 'horas'    :
                        'dias'
  );
};

console.log(tiempo(30));
// "segundos"

// BUENA PRACTICA:
const tiempo2 = (segundos2) => {
  if (segundos2 <= 60) {
    return 'segundos';
  } else if (segundos2 <= 3600) {
    return 'minutos';
  } else if (segundos2 <= 86400) {
    return 'horas';
  } else {
    return 'dias';
  }
};

console.log(tiempo2(86000));
// 'horas'

/* --------------------------------------------------------------- */

/* Ejemplo 6 - Validar si existe o no la propiedad de un objeto literal {}
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator#handling_null_values */

const validarObjetoLiteral = (persona) => {
  const nombre = persona?.nombre
                 ? persona.nombre // SI existe la propiedad person.nombre
                 : 'otro nombre'; // NO "                               "

  return nombre;
};

// Devuelve 'Daniel' q es el valor de la propiedad persona.nombre
console.log(validarObjetoLiteral({ nombre: 'Daniel' }));
// 'Daniel'

// Devuelve 'otro nombre' porque NO existe la propiedad persona.nombre
console.log(validarObjetoLiteral(null));         // 'otro nombre'
console.log(validarObjetoLiteral('hola mundo')); // 'otro nombre'
