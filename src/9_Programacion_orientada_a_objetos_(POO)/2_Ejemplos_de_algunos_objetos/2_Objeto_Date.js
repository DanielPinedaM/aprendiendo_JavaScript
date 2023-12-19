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
https://developer.mozilla.org/en-US/docs/Glossary/Unix_time */

/* --------------------------------------------------------------- */

/* Ejemplo 1 - Imprimir objeto Date
https://youtu.be/aIHQsAjRLYU */

// Date es una funcion de codigo nativo de JS
console.log(Date);
// ƒ Date() { [native code] }

/*
Imprimir la fecha y hora actual del pais donde se ejecute el codigo

Sat Dec 16 2023 sabado 16 de Diciembre del 2023

21:13:14 son las 9 de la noche con 13 minutos y 14 segundos

GMT-0500 Es la hora de Colombia q esta a -5 horas del meridiano de greenwich
https://en.wikipedia.org/wiki/Prime_meridian_(Greenwich)

https://es.wikipedia.org/wiki/UTC-05:00 */

console.log(Date());                    // Sat Dec 16 2023 21:13:14 GMT-0500 (hora estándar de Colombia)
console.log(new Date());                // Sat Dec 16 2023 21:13:14 GMT-0500 (hora estándar de Colombia)

const fecha_y_hora_actual = new Date();
console.log(fecha_y_hora_actual);       // Sat Dec 16 2023 21:13:14 GMT-0500 (hora estándar de Colombia)

/* --------------------------------------------------------------- */

/* Ejemplo 2 - .getDate() Numero de dia del mes actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate */

console.log(fecha_y_hora_actual.getDate());        // 16
console.log(typeof fecha_y_hora_actual.getDate()); // 'number'

/* --------------------------------------------------------------- */

/* Ejemplo 3 - .getDay() Numero de dia de la semana actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay

|---------------------|-----------|
| Numero de la semana | Día       |
|---------------------|-----------|
| 0                   | Domingo   |
| 1                   | Lunes     |
| 2                   | Martes    |
| 3                   | Miercoles |
| 4                   | Jueves    |
| 5                   | Viernes   |
| 6                   | Sabado    |
|---------------------|-----------| */

console.log(fecha_y_hora_actual.getDay());        // 6
console.log(typeof fecha_y_hora_actual.getDay()); // 'number'

/* --- */

const diaDeLaSemana = () => {
  const fecha_y_hora_actual2 = new Date();
  const dia = fecha_y_hora_actual2.getDay();
  const nombreDiasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  //                           0          1        2          3           4          5         6      -> POSICIONES (INDICES)

  return nombreDiasSemana[dia];
};
console.log(diaDeLaSemana());
// 'Sabado'

/* --------------------------------------------------------------- */

/* Ejemplo 4 - .getMonth() Numero de mes actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

|--------|------------|
| Numero | Mes        |
|--------|------------|
| 0      | enero      |
| 1      | febrero    |
| 2      | marzo      |
| 3      | abril      |
| 4      | mayo       |
| 5      | junio      |
| 6      | julio      |
| 7      | agosto     |
| 8      | septiembre |
| 9      | octubre    |
| 10     | noviembre  |
| 11     | diciembre  |
|--------|------------| */

console.log(fecha_y_hora_actual.getMonth());        // 11
console.log(typeof fecha_y_hora_actual.getMonth()); // 'number'

/* --- */

const mesActual = fecha_y_hora_actual.getMonth();
const nombreMes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
//                   0         1          2        3       4        5        6        7          8            9           10           11       -> POSICIONES (INDICES)

console.log(nombreMes[mesActual]); // 'diciembre'

/* --------------------------------------------------------------- */

/* Ejemplo 5 - .getFullYear() Numero de año actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear */

console.log(fecha_y_hora_actual.getFullYear());        // 2023
console.log(typeof fecha_y_hora_actual.getFullYear()); // 'number'

/* --------------------------------------------------------------- */

/* Ejemplo 6 - .getHours() Hora Militar Actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours */

console.log(fecha_y_hora_actual.getHours());        // 22
console.log(typeof fecha_y_hora_actual.getHours()); // 'number'

/* --------------------------------------------------------------- */

/* Ejemplo 7 - .getMinutes() Minuto Actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes */

console.log(fecha_y_hora_actual.getMinutes());        // 8
console.log(typeof fecha_y_hora_actual.getMinutes()); // 'number'

/* --------------------------------------------------------------- */

/* Ejemplo 8 - .getSeconds() Segundo Actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds */

console.log(fecha_y_hora_actual.getSeconds());        // 44
console.log(typeof fecha_y_hora_actual.getSeconds()); // 'number'

/* --------------------------------------------------------------- */

/* Ejemplo 9 - .getMilliseconds() Milisegundo actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds */

console.log(fecha_y_hora_actual.getMilliseconds());        // 136
console.log(typeof fecha_y_hora_actual.getMilliseconds()); // 'number'

