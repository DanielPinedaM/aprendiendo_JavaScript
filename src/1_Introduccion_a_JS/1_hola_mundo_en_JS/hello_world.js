/* JavaScript Info - alert(); prompt(); confirm();
https://javascript.info/alert-prompt-confirm */

/* Mensaje por consola del navegador */
console.log('hola mundo CONSOLA (TERMINAL)');

/* Seleccionando un elemento (etiqueta) del DOM */
const hola_mundo = document.getElementById('hola_mundo');
hola_mundo.textContent = 'hola mundo DOM';

/* agrega texto al final del HTML,
NO usa etiquetas */
document.write('hola mundo AL FINAL DEL .html');

/* Muestra ventana emergente q da la opción Aceptar */
alert('hola mundo VENTANA EMERGENTE');

/* Muestra ventana emergente con un mensaje,
permite escribir algo (datos de entrada),
da las opciones de Aceptar y Cancelar
prompt(mensaje, valor por defecto dato de entrada); */
const mensaje = prompt('hola mundo', 'escribe un mensaje'); /* guardar mensaje en una variable */
console.log(mensaje);

/* Pregunta que da las opciones de Aceptar y Cancelar  */
const pregunta = window.confirm('¿hola mundo?'); /* guardar respuesta a la pregunta en una variable */
console.log(pregunta);
