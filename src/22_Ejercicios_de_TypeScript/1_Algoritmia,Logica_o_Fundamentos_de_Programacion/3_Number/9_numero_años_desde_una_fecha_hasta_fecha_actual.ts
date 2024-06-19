/*
IMPORTANTE ⚠️
No hace falta aprender el objeto Date en JS
ni operaciones con fechas en JS
porq ya existen librerias para esto:
- DayJS                https://day.js.org/
- MomentJS (obsoleto): https://momentjs.com/

Programa una función que 
dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy.

Numero de años desde una fecha hasta fecha actual

Ejemplo: miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

/* --------------------------------------------------- */

/*
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
 █ Solucion de Jon Mircha                           █
 █ https://youtu.be/WbJzfthCFrM?si=Rowy5es2ojw75ztB █
 ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ */

const calcularAnios = (fecha: Date): string => {
  // validar q fecha sea un objeto de tipo fecha Date
  if (!(fecha instanceof Date)) return '';

  // new Date() fecha actual
  // 2024-05-10T02:37:38.309Z

  // Tiempo Unix (Tiempo POSIX): new Date().getTime() milisegundo desde 1 de enero de 1970 hasta fecha actual
  // https://en.wikipedia.org/wiki/Unix_time
  // 1715308646718

  // new Date(1984, 4, 23)
  // 23 de mayo de 1984
  // año 1984, mes 4 mayo y dia 23
  // 1984-05-23T05:00:00.000Z

  // new Date(1984, 4, 23).getTime() milisegundos desde 1 de enero de 1970 hasta 23 de mayo de 1984
  // 454136400000

  // Restar: fecha actual MENOS fecha q tiene como parametro de funcion
  // el resultado es en milisegundos
  let hoyMenosFecha: number = new Date().getTime() - fecha.getTime();

  // 1000 milisegundos         = 1 segundo
  // 60 segundos               = 1 minuto
  // 1 hora                    = 60 minutos
  // 24 horas                  = 1 dia
  // 365 dias                  = 1 año NO bisiesto
  // 1000 * 60 * 60 * 24 * 365 = un año tiene  86400000 milisegundos
  let aniosEnMilisegundos: number = 1000 * 60 * 60 * 24 * 365;

  // Math.round() Redondear al número ENTERO MAS CERCANO
  let aniosHumanos: number = Math.round(hoyMenosFecha / aniosEnMilisegundos);

  // Año presente (en q estoy actualmente)
  // https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
  const anioActual: number = new Date().getFullYear();

  const anioIngresadoComoParametro: number = fecha.getFullYear();

  // aniosHumanos es negativo
  if (Math.sign(aniosHumanos) === -1) {
    return `❌ Error: El año ingresado ${anioIngresadoComoParametro} es del futuro, desde año actual ${anioActual} hasta ${anioIngresadoComoParametro} faltan ${Math.abs(
      Math.round(aniosHumanos)
    )} años`;

  // aniosHumanos es positivo
  } else if (Math.sign(aniosHumanos) === 1) {
    return `✅ Han pasado ${aniosHumanos} años, desde ${anioIngresadoComoParametro} hasta año actual ${anioActual}`;

  // aniosHumanos es cero
  } /*if (Math.sign(aniosHumanos) === 0)*/ else {
    return `❌ Error: El año ingresado es el actual ${anioActual}`;
  }
};

calcularAnios(new Date(1984, 4, 23)); // '✅ Han pasado 40 años, desde 1984 hasta año actual 2024'

calcularAnios();                      // ''
calcularAnios('hola mundo');          // ''
calcularAnios(new Date());            // '❌ Error: El año ingresado es el actual 2024'
calcularAnios(new Date(2084, 4, 23)); // '❌ Error: El año ingresado 2084 es del futuro, desde año actual 2024 hasta 2084 faltan 60 años'
