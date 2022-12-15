// @ts-nocheck

/* Tutorial:
https://youtu.be/fCvuOyVXUUQ

Documentacion Oficial - .filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

.filter() hace lo siguiente:
1) Itera (recorre) el array

2) Crea (copia) un nuevo array2
   a partir de uno existente array1

3) Elimina en el array2 copiado
   los elementos del array1
   que NO cumplen con la condicion de la funcion return

Su sintaxis es:

Donde...
-
Es el nombre del metodo
*/

/* ----------------------------------------------------- */

/* Ejemplo 1 */

// En el array1 hay 3 cuadrados ['■']
const array1 = ['■', '■', '■', '●'];
console.log(array1);
// (4) ['■', '■', '■', '●']

/* .filter() Crear un array2
solamente con los cuadrados '■' de array1
y eliminar las otras figuras q NO sean cuadrados */
const array2 = array1.filter((elemento) => elemento === '■');
console.log(array2);
// (3) ['■', '■', '■']

/* ----------------------------------------------------- */

/* Ejemplo 2 - FILTRAR los numeros pares de un array  */

// Array con numeros impares y pares
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
// (11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* Crear una copia del array numeros
q ELIMINE los numeros IMPARES
y solamente GUARDE los numeros PARES */
const par = numeros.filter((elemento) => elemento % 2 === 0);
console.log(par);
// (6) [0, 2, 4, 6, 8, 10]

/* ----------------------------------------------------- */

/* Ejemplo 3 - Recorrer (Iterar) Array Usando .filter() */

const figuras = ['▲', '●', '✖', '■'];
console.log(figuras);
// (4) ['▲', '●', '✖', '■']

/* copiar array llamado figuras
a otro array llamado iterar */
const iterar = figuras.filter((elemento, i) => {
  console.log(`i = ${i} / elemento = '${elemento}'`);

  /* .filter() agrega al array iterar los elementos q cumplen con la condicion
  como siempre se retorna verdadero return true
  entonces .filter() agrega todos los elementos */
  return true;
});
/*
i = 0 / elemento = '▲'
i = 1 / elemento = '●'
i = 2 / elemento = '✖'
i = 3 / elemento = '■'
*/

console.log(iterar);
// (4) ['▲', '●', '✖', '■']

/* ----------------------------------------------------- */
