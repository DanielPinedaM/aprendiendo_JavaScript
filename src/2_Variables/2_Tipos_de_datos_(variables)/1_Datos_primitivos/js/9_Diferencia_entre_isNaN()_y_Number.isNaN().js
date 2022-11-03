/* eslint-disable no-multi-spaces */

/* Stack Overflow - Diferencia entre isNaN() y Number.isNaN()
https://stackoverflow.com/questions/33164725/confusion-between-isnan-and-number-isnan-in-javascript */

// string
// 1) isNaN() convierte el dato a tipo number
console.log(Number('hola mundo'));       // NaN

/* 2) Como después de convertir
el tipo de dato string 'hola mundo'
a number da como resultado NaN
entonces devuelve true */
console.log(isNaN('hola mundo'));        // true

/* Number.isNaN() se pregunta ¿el dato es un numero number?,
a lo que responde que NO false,
en otras palabras los string NO son NaN  */
console.log(Number.isNaN('hola mundo')); // false

console.log(isNaN('1'));                 // false (string '1' se convierte a number 1 que no es NaN)
console.log(Number.isNaN('1'));          // false

// string '1.1' con punto
console.log(isNaN('1.1'));               // false
console.log(Number.isNaN('1.1'));        // false

// string '1,1' con coma
console.log(isNaN('1,1'));               // true
console.log(Number.isNaN('1,1'));        // false

// tipo string con numeros y letras
console.log(isNaN('123ABC'));            // true parseInt("123ABC") es 123 pero Number("123ABC") es NaN
console.log(Number.isNaN('123ABC'));     // false

// espacio en blanco
console.log(Number.isNaN(' '));          // false
console.log(Number.isNaN(' '));          // false

// string vacio
console.log(isNaN(''));                  // false los string vacios convierten en 0, que no es NaN
console.log(Number.isNaN(''));           // false

// number
console.log(isNaN(1));                   // false
console.log(Number.isNaN(1));            // false

// BigInt
console.log(isNaN(1n));                  // ERROR (TypeError): no se puede convertir de tipo BigInt() a number
console.log(Number.isNaN(1n));           // false

// undefined
console.log(isNaN(undefined));           // true
console.log(Number.isNaN(undefined));    // false

// null
console.log(isNaN(null));                // false
console.log(Number.isNaN(null));         // false

// NaN es lo mismo q NaN
console.log(isNaN(NaN));                 // true
console.log(Number.isNaN(NaN));          // true

// = []; Arreglos (Arrays, Listas)
console.log(isNaN([]));                  // false
console.log(Number.isNaN([]));           // false

// = {}; Objetos (Diccionarios)
console.log(isNaN({}));                  // true
console.log(Number.isNaN({}));           // false (los objetos NO son de tipo NaN)

// Booleano
console.log(isNaN(true));                // false
console.log(Number.isNaN(true));         // false

console.log(isNaN(false));               // false
console.log(Number.isNaN(false));        // false

console.log(isNaN(Boolean()));           // false
console.log(Number.isNaN(Boolean()));    // false

// new Date
console.log(isNaN(new Date()));          // false
console.log(Number.isNaN(new Date()));   // false

// Mezclando isNaN() y Number.isNaN()
console.log(isNaN());                      // true
console.log(Number.isNaN());               // false

console.log(isNaN(isNaN()));               // false
console.log(Number.isNaN(Number.isNaN())); // false

console.log(isNaN(Number.isNaN()));        // false
console.log(Number.isNaN(isNaN()));        // false