/* --------------------------------------------------------------- */

/* Ejemplo 10 - .toString() Convertir a string fecha y hora actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String */

console.log(fecha_y_hora_actual);            // Sat Dec 16 2023 22:18:02 GMT-0500 (hora estándar de Colombia)
console.log(fecha_y_hora_actual.toString()); // 'Sat Dec 16 2023 22:18:02 GMT-0500 (hora estándar de Colombia)'
console.log(String(fecha_y_hora_actual));    // 'Sat Dec 16 2023 22:18:02 GMT-0500 (hora estándar de Colombia)'

/* --------------------------------------------------------------- */

/* Ejemplo 11 - .toLocaleString() Convertir a string fecha y hora actual dependiendo de la region
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

Lista de Idiomas BCP 47 en JavaScript:
https://www.techonthenet.com/js/language_tags.php */

console.log(fecha_y_hora_actual.toLocaleString('es-ES')); // '16/12/2023, 22:33:30'

/* --------------------------------------------------------------- */

/* Ejemplo 12 - .toDateString() Convertir a string fecha actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString */

console.log(fecha_y_hora_actual.toDateString()); // 'Sat Dec 16 2023'

/* --------------------------------------------------------------- */

/* Ejemplo 13 - .toLocaleDateString() Convertir a string fecha actual dependiendo de la region
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

Lista de Idiomas BCP 47 en JavaScript:
https://www.techonthenet.com/js/language_tags.php */

console.log(fecha_y_hora_actual.toLocaleDateString('en-US')); // '12/16/2023'

console.log(fecha_y_hora_actual.toLocaleDateString('es-ES')); // '16/12/2023'
console.log(fecha_y_hora_actual.toLocaleDateString());        // '16/12/2023'

/* --------------------------------------------------------------- */

/* Ejemplo 14 - .toTimeString() Convertir a string hora y formato de hora actual
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString */

console.log(fecha_y_hora_actual.toTimeString()); // '22:38:13 GMT-0500 (hora estándar de Colombia)'

/* --------------------------------------------------------------- */

/* Ejemplo 15 - .toLocaleTimeString() Convertir a string hora y formato de hora actual dependiendo de la region
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

Lista de Idiomas BCP 47 en JavaScript:
https://www.techonthenet.com/js/language_tags.php */

console.log(fecha_y_hora_actual.toLocaleTimeString('es-CO')); // '10:40:10 p. m.'

/* --------------------------------------------------------------- */

/* Ejemplo 16 - .getTimezoneOffset() Diferencia en minutos entre hora UTC y hora local
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset

https://en.wikipedia.org/wiki/Coordinated_Universal_Time */

console.log(fecha_y_hora_actual.getTimezoneOffset()); // 300
console.log(fecha_y_hora_actual);                     // Sat Dec 16 2023 21:13:14 GMT-0500 (hora estándar de Colombia)
//                                                                                   ↑

/* --------------------------------------------------------------- */

/* Ejemplo 17 - Fecha y hora actual en el Meridiano de Greenwich (UTC, Londres, Reino Unido)
https://youtu.be/aIHQsAjRLYU

Numero de dia del mes actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate */

console.log(fecha_y_hora_actual.getUTCDate()); // 19

/* Numero de dia de la semana actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay */

console.log(fecha_y_hora_actual.getUTCDay()); // 2

/* Numero de año actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear */

console.log(fecha_y_hora_actual.getUTCFullYear()); // 2023

/* Hora Militar Actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours */

console.log(fecha_y_hora_actual.getUTCHours()); // 2

/* Milisegundo actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds */

console.log(fecha_y_hora_actual.getUTCMilliseconds()); // 539

/* Minuto Actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes */

console.log(fecha_y_hora_actual.getUTCMinutes()); // 14

/* Numero de mes actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth */

console.log(fecha_y_hora_actual.getUTCMonth()); // 11

/* Segundo Actual en Londres, Reino Unido
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds */

console.log(fecha_y_hora_actual.getUTCSeconds()); // 18

/* --------------------------------------------------------------- */

/* Ejemplo 18 - Date.now()
https://youtu.be/aIHQsAjRLYU

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date

https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/High_precision_timing

https://en.wikipedia.org/wiki/Timestamp

Date.now() Numero de milisegundos
en el Meridiano de Greenwich (UTC, Londres, Reino Unido)
que han pasado desde la media noche del 1 de Enero de 1970 (marca temporal, timestamp)
hasta el tiempo actual

Este numero SIEMPRE va aumentar y va a ser diferente */

console.log(Date.now()); // 1702952724219

/* --------------------------------------------------------------- */

/* Ejemplo 19 - Crear objeto fecha
En MDN hay mas formatos para crear objeto fecha:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date */

const miCumple = new Date(1999, 6, 17);
console.log(miCumple);
// Sat Jul 17 1999 00:00:00 GMT-0500 (hora estándar de Colombia)
