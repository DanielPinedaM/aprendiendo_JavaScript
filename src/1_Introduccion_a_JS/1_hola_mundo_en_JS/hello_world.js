/* Mensaje por consola del navegador */
console.log('hola mundo CONSOLA (TERMINAL)');

/* Seleccionando un elemento (etiqueta) del DOM */
const hola_mundo = document.getElementById('hola_mundo');
hola_mundo.textContent = 'hola mundo DOM';

/* agrega texto al final del HTML,
NO usa etiquetas */
document.write('hola mundo AL FINAL DEL .html');

/* muestra ventana emergente q dice Aceptar */
alert('hola mundo VENTANA EMERGENTE');

/* Muestra un mensaje y permite escribir algo (datos de entrada) */
prompt('hola mundo', 'escribe un mensaje');

/* Pregunta con opcion de respuesta Aceptar ó Cancelar  */
const pregunta = window.confirm('¿hola mundo?');
console.log(pregunta);
