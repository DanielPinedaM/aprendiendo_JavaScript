// @ts-nocheck
/* Tutorial: https://youtu.be/Q9fwkpxr3Dw */

/* alert(); mensaje en ventana emergente cuando se...
1) Carga la pagina web por primera vez
2) Re_carga la pagina web */
alert('hola mundo');

const nombre = 'Daniel PM';
const altura = 100;
/* const altura = 99; */
const concatenar = `mi nombre es ${nombre}, mido ${altura}cm`;

/* seleccionar etiquetas HTML con el ID */
const datos = document.getElementById('datos'); /* <p id="datos"></p> */
const datos2 = document.getElementById('datos2');
const numeros = document.getElementById('numeros');

/* insertar HTML desde JS */

/* esto es MALA PRACTICA porq inserta
el texto SIN ninguna etiqueta HTML, ignora el HTML Semántico */
document.write(`${concatenar} document.write();`);

datos.innerHTML = `${concatenar} innerHTML`;

/* Plantillas literales o de cadenas (Template literals, Template strings) $ {} */
datos2.innerHTML = `
<p>soy un parrafo p insertado desde JS con inner.HTML</p>
<p>Mi nombre es: ${nombre} inner.HTML</p>
<p>Mido: ${altura} cm inner.HTML</p>
`;

/* estructuras de control */

/* IF ELSE */
/* ESTO... */
/*
if (altura>=100) {
    datos.innerHTML= `
    <p>${concatenar} altura>=100 innerHTML</p>
    `;
} else {
    datos.innerHTML = `
    <p>${concatenar} altura<100 innerHTML</p>
    `;
}
*/

/* es lo mismo q esto: */
if (altura >= 100) {
  datos.innerHTML += ' altura>=100';
} else {
  datos.innerHTML += ' altura<100';
}

/* FOR */
//
for (let i = 1; i <= 10; i++) {
  numeros.innerHTML += `i = ${i}<br>`;
}

/* FUNCIONES */
/*
function funcion(parametro_1, parametro_2) {
    let funcion = document.getElementById("funcion");
    let concatenar_2 = parametro_1 + " " + parametro_2;

    funcion.innerHTML = `
    se ha llamado la funcion()
    <br>
    ${concatenar_2}
    `;
}

funcion("hola", "mundo");
*/

function funcion_2(parametro_3, parametro_4) {
  const funcion = document.getElementById('funcion');
  const concatenar_3 = `${parametro_3} ${parametro_4}`;

  const prueba = (funcion.innerHTML = `
    se ha llamado la funcion_2()
    <br>
    ${concatenar_3}
    `);

  return prueba;
}

/* funcion q llama a otra funcion */
function llamar_funcion_2() {
  funcion_2('hola', 'mundo');
}

llamar_funcion_2();

/* LISTAS (ARRAYS) */
const lista = ['HOLA', 'mundo', 1, 2, 3];

console.log(`\nNumero total de posiciones del Array ${lista.length}`);

console.log('\nAcceder a una posicion del Array en especifico');
console.log(lista[0]); /* posicion 0 = primera posicion */
console.log(lista[1]);

console.log('\nRecorrer Array usando...');
console.log('Bucle for');
for (let j = 0; j < lista.length; j++) {
  const element = lista[j];
  console.log(`elemento = ${element}`);
}

console.log('\nforEach');
lista.forEach((lista) => {
  console.log(lista);
});
