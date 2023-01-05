/*
Tutorial La Cocina del Codigo - Elevación (Hoisting)
https://youtu.be/uI6o97A4IrI
*/

/* Ejemplo 1 - Elevación de var SIN Par de Llaves {...} */

/* ESTO... */
/* console.log(saludar);  */        /* undefined */
/* var saludar = 'hola mundo'; */

/* console.log(saludar); */         /* hola mundo */

/* Es lo mismo q esto: */
var saludar; /* la variable var se "eleva" y NO tiene un dato definido por eso su valor es undefined */
console.log(saludar); /* undefined */

saludar = 'hola mundo';
console.log(saludar); /* hola mundo */

/* ---------------------------------- */
/* Ejemplo 2 - var Dentro de una Funcion: */

/* ESTO... */
/*
var numeros1 = function () {
  var array = [1, 2, 3];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log('elemento array =', element);

    if (element === 1) {
      var uno = 'numero uno';
      console.log(uno);
    } else {
      console.log('numero diferente de 1');
    }
    console.log('\n');
  }

  console.log('ultimo valor de...');
  console.log('element =', element);
  console.log('i =', i);
  console.log('array[i]', array[i]);
};

numeros1();
*/

/* es lo mismo q esto */
var numeros2 = function () { /* expresión de funcion */
  var array = [1, 2, 3]; /* inicializar variable array */

  /* declaracion (definicion) de variables */
  var i;
  var element;
  var uno;

  /* inicializar variables i, element, uno */
  for (i = 0; i < array.length; i++) {
    element = array[i];
    console.log('elemento array =', element);

    if (element === 1) {
      uno = 'numero uno';
      console.log(uno);
    } else {
      console.log('numero diferente de 1');
    }
    console.log('\n');
  }

  /* var define variables globales
  puedo acceder a las variables desde CUALQUIER parte de la funcion
  este es el ultimo valor q tuvieron las variables */
  console.log('ultimo valor de...');
  console.log('element =', element);  /* 3 */
  console.log('i =', i);              /* 3 */
  console.log('array[i]', array[i]);  /* undefined */
};

numeros2();
/* 
elemento array = 1
numero uno

elemento array = 2
numero diferente de 1

elemento array = 3
numero diferente de 1
*/

/* ---------------------------------- */
/* 
Las variables var 
que se elevan devuelven un valor de undefined. 
Entonces, incluso si declara e inicializa 
después de usar o hacer referencia a esta variable, 
aún devuelve undefined
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting

Ejemplo 3 - var Devuelve undefined
El siguiente código 
si ejecuta en la consola de JS del navegador, 
los errores que ves son de ESLint.

En el if () {} estoy preguntando 
¿la variable x ha sido definida? 
y después la defino, 
el resultado NO es un error,
el resultado es que 
x no ha sido definida x = undefinded

Esto sucede debido a que 
var “flota” (elevación / hoisting), 
primero estoy haciendo uso de la variable x en el if () {} 
y después la estoy definido
*/

/* Primero uso la variable x  */
if (x === undefined) {
  console.log('x =', x);
}

/* y despues inicializo la variable X */
var x = 3;

/* x = undefined */
