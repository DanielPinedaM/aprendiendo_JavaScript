/* Tutorial: https://youtu.be/Q9fwkpxr3Dw */

/* 
alert(); mensaje en ventana emergente cuando se...
- Carga la pagina web por primera vez
- Re-carga la pagina web  
*/
/* alert("hola mundo"); */

let nombre = "Daniel PM";
let altura = 100;
/* let altura = 99; */
let concatenar = "mi nombre es " + nombre + ", mido " + altura + "cm";

/* seleccionar etiquetas HTML con el ID */
let datos = document.getElementById("datos"); /* <p id="datos"></p> */
let numeros = document.getElementById("numeros");

/* insertar HTML desde JS */
document.write(concatenar + " document.write();"); /* esto es MALA PRACTICA porq inserta el texto SIN ninguna etiqueta HTML, ignora el HTML Semántico */

datos.innerHTML = concatenar + " innerHTML";

/* Plantillas literales o de cadenas (Template literals, Template strings) $ {} */
datos_2.innerHTML = `
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
if (altura>=100) {
    datos.innerHTML += ' altura>=100';
} else {
    datos.innerHTML += ' altura<100';
}

/* FOR */
for (let i = 1; i<=10; i++) {
    numeros.innerHTML += "i = " + i + "<br>";
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


/* tipos de datos */
/**
 * @param {string} parametro_3
 * @param {string} parametro_4
 */
function funcion_2(parametro_3, parametro_4) {
    let funcion = document.getElementById("funcion");
    let concatenar_3 = parametro_3 + " " + parametro_4;

    let prueba = funcion.innerHTML = `
    se ha llamado la funcion_2()
    <br>
    ${concatenar_3}
    `;

    return prueba;
}

/* funcion q llama a otra funcion */
function llamar_funcion_2() {
    funcion_2("hola", "mundo");
}

llamar_funcion_2();

/* LISTAS (ARRAYS) */
let lista = ["HOLA" ,"mundo", 1, 2, 3];

console.log("\nNumero total de posiciones del Array " + lista.length);

console.log("\nAcceder a una posicion del Array en especifico")
console.log(lista[0]); /* posicion 0 = primera posicion */
console.log(lista[1]);

console.log("\nRecorrer Array usando...");
console.log("Bucle for")
for (let j = 0;  j<lista.length; j++) {
    const element = lista[j];
    console.log("elemento = " + element);
}

console.log("\nforEach");
lista.forEach(lista => {
    console.log(lista);
});
