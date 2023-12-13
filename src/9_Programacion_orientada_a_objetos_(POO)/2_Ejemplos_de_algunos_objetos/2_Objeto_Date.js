/* eslint-disable max-len */
/* eslint-disable camelcase */
// @ts-nocheck

/* --------------------------------------------------------------- */

/*
Objeto Date

NO necesitas aprender el objeto Date de JavaScript
porque los proyectos reales usan librerias para el tiempo:

Librerias para el tiempo en JS:
- MomentJS (obsoleto)
https://momentjs.com/

- DayJS
https://day.js.org/

Tutorial - Jon Mircha:
https://youtu.be/aIHQsAjRLYU

Documentacion Oficial...
- Lista de Todos los Objetos en JS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

- Objeto Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- Constructor Date()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

- API Temporal de JS
https://tc39.es/proposal-temporal/docs/index.html

https://www.proposals.es/proposals/Temporal

https://github.com/tc39/proposal-temporal

Wikipedia - Tiempo universal coordinado (UTC):
https://en.wikipedia.org/wiki/Coordinated_Universal_Time

Date sirve para fechas y horas (año, mes, día, hora, minutos, segundos y milisegundos).

Es un numero entero.

Es un momento en el tiempo (epoca).
https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range

Es un número entero que representa los milisegundos
desde la media noche del 1 de enero de 1970,
en formato de Tiempo Universal Coordinado (UTC).
https://developer.mozilla.org/en-US/docs/Glossary/Unix_time

*/

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Imprimir objeto Date
https://youtu.be/aIHQsAjRLYU */

// Date es una funcion de codigo nativo de JS
console.log(Date);
// ƒ Date() { [native code] }

/*
Imprimir la fecha y hora actual del pais donde se ejecute el codigo

Tue Dec 12 2023 martes 12 de Diciembre del 2023

22:38:35 son las 11 de la noche con 38 minutos y 35 segundos

GMT-0500 Es la hora de Colombia q esta a -5 horas del meridiano de greenwich
https://en.wikipedia.org/wiki/Prime_meridian_(Greenwich)

https://es.wikipedia.org/wiki/UTC-05:00 */

console.log(Date());                    // Tue Dec 12 2023 22:38:35 GMT-0500 (hora estándar de Colombia)
console.log(new Date());                // Tue Dec 12 2023 22:38:35 GMT-0500 (hora estándar de Colombia)

const fecha_y_hora_actual = new Date();
console.log(fecha_y_hora_actual);       // Tue Dec 12 2023 22:38:35 GMT-0500 (hora estándar de Colombia)

/* --------------------------------------------------------------- */

/* Ejemplo 2
https://youtu.be/aIHQsAjRLYU */
