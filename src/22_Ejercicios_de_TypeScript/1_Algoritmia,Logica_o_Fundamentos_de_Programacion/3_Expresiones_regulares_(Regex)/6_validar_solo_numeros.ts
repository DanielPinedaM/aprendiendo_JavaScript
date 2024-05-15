/* 
Usar typeof y Number.isNaN() para validar 
si el parametro de una funcion 
es o no un numero

Si el parametro es NaN
devolver false
*/

const admitirSoloNumeros = (numero: number): boolean => typeof numero === 'number' && Number.isNaN(numero) === false;

admitirSoloNumeros(123);                // true

// NO es un numero
admitirSoloNumeros('hola mundo');       // false
admitirSoloNumeros(Symbol('id'));       // false
admitirSoloNumeros(undefined);          // false
admitirSoloNumeros(null);               // false
admitirSoloNumeros(NaN);                // false
admitirSoloNumeros(BigInt(999));        // false
admitirSoloNumeros(true);               // false
admitirSoloNumeros(false);              // false
admitirSoloNumeros([1, 2, 3]);          // false
admitirSoloNumeros({ uno: 1, dos: 2 }); // false

/* --------------------------------------------------- */

/* 
Crear expresion regular para validar 
si el parametro es o no un numero

1) permitir q el parametro sea un string ó un number

2) si parametero es un string,
ignorar espacios en blanco al princicipio y final .trim()

3) Si el parametro es NaN
devolver false

https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers
*/

const admitirSoloNumeros2 = (numero: number | string): boolean => {
  if (typeof numero === 'number' && Number.isNaN(numero) === false) return true;

  if (typeof numero === 'string') return /^\d+$/.test(numero.trim());

  return false;
};

admitirSoloNumeros2(' 123 ');            // true
admitirSoloNumeros2(123);                // true

// NO es un string
admitirSoloNumeros2(Symbol('id'));       // ❌ ERROR TypeError: Cannot convert a Symbol value to a string
admitirSoloNumeros2(undefined);          // false
admitirSoloNumeros2(null);               // false
admitirSoloNumeros2(NaN);                // false
admitirSoloNumeros2(BigInt(999));        // false
admitirSoloNumeros2(true);               // false
admitirSoloNumeros2(false);              // false
admitirSoloNumeros2([1, 2, 3]);          // false
admitirSoloNumeros2({ uno: 1, dos: 2 }); // false
